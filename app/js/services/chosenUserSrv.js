function ChosenUserService($http) {
  'ngInject'

  const service = {};

  service.get = function() {
    return new Promise((resolve, reject) => {
      $http.get('http://jsonplaceholder.typicode.com/users').success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  }

  return service;

}

export default {
  name: 'ChosenUserService',
  fn: ChosenUserService
};
