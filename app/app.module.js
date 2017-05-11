// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-resource';
import 'angular-webaudio';

import AppController from './app.controller';
import Recording from './app.service';
//import Users from 'src/users/Users';

export default angular.module( 'rm-app', [ 'ngMaterial','ngMessages','ngResource','ngWebAudio'] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "../assets/img/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24)
      .icon("communication:sip","/assets/svg/ic_dialer_sip_black_24px.svg",24)
      .icon("file:cloudupload","/assets/svg/ic_cloud_upload_black_24px.svg",24)
      .icon("file:clouddone","/assets/svg/ic_cloud_done_black_24px.svg",24)
      .icon("file:download","/assets/svg/ic_file_download_black_24px.svg",24);




    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  })
  .service('Recording', Recording)
  .controller('AppController', AppController);

  Recording.$inject = ['$resource','$http'];
  AppController.$inject = ['$mdSidenav','$resource','Recording','$mdDialog','$timeout','WebAudio'];
