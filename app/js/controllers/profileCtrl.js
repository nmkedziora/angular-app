function ProfileCtrl() {

  const vm = this;

  vm.hide = true;

  vm.showDetails = function() {
    if (vm.hide === true) {
      vm.hide = false;
    } else {
      vm.hide = true;
    }
    // or simmply: vm.hide = !vm.hide
  };
}

export default {
  name: 'ProfileCtrl',
  fn: ProfileCtrl
};
