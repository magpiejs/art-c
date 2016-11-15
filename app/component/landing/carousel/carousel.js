'use strict';

require('./_carousel.scss');

module.exports = {
  template: require('./carousel.html'),
  controller: ['$log', CarouselController],
  controllerAs: 'carouselCtrl',
};

function CarouselController($log){
  $log.debug('init carouselCtrl');

  this.active = 0;
  this.interval = 3000;
  this.slides = [
    {
      image: 'http://i68.tinypic.com/2wbt6if.jpg',
      id: 0,
    },
    {
      image: 'http://i67.tinypic.com/20qxv9l.jpg',
      id: 1,
    },
    {
      image: 'http://i66.tinypic.com/oqetlk.jpg',
      id:2,
    },
  ];
}