define([
  'marionette',
  'backbone',
  'underscore',
  'templates',
  'fixtures/sitemap'
],

function (Marionette, Backbone, _, templates, sitemap) {
  'use strict';


  var TreeView = Marionette.CompositeView.extend({
    template: templates['items/route'],

    tagName: 'ul',

    initialize: function() {
      // grab the child collection from the parent model
      // so that we can render the collection as children
      // of this parent node
      this.collection = this.model.nodes;
    },

    appendHtml: function(cv, iv) {
      cv.$('ul:first').append(iv.el);
    },
    onRender: function() {
      if (_.isUndefined(this.collection)) {
        this.$('ul:first').remove();
      }
    }
  });

  // The tree's root: a simple collection view that renders
  // a recursive tree structure for each item in the collection
  var TreeRoot = Marionette.CollectionView.extend({
    tagName: 'ul',
    itemView: TreeView,
    childView: TreeView,
  });


  var TreeNode = Backbone.Model.extend({
    initialize: function() {
      var nodes = this.get('nodes');
      if (nodes) {
        this.nodes = new TreeNodeCollection(nodes);
        this.unset('nodes');
      }
    }
  });

  var TreeNodeCollection = Backbone.Collection.extend({
    model: TreeNode
  });

  var tree = new TreeNodeCollection(sitemap);

  return new TreeRoot({
    collection: tree
  });
});
