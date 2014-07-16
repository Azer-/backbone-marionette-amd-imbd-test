define([
  'marionette',
  'underscore',
  'templates',
  'lib/eventaggregator'
],

function (Marionette, _, templates, vent) {
  'use strict';

  return Marionette.View.extend({
    template: templates.searchform,
    events: {
      'keyup #term': 'search',
    },
    render: function () {
      this.$el.html(this.template());
    },
    search: _.throttle(function() {
          var searchTerm = this.$('#term').val().trim();
          vent.trigger("search:term", searchTerm);
    }, 700)

  });
});
