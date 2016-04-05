angular.module('santeportalApp')
    .directive('iCheck', function($timeout) {
        return {
            restrict: 'AE',
            scope: {
                ngModel: '=',
                ngChange: '&'
            },
            template: '<input type="checkbox" />',
            link: function(scope, element, attrs, ctrl) {
                scope.changeEvent = function() {
                    scope.$apply(function() {
                        scope.ngModel = !scope.ngModel; 
                        $timeout(scope.ngChange, 0);
                    });
                };
                return $timeout(function() {
                    return $(element).iCheck({
                        radioClass: 'iradio_square-green',
                        checkboxClass: 'icheckbox_square-green',
                        increaseArea: '20%'
                    }).on('ifChanged', function(event) {
                        scope.changeEvent();
                    });
                });
            }
        };
    });