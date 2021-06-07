export default{

	name: "project",
    	title: "Project",
    	type: "document",
    	fields: [
    	{
    	name: "name",
    	title: "Name",
    	type: "string",
    },
      	{
    	name: "shortDescription",
    	title: "Short Description",
    	type: "markdown"
    },
      	{
    	name: "status",
    	title: "Status",
    	type: "string",
    	options: {
    		list: [
              {
              	title: "Development", value: "development"
              },
              {
              	title: "Live", value: "live"
              }
    		],
    		layout: "radio"
    	}
    },
          	{
    	name: "rating",
    	title: "Rating",
    	type: "string",
    	options: {
    		list: [
              {
              	title: "1", value: "1"
              },
              {
              	title: "2", value: "2"
              },
              {
              	title: "3", value: "3"
              },
              {
              	title: "4", value: "4"
              },
              {
              	title: "5", value: "5"
              }
    		]
    		
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
    	name: "author",
    	title: "Author",
    	type: "reference",
    	to: {type: "author"}
    },
    {
    	name: "category",
    	title: "Category",
    	type: "array",
    	of: [{type: "reference", to: { type: "category"}}]
    },

    ]
}
