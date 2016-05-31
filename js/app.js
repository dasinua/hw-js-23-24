/*global $ */
/*global "_" */
'use strict';
requirejs.config({
    paths: {
        'jquery': "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        'lodash': "//cdn.jsdelivr.net/lodash/4.13.1/lodash.min"
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'lodash': {
            exports: "_"
        }
    }
});
require(['model', 'view', 'controller', 'jquery'], function(model, view, controller,$) {

//$(function () {

//});

        });

