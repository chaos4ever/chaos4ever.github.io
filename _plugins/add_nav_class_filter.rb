module Jekyll
  module Filters
    def add_nav_class(input)
      input.gsub('<ul>', '<ul class="nav">')
    end
  end
end
