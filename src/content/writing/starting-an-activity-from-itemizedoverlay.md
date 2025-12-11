---
title: "Starting an Activity from ItemizedOverlay"
description: "

I while back I wanted to be able to start an Activity from a class that extended ItemizedOverlay. Since ItemizedOverlay does not extend Activity I c..."
pubDate: 2011-01-16T05:00:00.000Z
---

<div class="post-snippet snippet-container r-snippet-container">
<div class="snippet-item r-snippetized">
I while back I wanted to be able to start an Activity from a class that extended ItemizedOverlay. Since ItemizedOverlay does not extend Activity I couldn't call startActivity() in order to start a new Activity when the onTap() method is executed.   So after much searching on the internet I found my answer. Only thing is I don't have enough "reputation" on stackoverflow to vote up this particular answer.   Simply calling Context.startActivity(Bundle myBundle); did the job!   I was following the example here:&nbsp; Hello MapView   Original post:&nbsp; StackOverflow post
</div>
<a class="snippet-fade r-snippet-fade" href="https://todddeland.blogspot.com/2011/01/starting-activity-from-itemizedoverlay.html"></a>
</div>
