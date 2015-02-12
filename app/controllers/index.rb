get '/' do
	erb :index
end

get '/hero/:letter' do
	marvel = Comic.new('1c7104a208178203bdba77263604da6e', '0ab00e5a35c17bc30d20cdc09eecf9e92fb95fa8', params[:letter])
	marvel.get_chars['data']['results'].to_json
end

get '/hero/search/:id' do
	marvel = Comic.new('1c7104a208178203bdba77263604da6e', '0ab00e5a35c17bc30d20cdc09eecf9e92fb95fa8', params[:letter], params[:id])
	marvel.get_specific_char['data']['results'].to_json
end
