$(document).ready(function () {

	var $oTitile = $('.login_logo_webqq');

	//鼠标按下
	$oTitile.on('mousedown', function (event) {
		fnDown(event);
	});

	//关闭按钮
	var $oClose = $('#ui_boxyClose');
	$oClose.on('click', function () {
		$('#loginPanel').hide();
	});

	function fnDown(event) {
		event = event || window.event;
		var $oDrag = $('#loginPanel'),
			disX = event.clientX - $oDrag.offset().left,		
			disY = event.clientY - $oDrag.offset().top;
		$(document).on('mousemove', function (event) {
			event = event || window.event;
			fnMove(event, disX, disY);
		});

		// 释放鼠标
		$(document).on('mouseup',  function() {
			$(document).off('mousemove');
			$(document).off('mouseup');
		});
	}

	function fnMove(e, posX, posY) {
		var $oDrag = $('#loginPanel'),
		    l = e.clientX - posX,
		    t = e.clientY - posY,
		    winW = document.documentElement.clientWidth || document.body.clientWidth;
		    winH = document.documentElement.clientHeight || document.body.clientHeight,
		    maxW = winW - $oDrag[0].offsetWidth - 10,
		    maxH = winH - $oDrag[0].offsetHeight - 10;
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

		$oDrag.css({
			'left': l + 'px',
			'top': t + 'px'
		});
	}

});