/**
 * Created by figuibejeres on 10/01/16.
 */
(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));