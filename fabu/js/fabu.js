class Fabu {
	constructor(btn) {
		this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents();
	}
	bindEvents() {

		let _this = this;
		this.btn.onclick = function() {
			_this.container.innerHTML = '<h4>发布微博</h4>' +
				'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>' +
				'<p><label>标题：<input id="biaoTi" type="text"></label></p>' +
				'<p><label>内容：<input id="neiRong" type="text" style="width:300px;height:150px"></label></p>' +
				'<p><button id="FabuBtn" class="loginBtn" type="button">发布</button></p>';
			tools.showCenter(_this.container);
			_this.modal = document.createElement("div");
			_this.modal.className = "modal";
			document.body.appendChild(_this.modal);
			new Drag(_this.container, "h4").init();
		}
		this.container.onclick = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			var div = document.createElement("div");
			var body = document.querySelector("body");
			switch(target.id) {
				case "FabuBtn":
					let biaoTi = document.querySelector("#biaoTi").value;
					let neiRong = document.querySelector("#neiRong").value;
					//					document.createElement("div").innerHTML = (biaoTi + "<br>" + neiRong + "<br>" + "<br>");

					div.innerHTML = ("<br>" + biaoTi + "<br>" + neiRong + "<br>");
					div.className = "popBox_news";
					body.appendChild(div);
				case "closeBtn":
					_this.container.style.display = "none";
					document.body.removeChild(_this.modal);
			}
		}
	}
}