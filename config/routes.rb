Rails.application.routes.draw do
 
  root 'angular#index'

  scope :api do
  	scope :v1 do
  		resources :bookmarks
  		resources :categories
  	end
  end
end
