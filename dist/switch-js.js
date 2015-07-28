(function(W,$){
	W.vs = window.vs || {};

	W.vs.Switch = function(el,opts){ 
		var self= this;
		self.element= el;
		self.className = opts.className || 'active';
		self.activeIndex = opts.activeIndex || 0;
		self.label1 = opts.labels.label1 || null;
		self.labelEl1 =  null;
		self.labelEl2 = null;
		self.label2 = opts.labels.label2 || null;		
		self.el1 = opts.elementFirst || el.attr('data-target-switch1-content');
		self.el2 = opts.elementSecond || el.attr('data-target-switch2-content');		
		self.init();
	};

	W.vs.Switch.boot = function(){
		$('.switch-js[data-switch-js]').each(function(k,o){
			if(!$(this).data('__SWITCH_JS__')){
				$(this).data('__SWITCH_JS__', new W.vs.Switch(this));
			}
		});
	};

	W.vs.Switch.prototype = {
		init: function(){
			var self= this;
		},
		onItemClick:function(item){ 
		    var self= this;
		 	$(item.target).siblings().removeClass(self.className);
		 	$(item.target).addClass(self.className);
		 	if($(item.target).hasClass('switch-state-1')){
				$(self.el1).show();
				$(self.el2).hide();
		 	} else {
		 		$(self.el2).show();
				$(self.el1).hide();
		 	}
		},
		render: function(){
			var self= this;
				self.labelEl1 = self.element.find('.switch-state-1');
				self.labelEl2 = self.element.find('.switch-state-2'); 
			if(this.element.children().length === 0){
				this.element
					.append($('<span class="switch-state-1">'+sel.label1+'</span>'))
					.append($('<span class="switch-state-2">'+self.label2+'</span>'));
				 self.labelEl1 = self.element.find('.switch-state-1');
				self.labelEl2 = self.element.find('.switch-state-2');
			}else {
				self.labelEl1.html(self.label1);
				self.labelEl2.html(self.label2);
			}
			if(self.activeIndex === 0){
				self.labelEl1.addClass(self.className);
				$(self.el1).show();
				$(self.el2).hide();
			} else {
				self.labelEl2.addClass(self.className);
				$(self.el1).hide();
				$(self.el2).show();
			}
			this.element.children().on('click', $.proxy(this.onItemClick,this));
		}
	};

	$.fn.Switch = function(options){
		return this.each(function(){
			var e;
			$(this).data('__SWITCH_JS__', e = new W.vs.Switch($(this),options|| null));
			e.render();
		});
	};

	$(document).ready(function(){
		W.vs.Switch.boot();
	});

})(window,jQuery);