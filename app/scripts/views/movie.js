define([
  'marionette',
  'templates',
  'models/movie'
],

function (Marionette, templates, Movie) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.movie,
    events: {
      'click .edit': 'toggleEdit',
      'click .save': 'saveFilm',
      'click .delete': 'deleteFilm',
    },
    modelEvents: { 'change': 'render' },
    initialize: function(options) {
      this.model = new Movie(options.model);
      this.model.fetch();
    },
    toggleEdit: function() {
      this.model.set( 'contenteditable', !this.model.get('contenteditable') );
      this.render();
    },
    deleteFilm: function() {
      if (!confirm('Are you sure youd like to DELETE ' + this.model.get('Title') + ' from the surface of EARTH ??')) {
        return;
      }
      this.model.destroy()
        .success( function() {
          console.log('redirect ! YEA');
        })
        .error( function() {
          console.log('Nope');
        })
        ;
    },
    saveFilm: function() {
      var self = this;
      $('[contenteditable=true]').each(function(id, el) {
        var field = el.id;
        var value = el.innerText;
        self.model.set(field, value);
      });
      this.model.save();
      this.toggleEdit();
    }
  });
});
