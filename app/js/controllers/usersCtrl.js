function UsersCtrl($scope, UsersService, ChosenUserService) {

  const vm = this;
  vm.chosenUserService = ChosenUserService;

  vm.getChosenUserId = function(user) {
    vm.chosenUserService.user = user;
  }

  UsersService.get().then(onFulfilled, onRejected);

  function onFulfilled(data) {
    vm.users = data;
    vm.chosenUserService.user = vm.users[0];
    $scope.$apply();
  }

  function onRejected() {
    console.log('users error');
  }

}

UsersCtrl.$inject = [
  '$scope',
  'UsersService',
  'ChosenUserService'
]

export default {
  name: 'UsersCtrl',
  fn: UsersCtrl
};
