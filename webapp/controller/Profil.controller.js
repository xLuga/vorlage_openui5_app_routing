sap.ui.define(["master/app/classes/base"],
    function (base) {
        "use strict";
        return base.extend("master.app.controller.Profil", {
            onInit: function () {

            },

            onSave: function () {
                alert("Der Save Button wurde gedrückt!");
            }
        })
    });