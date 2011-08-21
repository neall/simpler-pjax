require 'json'
require 'bundler'
Bundler.require

get('/style.css') { scss :style }

def pjax_render(view)
  if request.xhr? then
    headers 'Content-Type' => 'application/json'
    {
      :title  => @title,
      :markup => haml(view, :layout => false)
    }.to_json
  else
    haml view
  end
end

get '/' do
  @title = 'Home'
  pjax_render :index
end

get '/about' do
  @title = 'About Us'
  pjax_render :about
end

get '/contact' do
  @title = 'Contact Information'
  pjax_render :contact
end
