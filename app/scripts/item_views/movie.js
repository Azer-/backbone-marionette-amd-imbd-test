define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  var MovieItemView = Marionette.ItemView.extend({
    template: templates.items.movie
  });

  return MovieItemView;
});
