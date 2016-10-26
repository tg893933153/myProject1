//获取angular应用程序
//module :参数1是ng-app指令的值，参数2是数组：元素为字符串：是依赖模块的名称
var app = angular.module('myApp',['ngRoute', 'angularCSS']);


//配置路由
app.config(['$routeProvider',function($routeProvider){
	//使用$routeProvider 服务处理各种锚点的值，并且返回不同的页面
	$routeProvider
	.when('/',{
		templateUrl: './home/html/home.html',
		controller: 'homeCtrl'
	})
	.when('/article',{
		templateUrl: './article/html/article.html',
		controller: 'articleCtrl'
	})
	.when('/shop',{
		templateUrl: './shop/html/shop.html',
		controller: 'shopCtrl'
	})
	.when('/discover',{
		templateUrl: './discover/html/discover.html',
		controller: 'discoverCtrl'
	})
	.when('/group',{
		templateUrl: './group/html/group.html',
		controller: 'groupCtrl'
	})
	.otherwise({
		redirectTo: '/' //重定向
	});
}]);


app.controller("headerCtrl", function($scope) {
	$scope.show = function(){
		nav.style.display = 'block';
	}
	$scope.hide = function(){
		nav.style.display = 'none';
	}
});
