'use strict';
import { SliderEngine } from './library.js';
document.title = 'Slider Plugin';
const gWidth = window.innerWidth;
const gHeight = window.innerHeight;
const sliderDiv = SliderEngine.getSliderDiv('js_slider_div');
console.log(SliderEngine);
SliderEngine.setSizeHtmlElement(sliderDiv, gWidth/3, gHeight/3);
SliderEngine.setPositionHtmlElement(sliderDiv, .5 *(gWidth-SliderEngine.sliderWidth), .5*(gHeight - SliderEngine.sliderHeight))