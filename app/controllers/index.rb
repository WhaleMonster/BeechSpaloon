get '/' do
	erb :index
end

get '/hero/:letter' do
	marvel = Comic.new(ENV['PUBLIC'], ENV['PRIVATE'], params[:letter])
	marvel.get_chars['data']['results'].to_json
end

get '/hero/search/:id' do
	marvel = Comic.new(ENV['PUBLIC'], ENV['PRIVATE'], params[:letter], params[:id])
	marvel.get_specific_char['data']['results'].to_json
end
