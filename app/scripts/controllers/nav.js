define([
  'marionette',
  'views/main',
  'views/movie',
  'views/sitemap'
],

function (Marionette, MainView, MovieView, AboutView) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
    },

    movies: function () {
      this.region.show(new MainView());
    },

    sitemap: function () {
      this.region.show(AboutView);
    },

    showMovie: function (id) {
      this.region.show(new MovieView({model:{id: id}}));
    }
  });

  return NavController;
});
