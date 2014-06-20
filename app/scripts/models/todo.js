/*global MyTodo, Backbone*/

MyTodo.Models = MyTodo.Models || {};

(function () {
    'use strict';

    MyTodo.Models.Todo = Backbone.Model.extend({

        defaults: {
            title: '',
            completed: false
        },

        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        }
    });

})();
