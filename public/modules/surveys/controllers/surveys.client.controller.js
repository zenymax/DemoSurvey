'use strict';

// Surveys controller
angular.module('surveys').controller('SurveysController', ['$scope', '$stateParams', '$location', 'Authentication', 'Surveys',
    function($scope, $stateParams, $location, Authentication, Surveys) {
        $scope.authentication = Authentication;

        $scope.survey = {};
        $scope.questions = [{}];

        $scope.addNewQuestion = function() {
            $scope.questions.push({});
        };

        $scope.removeQuestion = function() {
            var lastItem = $scope.questions.length - 1;
            $scope.questions.splice(lastItem);
        };

        // Create new Survey
        $scope.create = function() {
            // Create new Survey object
            var survey = new Surveys({
                name: $scope.survey.name,
                description: $scope.survey.description,
                data: $scope.questions
            });

            if ($scope.survey.name) {
                survey.$save(function(response) {

                    // Clear form fields
                    $scope.survey = {};
                    $scope.questions = [{}];
                }, function(errorResponse) {
                    $scope.error = errorResponse.data.message;
                });
            } else {
                $scope.error = "Missing data";
            }
        };

        // Remove existing Survey
        $scope.remove = function(survey) {
            if (survey) {
                survey.$remove();

                for (var i in $scope.surveys) {
                    if ($scope.surveys[i] === survey) {
                        $scope.surveys.splice(i, 1);
                    }
                }
            } else {
                $scope.survey.$remove(function() {
                    $location.path('surveys');
                });
            }
        };

        // Update existing Survey
        $scope.update = function() {
            var survey = $scope.survey;

            survey.$update(function() {
                $location.path('surveys/' + survey._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Find a list of Surveys
        $scope.find = function() {
            $scope.surveys = Surveys.query();
        };

        // Find existing Survey
        $scope.findOne = function() {
            $scope.survey = Surveys.get({
                surveyId: $stateParams.surveyId
            });
        };
    }
]);