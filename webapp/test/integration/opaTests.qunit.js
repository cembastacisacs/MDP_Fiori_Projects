/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"MDPCustomerAddress2/MDPCustomerAddress2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
