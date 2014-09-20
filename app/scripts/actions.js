var Dispatcher = require('dispatcher');
var Const = require('const');

var Actions = {

    increment: function() {
        Dispatcher.handleViewAction({
            actionType: Const.COUNTER_INCREMENT
        });
    }

};

module.exports = Actions;
