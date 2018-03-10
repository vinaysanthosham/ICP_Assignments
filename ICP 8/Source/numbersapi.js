angular.module('numbersApiApp', ['ngSanitize']).controller('NumbersCtrl', function ($scope, $http) {
    $scope.getNumbersApiInfo = function () {
        var month = $("#month").val();
        var date = $("#date").val();


        $("#fielderror").hide();
        $("#output").hide();

        // Validations
        if (!(month && date)) {
            $scope.fielderrorhtml = "Year and Month cannot be empty";
            $("#fielderror").show();
            return false;
        } else if (isNaN(month) || isNaN(date)) {
            $scope.fielderrorhtml = "Year or Month should be in Number format (Ex: 01)";
            $("#fielderror").show();
            return false;
        }

        var numbersOutput = $http.get("http://numbersapi.com/" + month + "/" + date + "/date?json");
        numbersOutput.success(function (data) {

            if (data == null || data.text == null) {
                $scope.fielderrorhtml = "No records found for the year" + year + ", month " + month + " passed";
                $("#fielderror").show();
                return false;
            }
            $scope.output = data.text;
            $("#output").show();
        })
        numbersOutput.error(function (data) {
            alert("There was some error processing your request. Please try after some time.");
        });
    }
});