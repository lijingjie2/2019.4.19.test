function Drag(obj, title) {
	this.obj = obj;
	this.title = title ? this.obj.querySelector(title) : obj;
}
Drag.prototype = Object.assign(Drag.prototype, {
	init: function() {
		var _this = this;
		this.title.onmousedown = function(e) {
			var disX = e.offsetX,
				disY = e.offsetY;
			document.onmousemove = function(e) {
				var _top = e.clientY - disY,
					_left = e.clientX - disX;
				_this.move(_top, _left);
			}
			document.onmouseup = function() {
				document.onmousemove = null;
			}
			return false;
		}
	},
	move: function(top, left) {
		if(left < 0) left = 0;
		if(top < 0) top = 0;
		if(left > tools.getBody().width - this.obj.offsetWidth) left = tools.getBody().width - this.obj.offsetWidth;
		if(top > tools.getBody().height - this.obj.offsetHeight) top = tools.getBody().height - this.obj.offsetHeight;
		tools.setStyle(this.obj, {
			left: left + "px",
			top: top + "px"
		})
	}
})