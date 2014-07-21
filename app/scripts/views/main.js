define([
  'marionette',
  'templates',
  'collection_views/movies',
  'views/searchform'
],

function (Marionette, templates, MoviesCollectionView, SearchFormView) {
  'use strict';


  return Marionette.LayoutView.extend({
    template: templates.main,
    regions: {
      content: '#content',
      form: '.form',
    },
    render: function () {
      this.$el.html(this.template());
      this.form.show(new SearchFormView());
      this.content.show(new MoviesCollectionView());
      return this;
    }
  });
});
