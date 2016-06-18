function PhotosService($http) {
  'ngInject'

  const service = {};

  service.get = function(albumId) {
    return new Promise((resolve, reject) => {
      $http.get('http://jsonplaceholder.typicode.com/photos', {
        params: {
          'albumId': albumId
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
  name: 'PhotosService',
  fn: PhotosService
};
