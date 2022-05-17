import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-shideshow',
  template: `
      
        `
})
export class SlideshowComponent {
  @ViewChild('nav') slider: NgImageSliderComponent;
  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }


  name = 'Angular';
  imageObject = [{
    video: 'https://youtu.be/tYa6OLQHrEc',
    title: 'Youtube example one with title.',
    alt: 'youtube video'
  }, {
    video: 'https://youtu.be/6pxRHBw-k8M',
    alt: 'youtube video'
  }]
}