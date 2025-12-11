---
title: "Specified Cast is Invalid - Telerik RadGrid asp:CheckBox"
description: "

Great solution to the \"specified cast is invalid\" problem while binding an asp.net CheckBox control inside of an Telerik RadGrid FormTemplate.   ASP..."
pubDate: 2009-06-30T04:00:00.000Z
---

<div class="post-snippet snippet-container r-snippet-container">
<div class="snippet-item r-snippetized">
Great solution to the "specified cast is invalid" problem while binding an asp.net CheckBox control inside of an Telerik RadGrid FormTemplate.   ASP.NET Classic Controls -  Grid Forum - asp:Checkbox in FormTemplate. "Specified Cast is Invalid" .   From Fabian Schulz:  I ran across the same problem and have created a simple solution, which is most easy to use:   Create a usercontrol with the following code:   myCheckbox.ascx:   myCheckbox.ascx.cs:  public partial class Controls_myCheckBox : System.Web.UI.UserControl  {   private bool m_checked = false;   public object Checked  {  get { return m_checked; }  set  {  if (value.GetType() == DBNull.Value.GetType())  m_checked = false;  else if (value == null)  m_checked = false;  else if (value.GetType() == typeof(bool))  m_checked = (bool)value;  else  m_checked = false;  }  }   protected void Page_Load(object sender, EventArgs e)  {  m_checked = CheckBox1.Checked;  }      protected void Page_PreRender()  {  CheckBox1.Ch...
</div>
<a class="snippet-fade r-snippet-fade" href="https://todddeland.blogspot.com/2009/06/specified-cast-is-invalid-telerik.html"></a>
</div>
