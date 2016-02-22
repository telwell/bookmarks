class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
    	t.integer :category_id
    	t.string :title
    	t.string :url, null: false
    	t.string :description

      t.timestamps null: false
    end
  end
end
