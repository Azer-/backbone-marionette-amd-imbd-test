define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'movies',
      'movies/:id': 'showMovie',
      sitemap: 'sitemap'
    }
  });

  return Router;
});
