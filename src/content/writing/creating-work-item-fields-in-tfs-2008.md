---
title: "Creating Work Item Fields in TFS 2008"
description: "




Yesterday I was expanding the capability of the data our team captures in TFS (Team Foundation Server). In doing so, we wanted to add new fields ..."
pubDate: 2012-02-03T05:00:00.000Z
---

<div class="snippet-thumbnail">
<img alt="Image" sizes="(max-width: 800px) 20vw, 128px" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOgReg1sretFKzRYQ29QrpIqoaWUQ75IhJ1m0R_9WencFNOqYl4BJb9x2BzSg6q6BXbdetah63YSQwH_NNqmQMxSJs-FacENRmnYBogjSMLFfebsyyUHJ0u2q2wfBCHyIRuusryjr1M-k/s400/open+work+item+type.png" srcset="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOgReg1sretFKzRYQ29QrpIqoaWUQ75IhJ1m0R_9WencFNOqYl4BJb9x2BzSg6q6BXbdetah63YSQwH_NNqmQMxSJs-FacENRmnYBogjSMLFfebsyyUHJ0u2q2wfBCHyIRuusryjr1M-k/w32-h32-p-k-no-nu/open+work+item+type.png 32w, https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOgReg1sretFKzRYQ29QrpIqoaWUQ75IhJ1m0R_9WencFNOqYl4BJb9x2BzSg6q6BXbdetah63YSQwH_NNqmQMxSJs-FacENRmnYBogjSMLFfebsyyUHJ0u2q2wfBCHyIRuusryjr1M-k/w64-h64-p-k-no-nu/open+work+item+type.png 64w, https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOgReg1sretFKzRYQ29QrpIqoaWUQ75IhJ1m0R_9WencFNOqYl4BJb9x2BzSg6q6BXbdetah63YSQwH_NNqmQMxSJs-FacENRmnYBogjSMLFfebsyyUHJ0u2q2wfBCHyIRuusryjr1M-k/w128-h128-p-k-no-nu/open+work+item+type.png 128w, https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOgReg1sretFKzRYQ29QrpIqoaWUQ75IhJ1m0R_9WencFNOqYl4BJb9x2BzSg6q6BXbdetah63YSQwH_NNqmQMxSJs-FacENRmnYBogjSMLFfebsyyUHJ0u2q2wfBCHyIRuusryjr1M-k/w256-h256-p-k-no-nu/open+work+item+type.png 256w">
</div>
<div class="post-snippet snippet-container r-snippet-container">
<div class="snippet-item r-snippetized">
Yesterday I was expanding the capability of the data our team captures in TFS (Team Foundation Server). In doing so, we wanted to add new fields and a form to our existing TFS work items. Creating new fields, which can end up being used for reporting, was not as intuitive as I first thought, but turned out to be fairly easy! Let's take a look:     1) Open your work item type to modify, I created a copy (export) and then imported it for a test bed.        2) Add your new fields on the "Fields" tab. In the 'Ref Name' column, enter a unique name. This is the step that I couldn't find much info on the internet about.        3) Add that new field to your form (new or existing) on the Layout tab, by adding a new control.      4) Preview the form!     I hope this helps someone out there, let me know if you have questions in the comments!
</div>
<a class="snippet-fade r-snippet-fade" href="https://todddeland.blogspot.com/2012/02/creating-work-item-fields-in-tfs-2008.html"></a>
</div>
