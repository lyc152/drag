var drag = {
	init: function (config) {
        this.id = $(config.id);
        this.claName = $(config.claName);
        this.myClose = $(config.myClose);
        this.mousedown();
        this.close();
        return this;
	},
	mousedown: function () {
		var self = this;
		self.claName.on('mousedown', function (event) {
			self.fnDown(event);
		});
		self.mouseup();
	},
	fnDown: function (event) {
		event = event || window.event;
		var self = this,
			disX = event.clientX - self.id.offset().left,		
			disY = event.clientY - self.id.offset().top;
		$(document).on('mousemove', function (event) {
			event = event || window.event;
			self.fnMove(event, disX, disY);
		});
	},
	fnMove: function (e, posX, posY) {
		var self = this,
			l = e.clientX - posX,
		    t = e.clientY - posY,
		    winW = document.documentElement.clientWidth || document.body.clientWidth;
		    winH = document.documentElement.clientHeight || document.body.clientHeight,
		    maxW = winW - self.id[0].offsetWidth - 10,
		    maxH = winH - self.id[0].offsetHeight - 10;
		if(l < 0) {
			l = 0;
		} else if(l > maxW) {
			l = maxW;
		}

		if(t < 0) {
			t = 10;
		} else if(t > maxH) {
			t = maxH;
		}

		self.id.css({
			'left': l + 'px',
			'top': t + 'px'
		});

		self.mouseup();
	},
	mouseup: function () {
		$(document).on('mouseup',  function() {
			$(document).off('mousemove');
			$(document).off('mouseup');
		});
	},
	close: function () {
		var self = this;
		self.myClose.on('click', function () {
			self.id.hide();
	    });
	}
};

$(function() {
    drag.init({
    	id:'#loginPanel',
    	claName: '.login_logo_webqq',
    	myClose: '#ui_boxyClose'
    });
});