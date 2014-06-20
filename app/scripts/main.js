/*global MyTodo, $*/


window.MyTodo = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        
        new this.Views.Todos({
            collection: new this.Collections.Todos()
        });
    }
};

$(document).ready(function () {
    'use strict';
    MyTodo.init();
});
