/*global $ */
/*global "_" */
'use strict';
define('model', [] , function (){
    var firstToDoList = ['Test1', 'Test2', 'Test3'];

function Model(data) {
    var self = this;

    self.data = data;

    self.addItem = function (item) {
        if (item.length === 0) {
            return self.data;
        }

        self.data.push(item);
        return self.data;
    };

    self.removeItem = function (index) {
        self.data.splice(index, 1);
        return self.data;
    };

    self.changeItem = function (index, newValue) {
        self.data[index] = newValue;
    };
}
 return new Model(firstToDoList);
});
