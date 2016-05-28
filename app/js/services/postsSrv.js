function PostsService($http) {
  'ngInject'

  const service = {};

  service.get = function(userId) {
    return new Promise((resolve, reject) => {
      $http.get('http://jsonplaceholder.typicode.com/posts', {
        params: {
          'userId': userId
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
  name: 'PostsService',
  fn: PostsService
};
