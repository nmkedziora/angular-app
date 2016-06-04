class PostsCtrl {
  constructor($scope, PostsService, ChosenUserService, CommentsService) {
    'ngInject'

    const vm = this;
    vm.chosenUserService = ChosenUserService;
    vm.comments = {};


    vm.getComments = function(post) {
      var chosenPostId = post.id;


      console.log('this:', vm);
      console.log('post id:', chosenPostId);

      CommentsService.get(chosenPostId).then(commentsOnFulfilled, commentsOnRejected);

      function commentsOnFulfilled(comments) {
        vm.comments[post.id] = comments;

        console.log('comments:', vm.comments);
        $scope.$apply();
      }

      function commentsOnRejected() {
        console.log('comments error');
      }
    }





    $scope.$watch('vm.chosenUserService.user', function() {
      if (!vm.chosenUserService.user) { // the first value === undefined
        return;
      }
      var chosenUserId = vm.chosenUserService.user.id;
      PostsService.get(chosenUserId).then(onFulfilled, onRejected);
    });


    function onFulfilled(postsList) {
      vm.posts = postsList;
      $scope.$apply();
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
