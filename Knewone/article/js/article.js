app.controller("articleCtrl", function ($scope, $css) {
    // $scope.name = 'fjlkad';

    $css.removeAll();
    $css.add('./article/css/article.css');
    
    $scope.change = function(){
    	console.log();
    	$('.article .article-nav ul li').removeClass('color');
    	$('').addClass('color')
    }//未完成
    
    
    $scope.goTop = function(){
//  	window.scrollTop -= 100 +'px';
//  	window.scrollTo(0,0);
    	$('body').animate({
				scrollTop:0
			},300)
    }
    
});
