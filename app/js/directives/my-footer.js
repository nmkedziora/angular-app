function MyFooterDirective() {

  return {
    restrict: 'E',
    templateUrl: 'directives/my-footer.html',
  };
}

export default {
  name: 'myFooterDirective',
  fn: MyFooterDirective
};
