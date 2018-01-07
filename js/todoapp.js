var app = {};   // create a namespace for out app

app.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});

app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Store('backbone-todo')
});

app.todoList = new app.TodoList();
