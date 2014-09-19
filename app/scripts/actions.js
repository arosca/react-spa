var Dispatcher = require('dispatcher');
var Const = require('const');

var Actions = {

    increment: function(text) {
        Dispatcher.handleViewAction({
            actionType: Const.COUNTER_INCREMENT,
            text: text
        });
    }

};

module.exports = Actions;
