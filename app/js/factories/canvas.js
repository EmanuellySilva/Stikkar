'use strict';

function CanvasFactory() {

  const factory = {};

  factory.canvas = {};
  factory.stickersCount = 0;
  factory.photosCount = 0;

  //Once DOM is loaded instantiate canvas
  angular.element(document).ready(function () {
      factory.canvas = new fabric.Canvas("play_board");
  });

  //getter for canvas
  factory.getCanvas = function() {
    return this.canvas;
  };

  //increment stickers count
  factory.incrementStickers = function () {
    factory.stickersCount++;
  };

  //decrement stickers count
  factory.decrementStickers = function () {
    factory.stickersCount--;
  };

  //increment photos count
  factory.incrementPhotos = function () {
    factory.photosCount++;
  };

  //decrement stickers count
  factory.decrementPhotos = function () {
    factory.photosCount--;
  };

  //factory push to respective index
  factory.bringForwardFromBottom = function (obj, index) {
    factory.canvas.sendToBack(obj);
    for (let i = 1; i < index; i++) {
      factory.canvas.bringForward(obj, false);
    }
  };

  return factory;
}

export default {
  name: 'CanvasFactory',
  fn: CanvasFactory
};