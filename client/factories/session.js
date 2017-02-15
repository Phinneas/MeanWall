app.factory('sessionFactory', function($http, $location){
  var factory = {};
  factory.checkStatus = function(cb){
    $http.get('/checkStatus').then(function(output){
      if(output.data){
        cb(output.data)
      }else{
          $location.url('/login')
      }
    })
  }
  factory.login = function(user){
    $http.post('/login', user).then(function(output){
        if(output.data){
          $location.url('/dash.html')
        }
    })
  }



  return factory;
})
