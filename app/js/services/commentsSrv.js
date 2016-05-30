function CommentsService($http) {
  'ngInject'

  const service = {};

  service.get = function(postId) {
    return new Promise((resolve, reject) => {
      $http.get('http://jsonplaceholder.typicode.com/comments', {
        params: {
          'postId': postId
        }
      })
      .success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  }

  return service;

}

export default {
  name: 'CommentsService',
  fn: CommentsService
};
