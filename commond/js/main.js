/**
 * Created by Administrator on 15-11-20.
 */
var mainApp = angular.module("mainApp",["ngRoute","homeModule","aboutModule"]);

mainApp.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/home",{templateUrl:"ccg_Home/home.html",controller:"homeController"});
    $routeProvider.when("/about",{templateUrl:"zhaoyong_About/about.html",controller:"aboutController"});

    $routeProvider.otherwise({
        redirectTo:"/home"
    })
}]);


mainApp.controller("navController",function($scope,$location){
    $scope.homecolor="#000000";
    $scope.aboutcolor = "";
    $scope.servicescolor = "";
    $scope.projectscolor = "";
    $scope.clientscolor = "";
    $scope.concactscolor = "";
    $scope.clickhome = function(){
        $scope.homecolor="#000000";
        $scope.aboutcolor = "";
        $scope.servicescolor = "";
        $scope.projectscolor = "";
        $scope.clientscolor = "";
        $scope.concactscolor = "";
    };
    $scope.clickabout = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "#000000";
        $scope.servicescolor = "";
        $scope.projectscolor = "";
        $scope.clientscolor = "";
        $scope.concactscolor = "";
    };
    $scope.clickservices = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "";
        $scope.servicescolor = "#000000";
        $scope.projectscolor = "";
        $scope.clientscolor = "";
        $scope.concactscolor = "";
    }
    $scope.clickprojects = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "";
        $scope.servicescolor = "";
        $scope.projectscolor = "#000000";
        $scope.clientscolor = "";
        $scope.concactscolor = "";
    }
    $scope.clickclients = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "";
        $scope.servicescolor = "";
        $scope.projectscolor = "";
        $scope.clientscolor = "#000000";
        $scope.concactscolor = "";
    }
    $scope.clickconcacts = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "";
        $scope.servicescolor = "";
        $scope.projectscolor = "";
        $scope.clientscolor = "";
        $scope.concactscolor = "#000000";
    }
});