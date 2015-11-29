/**
 * Created by Administrator on 2015/11/29.
 */
var homeModule = angular.module("homeModule",[]);
homeModule.controller("homeController",function($scope,$location){
        $scope.oneleft = "0";
        $scope.twoleft = "940px";
        $scope.threeleft = "1880px";
            var i=0;
         $scope.theshuff=function(){
             setInterval(shuff,25)
         };
            $scope.theshuff();

            function shuff(){

                if(i<20){
                    $scope.$apply(function(){
                        if(parseInt($scope.oneleft)<=-940){
                            $scope.oneleft="1880px"
                        }
                        if(parseInt($scope.twoleft)<=-940){
                            $scope.twoleft="1880px"
                        }
                        if(parseInt($scope.threeleft)<=-940){
                            $scope.threeleft="1880px"
                        }
                        $scope.oneleft=(parseInt($scope.oneleft)-47)+"px";
                        $scope.twoleft=(parseInt($scope.twoleft)-47)+"px";
                        $scope.threeleft=(parseInt($scope.threeleft)-47)+"px";
                    });

            }
            i++;
            if(i>=120){
                i=0;
            }
        }
});

