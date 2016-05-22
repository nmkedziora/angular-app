function ExampleService($http) {
  'ngInject';

  const service = {};

  service.get = function() {
    return $http.get('http://jsonplaceholder.typicode.com/posts/1');
  };

  return service;

}

export default {
  name: 'ExampleService',
  fn: ExampleService
};
