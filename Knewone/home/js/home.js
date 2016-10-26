app.controller("homeCtrl", function ($scope, $css) {
    // $scope.name = 'fjlkad';
    $css.removeAll();
    $css.add('./home/css/home.css');
    
    $scope.color = function(){
    	document.querySelector('.home-search').style.color = "#AAAAAA"
    	document.querySelector('.home-search>input').style.left = '4rem'
    };
    $scope.changeColor = function(){
    	document.querySelector('.home-search>input').style.left = '.5rem'
    	document.querySelector('.home-search').style.color = "#47B2E2"
    };
    
    $scope.goTop = function(){
//  	window.scrollTop -= 100 +'px';
//  	window.scrollTo(0,0);
    	$('body').animate({
				scrollTop:0
			},300)
    }
});
