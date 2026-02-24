require 'i18n'
I18n.available_locales = [:sv]

module Jekyll
  module SwedishSort
    def swedish_sort(input, property)
      input.sort_by { |item| I18n.transliterate(item[property].to_s) }
    end
  end
end

Liquid::Template.register_filter(Jekyll::SwedishSort)
