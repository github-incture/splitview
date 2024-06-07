sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.incture.project1.controller.MasterDetail", {
            onInit: function () {
                // var oModel = new JSONModel()
            },

            onListItemPress(oEvent) {
                var routePath = oEvent.getParameter("listItem").getCustomData()[0].getValue();
                this.byId("MySplitContainer").toDetail(this.createId(routePath));
            },

            onOpenLogout() {
                this.pDialog ??= this.loadFragment({
                    name: "com.incture.project1.fragment.Logout"
                });

                this.pDialog.then((oDialog) => oDialog.open());
            },

            onLogout() {
                this.pDialog.then((oDialog) => oDialog.close());
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }
        });
    });
