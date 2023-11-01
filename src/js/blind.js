var WI = WI || {};
WI.special = WI.special || {};

WI.special = {
	defSet: {
		"size" : 'medium',
		"color" : 'bw',
		"image": 'on',
		"kerning": 'standart',
		"interval": 'one',
		"align": 'off'
	},
	arClass: {
		'size': ['small', 'medium', 'large'],
		'color': ['bw', 'yb', 'bb'],
		'image': ['gray', 'on', 'off'],
		'kerning': ['standart', 'medium', 'large'], 
		'interval': ['one', 'oneandahalf', 'double'],
		'align': ['justify', 'off']
	},
	init: function (data) {
		WISP = this;
		if ($('[data-wisenable]').attr('data-wisenable') == "Y")
			return;

		if ($.cookie('wi-special') !== undefined) {
			this.setClass(JSON.parse($.cookie('wi-special')));
		} else if (data == "toSpecial") {
			this.setClass(this.defSet);
		}
		this.speakTest();
	},
	setClass: function (arSet) {
		var key, cTarget, b = $('body');

		if ($('[data-wisenable]').attr('data-wisenable') == "N")
			$('[data-wisenable]').attr('data-wisenable', "Y");

		if (typeof(arSet) == "object") {
			for (key in arSet) {
				if (Object.keys(arSet).length == 1) {
					if ($('[data-wisname="' + key + '"] .wi-special-selected[data-wisparam="' + arSet[key] + '"]').length >= 1)
						return;	
				}

				cTarget = $('[data-wisname="' + key + '"] [data-wisparam="' + arSet[key] + '"]');
				this.clearClass(key);
				$(b).addClass('wi-s' + key + '-' + arSet[key]);
				$(cTarget).addClass('wi-special-selected');
				this.setCookie(key, arSet[key]);
			}
		}
	},
	setCookie: function (cName, cValue) {
		var cookie;

		if ($.cookie('wi-special') === undefined)
			cookie = this.defSet;
		else {
			cookie = JSON.parse($.cookie('wi-special'));
		}

		cookie[cName] = cValue;
		$.cookie('wi-special', JSON.stringify(cookie), {
			expires: 365,
			path: '/'
		});
	},
	clearClass: function (data) {
		var key, cBlock, strClass = '', b = $('body');

		if (data == 'all' || data === undefined) {
			for (key in this.arClass) {
				strClass += 'wi-s' + key + '-' + this.arClass[key].join(' wi-s' + key + '-') + ' ';
			}
			cBlock = $('[data-wisname] [data-wisparam]');
		} else if (data !== undefined && data != 'all' && this.arClass[data] !== undefined) {
			strClass += 'wi-s' + data + '-' + this.arClass[data].join(' wi-s' + data + '-') + ' ';
			cBlock = $('[data-wisname="' + data + '"] [data-wisparam]');
		}

		$(cBlock).removeClass('wi-special-selected');
		$(b).removeClass(strClass);
	},
	backToDef : function (data) {
		this.clearClass('all');
		$.removeCookie('wi-special', {path: '/'});
		$('[data-wisenable]').attr('data-wisenable', 'N');
	},
	speakTest: function() {
		if ('speechSynthesis' in window) {
			$('#speack-block .message').text('Для прослушивания выделите требуемый текст и нажмите Ctrl+Enter');
		} else {
			$('#speack-block .message').text('Ваш браузер не поддерживает воспроизведение речи');
		}
	},
	speakText: function(text) {
		if ($('[data-wisenable]').attr('data-wisenable') == "N")
			return;

		$('.cancelText').show();

		const message = new SpeechSynthesisUtterance();
		message.lang = "ru-RU";
		message.text = text; 
		window.speechSynthesis.speak(message);
		window.speechSynthesis.onend = function(event) { 
			$('.cancelText').hide(); 
		};
	},
	getText: function() {
		var text = ""; 
		if (window.getSelection) {
			text = window.getSelection();
		} else if (document.getSelection) { 
			text = document.getSelection();
		} else if (document.selection) {
			text = document.selection.createRange().text;
		}
		return text.toString();	
	},
	cancelText: function(text) {
		window.speechSynthesis.cancel();
		$('.cancelText').hide();
	},	

}

$(document).ready(function() { 
	WI.special.init();
    var isCtrl = false;
    $(document).keyup(function (e) {  
        if(e.which == 17) isCtrl = false;
    }).keydown(function (e) {
        if(e.which == 17) isCtrl = true;
        if(e.which == 13 && isCtrl == true) {
			WISP.speakText(WISP.getText());
			isCtrl = false;
        }
    });
}); 