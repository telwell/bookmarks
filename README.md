# Information
This project was built by [Trevor Elwell](http://trevorelwell.me). It is designed to be a simple bookmarking tool for cool links you find online. You can add categories to your bookmarks as well.

You'll see your categories within the sidebar. Clicking on any of the category names will filter the table based on that category. 

# Improvements
This project defintely has some room for improvement. Most prominently it doesn't have edit functionality. I ran out of time at the end and wanted to make sure I could at least add and remove. This is something straightforward to impliment further on. 

Second, it would be better practice to turn Bookmarks into its own service like I did for categories. I didn't do this for the sake of time but it would definitely be better to do so down the road.

Turning category rows and bookmark rows into directives would be a good idea to clean things up.

Also, some validations would be useful too. I would likely use Angular's built in validations in conjunction with some basics from Rails too. Simple things like making sure that all fields are filled out and making sure there's an 'http://' before any URL that's added.