(function(){'use strict';function a(){// animate
// Debug
requestAnimationFrame(a),d.clearRect(0,0,window.innerWidth,window.innerHeight),e.update(),e.draw(),d.save(),d.lineWidth=10,d.strokeStyle="purple",d.strokeRect(0,0,window.innerWidth,window.innerHeight),d.restore()}const b=2*Math.PI;let c=document.getElementsByTagName("canvas")[0];c.width=window.innerWidth,c.height=window.innerHeight;let d=c.getContext("2d");// ctx.fillRect(100, 100, 30, 30)
let e=new class{// Circle
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
             */this.c=a,this.x=b,this.y=c,this.dx=d,this.dy=e,this.radius=f}draw(){this.c.save(),this.c.beginPath(),this.c.arc(this.x,this.y,this.radius,0,b),this.c.strokeStyle="blue",this.c.stroke(),this.c.restore()}update(){this.checkBounds(),this.x+=this.dx,this.y+=this.dy}checkBounds(){(this.x+this.radius>innerWidth||0>this.x-this.radius)&&(this.dx=-this.dx),(this.y+this.radius>innerHeight||0>this.y-this.radius)&&(this.dy=-this.dy)}}(d,50,200,1,1,30);a()})();
