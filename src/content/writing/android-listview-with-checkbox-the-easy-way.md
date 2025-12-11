---
title: "Android ListView with CheckBox - The easy way"
description: "




After MUCH  Googling for a simple way to add a checkbox to a listview, I finally found an example in the ApiDemos that come with the SDK.   If yo..."
pubDate: 2012-01-08T05:00:00.000Z
---

<div class="snippet-thumbnail">
<img alt="Image" sizes="(max-width: 800px) 20vw, 128px" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjprDNKyJFs_TEPfG4mLXWh3Wjz5KTJM149gNH6HT2Fu2gG-jiSfjOVxDhfV27sDETNHyEK4ZlvEgvZKBiVMhYCtWp44yu0gKH8ZIoRxJ3HyuuC_El3xp7LW0UlT0JkDNzZkv2mhkNBh00/s320/starterActivity-checked.png" srcset="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjprDNKyJFs_TEPfG4mLXWh3Wjz5KTJM149gNH6HT2Fu2gG-jiSfjOVxDhfV27sDETNHyEK4ZlvEgvZKBiVMhYCtWp44yu0gKH8ZIoRxJ3HyuuC_El3xp7LW0UlT0JkDNzZkv2mhkNBh00/w32-h32-p-k-no-nu/starterActivity-checked.png 32w, https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjprDNKyJFs_TEPfG4mLXWh3Wjz5KTJM149gNH6HT2Fu2gG-jiSfjOVxDhfV27sDETNHyEK4ZlvEgvZKBiVMhYCtWp44yu0gKH8ZIoRxJ3HyuuC_El3xp7LW0UlT0JkDNzZkv2mhkNBh00/w64-h64-p-k-no-nu/starterActivity-checked.png 64w, https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjprDNKyJFs_TEPfG4mLXWh3Wjz5KTJM149gNH6HT2Fu2gG-jiSfjOVxDhfV27sDETNHyEK4ZlvEgvZKBiVMhYCtWp44yu0gKH8ZIoRxJ3HyuuC_El3xp7LW0UlT0JkDNzZkv2mhkNBh00/w128-h128-p-k-no-nu/starterActivity-checked.png 128w, https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjprDNKyJFs_TEPfG4mLXWh3Wjz5KTJM149gNH6HT2Fu2gG-jiSfjOVxDhfV27sDETNHyEK4ZlvEgvZKBiVMhYCtWp44yu0gKH8ZIoRxJ3HyuuC_El3xp7LW0UlT0JkDNzZkv2mhkNBh00/w256-h256-p-k-no-nu/starterActivity-checked.png 256w">
</div>
<div class="post-snippet snippet-container r-snippet-container">
<div class="snippet-item r-snippetized">
After MUCH  Googling for a simple way to add a checkbox to a listview, I finally found an example in the ApiDemos that come with the SDK.   If your looking for this end outcome, then read on.     Auto Uploader   The "Enabled" with CheckBox above is actually a ListView, within a regular Activity, with just one item in the list.   First, simply add the ListView to your xml layout (main.xml):    &lt; ListView   &nbsp; &nbsp; &nbsp; &nbsp; android:id = "@+id/listView1"   &nbsp; &nbsp; &nbsp; &nbsp; android:layout_width = "match_parent"   &nbsp; &nbsp; &nbsp; &nbsp; android:layout_height = "wrap_content"  &gt;   &lt;/ ListView &gt;    Second, in your Activity, define a String[] of items (just one for me), and wire up the ListView into a variable. List so in my onCreate():     ListView listView1 ;   String[] listItems  = { "Enabled"  };     listView1  = (ListView)findViewById(R.id. listView1 );       listView1 .setAdapter( new  ArrayAdapter&lt;String&gt;( this , android.R.layout. simple_list_...
</div>
<a class="snippet-fade r-snippet-fade" href="https://todddeland.blogspot.com/2012/01/android-listview-with-checkbox-easy-way.html"></a>
</div>
