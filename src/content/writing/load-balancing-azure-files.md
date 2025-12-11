---
title: "Load Balancing Azure Files"
description: "This proved to be difficult to find information on, so here’s a step-by-step guide to load balancing an Azure File SMB share across two IaaS web serve..."
pubDate: 2015-05-12T20:38:27.000Z
---

This proved to be difficult to find information on, so here’s a step-by-step guide to load balancing an Azure File SMB share across two IaaS web servers, in IIS.

### Storage Account Setup

*   Be sure to sign up for Azure Files preview in the EA portal, it isn’t available by default as of this writing. Also, do it **_before_** creating the storage account, or it won’t be available.

Once you have access to Azure Files, in your storage account you’ll see it listed like in this screenshot.

![](https://cdn-images-1.medium.com/max/645/0*Fba0H4I8iF01l6R8.PNG)

Hop on over to the Preview Portal to create the ‘share’, clicking on the storage account you’ll see this button in the next vertical blade. I named my share ‘assets’.

![](https://cdn-images-1.medium.com/max/563/0*SnaoIlcbE40Q3VZH.PNG)

Cool. Now you have a SMB share. Such as mine, [https://atlassetstor01.file.core.windows.net/assets](https://atlassetstor01.file.core.windows.net/assets)

First up, you can simply try to open the SMB share via Windows Explorer, like so. Just to test things out. Oh! The Storage Account and the VM must be in the same region (but you probably knew that).

![](https://cdn-images-1.medium.com/max/824/0*7RLGtqj7s1yz7dAy.PNG)

Username: \[storage account name\]  
Password: \[storage account key\]

Be sure that it’s not trying to use your domain, if the VM is joined to one. A leading backslash (\\) will take care of that.

### Persistent authentication

So the auth is kind of a mess. Azure Files doesn’t support domain accounts, and you can’t change the permissions of the files in the share. Essentially what we are going to do next, is ‘spoof’ the credentials with a local user account on each VM.

*   Create a local user on the VM, with the name of the storage account. For me, this was ‘atlassetstor01’. We’re going to end up running the IIS site as this user, so it has access.
*   Set the password for the user to the storage account key.

![](https://cdn-images-1.medium.com/max/698/0*XW-KFuyiZIJAn64P.PNG)

Since we aren’t going to really use this user, other than for IIS, we need to set the authentication to be persistent, so it works between reboots.

First for your current account. This is so we can see things in IIS Manager. Open Powershell as an Admin. We’ll do these same steps here again, but running as the ‘spoof’ user. I got this part from [here](http://blogs.msdn.com/b/windowsazurestorage/archive/2014/05/27/persisting-connections-to-microsoft-azure-files.aspx)

*   Type cmdkey /list this shows any saved credentials for the currently logged in user (your account), if any.
*   Type cmdkey /add:\[storageaccountname\].file.core.windows.net /user:\[storageaccountname\] /pass:\[storageaccountkey\] to save the credentials for _your_ account. You’ll do this again later, for the local user we created (atlassetstor01).
*   Type net use to have a look at what network drives are mounted.
*   Type net use F: \\\\\[storageaccountname\].file.core.windows.net\\\[sharename\] to mount the share as a network drive.

Now for the ‘spoof’ local user we created. You have to ‘runas’ that user and issue the same above commands.

*   Type into powershell runas /user:\[storageaccountname\] cmd.exe This runs the cmd.exe process as that local user. It’ll prompt you for the password, which you should have set to be the storage account key. If all works, a new command prompt should open.
*   Run those above commands, now as the local ‘spoof’ user (the storage account name).

![](https://cdn-images-1.medium.com/max/684/0*l-5xcU3W3BQcuApm.PNG)

### Setting up IIS

In IIS we will create a new website, using a new application pool, and a virtual directory in which the location is the Azure Files SMB share. Get ready for some cool.

*   Open up IIS Manager
*   Create a new WebSite, with the default/vanilla settings. The important part is the Virtual Directory (for me at least). I’m using [imageresizer](http://imageresizing.net/) for a dynamic image server, so the root of the site is for that application (see screenshot below).
*   Once the site is created, add a virtual directory, specifying the Azure Files Share as the source
*   The ‘connect as’ is **_super_** important. Set this as the local ‘spoof’ user we created (the storage account name).

![](https://cdn-images-1.medium.com/max/724/0*UkBNR8_-VIVRXbsG.PNG)

*   If all works well, when you try to expand the Virtual Directory, it should expand or show an error. If there’s an authentication error, its because **YOUR** account doesn’t have the authentication remembered (cmdkey). Remember, IIS Manager is running with your context, not the one we just put in (that is used when serving requests).
*   Switch over to the Application Pools
*   Set the Identity to run under, as the new ‘spoof’ user.

![](https://cdn-images-1.medium.com/max/940/0*oC2VxNBk7JSlvCgR.PNG)

Rinse. Repeat for each server in the Load Balance Pool.

Good luck!

_Originally published at_ [_todddeland.com_](http://todddeland.com/2015/05/12/load-balancing-azure-files/) _on May 12, 2015._

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=da6c9cf65276)
