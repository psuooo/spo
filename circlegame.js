//s12...


$("html").remove();

window.onload = function(){

document.writeln("<html>");
document.writeln("<head>");
document.writeln("<style type=\'text/css\'>");
document.writeln("body {margin: 0;padding: 0;font-family: Georgia, serif;text-shadow: 1px 2px #ccc;color: #fff;}");
document.writeln("canvas {background-color: #eaeaea;width: 100%;height: 100%;}");
document.writeln(".points {font-family: Arial, sans-serif;position: absolute;top: 24px;right: 24px;z-index: 999;margin: 0;padding: 0;font-size: 128px;line-height: 128px;}");
document.writeln("</style>");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("<h1 class=\"points\"></h1>");
document.writeln("<canvas></canvas>");
document.writeln("</body>");
document.writeln("</html>");
  

};

function isCanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}
function rand(min,max,interval) {
  if(interval)
    return min + Math.round(Math.random() * (max - min))
  else
    return min + Math.round(Math.random() * interval) * (max - min) / interval
}

var isEventSupported = (function(){
 var TAGNAMES = {
   'select':'input','change':'input',
   'submit':'form','reset':'form',
   'error':'img','load':'img','abort':'img'
 }
 function isEventSupported(eventName) {
   var el = document.createElement(TAGNAMES[eventName] || 'div');
   eventName = 'on' + eventName;
   var isSupported = (eventName in el);
   if (!isSupported) {
     el.setAttribute(eventName, 'return;');
     isSupported = typeof el[eventName] == 'function';
   }
   el = null;
   return isSupported;
 }
 return isEventSupported;
})();

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 30);
          };
})();


// Copyright 2011 Shea Barton
// Modified with permission for polkadotgame.com
// Otherwise, no unauthorized copying or modification
 
var cg = {
	lastTime: (new Date()).getTime(), config: {
		width: 640,
		height: 960,
		autosize: true,
		circle: {
			count: 1.75,
			minRadius: 5,
			maxRadius: 55,
			playerRadius: 10,
			radiusInterval: 10,
			speedScale: 3,
			colors: ['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#4c5764', '#45b7af', '#b2da59', '#e45f5f']
     	},
     	touchmove: isEventSupported('touchmove')
     },
     circles: [],
     death: function() {
     	pts = cg.player.radius
     	this.stop()
	cg.init()
	alert('你的教育结束，单击画面重新开始。')
     	
     },
     stop: function() {
     	$(window).unbind('keydown')
     	$(window).unbind('blur')
     	$(document).unbind('touchmove')
     	$(this.canvas).unbind('mousemove')
     	cg.showCursor()
     	this.player = false
     },
     start: function() {
     	cg.dispText = function() {}
     	$(cg.canvas).unbind('click')
     	cg.player = new Player()
     	cg.circles = []
     	cg.hideCursor()
     	if(cg.config.touchmove)
     		$(document).bind('touchmove', cg.touchMove)
     	else
     		$(cg.canvas).mousemove(cg.mouseMove)
     		$(window).blur(function() {
     			cg.pause()
     		})
     		$(window).keydown(function(e) {
     			if(e.keyCode == 32) {
     				cg.togglePause()
     				e.preventDefault()
     			}
     		})
     	},
     	maxCircles: function() {
     		return Math.round(cg.config.width * cg.config.height / (10 * 1000) / cg.config.circle.count)
     	},
     	hideCursor: function() {
     		$(cg.canvas).css('cursor', 'none')
     	},
     	showCursor: function() {
     		$(cg.canvas).css('cursor', 'default')
     	},
     	pause: function() {
     		if(!this.paused) {
     			cg.showCursor()
     			cg.dispText = function() {
     				this.ctx.font = '96px Clicker Script'
    			 	this.ctx.fillStyle = '#fff'
    			 	this.ctx.shadowColor = '#ccc'
    			 	this.ctx.shadowBlur = 1;
    			 	this.ctx.shadowOffsetX = 2;
    			 	this.ctx.shadowOffsetY = 2;
    			 	w = this.ctx.measureText(t = 'Paused').width
    			 	this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2)
    			 	this.ctx.font = 'italic 20px Georgia'
    			 	this.ctx.fontStyle = 'italic'
    			 	this.ctx.fillStyle = '#fff'
    			 	this.ctx.shadowColor = '#aaa'
    			 	this.ctx.shadowBlur = 1;
    			 	this.ctx.shadowOffsetX = 1;
    			 	this.ctx.shadowOffsetY = 1;
    			 	w = this.ctx.measureText(t = 'Press Space to Unpause').width
    			 	this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2 + 40)
     			}
     			this.paused = true
     		}
     	},
     	unpause: function() {
     		if(this.paused) {
     			cg.dispText = function() {}
     			cg.hideCursor()
     			this.paused = false
     		}
     	},
     	togglePause: function() {
     		if(this.paused)
     			this.unpause()
     		else
     			this.pause()
     	},
     	init: function() {
     	
     	/* Formatted to Here TMC */
     	
     cg.autosize()

     this.canvas = $('canvas')
     this.canvas.attr({width: this.config.width, height: this.config.height})
     this.canvas = this.canvas[0]
     this.ctx = this.canvas.getContext('2d')

     for(var i = this.circles.length; i < cg.maxCircles(); i++)
       this.circles[i] = new Circle(true)


     var mm = function(e) {
       if(cg.inZBounds(e.clientX, e.clientY)) {
         $(cg.canvas).css('cursor','pointer')
       } else {
         $(cg.canvas).css('cursor', 'default')
       }
     }

     $(this.canvas).mousemove(mm)

     $(this.canvas).click(function(e) {
       if(cg.inZBounds(e.clientX,e.clientY)) {
         window.open('http://www.baidu.com','_blank')
       } else {
         $(cg.canvas).unbind('click')
         cg.start()
       }
     })

     this.tick()
   },
   inZBounds: function(x,y) {
     return (x > cg.zLogoX &&
        x < cg.zLogoX + cg.zWidth &&
        y > cg.zLogoY &&
        y < cg.zLogoY + cg.zHeight)
   },
   autosize: function() {
     if(cg.config.autosize) {
       cg.config.width = window.innerWidth
       cg.config.height = window.innerHeight
       $(cg.canvas).attr({width: cg.config.width, height: cg.config.height})
     }
   },
   tick: function() {
    now = (new Date()).getTime()
    window.elapsed = now - cg.lastTime
    cg.lastTime = now

    requestAnimFrame(cg.tick)

     cg.autosize()

     cg.ctx.clearRect(0,0,cg.config.width,cg.config.height)

     if(cg.paused) {
       for(var i = 0; i < cg.circles.length; i++)
         if(cg.circles[i])
           if(cg.circles[i].render())
             i--
     } else {
       if(cg.circles.length < cg.maxCircles() && Math.random() < 0.25)
         cg.circles.push(new Circle())

       for(var i = 0; i < cg.circles.length; i++)
         if(cg.circles[i])
           if(cg.circles[i].tick())
             i--
     }
     if(typeof(cg.player) != 'undefined' && cg.player)
       cg.player.tick()

     cg.dispText()

   },
   touchMove: function(e) {
     e.preventDefault()
     var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]
     cg.mouseMove(touch)
   },
   mouseMove: function(e) {
     if(!cg.paused) {
       cg.player.x = e.clientX
       cg.player.y = e.clientY
     }
   },
   dispText: function() {
     this.ctx.font = '96px Clicker Script'
     this.ctx.fillStyle = '#fff'
     this.ctx.shadowColor = '#ccc'
     this.ctx.shadowBlur = 1;
     this.ctx.shadowOffsetX = 2;
     this.ctx.shadowOffsetY = 2;
     w = this.ctx.measureText(t = '性教育游戏').width
     this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2)
     this.ctx.font = 'italic 20px Georgia'
     this.ctx.fontStyle = 'italic'
     this.ctx.fillStyle = '#fff'
     this.ctx.shadowColor = '#aaa'
     this.ctx.shadowBlur = 1;
     this.ctx.shadowOffsetX = 1;
     this.ctx.shadowOffsetY = 1;
     w = this.ctx.measureText(t = 'Eat smaller dots. Avoid bigger dots.').width
     this.ctx.fillText(t, (this.config.width - w)/2, cg.config.height / 2 + 40)
   }
 }
 var Circle = function(inCenter) {
   min = cg.config.circle.minRadius
   max = cg.config.circle.maxRadius

   if(typeof(cg.player) != 'undefined' && cg.player) {
     if(min < cg.player.radius - 35)
       min = cg.player.radius - 35
     if(max < cg.player.radius + 15)
       max = cg.player.radius + 15
   }
   this.radius = rand(min,max,cg.config.circle.radiusInterval)
   this.color = cg.config.circle.colors[Math.floor(Math.random() * cg.config.circle.colors.length)]

   if(inCenter) {
     this.x = Math.random() * cg.config.width
     this.y = Math.random() * cg.config.height
     this.vx = Math.random() - .5
     this.vy = Math.random() - .5
   } else {
     r = Math.random()
     if(r <= .25) {
       this.x = 1 - this.radius
       this.y = Math.random() * cg.config.height
       this.vx = Math.random()
       this.vy = Math.random() - .5
     } else if(r > .25 && r <= .5) {
       this.x = cg.config.width + this.radius - 1
       this.y = Math.random() * cg.config.height
       this.vx = - Math.random()
       this.vy = Math.random() - .5
     } else if(r > .5 && r <= .75) {
       this.x = Math.random() * cg.config.height
       this.y = 1 - this.radius
       this.vx = Math.random() - .5
       this.vy = Math.random()
     } else {
       this.x = Math.random() * cg.config.height
       this.y = cg.config.height + this.radius - 1
       this.vx = Math.random() - .5
       this.vy = - Math.random()
     }
   }
   this.vx *= cg.config.circle.speedScale
   this.vy *= cg.config.circle.speedScale
   if(Math.abs(this.vx) + Math.abs(this.vy) < 1) {
     this.vx = this.vx < 0 ? -1 : 1
     this.vy = this.vy < 0 ? -1 : 1
   }

   this.tick = function() {
     if(!this.inBounds()) {
       for(var i = 0; i < cg.circles.length; i++)
         if(cg.circles[i].x == this.x && cg.circles[i].y == this.y) {
           cg.circles.splice(i,1)
           return true
         }
     } else {
       this.move()
       this.render()
     }
   }

   this.inBounds = function() {
     if(this.x + this.radius < 0 ||
        this.x - this.radius > cg.config.width ||
        this.y + this.radius < 0 ||
        this.y - this.radius > cg.config.height)
       return false
     else
       return true
   }

   this.move = function() {
     this.x += this.vx * elapsed / 15
     this.y += this.vy * elapsed / 15
   }

   this.render = function() {
     cg.ctx.beginPath()
     cg.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
     cg.ctx.fillStyle = this.color
     cg.ctx.closePath()
     cg.ctx.fill()
   }

   this.render()
 }
 var Player = function() {
   this.x = cg.config.width / 2
   this.y = cg.config.height / 2
   this.color = 'white'
   this.radius = cg.config.circle.playerRadius
   this.tick = function() {
     this.detectCollision()
     this.render()
   }
   var points = 0
   this.detectCollision = function() {
     for(var i = 0; i < cg.circles.length; i++) {
       circle = cg.circles[i]
       dist = Math.pow(Math.pow(circle.x - this.x,2) + Math.pow(circle.y - this.y,2),.5)
       if(dist < circle.radius + this.radius) {
         if(circle.radius > this.radius) {
           cg.death()
         } else {
         points = points + 1
           this.radius++
           cg.circles.splice(i,1)
           i--
           $('.points').text(points);
         }
       }
     }
   }
   this.render = function() {
     cg.ctx.beginPath()
     cg.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
     cg.ctx.fillStyle = '#fff'
     cg.ctx.shadowColor = '#ccc';
     cg.ctx.shadowBlur = 1;
     cg.ctx.shadowOffsetX = 2;
     cg.ctx.shadowOffsetY = 2;
     cg.ctx.closePath()
     cg.ctx.fill()

   }
 }


$(document).ready(function() {$(document).click(function (event) {$('.again-w').removeClass('unhide');$('.again-l').removeClass('unhide');});cg.init()})







