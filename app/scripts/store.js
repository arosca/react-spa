var Dispatcher = require('dispatcher'),
    EventEmitter = require('events').EventEmitter,
    merge = require('react/lib/merge'),

    $ = require('jquery');

var CHANGE_EVENT = 'change',
    Const = require('const');

var counter = 0;;

var Store = merge(EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    getCount: function() {
        return {'count':counter};
    },

    /**
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case Const.COUNTER_INCREMENT:
            counter++;
            Store.emitChange();
            break;
        default:
            return true;
    }

    Store.emitChange();

    return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = Store;

