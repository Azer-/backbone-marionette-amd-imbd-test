define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  var MovieItemView = Marionette.ItemView.extend({
    template: templates['items/movie'],
    tagName: 'li',
    className: 'table-view-cell media',
    initialize: function() {
      console.log('YO JSUIS UNE MOVIE ITEM VIEW');
    }
  });

  return MovieItemView;
});
