/*
 * Safely.js
 * Rescue and report exceptions in non-critical code
 * https://github.com/ankane/safely.js
 * v0.1.0
 * MIT License
 */

/*jslint browser: true, white: true */

(function (window) {
  'use strict';

  var Safely = {
    env: "development",
    raiseEnvs: ["development", "test"],
    reportExceptionMethod: function (e) {
      e.message = "[safely] " + e.message;
      if (window.Rollbar) {
        window.Rollbar.error(e);
      }
    },
    reportException: function (e) {
      Safely.reportExceptionMethod(e);
    }
  };

  var safely = function (f) {
    try {
      f();
    } catch (e) {
      var i;
      for (i = 0; i < Safely.raiseEnvs.length; i++) {
        if (Safely.env === Safely.raiseEnvs[i]) {
          throw(e);
        }
      }
      try {
        Safely.reportException(e);
      } catch (e2) {
        console.log("FAIL-SAFE", e2);
      }
    }
  };

  window.Safely = Safely;
  window.safely = window.yolo = safely;
}(window));
