define([
  'backbone',
  'models/Movie'
],

function(Backbone, Movie) {
  'use strict';

  var MoviesCollection = Backbone.Collection.extend({
    model: Movie,
    term: '',
    url: function () {
      console.log('URL ?');
      var term = this.term;
      return 'http://sg.media-imdb.com/suggests/' + term[0] + '/' + term + '.json';
    },
    search: function(searchTerm) {
      this.term = encodeURI(searchTerm.toLowerCase());
      this.fetch({
        dataType: 'jsonp',
        jsonp: false,
        jsonpCallback: 'imdb$' + searchTerm,
        reset: true
      });
    },
    parse: function(response) {
      return response.d;
    }

  });

  // HryHomeworks.Collections.MoviesCollection = MoviesCollection;
  return MoviesCollection;
});
