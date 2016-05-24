function LoggedUserCtrl(LoggedUserSrv) {

  const vm = this;

  vm.loggedUser = LoggedUserSrv.get();
  vm.detailsVisible = false;

  vm.showDetails = function() {
    vm.detailsVisible = !vm.detailsVisible;
  }
}

LoggedUserCtrl.$inject = [
  'LoggedUserSrv'
]

export default {
  name: 'LoggedUserCtrl',
  fn: LoggedUserCtrl
}
