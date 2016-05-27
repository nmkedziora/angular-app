function ChosenUserCtrl(ChosenUserService) {

  const vm = this;

  //ChosenUserService.get().then(onFulfilled, onRejected);
  ChosenUserService.get().then(onFulfilled, onRejected);

  function onFulfilled(response) {
    vm.users = response;
    console.log(vm.users);
    console.log(vm.users[0].name);
  }

  function onRejected() {
    console.log('error');
  }

}

ChosenUserCtrl.$inject = [
  'ChosenUserService'
]

export default {
  name: 'ChosenUserCtrl',
  fn: ChosenUserCtrl
};
