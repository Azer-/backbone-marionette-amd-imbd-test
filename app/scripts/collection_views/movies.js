define([
  'marionette',
  'underscore',
  'lib/eventaggregator',
  'collections/movies',
],

function(Marionette, _, vent, MovieCollection) {
  'use strict';

  var MoviesView = Marionette.CollectionView.extend({
    // emptyView: LoadingMessageView,
    // itemView: ItemView,
    model: MovieCollection,
    events: {
      'search:term': 'search'
    },
    search: function(term) {
      console.log("Hey, Ima search for " + term);
    },
    initialize: function() {
      _.bindAll(this, "search");
      vent.on("search:term", this.search);
    }

  })

  return MoviesView;
});
