---
title: "mssql search entire catalog"
description: "

Found this great stored procedure at http://vyaskn.tripod.com/search_all_columns_in_all_tables.htm --To search all columns of all tables in a databa..."
pubDate: 2008-10-21T04:00:00.000Z
---

<div class="post-snippet snippet-container r-snippet-container">
<div class="snippet-item r-snippetized">
Found this great stored procedure at http://vyaskn.tripod.com/search_all_columns_in_all_tables.htm --To search all columns of all tables in a database for the keyword "Computer" EXEC SearchAllTables 'Computer' GO Here is the complete stored procedure code: CREATE PROC SearchAllTables ( @SearchStr nvarchar(100) ) AS BEGIN -- Copyright © 2002 Narayana Vyas Kondreddi. All rights reserved. -- Purpose: To search all columns of all tables for a given search string -- Written by: Narayana Vyas Kondreddi -- Site: http://vyaskn.tripod.com -- Tested on: SQL Server 7.0 and SQL Server 2000 -- Date modified: 28th July 2002 22:50 GMT CREATE TABLE #Results (ColumnName nvarchar(370), ColumnValue nvarchar(3630)) SET NOCOUNT ON DECLARE @TableName nvarchar(256), @ColumnName nvarchar(128), @SearchStr2 nvarchar(110) SET&nbsp; @TableName = '' SET @SearchStr2 = QUOTENAME('%' + @SearchStr + '%','''') WHILE @TableName IS NOT NULL BEGIN SET @ColumnName = ...
</div>
<a class="snippet-fade r-snippet-fade" href="https://todddeland.blogspot.com/2008/10/mssql-search-entire-catalog.html"></a>
</div>
