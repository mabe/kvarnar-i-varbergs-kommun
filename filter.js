(function () {
    'use strict';

    var searchInput = document.getElementById('mill-search');
    var typeSelect = document.getElementById('mill-type-filter');
    var locationSelect = document.getElementById('mill-location-filter');
    var millsList = document.getElementById('mills-list');
    var noResults = document.getElementById('mills-no-results');

    if (!searchInput || !typeSelect || !locationSelect || !millsList) {
        return;
    }

    var cards = Array.prototype.slice.call(millsList.querySelectorAll('.mill-card'));
    var cardData = cards.map(function (card) {
        return {
            element: card,
            name: card.getAttribute('data-name') || '',
            type: card.getAttribute('data-type') || '',
            location: card.getAttribute('data-location') || ''
        };
    });

    Array.prototype.slice.call(typeSelect.options).forEach(function (option) {
        option.setAttribute('data-label', option.text);
    });
    Array.prototype.slice.call(locationSelect.options).forEach(function (option) {
        option.setAttribute('data-label', option.text);
    });

    function countMatching(filters) {
        return cardData.filter(function (data) {
            return (!filters.search ||
                data.name.indexOf(filters.search) !== -1 ||
                data.type.toLowerCase().indexOf(filters.search) !== -1 ||
                data.location.toLowerCase().indexOf(filters.search) !== -1) &&
                (!filters.type || data.type === filters.type) &&
                (!filters.location || data.location === filters.location);
        }).length;
    }

    function updateSelectCounts() {
        var searchText = searchInput.value.toLowerCase().trim();
        var selectedType = typeSelect.value;
        var selectedLocation = locationSelect.value;

        Array.prototype.slice.call(typeSelect.options).forEach(function (option) {
            var count = countMatching({ search: searchText, type: option.value, location: selectedLocation });
            option.text = option.getAttribute('data-label') + ' (' + count + ')';
        });

        Array.prototype.slice.call(locationSelect.options).forEach(function (option) {
            var count = countMatching({ search: searchText, type: selectedType, location: option.value });
            option.text = option.getAttribute('data-label') + ' (' + count + ')';
        });
    }

    function filterMills() {
        var searchText = searchInput.value.toLowerCase().trim();
        var selectedType = typeSelect.value;
        var selectedLocation = locationSelect.value;
        var visibleCount = 0;

        cardData.forEach(function (data) {
            var matchesSearch = !searchText ||
                data.name.indexOf(searchText) !== -1 ||
                data.type.toLowerCase().indexOf(searchText) !== -1 ||
                data.location.toLowerCase().indexOf(searchText) !== -1;
            var matchesType = !selectedType || data.type === selectedType;
            var matchesLocation = !selectedLocation || data.location === selectedLocation;

            var visible = matchesSearch && matchesType && matchesLocation;
            data.element.hidden = !visible;
            if (visible) {
                visibleCount++;
            }
        });

        if (noResults) {
            noResults.hidden = visibleCount > 0;
        }

        updateSelectCounts();
    }

    searchInput.addEventListener('input', filterMills);
    typeSelect.addEventListener('change', filterMills);
    locationSelect.addEventListener('change', filterMills);

    updateSelectCounts();
}());
