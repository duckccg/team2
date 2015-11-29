/**
 * Created by Administrator on 15-11-20.
 */
var mainApp = angular.module("mainApp",["ngRoute","homeModule","aboutModule","clientsModule","projectsModule","serviceModule","contactsModule"]);

mainApp.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/home",{templateUrl:"ccg_Home/home.html",controller:"homeController"});
    $routeProvider.when("/about",{templateUrl:"zhaoyong_About/about.html",controller:"aboutController"});
    $routeProvider.when("/clients",{templateUrl:"yangmei_Clients/clients.html",controller:"clientsController"});
    $routeProvider.when("/projects",{templateUrl:"xudechuan_Projects/project.html",controller:"projectsController"});
    $routeProvider.when("/service",{templateUrl:"yuwenya_Services/services.html",controller:"serviceController"});
    $routeProvider.when("/contacts",{templateUrl:"yangqin_Contacts/contacts.html",controller:"contactsController"});

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
        $location.path("/home")
    };
    $scope.clickabout = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "#000000";
        $scope.servicescolor = "";
        $scope.projectscolor = "";
        $scope.clientscolor = "";
        $scope.concactscolor = "";
        $location.path("/about")
    };
    $scope.clickservices = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "";
        $scope.servicescolor = "#000000";
        $scope.projectscolor = "";
        $scope.clientscolor = "";
        $scope.concactscolor = "";
        $location.path("service")
    };
    $scope.clickprojects = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "";
        $scope.servicescolor = "";
        $scope.projectscolor = "#000000";
        $scope.clientscolor = "";
        $scope.concactscolor = "";
        $location.path("/projects")
    };
    $scope.clickclients = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "";
        $scope.servicescolor = "";
        $scope.projectscolor = "";
        $scope.clientscolor = "#000000";
        $scope.concactscolor = "";
        $location.path("/clients")
    };
    $scope.clickconcacts = function(){
        $scope.homecolor="";
        $scope.aboutcolor = "";
        $scope.servicescolor = "";
        $scope.projectscolor = "";
        $scope.clientscolor = "";
        $scope.concactscolor = "#000000";
        $location.path("/contacts")
    }
});