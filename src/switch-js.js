(function(W,$){
	W.vs = window.vs || {};

	W.vs.Switch = function(el,opts){ 
		var self= this;
		self.element= el;
		self.className = opts.className || 'active';
		self.containerClassName = opts.containerClassName || 'active';
		self.activeIndex = opts.activeIndex || 0;
		self.label1 = opts.labels.label1 || null;
		self.labelEl1 =  null;
		self.labelEl2 = null;
		self.label2 = opts.labels.label2 || null;
		var sel1 = opts.elementFirst || el.attr('data-target-switch1-content'),
			sel2 = opts.elementSecond || el.attr('data-target-switch2-content'); 

		self.contentEls = $([$(sel1).get(0),$(sel2).get(0)]);		
	};

	W.vs.Switch.boot = function(){
		$('.switch-js[data-switch-js]').each(function(k,o){
			if(!$(this).data('__SWITCH_JS__')){
				$(this).data('__SWITCH_JS__', new W.vs.Switch(this));
			}
		});
	};

	W.vs.Switch.prototype = {
		onItemClick:function(item){ 
		    var self= this;
		    var itemEl = $(item.target);
		    var index = self.activeIndex = itemEl.siblings()
		    	  .removeClass(self.className)
		    	  .end()
		    	  .addClass(self.className)
		    	  .index();
			self.contentEls.removeClass(self.containerClassName).eq(self.activeIndex).addClass(self.containerClassName);
		},
		render: function(){
			var self= this, labelEl1, labelEl2;
			if(this.element.children().length === 0){
				this.element
					.append(['<span class="switch-state-1">'+self.label1+'</span>',
					'<span class="switch-state-2">'+self.label2+'</span>'].join(''));
			} 
			labelEl1 = self.element.find('.switch-state-1').html(self.label1);
			labelEl2 = self.element.find('.switch-state-2').html(self.label2);
			this.contentEls.removeClass(self.containerClassName).eq(self.activeIndex).addClass(self.containerClassName);
			this.element.children().on('click', $.proxy(this.onItemClick,this));
		}
	};

	$.fn.Switch = function(options){
		return this.each(function(){
			var e;
			$(this).data('__SWITCH_JS__', (e = new W.vs.Switch($(this),options|| null).render())); 
		});
	};

	$(document).ready(function(){
		W.vs.Switch.boot();
	});

})(window,jQuery);