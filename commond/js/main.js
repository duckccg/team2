/**
 * Created by Administrator on 15-11-20.
 */
var mainApp = angular.module("mainApp",["ngRoute","regModule","LoginModule","userModule"]);

mainApp.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/reg",{templateUrl:"js/module1/reg.html",controller:"regController"});
    $routeProvider.when("/login",{templateUrl:"js/module2/login.html",controller:"loginController"});
    $routeProvider.when("/users",{templateUrl:"js/module3/user.html",controller:"userController"});
    $routeProvider.otherwise({
        redirectTo:"/reg"
    })
}]);
