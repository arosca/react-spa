/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var Dispatcher = require('dispatcher');
var Const = require('./const');

var Actions = {

    /**
    * @param  {string} text
    */
    increment: function(text) {
        Dispatcher.handleViewAction({
            actionType: Const.COUNTER_INCREMENT,
            text: text
        });
    }

};

module.exports = Actions;
