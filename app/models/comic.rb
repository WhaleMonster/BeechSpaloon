class Comic
	include HTTParty

	base_uri 'gateway.marvel.com'

	def initialize(public_key, private_key, letter, id = nil)
		@public_key = "#{public_key}"
		@private_key = "#{private_key}"
		@time = Time.now.to_i
		@hash = Digest::MD5.hexdigest("#{@time}#{private_key}#{public_key}")
		@letter = letter
		@id = id
	end

	def get_chars
		self.class.get("/v1/public/characters", { :query => { 'orderBy' => 'name',
															'nameStartsWith' => @letter,
															'ts' => "#{@time}", 
															'apikey' => "#{@public_key}",
															'hash' => "#{@hash}",
															'limit' => 100 }})
	end

	def get_specific_char
		self.class.get("/v1/public/characters/#{@id}", { :query => { 'ts' => "#{@time}", 
																	'apikey' => "#{@public_key}",
																	'hash' => "#{@hash}" }})
	end
end