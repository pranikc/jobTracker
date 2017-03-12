/**
 * Created by pranikchainani on 3/12/17.
 */
(function(app){
    document.addEventListener('DOMContentLoaded',  function() {
        ng.platform.browser.bootstrap(app.MainComponent);
    });

}) (window.app || (window.app={}));