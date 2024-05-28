sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dayana.invoice.controller.MainView", {
            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = new this.getView();
                oJSONModel.loadData("./model/selectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
            }
        });
    });
