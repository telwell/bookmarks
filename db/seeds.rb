# Build some Categories first

puts "Building Categories..."
Category.destroy_all
3.times do |c|
	c = Category.new
	c.title = Faker::Company.buzzword
	c.description = Faker::Lorem.sentence
	c.save!
end
puts "Categories built!"

category_ids = Category.all.pluck(:id)

puts "Building Bookmarks..."
Bookmark.destroy_all
10.times do |b|
	b = Bookmark.new
	b.title = Faker::Book.title
	b.url = Faker::Internet.url
	b.category_id = category_ids.sample
	b.description = Faker::Lorem.sentence
	b.save!
end
puts "Bookmarks built!"

puts "Seeding Complete!"