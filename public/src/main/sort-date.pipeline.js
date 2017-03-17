/**
 * Created by pranikchainani on 3/17/17.
 */
(function (app) {
    app.SortDatePipe = ng.core
        .Pipe({
            name: 'dateSort'
        })
        .Class({
            constructor: function () {

            },
            transform: function (dates) {
                return dates.sort(function(a,b)
                {
                    return new Date(b.date) - new Date(a.date);
                });
            }
        });
}) (window.app || (window.app = {}));