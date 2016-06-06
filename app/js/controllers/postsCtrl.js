class PostsCtrl {
  constructor($scope, PostsService, ChosenUserService, CommentsService) {
    'ngInject'

    const vm = this;
    vm.chosenUserService = ChosenUserService;
    vm.comments = {};


    vm.getComments = post => {
      var chosenPostId = post.id;

      if(vm.comments[post.id]) {
        return
      }

      CommentsService.get(chosenPostId).then(comments => {
          vm.comments[post.id] = comments;
          $scope.$apply();
        }, () => console.log('comments error')
      );
    }

    vm.toggleComments = post => post.commentsVisible = !post.commentsVisible;


    $scope.$watch('vm.chosenUserService.user', () => {
      if (!vm.chosenUserService.user) { // the first value === undefined
        return;
      }
      var chosenUserId = vm.chosenUserService.user.id;

      PostsService.get(chosenUserId).then(postsList => {
          vm.posts = postsList;
          $scope.$apply();
        }, () => console.log('posts error')
      );
    });
  }
}

export default {
  name: 'PostsCtrl',
  fn: PostsCtrl
};
