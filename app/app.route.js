function Route($routeProvider, $locationProvider) {

  $routeProvider
         // route for the home page
         .when('/:ramal', {
             templateUrl : 'app/views/recordings.html',
             controllerAs: 'Controlador',
             controller  : 'AppController'
         })
         // route for the about page
         .when('/login', {
             templateUrl : 'app/views/login.html',
             controllerAs: 'Controlador',
             controller  : 'AppController'
         })
         .otherwise('/')

   $locationProvider.html5Mode(true);


}
