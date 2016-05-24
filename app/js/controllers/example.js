function ExampleCtrl(ExampleService) {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

  ExampleService.get().then(onFulfiled, onRejected);

  function onFulfiled (response) {
    vm.obiekt = response.data;
    // console.log(vm.obiekt);
    // console.log(vm.obiekt.title);
  }

  function onRejected () {
    console.log('Error');
  }

}

ExampleCtrl.$inject = [
  'ExampleService'
]

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
