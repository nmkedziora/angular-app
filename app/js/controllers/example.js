function ExampleCtrl(ExampleService) {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

  ExampleService.get()
    .then(data => {
      console.log(data);
      console.log(data.userId);
    });


}

ExampleCtrl.$inject = [
  'ExampleService'
]

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
