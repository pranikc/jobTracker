(function (app)
{
    app.MainComponent = ng.core
        .Component({
            selector: 'mainInfo',
            templateUrl: './src/main/main.html'
        }).Class({
            constructor: function () {
                this.newJob = {}
            },

            apply: function(){
                this.newJob.date = new Date();
                console.log(this.newJob);
            }
        });
}) (window.app || (window.app = {}));/**
 * Created by pranikchainani on 2/19/17.
 */
