function ExampleCtrl($scope) {
    $scope.people = [
    {name: 'viddesh', age: 22, title:'developer'},
    {name: 'Rishiraj', age: 23, title:'software developer'},
    {name: 'Sagar', age: 25, title:'web developer'}
    ];

    $scope.addPerson = function(){
        var person = {
            name:$scope.name,
            age:$scope.age,
            title:$scope.title,
        };

        $scope.people.push(person);
    };

    $scope.removePerson = function(x){
        $scope.people.splice(x,1);
    };
}