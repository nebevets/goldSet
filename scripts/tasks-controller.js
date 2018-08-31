/*
 * tasks controller
 * Copyright 2017, steve benedict
 * Dual licensed under the MIT license.
 */

tasksController = function(){
    var taskPage;
    var initialised = false;
    
    return {
        init: function(page){
            if (!initialised){
                taskPage = page;
                $(taskPage).find('#left').click(function(evt){
                                               evt.preventDefault();
                                               prev();
                                               })
                $(taskPage).find('#right').click(function(evt){
                                               evt.preventDefault();
                                               next();
                                               })
                initialised = true;
            }
        }
    }
}();
