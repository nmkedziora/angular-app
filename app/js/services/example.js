function ExampleService($http) {
  'ngInject';

  const service = {};

  service.get = function() {
    return new Promise((resolve, reject) => {
      $http.get('http://jsonplaceholder.typicode.com/posts/1').success((data) => {
        var test = resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;

}

export default {
  name: 'ExampleService',
  fn: ExampleService
};
