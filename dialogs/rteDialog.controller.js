angular.module("umbraco").controller("u7dtg.RteDialogController",
    function ($scope, editorService) {
        $scope.data = $scope.model.dialogData;
        var vm = this;
        vm.submit = submit;
        vm.close = close;

        function submit() {
            if ($scope.model.submit) {
                $scope.model.submit($scope.data);
            }
        }

        function close() {
            if ($scope.model.close) {
                $scope.model.close();
            }
        }
    });