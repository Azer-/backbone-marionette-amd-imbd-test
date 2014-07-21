define([
  'marionette',
  'underscore',
  'lib/eventaggregator',
  'collections/movies',
  'item_views/movie'
],

function(Marionette, _, vent, MovieCollection, MovieItemView) {
  'use strict';

  var MoviesView = Marionette.CollectionView.extend({
    // emptyView: LoadingMessageView,
    childView: MovieItemView,
    model: MovieCollection,
    tagName: 'ul',
    className: 'movie-list',
    events: {
      'search:term': 'search'
    },
    initialize: function() {
      this.collection = new MovieCollection();
      _.bindAll(this, 'search');
      vent.on('search:term', this.search);
    },
    onShow: function() {
      this.searchMadMax();
    },
    searchMadMax: function() {
      this.search('mad_max');
    },
    search: function(term) {
      console.log('Hey, Ima search for ' + term);
      this.collection.search(term);
    }
  });

  return MoviesView;
});
