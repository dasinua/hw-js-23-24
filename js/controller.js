/*global $ */
/*global "_" */
'use strict';
define('controller', ['model', 'view', 'jquery'], function (model, view, $) {

    function Controller(model, view) {
        var self = this,
            editedItemID;

        function addItem() {
            var newItem = view.elements.input.val();

            model.addItem(newItem);
            view.elements.input.val('');
            view.renderList(model.data);
        }
        view.elements.addBtn.on('click', addItem);

        function removeItem() {
            var itemID = $(this).attr('data-item-id');

            model.removeItem(itemID);
            view.renderList(model.data);
        }
        view.elements.listContainer.on('click', ".item-delete", removeItem);

        function editItem() {
            editedItemID = $(this).attr('data-item-id');
            view.elements.editValue.val(model.data[editedItemID]);
            //        view.showEdit($(this).parent());
            view.showEdit(editedItemID);
        }
        view.elements.listContainer.on('click', ".item-edit", editItem);

        function changeItem() {
            var newValue = view.elements.editValue.val();

            model.changeItem(editedItemID, newValue);
            view.elements.editValue.val('');
            view.hideEdit();
            view.renderList(model.data);
        }
        view.elements.saveBtn.on('click', changeItem);
    }
    return new Controller(model, view);
});
