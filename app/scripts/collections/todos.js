/*global MyTodo, Backbone*/

MyTodo.Collections = MyTodo.Collections || {};

(function () {
    'use strict';

    MyTodo.Collections.Todos = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage('backbone-generator-todos'),

        model: MyTodo.Models.Todo

    });

})();
