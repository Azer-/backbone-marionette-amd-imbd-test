define([
  'marionette',
  'views/main',
  'views/about',
  'collections/movies',
],

function (Marionette, MainView, AboutView) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
    },

    home: function () {
      var main = this.region.show(new MainView());
    },

    about: function () {
      this.region.show(new AboutView());
    }
  });

  return NavController;
});
