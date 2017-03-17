(function (app)
{
    app.MainComponent = ng.core
        .Component({
            selector: 'mainInfo',
            templateUrl: './src/main/main.html',
            pipes: [app.SortDatePipe],
            providers: [ng.http.HTTP_PROVIDERS, app.MainService]
        }).Class({
            constructor: [app.MainService, function(_service){
                this.service = _service;
                this.newJob = {};
                this.jobsList = [];
            }],

            apply: function(){
                this.newJob.date = new Date();
                console.log(this.newJob);
                this.newJob.name = this.newJob.name.trim().toLowerCase();
                this.service.addUser(this.newJob)
                    .subscribe(this.getListOfCompanies.bind(this), this.updateError.bind(this));
            },
            getListOfCompanies: function()
            {
                this.service.getAllUsers(this.newJob)
                    .subscribe(this.getData.bind(this), this.updateError.bind(this));
            },
            getData: function(data)
            {
                this.jobsList = data;
                console.log(this.jobsList);
            },
            updateError: function(err)
            {
                console.log(err);
            },
            ngOnInit: function()
            {
                this.getListOfCompanies();
            }
        });
}) (window.app || (window.app = {}));/**
 * Created by pranikchainani on 2/19/17.
 */
