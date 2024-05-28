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
                const oJSONModel = new sap.ui.model.json.JSONModel(); //instanciar el modelo general
                const oView = this.getView(); //instanciar la vista
                oJSONModel.loadData("../model/SelectionScreenMenu.json"); //cargar json a la vista
                oView.setModel(oJSONModel, "selectionScreen"); //pasamos modelo a la visa con el nombre selectionScreen
            },

            onFilter: function(oEvent) {

            },
            onClearFilter: function(){
                const oModelSelectionScreen = this.getView().getModel("selectionScreen");
                oModelSelectionScreen.setProperty("/ShipName", "");
                oModelSelectionScreen.setProperty("/CountryKey", "");
            }
        });
    });
