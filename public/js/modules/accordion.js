/*! Tomcat360.com (c) 2015 
	Author: Renzhao
*/
define("modules/accordion",[],function(e,t,i){"use strict";var s=function(e){return this.accordion=e||".accordion",this.version="0.0.1","string"==typeof this.accordion&&(this.accordion=$(this.accordion).first()),this.accordion.length?(this.params={},this.params.selected=this.accordion.data("selected")||-1,this.headers=this.accordion.find(".title"),this.index=-1,this._init()):this};s.prototype={_init:function(e){var t=this;return t.headers.on("click",function(){t._bindEvents($(this))}),t.select(t.params.selected)},_bindEvents:function(e){var t=this.headers.index(e);return this.select(t)},_slideUpAll:function(){var e=this;return e.headers.each(function(e,t){var i=$(t),s=i.children(".toggle");i.next(".content").slideUp(),s.removeClass("fa-minus").addClass("fa-plus")}),e},select:function(e){var t=this;if(0>e||t.headers.length<=e)return t;if(this.index===e){var i=t.headers.eq(this.index);return i.next(".content").slideToggle(),i.children(".toggle").toggleClass("fa-minus").toggleClass("fa-plus"),t}t._slideUpAll();var i=t.headers.eq(e);return i.children(".toggle").removeClass("fa-plus").addClass("fa-minus"),i.next(".content").slideDown(),this.index=e,t}},i.exports=s});