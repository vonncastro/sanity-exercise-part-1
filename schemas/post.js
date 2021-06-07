export default {

name: "post",
title: "Blog Post",
type: "document",
fields: [
    {
	name: "title",
	title: "Title",
	type: "string"
    },
    {
    	name: "slug",
    	title: "slug",
    	type: "slug",
    	options: 
    	{
    		source: "title",
    		maxLength: 100
    	}
    },
    {
    	name: "publishedDate",
    	title: "Published Date",
    	type: "datetime",
    	options: {
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm',
    
    calendarTodayLabel: 'Today'
  }
    },
    {
    	name: "banner",
    	title: "Banner",
    	type: "image",
    	options: {
    		hotspot: true
    	}
    },
    {
    	name: "excerpt",
    	title: "Short Description",
    	type: "markdown"
    },
    {
    	name: "author",
    	title: "Author",
    	type: "reference",
    	to: [{type: "author"}]
    },
    {
    	name: "categories",
    	title: "Categories",
    	type: "reference",
    	to: [{type: "category"}]
    },
  ]

}