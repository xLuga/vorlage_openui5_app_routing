sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (
    Controller
) {
    "use strict";

    return Controller.extend("master.app.classes.base", {
        onTrackerPress: function (oEvent) {
            this.getOwnerComponent().getRouter().navTo("tracker");
        },

        onHomePress: function (oEvent) {
            this.getOwnerComponent().getRouter().navTo("profile");
        },
        onGoalPress: function (oEvent) {
            alert("Ziele -> Muss noch implementiert werden!");
        },
        onEatPress: function (oEvent) {
            alert("Essen -> Muss noch implementiert werden!");
        },
        onSettingsPress: function (oEvent) {
            alert("Settings -> Muss noch implementiert werden!");
        }
    });
});