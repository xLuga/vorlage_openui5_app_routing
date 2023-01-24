sap.ui.define(["sap/ui/core/UIComponent"],
    function (Component) {
        "use strict";
        return Component.extend("master.app.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                Component.prototype.init.apply(this, arguments);

                this.getRouter().initialize();
            }
        });
    });