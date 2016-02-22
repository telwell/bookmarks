class CategoriesController < ApplicationController

	
	def index
		@categories = Category.all

		respond_to do |format|
			format.json { render json: @categories.to_json }
		end	
	end


	def show
		@category = Category.find(params[:id])

		respond_to do |format|
			format.json { render json: @category.to_json }
		end	

	end


	def create
		@category = Category.new(category_params)

		respond_to do |format|
			if @category.save
				format.json { render json: @category }
			else
				format.json { render status: :unprocessable_entity }
			end
		end
	end


private

	def category_params
		params.require(:category).permit( :title, :description )
	end
	

end