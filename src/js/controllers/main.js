function MainController ($scope) {
	$scope.count = 0;
	$scope.add = true;

	$scope.upgrade = function(){
		if($scope.add) {
			$scope.count += 1;
		} else {
			$scope.count -= 1;
		};
		
	};

	$scope.flip= function(){
		$scope.add = !$scope.add;
	};
};

MainController.$inject = ['$scope'];
export { MainController };