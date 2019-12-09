export const SliderEngine = {
    setSizeHtmlElement:function(_htmlElement, _width, _height){
      _htmlElement.style.width = _width + 'px';
      _htmlElement.style.height = _height + 'px';
      this.sliderWidth = _width;
      this.sliderHeight = _height;
    },
    setPositionHtmlElement:function(_htmlElement, _x, _y){
      _htmlElement.style.left = _x+ 'px';
      _htmlElement.style.top = _y+ 'px';
      this.sliderLeft = _x;
      this.sliderTop = _y;        
    },
    getSliderDiv:function(idSelector){
      this.currentSlider = document.getElementById(idSelector);
      this.currentSlider.style.position = 'absolute';
      this.sliderWidth = Number.parseInt(this.currentSlider.style.width)||0;
      this.sliderHeight = Number.parseInt(this.currentSlider.style.height)||0;
      this.sliderTop = Number.parseInt(this.currentSlider.style.top)||0;
      this.sliderLeft = Number.parseInt(this.currentSlider.style.left)||0;
      return this.currentSlider;    
    },
    currentSlider:null,
    sliderWidth:0,
    sliderHeight:0,
    sliderTop:0,
    sliderLeft:0  
  }