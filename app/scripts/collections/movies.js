define([
  'backbone',
  'models/Movie',
  'superagent'
],

function(Backbone, Movie, superagent) {
  'use strict';

  var MoviesCollection = Backbone.Collection.extend({
    url: "http://sg.media-imdb.com/suggests/{letter}/{word}.json",
    model: Movie,

    initialize: function() {
      // flags whether the collection is currently in the process of fetching
      // more results from the API (to avoid multiple simultaneous calls
      this.loading = false;
      lconsole.log('COUCOU MoviesCollection');

    },

    search: function(searchTerm) {
      this.fetchMovies(searchTerm, function(books) {
        console.log("found books : " + books);
      });
    },

    fetchBooks: function(searchTerm, callback) {
      if (this.loading) return true;

      this.loading = true;

      var self = this;

      var query = this.url;

      superagent.get({
        url: query,
        dataType: 'jsonp'
      })
      .end( function(res) {
          console.log('Search !', res)
      });
    }
  });

  // HryHomeworks.Collections.MoviesCollection = MoviesCollection;
  return MoviesCollection;
});
