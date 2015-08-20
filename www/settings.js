var exec = require("cordova/exec");

function NativeSettings() {
}

NativeSettings.prototype.checkSD = function(onsucess, onfail) {
	exec(onsucess, onfail, "NativeSettings", "checkSD", []);
};

var NativeSettings = new NativeSettings();
module.exports = NativeSettings;
