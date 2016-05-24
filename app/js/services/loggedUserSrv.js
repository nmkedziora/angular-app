function LoggedUserSrv() {
  'ngInject';

  const service = {};

  service.get = function() {

    return {
      name: 'Clementine',
      surname: 'Bauch',
      nickname: 'Samantha',
      address: {
        district: 'Douglas Extension',
        street: 'Suite 847',
        city: 'McKenzieHeaven'
      },
      telephone: '6852556325'
    }
  }

  return service;
}

export default {
  name: 'LoggedUserSrv',
  fn: LoggedUserSrv
};
