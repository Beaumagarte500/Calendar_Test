angular.module('scheduleApp',['firebase'])
.controller('mainController', function($scope, $firebaseObject){
  var ref = new Firebase("https://scheduling-application-434.firebaseio.com/days");
  var syncObject = $firebaseObject(ref);

  syncObject.$bindTo($scope, 'days');

  $scope.reset = function(){

    ref.set({
      day1: {
                   name: 'Monday',
                   slots: {
                       num1: {
                           time: '9:00  a.m.',
                           booked: false
                       },
                       num2: {
                           time: '11:00 a.m.',
                           booked: false
                       },
                       num3: {
                           time: '1:00 p.m.',
                           booked: false
                       }
                   }
               },
               day2: {
                   name: 'Tuesday',
                   slots: {
                       num1: {
                           time: '9:00  a.m.',
                           booked: false
                       },
                       num2: {
                           time: '11:00 a.m.',
                           booked: false
                       },
                       num3: {
                           time: '1:00 p.m.',
                           booked: false
                       }
                   }
               },
               day3: {
                   name: 'Wednesday',
                   slots: {
                       num1: {
                           time: '9:00 a.m.',
                           booked: false
                       },
                       num2: {
                           time: '11:00 a.m.',
                           booked: false
                       },
                       num3: {
                           time: '1:00 p.m.',
                           booked: false
                       }
                   }
               }

    });
  };

});
