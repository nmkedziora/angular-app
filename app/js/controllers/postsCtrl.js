class PostsCtrl {
  constructor($scope, PostsService, ChosenUserService) {
    'ngInject'

    const vm = this;
    vm.chosenUserService = ChosenUserService;

    $scope.$watch('vm.chosenUserService.user', function() {
      if (!vm.chosenUserService.user) {
        return;
      }
      var chosenUserId = vm.chosenUserService.user.id;

      PostsService.get(chosenUserId).then(onFulfilled, onRejected);
    });

    function onFulfilled(postsList) {
      vm.posts = postsList;
    }

    function onRejected() {
      console.log('posts error');
    }
  }
}

export default {
  name: 'PostsCtrl',
  fn: PostsCtrl
};
