class BookmarksController < ApplicationController

	
	def index
		@bookmarks = Bookmark.all

		respond_to do |format|
			format.json { render json: @bookmarks.to_json(include: :category) }
		end	
	end


	def create
		@bookmark = Bookmark.new(bookmark_params)

		respond_to do |format|
			if @bookmark.save
				format.json { render json: @bookmark }
			else
				format.json { render status: :unprocessable_entity }
			end
		end
	end


	def destroy
		@bookmark = Bookmark.find(params[:id])
		@temp = @bookmark
		@bookmark.destroy

		respond_to do |format|
			format.json { render json: @bookmark.to_json() }
		end
	end


private

	def bookmark_params
		params.require(:bookmark).permit( :title, :url, :category_id, :description )
	end


end