app.controller("discoverCtrl", function ($scope, $css, $http) {
    $css.removeAll();
    $css.add("./discover/css/discover.css");

    console.log('discover');

    $http.get("http://localhost:8888/data/discover.json").success(function (data) {

        angular.forEach(data, function (data) {
            console.log(data);
            $scope.name = data.product;
            });
        angular.forEach(data, function (data) {
            console.log(data);
            $scope.art = data.article;
            });
    });
});
