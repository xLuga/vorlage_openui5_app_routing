sap.ui.define(["master/app/classes/base"],
    function (base) {
        "use strict";
        return base.extend("master.app.controller.Profil", {
            onInit: function () {

            },

            onCalc: function () {
                let Grundbedarf;
                let oProfil = this.getView().getModel("profil");
                const aData = this.getView().getModel("pal").getData().values;
                if (oProfil.getProperty("/personal/geschlecht") == "männlich") {
                    Grundbedarf = (66.47 + (13.7 * oProfil.getProperty("/gym/gewicht") + (5 * oProfil.getProperty("/gym/groesse") - (6.8 * oProfil.getProperty("/personal/alter")))));
                } else {
                    Grundbedarf = (655.1 + (9.6 * oProfil.getProperty("/gym/gewicht") + (1.8 * oProfil.getProperty("/gym/groesse") - (4.7 * oProfil.getProperty("/personal/alter")))));
                }

                let Leistungsumsatz = null;
                var sum_hours = parseInt(this.byId("schlaf").getValue()) + parseInt(this.byId("training").getValue()) + parseInt(this.byId("arbeit").getValue()) + parseInt(this.byId("freizeit").getValue());
                if (sum_hours == 24) {
                    var hours_sleep = this.byId("schlaf").getValue();
                    var factor_sleep = hours_sleep / 24;
                    for (var i = 0; i <= aData.length; i++) {
                        if (aData[i].beschreibung == "schlafen") {
                            var data = aData[i];
                            break;
                        }
                    }
                    var sleep_leistungsumsatz = (Grundbedarf * data.pal) * factor_sleep;

                    var hours_training = this.byId("training").getValue();
                    var factor_training = hours_training / 24;
                    for (var i = 0; i <= aData.length; i++) {
                        if (aData[i].beschreibung == this.byId("activity_training").getValue()) {
                            var data = aData[i];
                            break;
                        }
                    }
                    var training_leistungsumsatz = (Grundbedarf * data.pal) * factor_training;


                    var hours_arbeit = this.byId("arbeit").getValue();
                    for (var i = 0; i <= aData.length; i++) {
                        if (aData[i].beschreibung == this.byId("activity_arbeit").getValue()) {
                            var data = aData[i];
                            break;
                        }

                    }
                    var factor_arbeit = hours_arbeit / 24;
                    var arbeit_leistungsumsatz = (Grundbedarf * data.pal) * factor_arbeit;

                    var hours_freizeit = this.byId("freizeit").getValue();
                    for (var i = 0; i <= aData.length; i++) {
                        if (aData[i].beschreibung == this.byId("activity_freizeit").getValue()) {
                            var data = aData[i];
                            break;
                        }
                    }
                    var factor_freizeit = hours_freizeit / 24;
                    var freizeit_leistungsumsatz = (Grundbedarf * data.pal) * factor_freizeit;

                    Leistungsumsatz = sleep_leistungsumsatz + arbeit_leistungsumsatz + training_leistungsumsatz + freizeit_leistungsumsatz;


                    this.byId("grundbedarf").setValue(Grundbedarf);
                    this.byId("leistungsumsatz").setValue(Leistungsumsatz);
                    debugger;
                    var diaet = (Leistungsumsatz - 300);
                    var masse = (Leistungsumsatz + 300);
                    this.byId("diaet").setValue(diaet);
                    this.byId("masse").setValue(masse);
                } else {
                    this.byId("grundbedarf").setValue(Grundbedarf);
                    this.byId("leistungsumsatz").setValue("Fehler!");
                };

            },

            onValueHelpRequest: function (oEvent) {
                debugger;
            },
            onSave: function () {
                alert("Der Save Button wurde gedrückt!");
            }
        })
    });