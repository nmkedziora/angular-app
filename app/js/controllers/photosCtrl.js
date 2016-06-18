class PhotosCtrl {
  constructor($scope, ChosenUserService, AlbumsService, PhotosService) {
    'ngInject'

    const vm = this;
    vm.ChosenUserService = ChosenUserService;
    vm.photosLimit = 9;

    $scope.$watch('vm.ChosenUserService.user', function() {
      console.log(vm.ChosenUserService.user);
      if (!vm.ChosenUserService.user) {
        return;
      }
      var chosenUserId = vm.ChosenUserService.user.id;

      AlbumsService.get(chosenUserId).then(albumsOnFulfilled, albumsOnRejected);
    });

    function albumsOnFulfilled(albumsList) {
      vm.albums = albumsList;
      PhotosService.get(vm.albums[0].id).then(photosOnFulfilled, photosonRejected);

      function photosOnFulfilled(photosList) {
        vm.photos = photosList;
        console.log('photos:', photosList);
        $scope.$apply();
      }

      function photosonRejected() {
        console.log('photos error');
      }

      $scope.$apply();
    }

    function albumsOnRejected() {
      console.log('albums error');
    }

    vm.showImgModal = false;

    vm.showImage = function(photo) {
      console.log(photo);
      vm.ImageUrl = photo.url;
      vm.showImgModal = !vm.showImgModal;
    }

    vm.closeImage = function(){
      vm.showImgModal = !vm.showImgModal;
    }

    vm.loadMorePhotos = function() {
      vm.photosLimit += 3;
    }
  }

}

export default {
  name: 'PhotosCtrl',
  fn: PhotosCtrl
};
