require 'i18n'
I18n.available_locales = [:sv]
I18n.locale = :sv

module Jekyll
  module SwedishSort
    SWEDISH_ORDER = {
      'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5, 'f' => 6, 'g' => 7,
      'h' => 8, 'i' => 9, 'j' => 10, 'k' => 11, 'l' => 12, 'm' => 13, 'n' => 14,
      'o' => 15, 'p' => 16, 'q' => 17, 'r' => 18, 's' => 19, 't' => 20, 'u' => 21,
      'v' => 22, 'w' => 23, 'x' => 24, 'y' => 25, 'z' => 26, 'å' => 27, 'ä' => 28, 'ö' => 29
    }.freeze

    def swedish_sort(input, property)
      input.sort_by do |item|
        name = item[property].to_s.downcase
        name.chars.map { |char| SWEDISH_ORDER[char] || char.ord + 1000 }
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::SwedishSort)
