/*global $ */
/*global "_" */
'use strict';
define('view', ['model', 'jquery', 'lodash'], function (model, $, _) {

    function View(model) {
        var self = this,
            listTmpl = $('#list-template').html(),
            fnTmpl = _.template(listTmpl);

        function init() {
            var wrapperTmpl = $("#wrapper-template").html();

            $("body").append(wrapperTmpl);
            self.elements = {
                input: $(".item-value"),
                addBtn: $(".item-add"),
                listContainer: $(".item-list"),
                editValue: $(".item-edit-value"),
                saveBtn: $(".item-save"),
                editContainer: $(".editControls")
            };
            self.renderList(model.data);
        }

        self.renderList = function (data) {
            var dataObj = {
                    data: data
                },
                html = fnTmpl(dataObj);

            self.elements.listContainer.html(html);
            $(".item-value").focus();

        };

        self.showEdit = function (index) {
            self.elements.editContainer.appendTo('body');
            self.renderList(model.data);
            self.elements.editContainer.addClass("show");
            self.elements.editContainer.removeClass("hide");
            var item = self.elements.listContainer.find('[data-item-id="' + index + '"]').parent();
            item.replaceWith(self.elements.editContainer);
            $(".item-edit-value").focus();
        };

        self.hideEdit = function () {
            self.elements.editContainer.removeClass("show");
            self.elements.editContainer.addClass("hide");
            self.elements.editContainer.appendTo('body');
            $(".item-value").focus();

        };
        init();
    }
    return new View(model);
});
