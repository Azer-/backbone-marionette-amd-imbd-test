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
        'render:after': 'madMax'
      },
      render: function() {
        this.$el.html(this.template());
        return this;
      },
      search: _.throttle(function() {
        var searchTerm = this.$('#term').val().trim();
        vent.trigger('search:term', searchTerm);
      }, 700)

  });
});
