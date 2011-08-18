get('/style.css') { scss :style }

get '/' do
  haml :index
end

get '/about' do
  haml :about
end

get '/contact' do
  haml :about
end
