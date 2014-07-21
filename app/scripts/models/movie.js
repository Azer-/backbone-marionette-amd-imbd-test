define([
  'backbone'
],


function(Backbone) {
  'use strict';

  var MovieModel = Backbone.Model.extend({
    url: function() {
      return 'http://www.omdbapi.com/?i=' + this.id;
    },
    defaults: {
        contenteditable: false
    }
  });

  return MovieModel;
});
