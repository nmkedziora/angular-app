function AlbumsService($http) {
  'ngInject'

  const service = {};

  service.get = function(userId) {
    return new Promise((resolve, reject) => {
      $http.get('http://jsonplaceholder.typicode.com/albums', {
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
  name: 'AlbumsService',
  fn: AlbumsService
};
