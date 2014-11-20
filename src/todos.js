// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone-localstorage.html)
// to persist Backbone models within your browser.


//******** Improvements by James Krill for Jama ********//

// This todo app was expanded on and improved by James Krill
// for Jama Software's Technical Problem

// An original copy of this script is included for comparison.

// Changes / Improvements added by James include:
  // + Greeting and CLock
  // + Background
  // + Responsive Design
  // + Social sharing of individual todos (Twitter only)
  // + "Duplicate" icon on each todo (to duplciate items)
  // + Trash - when items are cleared or removed, they go to a trash
    // The trash is an additional backbone collection and view (and localstorage) that holds items until they are
    // permanently removed.
    // Items in the trash can be "restored" or "removed permanently"
    // There is a button to clear all.

//******************************************************//

// DateTime Conversion via http://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
Date.prototype.timeNow = function(){ return "<span class='hours'>" + ((this.getHours()>12)?(this.getHours()-12):this.getHours()) +"</span>:<span class='minutes'>"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +"</span>:<span class='seconds'>"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds() + "</span> <span class='ampm'>" + ((this.getHours()>12)?('PM'):'AM') + "</span>"; };

// Load the application once the DOM is ready, using `jQuery.ready`:
$(function(){

  var timer = $('.timer');
  var greeting = $('#todoapp').find('h1');

  // Todo Model
  // ----------

  // Our basic **Todo** model has `title`, `order`, and `done` attributes.
  var Todo = Backbone.Model.extend({

    // Default attributes for the todo item.
    defaults: function() {
      return {
        title: "empty todo...",
        order: Todos.nextOrder(),
        done: false
      };
    },

    // Toggle the `done` state of this todo item.
    toggle: function() {
      this.save({done: !this.get("done")});
    },

    trash: function() {
      TodoTrash.create(this.clone());
      this.destroy();
    }

  });

  // Todo Collection
  // ---------------

  // The collection of todos is backed by *localStorage* instead of a remote
  // server.
  var TodoList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: Todo,

    // Save all of the todo items under the `"todos-backbone"` namespace.
    localStorage: new Backbone.LocalStorage("todos-backbone"),

    // Filter down the list of all todo items that are finished.
    done: function() {
      return this.where({done: true});
    },

    // Filter down the list to only todo items that are still not finished.
    remaining: function() {
      return this.where({done: false});
    },

    // We keep the Todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },

    // Todos are sorted by their original insertion order.
    comparator: 'order'

  });

  // Create our global collection of **Todos**.
  var Todos = new TodoList;

  // The collection of todos that have been removed.
  var TodoListTrash = Backbone.Collection.extend({
    model: Todo,
    localStorage: new Backbone.LocalStorage("todos-backbone-trash"),
    done: function() {
      return this.where({done: true});
    },
    remaining: function() {
      return this.where({done: false});
    },
    all: function() {
      // Need to use _.clone to delete ALL records. Creates shallow-copied clone of array.
      return _.clone(this.models);
    },
    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },
    comparator: 'order'
  });

  var TodoTrash = new TodoListTrash;

  // Todo Item View
  // --------------

  // The DOM element for a todo item...
  var TodoView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

    // Cache the template function for a single item.
    template: _.template($('#item-template').html()),

    // The DOM events specific to an item.
    events: {
      "click .toggle"   : "toggleDone",
      "dblclick .view"  : "edit",
      "click a.destroy" : "clear",
      "click a.duplicate" : "duplicate",
      "keypress .edit"  : "updateOnEnter",
      "blur .edit"      : "close"
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-render the titles of the todo item.
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('done', this.model.get('done'));
      this.input = this.$('.edit');
      return this;
    },

    // Toggle the `"done"` state of the model.
    toggleDone: function() {
      this.model.toggle();
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function() {
      this.$el.addClass("editing");
      this.input.focus();
    },

    // Close the `"editing"` mode, saving changes to the todo.
    close: function() {
      var value = this.input.val();
      if (!value) {
        this.clear();
      } else {
        this.model.save({title: value});
        this.$el.removeClass("editing");
      }
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.trash();
    },

    // Creates a clone of the item
    duplicate: function() {
      Todos.create({title: this.model.attributes.title, done: this.model.attributes.done});
    }

  });

  // Todo Trash Item View
  // --------------

  // The DOM element for a todo item...
  var TodoTrashView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

    // Cache the template function for a single item.
    template: _.template($('#trash-item-template').html()),

    // The DOM events specific to an item.
    events: {
      "click a.restore"   : "restore",
      "click a.delete" : "delete",
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-render the titles of the todo item.
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('done', this.model.get('done'));
      this.input = this.$('.edit');
      return this;
    },

    // Toggle the `"done"` state of the model.
    restore: function() {
      Todos.create(this.model.clone());
      this.model.destroy();
    },

    // Remove the item forever, destroy the model.
    delete: function() {
      this.model.destroy();
    }

  });

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  var AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $("#todoapp"),

    // Our template for the line of statistics at the bottom of the app.
    statsTemplate: _.template($('#stats-template').html()),

    // Delegated events for creating new items, and clearing completed ones.
    events: {
      "keypress #new-todo":  "createOnEnter",
      "click #clear-completed": "clearCompleted",
      "click #toggle-all": "toggleAllComplete",
      "click .toggle-trash": "toggleTrash",
      "click #empty-trash": "emptyTrash"
    },

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function() {

      this.input = this.$("#new-todo");
      this.allCheckbox = this.$("#toggle-all")[0];

      this.listenTo(Todos, 'add', this.addOne);
      this.listenTo(Todos, 'reset', this.addAll);
      this.listenTo(Todos, 'all', this.render);

      this.listenTo(TodoTrash, 'add', this.addTrashOne);
      this.listenTo(TodoTrash, 'reset', this.addTrashAll);
      this.listenTo(TodoTrash, 'all', this.render);

      this.footer = this.$('footer');
      this.main = $('#main');

      // Prints the time
      this.timeInterval = setInterval(this.printTime, 1000, this);

      TodoTrash.fetch();
      Todos.fetch();

    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      var done = Todos.done().length;
      var remaining = Todos.remaining().length;
      var trash = TodoTrash.models.length;

      if (Todos.length || TodoTrash.length) {
        this.main.show();
        this.footer.show();
        this.footer.html(this.statsTemplate({done: done, remaining: remaining, trash: trash}));
      } else {
        this.main.hide();
        this.footer.hide();
      }
      if (!TodoTrash.length) {
        $('#todo-list-trash').hide();
      }

      this.allCheckbox.checked = !remaining;
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function(todo) {
      var view = new TodoView({model: todo});
      this.$("#todo-list").append(view.render().el);
    },

    // Add all items in the **Todos** collection at once.
    addAll: function() {
      Todos.each(this.addOne, this);
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addTrashOne: function(todo) {
      var view = new TodoTrashView({model: todo});
      this.$("#todo-list-trash").append(view.render().el);
    },

    // Add all items in the **Todos** collection at once.
    addTrashAll: function() {
      TodoTrash.each(this.addTrashOne, this);
    },

    // If you hit return in the main input field, create new **Todo** model,
    // persisting it to *localStorage*.
    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.input.val()) return;

      Todos.create({title: this.input.val()});
      this.input.val('');
    },

    // Clear all done todo items, destroying their models.
    clearCompleted: function() {
      _.invoke(Todos.done(), 'trash');
      return false;
    },

    toggleAllComplete: function () {
      var done = this.allCheckbox.checked;
      Todos.each(function (todo) { todo.save({'done': done}); });
    },

    toggleTrash: function() {
      $('#todo-list-trash').toggle();
    },

    // Empty the trash
    emptyTrash: function() {
      _.invoke(TodoTrash.all(), 'destroy');
      return false;
    },

    printTime: function() {
      this.date = new Date();
      this.hours = this.date.getHours();
      if (this.hours < 12) {
        greeting.html('Good Morning.');
      } else if (this.hours < 18) {
        greeting.html('Good Afternoon.');
      } else {
        greeting.html('Good Evening.');
      }
      this.formattedTime = this.date.timeNow();
      timer.html(this.formattedTime);
    }

  });

  // Finally, we kick things off by creating the **App**.
  var App = new AppView;

});
