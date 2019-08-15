(function(){'use strict';function a(){let a=window.innerWidth,b=window.innerHeight;var c=Math.min(a/f,b/g);d.style.width=a+"px",d.style.height=b+"px",d.width=a,d.height=b,console.log(e.getTransform());let h=a/2-320*c;console.log(h,c),e.setTransform(c,0,// or use scaleFillNative 
0,c,h,b/2-180*c)}function b(){// animate
// Debug
requestAnimationFrame(b),e.clearRect(0,-0,f,g),h.update(),h.draw(),e.save(),e.lineWidth=1,e.strokeStyle="purple",e.strokeRect(0,0,f,g),e.restore()}const c=2*Math.PI,d=document.getElementsByTagName("canvas")[0];let e=d.getContext("2d");// Resolution
// const nativeWidth = 320
// const nativeHeight = 240
const f=640,g=360;a(),window.addEventListener("resize",()=>{a()});let h=new class{// Circle
/**
         * Entity constructor
         * @param {CanvasRenderingContext2D} ctx The rendering context of this entity
         * @param {number} x X Position of entity
         * @param {number} y Y Position of entity
         * @param {number} dx X velocity of entity
         * @param {number} dy Y velocity of entity
         * @param {number} radius Radius of entity
         */constructor(a,b,c,d,e,f){/** @private 
             * @property {CanvasRenderingContext2D} c The rendering context of this entity
             */this.c=a,this.x=b,this.y=c,this.dx=d,this.dy=e,this.radius=f}draw(){this.c.save(),this.c.beginPath(),this.c.arc(this.x,this.y,this.radius,0,c),this.c.strokeStyle="blue",this.c.stroke(),this.c.restore()}update(){this.checkBounds(),this.x+=this.dx,this.y+=this.dy}checkBounds(){(this.x+this.dx+this.radius>=f||0>this.x+this.dx-this.radius)&&(this.dx=-this.dx),(this.y+this.dy+this.radius>=g||0>this.y+this.dy-this.radius)&&(this.dy=-this.dy)}}(e,50,200,2,2,30);b()})();
//# sourceMappingURL=bundle.js.map
