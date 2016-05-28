class ChosenUserCtrl {
  constructor($scope, ChosenUserService) {
    'ngInject'

    const vm = this;

    vm.chosenUserService = ChosenUserService;

  }
}


export default {
  name: 'ChosenUserCtrl',
  fn: ChosenUserCtrl
}
