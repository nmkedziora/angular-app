function ProfileCtrl() {

  const vm = this;

  vm.showDetailsState = false;
  vm.showEditModal = false;

  vm.showDetails = function() {
    if (vm.showDetailsState === true) {
      vm.showDetailsState = false;
    } else {
      vm.showDetailsState = true;
    }
    // or simmply: vm.showDetailsState = !vm.showDetailsState
  };

  vm.editProfile = function() {
    console.log('edit');
    vm.showEditModal = !vm.showEditModal;
  }

  vm.closeEditModal = function() {
    vm.showEditModal = false;
  }
}

export default {
  name: 'ProfileCtrl',
  fn: ProfileCtrl
};
