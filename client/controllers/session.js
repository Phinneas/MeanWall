// console.log('you are good, session')
app.controller('sessionController', function($scope, sessionFactory){
  // console.log('controller is working');
      $scope.errors = [];
      sessionFactory.checkStatus( function(data){
        $scope.curUser = data;
      })

    $scope.login = function(){
        $scope.errors = [];
        $scope.result = false;

        if(!$scope.logReg || $scope.logReg.name){
          $scope.errors.push['Please type something for Login']
        } else if($scope.logReg.name.length < 3){
          $scope.errors.push("Name should be more than 3 chars long")
        }else if($scope.logReg.name.length > 10){
          $scope.errors.push("name should be less than 10 chars")
        }
        sessionFactory.login($scope.logReg)
    }
})
