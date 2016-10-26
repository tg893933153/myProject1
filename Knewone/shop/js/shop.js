app.controller("shopCtrl", function ($scope, $css) {
    // $scope.name = 'fjlkad';

    $css.removeAll();
    $css.add('./shop/css/shop.css');
    
    $scope.goTop = function(){
    	$('body').animate({
				scrollTop:0
			},300)
    }
});
