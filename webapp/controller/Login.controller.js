sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (
    Controller
) {
    "use strict";

    return Controller.extend("master.app.controller.Login", {
        /**
         * @override
         */
        onInit: function () {
            alert("Bitte noch den Autofocus auf Login legen!")
        },
        onLogin: function (oEvent) {
            var benutzername = this.byId("benutzername");
            var passwort = this.byId("passwort");


            var oCredentials = this.getView().getModel("credentials");
            if (benutzername.getValue() == oCredentials.getProperty("/benutzername") && passwort.getValue() == oCredentials.getProperty("/password")) {
                this.getOwnerComponent().getRouter().navTo("home");
            }
        }
    });
});