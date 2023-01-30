sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (
    Controller
) {
    "use strict";

    return Controller.extend("master.app.controller.Login", {
        onLogin: function (oEvent) {
            var benutzername = this.byId("benutzername");
            var passwort = this.byId("passwort");


            var oCredentials = this.getView().getModel("credentials");
            debugger;

            if (benutzername.getValue() == oCredentials.getProperty("/benutzername") && passwort.getValue() == oCredentials.getProperty("/password")) {
                this.getOwnerComponent().getRouter().navTo("profile");
            }
        }
    });
});