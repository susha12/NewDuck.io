// прелоадер
  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
      boxDucks.classList.add('active');
      boxTitle.classList.add('active');
    }, 500);
  }

let boxDucks = document.querySelector(".box_ducks");
let boxTitle = document.querySelector(".box_title");


//   nav black background
let nav = document.querySelector("nav");
let blackWallpaper = document.querySelector(".black_wallpaper");

window.onscroll = function () { 
    if (window.pageYOffset > 30){
        nav.style.background = "black";
        blackWallpaper.style.display = "flex";
    }
    else{
        nav.style.background = "none";
        blackWallpaper.style.display = "none";
    }
}



//настройки шума, тут покрутишь найдешь нужное.
class Grain {
    constructor (el) {
      this.patternSize = 150;
      this.patternScaleX = 1;
      this.patternScaleY = 1;
      this.patternRefreshInterval = 1;
      this.patternAlpha = 75; 
  
      this.canvas = el;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.scale(this.patternScaleX, this.patternScaleY);
      this.patternCanvas = document.createElement('canvas');
      this.patternCanvas.width = this.patternSize;
      this.patternCanvas.height = this.patternSize;
      this.patternCtx = this.patternCanvas.getContext('2d');
      this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
      this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4
      this.resize = this.resize.bind(this);
      this.loop = this.loop.bind(this);
      
      this.frame = 0;
      
      window.addEventListener('resize', this.resize);
      this.resize();
  
      window.requestAnimationFrame(this.loop);
    }
    
    resize () {
      this.canvas.width = window.innerWidth * devicePixelRatio;
      this.canvas.height = window.innerHeight * devicePixelRatio;
    }
  
    update () {
      const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;
  
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
  
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }
  
      patternCtx.putImageData(patternData, 0, 0);
    }
  
    draw () {
      const {ctx, patternCanvas, canvas, viewHeight} = this;
      const {width, height} = canvas;
  
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
      ctx.fillRect(0, 0, width, height);
    }
  
    loop () {
      const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
      if (shouldDraw) {
        this.update();
        this.draw();
      }
  
      window.requestAnimationFrame(this.loop);
    }
  }
  
  const el = document.querySelector('.grain');
  const grain = new Grain(el);


