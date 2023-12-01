/*!
######################################################

# REDWOOD-LIB.JS

# OCOM GLOBAL ASSET RELEASE: DEV BUILD

# BUILD DATE: Sat Apr 29 2023 09:06:02 GMT-0700 (Pacific Daylight Time)

# COPYRIGHT ORACLE CORP 2023 [UNLESS STATED OTHERWISE]

######################################################
*/



// VENDOR UTILITIES
/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(s){this.options=e.extend({},i.defaults,t.defaults,s),this.element=this.options.element,this.$element=e(this.element),this.createWrapper(),this.createWaypoint()}var e=window.jQuery,i=window.Waypoint;t.prototype.createWaypoint=function(){var t=this.options.handler;this.waypoint=new i(e.extend({},this.options,{element:this.wrapper,handler:e.proxy(function(e){var i=this.options.direction.indexOf(e)>-1,s=i?this.$element.outerHeight(!0):"";this.$wrapper.height(s),this.$element.toggleClass(this.options.stuckClass,i),t&&t.call(this,e)},this)}))},t.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=t}();


/*! GENERIC - INVIEW */

// data attribute hook
/**
 * Adds a specified class to an element once it is scrolled into view.
 * @hook data-inview
 * @requires jQuery
 * @requires waypoints
 * @example <div data-inview="class-to-be-added"></div>
 */
$(document).ready(function($) {
	$('[data-inview]').each(function(){
		$(this).waypoint(function() {
			$(this.element).addClass($(this.element).data('inview'));
			this.destroy();
		},{
			offset: '95%'
		});
	});
});

/**
 * A jQuery plugin to add 'inview' class to a collection once the matched
 * 		selectors are visible in the viewport.<br>
 * 		This also exposes an 'inview' event which will fire when the element
 * 		gets the 'inview' class added.
 * @function inView
 * @event inview
 * @requires jQuery
 * @example $('.targets').inView();
 * @example <caption>Be sure to attach the event handler before the call to inView, to ensure the event doesn't fire before it.</caption>
 * $('.target').on('inview', function(e) { ...your callback... });
 * $('.target').inView();
 * @param {jQuery} collection - The jQuery collection to add inview class
 * @returns {jQuery} The passed in jQuery collection for method chaining
 */
 jQuery.fn.inView = function() {
 	'use strict';

	return this.each(function() {
		$(this).waypoint(function() {
			$(this.element)
				.addClass('inview')
				.triggerHandler('inview');
			this.destroy();
		},{
			offset: '87%'
//			  offset: function () {
//				return this.context.innerHeight() - (this.adapter.outerHeight()/3);
//			  }
		});

	});
};


/*! GENERIC - IN VIEWPORT */
/** 
 *  Checks whether a single jQuery element is within the visible viewport when called
 *  @function inViewport
 *  @requires jQuery
 *  @param {boolean} [partial=false] - whether to return true if the element is only partially within viewport
 * 	@returns {boolean}
 */
 jQuery.fn.inViewport = function(partial) {

    var partial = partial || false,
    	rect = this[0].getBoundingClientRect();

	if(this.length > 1) {
		throw new TypeError('jQuery.fn.inViewport expects a jQuery object with only one element');
	}

    if(partial) {
	    return (
	        rect.top >= 0 ||
	        rect.left >= 0 ||
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) || /*or $(window).height() */
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	    );
    } else {
	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	    );    	
    }
 };


/*! jQuery UI - v1.13.2 - 2022-09-16
* http://jqueryui.com
* Includes: widget.js, keycode.js, widgets/mouse.js, widgets/slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(l){"use strict";l.ui=l.ui||{};l.ui.version="1.13.2";var n,i=0,o=Array.prototype.hasOwnProperty,h=Array.prototype.slice;l.cleanData=(n=l.cleanData,function(e){for(var t,i,s=0;null!=(i=e[s]);s++)(t=l._data(i,"events"))&&t.remove&&l(i).triggerHandler("remove");n(e)}),l.widget=function(e,i,t){var s,n,a,o={},h=e.split(".")[0],r=h+"-"+(e=e.split(".")[1]);return t||(t=i,i=l.Widget),Array.isArray(t)&&(t=l.extend.apply(null,[{}].concat(t))),l.expr.pseudos[r.toLowerCase()]=function(e){return!!l.data(e,r)},l[h]=l[h]||{},s=l[h][e],n=l[h][e]=function(e,t){if(!this||!this._createWidget)return new n(e,t);arguments.length&&this._createWidget(e,t)},l.extend(n,s,{version:t.version,_proto:l.extend({},t),_childConstructors:[]}),(a=new i).options=l.widget.extend({},a.options),l.each(t,function(t,s){function n(){return i.prototype[t].apply(this,arguments)}function a(e){return i.prototype[t].apply(this,e)}o[t]="function"==typeof s?function(){var e,t=this._super,i=this._superApply;return this._super=n,this._superApply=a,e=s.apply(this,arguments),this._super=t,this._superApply=i,e}:s}),n.prototype=l.widget.extend(a,{widgetEventPrefix:s&&a.widgetEventPrefix||e},o,{constructor:n,namespace:h,widgetName:e,widgetFullName:r}),s?(l.each(s._childConstructors,function(e,t){var i=t.prototype;l.widget(i.namespace+"."+i.widgetName,n,t._proto)}),delete s._childConstructors):i._childConstructors.push(n),l.widget.bridge(e,n),n},l.widget.extend=function(e){for(var t,i,s=h.call(arguments,1),n=0,a=s.length;n<a;n++)for(t in s[n])i=s[n][t],o.call(s[n],t)&&void 0!==i&&(l.isPlainObject(i)?e[t]=l.isPlainObject(e[t])?l.widget.extend({},e[t],i):l.widget.extend({},i):e[t]=i);return e},l.widget.bridge=function(a,t){var o=t.prototype.widgetFullName||a;l.fn[a]=function(i){var e="string"==typeof i,s=h.call(arguments,1),n=this;return e?this.length||"instance"!==i?this.each(function(){var e,t=l.data(this,o);return"instance"===i?(n=t,!1):t?"function"!=typeof t[i]||"_"===i.charAt(0)?l.error("no such method '"+i+"' for "+a+" widget instance"):(e=t[i].apply(t,s))!==t&&void 0!==e?(n=e&&e.jquery?n.pushStack(e.get()):e,!1):void 0:l.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+i+"'")}):n=void 0:(s.length&&(i=l.widget.extend.apply(null,[i].concat(s))),this.each(function(){var e=l.data(this,o);e?(e.option(i||{}),e._init&&e._init()):l.data(this,o,new t(i,this))})),n}},l.Widget=function(){},l.Widget._childConstructors=[],l.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,t){t=l(t||this.defaultElement||this)[0],this.element=l(t),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=l(),this.hoverable=l(),this.focusable=l(),this.classesElementLookup={},t!==this&&(l.data(t,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===t&&this.destroy()}}),this.document=l(t.style?t.ownerDocument:t.document||t),this.window=l(this.document[0].defaultView||this.document[0].parentWindow)),this.options=l.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:l.noop,_create:l.noop,_init:l.noop,destroy:function(){var i=this;this._destroy(),l.each(this.classesElementLookup,function(e,t){i._removeClass(t,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:l.noop,widget:function(){return this.element},option:function(e,t){var i,s,n,a=e;if(0===arguments.length)return l.widget.extend({},this.options);if("string"==typeof e)if(a={},e=(i=e.split(".")).shift(),i.length){for(s=a[e]=l.widget.extend({},this.options[e]),n=0;n<i.length-1;n++)s[i[n]]=s[i[n]]||{},s=s[i[n]];if(e=i.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=t}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=t}return this._setOptions(a),this},_setOptions:function(e){for(var t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(e){var t,i,s;for(t in e)s=this.classesElementLookup[t],e[t]!==this.options.classes[t]&&s&&s.length&&(i=l(s.get()),this._removeClass(s,t),i.addClass(this._classes({element:i,keys:t,classes:e,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(n){var a=[],o=this;function e(e,t){for(var i,s=0;s<e.length;s++)i=o.classesElementLookup[e[s]]||l(),i=n.add?(function(){var i=[];n.element.each(function(e,t){l.map(o.classesElementLookup,function(e){return e}).some(function(e){return e.is(t)})||i.push(t)}),o._on(l(i),{remove:"_untrackClassesElement"})}(),l(l.uniqueSort(i.get().concat(n.element.get())))):l(i.not(n.element).get()),o.classesElementLookup[e[s]]=i,a.push(e[s]),t&&n.classes[e[s]]&&a.push(n.classes[e[s]])}return(n=l.extend({element:this.element,classes:this.options.classes||{}},n)).keys&&e(n.keys.match(/\S+/g)||[],!0),n.extra&&e(n.extra.match(/\S+/g)||[]),a.join(" ")},_untrackClassesElement:function(i){var s=this;l.each(s.classesElementLookup,function(e,t){-1!==l.inArray(i.target,t)&&(s.classesElementLookup[e]=l(t.not(i.target).get()))}),this._off(l(i.target))},_removeClass:function(e,t,i){return this._toggleClass(e,t,i,!1)},_addClass:function(e,t,i){return this._toggleClass(e,t,i,!0)},_toggleClass:function(e,t,i,s){var n="string"==typeof e||null===e,i={extra:n?t:i,keys:n?e:t,element:n?this.element:e,add:s="boolean"==typeof s?s:i};return i.element.toggleClass(this._classes(i),s),this},_on:function(n,a,e){var o,h=this;"boolean"!=typeof n&&(e=a,a=n,n=!1),e?(a=o=l(a),this.bindings=this.bindings.add(a)):(e=a,a=this.element,o=this.widget()),l.each(e,function(e,t){function i(){if(n||!0!==h.options.disabled&&!l(this).hasClass("ui-state-disabled"))return("string"==typeof t?h[t]:t).apply(h,arguments)}"string"!=typeof t&&(i.guid=t.guid=t.guid||i.guid||l.guid++);var s=e.match(/^([\w:-]*)\s*(.*)$/),e=s[1]+h.eventNamespace,s=s[2];s?o.on(e,s,i):a.on(e,i)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(t),this.bindings=l(this.bindings.not(e).get()),this.focusable=l(this.focusable.not(e).get()),this.hoverable=l(this.hoverable.not(e).get())},_delay:function(e,t){var i=this;return setTimeout(function(){return("string"==typeof e?i[e]:e).apply(i,arguments)},t||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(l(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(l(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(l(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(l(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,t,i){var s,n,a=this.options[e];if(i=i||{},(t=l.Event(t)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),t.target=this.element[0],n=t.originalEvent)for(s in n)s in t||(t[s]=n[s]);return this.element.trigger(t,i),!("function"==typeof a&&!1===a.apply(this.element[0],[t].concat(i))||t.isDefaultPrevented())}},l.each({show:"fadeIn",hide:"fadeOut"},function(a,o){l.Widget.prototype["_"+a]=function(t,e,i){var s,n=(e="string"==typeof e?{effect:e}:e)?!0!==e&&"number"!=typeof e&&e.effect||o:a;"number"==typeof(e=e||{})?e={duration:e}:!0===e&&(e={}),s=!l.isEmptyObject(e),e.complete=i,e.delay&&t.delay(e.delay),s&&l.effects&&l.effects.effect[n]?t[a](e):n!==a&&t[n]?t[n](e.duration,e.easing,i):t.queue(function(e){l(this)[a](),i&&i.call(t[0]),e()})}});l.widget,l.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},l.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var a=!1;l(document).on("mouseup",function(){a=!1});l.widget("ui.mouse",{version:"1.13.2",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).on("click."+this.widgetName,function(e){if(!0===l.data(e.target,t.widgetName+".preventClickEvent"))return l.removeData(e.target,t.widgetName+".preventClickEvent"),e.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var t=this,i=1===e.which,s=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&l(e.target).closest(this.options.cancel).length;return i&&!s&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){t.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(!0===l.data(e.target,this.widgetName+".preventClickEvent")&&l.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return t._mouseMove(e)},this._mouseUpDelegate=function(e){return t._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),a=!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(l.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&l.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,a=!1,e.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),l.widget("ui.slider",l.ui.mouse,{version:"1.13.2",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,t=this.options,i=this.element.find(".ui-slider-handle"),s=[],n=t.values&&t.values.length||1;for(i.length>n&&(i.slice(n).remove(),i=i.slice(0,n)),e=i.length;e<n;e++)s.push("<span tabindex='0'></span>");this.handles=i.add(l(s.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){l(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:Array.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=l("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==e.range&&"max"!==e.range||this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,t,o,h=this,r=this.options;return!r.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),o={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(o),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var t=Math.abs(i-h.values(e));(t<s||s===t&&(e===h._lastChangedValue||h.values(e)===r.min))&&(s=t,n=l(this),a=e)}),!1!==this._start(e,a)&&(this._mouseSliding=!0,this._handleIndex=a,this._addClass(n,null,"ui-state-active"),n.trigger("focus"),t=n.offset(),o=!l(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=o?{left:0,top:0}:{left:e.pageX-t.left-n.width()/2,top:e.pageY-t.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,i),this._animateOff=!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},t=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,t),!1},_mouseStop:function(e){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,e="horizontal"===this.orientation?(t=this.elementSize.width,e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),e=e/t;return(e=1<e?1:e)<0&&(e=0),"vertical"===this.orientation&&(e=1-e),t=this._valueMax()-this._valueMin(),t=this._valueMin()+e*t,this._trimAlignValue(t)},_uiHash:function(e,t,i){var s={handle:this.handles[e],handleIndex:e,value:void 0!==t?t:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==t?t:this.values(e),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(e,t){return this._trigger("start",e,this._uiHash(t))},_slide:function(e,t,i){var s,n=this.value(),a=this.values();this._hasMultipleValues()&&(s=this.values(t?0:1),n=this.values(t),2===this.options.values.length&&!0===this.options.range&&(i=0===t?Math.min(s,i):Math.max(s,i)),a[t]=i),i!==n&&!1!==this._trigger("slide",e,this._uiHash(t,i,a))&&(this._hasMultipleValues()?this.values(t,i):this.value(i))},_stop:function(e,t){this._trigger("stop",e,this._uiHash(t))},_change:function(e,t){this._keySliding||this._mouseSliding||(this._lastChangedValue=t,this._trigger("change",e,this._uiHash(t)))},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,t){var i,s,n;if(1<arguments.length)return this.options.values[e]=this._trimAlignValue(t),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!Array.isArray(e))return this._hasMultipleValues()?this._values(e):this.value();for(i=this.options.values,s=e,n=0;n<i.length;n+=1)i[n]=this._trimAlignValue(s[n]),this._change(null,n);this._refreshValue()},_setOption:function(e,t){var i,s=0;switch("range"===e&&!0===this.options.range&&("min"===t?(this.options.value=this._values(0),this.options.values=null):"max"===t&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),Array.isArray(this.options.values)&&(s=this.options.values.length),this._super(e,t),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(t),this.handles.css("horizontal"===t?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=s-1;0<=i;i--)this._change(null,i);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(e){this._super(e),this._toggleClass(null,"ui-state-disabled",!!e)},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i;if(arguments.length)return e=this.options.values[e],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(t=this.options.values.slice(),i=0;i<t.length;i+=1)t[i]=this._trimAlignValue(t[i]);return t}return[]},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=0<this.options.step?this.options.step:1,i=(e-this._valueMin())%t,e=e-i;return 2*Math.abs(i)>=t&&(e+=0<i?t:-t),parseFloat(e.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step;(e=Math.round((e-t)/i)*i+t)>this.options.max&&(e-=i),this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return e=null!==this.options.min?Math.max(e,this._precisionOf(this.options.min)):e},_precisionOf:function(e){var t=e.toString(),e=t.indexOf(".");return-1===e?0:t.length-e-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(e){"vertical"===e&&this.range.css({width:"",left:""}),"horizontal"===e&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var t,i,e,s,n,a=this.options.range,o=this.options,h=this,r=!this._animateOff&&o.animate,u={};this._hasMultipleValues()?this.handles.each(function(e){i=(h.values(e)-h._valueMin())/(h._valueMax()-h._valueMin())*100,u["horizontal"===h.orientation?"left":"bottom"]=i+"%",l(this).stop(1,1)[r?"animate":"css"](u,o.animate),!0===h.options.range&&("horizontal"===h.orientation?(0===e&&h.range.stop(1,1)[r?"animate":"css"]({left:i+"%"},o.animate),1===e&&h.range[r?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:o.animate})):(0===e&&h.range.stop(1,1)[r?"animate":"css"]({bottom:i+"%"},o.animate),1===e&&h.range[r?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:o.animate}))),t=i}):(e=this.value(),s=this._valueMin(),n=this._valueMax(),i=n!==s?(e-s)/(n-s)*100:0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[r?"animate":"css"](u,o.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:i+"%"},o.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:100-i+"%"},o.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:i+"%"},o.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:100-i+"%"},o.animate))},_handleEvents:{keydown:function(e){var t,i,s,n=l(e.target).data("ui-slider-handle-index");switch(e.keyCode){case l.ui.keyCode.HOME:case l.ui.keyCode.END:case l.ui.keyCode.PAGE_UP:case l.ui.keyCode.PAGE_DOWN:case l.ui.keyCode.UP:case l.ui.keyCode.RIGHT:case l.ui.keyCode.DOWN:case l.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(l(e.target),null,"ui-state-active"),!1===this._start(e,n)))return}switch(s=this.options.step,t=i=this._hasMultipleValues()?this.values(n):this.value(),e.keyCode){case l.ui.keyCode.HOME:i=this._valueMin();break;case l.ui.keyCode.END:i=this._valueMax();break;case l.ui.keyCode.PAGE_UP:i=this._trimAlignValue(t+(this._valueMax()-this._valueMin())/this.numPages);break;case l.ui.keyCode.PAGE_DOWN:i=this._trimAlignValue(t-(this._valueMax()-this._valueMin())/this.numPages);break;case l.ui.keyCode.UP:case l.ui.keyCode.RIGHT:if(t===this._valueMax())return;i=this._trimAlignValue(t+s);break;case l.ui.keyCode.DOWN:case l.ui.keyCode.LEFT:if(t===this._valueMin())return;i=this._trimAlignValue(t-s)}this._slide(e,n,i)},keyup:function(e){var t=l(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,t),this._change(e,t),this._removeClass(l(e.target),null,"ui-state-active"))}}})});

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ScrollBooster",[],e):"object"==typeof exports?exports.ScrollBooster=e():t.ScrollBooster=e()}(this,(function(){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}i.r(e),i.d(e,"default",(function(){return p}));var l=function(t){return Math.max(t.offsetHeight,t.scrollHeight)},p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,t);var i={content:e.viewport.children[0],direction:"all",pointerMode:"all",scrollMode:void 0,bounce:!0,bounceForce:.1,friction:.05,textSelection:!1,inputsFocus:!0,emulateScroll:!1,preventDefaultOnEmulateScroll:!1,preventPointerMoveDefault:!0,lockScrollOnDragDirection:!1,pointerDownPreventDefault:!0,dragDirectionTolerance:40,onPointerDown:function(){},onPointerUp:function(){},onPointerMove:function(){},onClick:function(){},onUpdate:function(){},onWheel:function(){},shouldScroll:function(){return!0}};if(this.props=n(n({},i),e),this.props.viewport&&this.props.viewport instanceof Element)if(this.props.content){this.isDragging=!1,this.isTargetScroll=!1,this.isScrolling=!1,this.isRunning=!1;var o={x:0,y:0};this.position=n({},o),this.velocity=n({},o),this.dragStartPosition=n({},o),this.dragOffset=n({},o),this.clientOffset=n({},o),this.dragPosition=n({},o),this.targetPosition=n({},o),this.scrollOffset=n({},o),this.rafID=null,this.events={},this.updateMetrics(),this.handleEvents()}else console.error("ScrollBooster init error: Viewport does not have any content");else console.error('ScrollBooster init error: "viewport" config property must be present and must be Element')}var e,i,o;return e=t,(i=[{key:"updateOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.props=n(n({},this.props),t),this.props.onUpdate(this.getState()),this.startAnimationLoop()}},{key:"updateMetrics",value:function(){var t;this.viewport={width:this.props.viewport.clientWidth,height:this.props.viewport.clientHeight},this.content={width:(t=this.props.content,Math.max(t.offsetWidth,t.scrollWidth)),height:l(this.props.content)},this.edgeX={from:Math.min(-this.content.width+this.viewport.width,0),to:0},this.edgeY={from:Math.min(-this.content.height+this.viewport.height,0),to:0},this.props.onUpdate(this.getState()),this.startAnimationLoop()}},{key:"startAnimationLoop",value:function(){var t=this;this.isRunning=!0,cancelAnimationFrame(this.rafID),this.rafID=requestAnimationFrame((function(){return t.animate()}))}},{key:"animate",value:function(){var t=this;if(this.isRunning){this.updateScrollPosition(),this.isMoving()||(this.isRunning=!1,this.isTargetScroll=!1);var e=this.getState();this.setContentPosition(e),this.props.onUpdate(e),this.rafID=requestAnimationFrame((function(){return t.animate()}))}}},{key:"updateScrollPosition",value:function(){this.applyEdgeForce(),this.applyDragForce(),this.applyScrollForce(),this.applyTargetForce();var t=1-this.props.friction;this.velocity.x*=t,this.velocity.y*=t,"vertical"!==this.props.direction&&(this.position.x+=this.velocity.x),"horizontal"!==this.props.direction&&(this.position.y+=this.velocity.y),this.props.bounce&&!this.isScrolling||this.isTargetScroll||(this.position.x=Math.max(Math.min(this.position.x,this.edgeX.to),this.edgeX.from),this.position.y=Math.max(Math.min(this.position.y,this.edgeY.to),this.edgeY.from))}},{key:"applyForce",value:function(t){this.velocity.x+=t.x,this.velocity.y+=t.y}},{key:"applyEdgeForce",value:function(){if(this.props.bounce&&!this.isDragging){var t=this.position.x<this.edgeX.from,e=this.position.x>this.edgeX.to,i=this.position.y<this.edgeY.from,o=this.position.y>this.edgeY.to,n=t||e,r=i||o;if(n||r){var s=t?this.edgeX.from:this.edgeX.to,a=i?this.edgeY.from:this.edgeY.to,l=s-this.position.x,p=a-this.position.y,c={x:l*this.props.bounceForce,y:p*this.props.bounceForce},h=this.position.x+(this.velocity.x+c.x)/this.props.friction,u=this.position.y+(this.velocity.y+c.y)/this.props.friction;(t&&h>=this.edgeX.from||e&&h<=this.edgeX.to)&&(c.x=l*this.props.bounceForce-this.velocity.x),(i&&u>=this.edgeY.from||o&&u<=this.edgeY.to)&&(c.y=p*this.props.bounceForce-this.velocity.y),this.applyForce({x:n?c.x:0,y:r?c.y:0})}}}},{key:"applyDragForce",value:function(){if(this.isDragging){var t=this.dragPosition.x-this.position.x,e=this.dragPosition.y-this.position.y;this.applyForce({x:t-this.velocity.x,y:e-this.velocity.y})}}},{key:"applyScrollForce",value:function(){this.isScrolling&&(this.applyForce({x:this.scrollOffset.x-this.velocity.x,y:this.scrollOffset.y-this.velocity.y}),this.scrollOffset.x=0,this.scrollOffset.y=0)}},{key:"applyTargetForce",value:function(){this.isTargetScroll&&this.applyForce({x:.08*(this.targetPosition.x-this.position.x)-this.velocity.x,y:.08*(this.targetPosition.y-this.position.y)-this.velocity.y})}},{key:"isMoving",value:function(){return this.isDragging||this.isScrolling||Math.abs(this.velocity.x)>=.01||Math.abs(this.velocity.y)>=.01}},{key:"scrollTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.isTargetScroll=!0,this.targetPosition.x=-t.x||0,this.targetPosition.y=-t.y||0,this.startAnimationLoop()}},{key:"setPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.velocity.x=0,this.velocity.y=0,this.position.x=-t.x||0,this.position.y=-t.y||0,this.startAnimationLoop()}},{key:"getState",value:function(){return{isMoving:this.isMoving(),isDragging:!(!this.dragOffset.x&&!this.dragOffset.y),position:{x:-this.position.x,y:-this.position.y},dragOffset:this.dragOffset,dragAngle:this.getDragAngle(this.clientOffset.x,this.clientOffset.y),borderCollision:{left:this.position.x>=this.edgeX.to,right:this.position.x<=this.edgeX.from,top:this.position.y>=this.edgeY.to,bottom:this.position.y<=this.edgeY.from}}}},{key:"getDragAngle",value:function(t,e){return Math.round(Math.atan2(t,e)*(180/Math.PI))}},{key:"getDragDirection",value:function(t,e){return Math.abs(90-Math.abs(t))<=90-e?"horizontal":"vertical"}},{key:"setContentPosition",value:function(t){"transform"===this.props.scrollMode&&(this.props.content.style.transform="translate(".concat(-t.position.x,"px, ").concat(-t.position.y,"px)")),"native"===this.props.scrollMode&&(this.props.viewport.scrollTop=t.position.y,this.props.viewport.scrollLeft=t.position.x)}},{key:"handleEvents",value:function(){var t=this,e={x:0,y:0},i={x:0,y:0},o=null,n=null,r=!1,s=function(n){if(t.isDragging){var s=r?n.touches[0]:n,a=s.pageX,l=s.pageY,p=s.clientX,c=s.clientY;t.dragOffset.x=a-e.x,t.dragOffset.y=l-e.y,t.clientOffset.x=p-i.x,t.clientOffset.y=c-i.y,(Math.abs(t.clientOffset.x)>5&&!o||Math.abs(t.clientOffset.y)>5&&!o)&&(o=t.getDragDirection(t.getDragAngle(t.clientOffset.x,t.clientOffset.y),t.props.dragDirectionTolerance)),t.props.lockScrollOnDragDirection&&"all"!==t.props.lockScrollOnDragDirection?o===t.props.lockScrollOnDragDirection&&r?(t.dragPosition.x=t.dragStartPosition.x+t.dragOffset.x,t.dragPosition.y=t.dragStartPosition.y+t.dragOffset.y):r?(t.dragPosition.x=t.dragStartPosition.x,t.dragPosition.y=t.dragStartPosition.y):(t.dragPosition.x=t.dragStartPosition.x+t.dragOffset.x,t.dragPosition.y=t.dragStartPosition.y+t.dragOffset.y):(t.dragPosition.x=t.dragStartPosition.x+t.dragOffset.x,t.dragPosition.y=t.dragStartPosition.y+t.dragOffset.y)}};this.events.pointerdown=function(o){r=!(!o.touches||!o.touches[0]),t.props.onPointerDown(t.getState(),o,r);var n=r?o.touches[0]:o,a=n.pageX,l=n.pageY,p=n.clientX,c=n.clientY,h=t.props.viewport,u=h.getBoundingClientRect();if(!(p-u.left>=h.clientLeft+h.clientWidth)&&!(c-u.top>=h.clientTop+h.clientHeight)&&t.props.shouldScroll(t.getState(),o)&&2!==o.button&&("mouse"!==t.props.pointerMode||!r)&&("touch"!==t.props.pointerMode||r)&&!(t.props.inputsFocus&&["input","textarea","button","select","label"].indexOf(o.target.nodeName.toLowerCase())>-1)){if(t.props.textSelection){if(function(t,e,i){for(var o=t.childNodes,n=document.createRange(),r=0;r<o.length;r++){var s=o[r];if(3===s.nodeType){n.selectNodeContents(s);var a=n.getBoundingClientRect();if(e>=a.left&&i>=a.top&&e<=a.right&&i<=a.bottom)return s}}return!1}(o.target,p,c))return;(f=window.getSelection?window.getSelection():document.selection)&&(f.removeAllRanges?f.removeAllRanges():f.empty&&f.empty())}var f;t.isDragging=!0,e.x=a,e.y=l,i.x=p,i.y=c,t.dragStartPosition.x=t.position.x,t.dragStartPosition.y=t.position.y,s(o),t.startAnimationLoop(),!r&&t.props.pointerDownPreventDefault&&o.preventDefault()}},this.events.pointermove=function(e){!e.cancelable||"all"!==t.props.lockScrollOnDragDirection&&t.props.lockScrollOnDragDirection!==o||e.preventDefault(),s(e),t.props.onPointerMove(t.getState(),e,r)},this.events.pointerup=function(e){t.isDragging=!1,o=null,t.props.onPointerUp(t.getState(),e,r)},this.events.wheel=function(e){var i=t.getState();t.props.emulateScroll&&(t.velocity.x=0,t.velocity.y=0,t.isScrolling=!0,t.scrollOffset.x=-e.deltaX,t.scrollOffset.y=-e.deltaY,t.props.onWheel(i,e),t.startAnimationLoop(),clearTimeout(n),n=setTimeout((function(){return t.isScrolling=!1}),80),t.props.preventDefaultOnEmulateScroll&&t.getDragDirection(t.getDragAngle(-e.deltaX,-e.deltaY),t.props.dragDirectionTolerance)===t.props.preventDefaultOnEmulateScroll&&e.preventDefault())},this.events.scroll=function(){var e=t.props.viewport,i=e.scrollLeft,o=e.scrollTop;Math.abs(t.position.x+i)>3&&(t.position.x=-i,t.velocity.x=0),Math.abs(t.position.y+o)>3&&(t.position.y=-o,t.velocity.y=0)},this.events.click=function(e){var i=t.getState(),o="vertical"!==t.props.direction?i.dragOffset.x:0,n="horizontal"!==t.props.direction?i.dragOffset.y:0;Math.max(Math.abs(o),Math.abs(n))>5&&(e.preventDefault(),e.stopPropagation()),t.props.onClick(i,e,r)},this.events.contentLoad=function(){return t.updateMetrics()},this.events.resize=function(){return t.updateMetrics()},this.props.viewport.addEventListener("mousedown",this.events.pointerdown),this.props.viewport.addEventListener("touchstart",this.events.pointerdown,{passive:!1}),this.props.viewport.addEventListener("click",this.events.click),this.props.viewport.addEventListener("wheel",this.events.wheel,{passive:!1}),this.props.viewport.addEventListener("scroll",this.events.scroll),this.props.content.addEventListener("load",this.events.contentLoad,!0),window.addEventListener("mousemove",this.events.pointermove),window.addEventListener("touchmove",this.events.pointermove,{passive:!1}),window.addEventListener("mouseup",this.events.pointerup),window.addEventListener("touchend",this.events.pointerup),window.addEventListener("resize",this.events.resize)}},{key:"destroy",value:function(){this.props.viewport.removeEventListener("mousedown",this.events.pointerdown),this.props.viewport.removeEventListener("touchstart",this.events.pointerdown),this.props.viewport.removeEventListener("click",this.events.click),this.props.viewport.removeEventListener("wheel",this.events.wheel),this.props.viewport.removeEventListener("scroll",this.events.scroll),this.props.content.removeEventListener("load",this.events.contentLoad),window.removeEventListener("mousemove",this.events.pointermove),window.removeEventListener("touchmove",this.events.pointermove),window.removeEventListener("mouseup",this.events.pointerup),window.removeEventListener("touchend",this.events.pointerup),window.removeEventListener("resize",this.events.resize)}}])&&a(e.prototype,i),o&&a(e,o),t}()}]).default}));

// CORE UTILITIES
/*! GENERIC - AUTOCLEAR */
 /**
 * Clears an input field on focus and restores the default value on blur
 * 
 * @hook autoclear
 * @requires jQuery
 * @example
 * <input type="text" class="autoclear" />
 */
jQuery(document).ready(function($) {
		$('input.autoclear').bind('focus', function(e){
			var i = $(this).get(0);
			if(i.value == i.defaultValue) {
				i.value = '';
			}
		});

		$('input.autoclear').bind('blur', function(e){
			var i = $(this).get(0);
			if(i.value=='') {
				i.value = i.defaultValue;
			}
		});
});

/*! GENERIC - INVIEW */

// data attribute hook
/**
 * Adds a specified class to an element once it is scrolled into view.
 * @hook data-inview
 * @requires jQuery
 * @requires waypoints
 * @example <div data-inview="class-to-be-added"></div>
 */
$(document).ready(function($) {
	$('[data-inview]').each(function(){
		$(this).waypoint(function() {
			$(this.element).addClass($(this.element).data('inview'));
			this.destroy();
		},{
			offset: '95%'
		});
	});
});

/**
 * A jQuery plugin to add 'inview' class to a collection once the matched
 * 		selectors are visible in the viewport.<br>
 * 		This also exposes an 'inview' event which will fire when the element
 * 		gets the 'inview' class added.
 * @function inView
 * @event inview
 * @requires jQuery
 * @example $('.targets').inView();
 * @example <caption>Be sure to attach the event handler before the call to inView, to ensure the event doesn't fire before it.</caption>
 * $('.target').on('inview', function(e) { ...your callback... });
 * $('.target').inView();
 * @param {jQuery} collection - The jQuery collection to add inview class
 * @returns {jQuery} The passed in jQuery collection for method chaining
 */
 jQuery.fn.inView = function() {
 	'use strict';

	return this.each(function() {
		$(this).waypoint(function() {
			$(this.element)
				.addClass('inview')
				.triggerHandler('inview');
			this.destroy();
		},{
			offset: '87%'
//			  offset: function () {
//				return this.context.innerHeight() - (this.adapter.outerHeight()/3);
//			  }
		});

	});
};


/*! GENERIC - PREPARE HEIGHT TRANSITION */
/**
 *  A jQuery plugin to calculate and store height:auto value in px for
 *     animating height with CSS transition, with recalculate on window resize
 *  @function prepareHeightTransition
 * 	@example <caption>JavaScript</caption>
 *	$('.transitionHeight').prepareHeightTransition('ex01');
 * 	@example <caption>CSS</caption>
 *	.transitionHeight {
 *		--fullHeight:auto;
 *		height:0;
 *		transition: height 0.4s linear;
 *	}
 *	.transitionHeight.open {
 *		height:auto; // <--- FALLBACK
 *		height:var(--fullHeight);
 *	}
 *  @requires jQuery
 * 	@returns {jQuery} collection - The passed in jQuery collection
 *     to allow for method chaining
 */
(function($) {
	'use strict';

	jQuery.fn.prepareHeightTransition = function() {

		return this.each(function() {

			var $el = $(this),
					rehide = false,
					hgt,
					resizeTimeout;

			// forcing a unique namespace seems to fix the resize problem, also not allowing for custom namespaces
			var namespace = $el.data('phnamespace') ||
					(Math.floor(Math.random() * 10000000) + '-' + Math.floor(Math.random() * 100000));

			$el.data('phnamespace', namespace);

			$(window).off('resize.' + namespace).on('resize.' + namespace, function(e) {
				// only run once resizing is done
				clearTimeout(resizeTimeout);
				resizeTimeout = setTimeout(function() {
					$el.prepareHeightTransition();
				}, 500);
				return false;
			});

			// if the element is hidden because of a parent, we have to unhide the parent
			// for a moment to be able to calculate auto height
			if($el.is(':hidden')) {
				rehide = true;
				// use show to display initial default value
				$el.parentsUntil('section', ':hidden').addClass('heightprep').show();
			}

			// get the calculated auto height
			// need to make sure any transitions don't delay height calc
			$el[0].style.transitionDuration ='0ms';
			$el[0].style.height ='auto';
			hgt = window.getComputedStyle($el[0], null).height;

			// set css variable for referencing in open class
			$el[0].style.setProperty('--fullHeight', hgt);

			// set a class for referencing/re-calling from other code: $('.oheight')
			$el.addClass('oheight');

			// unset the inline styles
			$el[0].style.height = '';
			$el[0].style.transitionDuration ='';

			if(rehide) {
				$el.parentsUntil('section', '.heightprep').removeClass('heightprep').css('display', '');
			}
		});
	};
}(jQuery));


/*! GENERIC-DOWNLOADOTN */

jQuery(document).ready(function($) {
	'use strict';

	/* globals getCookieData, getUserInfo */
	var CLS_LICENSE = 'license-link',
			CLS_LOCKED = 'icn-lock',
			CLS_UNLOCKED = 'icn-download',
			CLS_DISABLED = 'bttn-disabled',
			// use attr for this so that we get a string, eg. "3336168"
			// data('license') will convert to a number and fail ===
			ATTR_LICENSE = 'data-license',
			ATTR_JAVA = 'data-type',
			//window.java = false,
			java,
			currentLicense,
			DATA_COOKIED = 'iscookied',
			DATA_LBX = 'lbxhref',
			links = '.' + CLS_LICENSE,
			$ctr = $('[data-licenses]'),
			cookieName = 'oraclelicense',
			cookiePath = '/',
			cookieDomain = getCookieDomain(),
			cookieAge = 60 * 30,
			cookieData = getCookieData(cookieName),
			isAuthUser = Boolean(getUserInfo().guid),
			endpoint = $ctr.data('licenses'),
			lbxContent = $(links).first().attr('href'),
			lbxInPage = /^#/.test(lbxContent),
			loginUrl = 'https://www.oracle.com/webapps/redirect/signon?nexturl=',
			isMobile = window.innerHeight <= 650,
			dfs = endpoint && [jQuery.getJSON(endpoint)],
			licenseData = [];

	//$(links).removeClass("icn-download").addClass("icn-lock");
	if(dfs && !lbxInPage) {
		dfs.push(jQuery.get(lbxContent));
	}

	return dfs && jQuery.when.apply(null, dfs).done(init);

	function init() {

		var json = lbxInPage ? arguments[0] : arguments[0][0],
				lbx = lbxInPage ? $(lbxContent) : $(arguments[1][0]).find(lbxContent.slice(lbxContent.indexOf('#'))),
				jsonStatus = lbxInPage ? arguments[1] : arguments[0][1],
				lbxStatus = lbx.length && 'success';

		if(jsonStatus !== 'success') {
			// eslint-disable-next-line no-console
			return console.warn('License Data Error: Could not get license data from ' + endpoint);
		}

		if(lbxStatus !== 'success') {
			// eslint-disable-next-line no-console
			return console.warn('License Lightbox Error: Could not get license lightbox from ' + lbxContent);
		}

		if(!lbxInPage) {
			lbx.appendTo('body');
			$(links).attr('href', inPageLink);
		}

		return (
			(licenseData = json) &&
			$(links).each(handleLink) &&
			$(document).on('open.lightbox', onLightboxOpen)
		);
	}

	function handleLink() {
		var $a = $(this);
		if ($a.attr(ATTR_JAVA) === 'java') {java = true;}
		else {java = false;}
		var	isCookied = cookieData.includes($a.attr(ATTR_LICENSE)),
				// keep a reference to the original lightbox content
				//  to restore if agreement is declined
				lbxhref = $a.attr('href'),
				attrs = {
					rel: isCookied ? 'noopener noreferrer' : 'lightbox',
					'data-theme': 'light',
					'data-ltbxclass': 'license-lightbox',
				};

		// add space key aria action
		$a.keypress(function(e) {
			if (e.keyCode == 32) {
				$a[0].click();
			}
		});

		return (
			$a.data(DATA_COOKIED, isCookied)
				.data(DATA_LBX, lbxhref)
				.attr(attrs)
				.attr('href', isCookied ? directFileLink : noop)
				.attr('href', isCookied && !java ? redirectLink : noop)
				.on('click', !isCookied ? generateLbx : noop) &&
			toggleLinks($a, isCookied)
		);
		
	}

	function onLightboxOpen(e, target) {
		// bail if this wasn't called by a .license-link
		if(!$(target).is(links)) { return; }

		var $a = $(target),
				$btn = $('.download-file', '.w11'),
				$notify = $('.download-notify', '.w11'),
				file = $a.data('file');
		
		$('.license-lightbox .oform-sml').show();
		$notify.show();

		isMobile = window.innerHeight <= 650;

		$btn
			.attr('href', file)
			.text([
				$btn.text(),
				// no '/' will return full string
				// 	(str.slice(-1 + 1) == str.slice(0) == str)
				file.slice(file.lastIndexOf('/') + 1)
			].join(' '));
		
		// add space key aria action
		$btn.keypress(function(e) {
			if (e.keyCode == 32) {
				$btn[0].click();
			}
		});

		$notify.toggle(!isAuthUser);

		if ($a.attr(ATTR_JAVA) === 'java') {
			java = true;
			$('.license-lightbox .oform-sml').hide();
			$notify.hide();
			toggleLinks($btn.attr('href', directFileLink), java);
		}
		else {
			java = false;
			toggleLinks($btn.attr('href', redirectLink), isAuthUser);
		}

		//toggleLinks($btn.attr('href', redirectLink), isAuthUser);
		//toggleLinks($btn.attr('href', directFileLink), java);

		return (
			$('.license-agreement', '.w11').one('mouseenter pointerenter touchstart',
				!isMobile && injectAgreement || null) &&
			$('.license-agreement', '.w11').one('click', showAgreement) &&
			$('input[name="licenseAccept"]', '.w11').on('change', onAcceptChanged) &&
			OCOM.oform('.w11')
		);
	}

	function toggleLinks($links, flag) {
		return (
			$links
				.toggleClass(CLS_LOCKED, !flag)
				.toggleClass(CLS_UNLOCKED, flag)
		);
	}

	function directFileLink() {
		return $(this).data('file');
	}

	function inPageLink() {
		var href = $(this).attr('href');
		return href.slice(href.indexOf('#'));
	}

	function lightboxLink() {
		return $(this).data(DATA_LBX);
	}

	function redirectLink() {	
		return (
			(isAuthUser ?
				$(this).attr('download', '')
				: $(this).removeAttr('download')
			) &&
			[
				isAuthUser ? '' : loginUrl,
				// use native href accessor to
				// ensure FQD path is returned
				this.href
			].join('')
		);
	}

	function noop() { /* noop leaves attr unchanged */ }

	function generateLbx(e) {

		var $lbx = $($(this).attr('href')),
				id = $(this).attr(ATTR_LICENSE),
				license = getLicenseInfo(id);

		return (
			$lbx.length && license != null ?
				$lbx
					.find('.license-agreement').attr('href', license.url).end()
					.find('input[name="licenseAccept"]').val(license.id).end()
					.find('output[for="licenseName"]').text(license.name)
				// eslint-disable-next-line no-console
				: !console.warn('License Lightbox Error: No license data found for ' + id) &&
					e.stopPropagation()
		);
	}

	function getLicenseInfo(id) {
		return licenseData.filter(function(license) {
			return license.id === id;
		}).shift();
	}

	function getCookieDomain() {

		var host = window.location.host.replace(/:\d{2,}$/, ''),
				isLocal = /localhost/.test(host);

		return [
			(!isLocal ? '.' : ''),
			host
				.split('.')
				.reverse()
				.slice(0, 2)
				.reverse()
				.join('.')
		].join('');
	}

	function onAcceptChanged(e) {
		//clicking checkbox
		var $input = $(this),
				$btn = $input.closest('.oform').find('.obttn'),
				license = $input.val(),
				currentLicense = license,
				isAccepted = $input.is(':checked'),
				currentCookieData = getCookieData(cookieName);
				//cookie exsists and doesnt contain license
				if (currentCookieData.length > 0 && !currentCookieData.includes(license)) {
					var newLicense = currentCookieData;
					newLicense += ",";
					newLicense += license;
					currentLicense = license;
					license = newLicense;
				}
		var cookieExpire = isAccepted ?
					// expires 30 min from now
					(new Date(cookieAge * 1e3 + Date.now())).toUTCString()
					// expire immediately to remove
					: (new Date(Date.now())).toUTCString(),
				writeCookie = [
					[cookieName, license],
					['domain', cookieDomain],
					['path', cookiePath],
					['expires', cookieExpire],
					['max-age', isAccepted ? cookieAge : 0]
				];

		return (

			toggleLinks(
				// get all license-links with a matching license
				$(links).filter('[data-license="' + currentLicense + '"]')
					// first set to the file path if accepted, otherwise reconstruct lightbox
					.attr('href', isAccepted ? directFileLink : lightboxLink)
					// next add redirect if accepted
					.attr('href', isAccepted && !java ? redirectLink : noop)
					// next remove lightbox trigger if accepted
					.attr('rel', isAccepted ? 'noopener noreferrer' : 'lightbox'),
				isAccepted) &&
			$btn.toggleClass(CLS_DISABLED, !isAccepted) &&
			(document.cookie = writeCookie
				.reduce(function(str, keyval) {
					var newKey = keyval.join('=');
					return !str.length ?
						newKey
						: [str, newKey].join(';');
				}, ''))
		);
	}

	function injectAgreement(e) {

		var $link = $(this),
				$lbx = $link.closest('.w11w6'),
				url = $link.attr('href'),
				id = url.split('#')[1];

		return (
			!$lbx.find('.agreement-content').length &&
			$lbx.find('.oform').before('<div class="agreement-content"></div>') &&
			$.get(url).then(function(html) {
				var $content = $(html).find('#' + id);
				$content = $content.length ?
					$content
					// legacy mosaic markup
					: $(html).find('.orcl6w3').length ?
						$(html).find('.orcl6w3')
						// if we can't find an id or class match, stuff the response
						// into an iframe to sandbox the css and js
						: $('<iframe class="license-iframe" frameborder="0"></iframe>')
							.appendTo($lbx.find('.agreement-content'));
				if($content.is('iframe')) {
					$lbx.find('.agreement-content').addClass('iframe');
					// use doc ready to know when it's safe to write
					$content.ready(function() {
						$content[0].contentDocument.open();
						$content[0].contentDocument.write(html);
						$content[0].contentDocument.close();
					});
				}

				return $lbx.find('.agreement-content')
					.append($content)
					.triggerHandler('agreementReady') &&
					e.pointerType === 'touch' &&
					showAgreement.call($link);
			})
		);
	}

	function showAgreement(e) {
		// punch out to agreement page on mobile
		if(isMobile) { return $(this).attr('target', '_blank') && true; }
		e.preventDefault();
		var $content = $(this).closest('.w11w6').find('.agreement-content');
		return $content.children().length ?
			$content.addClass('show')
			: $content.addClass('loading') &&
				$content.one('agreementReady',
					$content.toggleClass.bind($content, 'loading show'));
	}

});


/*! GENERIC - ANCHOR */
jQuery(document).ready(function($) {
	'use strict';

	return 'OCOM' in window ?
		OCOM.register(WS_ANCHOR, true)
		: $(document).one('OCOMReady', function() {
			OCOM.register(WS_ANCHOR, true);
		});

	function WS_ANCHOR() {
		var _destination = 0,
			_extraSpace = 10,
			_FLAG = ".ws-sticky",
			_loopId = 0,
			_linkTxt = "",
			_startTime = null,
			_TRIGGER = "anchorlink",
			pub = {};
		// private methods
		function calcStickyHt() {
			var ht = 0,
				stickies = document.querySelectorAll(_FLAG);
			for (var i = 0; i < stickies.length; i++) {
				if (window.getComputedStyle(stickies.item(i)).getPropertyValue("position") == "sticky" || window.getComputedStyle(stickies.item(i)).getPropertyValue("position") == "fixed") {
					// only add height if _FLAG is at the topmost level
					if (!stickies.item(i).parentElement.closest(_FLAG)) {
						ht = ht + stickies.item(i).offsetHeight + _extraSpace;
					}
				}
			}
			return ht;
		}
		function closestParent(elementObj, selector) {
			var parent = elementObj.parentElement;
			if (!parent) {
				return false;
			} else if (parent.matches(selector)) {
				return parent;
			} else {
				return closestParent(parent, selector);
			}
    	}
		function destinationExists(href) {
			if (!href) {
				return false;
			}
			var targetById = document.querySelector("#" + href),
				targetByName = document.querySelector("[name=\"" + href + "\"]"),
				targetEl = false;
			if (targetById) {
				targetEl = targetById;
			} else if (targetByName) {
				targetEl = targetByName;
			}
			return targetEl;
		}
		// recursively add up offsetTop values
		function getOffset(el) {
			var offset = el.offsetTop,
				parentOffset;
			if (el.offsetParent) {
				parentOffset = getOffset(el.offsetParent);
				offset = offset + parentOffset;
			}
			return offset;
		}
		// resolve clicks and URL hash
		function handleClick(e, initialHash) {
			var anchor,
				href,
				newHash = "",
				otype = "",
				targetEl,
				targetHref = "";
			if (typeof(e) == "object") {
				otype = Object.prototype.toString.call(e);
				// detect e to get rid of jquery deferred error
				if (e) {
					// due to event capturing, target could be innermost child of A
					if (e.target.tagName == "A") {
						anchor = e.target;
					} else {
						anchor = closestParent(e.target, "A");
					}
				}
			}
			if (otype.indexOf("Event") > -1 && anchor && anchor.classList.contains(_TRIGGER)) {
				e.preventDefault();
				_linkTxt = anchor.textContent;
				targetHref = anchor.getAttribute("href");
				historyPush(targetHref);
				newHash = window.location.hash.replace("#","").split("?")[0];
			} else if (initialHash) {
				newHash = initialHash;
			}
			targetEl = destinationExists(newHash);
			if (targetEl) {
				scrollTo(targetEl);
			}
		}


		function hashGet() {
			var hash = window.location.hash.replace("#","");s
		}
		function historyPush(targetStr) {
			if (history.pushState) {
			    history.pushState(null, _linkTxt, targetStr);
			    return true;
			} else {
				return false;
			}
		}
		function scrollTo(targetEl) {
			var offset = getOffset(targetEl);
			window.scroll({
				top: offset - calcStickyHt(),
				behavior: "smooth"
			});
		}

		window.WS_ANCHOR_stickyHt = function() {
			return calcStickyHt();
		}
		function smoothscroll_init() {
			var initialHash = window.location.hash.replace("#","").split("?")[0];
			document.addEventListener("click", function (e) {
				handleClick(e);
			}, true);
			if (initialHash) {
				handleClick(null, initialHash);
			}
		}
		smoothscroll_init();
	}
});


/*

var WS_ANCHOR = (function () {
	var _destination = 0,
		_extraSpace = 10,
		_FLAG = ".ws-sticky",
		_loopId = 0,
		_linkTxt = "",
		_startTime = null,
		_TRIGGER = "anchorlink",
		pub = {};
	// private methods
	function calcStickyHt() {
		var ht = 0,
			stickies = document.querySelectorAll(_FLAG);
		for (var i = 0; i < stickies.length; i++) {
			if (window.getComputedStyle(stickies.item(i)).getPropertyValue("position") == "sticky" || window.getComputedStyle(stickies.item(i)).getPropertyValue("position") == "fixed") {
				ht = ht + stickies.item(i).offsetHeight + _extraSpace;
			}
		}
		return ht;
	}
	function destinationExists(href) {
		if (!href) {
			return false;
		}
		var targetById = document.querySelector("#" + href),
			targetByName = document.querySelector("[name=\"" + href + "\"]"),
			targetEl = false;
		if (targetById) {
			targetEl = targetById;
		} else if (targetByName) {
			targetEl = targetByName;
		}
		return targetEl;
	}
	// recursively add up offsetTop values
	function getOffset(el) {
		var offset = el.offsetTop,
			parentOffset;
		if (el.offsetParent) {
			parentOffset = getOffset(el.offsetParent);
			offset = offset + parentOffset;
		}
		return offset;
	}
	function handleClick(e) {
		var href,
			newHash,
			otype = typeof(e) == "object" ? Object.prototype.toString.call(e) : "",
			targetEl,
			targetHref = '';

		if (otype.indexOf("Event") > -1 && e.target.tagName == "A" && e.target.classList.contains(_TRIGGER)) {
			e.preventDefault();
			_linkTxt = e.target.textContent;
			targetHref = e.target.getAttribute("href");
			historyPush(targetHref);
			
			//	e.preventDefault();
			//	_linkTxt = e.target.textContent;
			//	historyPush(e.target.getAttribute("href"));
			//	newHash = window.location.hash.replace("#","").split("?")[0];
			//	targetEl = destinationExists(newHash);
			//	if (targetEl) {
			//		scrollTo(targetEl);
			//	}
			
		} 
		newHash = window.location.hash.replace("#","").split("?")[0];
		targetEl = destinationExists(newHash);
		if (targetEl) {
			scrollTo(targetEl);
		}
	}

//	function hashChange(e) {
//		var newHash = window.location.hash.replace("#","").split("?")[0],
//			targetEl = destinationExists(newHash);
//		_linkTxt = "";
//		if (targetEl) {
//			scrollTo(targetEl);
//		}
//	}

	function hashGet() {
		var hash = window.location.hash.replace("#","");s
	}
	function historyPush(targetStr) {
		if (history.pushState) {
		    history.pushState(null, _linkTxt, targetStr);
		    return true;
		} else {
			return false;
		}
	}
	function scrollTo(targetEl) {
		var offset = getOffset(targetEl);
		window.scroll({
			top: offset - calcStickyHt(),
			behavior: "smooth"
		});
	}
	// public methods
	pub.stickyHt = function () {
		return calcStickyHt();
	}
	pub.smoothscroll_init = function () {
		var anchors = document.querySelectorAll(_TRIGGER),
			initialHash = window.location.hash.replace("#","").split("?")[0];
		document.addEventListener("click", function (e) {
			handleClick(e);
		}, true);
		//window.addEventListener("hashchange", function (e) {
		//	hashChange(e);
		//}, false);
		// direct link to hash
		//if (initialHash) {
		//	hashChange();
		//}
		if (initialHash) {
			handleClick();
		}
	}
	return pub;
})();

if (document.readyState != 'loading') {
	WS_ANCHOR.smoothscroll_init();
} else {
	document.addEventListener('DOMContentLoaded',function () {
		WS_ANCHOR.smoothscroll_init();
	});
}
*/


// COMPONENTS THAT WILL NOT USE OCOM NAMESPACE

// OCOM NAMESPACE - AFTER LIBRARIES & PLUGINS but BEFORE any COMPONENTS
/*! OCOM-FRAMEWORK */
/**
 * A framework for registering and executing component javascript
 * @class {Object} OCOM
 * @requires jQuery
 * @docs OCOM.md
 */

var OCOM = OCOM || {
	// Enable some debugging console output
	debug: /ocomdebug=1/.test(window.location.search),

	// Store a reference to the script context, for possible codebase adjustments
	codebase: document.currentScript ? document.currentScript.src.match(/\/([a-z0-9_\.\-]+)\.js$/i)[1] : '',
	nameCount: 0,
	// Track whether jQuery(document).ready has fired, so that if
	// there is a late component registration, it will be run immediately.
	docReady: false,

	// Store functions that have a global=true flag in an array, to be executed
	// always on document ready.  Avoids the need to set data-ocomid (eg. col-framework)
	globals: [],
	/**
	 * Implement jQuery's extend in vanilla JS
	 */
	extend: function () {
		'use strict';
	    for(var i = 1; i < arguments.length; i++) {
	        for(var key in arguments[i]) {
	            if (arguments[i].hasOwnProperty(key)) {
	                arguments[0][key] = arguments[i][key];
	            }
	        }
	    }
	    return arguments[0];
	},
	/**
	 *	Provides a service to register and index component javascript,
	 *		scoping jQuery to the context (CSS selector) defined in the parameter
	 *	@class OCOM.register
	 *  @requires jQuery
	 *  @param {function} fn - The function containing component code and handlers
	 *  @returns {function} a reference to the OCOM property containing the function
	 *  @example <caption>Direct assignment with named function</caption>
	 *  OCOM.register(function ex01($) { ... component code ... });
	 *  @example <caption>Assignment to variable, with recommended IIFE encapsulation</caption>
	 *  (function() {
	 *  	var ex01 = function($) { ... component code ... };
	 *  	OCOM.register(ex01);
	 *  })();
	 */
	/* globals OraclePerformance */
	register: function() {
		'use strict';


		var fn = arguments[0],
				globalFn = 'boolean' === typeof arguments[arguments.length - 1] ?
										arguments[arguments.length - 1] : null,
				newComponent = {};
		// Fix Function.name on browsers that do not support it (IE):
		if(!(function f() {}).name) {
			Object.defineProperty(Function.prototype, 'name', {
				get: function() {
					var name = (this.toString().match(/^\s*function\s+([^\(\s]*)\s*/) || [])[1];
					// For better performance only parse once, and then cache the
					// result through a new accessor for repeated access.
					Object.defineProperty(this, 'name', { value: name });
					return name;
				}
			});
		}
		// prevent overwriting existing function
		if(this[fn.name]) {
			if(OCOM.debug) { console.error('OCOM.' + fn.name + ' has already been defined'); }
			return false;
		}
		newComponent[fn.name] = function(context) {
				var thecontext = context || document,
					hasRunContextObj,
					hasRunContext,
					$;
				
				if (typeof jQuery == "function") {
					hasRunContextObj = thecontext instanceof jQuery ? thecontext[0] : thecontext;

					// alias $ to jQuery in thecontext
					/* jshint unused:false */
					$ = function(selector, context) {
						return new jQuery.fn.init(selector, thecontext);
					};
				} else {
					hasRunContextObj = thecontext;
				}
				hasRunContext = hasRunContextObj.toString().replace(/(\[.*? |\])/g, '');	

				if(OCOM.debug) {
					/*
					if(OCOM[fn.name].hasRun(hasRunContext)) {
						console.warn('OCOM.' + fn.name + ' has already run within ' + hasRunContext);
					}
					*/
					if(OCOM[fn.name].hasRun(hasRunContextObj)) {
						console.warn('OCOM.' + fn.name + ' has already run within ' + hasRunContext);
					}
					console.log(fn.name + ' running in ' + hasRunContext + ' context:');
				}

				if('OraclePerformance' in window) {
					OraclePerformance.mark(fn.name + '-initStart');
				}

				if(!OCOM[fn.name].hasRun(hasRunContext)) {
					OCOM[fn.name].hasRunContexts.push(hasRunContext);
					OCOM[fn.name].contextObjAr.push(hasRunContextObj);
				}

				// call the component function with assigned context
				fn.call(OCOM[fn.name], $);

				if('OraclePerformance' in window) {
					OraclePerformance.mark(fn.name + '-initEnd');
				}

			};

		try {
			// try to set name property of function, okay in most browsers
			// but in iOS 9 Function.name is unconfigurable
			Object.defineProperty(newComponent[fn.name], 'name', {
			  enumerable: false,
			  configurable: true,
			  writable: false,
			  value: fn.name
			});
		} catch(err) {
			/* noop */
		}

		Object.defineProperty(newComponent[fn.name], 'namespace', {
		  enumerable: false,
		  configurable: true,
		  writable: false,
		  value: 'OCOM'
		});

		// grab any extra properties or methods defined
		// and merge into this entity

		//jQuery.extend(newComponent[fn.name], fn.prototype);
		newComponent[fn.name] = OCOM.extend(newComponent[fn.name], fn.prototype);
		
		// set a property on this component to store contexts
		// in which the function has been called
		newComponent[fn.name].hasRunContexts = [];
		newComponent[fn.name].contextObjAr = [];
		/*
		newComponent[fn.name].hasRun = function(context) {
			// context = 'string' === typeof context ? $(context) : context;
			return this.hasRunContexts.some(function(c) {
				return c === context;
			});
		};
		*/

		// hasrun compares objects instead of strings
		newComponent[fn.name].hasRun = function(contextObj) {
			return this.contextObjAr.some(function(c) {
				return c === contextObj;
			});
		};
		// extend OCOM
		//jQuery.extend(this, newComponent);
		OCOM = OCOM.extend(this, newComponent);

		// add to globals if flag is set
		if(globalFn && !this.globals.some(function(id) { return id === fn.name; })) {
			this.globals.push(fn.name);
		}

		// check if document.ready has already run and if so, execute immediately
		// 	unless an explicit false is passed to OCOM.register
		// Note: Do not execute if requirejs is in use
		if(this.docReady && globalFn !== false && typeof window.requirejs == "undefined") {
			this[fn.name]();
		}
		return this[fn.name];
	},

	/**
	 * Searches a given selector context for components.
	 * @class OCOM.findComponentElements
	 * @requires jQuery
	 * @param {string} context - A selector to traverse, defaults to <code>document</code>
	 * @return {array} An array of component/OCOM ids
	 * @example
	 *  OCOM.findComponentElements('.parentDiv');
	 *  &rdca; ["cb24", "cw43", "cn21"]
	 */
	findComponentElements: function(context) {
		'use strict';

		var components = [],
			list;

		context = context || document;

		if (typeof jQuery == "undefined") {
			list = document.querySelector(context).querySelectorAll("[data-ocomid]");
			Array.prototype.forEach.call(list, function(component) {
				// check that component id is not already in the list, and add
				if(!components.some(function(c){return c === component.dataset.ocomid;})) {
					components.push(component.dataset.ocomid);
				}
			});
		} else {
			$('[data-ocomid]', context).each(function() {
				var component = $(this);
				// check that component id is not already in the list, and add
				if(!components.some(function(c){return c === component.data('ocomid');})) {
					components.push(component.data('ocomid'));
				}
			});
		}
		return components;
	},
	/**
	 * Convenience function to find components within a given context, check for
	 * 	OCOM method exists and has not run on page, and execute component js if true
	 * @class OCOM.runFoundComponents
	 * @requires jQuery
	 * @param {string} context - A selector to traverse, defaults to <code>document</code>
	 * @example
	 *  OCOM.runFoundComponents('.parentDiv');
	 */
	runFoundComponents: function(context) {
		'use strict';

		var hasRunContext,hasRunContextObj;

		context = context || document;
		//hasRunContextObj = context instanceof jQuery ? context[0] : context;

		if (typeof jQuery == "function") {
			if (context instanceof jQuery) {
				hasRunContextObj = context[0];
			} else {
				hasRunContextObj = context;
			}
		} else {
			hasRunContextObj = context;
		}

		hasRunContext = hasRunContextObj.toString().replace(/(\[.*? |\])/g, '');
		this.findComponentElements(context).forEach(function(component) {
			return OCOM[component] && !OCOM[component].hasRun(hasRunContextObj) && OCOM[component](context);
		});
		/*
		hasRunContext = (context instanceof jQuery ? context[0] : context).toString().replace(/(\[.*? |\])/g, '');
		this.findComponentElements(context).forEach(function(component) {
			return OCOM[component] && !OCOM[component].hasRun(hasRunContext) && OCOM[component](context);
		});
		*/
		return this;
	},
	forceRunFoundComponents: function (context) {
		'use strict';
		context = context || document;
		this.findComponentElements(context).forEach(function(component) {
			return OCOM[component] && OCOM[component](context);
		});
		return this;
	},
	/**
	 * Function to run components registered with the global=true flag if they have not
	 * 	already been called by runFoundComponents
	 * @class OCOM.runGlobalComponents
	 */
	runGlobalComponents: function(context) {
		'use strict';

		var hasRunContext,hasRunContextObj;

		context = context || document;
		//hasRunContextObj = context instanceof jQuery ? context[0] : context;
		if (typeof jQuery == "function") {
			if (context instanceof jQuery) {
				hasRunContextObj = context[0];
			} else {
				hasRunContextObj = context;
			}
		} else {
			hasRunContextObj = context;
		}
		hasRunContext = hasRunContextObj.toString().replace(/(\[.*? |\])/g, '');
		this.globals.forEach(function(component) {
			return OCOM[component] && !OCOM[component].hasRun(hasRunContextObj) && OCOM[component](context);
		});
		/*
		hasRunContext = (context instanceof jQuery ? context[0] : context).toString().replace(/(\[.*? |\])/g, '');

		this.globals.forEach(function(component) {
			return OCOM[component] && !OCOM[component].hasRun(hasRunContext) && OCOM[component](context);
		});
		*/
		return this;
	},
	forceRunGlobalComponents: function(context) {
		'use strict';

		context = context || document;
		this.globals.forEach(function(component) {
			return OCOM[component] && OCOM[component](context);
		});
		return this;
	},
	/**
	 * Utility debug function to to list components that have run within a given context
	 * @class OCOM.listHasRunComponents
	 * @param {string} context - A selector to traverse, defaults to <code>document</code>
	 * @example
	 *  OCOM.listHasRunComponents('.parentDiv');
	 */
	listHasRunComponents: function(context) {
		'use strict';

		var components = [],
			 	hasRunContext,
			 	hasRunContextObj;

		context = context || document;
		//hasRunContext = context instanceof jQuery ? context[0] : context;
		if (typeof jQuery == "function") {
			if (context instanceof jQuery) {
				hasRunContextObj = context[0];
			} else {
				hasRunContextObj = context;
			}
		} else {
			hasRunContextObj = context;
		}
		Object.keys(OCOM).forEach(function(key) {
			if('OCOM' === OCOM[key].namespace && OCOM[key].hasRun(hasRunContextObj)) {
				components.push(key);
			}
		});

		return components.sort();
	},
	initialize: function () {

		// broadcast a ready event for JS defined before OCOM
		var event = document.createEvent('Event');
		// Define that the event name is 'build'.
		event.initEvent('OCOMReady', true, true);
		// target can be any Element or other EventTarget.
		document.dispatchEvent(event);

		if(OCOM.debug) {
			console.group && console.group('OCOM');
			console.log('OCOM running within ' + OCOM.codebase);
			console.log('Found elements on page: ', OCOM.findComponentElements());
			console.log('OCOM status: ', OCOM);
		}

		// ensures non-blocking CSS assets have loaded
		// 	before running any component JS
		OCOM.stylesLoaded()
			.then(function() {
				// Loops through the array of component ids found on page and
				// calls each registered function if exists and has not run yet
				OCOM.runFoundComponents();

				// Loops through the array of component ids in OCOM.globals array and
				// calls each registered function if exists and has not run yet
				OCOM.runGlobalComponents();
			});

		OCOM.docReady = true;

		if(OCOM.debug) { return console.groupEnd && console.groupEnd(); }
	}

};

OCOM.stylesLoaded =
	
/*! GENERIC-STYLESLOADED */
/**
 * Utility function to wait until non-blocking CSS assets have
 * 	loaded before executing a callback.
 *
 * 	@info  <p>Typically, since assets are loaded from same domain,
 * 	         this function can verify if there are CSS rules associated
 * 	         with a given stylesheet.  However, there are some cases
 * 	         (eg. staging, betamode, etc) where trying to access CSS rules
 * 	         throws an InvalidAccessError.  In these cases, a loadevent listener
 * 	         is attached to set <code>data-wscss="loaded"</code>.
 * 	         Failing that, the Deferred is set to resolve after a given timeout,
 * 	         to avoid endless polling.</p>
 * 	         <p><strong>NOTE:</strong> You shouldn't need to use this directly.
 * 	         	This function is imported and used by OCOM framework to determine
 * 	         	if it should wait to run component JS when async CSS is found
 * 	         	in the <code>head</code>.  Therefore, inside any component code registered
 * 	         	with <code>OCOM.register</code> it is <u>safe to assume styles have
 * 	         	already been applied</u>.</p>
 *
 * 	@class OCOM.stylesLoaded
 * 	@see [https://api.jquery.com/jQuery.Deferred/](jQuery.Deferred)
 * 	@returns {jQuery.Deferred} a jQuery Deferred object (Promise) which
 * 	                             resolves once <strong>all</strong>
 * 	                             <code>&lt;link data-wscss&gt;</code> assets have loaded
 * 	@example <caption>Anonymous callback</caption>
 *  OCOM.stylesLoaded().then(function() {
 *  	// do something now that styles have been applied ...
 *  });
 * 	@example <caption>Callback reference</caption>
 *  OCOM.stylesLoaded().then(callbackFn);
 */
(function($, window) {
	/* eslint-disable no-console */
	'use strict';

	// iOS 8.1-8.4 does not support window.performance.now, fallback to Date.now()
	var start = window.performance && window.performance.now() || Date.now(),
			timeout = 10000,
			cached = false,
			docContext = document,
			promise = $.Deferred(),
			DEBUG = 'OCOM' in window && OCOM.debug,
			ATTR_WSCSS = 'data-wscss',
			DATA_LOADED = 'loaded',
			DATA_EVLISTEN = 'loadEventListener',
			inDocSheets = function(link) {
				// checks if link.href has been applied to document
				return (
					Array.prototype.slice.call(docContext['styleSheets'])
						.map(function(sheet) {
							return sheet.href;
						})
						.some(function(href) {
							return href === link.href;
						})
				);
			},
			getSheetName = function(sheet) {
				return sheet.href && sheet.href.slice(sheet.href.lastIndexOf('/') + 1);
			},
			check = function(link) {

				var loaded = false,
						foundRules = 0,
						now = window.performance && window.performance.now() || Date.now(),
						isCrossDomain = !(new RegExp(window.location.origin).test(link.href)),
						isBlocking = !link.as && link.rel !== 'preload',
						isPreLoad = (
							link.as === 'style' &&
							link.rel === 'stylesheet' &&
							link.getAttribute(ATTR_WSCSS) !== 'error'
						),
						loadFired = link.getAttribute(ATTR_WSCSS) === DATA_LOADED,
						timeoutFallback = (now - start > timeout),
						log = '',
						// cache a jQuery instance for event listener and data
						$link = $(link);

				if(DEBUG) {
					log += '[' + parseInt(now, 10) + 'ms] ' + getSheetName(link);
				}

				try {
					// check if rules have been parsed and applied to document
					// In some browsers, if a stylesheet is loaded from a different domain,
					// calling cssRules results in SecurityError
					// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet#Notes
					foundRules = link.sheet.cssRules.length;
					loaded = Boolean(foundRules) && inDocSheets(link);

				} catch(err) {

					// attach a listener for load
					if(!$link.data(DATA_EVLISTEN)) {

						// set attr value on load
						// set flag for listener has already been attached
						$link.one('error', $link.attr.bind($link, ATTR_WSCSS, 'error'))
							.one('load', $link.attr.bind($link, ATTR_WSCSS, DATA_LOADED))
							.data(DATA_EVLISTEN, true);
					}

					loaded =
						// CSSStyleSheet object exists in CSSOM
						// but doesn't reliably mean external content has loaded
						Boolean(link.sheet) &&
						// if cross-domain, we cannot access cssRules (eg. staging, betamode)
						//  so need to rely on preload handler, or our load event listener
						isCrossDomain &&
						// if its a blocking CSS (*-base.css) ignore rest of checks
						(isBlocking ||
						// catches preload support with onload="this.rel='stylesheet'"
						//  but can return false positive onerror="this.rel='stylesheet'"
						isPreLoad ||
						// catches load event listener
						loadFired) &&
						// make sure this sheet has been applied to document
						inDocSheets(link);
				}

				if(DEBUG) {
					log += [
						loaded || timeoutFallback ? ' ✓ready' : ' ✗not ready',
						isCrossDomain ? ' ✗crossdomain' : ' ✓sameorigin',
						(foundRules ? ' ✓' : ' ✗')
							+ 'cssRules(' + (isCrossDomain ? 'N/A' : foundRules) + ')',
						(inDocSheets(link) ? ' ✓' : ' ✗') + 'document.styleSheets',
						isBlocking ? ' ✓blocking'
							: isPreLoad ? ' ✓preloaded'
								: loadFired ? ' ✓onload fired'
									: timeoutFallback ?  ' ✓timeout fallback' : '',
					].join('\n');
					console.log(log);
				}

				// if things don't work due to CORS or 404,
				//  we should just go ahead after a reasonable timeout - 10sec
				return loaded || timeoutFallback;

			},
			stylesLoaded = function(context) {

				docContext = context || document;

				// check for async css files
				var sheets = $('link[' + ATTR_WSCSS + ']', docContext).get();

				// if check for stylesLoaded is true, cache for future (resize) calls
				// if no async css are found, length = 0 and returns true
				// otherwise, do check to look for CSS rules
				cached = cached ||
								!sheets.length ||
								sheets.every(check);

				// when our checks return true, we resolve the promise
				// otherwise, recheck at an interval until we can resolve
				return cached && promise.resolve()
								|| setTimeout(stylesLoaded.bind(null, docContext), 200) && promise;
			};

	return stylesLoaded;

}(jQuery, window));


if (typeof jQuery == "function") {
	// broadcast a ready event for JS defined before OCOM
	jQuery(document).triggerHandler('OCOMReady');

	jQuery(document).ready(function($) {
			'use strict';
			OCOM.initialize();
	});
} else {
	if (document.readyState == "complete") {
		OCOM.initialize();
	} else {
		document.onreadystatechange = function () {
			if (document.readyState == "complete") {
				OCOM.initialize();
			}
		}
	}
}

// COMPONENTS
/*! CG19 - OCRSL */
OCOM.register(function ocrsl($) {
	'use strict';
	$('.o-crsl').each(function(){
		if(!$(this).closest(".cw58")[0]){
			if(!$(this).hasClass('crsl-customjs')){


				var $container = $(this),
					$slider = $container.find('.crsl-slider'),
					totalslides = $slider.children().length,
					dtype = ($('.f20')[0]) ? 'rw-rect' : '',
					$nav = $('<div class="crsl-nav slick-nav '+dtype+'"></div>').appendTo($container),
					colnum = 1,
					mobilecol = 1,
		//			navfor = $container.data('crslnavfor') ? $container.closest('section').find('.'+$container.data('crslnavfor')).first() : false,
		//			navfor = $container.data('crslnavfor') ? '.'+$container.data('crslnavfor') : false,
		//			fornav = $container.data('crslfornav') ? '.'+$container.data('crslfornav') : false,
		//			focusOn = (navfor) ? true : false,
		//			navfor = (fornav) ? fornav : navfor,
					r2l = $container.closest('.rtl')[0] ? true : false,
					hasDots = $container.hasClass('crsl-no-dots') ? false : true,
					hasArrows = $container.hasClass('crsl-no-arrows') ? false : true,
					speed = $container.attr('data-speed') ? $container.attr('data-speed') : 300,
					setautoplay = $container.attr('data-slideautoplay') ? true : false,
					setfirstslide = $container.hasClass('crsl-random') && $container.hasClass('col1') ? Math.floor(Math.random() * (totalslides - 0) + 0) : 0;

				if(setautoplay == true) {
					var setautoplayspeed = $container.attr('data-slideautoplay') * 1000;
				}

				// set column number
				if ($container.hasClass('col5')) {
					colnum = 5;
				}else if ($container.hasClass('col4')) {
					colnum = 4;
				}else if ($container.hasClass('col3')) {
					colnum = 3;
				}else if ($container.hasClass('col2')) {
					colnum = 2;
				}

				// 2 up mobile option allow for 2 up on mobile
				if ($container.is('.col-2upmobile') && !$container.is('.col1')) {
					mobilecol = 2;
				}

				// add class if more than minimum number is present to show nav on full desktop
				if($container.find('.col-item').length > colnum){
					$container.addClass('crsl-full');
				}

				//JS breakpoint must match the breakpoint in the CSS
				var responsiveConfig = {
					'col1': [], // no breakpoints
					'col2': [
						{
							breakpoint: 770,
							settings: {
								slidesToShow: mobilecol,
								slidesToScroll: mobilecol
							}
						}
					],
					'col3': [
						{
							breakpoint: 1081, // first must be 1px higher than css breakpoint (when arrows are still on sides)
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: mobilecol,
								slidesToScroll: mobilecol
							}
						}
					],
					'col4': [
						{
							breakpoint: 1301,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3
							}
						},
						{
							breakpoint: 974,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: mobilecol,
								slidesToScroll: mobilecol
							}
						}
					],
					'col5': [
						{
							breakpoint: 1301,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 4
							}
						},
						{
							breakpoint: 1080,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 450,
							settings: {
								slidesToShow: mobilecol,
								slidesToScroll: mobilecol
							}
						}
					]
				};

				$slider.slick({
					appendArrows: $nav,
					appendDots: $nav,
					infinite: false,
					lazyLoad: 'ondemand',
					dots: hasDots,
					arrows: hasArrows,
					swipe: true,
					initialSlide:setfirstslide,
					autoplay: setautoplay,
					autoplaySpeed:setautoplayspeed,
					rtl: r2l,
					touchMove: true,
		//			asNavFor: navfor,
		//			focusOnSelect: focusOn,
					slidesToShow: colnum,
					slidesToScroll: colnum,
					speed: speed,
					// IE Hack to prevent css transform issues and use js animation instead
					useCSS: /(MSIE |Trident\/)/.test(window.navigator.userAgent) ? false : true,
					responsive: responsiveConfig['col'+colnum]
				});
			}
		}
	});

	    $(".o-crsl .crsl-slider").on('afterChange', function(event, slick, currentSlide){
			bc_pauseAll(false,$(this).closest('.o-crsl'));
	    });

}, true);


/* EXPANDOCOLS */
OCOM.register(function expandocols($) {
	'use strict';

	$('.expando .col-framework, .col-framework.expando').each(function() {

		// .col-framework.expando is LEGACY support
		// new markup should be section.expando > div.cwidth > .col-framework
		var $container = $(this).closest('.expando'),
				$panels = $container.find('.col-item'),
				// don't try to wrap if col-framework is inside of expando
				needsWrap = !$(this).closest('[data-ocomid="expando"]').length,
				resizeTimeout;

		var wrapPanels = function($ctr, $panels) {

			var minPanels			 = $ctr.data('expandomin'),
					numPanels 		 = getNumPanels($panels, minPanels),
			    $visiblePanels = getVisiblePanels($ctr),
			    hasExpando     = $ctr.find('[data-ocomid="expando"]').length,
			    $expando       = hasExpando ?
															$ctr.find('[data-ocomid="expando"]') :
															$('<div class="col-w1" data-ocomid="expando">');

			if($panels.length > numPanels) {

				if(!hasExpando) {

					$expando
						.data('moretxt', $ctr.data('moretxt'))
						.data('closetxt', $ctr.data('closetxt'));

					$panels.slice(numPanels).wrapAll($expando);

					OCOM.expando($ctr);

				} else {

					$panels.slice(numPanels).appendTo($expando);

				}
			}

			// move panels out of expando if they fit into first row
			while($visiblePanels.length < numPanels) {
				$expando.find('.col-item').first()
					.insertAfter($visiblePanels.parent().find('> .col-item').last());
				numPanels = getNumPanels($panels);
				$visiblePanels = getVisiblePanels($ctr);
			}

			// if expando is empty, remove it
			if(!$ctr.find('[data-ocomid="expando"] > .col-item').length) {
				$ctr.find('[data-ocomid="expando"]').remove();
				$ctr.find('.expando-btn').remove();
			}

		};

		var onWindowResized = function($ctr, $panels) {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(wrapPanels.bind(null, $ctr, $panels), 250);
		};

		// get number of panels that can fit within page width
		var getNumPanels = function($panels, min) {

			var w    = $panels[0].offsetWidth,
			ctrW = ($container.is(".col-framework")) ? $container[0].offsetWidth : $container.find(".col-framework")[0].offsetWidth,
		    fit  = Math.floor(ctrW / w);

			// if min is a multiple of fit, use min (eg. two rows)
			// otherwise, we're at an intermediate breakpoint (eg. 3-up of 4col)
			// 	so just use fit
			return min % fit === 0 ? min : fit;
		};

		// get panels that are not contained in expando
		var getVisiblePanels = function($ctr) {
			return $ctr.find('.col-w1:not([data-ocomid="expando"]) > .col-item');
		};

		// store a reference to this instance for event handling
		if(!$container.data('instanceId')) {
//			$container.data('instanceId', new Date().getTime());
			$container.data('instanceId', Math.floor(Math.random() * 10000000)+'-'+Math.floor(Math.random() * 100000));
		}

		if($panels.length && needsWrap) {
			wrapPanels($container, $panels);
			$(window)
				.off('resize.' + $container.data('instanceId'))
				.on('resize.' + $container.data('instanceId'), onWindowResized.bind(null, $container, $panels));
		}
	});
}, true);

/* INVIEWCOLS */
OCOM.register(function inviewcols($) {
	$('.col-framework:not(.col-noanimation)').inView();
}, true);
 // COL-FRAMEWORK - KEEP FIRST

/*! CG20 EXPANDO */
OCOM.register(function expando($) {
	'use strict';

	$('[data-ocomid="expando"]').each(function() {

		var $expando = $(this),
				$container = $expando.closest('.expando')[0] ? $expando.closest('.expando') : $expando.closest('section'),
				type = $expando.data('type') || 'block',
				moretxt = $expando.attr('data-moretxt') || $container.attr('data-moretxt') || 'More',
				morelbl = $expando.attr('data-morelbl') || moretxt,
				$btn = /(inline|link)/.test(type) ?
					$('<a class="expando-btn" href="javascript:void(0)" role="button" aria-label="' + morelbl + '"><span class="expando-txt">' + moretxt + '</span></a>') :
					$('<div class="expando-btn"><button class="expando-txt icn-img icn-plus-cf" aria-expanded="false" aria-label="' + morelbl + '">' + moretxt + '</button></div>');
						
		// check initialized flag to prevent button duping
		if($expando.data('initialized')) { return false; }

		// class it up if not already in markup
		$container.addClass('expando');

		$expando.prepareHeightTransition();

		$btn.addClass(type);

		if(/fixed/.test(type)) {
			$expando.before($btn);
		} else {
			$expando.after($btn);
		}

		$btn.on('click', expand.bind($expando, $btn));

		// set initialized flag to prevent button duping
		$expando.data('initialized', true);
	
		$expando.find('a').attr("tabindex", "-1");
		$expando.children().attr('aria-hidden', true);

	
	});
	
	function expand($btn) {

		var $expando = $(this),
				$container = $expando.closest('.expando')[0] ? $expando.closest('.expando') : $expando.closest('section'),
				$txt = $btn.find('.expando-txt'),
				$button = $btn.find('button.expando-txt'),
				$buttonClosed = $button.attr("aria-expanded") === "true",
				moretxt = moretxt = $expando.attr('data-moretxt') || $container.attr('data-moretxt') || 'More',
				morelbl = $container.data('morelbl') || moretxt,
				closetxt = $expando.attr('data-closetxt') || 'Close',
				closelbl = $expando.attr('data-closelbl') || closetxt,
				count = 0,
				interval;


		$txt.addClass('switch');

		interval = setInterval(function() {


			switch (count) {
				case 0:
					$expando.toggleClass('expanded');
					break;
				case 1:
					$txt.text($expando.hasClass('expanded') ? closetxt : moretxt);
					$txt.attr("aria-label", $expando.hasClass('expanded') ? closelbl : morelbl);
					if($buttonClosed === true){
						$button.attr("aria-expanded","false");
						$expando.find('a').attr("tabindex", "-1");
						$expando.children().attr('aria-hidden', true);
					} else {
						$button.attr("aria-expanded","true");
						$expando.find('a').attr("tabindex", "0");
						$expando.children().attr('aria-hidden', false);
						if($expando.find('a')[0]){
							$expando.find('a').first().focus();
						}else{
							$expando.find('div,p').first().attr("tabindex", "0");
							$expando.find('div,p').first().focus();
							$expando.find('div,p').first().blur();
							$expando.find('div[tabindex],p[tabindex]').attr("tabindex", "-1");
						}
					}
					break;
				case 2:
					$btn
						.toggleClass('expanded')
						.find('.icn-img')
						.toggleClass('icn-plus-cf')
						.toggleClass('icn-min-cf');
					break;
				case 3:
					$txt.removeClass('switch');
					break;
				default:
					count = 0;
					clearInterval(interval);
					break;
			}
			count++;
		}, 120);

	}

});


/*! F24 */
window.f24interval = 0;
var ADAPTIVEIFRAME = (function () {
	'use strict';
	var _debounceTimeout = 0,
		_oldHt = 0,
		_timeout = 0,
		pub = {};

	function getMaxIndex () {
		var collection = document.getElementsByClassName("f24v0[data-f24instance]"),
			collectionLength = collection.length,
			indexAr = [];
		for (var i = 0; i < collectionLength; i++) {
			indexAr.push(+collection.item(i).getAttribute("data-f24instance"));
		}
		return Math.max(indexAr);
	}
	function resize () {
		var collection = document.getElementsByClassName("f24v0"),
			iframeDoc,
			l = collection.length,
			styles;
		if (l) {
			for (var i = 0; i < l; i++) {
				if (collection.item(i).contentDocument.querySelector(".f24w1")) {
					var newHt = window.getComputedStyle(collection.item(i).contentDocument.querySelector(".f24w1")).height;
					if (_oldHt !== newHt) {
						collection.item(i).style.height = newHt;
					}
				}
			}
			_timeout = window.setTimeout(function () {window.requestAnimationFrame(resize)},300);
		}
	}
	pub.initialize = function () {
		var collection;

		window.f24interval = setInterval(function () {

			if (document.readyState == "interactive" || document.readyState == "complete") {
				clearInterval(window.f24interval);
				
				collection = document.querySelectorAll(".f24v0:not(.f24observed)");

				if ("IntersectionObserver" in window) {
					if (!window.lazyF24Observer) {
						window.lazyF24Observer = new IntersectionObserver(function(entries, observer) {
							entries.forEach(function(entry) {
								if (entry.isIntersecting) {
									var f24 = entry.target;


									f24.onload = function (e) {
										var iframeDoc = e.currentTarget.contentDocument,
											maxIndex = getMaxIndex(),
											maxIndexNew = maxIndex + 1,
											newWrapper = document.createElement("DIV"),
											nodes = iframeDoc.querySelectorAll("body > *");
											iframeDoc.getElementsByTagName("html")[0].classList.add("f24iframe");

										// if iframe is wrapped with a v1, set html bg to transparent and set color to control text color if context is a dark bg
										if(f24.closest('section.f24v1')){
											iframeDoc.getElementsByTagName("html")[0].classList.add("f24transparent");
											var f24v1 = f24.closest('section.f24v1');
											if(f24.closest('section.f24v1:is([class*="-100bg"],[class*="-110bg"],[class*="-120bg"],[class*="-130bg"],[class*="-140bg"],[class*="-150bg"],[class*="-160bg"],[class*="-170bg"],[class*="-180bg"],[class*="-190bg"],[class*="-200bg"]')){
												newWrapper.classList.add("rw-fontset-100bg"); // this class is fake, but the 100bg is all that's needed to the text color to a light color
											}
										}

										// if iframe is in a two column layout, kill the constrained width and two columns
										if(f24.closest('.f22')){
											iframeDoc.getElementsByTagName("html")[0].classList.add("f22-contained-iframe");
										}


										newWrapper.classList.add("f24w1");
										e.currentTarget.setAttribute("data-f24instance",maxIndexNew);
										iframeDoc.body.setAttribute("data-f24instance",maxIndexNew);
										for (var n = 0; n < nodes.length; n++) {
											newWrapper.appendChild(nodes.item(n));
										}
										iframeDoc.body.append(newWrapper);
										e.currentTarget.removeAttribute('data-src');
										e.currentTarget.classList.add('srcloaded');
										
										// unload removed srcloaded so it goes transparent again while the new page loads into the iframe and srcloaded gets added again
										f24.contentWindow.onunload = function (e) {
											f24.classList.remove('srcloaded');
										}

									}


									// pass on page args if tracking URL exist
									var argdel = (f24.dataset.src.indexOf('?') > -1) ? '&' : '?',
										args = (document.location.href.indexOf('source=') > -1) ? argdel+'source='+document.location.href.split('source=')[1].split('&')[0] : '';

									f24.src = f24.dataset.src+args;
									window.lazyF24Observer.unobserve(f24);
								}
							});
						});
					}

					collection.forEach(function(f24) {
						f24.classList.add("f24observed");
						window.lazyF24Observer.observe(f24);
					});
				}
				window.top.requestAnimationFrame(resize);
			}
		},500);
	}
	return pub;
}());
ADAPTIVEIFRAME.initialize();

/*! CC02 - OTABLE */
OCOM.register(function otable($) {
	'use strict';

	var resizeTimeout;

	$('.otable-sticky').each(function() {

		var $otable = $(this),
				$w1 = $otable.find('.otable-w1'),
				$w2 = $otable.find('.otable-w2');

		// prevent dupes - only need one clone
		if($w1.find('.otable-scroll').length) { return; }

		return (
			$w2.clone(true)
				.addClass('otable-scroll')
				.appendTo($w1)
		);
	});


	function onWindowResized(e) {
		clearTimeout(resizeTimeout);
		return (
			resizeTimeout = setTimeout(function() {
				$('.otable-sticky, .otable-scrolling').each(function() {
					var $otable = $(this),
						$w1 = $otable.find('.otable-w1'),
						$w2 = $otable.find('.otable-w2').first(),
						// if sticky, returns the clone, otherwise just need the w2
						$scrollTbl = $otable.find('.otable-w2').last(),
						// count td in first row to set up proper scrolling point
						$count = $w2.children('tbody:first').children('tr:first').children('td').length;
						
						if ($count >= 8) {
							return $w1.toggleClass('scrollinglg', $scrollTbl.outerWidth() > $w1.outerWidth());
						} else {
							return $w1.toggleClass('scrolling', $scrollTbl.outerWidth() > $w1.outerWidth());
						}
				});
			}, 200)
		);
	}

	return onWindowResized() &&
		$(window).off('resize.otable').on('resize.otable', onWindowResized);

}, true);


/*! CB27 */
OCOM.register(function cb27($) {
	'use strict';

	var settings = {
			endpoint: '/a/ocom/docs/global-json/feature-banner-content.json',
			colorDefault: 'yellow',
			templateName: 'cb27-banner',
			storageKey: 'cb27banner',
			langKey: 'cb27lang',
			$target: $('[class^="u10"]').first()
		},
		event5 = {
			endpoint: '/a/ocom/docs/global-json/event-banner-content.json',
			storageKey: 'cb27banner-event5',
			statusKey: 'cb27lang-event5',
			$target: $('[class^="u19"]').first()
		},
		notBlocked = checkBlocked(),
		codebase = 'undefined' !== typeof OCOM && OCOM.codebase || '',
		loco = window.location.href,
		stage = /localhost/.test(loco) ? '' : 'https://www-sites.oracle.com',
		$cb27 = $('<section class="cb27 cb27v6 cb27sticky" data-trackas="global-promo-banner"></section>'),
		CLS_SHOW = 'cb27show',
		CLS_STUCK = 'cb27stuck',
		CLS_UNSTUCK = 'cb27unstuck',
		fetched = false,
		pgVars = getPageVars(),
		datetime = new Date().toISOString(),
		minWinW = 460,
		minWinH = 600,
		contentData,
		placeholderContentData = [{
			sites: ["none"]
		}],
		delay = [],
		scrollThreshold = [],
		themes = {
			'yellow': {
				obttn: 'obttn2',
				bkgnd: 'rw-yellow-40bg',
				iconcolor: '',
				bttncolor: ''
			},
		};
	//console.log(codebase)

	/* globals $import, jsfilepath */
	function init() {
		var hbsLoaded,
			hbsFile,
			hbsCodebase,
			interval;
		if ($(".f20v0")[0]) {
			hbsCodebase = 'redwood';
		} else /*if ($(".f11v6")[0])*/ {
			hbsCodebase = 'ocom';
		}
		hbsLoaded = $('script[src$="handlebars-' + hbsCodebase + '.js"]').length;
		hbsFile = jsfilepath + 'handlebars-' + hbsCodebase + '.js';


		// initialize outer scope vars with local overrides
		jQuery.extend(settings, codebase === 'event5' && event5);
		contentData = getSessionStorage(settings.storageKey);

		// if we've checked and set sessionStorage to false,
		// 	don't check again for remainder of session
		//if(contentData === false) { return false; }

		//contentData = getUnexpiredEntries(contentData);

		//delay = contentData && contentData[0] ? contentData[0].delay : 0;
		//scrollThreshold = contentData && contentData[0] ? contentData[0].onscroll : 0;

		if (Array.isArray(contentData)) {
			for (var i = 0; i < contentData.length; i++) {
				delay[i] = contentData[i].delay;
				scrollThreshold[i] = contentData[i].onscroll;
			}
		}
		/* globals isStageSite */
		settings.endpoint =
			typeof isStageSite === 'function' && isStageSite() ?
				stage+'/a/'+settings.endpoint.split('/a/')[1] :
				settings.endpoint;

		if(!hbsLoaded) { $import(hbsFile); }

		interval = setInterval(function () {
			if(window.WS && window.WS.tpl && window.WS.tpl[settings.templateName]) {
				clearInterval(interval);
				fetchBannerData();
			}
		}, 10);
	}

	function getValidEntryIndex(contentData) {
		var contentDataLength,
			index,
			isExpired = [],
			isTNsite,
			isExcludedPath = [],
			isValidPath = [],
			isValidSite = [];
		contentDataLength = contentData.length;
		for (var i = 0; i < contentDataLength; i++) {
			isExpired[i] = datetime > contentData[i].expires;
			isValidSite[i] = new RegExp('\\b'+pgVars.siteid+'\\b', 'i').test(contentData[i].sites.join(' '));
			isTNsite = /technetwork/.test(loco);
			if(!pgVars.siteid && isTNsite) {
				isValidSite[i] = new RegExp('\\btechnetwork\\b', 'i').test(contentData[i].sites.join(' '));
			}
			if(typeof contentData[i].paths == 'undefined') {
				isValidPath[i] = true;
			} else {
				isValidPath[i] = contentData[i].paths.some( function (path) {
					return new RegExp(escapeForRegExp(path), 'i').test(loco);
				});
			}
			if(typeof contentData[i].excludes == 'undefined' || contentData[i].excludes.length === 0) {
				isExcludedPath[i] = false;
			} else {
				isExcludedPath[i] = contentData[i].excludes.some( function (exclude) {
					return new RegExp(escapeForRegExp(exclude), 'i').test(loco);
				}) ;
			}
			if (!isExpired[i] && isValidSite[i] && isValidPath[i] && !isExcludedPath[i]) {
				index = i;
				break;
			}
		}
		return index;
	}

	function fetchBannerData(index) {
		var contentDataLength,
			isExpired = [],
			isTNsite,
			isExcludedPath = [],
			isValidPath = [],
			isValidSite = [],
			lang = sessionStorage.getItem(settings.langKey);

		// contentData will have been populated with session storage data by prepJSON() from a previous run
		if(contentData && contentData.length) {
			if (lang == pgVars.lang) {
				// determine index of valid entry
				index = getValidEntryIndex(contentData);
				// if no entry is valid, populate HBSINJECT with dummy data so prepJSON() doesn't get called
				if (typeof index == 'undefined') {
					contentData = placeholderContentData
					index = 0;
				}
				else if (index && contentData[index] && contentData[index].bkgnd) {
					setBannerColor(contentData[index].color);
					setButtonStyle(contentData[index].color);
				}
			} else {
				contentData = null;
			}
		} else if (lang) {
			// if lang exists, but there's no contentData, it means the feed is empty for the current language

			// if stored lang doesn't match current lang, a country switch was made
			if (lang == pgVars.lang) {
				// populate HBSINJECT with dummy data so prepJSON() doesn't get called
				contentData = placeholderContentData;
				index = 0;
			} else {
				contentData = null;
			}

		} else {
			contentData = null; // setting contentData to null makes HBSINJECT to request the feed
		}

		window.HBSINJECT.initialize({
			feedsrc: settings.endpoint,
			data: contentData && contentData[index],
			targetObj: $cb27,
			templateName: settings.templateName,
			beforeInjectionCallback: !contentData ? prepJSON : false,
			afterInjectionCallback: checkData
		});
	}

	function prepJSON(json) {
		var index;
		if('object' !== typeof json || json instanceof Error) {
			/* eslint no-console:0 */
			return console.warn('CB27: Error with ' + settings.endpoint + ' (' + json + ')');
		}

		if('undefined' === typeof json.languages) {
			return removeSessionStorage(settings.storageKey);
		}
		var options = getEntryByKey(json.languages, 'all');
		// check if color is one of our defined themes, otherwise use default
		var	color = settings.colorDefault;

		if((Object.keys(themes).indexOf(options.color) > -1 && options.color) || (options.color && options.color.indexOf("0bg") > -1)){
			color = options.color;
		}

		var	fallbackcolor = color;

		//var data = getUnexpiredEntries(getEntryByKey(json.languages, pgVars.lang));
		var data = getEntryByKey(json.languages, pgVars.lang);
		//var entry = data && getValidEntries(data)[0] || null;
		var	entries = data;
		// used for html entity conversion
		var	$t = $('<textarea />'),
			theme;

			// set flag that we've checked the file
		fetched = true;
		// save current language
		sessionStorage.setItem(settings.langKey,pgVars.lang);

		if(entries) {
			for (var i = 0; i < entries.length; i++) {
				delay[i] = options.delay > -1 ? parseInt(options.delay, 10) : delay[i];
				scrollThreshold[i] = options.onscroll > -1 ? parseInt(options.onscroll, 10) : scrollThreshold[i];

				// check for override of global color theme
				if((Object.keys(themes).indexOf(entries[i].color) > -1 && entries[i].color) || (entries[i].color && entries[i].color.indexOf("0bg") > -1)){
					color = entries[i].color;
				}else{
					entries[i].color = fallbackcolor;
				}

				// allow for entry level override of unhide settings
				entries[i].delay = entries[i].delay && (delay[i] = entries[i].delay) && delay[i] || delay[i];
				entries[i].onscroll = entries[i].onscroll && (scrollThreshold[i] = entries[i].onscroll) && scrollThreshold[i] || scrollThreshold[i];

				entries[i].description = $t.html(entries[i].description).text();
				entries[i].sites = Array.isArray(entries[i].sites) ? entries[i].sites : entries[i].sites.split(',');
				setSessionStorage(settings.storageKey, data);
			}

			index = getValidEntryIndex(entries);
			return entries[index];
		} else {
			//removeSessionStorage(settings.storageKey);
		}

		return false;
	}

	function getValidEntries(data) {
		if(!data) { return null; }

		data = Array.isArray(data) ? data : [data];

		return data.filter(
			function(entry) {

				// valid until proven otherwise
				var isValid = true;

				// if paths is defined, must check url path for match
				if(entry.paths) {
					// true if array item is a regexp match to url
					isValid = entry.paths.some(function(path) {
						return new RegExp(escapeForRegExp(path), 'i').test(loco);
					});
				}

				// if excludes is defined, must check url path for non-match,
				// 	or that excludes is empty
				if(entry.excludes) {
					// true if NO array item is a regexp match to url
					isValid = !entry.excludes.some(function(exclude) {
						return new RegExp(escapeForRegExp(exclude), 'i').test(loco);
					}) || entry.excludes.length === 0;
				}
				return isValid;

			}) || [];
	}

	function getUnexpiredEntries(data) {
		if(!data) { return null; }

		data = Array.isArray(data) ? data : [data];

		return (
			data.filter(removeExpiredEntries)
				.sort(sortByExpires) || []
		);
	}

	function checkData() {
		var contentDataLength = contentData.length,
			isExpired = [],
			isTNsite,
			isExcludedPath = [],
			isValidPath = [],
			isValidSite = [];

		for (var i = 0; i < contentDataLength; i++) {
			isExpired[i] = datetime > contentData[i].expires;
			isValidSite[i] = new RegExp('\\b'+pgVars.siteid+'\\b', 'i').test(contentData[i].sites.join(' '));
			isTNsite = /technetwork/.test(loco);

			if(!pgVars.siteid && isTNsite) {
				isValidSite[i] = new RegExp('\\btechnetwork\\b', 'i').test(contentData[i].sites.join(' '));
			}

/*
			if(isExpired[i] || !isValidSite[i]) {
				removeSessionStorage(settings.storageKey);
				// check for new data, but only if we haven't already
				//  fetched the JSON file
				return !fetched && fetchBannerData(i);
			}
*/

			if(typeof contentData[i].paths == 'undefined') {
				isValidPath[i] = true;
			} else {
				isValidPath[i] = contentData[i].paths.some( function (path) {
					return new RegExp(escapeForRegExp(path), 'i').test(loco);
				});
			}
			if(typeof contentData[i].excludes == 'undefined' || contentData[i].excludes.length === 0) {
				isExcludedPath[i] = false;
			} else {
				isExcludedPath[i] = contentData[i].excludes.some( function (exclude) {
					return new RegExp(escapeForRegExp(exclude), 'i').test(loco);
				}) ;
			}


			if(scrollThreshold[i] && scrollThreshold[i] > 0) {
				if (isValidPath[i] && !isExpired[i] && isValidSite[i] && !isExcludedPath[i]) {
					setBannerColor(contentData[i].color);
					setButtonStyle(contentData[i].color);
					return $(window).on('scroll.cb27', {"cb27index":i}, onWindowScrolled);
				}
			} else {
				if (isValidPath[i] && !isExpired[i] && isValidSite[i] && !isExcludedPath[i]) {
					setBannerColor(contentData[i].color);
					setButtonStyle(contentData[i].color);
					return showBanner(i);
				}
			}

		}
	}

	/* globals Waypoint */
	function showBanner(index) {
		// there can be only one... and this one trumps the static cb27v6
		if(!$('.cb27disable')[0]){
			$('.cb27sticky').not($cb27).removeClass('cb27sticky');

			settings.$target.before($cb27);

			$cb27.find('.obttns > div:last > a').attr('data-lbl', contentData[index].datalbl);
			$cb27.find('.obttns > div:nth-last-child(2) > a').attr('data-lbl', contentData[index].datalbl2);
			$cb27[0].style.setProperty('--marginBtm', -$cb27.outerHeight() + 'px');

			$cb27.on('click.cb27', '.icn-close', {"cb27index":index}, dismissBanner);

			setTimeout(function() {

				$cb27.addClass(function() {
					return (contentData[index] && contentData[index].unstuck) || !allowSticky() ?
						[CLS_SHOW, CLS_UNSTUCK].join(' ') : [CLS_SHOW, CLS_STUCK].join(' ');
				});

				settings.$target.waypoint(function(dir) {
					$cb27
						.toggleClass(CLS_UNSTUCK, dir === 'down' || !allowSticky() || contentData[index].unstuck)
						.toggleClass(CLS_STUCK, dir === 'up' && allowSticky() && !contentData[index].unstuck);
				},
				{
					offset: function() {
						return Waypoint.viewportHeight() - $cb27.outerHeight();
					}
				});

			}, delay[index]);
		}
	}

	function onWindowScrolled(e) {
		var scroll = window.scrollY ||
									window.pageYOffset || // IE 9+
									document.documentElement.scrollTop; // IE < 9

		if(scroll > scrollThreshold[e.data.cb27index]) {
			delay[e.data.cb27index] = 0;
			$(window).off('scroll.cb27');
			showBanner(e.data.cb27index);
		}
		return false;
	}

	function allowSticky() {
		return (Waypoint.viewportHeight() >= minWinH && window.innerWidth >= minWinW  || $cb27.find('.cb27mobilesticky')[0] ) && document.location.href.indexOf('screenshot') < 0;
	}

	function getEntryByKey(objArr, key) {
		var arr =
			objArr.filter(function(obj) {
				return Object.keys(obj)[0] === key;
			});
		return arr.length && arr[0][key] ? arr[0][key] : false;
	}

	function getPageVars() {
		return {
			siteid: $('meta[name="siteid"]').attr('content') || false,
			countryid: $('meta[name="countryid"]').attr('content') || false,
			country: $('meta[name="country"]').attr('content') || false,
			lang: $('meta[name="Language"]').attr('content') || false
		};
	}

	function setBannerColor(color) {
		if(color.indexOf("0bg") == -1){
			color = themes[color].bkgnd;
		}else if (color.indexOf("0bg") > -1 && $("body.f11")[0]) {
			color = ((color.split('bg')[0].split('-')[2] * 1) > 99) ? color+' txtlight' : color;
		}
		$cb27.addClass(color);
	}

	function setButtonStyle(style) {

		if(style.indexOf("0bg") > -1){
			if ($("body.f11")[0]) {
				style = ((style.split('bg')[0].split('-')[2] * 1) > 99) ? 'obttn1' : 'obttn2';
			}else{
				style = '';
			}
		}else{
			style = 'obttn2';
		}

		// if (style == '' || style == 'obttn2') {
		// 	if (codebase == "ocom-v1-lib") {
		// 		style = 'obttn2';
		// 	} else if (codebase == "redwood-lib") {
		// 		style = '';
		// 	} else {
		// 		style = 'obttn2';
		// 	}
		// }

		if (style) {$cb27.find(".obttns > div").addClass(style)}

	}

	/* globals JSON */
	function getSessionStorage(key) {
		return JSON.parse(sessionStorage.getItem(key));
	}

	function setSessionStorage(key, data) {
		contentData = data;
		return sessionStorage.setItem(key, JSON.stringify(data));
	}

	function removeSessionStorage(key) {
		contentData = null;
		sessionStorage.setItem(key, false);
	}

	function dismissBanner(e) {
		//var sess = getUnexpiredEntries(getSessionStorage(settings.storageKey)),
		//		entries = getValidEntries(sess);
		var sess = getSessionStorage(settings.storageKey);
		// because array.filter creates a new array we need to find
		// 	the index ref of the current content within session data
		sess[e.data.cb27index].unstuck = true;
		setSessionStorage(settings.storageKey, sess);
		$cb27.removeClass(CLS_SHOW);
		$cb27.off('click.cb27');
		e.preventDefault();
		setTimeout($cb27.addClass.bind($cb27, CLS_UNSTUCK), 800);
	}

	function sortByExpires(a, b) {
		// sort by expiring first
		return new Date(a.expires).getTime() - new Date(b.expires).getTime();
	}

	function removeExpiredEntries(entry) {
		return entry.expires > datetime;
	}

	function escapeForRegExp(str) {
		return str.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, '\\$&');
	}

	/**
	 * allows for page level disabling with
	 * 	<meta name="cb27banner" content="disable" />
	 *  also can disable by domain
	 */
	function checkBlocked() {
		if(document.location.href.indexOf("oraclefoundation.org") > -1 || document.location.href.indexOf("academy.oracle.com") > -1){
			return false;
		}else{
			var $meta = $('meta[name*="cb27banner"]');
			return !($meta.length && $meta.attr('content') === 'disable');
		}
	}

	return notBlocked && init();

}, true);


/*! CB27v8 */

OCOM.register(function cb27v8($) {
	'use strict';

	/* globals Waypoint, JSON */

	var CLS_CB27 = 'cb27v8',
			CLS_INIT = 'cb27init',
			CLS_SHOW = 'cb27show',
			CLS_STUCK = 'cb27stuck',
			CLS_UNSTUCK = 'cb27unstuck',
			EV_CLICK = 'click.cb27v8',
			EV_SCROLL = 'scroll.cb27v8',
			minWinW = 460,
			minWinH = 600,
			$cb27 = $('.' + CLS_CB27),
			scrollThreshold = $cb27.attr('data-onscroll') || 200,
			storageKey = CLS_CB27 + $cb27.attr('id'),
			state = getSessionStorage(storageKey),
			isSticky = !state || state !== CLS_UNSTUCK,
			isCompSample = /compsample/.test(window.location.href);

	function showBanner() {

		$cb27[0].style.setProperty('--marginBtm', -$cb27.outerHeight() + 'px');
		$cb27.on(EV_CLICK, '.icn-close', dismissBanner);

		$cb27.addClass(function() {
			return !isSticky || !allowSticky() ?
				[CLS_SHOW, CLS_UNSTUCK].join(' ') : [CLS_SHOW, CLS_STUCK].join(' ');
		});

		return isSticky && allowSticky() && trackSticky();

	}

	function dismissBanner() {

		$cb27
			.removeClass(CLS_SHOW)
			.off(EV_CLICK);

		setSessionStorage(storageKey, CLS_UNSTUCK);

		return setTimeout($cb27.addClass.bind($cb27, CLS_UNSTUCK), 800);
	}

	function onWindowScrolled(e) {

		var scroll = window.scrollY ||
				window.pageYOffset || // IE 9+
				document.documentElement.scrollTop; // IE < 9

		return (scroll > scrollThreshold) &&
			$(window).off(EV_SCROLL) &&
			$cb27.addClass(CLS_INIT) &&
			showBanner();
	}

	function handleCompSample() {
		return isCompSample &&
			$cb27.addClass(CLS_INIT) &&
			showBanner();
	}

	function allowSticky() {
		return isCompSample || ($cb27[0].hasAttribute('id') && Waypoint.viewportHeight() >= minWinH && window.innerWidth >= minWinW) && !/screenshot/.test(window.location.href);
	}

	function trackSticky() {
		return (
			$cb27.next().waypoint(function(dir) {
				$cb27
					.toggleClass(CLS_UNSTUCK, dir === 'down' || !allowSticky() || !isSticky)
					.toggleClass(CLS_STUCK, dir === 'up' && allowSticky() && isSticky);
			}, {
				offset: function() {
					return Waypoint.viewportHeight() - $cb27.outerHeight();
				}
			})
		);
	}

	function getSessionStorage(key) {
		return sessionStorage.getItem(key);
	}

	function setSessionStorage(key, data) {
		return sessionStorage.setItem(key, data);
	}

	// there can be only one...
	return $cb27.length === 1 &&
		$(window).on(EV_SCROLL, onWindowScrolled) &&
		handleCompSample();

});


/*! CT12 - REDWOOD */
const ct12Wrapper = () => {
window.ct12Interval = 0;
//var ct12 = (function () {

// use this class if rc110 exist on the page, else add "rw-sticky" class ONLY if u30 exist on the page (ct12 doesn't stick on pages with u28)
// 	$(".ct12").addClass("ct12nostick");

	var component, 
		_ct12width = 0,
		_context = {},
		_swap = {},
		_ct12sticky,
		/**
		 * Activates the 'more' menu and returns an array of tabs that should be 
		 * moved from the navigation menu to the 'more' menu
		 */
		_activateMenu = function (items, w2W) {
			var totalWRecheck = 0,
				pops = [],
				w3W;
			//make 'more' menu tab visible
			$(_swap).addClass("ct12menu");
			//get width of 'more' menu tab 
			w3W = $(_context).find(".ct12w3 > div").outerWidth();
			//determine if w3's visibility requires additional tabs popped
			$(items).each(function (j, addl) {
				if (!$(addl).hasClass("ct12w3")) {
					totalWRecheck = totalWRecheck + +$(addl).outerWidth();
					if ($(addl).hasClass("ct12w3")) {
						return false;
					}
					if (totalWRecheck + w3W > w2W) {
						pops.push(addl);
					}
				}
			});
			return pops; //return additional list of additional popped items
		},
		/**
		 * Wraps last word with span that has the right arrow
		 */
		_addArrows = function () {
			$(_context).find(".ct12w6").each(function (i, w6) {
				var a = $(w6).prev("a,span"),
					str = $(a).text();
					str = '<span class="ct12w5 icn-cv-down-after">' + str + '</span>';
					$(a).html(str);
				});
		},
		/**
		 * Inject markup for displaying tab states: current and rollover
		 */
		_addBars = function () {
			$(_context).find(".ct12w2 > ul > li").each(function (i, li) {
				$(li).append('<span class="ct12bar"></span>');
			});
		},
		/**
		 * Add click event handler for tabs. It should only be active for tablet/mobile.
		 */
		_addMenuClickEvent = function () {
			// nav links
			$(_context).find(".ct12w2 > ul > li.ct12w3").on("click", function (e) {
				e.preventDefault;
			});
			$(_context).find(".ct12w2 > ul > li > div > span").not(".ct12bar").on("click", function (e) {
				var li1 = $(e.currentTarget).closest("li"),
					menu = $(e.currentTarget).closest("ul").find(".ct12w3"),
					classes = $(li1).attr("class"),
					target = _extractTarget(classes);
				menu.removeAttr("role")
				// disable click menu when hover is 'on'
				if ($(e.currentTarget).closest(".ct12hoverOn")[0] && !$(e.currentTarget).hasClass("ct12w6")) {
					return false;
				}
				// ct12navActive indicates that a menu pulldown is open
				if ($(li1).hasClass("ct12navActive")) {
					if (e.type !== 'mouseenter') {
						$(li1).removeClass("ct12navActive");
					}
				} else {
					$(_context).find(".ct12navActive").removeClass("ct12navActive");
					$(li1).addClass("ct12navActive");
				}
				if ($(menu).hasClass("ct12menuOpen")) { // clicked to close or when another menu is open
					// Note: the more menu is used for all tabs at tablet and mobile breakpoints

					//console.log(1)
					// The next conditional is true if the tab clicked is the 'more' menu tab
					if ($(e.currentTarget).closest(".ct12w3")[0]) {
						//console.log(3)

						// The next conditional is true if the 'more' menu has no links and the menu link was clicked to close
						if (!$(menu).find(".ct12pushed")[0]) {
							//if (!$(menu).hasClass("ct12navActive")) {
							//	$(menu).removeClass("ct12menuOpen");
							//}
							if ($(menu).closest('.ct12cta-none')[0]) {
								$(menu).find(".ct12more > ul > li").hide();
								//console.log(20)
							} else {
								// don't hide last item, because it'll be the CTA
								$(menu).find(".ct12more > ul > li").not(":last").hide();

								if ($(_context).find('.ct12w4:visible')[0]) {
									//$(menu).find(".ct12cta .obttns").hide();
									$(_context).find(".ct12w1").addClass("ct12cta-hidden");

									//console.log(12)

								} else {
									//$(menu).find(".ct12cta .obttns").show();
									$(_context).find(".ct12w1").removeClass("ct12cta-hidden");

									//console.log(13)

								}
							}
							if (!$(li1).closest("ul").find(".ct12navActive")[0]) {
								$(menu).removeClass("ct12menuOpen");
							}
							// The next conditional is true if a tab other than the 'more' menu tab is being clicked to close
						} else if ($(menu).find(".ct12pushed").is(":visible")) {

							if (e.type !== 'mouseenter') {
								$(menu).removeClass("ct12menuOpen");
							}
						} else {
							// 'more' menu link clicked while the 'more' menu is open from a different tab...
							if ($(menu).closest('.ct12cta-none')[0]) {
								$(menu).find(".ct12more > ul > li").hide();
							} else {
								// don't hide last item, because it'll be the CTA
								$(menu).find(".ct12more > ul > li").not(":last").hide();
								if ($(_context).find('.ct12w4:visible')[0]) {
									//$(menu).find(".ct12cta .obttns").hide();
									$(_context).find(".ct12w1").addClass("ct12cta-hidden");
									//console.log(10)

								} else {
									//$(menu).find(".ct12cta .obttns").show();
									$(_context).find(".ct12w1").removeClass("ct12cta-hidden");
									//console.log(11)

								}
							}
							$(menu).find(".ct12pushed").show();
						}
					} else {
						//console.log(4)

						if ($(menu).find("[data-ref='" + target + "']").is(":visible")) {
							//console.log(5)

							// the tab clicked corresponds to a set of visible links in the more menu
							if (e.type !== 'mouseenter') {
								$(menu).removeClass("ct12menuOpen");
							}
						} else {
							//console.log(6)

							if ($(menu).closest('.ct12cta-none')[0]) {
								$(menu).find(".ct12more > ul > li").hide();
							} else {
								//console.log(7)

								// don't hide last item, because it'll be the CTA
								$(menu).find(".ct12more > ul > li").not(":last").hide();
								if ($(_context).find('.ct12w4:visible')[0]) {
									// if menu is open at time of the click
									// and link other than more menu was clicked
									// and the target was not visible at the time of the click
									// and if the CTA exists
									// and the CTA is visible
									//$(menu).find(".ct12cta .obttns").hide();
									$(_context).find(".ct12w1").addClass("ct12cta-hidden");
									//console.log(8)
								} else if (_isMobile()) {
									// if menu is open at time of the click
									// and link other than more menu was clicked
									// and the target was not visible at the time of the click
									// and if the CTA exists
									// and the CTA is not visible
									// and the breakpoint is mobile where the CTA is always hidden as of 11/18
									//$(menu).find(".ct12cta .obttns").hide();
									$(_context).find(".ct12w1").addClass("ct12cta-hidden");
									//console.log(14)
								} else {
									// if menu is open at time of the click
									// and link other than more menu was clicked
									// and the target was not visible at the time of the click
									// and if the CTA exists
									// and the CTA is not visible
									//$(menu).find(".ct12cta .obttns").show();
									$(_context).find(".ct12w1").removeClass("ct12cta-hidden");
									//console.log(9)
								}
							}
							$(menu).find("[data-ref='" + target + "']").show().attr("tabindex", "0").attr("role", "none");
						}
						if ($(e.currentTarget).closest('.ct12cta-on')[0]) {
							//$(menu).find('.ct12cta .obttns').hide();
							$(_context).find(".ct12w1").addClass("ct12cta-hidden");
						}
					}
				} else { // clicked to open

					//console.log(2)

					// hide previously displayed menu items
					if ($(menu).closest('.ct12cta-none')[0]) {
						// if there is no CTA...
						$(menu).find(".ct12more > ul > li").hide();
					} else {
						// don't hide last item, because it'll be the CTA
						$(menu).find(".ct12more > ul > li").not(":last").hide();
						//$(menu).find(".ct12more > ul > li .obttns").hide();
						$(_context).find(".ct12w1").addClass("ct12cta-hidden");

					}

					// show current menu items
					if ($(e.currentTarget).closest(".ct12w3")[0]) {
						// if the more menu was clicked...
						$(menu).find(".ct12pushed").show().attr("role", "presentation");
						$(menu).find(".c12parentlabel").show().attr("role", "presentation").attr("tabindex", "0");
						if ($(_context).find('.ct12w4:visible')[0]) {
							//$(menu).find(".ct12cta .obttns").hide();
							if (!$(e.currentTarget).closest('.ct12cta-none')[0]) {
								$(_context).find(".ct12w1").addClass("ct12cta-hidden");
							}
						} else {
							//$(menu).find(".ct12cta .obttns").show();
							$(_context).find(".ct12w1").removeClass("ct12cta-hidden");
						}
					} else {
						$(menu).find("[data-ref='" + target + "']").show();
						//$(menu).find(".ct12cta .obttns").hide();
						if (!$(e.currentTarget).closest('.ct12cta-none')[0]) {
							$(_context).find(".ct12w1").addClass("ct12cta-hidden");
						}
					}
					$(menu).addClass("ct12menuOpen");
				}
				$(_context).find(".ct12screen").on("mouseenter", function () {
					$(menu).removeClass("ct12menuOpen");
				});
			});
		},

		/**
		 * Inject markup for triangles on mobile/tablet click menu
		 */
		_addTriangles = function () {
			$(_context).find(".ct12w2 > ul > li").append('<span class="ct12tri"></span>');
		},
		/**
		 * Adjusts which tabs are in the main navigation or 'more' menu based on the
		 * width of the browser window.
		 */
		_adjustItemsMob = function () {
			var ul = $(_context).find("ul").first(),
				ulW = $(ul).outerWidth(),
				w1W = $(_context).find(".ct12w1").width(), //width of component content
				w2W = $(_context).find(".ct12w2").outerWidth(), //tabs container width
				w3W = $(_context).find(".ct12w3 > div").outerWidth(), //more menu tab width
				btn = $(_context).find(".ct12w4"), //width of CTA container
				totalW = 0,
				totalWRecheck = 0,
				items = [],
				itemCount,
				pops = [], //list of tabs to be popped
				unpops = [], //list of tabs that should not be popped
				breakpoint = _getBreakpoint();
			//reorder tabs -- current tab should be the first and thus be the last tab to fall off the menu
			$(ul).children().each(function (i, item) {
				if ($(item).hasClass("ct12current")) {
					items.unshift(item);
				} else {
					items.push(item);
				}
			});

			itemCount = $(items).length;
			// add class that indicates whether cta is visible or not
			if ($(_context).find('.ct12w4:not(:visible)')[0] && $(_context).find('.ct12cta-on')[0]) {
				$(_context).find('.ct12w1').removeClass('ct12cta-on');
			} else if ($(_context).find('.ct12w4:visible')[0] && !$(_context).find('.ct12cta-on')[0]) {
				$(_context).find('.ct12w1').addClass('ct12cta-on');
			}
			$(items).each(function (i, li) {

				if ($(li).hasClass("ct12w3")) {
					$(this).attr('role', 'menu').attr('tabindex', '-1');
					return false;
				}
				$(li).removeClass("ct12popped").attr("aria-hidden", "false");
				_removeItemFromSwap(li);
				totalW = totalW + +$(li).outerWidth();

				/*if (breakpoint == "mobile" || breakpoint == "tablet-small") {
					if ($(li).hasClass("ct12t1") || $(li).hasClass("ct12current")) {
						//display first tab and current tab
						unpops.push(li);
					} else {
						if (i == 1 && $(items[0]).hasClass("ct12current")) {
							//if 1st tab is selected, also display 2nd tab (as specified in the PSD)
							unpops.push(li);
						} else {
							pops.push(li);
						}
					}
					if (i == itemCount - 2) {
						//activate menu -- but if the text is still too long, hide tabs that would normally not be hidden
						var tmp = _activateMenu($(unpops), w2W);
						pops = pops.concat(tmp);
					}
				} else*/

				if ($(btn).is(":visible")) {
					// handle button
					// refresh test width
					w2W = $(_context).find(".ct12w2").outerWidth();
					if ($(_swap).hasClass("ct12menu")) {
						// items max is -1 because ct12w3 is skipped 
						if ((i + 1 == items.length - 1) && (totalW < w2W)) {
							$(_swap).removeClass("ct12menu");
						} else if (totalW + w3W > w2W) {
							pops.push(li);
						}
					} else {
						if (totalW > w2W) {
							pops = _activateMenu(items, w2W);
							return false;
						}
					}
				} else if ($(_context).find(".ct12menu")[0]) {
					//console.log('btn not vis, but menu found')

					// handle links with pulldown that's already activated

					//console.log((+totalW + +w3W ) + ' > ' + w2W + ' ?')

					if (totalW + w3W > w2W) {
						//console.log('yes');
						if (!$(li).hasClass("ct12popped")) {
							pops.push(li);
						}
					} else if (i == itemCount - 2 && (($(_context).find('.ct12cta-none')[0] && totalW <= w1W) || (totalW + (w1W * .25)) <= w1W)) {
						//console.log('no 1: next to last item AND ( (no cta exists AND total li width < ul width) OR (total li width + 25% of ul width <= ul width) )')
						//console.log($(_context).find('.ct12cta-none')[0] && totalW <= w1W);
						//console.log((totalW + (w1W * .25)) <= w1W );

						$(_context).find(".ct12inactive").removeClass("ct12inactive");
						$(_context).find(".ct12full").removeClass("ct12full");

						//console.log(breakpoint)
						//console.log('neither tablet-small nor mobile and ct12w4 exists?')
						//console.log(breakpoint !== 'tablet-small' && breakpoint !== 'mobile' && $(_context).find('.ct12w4')[0])
						//console.log('neither tablet-small nor mobile and .ct12w3 .ct12pushed exists?')
						//console.log(breakpoint !== 'tablet-small' && breakpoint !== 'mobile' && !$(_context).find('.ct12w3 .ct12pushed')[0])

						if ((breakpoint !== 'tablet-small' && breakpoint !== 'mobile' && $(_context).find('.ct12w4')[0]) || (breakpoint !== 'tablet-small' && breakpoint !== 'mobile' && !$(_context).find('.ct12w3 .ct12pushed')[0])) {
							$(_context).find(".ct12menu").removeClass("ct12menu");
						} else if (breakpoint == 'tablet-small' && !$(_context).find('.ct12w3 .ct12pushed')[0] && !$(_context).find('.ct12w4')[0]) {
							//console.log('breakpoint is tablet-small and there are no pushed items')
							$(_context).find(".ct12menu").removeClass("ct12menu");
						}
						return false;
					} else {
						//console.log('no 2')
						//console.log($(_context).find('.ct12cta-none')[0] && totalW <= w1W);
						//console.log((totalW + (w1W * .25)) <= w1W );
					}

				} else {
					//console.log('btn not vis, and menu not found');

					if ((totalW > w2W) || $(_context).find('.ct12w4')[0]) {
						pops = _activateMenu(items, w2W);
						return false;
					}
				}
			});

			if (pops.length > 0) {
				pops.reverse();
				for (var i = 0; i < pops.length; i++) {
					_pushItemToSwap(_popItemFromNav(pops[i]));
				}
				if (_isMobile()) {
					$(_context).find(".ct12w3").removeClass("ct12mobnopops");
				}
			} else {
				if (_isMobile()) {
					if ($(_context).find(".ct12w4 .obttns")[0]) {
						$(_context).find(".ct12w3").addClass("ct12mobnopops");
					}
				} else {
					$(_context).find(".ct12w3").removeClass("ct12mobnopops");
				}
				//deactivate menu
				//if ($(btn).is(":visible")) {
				//	$(_swap).removeClass("ct12menu");
				//}
			}
			if (!$(_context).find(".ct12loaded")[0]) {
				$(_context).find(".ct12w1").addClass("ct12loaded");
			}
		},
		_adjustPulldownPosition = function () {
			
			var ul = $(_context).find("ul").first(),
				w1padding = parseInt($(_context).find(".ct12w1").css('padding-left')),
				w1W = $(_context).find(".ct12w1").width(), //tabs container width
				w3W = $(_context).find(".ct12w3 > div").outerWidth(), //more menu tab width
				menu,
				menuW = $(_context).find('.ct12w6').width(), //width of dropdown menu
				offset = 0,
				breakpoint = _getBreakpoint(),
				opClass = '';

			if (breakpoint == 'mobile' || breakpoint == 'tablet-small') {
				$(_context).find('.ct12more > ul').removeAttr('style');
				$(_context).find('.ct12w5').removeAttr('tabindex', '0').removeAttr('role', 'menuitem');
			} else {
				$(ul).find('li').not('.ct12popped').each(function (i, li) {
					opClass = $(li).hasClass('ct12w3') ? 'ct12more' : 'ct12w6';

					menu = $(li).find('.' + opClass)[0];

					if (menu) {
						offset = $(menu).offset().left + menuW - w1W - w1padding;
						if (opClass == 'ct12more') {
							offset = offset + 99999;
						}
						//console.log($(menu).offset().left + ' + ' + menuW + ' - ' + w1W + ' - ' + w1padding + ' = ' + offset)

						if (offset > 0) {
							// adjust position of the child UL rather than .ct12w6 div because the div has pseudoelements
							// adjust position to the right in case it's a RTL language
							
							var offsetPosNeg = -1;
							if ( $('body').hasClass('rtl')) { offsetPosNeg = 0;}
							$(li).find('.' + opClass + ' > ul').css({
								left: offset * offsetPosNeg,
								position: 'relative'
							});
						} else {
							$(li).find('.' + opClass + ' > ul').removeAttr('style');
						}
					}
				});
			}

		},
		/**
		 * Change the CTA class if the component is used in the hero
		 */
		_changeBtnClass = function () {
			if ($(_context).siblings(".herotabs")[0]) {
				$(_context).find(".obttn4").removeClass("obttn4").addClass("obttn6");
				return true;
			}
			return false;
		},
		/**
		 * closes menus that are open
		 */
		_clearMenu = function () {
			var menu = $(_context).find(".ct12more");
			if (!$(_context).find(".ct12hoverOn")[0]) {
				$(menu).find("> ul > li").not(":last").hide();
			}
			$(menu).find(".ct12expand").removeClass("ct12expand");
			$(_context).find(".ct12menuOpen").removeClass("ct12menuOpen");
			$(_context).find(".ct12navActive").removeClass("ct12navActive");
		},
		/**
		 * Injects a copy of the CTA in the nav bar into the 'more' menu 
		 */
		_cloneBtn = function () {
			var originalBtn = $(_context).find(".obttns"),
				newBtn = $(originalBtn).clone(),
				newItem = $('<li class="ct12cta"></li>').append(newBtn);
			if ($(originalBtn)[0]) {
				$(newItem).find(".obttn4").removeClass("obttn4");
				$(newItem).find(".obttn6").removeClass("obttn6");
				$(_swap).find("ul").first().append(newItem);
			} else {
				$(_context).find('.ct12w1').addClass('ct12cta-none');
			}

		},
		/**
		 * Injects a copy of the pulldown nav items in the nav bar into the 'more' menu 
		 */
		_cloneNavItems = function () {
			var classes, newc, ul2;
			$(".ct12w2 > ul > li > div > .ct12w6 > ul").each(function (i, ul) {
				classes = $(ul).closest("li").attr("class");
				newc = _extractTarget(classes);
				if (newc) {
					ul2 = $(ul).clone();
					$(ul2).children("li").attr("data-ref", newc);
					$(_swap).find(".ct12more > ul").prepend($(ul2).html());
				}
			});
		},
		/**
		 * Returns the identifying class name ("ct12t1", "ct12t2", etc.).
		 * See: _numberTabs
		 */
		_extractTarget = function (classes) {
			var classAr = classes.split(' ');
			for (var j = classAr.length - 1; j > -1; j--) {
				if (classAr[j].match(/ct12t\d/)) {
					return classAr[j];
				}
			}
		},
		/**
		 * Returns string representation of breakpoint name ("desktop","mobile", etc.)
		 */
		_getBreakpoint = function () {
			return window.getComputedStyle($(_context)[0], ':before').getPropertyValue('content').replace(/\"/g, '');
		},
		/**
		 * Creates the 'more' menu 
		 */
		_injectMenu = function (label) {
			//$(_context).find(".ct12w2 > ul").append('<li class="ct12w3" role="tabpanel" tabindex="-1"><div tabindex="-1"><span><span class="ct12w5 icn-cv-right-after" role="menuitem">' + label + '</span></span><div class="ct12more" tabindex="0" role="menu" id="menu1" aria-labelledby="menubutton1" aria-activedescendant="mi1"><ul></ul></div></div></li>');
			var bgcolor = ($('body.f20')[0]) ? ' class="rw-neutral-00bg"' : '';
			$(_context).find(".ct12w2 > ul").append('<li class="ct12w3"><div><span><span class="ct12w5 icn-cv-down-after" role="menuitem">' + label + '</span></span><div class="ct12more"><ul'+bgcolor+'></ul></div></div></li>');
		},
		_isMobile = function () {
			var breakpoint = window.getComputedStyle($(_context)[0], ':before').getPropertyValue('content').replace(/\"/g, '');
			if (breakpoint == "mobile") {
				return true;
			}
			return false;
		},
		/**
		 * Deactivate menu stickiness and hover states for mobile
		 */
		_mobileCheck = function () {
			var breakpoint = _getBreakpoint();
			if (breakpoint == "mobile") {
				$(_context).find(".ct12hoverOn").removeClass("ct12hoverOn");
				if ($(".ct12-sticky-wrapper")[0]) {
					//_ct12sticky.destroy();
					$(".ct12").unwrap(".ct12-sticky-wrapper");
				}
				_resizeBar();
			} else {
				$(_context).find(".ct12w2").not(".ct12hoverOn").addClass("ct12hoverOn");
				$(_context).find(".ct12more > ul > li").removeAttr("style");
				if (!$(".ct12-sticky-wrapper")[0] && !$("body.f20")[0]) {
					$(".ct12").wrap('<div class="ct12-sticky-wrapper"></div>');
				}
				$(_context).find(".ct12mobnopops").removeClass("ct12mobnopops");
				_resizeBar(true);
			}
		},
		/**
		 * Assigns an identifying class name to each tab.
		 * Format: ct12tX
		 */
		_numberTabs = function () {
			var ul = $(_context).find("ul").first();
			$(ul).children().each(function (i, li) {
				$(li).addClass("ct12t" + (+i + 1));
			});
		},
		/**
		 * Hides target tab in the nav
		 */
		_popItemFromNav = function (item) {
			$(item).addClass("ct12popped").attr("aria-hidden", "true");
			$(item).find("> div > span > span").removeAttr("aria-controls").removeAttr("aria-expanded");
			//$(item).attr("role", "none");
			return item;
		},
		/**
		 * Hides last tab in the nav
		 */
		_popLastItemFromNav = function () {
			var ul = $(_context).find("ul").first(),
				lastLi = $(ul).children().last();
			return _popItemFromNav(lastLi);
		},
		/**
		 * Injects item into 'more' menu
		 */
		_pushItemToSwap = function (item) {
			var newItem = $(item).clone();
			newItem.addClass("ct12pushed").removeClass("ct12popped").attr('role', 'none');
			newItem.find(".afterwhite").removeClass("afterwhite");
			if ($(newItem).find(".ct12w6")[0]) {
				$(newItem).find("> div > span > span").addClass("ct12parentlabel").attr('role', 'none').attr('tabindex', '0');
			}
			$(_swap).find("ul").first().prepend(newItem);
		},
		/**
		 * Position top triangle of 'more' menu
		 */
		_reposArrow = function () {
			var left = $(_context).find(".ct12w3").offset().left,
				itemW = $(_context).find(".ct12w3").width() / 2,
				arrow = $(_context).find(".ct12w3 > span").not(".ct12bar");
			$(arrow).css({
				left: (left + itemW) + 'px'
			});
		},
		/**
		 * Deletes items from the 'more' menu
		 */
		_removeItemFromSwap = function (item) {
			var c = $(item).attr("class"),
				classAr = [];
			if (c) {
				classAr = c.split(' ');
				for (var i = classAr.length - 1; i > -1; i--) {
					if (classAr[i].match(/ct12t\d/)) {
						$(_swap).find('.ct12more > ul > .' + classAr[i]).remove();
						break;
					}
				}
			}
		},
		/**
		 * resize last ct12bar at mobile/tablet because its container is fixed position
		 */
		_resizeBar = function (clear) {
			var width,
				left;
			if ($(".ct12w3")[0] && $(".ct12w3 .ct12bar")[0]) {
				if (clear) {
					$(".ct12w3 .ct12bar").removeAttr("style");
				} else {
					$(".ct12w3 .ct12bar").css({
						width:$(".ct12w3").width(),
						left:$(".ct12w3").offset().left
					});
				}
				
			}		
		},
		/**
		 * Enables sticky menu
		 */
		_stickify = function () {
			_ct12sticky = new Waypoint.Sticky({
				element: $(_context)[0],
				wrapper: '<div class="ct12-sticky-wrapper" />',
				stuckClass: 'ct12stuck',
				handler: function (dir) {
					if (dir === "down") {
						if (($('.herotabs')[0]) || ($('.herotoptabs')[0])) {
							$(_context).closest(".ct12-sticky-wrapper").addClass('ct12notransform');
						}
					} else {
						$(_context).closest(".ct12-sticky-wrapper").removeClass('ct12notransform');
						_ct12sticky.waypoint.disable();
						_ct12sticky.waypoint.enable();
					}
				}
			});
		};

	/**
	 * Adds accessibility features and tab control
	 */
	_addAlly = function () {
		
		$('.ct12w4').attr("role", "none");
		$('.ct12current').find('.ct12w5').attr("aria-current", "true");
		// $('.ct12w5').attr("tabindex", "0").attr('role', 'menuitem');
	
		$('.ct12w2 ul').first().removeAttr("role", "menubar").children().each(function () {
			// $(this).find('div').first().attr('tabindex','-1').attr('role','none');
	
			//check if menu has an inner menu or if it's just a link
			// if ($(this).has('.ct12w6').length) {
			// 	//$(this).find('span > span').attr('tabindex', '0').attr('aria-haspopup', 'true').attr('aria-controls', 'menu1');
			// 	var $innerList = $(this).find('ul');
			// 	$innerList.attr("role", "menu").each(function () {
			// 		//$(this).find('li').attr('tabindex','-1');
			// 		//$(this).attr('id','menu1');
			// 		$(this).find('a').attr('tabindex', '0').attr("role", "menuitem");
			// 	});
			// } else {
			// 	//$(this).attr("role", "none").attr('tabindex','-1');
			// 	//$(this).find('div').attr('tabindex','-1').attr("role", "none");
			// 	$(this).find('a').attr('tabindex', '0').attr("role", "menuitem");
			// }
		});

		var focusableElementsString = '.ct12w2 > ul > li:not(.ct12popped):not(.ct12navActive) > div > a, .ct12w2 > ul > li:not(.ct12popped):not(.ct12navActive) > div > span:not(.ct12w6) > span, .ct12w2 > ul > li:not(.ct12popped):not(.ct12navActive) > div > .ct12w6 > ul > li,  .ct12w2 > ul > li.ct12menu > div > .ct12more ul > .ct12pushed ul li';
		var allTabs = document.querySelectorAll(focusableElementsString);
		focusableElements = Array.prototype.slice.call(allTabs);
		//console.log('alltabs',allTabs);
		var firstTabStop = focusableElements[0];
		var lastTabStop = focusableElements[focusableElements.length - 1];
		var firstLinkStop, lastLinkStop, currMenuTarget;
		var spanCounter = 0;

		//Set event listener to ct12more menu 
		const ct12wrapper = document.querySelector(".ct12more");
		ct12wrapper.addEventListener('keydown', ct12Actions);
		function ct12Actions(e){
			//If escape key is pressed, close subnav and return focus to main nav
			if(e.keyCode === 27){
				$(".ct12menu").removeClass("ct12menuOpen");
				$(this).parents('li').find('span > span').focus();
				$(this).parents('li').removeClass("ct12navActive");
			}
		}

		focusableElements.forEach(function (element) {

			if ($(element).is("a")) {
				$(element).addClass('aria-a');
				element.addEventListener('keyup', trapTabKeyA);
				element.addEventListener('keydown', trapTabKeyC);

			} else if ($(element).is("span")) {
				spanCounter ++;
				$(element).addClass('aria-b').attr('tabindex', '0').attr('aria-controls', `ct12-submenu-${spanCounter}`);
				$(element).parent('span').next('.ct12w6').attr('id', `ct12-submenu-${spanCounter}`);
				$(element).attr("aria-expanded", false).attr("role", "button");
				element.addEventListener('keyup', trapTabKeyB);
				element.addEventListener('click', trapTabKeyB);
				element.addEventListener('click', captureMouseClickNav);
				element.addEventListener('mouseenter', captureMouseEnterNav);
				element.addEventListener('mouseout', captureMouseEnterNav);
			} else if ($(element).is("li")) {
				element.addEventListener('keydown', trapTabKeyC);
			}
		});

		//Capture mouse enter/out on main nav to toggle aria-expanded property true/false
		function captureMouseEnterNav(e){
			if(e.type === 'mouseenter'){
				$(this).closest('div').find(".ct12w5").attr("aria-expanded", true).attr("role", "button");
			} else {
				$(this).closest('div').find(".ct12w5").attr("aria-expanded", false).attr("role", "button");
			}
		}

		function captureMouseClickNav(e) {
			e.stopPropagation();
			let linkIsMobile = $(this).parents().hasClass("ct12menu");
			let linkIsCurrent = $(this).parents().hasClass("ct12current");
			let navExpanded = e.target.getAttribute("aria-expanded");
			if(linkIsMobile === true || linkIsCurrent === true){
				// console.log("captureMouseClickNav")
				if(navExpanded === 'true'){
					$(this).find(".ct12w5").attr("aria-expanded", true);
					$(".ct12more").find("ul li").attr("aria-hidden", false)
				} else {
					$(this).find(".ct12w5").attr("aria-expanded", false);
					$(".ct12more").find("ul li").attr("aria-hidden", true)
				}
			}
		}

		//Menu link with no sub-menu
		function trapTabKeyA(e) {
			// console.log("TRAP TAB KEY A")
			if (e.keyCode === 9) {
				$('.ct12w2 ul li').removeClass('ct12navActive');
				$('.ct12w2 ul li div').removeClass('hovered');
				$('.ct12w2 ul li').removeClass('ct12menuOpen');
			}
		}

		//Menu menu link with sub-menu
		// $(".ct12w2").find('ul li span:not(".ct12w2 > ul > li > div > span")').attr("aria-expanded", false).attr("role", "button");
		function trapTabKeyB(e) {
			// console.log("trapTabKeyB", e.target)
			if (e.keyCode === 9) {

				if(!$(this).closest('li').hasClass('ct12navActive')){
						$('.ct12w2 ul li').removeClass('ct12menuOpen');
						//If on last link in subnav and tab out, set subnav to aria-expanded="false"
						$('.ct12w5').attr('aria-expanded', false).attr('role', 'button');
						$('.ct12w2 ul li div').removeClass('hovered');
				}

				//TODO: Setup hander for last element
				if ($(this).parents('li').hasClass('ct12navActive')) {
					//console.log('focusing on first element', $(this).parents('li').find('.ct12w6'));
					$(this).parents('li').find('.ct12w6').focus();
					e.preventDefault();
					//return false;
				}

				// $(".ct12more ul li.ct12pushed").last().focusout(function(){
				// 	// $('.ct12w5').attr('aria-expanded', false).attr('role', 'button');
				// 	$(this).closest(".ct12menu").removeClass("ct12menuOpen");
				// });
			}			
			if (e.keyCode === 27) {
				// console.log('active element', document.activeElement)
			}
			if (e.keyCode === 13 || e.keyCode === 32 || e.type === "click") {
				// console.log("event",e.type)
				
				// Default setup
				focusableElements.forEach(function (element) {
					if (element != document.activeElement) {
						$(element).closest('div').removeClass('hovered');
						$(element).closest('li').removeClass('ct12navActive');
					}
				});
				if ($(this).closest('li').hasClass('ct12navActive')) {
					//console.log('trap C closed');
					// console.log("HIT")
					$(this).closest('li').removeClass('ct12navActive');
					$('.ct12menu').removeClass('ct12menuOpen')
					$(this).closest('div').removeClass('hovered');
					$(this).closest('div').find(".ct12w5").attr("aria-expanded", false);
					$(this).closest('div').find(".ct12w5").attr("role", "button");
					$(this).closest('div').find('.ct12w6').hide();
				}
				else {
					//console.log($(this),'trap C open');
					$(this).closest('li').addClass('ct12navActive');
					$(this).closest('div').first().addClass('hovered');
					$(this).closest('div').find(".ct12w5").attr("aria-expanded", true)
					$(this).closest('div').find(".ct12w5").attr("role", "button");
					$(this).closest('li').find('.ct12w6').show();
					$('.ct12menu .ct12more ul').show();
					//When responsive subnav "more" is opened, set tabindex to 0 and aria-hidden false
					$(this).parents().find(".ct12pushed").find("a").attr('tabindex', "0", "aria-hidden", false);
					$('.ct12menu').addClass('ct12menuOpen');
					var classes = $(".ct12navActive").attr("class");
					currMenuTarget = _extractTarget(classes);
					//console.log('currMenuTarget',currMenuTarget);
					
					$('.ct12more').show().focus();
					$('.ct12more li:not([data-ref="' + currMenuTarget + '"])').hide(); 
					//$('.ct12more li.ct12cta').show();
					$('.ct12more li[data-ref="' + currMenuTarget + '"]').show();
					$('.' + currMenuTarget).find('ul').first().show();
					//$('li[data-ref="' + currMenuTarget + '"] .ct12w5').focus();	
					// console.log ($('li[data-ref="' + currMenuTarget + '"] a').first());
					$('li[data-ref="' + currMenuTarget + '"] a').first().focus();  
						
					if ($(".ct12navActive").hasClass('ct12menu')) {
						$('.ct12more li').hide();
						$('.ct12more .ct12pushed').show();
						$('.ct12more .ct12pushed .ct12w6 li').show();
						//$('.' + currMenuTarget).find('ul').first().show();

					}

					// Add inner link listener to pass focus to next main menu on last link tab
					var focusableLinksString = '.ct12more li[data-ref="' + currMenuTarget + '"] > span > a ';
					var allLinks = document.querySelectorAll(focusableLinksString);

					focusableLinks = Array.prototype.slice.call(allLinks);
					//console.log(focusableLinks);
					firstLinkStop = focusableLinks[0];
					lastLinkStop = focusableLinks[focusableLinks.length - 1];

					focusableLinks.forEach(function (element) {
						//$(element).attr('id', 'mi1').show();
						addEventListener('keydown', trapInnerTabKey);
					});


					//Last tab listener to hide all menus (for both regular and more menus)
					var lastTab, lastSelectedTab;

					if (_getBreakpoint() == 'desktop') {
						lastTab = allTabs[allTabs.length - 2];
					} else {
						lastTab = allTabs[allTabs.length - 1];
					}
					lastSelectedTab = $(lastTab).closest('li').first();
					//console.log(lastSelectedTab);
					if ($(lastSelectedTab).hasClass(currMenuTarget)) {
						$('.ct12more').show();
						$('.ct12menu').addClass('ct12navActive');
						$('.' + currMenuTarget).find('ul').first().show();
						//console.log($('li.' + currMenuTarget + ' ul[role="menu"] li:visible a:last-of-type').last());

						$('li.' + currMenuTarget + ' ul[role="menu"] li:visible a:last-of-type').last().on('keydown', function (ev) {
							if (ev.keyCode === 9) {
								//console.log('tab out on last element of last tab');
								$('.' + currMenuTarget).removeClass('ct12navActive'); //hide desktop menu
								$('.' + currMenuTarget).removeClass('ct12menuOpen'); //hide mobile menu
								$('.' + currMenuTarget).find('div').first().removeClass('hovered');
								$('.' + currMenuTarget).find('ul').first().hide();
								//console.log('last', $('.' + currMenuTarget).find('ul'));
							}
						});
					}
				}
			}			
		}

		//Sub menu 
		function trapTabKeyC(e) {
			//If tab to last link and shift + tab, return to previous link in subnav
			if (!e.shiftKey && e.keyCode === 9){
				// console.log("trapTabKeyC")
				let lastLink = $(this).parent().find('a').last()[0];
				let lastResponsiveSubLink = $(".ct12more ul li.ct12pushed a").last()[0];
				//If tabbing past last link, close subnav 
				if(lastLink === e.target){
					// console.log("lastLink")
					$(this).parents().find('.ct12navActive').not(".ct12menu").removeClass("ct12navActive");
					$(this).parents().removeClass("hovered");
				}
				if(e.target === lastResponsiveSubLink){
					// console.log("last link in subnav")
					$(this).parents().find('.ct12w5').attr('aria-expanded', false);
					$(this).parents().find('.ct12navActive').removeClass("ct12navActive");
					$(this).parents().find(".ct12menuOpen").removeClass("ct12menuOpen");
					$(this).parents().find(".ct12pushed").find("a").attr('tabindex', "-1", "aria-hidden", true);
					//set "more" top level nav back to aria-expanded false when shift + tab back for VO
					$(this).find(".ct12w5").attr("aria-expanded", false);
				}
			}
			if (e.keyCode === 27) {
				// console.log(e.target, "escape key hit trapTabKeyC")
				$(this).closest(".ct12more").parent().parent().removeClass('ct12menuOpen');
				$(this).closest('div').removeClass('hovered');
				$(this).parents('li').removeClass('ct12navActive');
				$(this).parents('li').find('span > span').focus();
			}
		}

		// Inner link listener
		function trapInnerTabKey(e) {
			// Check for TAB key press
			if (e.keyCode === 9) {
				//console.log('inner trap');
				var $prev = $('.' + currMenuTarget);
				
				// SHIFT + TAB
				if (e.shiftKey) {
					if (document.activeElement === firstLinkStop) {
						//console.log('first element - SHIFT FOCUS TO PREV ITEM TAB');
						$prev.find('.ct12w5').focus();
						e.preventDefault();
					}

					// TAB
				} else {
					if (document.activeElement === lastLinkStop) {
						$prev.nextAll('li').not('.ct12popped').first().focus();
						$('ul li').removeClass('ct12navActive');

						//Next element is More menu
						if ($prev.nextAll('li').not('.ct12popped').first().hasClass('ct12menu')) {
							//console.log('next element is more menu');
							
							$('.ct12more').hide();
							//console.log('target class', currMenuTarget);
							$('li[data-ref="' + currMenuTarget + '"]').hide();
							$prev.nextAll('li').find('span > span').focus();
							$prev.nextAll('li').find('.ct12pushed').show();
							$prev.nextAll('li').find('.ct12pushed li').show();

						} else {
							$('.ct12w3').removeClass('ct12menuOpen');
							$('li[data-ref="' + currMenuTarget + '"]').hide();
							$prev.nextAll('li').first().find('div > span > span').focus();
							//console.log('next',$prev.nextAll('li').first());
						}
						e.preventDefault();
					}
				}
			}
			if(e.keyCode === 27){
				$(".ct12menu").removeClass('ct12menuOpen');
				//Reset focus to parent nav if escape key hit on subnav
				$(".ct12navActive").find('span > span')[0].focus();
				$(".ct12navActive").find('.ct12w5').attr("aria-expanded", false);
			}
		}
	};


	// this function will be registered with OCOM as OCOM.ct12
	// this needs to be a named function, using component id
	//component = function ct12($) {
		// $ is scoped to the context given in OCOM.ct12(context) - defaults to document
		_context = $(".ct12").first();
		var label = $(_context).attr("data-moretxt");
		
		window.ct12Interval = setInterval(function () {
			
			// console.log("interval")

			if (_getBreakpoint() !== "" && _getBreakpoint() !== "none") {
				document.querySelector(".ct12").classList.add("ws-sticky");
				clearInterval(ct12Interval);
				// console.log(Boolean($('link[href$="redwood-styles.css"]')[0].sheet))
				_injectMenu(label);
				_swap = _context.find(".ct12w3").first();
				_addArrows();
					
				_addBars();
				// only on compass (not on redwood)
				if(!$('body.f20')[0]){
					_addTriangles();
				}else{
					_context.addClass('rw-neutral-180bg'); // adding here to set button style
					_context.find('.obttn4').removeClass('obttn4').addClass('obttn1'); // adding here to set button style
				}			
				_numberTabs();
				_changeBtnClass();
				_cloneBtn();
				_cloneNavItems();
				_adjustItemsMob();
				_reposArrow();
				_addMenuClickEvent();
				_mobileCheck();
				_adjustPulldownPosition();
				_addAlly();
				_ct12width = $(_context).width();
			}
		}, 50);
		$(window).off('resize.ct12').on('resize.ct12', function () {
			if (_ct12width != $(_context).width()) {
				_adjustItemsMob();
				_reposArrow();
				_mobileCheck();
				_adjustPulldownPosition();
				_clearMenu();
				_addAlly();
				_ct12width = $(_context).width();
			}
		});
	//};
	//return component;
//})();
}
//We wrap up the entire component in a new function and then register it in the OCM framework if we're in OCM so it can be triggered
var isOCM = document.querySelector('.scs-slot');
if (isOCM){
	OCOM.register(function ct12($) {
		ct12Wrapper();
		$('.ct12').insertAfter('#u30');
		$('#header-slot').hide();
	});
}
else {
	OCOM.register(function ct12($) {
	ct12Wrapper();
	});
}
 

/*! CB105 */
OCOM.register(function cb105($) {
	'use strict';

// Focus Detector
// document.addEventListener('focus', function() {
//   console.log('focused: ', document.activeElement)
// }, true);

	$('.cb105:not([data-a11y="true"])').each(function () {


		var $cb105 = $(this),
			CLS_OPEN = 'cb105open',
			CLS_PLUS = 'icn-plus',
			CLS_MIN = 'icn-min',
			VK_ENTER = 13,
			CLS_PLUSMIN = [CLS_PLUS, CLS_MIN].join(' '),
			allListItems = '.cb105w1 > ul > li',
			allRegionHeadings = '.cb105w1 > ul > h4',
			listItems = '> li',
			openItems = '.' + CLS_OPEN,
			icon = '.icn-img',
			shiftHeld = false,
			toggleAll = '.cb105toggle-all';

		$cb105
			.find(allListItems).attr('tabindex','0').attr('role','region')
			.prepend('<a role="button" aria-expanded="false" class="icn-img ' + CLS_PLUS + '"></a>').end()
			.find('.cb105w2').attr('role','section').attr('aria-hidden','true').prepareHeightTransition().find('.cta-list');
		
		$(this).find(allRegionHeadings).attr('role','heading');
		$(this).find('.cb105w2 a').attr('tabindex','-1');

		$cb105.find(allListItems).find('h5').attr('role','heading');
		$cb105.find('h5').attr('role','heading');
		$cb105.find('.cb105w1 header a').attr('role','button');
		
		$cb105.find('.cb105w2 a').attr('aria-hidden','true').attr('tabindex','-1');
		$cb105.find(openItems).children(icon).toggleClass(CLS_PLUSMIN).attr('aria-expanded','true').attr('aria-label','Close button');
		$cb105.find(openItems).find('.cb105w2 a').attr('aria-hidden','false').attr('tabindex','0');

		$cb105.find('.cb105open').find('.cb105w2').attr('aria-hidden','false');
		$cb105.find(allListItems).find('a[role="button"][aria-expanded="false"]').attr('tabindex','-1').attr('aria-label','Open button');

		//Initial accessibility setup for Toggle All button.
		var $allToggle = $('.cb105toggle-all');
		updateToggleAllA11y();

		//Keydown and keyup listeners so that the browser can open a new page when doing "shift + click"
		$(document).keydown(function (e) {
			if (e.keyCode == 16) {
				shiftHeld = true;
			}
		});		

		$(document).keyup(function (e) {
			shiftHeld = false;
		});			


		$cb105.on('click', allListItems, function (e) {
			// After clicking on the list item, detect if the click occured within a link (making sure the anchor link has no classes --  as otherwise we're dealing with a toggle icon), and navigate to the link's target. 
			// Otherwise, toggle the element open/close state.	

			if (e.target.nodeName === 'A' && !e.target.classList.contains('icn-img')) {
				if (e.target.target === "_blank") {
					window.open(e.target.href, '_blank');
				} 
				if (e.target.rel === "vbox" || e.target.rel === "lightbox") {
					return;
				}
				if (e.target.target === "" && shiftHeld) {
					window.open(e.target.href, '_blank');
					shiftHeld = false;
					return false;
				}
				if (e.target.target === "") {
					window.location = e.target.href;
					return false;
				}
				e.preventDefault();
			} 

		
			else {
				var $ul = $(this).closest('ul'),
					$ctr = $ul.find(toggleAll).length && $ul || $cb105;

				if (e.isDefaultPrevented()) {
					return;
				}

				e.preventDefault();

				var toggleItem = $(this).toggleClass(CLS_OPEN).children(icon).toggleClass(CLS_PLUSMIN) &&
					$ctr.find(openItems).length === $ctr.find(
						$ctr.is('ul') ? listItems : allListItems).length &&
					$ctr.find(toggleAll).removeClass(CLS_PLUS).addClass(CLS_MIN) ||
					$ctr.find(toggleAll).removeClass(CLS_MIN).addClass(CLS_PLUS);

					if ( $(this).hasClass('cb105open') )  {
						$(this).attr('aria-expanded','true');
						$(this).find('a').attr('tabindex','0').attr('aria-hidden','false');
						$(this).find('a[role="button"]').attr('tabindex','0').attr('aria-label','Close button');
						$(this).closest('li').find('.cb105w2').attr('aria-hidden','false');
						$(this).focus();
					}
					else  {
						$(this).attr('aria-expanded','false');
						$(this).find('a').attr('tabindex','-1').attr('aria-hidden','true');
						$(this).find('a[role="button"]').attr('tabindex','-1').attr('aria-label','Open button');
						$(this).closest('li').find('.cb105w2').attr('aria-hidden','true');
					}
			}
			updateToggleAllA11y();
		});

		//Event listeners for Toggle All button and section buttons.

		$cb105.find(toggleAll).on({
			keydown: function(e) {
				if (e.keyCode === VK_ENTER) {
					toggleAllItems(e);
				}
			},

			click: function(e) {
				toggleAllItems(e);
			}
		});

		$cb105.find(allListItems).keyup(function(e) {
			if (e.keyCode === VK_ENTER) {
				$(this).click();
			}
		});



		function toggleAllItems(e) {
			var $allToggle = $cb105.find('.cb105toggle-all'),
				$ctr = $allToggle.closest('ul').length && $allToggle.closest('ul') || $cb105;

			e.preventDefault();

			var closeAll = $allToggle.toggleClass(CLS_PLUSMIN) &&
				$allToggle.hasClass(CLS_MIN) &&
				$ctr.find($ctr.is('ul') ? listItems : allListItems).addClass(CLS_OPEN)
				.children(icon).removeClass(CLS_PLUS).addClass(CLS_MIN) ||
				$ctr.find($ctr.is('ul') ? listItems : allListItems).removeClass(CLS_OPEN)
				.children(icon).removeClass(CLS_MIN).addClass(CLS_PLUS);
			
			if ( $allToggle.hasClass('icn-min') )  {
			//	$cb105.find('.icn-min').attr('aria-label','Close button');
				$allToggle.attr('aria-label','Close all');
				$allToggle.attr('data-lbl','closeall');
				$cb105.find('li').attr('aria-expanded','true');
				$('.cb105w2 a').attr('aria-hidden','false').attr('tabindex','0');
			}
			if ( $allToggle.hasClass('icn-plus') )  {
			//	$cb105.find('.icn-plus').attr('aria-label','Open button');
				$allToggle.attr('aria-label','Open all');
				$allToggle.attr('data-lbl','openall');
				$cb105.find('li').attr('aria-expanded','false').attr('aria-hidden','true');
				$('.cb105w2 a').attr('aria-hidden','true').attr('tabindex','-1');
			}
		}

		function updateToggleAllA11y() {
			if ($allToggle.hasClass('icn-min'))  {
				$allToggle.attr('aria-label','Close all');
				$allToggle.attr('data-lbl','closeall');
			}
			else if ($allToggle.hasClass('icn-plus'))  {
				$allToggle.attr('aria-label','Open all');
				$allToggle.attr('data-lbl','openall');
			}
		}	
	});

	$('.cb105[data-a11y="true"]').each(function () {

		var $cb105 = $(this),
			CLS_OPEN = 'cb105open',
			CLS_PLUS = 'icn-plus',
			CLS_MIN = 'icn-min',
			VK_ENTER = 13,
			CLS_PLUSMIN = [CLS_PLUS, CLS_MIN].join(' '),
			allListItems = '.cb105w1 > ul > li > ul > li',
			allRegionHeadings = '.cb105w1 > ul > li > ul > h4',
			listItems = '> li > .cb105w2',
			openItems = '.' + CLS_OPEN,
			icon = '.icn-img',
			shiftHeld = false,
			toggleAll = '.cb105toggle-all';

		$cb105
			// .find(allListItems).attr('role','region')
			// .find(allListItems).attr('tabindex','0').attr('role','region')
			// .find(allListItems).attr('role','region')
			.find('.cb105w3').wrap('<a role="button" tabindex="0" class="icn-img ' + CLS_PLUS + '"></a>').end()
			.find('.cb105w2').attr('aria-hidden','true').attr('role','region').prepareHeightTransition().find('.cta-list');

		//$(this).find(allRegionHeadings).attr('role','heading');
		// $(this).find('.cb105w2 a').attr('tabindex','-1');

		// $cb105.find(allListItems).find('h5').attr('role','heading');
		// $cb105.find('h5').attr('role','heading');
		$cb105.find('.cb105w1 header a[href^="#more"]').attr('role','button').attr('aria-live','polite').attr('aria-expanded','false');
		
		$cb105.find('.cb105w2 a').attr('aria-hidden','true').attr('tabindex','-1');
		
		$cb105.find(openItems).children(icon).toggleClass(CLS_PLUSMIN).attr('aria-expanded','true');
		$cb105.find(allListItems).children(icon).attr('aria-expanded','false');
		$cb105.find(openItems).find('.cb105w2 a').attr('aria-hidden','false').attr('tabindex','0');

		$cb105.find('.cb105open').find('a.icn-img[role="button"]').attr('aria-expanded','true');
		$cb105.find('.cb105open').find('.cb105w2').attr('aria-hidden','false').find('a').attr('aria-hidden','false').attr('tabindex','0');
		$(this).find('.cb105w2').each(function() {
			var panid = $(this).attr('id'),
				panlabel = $(this).attr('aria-labelledby');
			$(this).prev('a[role="button"]').attr('aria-controls',''+ panid +'').attr('id',''+ panlabel +'');
		});

		// $cb105.find(allListItems).find('a[role="button"][aria-expanded="false"]').attr('tabindex','0');

		//Initial accessibility setup for Toggle All button.
		var $allToggle = $('.cb105toggle-all');
		updateToggleAllA11y();

		//Keydown and keyup listeners so that the browser can open a new page when doing "shift + click"
		$(document).keydown(function (e) {
			if (e.keyCode == 16) {
				shiftHeld = true;
			}
		});		

		$(document).keyup(function (e) {
			shiftHeld = false;
		});			


		function cb105a11yClick(event){
		    if(event.type === 'click'){
		        return true;
		    }
		    else if(event.type === 'keypress'){
		        var code = event.charCode || event.keyCode;
		        if(code === 32){
		            return true;
		        }
		    }
		    else{
		        return false;
		    }
		}

		// $('#fake-button').on('click keypress', function(event){
		//   if(cb105a11yClick(event) === true){
		//     // do stuff
		//   }
		// });

		$cb105.on('click keypress', allListItems, function (e) {
			// After clicking on the list item, detect if the click occured within a link (making sure the anchor link has no classes --  as otherwise we're dealing with a toggle icon), and navigate to the link's target. 
			// Otherwise, toggle the element open/close state.	
			if(cb105a11yClick(e) === true){
			if (e.target.nodeName === 'A' && !e.target.classList.contains('icn-img')) {
				if (e.target.target === "_blank") {
					window.open(e.target.href, '_blank');
				} 
				if (e.target.rel === "vbox" || e.target.rel === "lightbox") {
					return;
				}
				if (e.target.target === "" && shiftHeld) {
					window.open(e.target.href, '_blank');
					shiftHeld = false;
					return false;
				}
				if (e.target.target === "") {
					window.location = e.target.href;
					return false;
				}
				e.preventDefault();
			} 

		
			else {
				var $ul = $(this).closest('ul'),
					$ctr = $ul.find(toggleAll).length && $ul || $cb105;

				if (e.isDefaultPrevented()) {
					return;
				}

				e.preventDefault();

				var toggleItem = $(this).toggleClass(CLS_OPEN).children(icon).toggleClass(CLS_PLUSMIN) &&
					$ctr.find(openItems).length === $ctr.find(
						$ctr.is('ul') ? listItems : allListItems).length &&
					$ctr.find(toggleAll).removeClass(CLS_PLUS).addClass(CLS_MIN) ||
					$ctr.find(toggleAll).removeClass(CLS_MIN).addClass(CLS_PLUS);

					if ( $(this).hasClass('cb105open') )  {
						
						$(this).find('.cb105w2').attr('aria-hidden','false');
						$(this).find('.cb105w2 a').attr('aria-hidden','false').attr('tabindex','0');
						// $(this).find('.cb105w2').attr('tabindex','0').attr('aria-hidden','true');
						$(this).find('a.icn-img[role="button"]').attr('tabindex','0').attr('aria-expanded','true');
						$(this).closest('li').find('.cb105w2').attr('aria-hidden','false');
						$(this).focus();
					}
					else  {
						$(this).find('.cb105w2').attr('aria-hidden','true');
						$(this).find('.cb105w2 a').attr('aria-hidden','true').attr('tabindex','-1');
						// $(this).find('.cb105w2').attr('tabindex','-1').attr('aria-hidden','true');
						$(this).find('a.icn-img[role="button"]').attr('tabindex','0').attr('aria-expanded','false');
						$(this).closest('li').find('.cb105w2').attr('aria-hidden','true');
					}
			}
			updateToggleAllA11y();
			}
		});

		//Event listeners for Toggle All button and section buttons.

		$cb105.find(toggleAll).on({
			keydown: function(e) {
				if (e.keyCode === VK_ENTER || e.keyCode == 32) {
					toggleAllItems(e);
				}
			},

			click: function(e) {
				toggleAllItems(e);
			}
		});

		$cb105.find(allListItems).keyup(function(e) {
			if (e.keyCode === VK_ENTER) {
				$(this).click();
			}
		});



		function toggleAllItems(e) {
			var $allToggle = $cb105.find('.cb105toggle-all'),
				$ctr = $allToggle.closest('ul').length && $allToggle.closest('ul') || $cb105;

			e.preventDefault();

			var closeAll = $allToggle.toggleClass(CLS_PLUSMIN) &&
				$allToggle.hasClass(CLS_MIN) &&
				$ctr.find($ctr.is('ul') ? listItems : allListItems).addClass(CLS_OPEN)
				.children(icon).removeClass(CLS_PLUS).addClass(CLS_MIN) ||
				$ctr.find($ctr.is('ul') ? listItems : allListItems).removeClass(CLS_OPEN)
				.children(icon).removeClass(CLS_MIN).addClass(CLS_PLUS);
			
			if ( $allToggle.hasClass('icn-min') )  {
				$cb105.find('.icn-min').attr('aria-expanded','true');
				$allToggle.attr('aria-label','Close all');
				$allToggle.attr('data-lbl','close-all');
				$cb105.find('.cb105w2').attr('aria-hidden','false');
				$('.cb105w2 a').attr('aria-hidden','false').attr('tabindex','0');
			}
			if ( $allToggle.hasClass('icn-plus') )  {
				$cb105.find('.icn-plus').attr('aria-expanded','false');
				$allToggle.attr('aria-label','Open all');
				$allToggle.attr('data-lbl','open-all');
				$cb105.find('.cb105w2').attr('aria-hidden','true');
				$('.cb105w2 a').attr('aria-hidden','true').attr('tabindex','-1');
			}
		}

		function updateToggleAllA11y() {
			if ($allToggle.hasClass('icn-min'))  {
				$allToggle.attr('aria-label','Close all').attr('aria-expanded','true');
				$allToggle.attr('data-lbl','close-all');
			}
			else if ($allToggle.hasClass('icn-plus'))  {
				$allToggle.attr('aria-label','Open all').attr('aria-expanded','false');
				$allToggle.attr('data-lbl','open-all');
			}
		}	
	});
});

/*! RC02 */
(function($) {
	var component,
		_itemsPerRow = {'desktop':3,'smdesktop':2,'tablet': 1},
		_equalizeHt = function (context) {
			var floor = 0,
				ceiling = 0,
				ht = 0;
			$(context).find(".rc02w2 .col-item-w1").removeAttr("style");

			$(context).find(".rc02w2 .col-item-w1").each( function (i, w1) {
				if (ceiling == 0 || ceiling < i) {
					ceiling = _insertionPoint(w1)[0];

					// find greatest height in row
					for (var n = floor; n <= ceiling; n++) {
						if ($($(context).find(".rc02w2 .col-item-w1")[n]).outerHeight() > ht) {
							ht = $($(context).find(".rc02w2 .col-item-w1")[n]).outerHeight();
						}
					}
					//console.log(ht)
					// set each element height in row
					for (var n = floor; n <= ceiling; n++) {
						$($(context).find(".rc02w2 .col-item-w1")[n]).css({height:ht});
					}
					//console.log(floor + ' - ' + ceiling);
					floor = ceiling + 1;
					ht = 0;
				}
			});
		},
		_getBreakpoint = function () {
			return window.getComputedStyle(document.querySelector('.rc02'), ':before').getPropertyValue('content').replace(/\"/g, '');
		},
		_initialize = function (context) {
			_equalizeHt(context);
		},
		/*
		 * Returns array containing two elements: 
		 * 0: index where info panel should be injected relative to all visible items
		 * 1: index of the clicked tile relative to its row
		 */
		_insertionPoint = function (context) {
			var cols = _itemsPerRow[_getBreakpoint()],
				index = $(context).closest('.col-item').index(),
				visMax = $(context).closest('.col-w1').find('.col-item:visible').length,
				visIndex,
				visPos,
				visRow,
				visRowLast,
				visPoint,
				slot;
			// find index of selected item relative to all visible items
			for (var i = 0; i < visMax; i++) {
				if ($($(context).closest('.col-w1').find('.col-item:visible')[i]).index() == index) {
					visIndex = i;
					break;
				}
			}

			// calculate row of selected tile among all visible tiles
			visRow = Math.ceil((visIndex + 1) / cols);

			// calculate total number of visible rows
			visRowLast = Math.ceil(visMax / cols);

			// set the injection point at the last tile when the info panel will create a new row
			visPoint = visRow == visRowLast ? (visMax - 1) : (cols * visRow) - 1;
			
			// convert visible item index to one that is relative to all items, visible or not
			actualPoint = $($(context).closest('.col-w1').find('.col-item:visible')[visPoint]).index();
			
			// index of item relative to items in row
			slot = visIndex % cols;
			
			//console.log('visindex: ' + visIndex + ', visrow: ' + visRow + ', vispoint: ' + visPoint + ', vismax: ' + (visMax - 1) + ', visrowlast: ' + visRowLast + ', actualpoint: ' + actualPoint);
			//console.log([actualPoint,slot])
			return [actualPoint,slot];
		};
	component = function rc02($) {
		$(".rc02v0").each( function(i, rc02) {
			_initialize(rc02);
		});
		// bind once
		$(window).off('resize.rc02').on('resize.rc02', function (e) {
			$(".rc02v0").each( function (i, rc02) {
				_equalizeHt(rc02);
			});
		});
	};
	OCOM.register(component);
})(jQuery);


/*! RC03 */

OCOM.register(function rc03($) {
    $(document).ready(function(){

        // var $tileContent = $('.rc03tile');
        var $rc03slide = $('.rc03slide');

        $slider = $('.rc03carousel');
        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            customPaging: function(slider, i) { 
                return `<button><span class="rc03accent">` + $(slider.$slides[i]).attr('title') + `</span></button>`;
            }
        });

        $slider.on('init reInit afterChange setPosition', function(){
            /* Remove aria-describedby and tabindex attributes on init */
            $(".slick-dots button").removeAttr("aria-label");
            $(".slick-track .carousel-item").removeAttr("tabindex");
            $(".slick-track .carousel-item").removeAttr("title");
            $(".slick-track .carousel-item").each(function () {
                let text = $(this).attr("aria-describedby");
                $(this).attr("aria-labelledby", text);
            });
            $(".slick-track .carousel-item").removeAttr("aria-describedby");
            

            $(".slick-dots li").each(function () {
                let button = $(this).find("button");
                let title = $(this).find("button .rc03accent").clone().addClass("sr-only").removeClass("rc03accent");
                
                if($(".sr-only").length === 1){
                    title.appendTo(button)
                }
            });
        });

		$slider.on('beforeChange setPosition', function(event, slick) {
			// setTimeout(function() {
				$rc03slide.equalHeight();
			// }, 5000);
		}); 

        $("ul.slick-dots").on('keyup', function(e){
            $(".slick-dots li button").attr("tabindex", "-1");
            if(e.keyCode === 37 || e.keyCode === 39|| e.keyCode === 9){
                if($(e.target).hasClass("o-hf")){
                    $(e.target).removeClass("o-hf")
                }
                $(this).find('li.slick-active button')[0].focus();
            }
            $(this).find("li.slick-active button").attr("tabindex", "0");
        });
        

		$slider.slick();
    });
});


/*! RC04 */

//set up default session storage indicating it's a StoryHub Page
if (sessionStorage.getItem('lastUrl') == 'StoryHub-Main') {
    $('#rc04-transition').addClass('fade-out');
    sessionStorage.lastUrl = 'StoryHub-Page';
} else {
    $('#rc04-transition').hide();
}


OCOM.register(function rc04($) {
    'use strict';

    $('.rc04w5 a').click(function (e) {
        if (e.target.href !== undefined) {
            sessionStorage.lastUrl = 'StoryHub-Page';
            e.preventDefault();
            $('#rc04-transition').show().addClass('fade-in');
            setTimeout(function () {
                window.location.href = e.target.href;
            }, 150);
        } else {
            sessionStorage.removeItem('lastUrl');
        }
    });

    $(document).on('click', '#w10close', function () {
        $('.rc04 .clickvideo.clickvideo-overlay').css('position', 'absolute');
        $('.rc04w1').show();
        $('.rc04w5').show();
    });

    var offset = 0.8,
        videoPlaying = false;

    function adjustHeight(rc04) {
        var padding = parseInt($(rc04).find(".rc04w1").css('padding-top')) + parseInt($(rc04).find(".rc04w1").css('padding-bottom')),
            ht = $(rc04).find(".rc04w1 > .col-framework > .col-w1 > div.col-item:first-child").outerHeight(true) + padding;
        $(rc04).removeAttr("style");
        $(rc04).find(".rc04w4 > .bcvideo").removeAttr("style");
        if ($(rc04).height() < ht) {
            $(rc04).css({
                height: ht
            });
            $(rc04).find(".rc04w4 > .bcvideo").css({
                height: ht
            });
        }
    }

    //Make rc04v0 classes match rc04v2 version (only for non-flipped version)
    $('.rc04v0').each(function () {
        if ($(this).find('.col-flip').length === 0) {
            $(this).find('.col-item-w4').removeClass('col-item-w4').addClass('rc04w11').wrap('<div class="rc04w2"></div>');
            $(this).find('.rc04w3').unwrap().appendTo('.rc04w2');
            $(this).find('.obttns').unwrap();
            $(this).find('.col-item-w2 h3').unwrap();
            var imgSrc = $(this).find('.col-item-w1 img').attr('src');
            $(this).find('.col-item-w1').removeClass('col-item-w1').addClass('rc04w6 bgimg').css('background-image', 'url(' + imgSrc + ')').find('img').remove();
            $(this).find('.rc04w6').unwrap().unwrap().parent().removeClass().addClass('rc04w10');
        } else {
            $(this).find('.col-item-w4').removeClass('col-item-w4').addClass('rc04w11').wrap('<div class="rc04w2"></div>');
            $(this).find('.rc04w3').unwrap().appendTo('.rc04w2');
            $(this).find('.obttns').unwrap();
            $(this).find('.col-item-w2 h3').unwrap();
            var imgSrc = $(this).find('.col-item-w1 img').attr('src');
            $(this).find('.col-item-w1').removeClass('col-item-w1').addClass('rc04w6 bgimg').css('background-image', 'url(' + imgSrc + ')').find('img').remove();
            $(this).find('.rc04w6').unwrap().parent().removeClass('col-framework').addClass('rc04w10');
        }
    });

    $('.rc04v2').each(function (i, rc04) {
        adjustHeight(rc04);
        $(rc04).on("click", ".rc04play", function (e) {
            e.preventDefault();
            $(e.currentTarget).closest(".rc04v2").find(".bclink").trigger("click");
            videoPlaying = true;
            $('.rc04 .clickvideo.clickvideo-overlay').css('position', 'relative');
            $('.rc04w5').hide();
            $('.rc04v2 .rc04w1').hide();
        });
    });

    //Setup for dynamic version

    $('.rc04v3').each(function (i, rc04) {

        var rc04StagingOrLive = false,
        w_url = window.location.href;
        if (w_url.indexOf('www-stage') > -1 || w_url.indexOf('www-portal-stage') > -1 || w_url.indexOf('www.stage') > -1 || w_url.indexOf('www-sites') > -1 || w_url.indexOf('www.oracle.com') > -1) {
            var rc04StagingOrLive = true;
        }


        var storyID = $(this).attr('story-id');
        var feedsrc = '';
        if(!rc04StagingOrLive) {
            feedsrc = '/content/published/api/v1.1/items/';
        }
        else {
            feedsrc = 'https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/items';
        }
        var channelToken = '4c4218c6da7f6794f4e00121899bc2f7';
        var ajaxSettings = {};

        if (storyID != undefined && storyID != '') {
            ajaxSettings = {
                'storyID': storyID,
                'channelToken': channelToken,
                'fields': 'all',
                'expand': 'all'
            };
        } else {
            return;
        }

        $(this).closest('.rc04').find('[data-bgimg]').each(function () {
            $(this).bgimg();
        });

        jQuery.when(jQuery.ajax({
            dataType: "json",
            url: feedsrc,
            data: ajaxSettings,
            contentType: "application/json; charset=utf-8",
            cache: false
        })).
        then(function (data) {
            // console.log(data);

            $(data.fields).each(function (index, self) {
                //console.log('self ', self);
                var productList = '';
                var storyProducts = [];
                //Get IDs for background image, logo, and video
                if (self.story_hero_media != undefined) {
                    var imageID = self.story_hero_media.id || '';
                }

                if (self.story_customer_logo.id != undefined) {
                    var logoID = self.story_customer_logo.id || '';
                }

                if (self.story_hero_video_id != undefined) {
                    var videoID = self.story_hero_video_id || '';
                }

                

                //If we're missing any data field for a card, skip it...

                if (data.slug != undefined) {
                    var storySlug = data.slug;
                }

                if (data.name != undefined) {
                    var storyName = data.name;
                }

                if (self.story_poster_headline != undefined) {
                    var storyHeading = self.story_poster_headline;
                }

                if (self.story_poster_headline != undefined) {
                    var storySummary = self.story_summary;
                }

                if (self.story_poster_subcopy != undefined) {
                    var cardSubCopy = self.story_poster_subcopy;
                }

                if (self.story_industry != undefined) {
                    var storyIndustry = self.story_industry;
                }

                if (self.story_productref != undefined) {
                    storyProducts = self.story_productref;
                }

                if (self.story_country != undefined) {
                    var storyLocation = self.story_country;
                }
                if (self.story_poster_cta_url != undefined) {
                    var storyLink = self.story_poster_cta_url;
                }

                //Get the right product name list from the dictionary we created, based on the product ID

                $(storyProducts).each(function () {
                    var elementPos = storyProducts.map(function (x) {
                        return x.id;
                    }).indexOf(this.id);
                    var objectFound = storyProducts[elementPos];
                    productList += '<a href="'+objectFound.fields.product_url+'">' + objectFound.name + '</a>';
                });

                //Generate story background and logo URLs 
                var storyMedia = 'https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/' + imageID + '/native/?channelToken=' + channelToken;
                var logoMedia = 'https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/' + logoID + '/native/?channelToken=' + channelToken;


                var componentContents = '<div class="rc04w1 cwidth"><div class="rc04w10">' +
                    '<div class="rc04w6 bgimg" data-bgimg="' + logoMedia + '" role="img" alt="'+storyName+'"></div>' +
                    '<h3>' + storyHeading + '</h3><p>' + storySummary + '</p>' +
                    '<div class="obttns"><div class="obttn"><a href="?bcid=' + videoID + '&amp;bigscreen=true" rel="vbox" role="button" alt="'+storyName+'" data-lbl="button:lighbox-open-watch-the-video:placeholder" data-trackas="lightbox" class="rc04play icn-img icn-play">Watch video</a></div>' +
                    '<div class="obttn1"><a href="'+storySlug+'">View the story</a></div></div>' +
                    '<div class="rc04w2"><div class="rc04w11">' + productList + '</div>' +
                    '<div class="rc04w3">Industry: <span>' + storyIndustry + '</span></div>' +
                    '<div class="rc04w3">Location: <span>' + storyLocation + '</span></div>' +
                    '</div></div></div>';

                $(this).append(componentContents);

                $(this).attr('data-bgimg', storyMedia).bgimg();

                $(this).find('[data-bgimg]').each(function () {
                    $(this).bgimg();
                });

            }.bind(this));

        }.bind(this));

        adjustHeight(rc04);
        $(rc04).on("click", ".rc04play", function (e) {
            e.preventDefault();
            $(e.currentTarget).closest(".rc04v2").find(".bclink").trigger("click");
            videoPlaying = true;
            $('.rc04 .clickvideo.clickvideo-overlay').css('position', 'relative');
            $('.rc04w5').hide();
            $('.rc04v2 .rc04w1').hide();
        });
    });

    $(window).off('resize.rc04').on('resize.rc04', function () {
        $('.rc04v2').each(function (i, rc04) {
            adjustHeight(rc04);
        });
    });

    $(window).scroll(function () {
        var screenPos = {};
        if ($(".rc04v2")[0]) {
            screenPos = {
                top: $(window).scrollTop(),
                bot: $(window).scrollTop() + $(window).innerHeight()
            };
        }
        $('.rc04v2').each(function (i, rc04) {
            var elementPos = {
                top: $(rc04).offset().top,
                bot: $(rc04).offset().top + $(rc04).outerHeight()
            }
            setTimeout(function () {
                if ($(rc04).find("video")[0]) {
                    if (elementPos.bot * offset > screenPos.top) {
                        if (!videoPlaying) {
                            //$('.rc04 .clickvideo.clickvideo-overlay').css('position','absolute');
                            videoPlaying = true;
                            videojs($(rc04).find("video").attr("id")).play();
                        }
                    } else {
                        if (videoPlaying) {
                            //$('.rc04 .clickvideo.clickvideo-overlay').css('position','relative');
                            videoPlaying = false;
                            videojs($(rc04).find("video").attr("id")).pause();
                        }
                    }
                }
            }, 200);
        });
    });
});

/*! RC05 */
/**
 * @file rc05 Customer Story Cards
 * @author David Correa <david.correa@oracle.com>
 */


 OCOM.register(function rc05($) {
    jQuery(document).ready(function () {

        /**
        *  This component's v2 consumes a dynamic data feed for customer stories, which is available through the OCE Endpoint JSON Output: https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/items/CORE535699264B8047D3BAB3C40BE6311F51?channelToken=4c4218c6da7f6794f4e00121899bc2f7
        *  In order to avoid CORS issues, we use a proxy approach with /ws-lib/helper-scrips/oce-json.php and .htaccess
        *  When a request to the endpoint's path is made ('/content/published/api/v1.1/items/'), our local server redirects the request to the php proxy file instead,
        *  which in turn builds the final url and then uses php's curl to fetch the data from the endpoint without CORS restrictions, and then returns the json to the component.
        */ 

        $('.rc05.rc05v2').each(function () {
            var storyID = $(this).attr('story-id');
            var catID = $(this).attr('story-type');
            var feedsrc = '/content/published/api/v1.1/items/';
            var channelToken = '4c4218c6da7f6794f4e00121899bc2f7';
            var ajaxSettings = {};

            if (storyID != undefined && storyID != '') {
                ajaxSettings = {
                    'storyID': storyID,
                    'channelToken': channelToken,
                    'fields': 'all',
                    'expand': 'all'
                };
            } else if (catID != undefined && catID != '') {
                ajaxSettings = {
                    'q': catID,
                    'channelToken': channelToken,
                    'fields': 'all',
                    'expand': 'all',
                };
            } else {
                return false;
            }
            jQuery.when(jQuery.ajax({
                dataType: "json",
                url: feedsrc,
                data: ajaxSettings,
                contentType: "application/json; charset=utf-8",
                cache: true
            })).
            then(function (data) {

                //if we're pulling a specific customer page, there will be related cards

                if (data.fields != undefined) {

                    //We bind this function to the rc05 context, and by doing so, the value of 'this' gets the parent's lexical environment. 
                    //We use 'self' to reference each instance of the loop as if it were a local 'this'.

                    $(data.fields.story_related_cards).each(function (index, self) {

                        if (self.type == "Card") {
                            var cardMedia;
                            if (self.fields.card_media != undefined) {
                                cardMedia = 'https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/CONTBA1CF973423D4CFB8745E55DCCEEE088/native/' + self.fields.card_media.name + '?channelToken=' + channelToken;
                            }

                            var innerHTML = '<div class="carousel-item"><a href="' + self.fields.card_cta_url + '" class="rc05w3 basic" data-bgimg="' + cardMedia + '"><div class="rc05w4"><div class="rc05logo"></div><div class="rc05contentarea"><div class="rc05heading">' + self.fields.card_headline + '</div><div class="rc05subcopy">' + self.fields.card_cta_title + '</div><div class="rc05refs"><div class="rc05cat"><br></div><div class="rc05detail"><span class="rc05lbl"><br></span><span class="rc05def"><br></span></div><div class="rc05detail"><span class="rc05lbl"><br></span><span class="rc05def"><br></span></div></div></div></div></a></div>';
                            $(this).find('.rc05w2').append(innerHTML);
                        } else if (self.type == "Story") {

                            for (x = 0; x < data.fields.story_related_cards.length; x++) {
                                if (self.id == data.fields.story_related_cards[x].id) {
                                    var storySlug = self.fields.story_poster_media.name;
                                    var imageID = self.fields.story_poster_media.id;
                                    var logoSlug = self.fields.story_customer_logo.name;
                                    var logoID = self.fields.story_customer_logo.id;
                                    var cardHeading = self.fields.story_poster_headline;
                                    var cardProduct = self.fields.story_productref[0].name;
                                    var cardSubCopy = self.fields.story_poster_subcopy;
                                    var cardIndustry = self.fields.story_industry;
                                    var cardCountry = self.fields.story_country;
                                    var cardLink = self.fields.story_poster_cta_url;
                                }
                            }

                            var cardMedia = 'https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/' + imageID + '/native/' + storySlug + '?channelToken=' + channelToken;
                            var logoMedia = 'https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/' + logoID + '/native/' + logoSlug + '?channelToken=' + channelToken;

                            var innerHTML = '<div class="carousel-item"><a href="' + cardLink + '" class="rc05w3" data-bgimg="' + cardMedia + '">' +
                                '<div class="rc05w4">' +
                                '<div class="rc05logo" data-bgimg="' + logoMedia + '"></div>' +
                                '<div class="rc05contentarea">' +
                                '<div class="rc05heading">' + cardHeading + '</div>' +
                                '<div class="rc05subcopy">' + cardSubCopy + '</div>' +
                                '<div class="rc05refs">' +
                                '<div class="rc05cat">' + cardProduct + '</div>' +
                                '<div class="rc05detail"><span class="rc05lbl">Industry:</span><span class="rc05def">' + cardIndustry + '</span></div>' +
                                '<div class="rc05detail"><span class="rc05lbl">Location:</span><span class="rc05def">' + cardCountry + '</span></div>' +
                                '</div></div></div></a></div>';

                            $(this).find('.rc05w2').append(innerHTML);

                            $(this).closest('.rc05').find('[data-bgimg]').each(function () {
                                $(this).bgimg();
                            });

                        }
                    }.bind(this));

                    // After we're done building the cards for a specific story, initialize Slick for these.
                    // We call the setUpSlick function and pass the current context to intialize this carousel within its own scope.
                    setUpSlick.call(this);


                } else {
                    //Since the product list is on a different endpoint, we do one query to get the entire list, store them locally and access them as needed.
                    //This is done so that we don't have to do one AJAX request per product per card.
                    //We use a promise to ensure that the object we're creating with the map of id's and names is ready before we move on to building and injecting the card html strings.
                    var productRefs = [];
                    jQuery.when(jQuery.ajax({
                        dataType: "json",
                        url: feedsrc,
                        data: {
                            'q': 'product', // We pass a product token to oce-json.php, which is our proxy to the CORS-protected enndpoint
                            'channelToken': channelToken,
                            'fields': 'all',
                            'expand': 'all',
                        },
                        contentType: "application/json; charset=utf-8",
                        context: document.body,
                        cache: true,
                        success: function (data) {

                            //We build a local dictionary of product id's and names.
                            $(data.items).each(function (index) {
                                productRefs.push({
                                    id: this.id,
                                    name: this.name
                                });
                            });

                        },
                        error: function (data) {
                            console.log('Data not available');
                        },
                    })).
                    then(function () {
                        //Once we get the products from the promise, we're ready to build the card html

                        // console.log('productRefs in promise', productRefs);
                        // console.log('data ', data);

                        $(data.items).each(function (index, self) {
                            var productList = '';
                            //Get IDs for background image and logo
                            if (self.fields.story_poster_media) {
                                var imageID = self.fields.story_poster_media.id || '';
                            } else {
                                return;
                            }

                            if (self.fields.story_customer_logo.id) {
                                var logoID = self.fields.story_customer_logo.id || '';
                            } else {
                                return;
                            }

                            //If we're missing any data field for a card, skip that card and go to the next one...

                            if (self.fields.story_poster_headline) {
                                var cardHeading = self.fields.story_poster_headline;
                            } else {
                                return;
                            }

                            if (self.fields.story_poster_subcopy) {
                                var cardSubCopy = self.fields.story_poster_subcopy;
                            } else {
                                return;
                            }

                            if (self.fields.story_industry) {
                                var cardIndustry = productRefs[0].name;
                            } else {
                                return;
                            }

                            if (self.fields.story_country) {
                                var cardCountry = self.fields.story_country;
                            } else {
                                return;
                            }
                            if (self.fields.story_poster_cta_url) {
                                var cardLink = self.fields.story_poster_cta_url;
                            } else {
                                return;
                            }

                            //Get the right product name list from the dictionary we created, based on the product ID

                            $(self.fields.story_productref).each(function () {
                                var elementPos = productRefs.map(function (x) {
                                    return x.id;
                                }).indexOf(this.id);
                                var objectFound = productRefs[elementPos];
                                productList += objectFound.name + '<br/>';
                            });


                            //Generate card and logo URLs 
                            var cardProduct = '';
                            var cardMedia = 'https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/' + imageID + '/native/?channelToken=' + channelToken;
                            var logoMedia = 'https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/assets/' + logoID + '/native/?channelToken=' + channelToken;


                            // Generate Applications or Infratructure card
                            var cardContents = '<div class="carousel-item"><a href="' + cardLink + '" class="rc05w3" data-bgimg="' + cardMedia + '">' +
                                '<div class="rc05w4">' +
                                '<div class="rc05logo" data-bgimg="' + logoMedia + '"></div>' +
                                '<div class="rc05contentarea">' +
                                '<div class="rc05heading">' + cardHeading + '</div>' +
                                '<div class="rc05subcopy">' + cardSubCopy + '</div>' +
                                '<div class="rc05refs">' +
                                '<div class="rc05cat">' + productList + '</div>' +
                                '<div class="rc05detail"><span class="rc05lbl">Industry:</span><span class="rc05def">' + cardIndustry + '</span></div>' +
                                '<div class="rc05detail"><span class="rc05lbl">Location:</span><span class="rc05def">' + cardCountry + '</span></div>' +
                                '</div></div></div></a></div>';

                            $(this).find('.rc05w2').append(cardContents);

                            $(this).closest('.rc05').find('[data-bgimg]').each(function () {
                                $(this).bgimg();
                            });

                        }.bind(this));

                        // After we're done building the Apps or Infra cards, initialize Slick for these.
                        // We call the setUpSlick function and pass the current context to intialize this carousel within its own scope.
                        setUpSlick.call(this);

                    }.bind(this));
                }
            }.bind(this));

        });


        /**
        *  This component's v3 consumes a dynamic data feed for individual cards, which is available through the OCE Endpoint JSON Output: https://orasites-externalprod.cec.ocp.oraclecloud.com/content/published/api/v1.1/items?q=%28type+eq+%22Card%22%29&channelToken=4c4218c6da7f6794f4e00121899bc2f7&fields=all
        *  In order to avoid CORS issues, we use a proxy approach with /ws-lib/helper-scrips/oce-json.php and .htaccess
        *  When a request to the endpoint's path is made ('/content/published/api/v1.1/items/'), our local server redirects the request to the php proxy file instead,
        *  which in turn builds the final url and then uses php's curl to fetch the data from the endpoint without CORS restrictions, and then returns the json to the component.
        */ 

       $('.rc05.rc05v3').each(function () {
       
        //var cardID = $(this).attr('card-id');
        var catID = 'card';
        var feedsrc = '/content/published/api/v1.1/items/';
        var channelToken = '4c4218c6da7f6794f4e00121899bc2f7';
        var ajaxSettings = {
            'q': catID,
            'channelToken': channelToken,
            'fields': 'all',
            'expand': 'all'
        };

        jQuery.when(jQuery.ajax({
            dataType: "json",
            url: feedsrc,
            data: ajaxSettings,
            contentType: "application/json; charset=utf-8",
            cache: true
        })).
        then(function (data) {
            $(this).find('.carousel-item').each(function(){
                var cardID = $(this).attr('card-id');
                var innerHTML = '';

                if (data.items != undefined && (cardID != undefined && cardID != '')) {

                $(data.items).each(function (index, self) {
                    var _self = $(this);
                    console.log('card');
                    if (self.type == "Card" && self.id == cardID) {
                        var cardMedia;

                        //All card images are located in different endpoints, so we need to make cards(N) ajax requests to get them :(
                        jQuery.when(jQuery.ajax({
                            dataType: "json",
                            url: '/content/published/api/v1.1/items/',
                            data: {
                                'storyID': self.fields.card_media.id,
                                'channelToken': channelToken,
                                'fields': 'all',
                                'expand': 'all'
                            },
                            contentType: "application/json; charset=utf-8"
                        })).
                        then(function (d) {
                            console.log('self', self);
                            cardMedia = d.fields.native.links[0].href;
                            innerHTML = '<div class="carousel-item"><a href="' + self.fields.card_cta_url + '" class="rc05w3 basic" data-bgimg="' + cardMedia + '"><div class="rc05w4"><div class="rc05logo"></div><div class="rc05contentarea"><div class="rc05heading">' + self.fields.card_headline + '</div><div class="rc05subcopy">' + self.fields.card_cta_title + '</div><div class="rc05refs"><div class="rc05cat"><br></div><div class="rc05detail"><span class="rc05lbl"><br></span><span class="rc05def"><br></span></div><div class="rc05detail"><span class="rc05lbl"><br></span><span class="rc05def"><br></span></div></div></div></div></a></div>';
                            $(_self).html(innerHTML);
                            $(_self).find('a').bgimg();
                        }).bind(this);
                        
                        
                    } 
                    else {
                        return;
                    }
    
                }.bind(this));
            }


            });
    }.bind(this));

       });



        // JS for all non-dynamic variations

        $('.rc05:not(.rc05v2):not(.rc05v4):not(.rc05v5)').each(function (index) {
            //basicCardEmptyMarkup is needed so that the transitions can take place correctly
            $basicCardEmptyMarkup = '<div class="rc05refs"><div class="rc05cat"><br/></div><div class="rc05detail"><span class="rc05lbl"><br/></span><span class="rc05def"><br/></span></div><div class="rc05detail"><span class="rc05lbl"><br/></span><span class="rc05def"><br/></span></div></div>';

            $(this).find('.rc05w3').each(function () {
                if ($(this).hasClass('basic')) {
                    $(this).find('.rc05contentarea').append($basicCardEmptyMarkup);
                }
            });

//             $(this).closest('.rc05').find('[data-bgimg]').each(function () {
//                 $(this).bgimg();
//             });

            setUpSlick.call(this);
        });


        //Function reused throughout rc05 (all variations) to set up a carousel that has the component's lexical environment.
        //Note: This function should be invoked via JS's .call method and given the instance's 'this' context (representing the rc05 instance). 
        //ie: Do not call setUpSlick(); by itself, use setUpSlick.call(this);
        function setUpSlick() {
            // $(this) represents the current rc05 instance 
            //console.log('inside setUpSlick this ',this);

            $that = $(this).find('.rc05w2');
            var slideCounter = 1;
            var $container = $(this).find('.o-crsl');
            $container.addClass('crsl-count');
            $nav = $('<div class="crsl-nav crsl-count slick-nav rw-rect "></div>').appendTo($container);


            var settings = {
                appendArrows: $nav,
                appendDots: $nav,
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: true,

                responsive: [
                    {
                        breakpoint: 3200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                        }
                    },
                    {
                        breakpoint: 1440,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: true
                        }
                    },
                    {
                        breakpoint: 861,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true,
                            customPaging: function () {
                                return '<span class="slide-count"></span>';
                            },
                        }
                    }
                ]
            };

            $that.on("init afterChange breakpoint", function (event, slick) {
                slideCounter = $(this).find('.slick-active').attr("data-slick-index");
                slideCounter = parseInt(slideCounter, 10);
                slideCounter = slideCounter + 1;
                $(this).find(".slick-list").attr("role", "tabpanel");
                $(this).find(".slick-track").attr("role", "list");
                $(this).find(".carousel-item").attr("role", "listitem");
                $(this).closest('.rc05').find('.slide-count').html(slideCounter + ' / ' + slick.slideCount);
                setTimeout(() => {
                    $(this).find(".carousel-item").attr('role', '');
                    $(this).find(".carousel-item").attr('role', 'listitem');
                    $(this).find(".carousel-item.slick-active").removeAttr("tabindex");
                },200);
            });

            $that.slick(settings);


            $(this).find('.o-crsl').on('click', '.slick-next, .slick-prev', function () {
                slideCounter = $(this).closest('.rc05').find('.slick-active').attr("data-slick-index");
                slideCounter = parseInt(slideCounter, 10);
                slideCounter = slideCounter + 1;
            });

            //Slick takes a while repositioning dots. This function hides the slide count to prevent artifacts while resizing.
            //Since all carousels need this, we don't need to specify a context. 
            var resizeId;

            $(window).resize(function () {
                $('.rw-rect').addClass('hide');
                $(".slick-track").attr("role", "list");
                clearTimeout(resizeId);
                resizeId = setTimeout(doneResizing, 200);
            });

            $(".slick-next").click(function(){
                arialive('Next items shown');
            });
            $(".slick-prev").click(function(){
                arialive('Previous items shown');
            });

            function doneResizing() {
                $('.rw-rect').removeClass('hide');
            }        

            //Use generic-line-clamp.js to truncate heading text at 75 characters and overlay paragraph text at 195 chars
            $(this).find('.rc05w3:not(.basic)').find('.rc05heading').charClamp({
                size: 75
            });
            $(this).find('.rc05w3.basic .rc05heading').charClamp({
                size: 140
            });
            $(this).find('.rc05subcopy').charClamp({
                size: 195
            });
        }
        $(".slick-dots").keydown(function(e){
            if(e.keyCode == 32 || e.keyCode == 13){
                e.preventDefault();
            }
            if(e.which == 39 || e.which == 37){
                $('.slick-dots li button').each(function() {
                    if ($(this).attr('aria-selected') == 'true') {
                        $(this).focus();
                    } 
                });
            }
        });

    });
});

/*! RC06 */

OCOM.register(function rc06($) {
    jQuery(document).ready(function () {
        
        $('.rc06').each(function (index) {
            setUpSlick.call(this);
        });
  
        function setUpSlick() {
            // $(this) represents the current rc05 instance 
            //console.log('inside setUpSlick this ',this);

            $that = $(this).find('.rc06w2');
            var slideCounter = 1;
            var $container = $(this).find('.o-crsl');
            $container.addClass('crsl-count');
            $nav = $('<div class="crsl-nav slick-nav rw-rect"></div>').appendTo($container);

            var settings = {
                appendArrows: $nav,
				appendDots: $nav,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows: true,
                responsive: [
                    {
                    breakpoint: 1480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                    }
                    },
                    {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        customPaging: function () {
                            return '<span class="slide-count"></span>';
                        },
                    }
                    }
                ]
            };

            $that.on("init", function(event, slick){
                setTimeout(() => {
                    $(this).find(".carousel-item").removeAttr("tabindex");
                    $(this).find(".carousel-item").removeAttr("role");
                },200);
            })


            $that.on("afterChange breakpoint", function (event, slick) {
                slideCounter = $(this).find('.slick-active').attr("data-slick-index");
                slideCounter = parseInt(slideCounter, 10);
                slideCounter = slideCounter + 1;
                $(this).closest('.rc06').find('.slide-count').html(slideCounter + ' / ' + slick.slideCount);
                setTimeout(() => {
                    $(this).find(".carousel-item").removeAttr("tabindex");
                    $(this).find(".carousel-item").removeAttr("role");
                },200)
            });

            $that.slick(settings);

   //          $that.on('init setPosition', function (event, slick) {
   //          	slick.$slideTrack.find('.slick-slide').css('height', 'auto');
			// });


//             $that.on('setPosition afterChange init breakpoint', function (event, slick) {
// 				slick.$slideTrack.find('.slick-slide').css('height', slick.$slideTrack.height() + 'px');
// 
// 			});

            $(this).find('.o-crsl').on('click', '.slick-next, .slick-prev', function () {
                $(".slick-track div.carousel-item").attr("tabindex","-1");
                slideCounter = $(this).closest('.rc06').find('.slick-active').attr("data-slick-index");
                slideCounter = parseInt(slideCounter, 10);
                slideCounter = slideCounter + 1;
            });

            //Slick takes a while repositioning dots. This function hides the slide count to prevent artifacts while resizing.
            //Since all carousels need this, we don't need to specify a context. 
            var resizeId;

            $(window).resize(function () {
                $('.rw-rect').addClass('hide');
                clearTimeout(resizeId);
                resizeId = setTimeout(doneResizing, 200);
            });

            function doneResizing() {
                $('.rw-rect').removeClass('hide');
            }        

            $(".slick-next").click(function(){
                $("#aria-announcement").empty();
                setTimeout(() => {
                    $("#aria-announcement").append(`<p>Next 3 items</p>`);
                },50)
            });
            $(".slick-prev").click(function(){
                $("#aria-announcement").empty();
                setTimeout(() => {
                    $("#aria-announcement").append(`<p>Previous 3 items</p>`);
                },50)
            });

            // //Use generic-char-clamp.js to truncate title text at 85 characters
            // $(this).find('.rc06title').charClamp({size: 85});
            $(".slick-dots").keydown(function(e){
                if(e.which == 32 || e.which == 13){
                    e.preventDefault();
                }
                if(e.which == 39 || e.which == 37){
                    $('.slick-dots li button').each(function() {
                        if ($(this).attr('aria-selected') == 'true') {
                            $(this).focus();
                        } 
                    });
                }
            });
        }
        
    });
});


/*! RC07 */

(function($) {
	var component,
		_arrowPosition = {
			'desktop': ['rc07p1','rc07p2','rc07p3','rc07p4'],
			'smdesktop': ['rc07p1','rc07p2','rc07p3','rc07p4'],
			'tablet': ['rc07p1','rc07p3'],
			'mobile': ['rc07p1','rc07p3']
		},
		_itemsPerRow = {'desktop':4,'smdesktop':4,'tablet': 2,'mobile':1},
		_snippet = {
			'panel':'<div class="col-item rc07infopanel" tabindex="-1" role="region"><div class="rc07tri"></div><div class="rc07close icn-img icn-close beforewhite" role="button" tabindex="0" aria-label="Close Panel"></div><div class="col-item-w1"></div><button class="rc07exit"></button></div>',
			'downarrow':'<div class="rc07w3 icn-img icn-chevron-down"></div>'
		},
		_equalizeHt = function (context) {
			var floor = 0,
				ceiling = 0,
				ht = 0;
			$(context).find(".rc07w2 > .col-w1 > .col-item:not(.rc07infopanel) > .col-item-w1").removeAttr("style");
			$(context).find(".rc07w2 > .col-w1 > .col-item:not(.rc07infopanel) > .col-item-w1").each( function (i, w1) {
				if (ceiling == 0 || ceiling < i) {
					ceiling = _insertionPoint(w1)[0];

					// find greatest height in row
					for (var n = floor; n <= ceiling; n++) {
						if ($($(context).find(".rc07w2 > .col-w1 > .col-item:not(.rc07infopanel) > .col-item-w1")[n]).outerHeight() > ht) {
							ht = $($(context).find(".rc07w2 > .col-w1 > .col-item:not(.rc07infopanel) > .col-item-w1")[n]).outerHeight();
						}
					}
					//console.log(ht)
					// set each element height in row
					for (var n = floor; n <= ceiling; n++) {
						$($(context).find(".rc07w2 > .col-w1 > .col-item:not(.rc07infopanel) > .col-item-w1")[n]).css({height:ht});
					}
					//console.log(floor + ' - ' + ceiling);
					floor = ceiling + 1;
					ht = 0;
				}
			});
		},
		_getBreakpoint = function () {
			return window.getComputedStyle(document.querySelector('.rc07'), ':before').getPropertyValue('content').replace(/\"/g, '');
		},
		_initialize = function (context) {
			var injectionPoint;
			_equalizeHt(context);
			$(context).find(".col-item").each( function (i, anchor) {
				
				$(anchor).on("click", function (e) {
					
					// console.log(_getBreakpoint())
					e.preventDefault();
					_removePane($(anchor).closest(".col-w1").find(".rc07infopanel"));
					if ($(e.currentTarget).hasClass("rc07current")) {
						_setCurrentItem($(e.currentTarget),true);
					} else {
						injectionPoint = _insertionPoint(e.currentTarget);
						_setCurrentItem(e.currentTarget);
						_injectPane(anchor,injectionPoint);
					}
						
					if ($(".col-item").hasClass("rc07current")) {
						// setTimeout(function(){ 
							$(".col-item").closest(".col-w1").find(".rc07infopanel").attr('aria-label', dataId).find(".rc07close").focus();
							// console.log('click NO timeout 1000');
						// }, 1000);	
					}
				});
				
				$(anchor).on("keydown", function (e) {
					if (e.keyCode == 13 || e.keyCode == 32) {
						e.preventDefault();
						_removePane($(anchor).closest(".col-w1").find(".rc07infopanel"));
						if ($(e.currentTarget).hasClass("rc07current")) {
							_setCurrentItem($(e.currentTarget),true);
						} else {
							injectionPoint = _insertionPoint(e.currentTarget);
							_setCurrentItem(e.currentTarget);
							_injectPane(anchor,injectionPoint);
						}
						if ($(".col-item").hasClass("rc07current")) {
							$(".col-item").closest(".col-w1").find(".rc07infopanel").attr('aria-label', dataId).find(".rc07close").focus();
						}
					}
				});
				//Close Panel and move to next button when hidden button at end of panel focused
				$(context).on("focus", ".rc07exit", function (e) {			
					$(context).find(".rc07infopanel").remove();
					$(context).find(".rc07current").find('button').attr('aria-expanded', false);
					$(context).find(".rc07current").removeClass('rc07opened').removeClass('rc07current').next('.col-item').find('button').focus();
				});	

				//Close Button - On Click
				$(context).on("click", ".rc07close", function (e) {
					$(context).find('.rc07current button').focus();
					_setCurrentItem($(e.currentTarget),true);
					_removePane($(e.currentTarget).closest(".col-item"));

				});

				//Close Button - Enter and Space Bar
				$(context).on("keydown", ".rc07close", function (e) {
					
					if (e.keyCode == 13 || e.keyCode == 32) {
						e.preventDefault();
						$(context).find(".rc07infopanel").remove();
						$(context).find(".rc07current").removeClass('rc07opened').removeClass('rc07current').find('button').focus();
					}
					if (e.keyCode == 9) {
    					if(e.shiftKey) {
	       					e.preventDefault();
							$(context).find(".rc07infopanel").remove();
							$(context).find(".rc07current").removeClass('rc07opened').removeClass('rc07current').find('button').attr('aria-expanded', false).focus();
				    	}
					}

				});

				//Close rc07infopanel on escape Key
				$(context).keyup(function(e) {
					if (e.key === "Escape") {
						$(this).find(".rc07infopanel").remove();
						$(this).find(".rc07current").removeClass('rc07opened').removeClass('rc07current').find('button').focus();
					}
				});
				var dataId = $(this).attr("data-aria-label");
				if ($(this).attr("data-aria-label")) {
					// $(this).find('button > h4').attr('id', dataId);
					$(this).removeAttr("data-aria-label");
				}
			});

			// Look for rc07opened class. Open first panel on page load via trigger click event
			$(context).find(".rc07opened").first().trigger('click');	

		},
		_injectPane = function (context, target) {
			var parent = $(context).closest(".col-w1"),
				panel = $(_snippet.panel).clone(),
				content = $(context).find(".rc07content").html();
			$(panel).find(".col-item-w1").html(content);
			// determine dark if there's a darktheme
			if (!$(parent).closest(".rc07.darktheme")[0]) {
				$(panel).addClass("darktheme");
			}
			// add arrow positioning class
			$(panel).addClass(_arrowPosition[_getBreakpoint()][target[1]]);
			$(parent).find(".col-item:visible").not(".rc07infopanel").eq(target[0]).after(panel);
		},
		/*
		 * Returns array containing two elements: 
		 * 0: index where info panel should be injected relative to all visible items
		 * 1: index of the clicked tile relative to its row
		 */
		_insertionPoint = function (context) {
			var cols = _itemsPerRow[_getBreakpoint()],
				index = $(context).closest('.col-item').index(),
				visMax = $(context).closest('.col-w1').find('.col-item:visible').length,
				visIndex,
				visPos,
				visRow,
				visRowLast,
				visPoint,
				slot;
			// find index of selected item relative to all visible items
			for (var i = 0; i < visMax; i++) {
				if ($($(context).closest('.col-w1').find('.col-item:visible')[i]).index() == index) {
					visIndex = i;
					break;
				}
			}

			// calculate row of selected tile among all visible tiles
			visRow = Math.ceil((visIndex + 1) / cols);

			// calculate total number of visible rows
			visRowLast = Math.ceil(visMax / cols);

			// set the injection point at the last tile when the info panel will create a new row
			visPoint = visRow == visRowLast ? (visMax - 1) : (cols * visRow) - 1;
			
			// convert visible item index to one that is relative to all items, visible or not
			actualPoint = $($(context).closest('.col-w1').find('.col-item:visible')[visPoint]).index();
			
			// index of item relative to items in row
			slot = visIndex % cols;
			
			//console.log('visindex: ' + visIndex + ', visrow: ' + visRow + ', vispoint: ' + visPoint + ', vismax: ' + (visMax - 1) + ', visrowlast: ' + visRowLast + ', actualpoint: ' + actualPoint);
			//console.log([actualPoint,slot])
			return [actualPoint,slot];
		},
		_removePane = function (context) {
			$(context).remove();
		},
		_setCurrentItem = function (context, remOnly) {
			// $(context).closest(".col-w1").find(".rc07current").removeClass("rc07current").removeClass("rc07opened").find('button').attr('aria-current', false).attr('aria-expanded', false);
			$(context).closest(".col-w1").find(".rc07current").removeClass("rc07current").removeClass("rc07opened").find('button').attr('aria-expanded', false);
			if (remOnly) {return}
			// $(context).closest(".col-item").addClass("rc07current").find('button').attr('aria-current', true).attr('aria-expanded', true);
			$(context).closest(".col-item").addClass("rc07current").find('button').attr('aria-expanded', true);
		};
	component = function rc07($) {
		$('.rc07').find(".rc07w2 > .col-w1 > .col-item:not(.rc07infopanel) > .col-item-w1").append(_snippet.downarrow);

		$('.rc07').each( function (i, rc07) {
			_initialize(rc07);
		});
		// bind once
		var windowWidth = $(window).width();
		$(window).off('resize.rc07').on('resize.rc07', function (e) {
			if (windowWidth != $(window).width()) {
				windowWidth = $(window).width();
				if ($(".rc07").find('.rc07close')[0]) {
					$(".rc07").find('.rc07close').trigger('click');
				}
				if ($(".rc07").find(".rc07current")[0]) {
					$(".rc07").find(".rc07current").removeClass("rc07current");
				}
				$(".rc07").each( function (i, rc07) {
					_equalizeHt(rc07);
				});
			}
		});

	};
	OCOM.register(component);
})(jQuery);


/*! RC08 */
OCOM.register(function rc08($) {
	"use strict";
	var Timeline = {
		initialize: function initialize() {
			this.$carousel = $('.rc08carousel');
			this.$slides = $('.rc08carousel-item');
			this.$pagination = $('.rc08pagination');
			this.slick = null;
			this.state = {
				numSlides: 0,
				posPerSlide: 0,
				curSlide: 0,
				isSliderMoving: false
			};
			this.classes = {
				isLeft: 'is-left',
				isActive: 'is-active',
				isCurrent: 'is-current',
				isRight: 'is-right'
			};
			this.addEventListeners();
			this.initSlick();
			this.initDataValues();
			this.initA11y();
		},
		initDataValues:  function initDataValues() {
			Array.from(this.$slides, (element, index) => {
				if (index != this.$slides.length) {
					element.setAttribute("data-value", index + 1);
				}
			});
		},
		initSlidesA11y: function initSlidesA11y() {
			const wrapperSlides = this.$carousel.find('.slick-track');
			if (wrapperSlides.length > 0) {
				wrapperSlides[0].setAttribute("role", "list");
			}

			Array.from(this.$slides, element => {
				element.removeAttribute("aria-hidden");
				element.removeAttribute("tabindex");
				element.setAttribute("role", "listitem");
			});
		},
		initSliderA11y: function initSliderA11y(value) {
			const ariaText = this.$carousel.find(`[data-value=${value}]`)[0].innerText.replaceAll('\n\n', ' ');
			this.$pagination[0].setAttribute('aria-valuetext', ariaText);
			this.$pagination[0].setAttribute('aria-valuenow', value);
		},
		initA11y: function initA11y() {
			this.initSlidesA11y();
			this.initSliderA11y(1);
			this.$pagination.find('.ui-slider-handle')[0].removeAttribute('tabindex');
			this.$pagination[0].setAttribute('aria-label', 'timeline');
		},
		sliderMoveTo: function sliderMoveTo(currentSlide) {
			this.slick.slickGoTo(currentSlide);
			var setPos = currentSlide * this.state.posPerSlide + this.state.posPerSlide / 2;
			this.$pagination.slider('value', setPos);
		},
		addEventListeners: function addEventListeners() {
			this.$carousel.on('init', function (e, slick) {
				this.initPagination(e, slick);
				var curIndex = this.$carousel.find('.slick-current').index();
				this.setSlideClasses(curIndex);
				$(document).trigger("slick.init",[".rc08carousel"]);
			}.bind(this));
			this.$carousel.on('setPosition', function (e, slick) {
				this.state.curSlide = this.slick.currentSlide;
				this.setSliderPos();
			}.bind(this));
			this.$carousel.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
				this.setSlideClasses(nextSlide);
			}.bind(this));

			this.$carousel.on('setPosition', function (e, slick) {
				this.state.curSlide = this.slick.currentSlide;
				this.setSliderPos();
			}.bind(this));

			this.$pagination.on('pointerup', function(e, slick) {
				this.initSliderA11y(this.state.curSlide);
			}.bind(this));

			this.$pagination.on('keydown', function (e, slick) {
				let currentSlide = this.state.curSlide;
				switch(e.keyCode) { 
					// right arrow
					case 39:
						currentSlide = currentSlide + 1;		
						this.sliderMoveTo(currentSlide);
						this.initSliderA11y(currentSlide);
						break;
					// up arrow
					case 38:
						currentSlide = currentSlide + 1;		
						this.sliderMoveTo(currentSlide);
						this.initSliderA11y(currentSlide);
						break;
					// left arrow
					case 37:
						currentSlide = currentSlide - 1;
						if (currentSlide === 0) {
							currentSlide = 1;
						}		
						this.sliderMoveTo(currentSlide);
						this.initSliderA11y(currentSlide);
						break;
					// down arrow
					case 40:
						currentSlide = currentSlide - 1;		
						this.sliderMoveTo(currentSlide);
						this.initSliderA11y(currentSlide);
					break;
					// home
					case 36:
						currentSlide = 1;		
						this.sliderMoveTo(currentSlide);
						this.initSliderA11y(currentSlide);
					break;
					// end
					case 35:
						currentSlide = 23;		
						this.sliderMoveTo(currentSlide);
						this.initSliderA11y(currentSlide);
					break;
					//page Up
					case 33:
						currentSlide = currentSlide + 5;	
						if (currentSlide > 23) {
							currentSlide = 23;
						}	
						this.sliderMoveTo(currentSlide);
						this.initSliderA11y(currentSlide);
					break;
					//page down
					case 34:
						currentSlide = currentSlide - 5;
						if (currentSlide < 0) {
							currentSlide = 1;
						}			
						this.sliderMoveTo(currentSlide);
						this.initSliderA11y(currentSlide);
					break;
				}
			}.bind(this));
		},
		initSlick: function initSlick() {
			this.$carousel.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				initialSlide: 1,
				centerMode: true,
				centerPadding: 0,
				infinite: false,
				dots: false,
				arrows: false,
				swipeToSlide: true,
				variableWidth: true,
				focusOnChange: true,
				responsive: [{
					breakpoint: 974,
					settings: {
					centerMode: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 0,
					variableWidth: true
					}
				}, {
					breakpoint: 600,
					settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
					variableWidth: true
					}
				}]
			}).bind(this);
		},
		initPagination: function initPagination(e, slick) {
			this.slick = slick;
			this.state.numSlides = this.slick.slideCount;
			this.state.posPerSlide = 100 / this.state.numSlides;
			this.state.curSlide = this.slick.currentSlide;
			this.$pagination.slider({
				value: this.state.curSlide * this.state.posPerSlide + this.state.posPerSlide / 2,
				slide: function (e, ui) {
					this.onSliderMove(e, ui);
				}.bind(this),
				stop: function (e, ui) {
					this.onSliderEnd(e, ui);
				}.bind(this)
			}).bind(this);
		},
		onSliderMove: function onSliderMove(e, ui) {
			this.state.isSliderMoving = true;
			var dragPos = ui.value;
			this.state.curSlide = Math.floor(dragPos / this.state.posPerSlide);
			this.setSlickPos();
		},
		onSliderEnd: function onSliderEnd(e, ui) {
			this.state.isSliderMoving = false;
			var dragPos = ui.value;
			this.state.curSlide = Math.floor(dragPos / this.state.posPerSlide);
			this.setSliderPos();
			this.setSlickPos();
		},
		setSliderPos: function setSliderPos() {
			var goTo = this.state.curSlide;
			var setPos = goTo * this.state.posPerSlide + this.state.posPerSlide / 2;
			this.$pagination.slider('value', setPos);
			this.initSlidesA11y();
		},
		setSlickPos: function setSlickPos() {
			if (!this.state.isSliderMoving) {
				this.slick.slickGoTo(this.state.curSlide);
			}
		},
		setSlideClasses: function setSlideClasses(slideToIndex) {
			this.$slides.each(function(i, item) {
				var $curItem = $(item);
				$curItem.removeClass(this.classes.isLeft);
				$curItem.removeClass(this.classes.isActive);
				$curItem.removeClass(this.classes.isCurrent);
				$curItem.removeClass(this.classes.isRight);
				if (i === slideToIndex) {
					$curItem.addClass(this.classes.isCurrent);
				}
				if (i === slideToIndex - 1 || i === slideToIndex + 1) {
					$curItem.addClass(this.classes.isActive);
				}
				if (i < slideToIndex) {
					$curItem.addClass(this.classes.isLeft);
				}
				if (i > slideToIndex) {
					$curItem.addClass(this.classes.isRight);
				}
			}.bind(this));
		}
	};
	
	function equalizeHt(context) {
		var tallest = 0,
			tallestTop = 80,
			mtop = 0;
		// Get height of tallest top container
		$(context).find(".rc08item-top").removeAttr("style");
		$(context).find(".rc08item-top .rc08item-anim").each( function (i,item) {
			if ($(item).height() > tallestTop) {
				tallestTop = $(item).outerHeight();
			}
		});
		// Use css variable to set the top of .rc08carousel-item:before
		$(context).find(".rc08w1").css({"--bar-height":tallestTop + "px"});
		// Set .rc08item-top heights
		$(context).find(".rc08item-top").css({height:tallestTop});
		$(context).find(".rc08item-top .rc08item-thumb img").css({"max-height":tallestTop - 2});
		// Some carousel items have a top padding that needs to be preserved
		$(context).find(".rc08item").each( function (i,item) {
			if (parseInt($(item).css("padding-top")) > 0) {
				mtop = parseInt($(item).css("padding-top"));
				return;
			}
		});

		$(context).find(".rc08item").removeAttr("style");
		$(context).find(".rc08item").each( function (i,item) {
			//console.log(i + ':' + $(item).outerHeight())
			if ($(item).height() > tallest) {
				tallest = $(item).height();
			}
		});
		// Set height of .rc08item; accommodate items that have a top padding
		$(context).find(".rc08item").each( function (i,item) {
			if (parseInt($(item).css("padding-top")) > 0) {
				$(item).css({height:tallest});
			} else {
				$(item).css({height:tallest + mtop});
			}
		});
	}
	function imageSizeCheck() {
		if ($(".rc08item [data-src]")[0]) {
			window.setTimeout(imageSizeCheck,20);
		} else {
			$(".rc08").each( function (i,rc08) {equalizeHt(rc08)});
		}
	}
	imageSizeCheck();
	$(window).off('resize.rc08').on('resize.rc08', function (e) {
		imageSizeCheck();
	});
	Timeline.initialize();
});


/*! RC13 */
OCOM.register(function rc13($) {
	'use strict';	

	$('.rc13').each(function() {

		var rc13adapt = function rc13adapt() {
			$('.rc13 .col-item-w1 h3').equalHeight();
		}
		setTimeout(function(){
			rc13adapt();
		},10);

		window.addEventListener('resize', rc13adapt);

	});
});

/*! RC22 */
OCOM.register(function rc22($) {
	'use strict';

	$('.rc22v1[data-feedsrc]').each(hbsCheck);

	/* globals propertyExists, objLoaded */
	function hbsCheck() {
		return (
			objLoaded('HBSINJECT', 'initialize') &&
			propertyExists(this, 'data-feedsrc') &&
			propertyExists(this, 'data-template') &&
			init.call(this) ||
			setTimeout(hbsCheck.bind(this), 10)
		);
	}

	function init() {

		var $rc22 = $(this),
				$rc22w2 = $rc22.find('.ofeed'),
				feedsrc = $rc22.attr('data-feedsrc'),
				template = $rc22.attr('data-template');

		window.HBSINJECT.initialize({
			feedsrc: feedsrc,
			targetObj: $rc22w2,
			templateName: template,
			beforeInjectionCallback: prepJSON,
			afterInjectionCallback: $rc22w2.addClass.bind($rc22w2, 'hbs-initialized')
		});

		return this;
	}

	function prepJSON(json) {
		return (
			'object' === typeof json &&
			'contents' in json &&
			'records' in json.contents[0] &&
			json.contents[0].records.length &&
			{ records: json.contents[0].records.map(mapRecord) }
		);
	}

	function mapRecord(record) {
		return (
			'object' === typeof record &&
			'attributes' in record &&
			{
				date: record.attributes.DisplayDate,
				title: record.attributes.Title,
				description: record.attributes.Description,
				url: record.attributes.DisplayURL
			}
		);
	}
});





/*! RC24 */
$(document).ready( function () {

	// fallback for old code
	$('figure img.rc24img-lg').each(function(){
		$(this).removeClass('rc24img-lg');
		$(this).closest('figure').addClass('rc24img-lg');
	});

	// fallback for old code
	$('figure img.rc24img-sm').each(function(){
		$(this).removeClass('rc24img-sm');
		$(this).closest('figure').addClass('rc24img-sm');
	});

});

/*! RC29 */
OCOM.register(function rc29($) {
  "use strict";

  // v2 (universal for all content types, as well as WCS and OCM)
  const rc29 = document.querySelectorAll(".rc29.rc29v2");
  const MAX_NUM_ARTICLES = 3; //0-based

  //Formats given date into System Locale
  const dateFormatter = (date) => {
	let inputDate = new Date(date);
	const options = {
	  month: "long",
	  day: "numeric",
	  year: "numeric",
	};
	const userLocale = navigator.language;
	const outputDate = inputDate.toLocaleDateString(userLocale, options)

	return outputDate;
  }

  if (rc29.length) { 
	rc29.forEach(cmp => {
    let markup = "";
    const jsonFeed = fetch(cmp.getAttribute("data-feedsrc"))
      .then((response) => response.json())
      .then((jsonFeed) => {

        // Check if the feed is an array, which identfieis Compendium feeds
        if (Array.isArray(jsonFeed)) {
          markup = "<ul>";
          jsonFeed.map((entry, i) => {
            if (i <= MAX_NUM_ARTICLES) {
              markup += `<li><strong>${dateFormatter(entry.publish_date)}</strong><a href=${entry.web_url}>${entry.title}</a></li>`;
              i++;
            }
          });
          markup += "</ul>";
        }

        // Check if the feed has an "rss" property, which identifies Blog feeds
        else if (jsonFeed.rss) {
		  markup = "<ul>";
          jsonFeed.rss?.channel?.item?.map((entry, i) => {
            if (i <= MAX_NUM_ARTICLES) {			
              markup += `<li><strong>${dateFormatter(entry.pubDate)}</strong><a href=${entry.link}>${entry.title}</a></li>`;
              i++;
            }
          });			  
        }

        // Check if the feed has a "contents" property, which identifies Newsroom feeds
        else if (jsonFeed.contents) {
		  markup = "<ul>";
          jsonFeed.contents[0]?.records?.map((entry, i) => {
            if (i <= MAX_NUM_ARTICLES) {
              markup += `<li><strong>${entry.attributes?.DisplayDate[0]}</strong><a href=${entry.attributes?.DisplayURL[0]}>${entry.attributes?.Title[0]}</a></li>`;
              i++;
            }
          });		  
        }

        // If none of the above conditions match, assume it's an object
        else {
          console.warn(
            `The JSON provided in data-feedsrc doesn't match a recognized format`
          );
        }

        // Log the detected JSON type to the console and inject resulting markup
        cmp.querySelector(".rfeed").innerHTML = markup;
      });
	})
  } else {
    $(".rc29[data-feedsrc]").each(hbsCheck);

    /* globals propertyExists, objLoaded */
    function hbsCheck() {
      return (
        (objLoaded("HBSINJECT", "initialize") &&
          propertyExists(this, "data-feedsrc") &&
          propertyExists(this, "data-template") &&
          init.call(this)) ||
        setTimeout(hbsCheck.bind(this), 10)
      );
    }

    function init() {
      var $rc29 = $(this),
        $rc29feed = $rc29.find(".rfeed"),
        feedsrc = $rc29.attr("data-feedsrc"),
        template = $rc29.attr("data-template");

      if (feedsrc.includes("blogfeed")) {
        window.HBSINJECT.initialize({
          feedsrc: feedsrc,
          targetObj: $rc29feed,
          templateName: template,
          beforeInjectionCallback: prepBlogs.bind($rc29),
          afterInjectionCallback: $rc29feed.addClass("hbs-initialized"),
        });
      }

      if (feedsrc.includes("newsroom")) {
        window.HBSINJECT.initialize({
          feedsrc: feedsrc,
          targetObj: $rc29feed,
          templateName: template,
          beforeInjectionCallback: prepNewsroom.bind($rc29),
          afterInjectionCallback: $rc29feed.addClass("hbs-initialized"),
        });
      }

      if (feedsrc.includes("compendium")) {
        window.HBSINJECT.initialize({
          feedsrc: feedsrc,
          targetObj: $rc29feed,
          templateName: template,
          beforeInjectionCallback: prepCompendium.bind($rc29),
          afterInjectionCallback: $rc29feed.addClass("hbs-initialized"),
        });
      }

      return this;
    }

    function prepCompendium(json) {
      //console.log('compendium json',json);
      return (
        "object" === typeof json &&
        json.length && { records: json.map(mapCompendiumRecord) }
      );
    }

    function prepBlogs(json) {
      //console.log('blogs json',json);
      return (
        "object" === typeof json &&
        "rss" in json &&
        "channel" in json.rss &&
        "item" in json.rss.channel &&
        json.rss.channel.item.length && {
          records: json.rss.channel.item.map(mapBlogRecord),
        }
      );
    }

    function prepNewsroom(json) {
      //console.log('newsroom json',json);
      return (
        "object" === typeof json &&
        "contents" in json &&
        "records" in json.contents[0] &&
        json.contents[0].records.length && {
          records: json.contents[0].records.map(mapNewsroomRecord),
        }
      );
    }

    function mapCompendiumRecord(record) {
      return (
        "object" === typeof record && {
          date: record.publish_date,
          title: record.title,
          url: record.web_url,
        }
      );
    }

    function mapNewsroomRecord(record) {
      return (
        "object" === typeof record &&
        "attributes" in record && {
          date: record.attributes.DisplayDate,
          title: record.attributes.Title,
          url: record.attributes.DisplayURL,
        }
      );
    }

    function mapBlogRecord(record) {
      return (
        "object" === typeof record && {
          date: record.pubDate,
          title: record.title,
          url: record.link,
        }
      );
    }
  }
});


/*! RC30 */
OCOM.register(function rc30($) {
	'use strict';

	var breakpoint = getBreakpoint(),
		compatTimeEnd,
		downState = false,
		endX,
		factor = 0.75,
		focusables = "a,input,button,select",
		frame,
		moveFrame,
		padding = 40,
		scrollDecay = 10,
		scrollLeft,
		scrollTolerance = 1,
		scrollTop,
		singleFrame = 1/60, //60 frames/sec
		slider,
		snippet = {},
		speedLimit = 250,
		startX,
		startY,
		timeEnd,
		timeStart,
		v1,v2,

		teststarttime;

	function adjustColorCls(context,index) {
		var c = [],
			l,
			matches,
			pattern = /rw-[^-]+-[0-9]+bg/;
		$(context).find(".rc30pane > .col2 > .col-w1 > .col-item:first-child").each( function (i, item) {
			c = $(item).get(0).className.split(/\s+/);
			for (var j = 0; j < c.length; j++) {
				matches = c[j].match(pattern);
				if (matches) {
					$(item).removeClass(matches[0]);
					$(item).closest(".rc30pane").addClass(matches[0]);
					break;
				}
			}

		});

	}
	function buildNav(context,index) {
		var bgcolor,
			color,
			nav = $('<div class="rc30nav"></div>'),
			$optgroups = $(context).find(".rc30mobnav optgroup"),
			paneHead;
		if ($optgroups[0]) {
			nav.addClass("rc30groups");
			$optgroups.each( function (i,group) {
				if ($(group).attr("label")) {
					nav.append($("<h3 class=\"rc30grpname\">").text($(group).attr("label")));
				}
				buildNavTabs(context,nav,group,i,index);
			});
		} else {
			buildNavTabs(context,nav,$(context).find(".rc30mobnav"),0,index);
		}
		if (nav.find("li")[0]) {
			$(context).find(".rc30w2").append(nav);
			$(context).find(".rc30nav a").on("click", function (e) {
				e.preventDefault();
				pushTab(e.currentTarget);
				navEvent(context,e.currentTarget);
			});
		}
		$(context).on("click",".rc30mobtitle a", function (e) {
			e.preventDefault();
			navEvent(context,e.currentTarget);
		});
		if (!$(context).find(".rc30nav li.rc30active")[0]) {
			//$(context).find(".rc30nav li:first-child").addClass("rc30active").addClass("rc30active-added");
			navEvent(context,$(context).find(".rc30nav ul:first li:first-child a"));
		}
		bgcolor = $(context).find(".rc30nav li.rc30active a").css("background-color");
		color = $(context).find(".rc30nav li.rc30active a").css("color");
		$(context).find(".rc30nav li.rc30active-added").removeClass("rc30active").removeClass("rc30active-added");

//		$(context).find(".rc30mobtitle").css({"background-color":bgcolor,"color":color})
		$(context).find(".rc30mobtitle").attr('style',"background-color:"+bgcolor+" !important; color:"+color+" !important");

		/*
		// form select element no longer interactive
		nav.siblings(".rc30mobnav").find("select").on("change", function (e) {
			e.preventDefault();
			$(e.currentTarget).closest(".rc30mobnav").siblings(".rc30nav").find('a[href="' + $(e.currentTarget).val() + '"]').trigger("click");
			$(e.currentTarget).blur();
		});
		*/
	}
	function buildNavTabs(context,nav,group,groupIndex,index) {
		var grpIdxStr = "_" + groupIndex,
			isV2 = $(context).hasClass("rc30v2"),
			li,
			title,
			ul = $("<ul role=\"tablist\" aria-orientation=\"vertical\"></ul>"),
			value;
		
		$(ul).addClass("rc30grp" + groupIndex);
		
		nav.append(ul);
		$(group).find("option").each( function (i,opt) {
			title = $(opt).text();
			value = $(opt).attr("value");
			// generate desktop tabs
			if (title && value) {
				li = $("<li role=\"none\"></li>");
				if (isV2) {
					li.append('<a href="' + value + '" id="rc30t' + index + grpIdxStr + '_' + i + '" role="tab" tabindex="-1" aria-selected="false" aria-controls="' + value.replace("#","") + '"><h3><span>' + title + '</span></h3></a>');
				} else {
					li.append('<a href="' + value + '" id="rc30t' + index + grpIdxStr + '_' + i + '" role="tab" tabindex="-1" aria-selected="false" aria-controls="' + value.replace("#","") + '"><span>' + title + '</span></a>');
				}
				

				$(value).attr("role","tabpanel").attr("aria-labelledby","rc30t" + index + grpIdxStr + "_" + i).attr("aria-hidden","true");
				nav.find("ul.rc30grp" + groupIndex).append(li);
			}
			if (i == 0 && $(group).attr("label")) {
				$(context).find(value).before($("<h3>").addClass("rc30grpname").text($(group).attr("label")));
			}
			$(context).find(value).prepend("<h3 class=\"rc30mobtitle\"><a id=\"rc30b" + index + grpIdxStr + '_' + i + "\" role=\"button\" class=\"icn-img icn-nav-down\" aria-expanded=\"false\">" + title + "</a></h3>");
			$(context).find(value).children("div").attr("aria-labelledby","rc30b" + index + grpIdxStr + '_' + i);
		});
	}
	function directLink(context,targetPanelId) {
		var str,
			target;
		if (targetPanelId && $(context).find("#"+targetPanelId)[0]) {
			str = ".rc30nav li a[href=\"#" + targetPanelId + "\"]";
		} else {
			// set first tab by default
			str = ".rc30nav li:first a";
		}
		target = $(context).find(str);
		navEvent(context,target);
	}
	function equalizeHeight(rc30) {
		var breakpoint = getBreakpoint();
		if(!rc30){
			rc30 = $(".rc30");
		}

		rc30.each( function(i, context) {
			var	cntHt = 0,
				headHt = 0,
				hMinHt = 0,
				isV1 = $(context).hasClass("rc30v1"),
				isV2 = $(context).hasClass("rc30v2"),
				maxHt = 0,
				minHt = 0,
				navHt = 0,
				target,
				targetHt;

			// determine target content container
			if (isV1 || isV2){
				target = $(context).find(".rc30w3 .rc30w4");
				$(context).find(".rc30w3 .rc30w4 .col-framework").css({"height":""});
			} else if (breakpoint == "mobile"){
				target = $(context).find(".rc30w3 .rc30w4");
				$(context).find(".rc30w3 .rc30w4 .col-framework > .col-w1").css({"min-height":""});
				$(context).find(".rc30w3 .rc30w4 .col-framework").css({"height":""});
			} else {
				$(context).find(".rc30w3 .rc30w4 .col-framework").css({"height":""});
				target = $(context).find(".rc30w3 .rc30w4 > .col-framework > .col-w1");
			}

			target.css({"min-height":0});
 			target.closest('.rc30w3').css({"min-height":0});

			if (breakpoint == "mobile") {
/*
				//targetHt = target.outerHeight();
				target.each( function (i,t) {
					var head = $(t).find(".rc30mobtitle"),
						body = $(t).children(".col-framework");

//					if (isV1 && $(t).outerHeight() > maxHt) {
//						maxHt = $(t).outerHeight();
//					} else if ($(t).closest(".").outerHeight() > maxHt) {
//						maxHt = $(t).outerHeight();
//					}

					if ($(t).outerHeight() > maxHt) {
						maxHt = $(t).outerHeight();
					}
					if (head && body) {
						head.css({"min-height":0});
						headHt = head.outerHeight();
						if (headHt > hMinHt) {
							hMinHt = headHt;
						}
					}	
				});
				if (hMinHt > 0) {
					target.find(".rc30mobtitle").css({"min-height":hMinHt});
//					if (isV1) {
						target.children(".col-framework").css({"height":maxHt - hMinHt});
//					} else {
//						target.children(".col-framework").css({"height":targetHt - hMinHt});
//					}
				}
*/
			} else {
				target.each( function (i,t) {
					cntHt = $(t).outerHeight();
					if (cntHt > minHt) {
						minHt = cntHt;
					}
				});

				// establish nav height
				navHt = $(context).find(".rc30w2").outerHeight() + padding;

				if (navHt > minHt) {
					minHt = navHt;
				}
 				target.closest('.rc30w3').css({"min-height":minHt});
				target.css({"min-height":minHt});
			}

		});

	}
	function indexSlides (context) {
		var slideAr = [];
		$(context).find(".rc30w4").each( function (i,slide) {
			slideAr.push($(slide).offset().left);
		});
		$(context).attr("data-slides",slideAr.join(","));
	}
	function getBreakpoint() {
		return window.getComputedStyle(document.querySelector('.rc30'), ':after').getPropertyValue('content').replace(/\"/g, '');
	}
	function initialize(context,i) {
		$(context).find("form").attr("tabindex","-1");
		$(context).find("form select").attr("tabindex","-1").attr("aria-hidden","true");
		$(context).attr("data-instance",i);
		// set default exposure of pane content
		makeUnfocusable(breakpoint,$(context).find(".rc30pane").find(focusables));
		//  build desktop nav and add pane titles for mobile
		buildNav(context,i);
		if ($(context).hasClass("rc30v1") || $(context).hasClass("rc30v2")) {
			adjustColorCls(context,i);
		}
		// add outer wrapper for mobile scrolling
		if (breakpoint == "mobile") {
			$(context).find(".rc30w3").wrap("<div class=\"rc30mobwrap\"></div>");
		}
		//$(context).find(".rc30pane > div.col-framework").prepareHeightTransition();

	}
	function makeBleed() {

		var w = 0,
			p = 0,
			padding,
			margin,
			mode = 0,
			obj = {},
			current,
			dir;		
		$(".rc30").each( function(i, context) {
			if ($(context).find(".rc30pane-bleed")[0]) {
				current = false;
				dir = "right";
				padding = parseInt($(context).find(".rc30w1").css("padding-" + dir));
				margin = parseInt($(context).find(".rc30w1").css("margin-" + dir));

				if (padding == 0 && margin == 0) {
					//assumes symmetrical margin/padding
					p = parseInt(($(context).width() - $(context).find(".rc30w1").width()) / 2);
					mode = 0;
				} else {
					p = padding + margin;
					mode = 1;
				}

				if (getBreakpoint() == "mobile") {
					$(context).find(".rc30pane-bleed").each(  function(j,bleed) {
						$(bleed).removeAttr("style");
					});
					$(context).find(".rc30mobwrap").removeAttr("style");
					//w = p + $(context).find(".rc30mobwrap").width();
					//$(context).find(".rc30mobwrap").css({width:w});
				} else {
					$(context).find(".rc30pane-bleed").each(  function(j,bleed) {
						current = $(bleed).hasClass("rc30activepane") ? true : false;
						//$(bleed).removeAttr("style").addClass("rc30activepane");
						$(bleed).css({"width":""}).addClass("rc30activepane");
						w = p + $(bleed).width();

						$(bleed).css({"width":w});
						if (!current) {$(bleed).removeClass("rc30activepane")}

						// emulate cwidth value for large breakpoint
						obj = {};
						if (($(bleed).hasClass("rc30pane4") || $(bleed).hasClass("rc30pane5") || $(bleed).hasClass("rc30pane6")) && getBreakpoint() == "desktop-lg") {
							obj["margin-" + dir] = p;
						} else {
							obj["margin-" + dir] = "";
						}
						$(bleed).find(".col-title .rc30w14").css(obj);
						if ($(bleed).hasClass("rc30pane5")) {
							$(bleed).find(".col-item-w1.rc30w10").css(obj);
						} else if ($(bleed).hasClass("rc30pane6")) {
							$(bleed).find(".col-item-w1.rc30smallimg > div").css(obj);
						}
					});
				}
			}
		});

	}
	function makeFocusable(bp,collection) {
		$(collection).each( function(i, item) {
			var savedtabindex = $(item).attr("data-savedtabindex");
			if (savedtabindex) {
				$(item).attr("tabindex",savedtabindex);
			} else {
				$(item).removeAttr("tabindex");
			}
		});
	}
	function makeUnfocusable(bp,collection) {
		$(collection).each( function(i, item) {
			var savedtabindex = $(item).attr("data-savedtabindex"), 
				tabindex = $(item).attr("tabindex");
			if (tabindex && tabindex !== savedtabindex) {
				$(item).attr("data-savedtabindex",tabindex);
			} else {
				if (bp == "mobile" && $(item).is(".rc30mobtitle a")) {
					$(item).attr("tabindex","0");
				} else {
					$(item).attr("tabindex","-1");
				}
			}
		});
	}
	function navEvent(context,currentTarget) {
		var bp = getBreakpoint(),
			$btnTarget,
			$navTarget,
			$targetPane,
			targetPane;
		// desktop and mobile nav should be updated at the same time so they are in sync
		if ($(currentTarget).closest(".rc30nav")[0]) {
			$navTarget = $(currentTarget);
			$btnTarget = $($navTarget.attr("href")).find(".rc30mobtitle a");
		} else {
			$btnTarget = $(currentTarget);
			$navTarget = $(context).find(".rc30nav a[href=\"#" + $btnTarget.closest(".rc30pane").attr("id") + "\"]");
		}
		targetPane = $navTarget.attr("href");

		if (bp == "mobile") {
			// all panes can be closed simultaneously since they display accordian content rather than tab content
			if ($btnTarget.closest(".rc30activepane")[0]) {
				// close current accordian segment

				makeUnfocusable(bp,$btnTarget.closest(".rc30pane").find(focusables));
				$btnTarget.closest(".rc30activepane").removeClass("rc30activepane");
				$btnTarget.closest(".rc30mobtitle").siblings("div.col-framework").attr("aria-hidden","true");
				$btnTarget.attr("aria-expanded","false");
				$navTarget.closest(".rc30nav").find(".rc30active").removeClass("rc30active");

			} else {
				// de-expose previous pane
				$btnTarget.closest(".rc30pane").siblings(".rc30activepane").find(".rc30mobtitle a").attr("aria-expanded","false");
				$btnTarget.closest(".rc30pane").siblings(".rc30activepane").children("div.col-framework").attr("aria-hidden","true");
				// de-expose previous tab
				$navTarget.closest(".rc30nav").find(".rc30active").children("a").attr("aria-selected","false").attr("tabindex","-1");
				$navTarget.closest(".rc30nav").find(".rc30active").removeClass("rc30active");
				// expose current button
				$btnTarget.attr("aria-expanded","true");
				// expose current tab
				$navTarget.closest("li").addClass("rc30active");
				// if the pane exists...

				if (targetPane && $(targetPane)[0]) {
					// hide previous pane
					makeUnfocusable(bp,$(targetPane).siblings(".rc30pane.rc30activepane").find(".rc30mobtitle a").find(focusables));
					//$(targetPane).siblings(".rc30pane.rc30activepane").find(".rc30mobtitle a").attr("aria-hidden","true");
					$(targetPane).siblings(".rc30pane.rc30activepane").removeClass("rc30activepane");

					// unhide current pane
					$(targetPane).addClass("rc30activepane");
					$(targetPane + " > div.col-framework").attr("aria-hidden","false");
					makeFocusable(bp,$(targetPane + " > div.col-framework").find(focusables));
				}

			}
		} else {
			if (!$btnTarget.closest(".rc30activepane")[0]) {
				// de-expose previous pane
				$btnTarget.closest(".rc30pane").siblings(".rc30activepane").attr("aria-expanded","false");
				// de-expose previous tab
				$navTarget.closest(".rc30nav").find(".rc30active").children("a").attr("aria-selected","false").attr("tabindex","-1");
				$navTarget.closest(".rc30nav").find(".rc30active").removeClass("rc30active");

				// expose current tab
				$navTarget.attr("aria-selected","true").attr("tabindex","0");
				$navTarget.closest("li").addClass("rc30active");
				// if the pane exists...
				if (targetPane && $(targetPane)[0]) {

					$(targetPane).siblings(".rc30pane.rc30activepane").attr("aria-hidden","true");
					$(targetPane).attr("aria-hidden","false");
					
					// hide previous pane
					makeUnfocusable(bp,$(targetPane).siblings(".rc30pane.rc30activepane").find(focusables));
					$(targetPane).siblings(".rc30pane.rc30activepane").removeClass("rc30activepane");

					// unhide current pane
					$(targetPane).addClass("rc30activepane");
					$(targetPane).attr("aria-expanded","true");
					makeFocusable(bp,$(context).find(targetPane).find(focusables));
				}

			}
		}
	}
	function navigateTabs(e,dir) {
		var components = document.querySelectorAll(".rc30"),
			context,
			currentTabIdx,
			step = dir < 0 ? -1 : 1,
			tabs,	
			targetIdx;
		if (getBreakpoint() == "mobile") {
			// no tabs in mobile
			return;
		}
		for (var i = 0; i < components.length; i++) {
			// if a node in rc30 has focus
			if (components.item(i).contains(document.activeElement)) {
				e.preventDefault();
				context = components.item(i);
				tabs = context.querySelectorAll(".rc30nav li a");
				currentTabIdx = Array.prototype.indexOf.call(tabs, context.querySelector(".rc30nav .rc30active a"));
				if (currentTabIdx > -1) {
					targetIdx = currentTabIdx + step;
					if (targetIdx < 0) {
						targetIdx = tabs.length - 1;
					} else if (targetIdx >= tabs.length) {
						targetIdx = 0;
					}
					tabs.item(targetIdx).click();
					tabs.item(targetIdx).focus();
				}
			}
		}
	}
	function onKeydown(e) {
		if (e.keyCode === 13) { // enter key
			if ($(document.activeElement).is(".rc30mobtitle > a")) {
				$(document.activeElement).trigger("click");
			}
		} else if (e.keyCode === 37 || e.keyCode === 38) { // arrow keys: left / up
			navigateTabs(e,-1);
		} else if (e.keyCode === 39 || e.keyCode === 40) { // arrow keys: right / down
			navigateTabs(e,1);
		}
	}
	function pushTab(target) {
		if ($(target)[0]) {
			if(history.pushState) {
			    history.pushState(null, $(target).text(), $(target).attr("href"));
			}
			else {
			    location.hash = $(target).attr("href");
			}
		}
	}
	function reformatDesktop() {
		$(".rc30").each( function (i, rc30) {
			$(rc30).find(".rc30mobwrap .rc30mobtitle a").attr("aria-hidden","true").attr("tabindex","-1");
			$(rc30).find(".rc30w3").unwrap(".rc30mobwrap");
			$(rc30).find(".rc30w3").removeAttr("style");
			$(rc30).find(".rc30w4").css({"width":""});
			$(rc30).find(".rc30nav a").attr("aria-hidden","false");
			$(rc30).find(".rc30pane").each( function (j, pane) {
				if ($(pane).closest(".rc30v0")[0]) {
					$(pane).find(".col-framework > .col-w1 > .col-item").last().css({"background-color":""});
					$(pane).css({"background-color":""});
				}
				$(pane).find(".rc30mobtitle a").attr("aria-hidden","true").attr("tabindex","-1");
				// convert accordian a11y to tabpanel:
				// remove role and aria-hidden from inner content container and add it to rc30pane
				$(pane).children("div.col-framework").removeAttr("role").removeAttr("aria-hidden");
				// restore aria-labelledby
				$(pane).attr("aria-labelledby",$(pane).attr("data-labelledby")).removeAttr("data-labelledby");
				// save/remove aria-labelledby from accordion content pane
				$(pane).children("div.col-framework").attr("data-labelledby",$(pane).children("div.col-framework").attr("aria-labelledby")).removeAttr("aria-labelledby");
				var isHidden = $(pane).hasClass("rc30activepane") ? "false" : "true";
				$(pane).attr("role","tabpanel").attr("aria-hidden",isHidden);
				$(pane).attr("aria-expanded", $(pane).is(".rc30activepane") ? "true" : "false");
			});
			// if no active tab is found, set the first as default 
			if (!$(rc30).find(".rc30active")[0]) {
				navEvent(rc30,$(rc30).find(".rc30nav a").first());
			}
		});
		makeBleed();
	}
	function reformatMobile() {
		if (getBreakpoint() == "mobile") {
			var bgcolor,
				screenW = window.innerWidth,
				dir = "right";
			unmakeBleed();
			$(".rc30").each( function (i, rc30) {
				var margins, paneCount = $(rc30).find(".rc30pane").length;
				margins = parseInt($(rc30).find(".rc30pane:first").css("margin-" + dir));
				margins = margins * (paneCount + 1);
				if (!$(rc30).find(".rc30w3").closest(".rc30mobwrap")[0]) {
					$(rc30).find(".rc30w3").wrap("<div class=\"rc30mobwrap\"></div>");
				}
				$(rc30).find(".rc30mobwrap .rc30mobtitle a").attr("aria-hidden","false");
				$(rc30).find(".rc30nav a").attr("tabindex","-1").attr("aria-hidden","true");
				/*
				$(rc30).find(".rc30pane .rc30mobtitle a").each( function (i,btn) {
					$(btn).attr("aria-hidden","false").removeAttr("tabindex");
					if ($(btn).closest(".rc30activepane")[0]) {
						$(btn).attr("aria-expanded","true");
					} else {
						$(btn).attr("aria-expanded","false");
					}
				});
				*/
				$(rc30).find(".rc30pane").each( function (i, pane) {
					var btn = $(pane).find(".rc30mobtitle a"),
						computedStyles,
						content = $(pane).children("div.col-framework").get(0),
						hgt,
						paddingBot,
						paddingTop;


					

					// convert tabpanel a11y to accordian:
					// remove role and aria-hidden from rc30pane and add it to inner content container
					$(pane).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-expanded");
					var isHidden = $(pane).hasClass("rc30activepane") ? "false" : "true";
					$(pane).children("div.col-framework").attr("aria-hidden",isHidden);
					// save pane aria-labelledby
					$(pane).attr("data-labelledby",$(pane).attr("aria-labelledby")).removeAttr("aria-labelledby");
					// apply aria-labelledby to accordion content pane
					$(pane).children("div.col-framework").attr("aria-labelledby",$(pane).children("div.col-framework").attr("data-labelledby")).removeAttr("data-labelledby");

					// need to make sure any transitions don't delay height calc
					content.style.transitionDuration = "0ms";
					content.style.setProperty("height","auto");
					
					$(pane).addClass("rc30reformat");

					$(btn).attr("aria-hidden","false").attr("tabindex","0");

					$(btn).attr("aria-expanded",isHidden == "false" ? "true" : "false");
					
					computedStyles = window.getComputedStyle(content, null);
					hgt = computedStyles.height;
					paddingTop = computedStyles.paddingTop.replace("px","");
					paddingBot = computedStyles.paddingBottom.replace("px","");

					//hgt = +hgt + +paddingTop + +paddingBot;
					// set css variable for referencing in open class

					content.style.setProperty('--fullHeight', hgt);
					content.style.height = '';
					
					$(pane).removeClass("rc30reformat");
					// delay the transition duration restoration to prevent the transition from triggering on the padding
					window.setTimeout(function() {
						content.style.transitionDuration = "";
					},100);
				});

				//$(rc30).find(".rc30w3").css({width:(paneCount * (screenW * factor)) + margins});
				//$(rc30).find(".rc30pane").css({width:screenW * factor});
				
				/*
				$(rc30).find(".rc30pane").each( function (j, pane) {
					// look for color classes and match them on the wrappers because some v0 examples have two tones
					if ($(pane).closest(".rc30v0")[0]) {
						bgcolor = $(pane).find("> .col-framework > .col-w1 > .col-item").last().css("background-color");
						$(pane).css({"background-color":bgcolor});
					}
				});
				*/

				




				indexSlides(rc30);
			});
		} else {
			reformatDesktop();
		}
	}
	function replaceColumns() {
		$(".rc30 .odlist").each( function (i, list) {
			if ($(list).children().length < 2 && +$(list).css("column-count") > 1) {
				$(list).css({"column-count":"auto"});
			}
		})
	}
	function resizeEvent() {
		reformatMobile();
		equalizeHeight();
	}
	/*
	function scrollIt(timestamp, slider, v, decay, targetPosition, iterations){
	    //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
	    var delta,
		    distance,
	    	timestamp = timestamp || new Date().getTime();

	    // speed limit
	    if (v > speedLimit) {
	    	v = speedLimit;
	    } else if (v < -1 * speedLimit) {
	    	v = -1 * speedLimit;
	    }
	    // distance limit
	    delta = (v * (1 / decay).toFixed(2));
	    if (delta > 100) {
	    	delta = 100;
	    }
	    distance = slider.scrollLeft - delta;

	    slider.scrollLeft = distance;
	    iterations = iterations + 1;
	    if (Math.abs(delta) > scrollTolerance && decay > 0 ) {
	    	requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
	            scrollIt(timestamp, slider, v, decay * 1.3, distance, iterations);
	        });
	    }
	}*/
	function unmakeBleed() {
		$(".rc30").each( function(i, context) {
			$(context).find(".rc30mobwrap").removeAttr("style");
			$(context).find(".rc30pane-bleed").removeAttr("style");
		});
	}
	// initialize
	$(".rc30").each( function (i,rc30) {
		var target,targetPanelId = window.location.hash.replace("#","").split("?")[0];
		initialize(rc30,i);
		// check for direct link
		directLink(rc30,targetPanelId);
	});
	$(document).off("keydown.rc30").on("keydown.rc30", onKeydown);
	// poll for css
	window.rc30Interval = setInterval(function () {
		var bp = getBreakpoint();
		if (bp !== "none" && bp !== "") {
			clearInterval(rc30Interval);

			makeBleed();
			replaceColumns();
			reformatMobile();
			equalizeHeight();
		}
	});
	if ($("[data-src]")[0]) {
		$(document).on("lazydatasrc.srcloaded", function (e) {
			$(".rc30").each( function (i,rc30) {
				equalizeHeight();
			});
		});
	}
	$(window).off('resize.rc30').on('resize.rc30', resizeEvent);

	// WHEN SCROLLED INTO VIEW DO A HEIGHT CHECK
// 	var rc30runheight;		
// 	if ("IntersectionObserver" in window) {
// 
// 		rc30runheight = document.querySelectorAll(".rc30");
// 		var rc30Observer = new IntersectionObserver(function(entries, observer) {
// 			entries.forEach(function(entry) {
// 				if (entry.isIntersecting) {
// 
// 					if ($(entry.target).find('[data-src]')){
// 						console.log($(entry.target).find('[data-src]').attr('data-src'));
// 					}
// 					equalizeHeight($(entry.target));
// 
// 					rc30Observer.unobserve(entry.target);
// 				}
// 			});
// 		});
// 
// 		rc30runheight.forEach(function(image) {
// 			rc30Observer.observe(image);
// 		});
// 	
// 	}


});

/*! RC31 */
OCOM.register(function rc31($) {
	'use strict';
	$('.rc31 .col3 .col-item-w1, .rc31 .col4 .col-item-w1').equalHeight();
	$(window).resize(function(){
		$('.rc31 .col3 .col-item-w1, .rc31 .col4 .col-item-w1').equalHeight();
	});
});

/*! RC33 */
OCOM.register(function rc33($) {

		if (!$('.rc33')[0]) {
			return false;
		}

		var $window = $(window),
			$rc33tri = '<div class="rc33tri"></div>',
			insertionElement = 0,
			$currrentDrawer = $('.rc33w2.current'),
			resizeTimeout,
			$container = $('.rc33w1'),
			$categories = $('.rc33w2');

		$categories.each(function (i) {
			$(this).attr('data-guid', i);
		});

		$container.on('click', '.rc33w2 > a', onCategoryClick);

		$(".rc33w3").attr("aria-hidden", "true");
		$(".rc33w3").css("display", "none");

		$('.rc33w2 > a').keydown(function(e) {
			if (e.keyCode == '32') {
				onCategoryClick($(this));
				e.preventDefault();
			}
		});

		function onCategoryClick(e) {
			var elem = (this.nodeType == 1) ? $(this) : e;
			var mobile = window.innerWidth < 860;
			var selectedID = parseInt(elem.parent().attr('data-guid')) + 1;
			var totalEls = parseInt($('.rc33w2').last().attr('data-guid')) + 1;
			elem.attr("aria-expanded", "true");
			// elem.next().attr("aria-hidden", "false")
			// elem.next().css("display", "flex");
			
			//if drawer is open, close it and quit
			if (elem.parent().hasClass('current')) {
				elem.attr("aria-expanded", "false");
				// elem.next().attr("aria-hidden", "true");
				// elem.next().css("display", "none");
				elem.parent().removeClass('current shown');
				$('.rc33active').remove();
				$('.rc33tri').remove();
				return;
			}

			//otherwise, process normally and open drawer for:
			//desktop
			if (!mobile) {
				var insertionRow = Math.ceil(selectedID / 3);
				insertionElement = insertionRow * 3 - 1;
				if (insertionElement >= totalEls) {
					insertionElement = totalEls - 1;
				}
			}

			//mobile 
			else {
				insertionElement = selectedID - 1;
			}

			$categories.removeClass('current shown');
			elem.parent().addClass('current');
			var activeContent = elem.next().clone(true, true);
			$('.rc33active').remove();
			$('.rc33tri').remove();
			$('.rc33w2[data-guid="' + insertionElement + '"]').after('<div class="rc33active"></div>');
			$('.rc33active').html(activeContent).find('.rc33w3').addClass('open').delay(10).queue(function () {
				$(this).addClass('shown');
				$(this).attr("aria-hidden", "false");
				$(this).css("display", "flex");
				$('.rc33w2.current').append($rc33tri).delay(10).queue(function () {$('.rc33tri').addClass('shown'); $(this).dequeue();});
			});

			//Lazy load images for open drawer
			$(activeContent).find('img').each(function (i, img) {
				if (img.getAttribute('data-src')) {
					img.setAttribute('src', img.getAttribute('data-src'));
					img.removeAttribute('data-src');
				}
			});

			//push category attribute to hash to allow for auto-open on reload
			var $category = $(e.currentTarget).closest('.rc33w2'),
				$link = $category.find('> a');

			if (window.history.pushState) {
				window.history.pushState(null, null, $link.attr('href'));
			} else {
				window.location.hash = $link.attr('href');
			}
			//addAriaAttributes();
		}

		// open the linked category on load
		if (window.location.hash.length > 1) {
			$('a[href="' + window.location.hash + '"]').click();
		}

		function adjustContentonResize() {
			var mobile = window.innerWidth < 860,
				selectedID = 0;

			var totalEls = parseInt($('.rc33w2').last().attr('data-guid')) + 1;


			//Rearrange elements when moving from mobile to desktop
			if (!mobile) {
				selectedID = parseInt($('.rc33w2.current').attr('data-guid')) + 1;
				//console.log('selectedID on desktop resize',selectedID);
				var insertionRow = Math.ceil(selectedID / 3);
				var newInsertionElement = insertionRow * 3 - 1;
				// console.log('newInsertionElement', newInsertionElement);
				// console.log('insertionElement', insertionElement);

				if (newInsertionElement >= totalEls) {
					newInsertionElement = totalEls - 1;
				}
				var $mobileClone = $('.rc33active').detach();
				$('.rc33w2[data-guid="' + newInsertionElement + '"]').after($mobileClone);
			}

			//Rearrange elements when moving from desktop to mobile
			else {
				selectedID = parseInt($('.rc33w2.current').attr('data-guid'));
				var $desktopClone = $('.rc33active').detach();
				$('.rc33w2[data-guid="' + selectedID + '"]').after($desktopClone);
			}
			//addAriaAttributes();
		}

		function onWindowResized($currrentDrawer) {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(function () {
				adjustContentonResize();
			}, 250);
			return false;
		}

		$window.off('resize.rc33').on('resize.rc33', onWindowResized);

		function addAriaAttributes() {
			$categories.not('.current').find('a')
				.attr('aria-selected', 'false')
				.attr('tabindex', 0);
			$currrentDrawer.find('a')
				.attr('aria-selected', 'true')
				.attr('tabindex', 0);
		}

});

/*! RC34 */
var rc34debug = {};
OCOM.register(function rc34($) {
	'use strict';
	
	var cc = {
			"AED" : [ "ae-ar", "ae" ],
			"AFN" : [  ],
			"ALL" : [  ],
			"AMD" : [  ],
			"ANG" : [  ],
			"AOA" : [  ],
			"ARS" : [ "ar" ],
			"AUD" : [ "au" ],
			"AWG" : [  ],
			"AZN" : [ "nz" ],
			"BAM" : [ "ba" ],
			"BBD" : [  ],
			"BDT" : [ "bd" ],
			"BGN" : [ "bg" ],
			"BHD" : [ "bh-ar", "bh" ],
			"BIF" : [  ],
			"BMD" : [  ],
			"BND" : [ "bn" ],
			"BOB" : [ "bo" ],
			"BRL" : [ "br" ],
			"BSD" : [  ],
			"BTN" : [ "bt" ],
			"BWP" : [  ],
			"BYR" : [  ],
			"BZD" : [ "bz" ],
			"CAD" : [ "ca-en", "ca-fr" ],
			"CDF" : [  ],
			"CHF" : [ "ch-de", "ch-fr" ],
			"CLP" : [ "cl" ],
			"CNY" : [ "cn" ],
			"COP" : [ "co" ],
			"CRC" : [ "cr" ],
			"CUP" : [  ],
			"CVE" : [  ],
			"CZK" : [ "cz" ],
			"DJF" : [  ],
			"DKK" : [ "dk" ],
			"DOP" : [  ],
			"DZD" : [ "dz" ],
			"EGP" : [ "eg" ],
			"ERN" : [  ],
			"ETB" : [  ],
			"EUR" : [ "at", "be", "be-fr", "be-nl", "cy", "ee", "fi", "fr", "de", "gr", "ie", "it", "lv", "lt", "lu", "mt", "me", "nl", "pt", "sk", "si", "es" ],
			"FJD" : [  ],
			"FKP" : [  ],
			"GBP" : [ "uk" ],
			"GEL" : [  ],
			"GHS" : [ "gh" ],
			"GIP" : [  ],
			"GMD" : [  ],
			"GNF" : [  ],
			"GTQ" : [ "gt" ],
			"GYD" : [  ],
			"HKD" : [ "hk" ],
			"HNL" : [ "hn" ],
			"HRK" : [ "hr" ],
			"HTG" : [  ],
			"HUF" : [ "hu" ],
			"IDR" : [ "id" ],
			"ILS" : [ "il", "en-il" ],
			"INR" : [ "in" ],
			"IQD" : [ "iq-ar", "iq" ],
			"IRR" : [  ],
			"ISK" : [  ],
			"JMD" : [  ],
			"JOD" : [ "jo" ],
			"JPY" : [ "jp" ],
			"KES" : [ "ke" ],
			"KGS" : [  ],
			"KHR" : [ "kh" ],
			"KMF" : [  ],
			"KPW" : [  ],
			"KRW" : [ "kr" ],
			"KWD" : [ "kw-ar", "kw" ],
			"KYD" : [  ],
			"KZT" : [  ],
			"LAK" : [  ],
			"LBP" : [ "lb-ar", "lb" ],
			"LKR" : [ "lk" ],
			"LRD" : [  ],
			"LSL" : [  ],
			"LYD" : [  ],
			"MAD" : [ "ma" ],
			"MDL" : [ "md" ],
			"MGA" : [  ],
			"MKD" : [  ],
			"MMK" : [  ],
			"MNT" : [ "mn" ],
			"MOP" : [  ],
			"MRO" : [  ],
			"MUR" : [  ],
			"MVR" : [ "mv" ],
			"MWK" : [  ],
			"MXN" : [ "mx" ],
			"MYR" : [ "my" ],
			"MZN" : [  ],
			"NAD" : [  ],
			"NGN" : [ "ng" ],
			"NIO" : [ "ni" ],
			"NOK" : [ "no" ],
			"NPR" : [ "np" ],
			"NZD" : [ "nz" ],
			"OMR" : [ "om-ar", "om" ],
			"PAB" : [ "pa" ],
			"PEN" : [ "pe" ],
			"PGK" : [  ],
			"PHP" : [ "ph" ],
			"PKR" : [ "pk" ],
			"PLN" : [ "pl" ],
			"PYG" : [ "py" ],
			"QAR" : [ "qa-ar", "qa" ],
			"RON" : [ "ro" ],
			"RSD" : [ "rs" ],
			"RUB" : [ "ru" ],
			"RWF" : [ "rw" ],
			"SAR" : [ "sa-ar", "sa" ],
			"SBD" : [  ],
			"SCR" : [  ],
			"SDG" : [  ],
			"SEK" : [ "se" ],
			"SGD" : [ "sg" ],
			"SHP" : [  ],
			"SLL" : [  ],
			"SOS" : [  ],
			"SRD" : [  ],
			"SSP" : [  ],
			"STD" : [  ],
			"SYP" : [  ],
			"SZL" : [  ],
			"THB" : [ "th" ],
			"TJS" : [  ],
			"TMT" : [  ],
			"TND" : [  ],
			"TOP" : [  ],
			"TRY" : [ "tr" ],
			"TTD" : [  ],
			"TWD" : [ "tw" ],
			"TZS" : [  ],
			"UAH" : [ "ua" ],
			"UGX" : [  ],
			"USD" : [  ],
			"UYU" : [ "uy" ],
			"UZS" : [  ],
			"VEF" : [ "ve" ],
			"VND" : [ "vn" ],
			"VUV" : [  ],
			"WST" : [  ],
			"XAF" : [  ],
			"XCD" : [  ],
			"XOF" : [ "sn" ],
			"XPF" : [  ],
			"YER" : [ "ye-ar", "ye" ],
			"ZAR" : [ "za" ],
			"ZMW" : [  ],
			"ZWL" : [  ]
		},
		currencyCode = '',
		defaultCodes = ['USD','us'],
		data = {},
		dataRanged = {},
		defaultNA = "&mdash;",
		//jsonURL = 'https://itra.oraclecloud.com/itas/.anon/myservices/api/v1/products?parentProductPartNumber=B88206',
		//jsonURL = '/a/ocom/docs/cloudestimator/js/pricing/v1/data/prices.json',
		jsonURL = '/a/ocom/docs/pricing/cloud-price-list.json',
		//limit = 200,
		//offset = 0,
		metaCountryCode = $("meta[name='siteid']").attr('content'),
		naTxt,
		snippet = {
			iconplus: "<span class=\"icn-plus-circle rc34toggle\" role=\"button\" aria-expanded=\"false\" tabindex=\"0\"></span>"
		};
	function addDecimalsToPattern(pattern,dec) {
		var newPattern = pattern,
			newPatternAr = pattern.split('.');
		if (dec > 0) {
			for (var i=0; i < dec; i++) {
				// add extra zeros to the beginning because the symbol could be at the end
				newPatternAr[1] = '0' + newPatternAr[1];
			}
			newPattern = newPatternAr.join('.');
		}
		return newPattern;
	}
	function addIcons(context) {
		context.find(".rc34pricehead > div + div").append($(snippet.iconplus));
		context.on("click",".rc34toggle",function (e) {
			handleToggle(e.currentTarget);
		});
	}
	function bindKeypresses() {
		$(document).keydown(function(e){
			if(e.which == 13 || e.which == 32){  // return || space
				if(document.activeElement.classList.contains("rc34toggle")){
					e.preventDefault();
					handleToggle(document.activeElement);
				}
			}
		});
	}
	function clearPrices(context) {
		$(context).find("[data-model],[data-minrange]").text('');
		$(context).find("[data-type]").not("[data-minrange]").not("[data-model]").text('');
	}
	function compileData(targetObj,section) {
		var alt_d,
			curAr,
			partsAr = Object.keys(targetObj),
			partsArLen = partsAr.length,
			trailingZero;

		if (!data.hasOwnProperty(section)) {
			data[section] = {};
		}
		for (var i = 0; i < partsArLen; i++) {

			curAr = Object.keys(targetObj[partsAr[i]]);
			for (var j = 0; j < curAr.length; j++) {
				if (!data[section].hasOwnProperty(curAr[j])) {
					data[section][curAr[j]] = {};
				}
				alt_d = targetObj[partsAr[i]][curAr[j]] ? targetObj[partsAr[i]][curAr[j]] : "0.0";
				if (alt_d.toString().match(/\.[\d]{1}$/)) {
					trailingZero = '0';
				} else {
					trailingZero = '';
				}
				data[section][curAr[j]][partsAr[i]] = {
					//prices: [
					//	{model:'default',value: alt_d + trailingZero}
					//]
					price: alt_d + trailingZero
				}
			}	
		}
	}
	function compileRangeData(targetRangeObj,section) {
		var curAr,
			partsRangeAr = Object.keys(targetRangeObj),
			partsRangeArLen = partsRangeAr.length;

		if (!dataRanged.hasOwnProperty(section)) {
			dataRanged[section] = {};
		}
		for (var i = 0; i < partsRangeArLen; i++) {
			curAr = Object.keys(targetRangeObj[partsRangeAr[i]]);
			for (var j = 0; j < curAr.length; j++) {
				if (!dataRanged[section].hasOwnProperty(curAr[j])) {
					dataRanged[section][curAr[j]] = {};
				}
				if (!dataRanged[section][curAr[j]].hasOwnProperty(partsRangeAr[i])) {
					dataRanged[section][curAr[j]][partsRangeAr[i]] = {};
				}
				if (targetRangeObj[partsRangeAr[i]][curAr[j]] && targetRangeObj[partsRangeAr[i]][curAr[j]].length > 0) {
					for (var k = 0; k < targetRangeObj[partsRangeAr[i]][curAr[j]].length; k++) {
						dataRanged[section][curAr[j]][partsRangeAr[i]][targetRangeObj[partsRangeAr[i]][curAr[j]][k].rangeMin] = {
							value: targetRangeObj[partsRangeAr[i]][curAr[j]][k].value,
							rangeUnit: targetRangeObj[partsRangeAr[i]][curAr[j]][k].rangeUnit
						};
					}								
				}
			}	
		}
	}
	function countDecimals(n) {
		var total;
	    if (Math.floor(n.valueOf()) === n.valueOf()) return 0;
	    total = n.toString().split(".")[1].length || 0;

	    //console.log( n + ': ' +total)
	     return total;
	}
	function decodeEntities(str) {
		var t = document.createElement("textarea");
    	t.innerHTML = str;
    	return t.value;
	}
	function detectCountry(cc) {
		var ar = [],
			coArr = false,
			rx;
		Object.keys(cc).map( function (current, i, arr) {
			for (var i = 0; i < cc[current].length; i++) {
				if (metaCountryCode == cc[current][i]) {
					coArr = [current,cc[current][i]];
					break;
				}
			}
		});
		if (coArr) {
			return coArr;
		}
		return defaultCodes;
	}
	function disableCurrencyMenu(context) {
		$(context).attr("disabled", "disabled");
	}
	function enableCurrencyMenu(context) {
		$(context).removeAttr("disabled");
		$(context).blur();
	}
	function getData(context, currency, feedURL) {
		if (data.hasOwnProperty(currency) && Object.keys(data[currency]).length > 0) {
			// don't make request if currency object already exists
			injectPrices(context, currency);
		} else {
			jQuery.when(
				//loadJSON(currency, limit, offset, feedURL)
				loadJSON(feedURL)
			).done(
				function (d) {
					var //alt_d,
						//curAr,
						//items,
						//length,
						//partsAr,
						//partsArLen,
						//partsRangeAr,
						//partsRangeArLen,
						targetObj,
						targetRangeObj,
						targetVcpuObj,
						targetVcpuRangeObj;
						//trailingZero;
					if (typeof d == 'object' && d.hasOwnProperty('items')) {
						targetObj = d.items;
					} else {
						targetObj = d;
					}
					if (typeof d == 'object' && d.hasOwnProperty('rangeItems')) {
						targetRangeObj = d.rangeItems;
					} else {
						targetRangeObj = false;
					}
					if (typeof d == 'object' && d.hasOwnProperty('vcpuItems')) {
						targetVcpuObj = d.vcpuItems;
					} else {
						targetVcpuObj = false;
					}
					if (typeof d == 'object' && d.hasOwnProperty('vcpuRangeItems')) {
						targetVcpuRangeObj = d.vcpuRangeItems;
					} else {
						targetVcpuRangeObj = false;
					}

					compileData(targetObj,"default");
					compileData(targetVcpuObj,"vcpu");

					compileRangeData(targetRangeObj,"default");
					compileRangeData(targetVcpuRangeObj,"vcpu");

					rc34debug.data = data;
					rc34debug.dataRanged = dataRanged;

					injectPrices(context, currency);
					//console.log(data)
					//console.log(dataRanged)
				}
			).fail(
				function () {
					console.log('Error: data not loaded.')
				}
			);
		}
	}
	// returns array pattern string
	function getPattern(currency) {
		var locale = OSREC.CurrencyFormatter.defaultLocales.hasOwnProperty(currency) ? OSREC.CurrencyFormatter.defaultLocales[currency] : 'en',
			pattern,
			defaultPattern = '!#,##0.00';
		if (OSREC.CurrencyFormatter.locales[locale]) {
			if (OSREC.CurrencyFormatter.locales[locale].hasOwnProperty('h')) {
				pattern = OSREC.CurrencyFormatter.locales[OSREC.CurrencyFormatter.locales[locale].h].p;
			} else {
				pattern = OSREC.CurrencyFormatter.locales[locale].p;
			}
			if (pattern) {
				return pattern.split(';')[0];
			} else {
				return defaultPattern;
			}
		}
	}
	function handleToggle(currentTarget) {
		//var currentTarget = e.currentTarget;
		if ($(currentTarget).hasClass("icn-plus-circle")) {
			$(currentTarget).removeClass("icn-plus-circle").addClass("icn-minus-circle");
			$(currentTarget).attr("aria-expanded","true");
			$(currentTarget).closest(".rc34w3").find(".rc34w5").show(250, function () {
				$(currentTarget).closest(".rc34w3").find(".rc34w5").addClass("rc34active");
			});

		} else if ($(currentTarget).hasClass("icn-minus-circle")) {
			$(currentTarget).removeClass("icn-minus-circle").addClass("icn-plus-circle");
			$(currentTarget).closest(".rc34w3").find(".rc34active").removeClass("rc34active");
			$(currentTarget).attr("aria-expanded","false");
			window.setTimeout( function () {$(currentTarget).closest(".rc34w3").find(".rc34w5").hide(250)},200);
		}
	}
	function init() {
		var $rc34 = $(this),
			feedURL = $(this).attr("data-feedsrc"),
			j,
			names = [],
			number = 0,
			nums = [],
			targetCurrencyCode = detectCountry(cc),
			tmp;
		naTxt = $rc34.attr("data-na") ? $rc34.attr("data-na") : defaultNA;
		// find the largest select id (#rc34select-X)
		$("select.rc34currencies[id]").each( function (i, select) {
			names.push($(select).attr("id"));
		});
		number = largest(names, "-");
		// give each select menu an ID
		$rc34.find("select.rc34currencies").not("[id]").each( function (i, select) {
			j = number + i;
			$(select).attr("id","rc34select-" + j);
			if ($(select).closest("form").find("label")[0]) {
				$(select).closest("form").find("label").attr("for", "rc34select-" + j);
			} else {
				$(select).closest("form").prepend($("<label class=\"rc34currencylabel\" id=\"rc34select-"+ j +"\">Currency</label>"));
			}
		});
		// find the largest title ID (#rc34title-X)
		$(".rc34pricehead h4[id]").each( function (i, title) {
			names.push($(title).attr("id"));
		});
		number = largest(names, "-");
		// give each h4 an ID
		$rc34.find(".rc34pricehead h4").not("[id]").each( function (i, h4) {
			j = number + i;
			$(h4).attr("id","rc34title-" + j);
		});
		// convert old tables to accessible model
		if ($rc34.is(".rc34v2") || $rc34.is(".rc34v3")) {
			makeTableAccessible($rc34);
		}		
		// auto-select if no option has been selected
		if (!$rc34.find(".rc34currencies option[selected]")[0]) {
			// if the auto-selected currency code does not exist as an option, use default
			if ($rc34.find(".rc34currencies option[value='" + targetCurrencyCode[0] + "']")[0]) {
				$rc34.find(".rc34currencies option[value='" + targetCurrencyCode[0] + "']").attr("selected","");
			} else {
				$rc34.find(".rc34currencies option[value='" + defaultCodes[0] + "']").attr("selected","");
			}
		}
		// populate currency symbols
		$rc34.find(".rc34currencies option").each(function (i,opt) {
			if ($(opt).attr('value')) {
				$(opt).removeAttr('data-symbol');
				var currency = $(opt).attr('value') ? $(opt).attr('value') : 'USD',
					text = $(opt).text(),
					symbol,
					tmp;
				symbol = OSREC.CurrencyFormatter.symbols[currency];
				if (text.indexOf('(') > -1) {
					if (symbol == '') {
						$(opt).text(text.replace(/\([^)]+\)/,'(' + currency + ')'));
					} else {
						$(opt).text(text.replace(/\([^)]+\)/,'(' + symbol + ')'));
					}
				} else {
					if (symbol == '') {
						$(opt).text(text + ' (' + currency + ')');
					} else {
						$(opt).text(text + ' (' + symbol + ')');
					}
				}
			}
		});
		if ($rc34.hasClass("rc34v0")) {
			addIcons($rc34);
			$rc34.find(".rc34w3").first().find(".rc34toggle").trigger("click");

			// find the largest h3 id (#rc34subtitle-X)
			names = [];
			$(".rc34pricehead h3[id]").each( function (i, h3) {
				names.push($(h3).attr("id"));
			});
			number = largest(names, "-");
			// give each H3 an ID
			$rc34.find(".rc34pricehead h3").not("[id]").each( function (i, h3) {
				j = number + i;
				$(h3).attr("id","rc34subtitle-" + j);
			});
			// assign H3 as label for toggle
			$rc34.find(".rc34toggle").not("[aria-labelledby]").each( function (i, toggle) {
				$(toggle).attr("aria-labelledby",$(toggle).closest(".rc34pricehead").find("h3").attr("id"));
			});
		}
		disableCurrencyMenu($rc34.find(".rc34currencies"));
		clearPrices($rc34);
		$rc34.addClass("rc34loading");
		//getData($rc34, limit, offset, $rc34.find(".rc34currencies").val(),feedURL);
		getData($rc34, $rc34.find(".rc34currencies").val(),feedURL);

		$rc34.find(".rc34currencies").on("change", function (e) {
			feedURL = $(e.currentTarget).closest(".rc34").attr("data-feedsrc");
			disableCurrencyMenu($(e.currentTarget));
			clearPrices($rc34);
			$rc34.addClass("rc34loading");
			//getData($rc34,limit, offset, $(e.currentTarget).val(),feedURL);
			//getData($rc34, $(e.currentTarget).val(),feedURL);
			injectPrices($rc34, $(e.currentTarget).val());
			enableCurrencyMenu($(e.currentTarget));
			$(e.currentTarget).focus();
		});
		return this;
	}
	function injectPrice(item,currency,partNumberAr,partNumberArLen,suffix) {
		var datatype = $(item).attr('data-type') && $(item).attr('data-type') !== "ocpu" && $(item).attr('data-type') !== "default" ? $(item).attr('data-type') : "default",
			dec,
			//model = $(item).attr('data-model'),
			newPattern,
			pattern = getPattern(currency),
			patternDec = pattern.split('.').length,
			section = datatype,
			sum = 0,
			validPart = [];
		for (var i = 0; i < partNumberArLen; i++) {
			if (data[section].hasOwnProperty(currency) && data[section][currency].hasOwnProperty(partNumberAr[i]) && typeof data[section][currency][partNumberAr[i]] == "object" && data[section][currency][partNumberAr[i]].hasOwnProperty("price") && data[section][currency][partNumberAr[i]].price) {
					//window.cb152debug[partNumberAr[i]] = +data[section][currency][partNumberAr[i]].price;
					sum = Math.round((sum + +data[section][currency][partNumberAr[i]].price ) * 1e12)/1e12;
				validPart[i] = 1;
			} else {
				validPart[i] = 0;
			}
		}
		if(Math.max.apply(null,validPart) == 1) {
			// only filter decimals if there is summation
			if (partNumberArLen > 1) {
				sum = removeExcessDecimals(sum);
			}
			dec = countDecimals(sum) - patternDec;
			newPattern = addDecimalsToPattern(pattern,dec);
			$(item).html(OSREC.CurrencyFormatter.format(sum, {currency:currency,pattern:newPattern}) + '<span>'+suffix+'</span>');
		} else {
			$(item).html(decodeEntities(naTxt));
		}
	
		setTimeout(function(){$(item).removeClass("rc34preinjection")},5);
	}
	function injectPriceRange(item,currency,partNumberAr,suffix) {
		var datatype = $(item).attr('data-type') && $(item).attr('data-type') !== "ocpu" && $(item).attr('data-type') !== "default"? $(item).attr('data-type') : "default",
			dec,
			newPattern,
			pattern = getPattern(currency),
			patternDec = pattern.split('.').length,
			range = $(item).attr('data-minrange'),
			section = datatype,
			sum = 0,
			validPart = false;

		if (dataRanged[section].hasOwnProperty(currency) && dataRanged[section][currency].hasOwnProperty(partNumberAr[0]) && typeof dataRanged[section][currency][partNumberAr[0]] == "object" && dataRanged[section][currency][partNumberAr[0]].hasOwnProperty(range)) {
			validPart = true;
			sum = dataRanged[section][currency][partNumberAr[0]][range].value;
		}
		if (validPart) {
			dec = countDecimals(sum) - patternDec;
			newPattern = addDecimalsToPattern(pattern,dec);
			$(item).html(OSREC.CurrencyFormatter.format(sum, {currency:currency,pattern:newPattern}) + '<span>'+suffix+'</span>');
		} else {
			$(item).html(decodeEntities(naTxt));
		}
		setTimeout(function(){$(item).removeClass("rc34preinjection")},5);
	}
	function injectPrices(context, currency) {
		//console.log(data)
		var partNumber,
			partNumberAr,
			partNumberArLen,
			//model,
			str,
			//sum,
			//pattern = getPattern(currency),
			//patternDec = pattern.split('.').length,
			//dec,
			//newPattern,
			suffix,
			range;
		$(context).removeClass("rc34loading");
		if ($('.rc34v1')[0]) {
			$('.col-item-w6').equalHeight();
		}
		$(context).find("[data-model],[data-minrange]").addClass("rc34preinjection");
		$(context).find("[data-type]").not("[data-minrange]").not("[data-model]").addClass("rc34preinjection");


		$(context).find("[data-partnumber]").each( function (i, item) {
			partNumberAr = $(item).attr('data-partnumber').replace(/[\s]+/g,'').split(',');
			partNumberArLen = partNumberAr.length;
			suffix = $(item).attr('data-suffix') ? ' ' + $(item).attr('data-suffix') : '';

			if ($(item).find("[data-minrange]")[0]) {
				$(item).find("[data-minrange]").each( function (j, child) {
					injectPriceRange(child,currency,partNumberAr,suffix);
				});
			} else if ($(item).attr("data-minrange")) {
				injectPriceRange(item,currency,partNumberAr,suffix);
			} else if ($(item).attr('data-model') || $(item).attr('data-type')) {
				injectPrice(item,currency,partNumberAr,partNumberArLen,suffix);
			} else if ($(item).find("[data-type]")[0]) {
				$(item).find("[data-type]").each( function (j, child) {
					injectPrice(child,currency,partNumberAr,partNumberArLen,suffix);
				});
			} else if ($(item).find("[data-model]")[0]) {
				$(item).find("[data-model]").each( function (j, child) {
					injectPrice(child,currency,partNumberAr,partNumberArLen,suffix);
				});
			}
		});
		enableCurrencyMenu($(context).find(".rc34currencies"));
		if ($(context).hasClass("rc34v1")) {
			rc34v1equalHeight();
		}
	}
	function largest(collection, delimiter) {
		var number,
			nums = [],
			tmp;
		for (var i = 0; i < collection.length; i++) {
			tmp = collection[i].split(delimiter);
			if (tmp[1]) {
				nums.push(+tmp[1]);
			}
		}
		if (nums.length > 0) {
			return Math.max.apply(null, nums) + 1;
		} else {
			return 0;
		}
	}
	function loadJSON(feedURL) {
		//console.log(feedURL)
		var //currencyCode = currency ? currency : 'USD',
			url = feedURL ? feedURL : jsonURL;
		return jQuery.ajax({
			//headers: {'X-Oracle-Accept-CurrencyCode': currencyCode},
			url: url,
			method: 'GET',
			dataType: 'json',
			crossDomain: true
		});
	}
	function makeTableAccessible(context) {
		// change every <TD> to <TH> in <THEAD>
		$(context).find("table > thead > tr:not(.rc34skip) > td:not(.rc34spanned)").each( function (i, td) {
			replaceContainer(td, "<th>", "col");
		});
		// change first <TD> of every row in <TBODY> to a <TH SCOPE="ROW">
		$(context).find("table > tbody > tr:not(.rc34skip)").each( function (j, tr) {
			if ($(tr).children().first().is("td")) {
				replaceContainer($(tr).children().first(), "<th>", "row");
			}
		});
		// assign a label to each table
		$(context).find("table").each( function (i, table) {
			//var titleWrap = $(table).closest(".rc34w5").prevAll(".rc34pricehead").first(),
			var titleWrap = $(table).closest(".rc34w5").prev(".rc34pricehead"),
				id = titleWrap.find("h4").attr("id");
			if (titleWrap.length > 0 && id) {
				$(table).attr("aria-labelledby", id);
			}
		});
	}
	/* globals propertyExists, objLoaded */
	function OSRECcheck() {
		return (
			objLoaded('OSREC', 'CurrencyFormatter') &&
			init.call(this) ||
			setTimeout(OSRECcheck.bind(this), 10)
		);
	}
	// initialize
	$('.rc34').each(OSRECcheck);

	// V1 Equal Height
	function rc34v1equalHeight() {
		$('.col-item-w2').equalHeight();
		$('.col-item-w3').equalHeight();
		$('.col-item-w4').equalHeight();
		$('.col-item-w5').equalHeight();
		$('.col-item-w6').equalHeight();
	}
	function removeExcessDecimals(sum) {
		var sumAr = sum.toString().split("."),
			numAr = [],
			pattern = /0{4,}\d+$/;
		numAr[0] = sumAr[0] ? sumAr[0] : "0",
		numAr[1] = sumAr[1] ? sumAr[1] : "0";
		numAr[1] = numAr[1].replace(pattern,"");
		return numAr.join("."); 
	}
	function replaceContainer (container, newCntr, scope) {
		var contents = $(container).html(),
			cls = $(container).attr("class"),
			el = $(newCntr),
			id = $(container).attr("id"),
			spanR = $(container).attr("rowspan"),
			spanC = $(container).attr("colspan");
			//el = $("<th scope=\"col\">");

		if ($(container).text()) {
			if (cls) {
				el.attr("class", cls);
			}
			if (id) {
				el.attr("id", id);
			}
			if (spanR) {
				el.attr("rowspan", spanR);
			}
			if (spanC) {
				el.attr("colspan", spanC);
			}
			el.attr("scope", scope);
			el.html(contents);
			$(container).before(el);
			$(container).remove();
		}
	}
	if ($('.rc34v1')[0] && window.outerWidth > 600 ) {
		rc34v1equalHeight();
	}
	$(window).off('resize.rc34').on('resize.rc34', function (e) {
		if ($('.rc34v1')[0] && window.outerWidth > 600 ) {
			rc34v1equalHeight();
		}
	});
	bindKeypresses();
	
});

/*! RC39 */
$(document).ready(function() {
	'use strict';

		if($('.rc39v0')[0]){
			$( ".rc39inlinequote p" ).contents().unwrap().wrap('<q/>');
		}

	$('.rc39v5').each(function() {

		var anim_speed = 850;
		var anim_autoplaySpeed = 5000;
		var test_slider = $(this).find('.rc39w8');

		test_slider.slick({
			appendDots: test_slider,
			verticalSwiping: false,
			lazyLoad: 'ondemand',
			dots: true,
			dotsClass: "slick-animated-dots init",
			customPaging: function(slick,index) {
				return '<button type="button"><span style="transition-duration: ' + anim_autoplaySpeed+ 'ms; transition-delay: ' + anim_speed + 'ms; animation-duration: ' + anim_autoplaySpeed + 'ms;"></span></button';
			},
			arrows: false,
			infinite: true,
			cssEase: 'ease',
			speed: anim_speed,
			autoplay: true,
			autoplaySpeed: anim_autoplaySpeed,
			centerMode: false,
			accessibility: true,
			pauseOnHover: true,
			fade: true,
			swipe: true,
			touchMove: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	});
	
});


/*! RC43 */
$(document).ready(function() {
 	'use strict';
	$('.rc43legend').on('click', 'a', function (){
		$(this).next('.rc43sub').toggleClass('rc43active');
		$(this).toggleClass('rc43space');
		var rc34icnImg = $(this).find('.icn-img');
		if (rc34icnImg.hasClass('icn-chevron-right')) {
			rc34icnImg.toggleClass('icn-active');
		}
	});

	$('.rc43interactive .rc43point').on('click mouseup', 'span:first-child', function (e){
		$(this).next('.rc43tooltip,.rc43tooltip2').toggleClass('rc43init');
		e.stopPropagation();
		e.preventDefault();
	});

	$('.rc43').each(function() {
		$(this).find('.rc43point[style*="left"]').each(function() {
			var lft = parseInt($(this).attr('style').split("left")[1].split(";")[0].replace(/[ :\%]/g,''));
			if(lft >= 60){
				$(this).addClass('fliptip')					
			}
		});
	});
});

/*! RC44 */
OCOM.register(function rc44($) {

	if($('.rc44')[0]){ // check for rc44 before running a clock internval -- this js is crashing pages
		var countDownDate = new Date($('.rc44 #clock').data('date')).getTime();
		countDown();
		var clock = setInterval(countDown, 1000);

		function countDown() {
		  var now = new Date().getTime();
		  var until = countDownDate - now;
		  $('#countdown-days').text(pad(Math.floor(until / (1000 * 60 * 60 * 24))));
		  $('#countdown-hours').text(pad(Math.floor((until % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
		  $('#countdown-minutes').text(pad(Math.floor((until % (1000 * 60 * 60)) / (1000 * 60))));
		  $('#countdown-seconds').text(pad(Math.floor((until % (1000 * 60)) / 1000)));

		  if (until < 0) {
			  $('#countdown-days').text('00');
			  $('#countdown-hours').text('00');
			  $('#countdown-minutes').text('00');
			  $('#countdown-seconds').text('00');
			  clearInterval(clock);
		  }
		};

		function pad(d) {
			return (d < 10) ? '0' + d.toString() : d.toString();
		}
	}

/*
	$('.rc44.cw75v1').each(function() {

		var $this = $(this);
		var eventDate = $(this).find('#clock').data('date');
		var $countdownDays =  $(this).find('.days');
		var $countdownHours =  $(this).find('.hours');
		var $countdownMinutes =  $(this).find('.minutes');

		countDown();
		var clock = setInterval(countDown, 1000 * 60); // run for every minute
		function countDown() {
			var now = new Date().getTime();
			var until = new Date( eventDate ) - now;
			var totalEventDays = 30 ;
			var minutesLeft = Math.floor((until % (1000 * 60 * 60)) / (1000 * 60));
			var hoursLeft = Math.floor((until % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var daysLeft = Math.floor(until / (1000 * 60 * 60 * 24));

			$countdownDays.text(pad(daysLeft));
			$countdownHours.text(pad(hoursLeft));
			$countdownMinutes.text(pad(minutesLeft));
			var initialOffset = 566;
			var minutesEndPercent =  minutesLeft * (initialOffset / 60);
			var hoursEndPercent = hoursLeft * (initialOffset / 24);
			totalEventDays = daysLeft > totalEventDays ? daysLeft : totalEventDays;
			var daysEndPercent =  daysLeft * (initialOffset / totalEventDays);

			$this.find('#minutes .cw75w4 .cw75circle').css('stroke-dashoffset',minutesEndPercent);
			$this.find('#hours .cw75w4 .cw75circle').css('stroke-dashoffset',hoursEndPercent);
			$this.find('#days .cw75w4 .cw75circle').css('stroke-dashoffset',daysEndPercent);

			if (until < 0) {
				$countdownDays.text('00');
				$countdownHours.text('00');
				$countdownMinutes.text('00');
				clearInterval(clock);
			}
		};

		function pad(d) {
			return (d < 10) ? '0' + d.toString() : d.toString();
		}
	});
*/
});



$(document).ready(function () { // moved everything into the onready to keep it out of global scope

	if($('.rc44v1 .rc44w5[data-cmid]')[0]){ // check for cmid so nothing else executes unless it exist

		var d1 = new Date( $('#clock').attr('data-date') );
		var d2 = new Date( $('#clock').attr('data-dateend') );
		var d3 = new Date( $('#clock').attr('data-datejoin') );

// 		console.log('event start: '+d1);
// 		console.log('event end: '+d2);
// 		console.log('event join: '+d3);

		//var recorderVideoLink = $('.rc44v1 .rc44w5').attr('data-recorded-path');
		//var liveWebinarLink = $('.rc44v1 .rc44w5').attr('data-live-path');

		var liveWebinarLink = $('.rc44v1 .rc44w5 .rc44-live a').attr('href');
		var recorderVideoLink = $('.rc44v1 .rc44w5 .rc44-post a').attr('href');

		if (typeof liveWebinarLink !== "undefined" && liveWebinarLink.substr(0, 4) != "http") {  // check that typeof liveWebinarLink !== "undefined" b/c the js will error out if it is
			liveWebinarLink = "https://www.oracle.com"+liveWebinarLink;
		}
		if (typeof recorderVideoLink !== "undefined" && recorderVideoLink.substr(0, 4) != "http") {  // same thing here
			recorderVideoLink = "https://www.oracle.com"+recorderVideoLink;
		}

		var cmid = $('.rc44v1 .rc44w5').attr('data-cmid');
		
		var csidPre = $('.rc44v1 .rc44w5').attr('data-campstepid');
		var csidDay = $('.rc44v1 .rc44w5').attr('data-campstepid-onday');
		var csidDemand = $('.rc44v1 .rc44w5').attr('data-campstepid-ondemand');

		var regtyEmail = $('.rc44v1 .rc44w5').attr('data-tye-reg');
		var livetyEmail = $('.rc44v1 .rc44w5').attr('data-tye-live');
		var odtyEmail = $('.rc44v1 .rc44w5').attr('data-tye-demand');
		
		var walkinGating = $('.rc44v1 .rc44w5').attr('data-walkingating'); //'Yes' or ‘No’
		var onDemandGating = $('.rc44v1 .rc44w5').attr('data-onDemandgating'); //'Yes' or ‘No'

		console.log('stored cmid: '+cmid);

		console.log('stored csidPre: '+csidPre);
		console.log('stored csidDay: '+csidDay);
		console.log('stored csidDemand: '+csidDemand);

		console.log('stored regtyEmail: '+regtyEmail);
		console.log('stored livetyEmail: '+livetyEmail);
		console.log('stored odtyEmail: '+odtyEmail);

		console.log('stored walkinGating: '+walkinGating);
		console.log('stored onDemandGating: '+onDemandGating);

		var ServerDT;
		var blindPost;
		var refUrl = document.referrer
		var src1;
		var unGatedRedirUrl;
		var guidEmail;
		var lookupCount = 0;
		var serverVal = "";
		var cdoEmailVal;
		var pushcheckflag = false;
		var elqFormSubmissionToken = "";

        var e = new XMLHttpRequest();
        var a = "https://go.oracle.com/e/formsubmittoken?elqSiteID=1973398186";
        if (a) {
            e.onreadystatechange = function() {
                if (e.readyState === 4) {
                    if (e.status === 200) {
                        elqFormSubmissionToken = e.responseText;
                    } else {
                        elqFormSubmissionToken = "";
                    }
                }
            };
            e.open("GET", a, true);
            e.send()
        }
    
		$.ajax({
			type: "GET",
			url: "https://go.oracle.com/visitor/v200/svrGP.aspx?pps=50&siteid=1973398186&DLKey=cc7f81bb9c164a4db5a05a7c5ed15e7a&DLLookup=&ms=809&format=javascript",
			dataType: "jsonp",
			success: function(data) {
				if (data != undefined) {

					serverVal = data.V_Email_Address;
					console.log('serverVal: '+serverVal);

					if (serverVal != undefined) {

						$.ajax({
							type: "GET",
							url: "https://go.oracle.com/visitor/v200/svrGP?pps=50&siteid=1973398186&DLKey=a8f1a75f4f054df6b304a6692fc51058&DLLookup=%3CEmail_Address1%3E" + serverVal + "%3C%2FEmail_Address1%3E%3Ccmid1%3E" + cmid + "%3C%2Fcmid1%3E&ms=687&format=javascript",
							dataType: "jsonp",
							success: function(data) {
								if (data != undefined) {

									cdoEmailVal = data.Email_Address1;
									console.log('cdoEmailVal: '+cdoEmailVal);
									console.log('Full Match!')
									doFunction();

								} else {

									console.log('Half Match!')
									doFunction();

								}
							}
						});


					} else {

						console.log('No Match!')
						doFunction();

					}

				} else {

					console.log('No Data!');
					doFunction();
					
				}
			}
		});

		$.ajax({
			type: 'GET',
			cache: false,
			url: location.href,
			complete: function(req, textStatus) {
				var dateString = req.getResponseHeader('Date');
				if (dateString.indexOf('GMT') === -1) {
					dateString += ' GMT';
				}
				ServerDT = new Date(dateString);
		//		doFunction();
			}
		});

		function doFunction() {

			// wait until ServerTime is available
			var waitServerDT = setInterval(function(){
				if (ServerDT instanceof Date) {

					clearInterval(waitServerDT);

					var query = window.location.search.substring(1);
					var vars = query.split("&");
					for (var i = 0; i < vars.length; i++) {
						var pair = vars[i].split("=");
						if (pair[0] == "src1") {
							src1 = pair[1];
						}
					}

					sessionStorage.setItem('cmid', cmid)

					if (serverVal == cdoEmailVal && serverVal != "" && serverVal != undefined) { // already registered

						console.log("Already Registered!");

						blindPost = true;
						if (d2 < ServerDT) { // post event
							redir2recorded()
						} else {
							if (ServerDT >= d3 && ServerDT <= d2) { // during event
								redir2Live()
							} else { // pre event
								registeredUser()
							}
						}

					} else {  //  not registered

						console.log("Not Registered!");
						$('.rc44v1 .rc44-register').show();

						blindPost = false;
						if (d2 < ServerDT) { // post event

							$('.rc44v1 .rc44w5 .rc44-register a').html( $('.rc44v1 .rc44w5 .rc44-post .obttns a').text() );
							sessionStorage.setItem('elqFormName', 'zoomondemandform')
							sessionStorage.setItem('campStepId', csidDemand)
							sessionStorage.setItem('tyEmail', odtyEmail);
							sessionStorage.setItem('RESPONSE_TYPE', 'iSeminar Webshow Downloaded')
							sessionStorage.setItem('hmsg', 'On Demand');
							unGatedRedirUrl = recorderVideoLink;

							if (onDemandGating == 'No') {
								$(".rc44v1 .rc44w5 .rc44-register a").removeAttr("rel");
								$('.rc44v1 .rc44w5 .rc44-register a').attr("href", unGatedRedirUrl);
							}

						} else {

							if (ServerDT >= d3 && ServerDT <= d2) { // during event

								console.log("- On Day Setup");

								$('.rc44v1 .rc44w5 .rc44-register a').html( $('.rc44v1 .rc44w5 .rc44-live .obttns a').text() );
								sessionStorage.setItem('elqFormName', 'zoomondemandform')
								sessionStorage.setItem('campStepId', csidDay)
								sessionStorage.setItem('tyEmail', livetyEmail)
								sessionStorage.setItem('RESPONSE_TYPE', 'iSeminar Webshow Attended')
								sessionStorage.setItem('hmsg', 'Live Webinar');
								unGatedRedirUrl = liveWebinarLink;

								if (walkinGating == 'No') {
									$('.rc44v1 .rc44w5 .rc44-register a').removeAttr("rel");
									$('.rc44v1 .rc44w5 .rc44-register a').attr("href", unGatedRedirUrl);
								}

							} else { // pre event

								console.log("- Pre Event Setup");

								sessionStorage.setItem('elqFormName', 'zoomregform')
								sessionStorage.setItem('campStepId', csidPre)
								sessionStorage.setItem('tyEmail', regtyEmail)
								sessionStorage.setItem('RESPONSE_TYPE', 'iSeminar Webshow Registered')
								sessionStorage.setItem('hmsg', 'Live Webinar');
							}
						}
					}

				} else {
					console.log("No servertime avaialble - waiting 50ms");
				}
				console.log("ServerDT: "+ServerDT);
			}, 50);

		}

		/*
		** Close Lightbox Model - After suscessfully registration and display update message/redirect the visitor
		*/
		window.rc44closelb = function() {
		//	$('.w11close').trigger('click');
			if (d2 < ServerDT) {
				redir2recorded()
			} else {
				if (ServerDT >= d3 && ServerDT <= d2) {
					redir2Live();
				} else {
					registereSuccess()
				}
			}
		};

		/*
		** Redirect to OnDemand
		*/
		function redir2recorded() {

			$('.rc44v1 .rc44-register').hide();
			$('.rc44v1 .rc44w4').hide();
			$('.rc44v1 .icn-information.rc44-post').show();

			if (blindPost == true) {

				$.getScript('https://www.oracle.com/a/ocom/docs/eloqua/js/elq.timestamp.js', function() {
					postURL = 'https://go.oracle.com/e/f2?elqFormName=zoomondemandform&elqSiteID=1973398186&emailAddress='+serverVal+'&cmid='+cmid+'&campStepId='+csidDemand+'&TH='+recorderVideoLink+'&RESPONSE_TYPE=iSeminar Webshow Downloaded&refURL='+refUrl+'&src1='+src1+'&thankYouEmail='+odtyEmail+'&elqFormSubmissionToken='+elqFormSubmissionToken+'&address3=&timeStamp='+systimestamp; 
					window.setTimeout((function() {
						$.post(postURL, function(data) {
							$('head').append(data);
						});
					}),3000);
				});

			} else {
				window.location = recorderVideoLink;
			}

		}
		$('.rc44v1 .rc44-post a').on( "click",function( event ){
			event.preventDefault();
			redir2recorded()
		});

		/*
		** Redirect to Live
		*/
		function redir2Live() {

			$('.rc44v1 .rc44-register').hide();
			$('.rc44v1 .icn-information.rc44-live').show();

			if (blindPost == true) {

				$.getScript('https://www.oracle.com/a/ocom/docs/eloqua/js/elq.timestamp.js', function() {
					postURL = 'https://go.oracle.com/e/f2?elqFormName=zoomondemandform&elqSiteID=1973398186&emailAddress='+serverVal+'&cmid='+cmid+'&campStepId='+csidDay+'&TH='+liveWebinarLink+'&RESPONSE_TYPE=iSeminar Webshow Attended&refURL='+refUrl+'&src1='+src1+'&thankYouEmail='+livetyEmail+'&elqFormSubmissionToken='+elqFormSubmissionToken+'&address3=&timeStamp='+systimestamp;
                    window.setTimeout((function() {
						$.post(postURL, function(data) {
							$('head').append(data);
						});
					}),3000);
				});
				
			} else {
				window.location = liveWebinarLink;
			}

		}
		$('.rc44v1 .rc44-live a').on( "click",function( event ){
			event.preventDefault();
			redir2Live()
		});

		/*
		** Display already register message
		*/
		function registeredUser() {
			$('.rc44v1 .rc44-register').hide();
			$('.rc44v1 .rc44w5 .rc44-success').show();
			$('.rc44v1 .rc44-add2cal').show();
		}

		/*
		** Display sucessfully register message
		*/
		function registereSuccess() {
			$('.rc44v1 .rc44w6').find('li').hide();
			$('.rc44v1 .rc44-register').hide();
			$('.rc44v1 .rc44-success').show();
		}

	}

});


/*! RC45 */

OCOM.register(function rc45($) {
	"use strict";

	$('.rc45eq').equalHeight();

	$(window).resize(function () {
		$('.rc45eq').equalHeight();
	});

});

/*! RC46 */
 
OCOM.register(function rc46($) {
    "use strict";
 
    $(".rc46 ul li a[data-bgimg]").attr("aria-hidden", true).attr("tabindex", "-1");
 
});

/*! RC48 */
var rc48twinterval = 0;

OCOM.register(function rc48($) {
	"use strict";

	var interval = [], // interval IDs for object detection polling, ms
		pollingDelay = 10, // delay between object detection polls
		tweetLimit = 20, // number of tweets to display
		movers = 3, // number of tweets to transition at the top of the list
		refreshInterval = 1, // feed refresh interval, minutes
		lastID = '0', // last twitter ID, initialized as a string zero
		tweetCap = 100, // maximum number of tweets to display
		oldResults = {},
		isFirstRun = true,
		defaultHeight = 300, // default height if data-height is not set
		delay = 1500,
		blank_twitter_portrait = "/assets/i/rc48default-portrait-normal.png";


	var adaptToHeight = function (target, match) {
			var matchHt = $(match).outerHeight(),
				headerHt = $(target).closest('.rc48w1').find('.rc48head')[0] ? $(target).closest('.rc48w1').find('.rc48head').outerHeight() : 0,
				defaultHt = 0,
				items;
			if (breakpoint != 'desktop') {
				items = $(target).find(".rc48w3 > ul > li");
				for (var i=0; i < 3; i++) {
					if (items[i]) {
						if ($(items[i]).is(":visible")) {
							defaultHt = defaultHt + $(items[i]).outerHeight();
						} else {
							$(items[i]).css({display: "block", height: "auto","max-height":600,visibity:"hidden"});
							defaultHt = defaultHt + $(items[i]).outerHeight();
							$(items[i]).removeAttr("style");
						}
						
					}					
				}
			} else if (+$(target).closest('.rc48').attr('data-height') > 0) {
				defaultHt = $(target).closest('.rc48').attr('data-height') 
			} else {
				defaultHt = defaultHeight;
			}
			if (breakpoint() == "desktop") {
				$(target).find(".rc48w3 > ul").height(matchHt - headerHt - 1);
			} else {
				$(target).find(".rc48w3 > ul").height(defaultHt);
			}
		},
		AGreaterThanB = function (a, b) {
			if (typeof a === "string" && typeof b === "string") {
				if (a.length > b.length) {
					return true;
				} else if (a.length == b.length){
					if (a > b) {
						return true;
					}
				}
				return false;
			}
		},
		breakpoint = function () {
			return window.getComputedStyle(document.querySelector('.rc48'), ':before').getPropertyValue('content').replace(/\"/g,'');
		},
		display = function (current, count, movers, delay, targetAr) {
			var fuse = 0;
			if (current < movers) {
				fuse = delay * (movers - current);
				setTimeout(function () {
					$(targetAr[current]).css({display: "block", height: "auto"});
					$(targetAr[current]).animate({opacity: 1, "max-height": 600},750);
					//Empty aria announcement container before injecting new tweet to ensure only one added to DOM at a time.
					$("#aria-announcement").empty();
					//Inject new tweets into aria-live for screen reader notification
					let currentTweet = document.querySelectorAll(".rc48w6 strong")[current].innerHTML;
					$("#aria-announcement").append(`<p>New tweet loaded from ${currentTweet}</p>`);
				}, fuse, "linear");
			} else {
				$(targetAr[current]).css({display: "block", height: "auto", opacity: 1, "max-height": 600});
			}
		},
		injectFeed = function (target) {
			var feedsrc = $(target).attr("data-feedsrc"),
				template = $(target).attr("data-template"),
				isInLightbox = window.location == window.parent.location ? false : true;
			if (feedsrc && template) {
				window.HBSINJECT.initialize({
					cache: false,
					feedsrc: feedsrc,
					targetObj: target,
					templateName: template,
					polling: true,
					pollDelay: refreshInterval,
					afterInjectionCallback: function () {
						$(target).closest(".rc48").each( function (i, rc48) {
							var ht = $(rc48).attr('data-height');
							if (ht) {
								$(rc48).find(".rc48w3 > ul").height(ht);
							}
							$(rc48).find(".rc48w5 img").each( function (i,img) {
								
								//console.log($(img).get(0).complete)
								//console.log($(img).get(0).naturalHeight)
							//	if (!$(img).get(0).complete || $(img).get(0).naturalWidth == 0) {
							//	    $(img).attr("src",blank_twitter_portrait);
							//	} else {
									$(img).on("error", function (e) {
									    $(e.currentTarget).attr("src",blank_twitter_portrait);
									    $(e.currentTarget).off("error");
									});
							//	}
							
							});
						});
						
						
						var targetAr = $(target).find(".rc48w3 > ul > li"),
							count = targetAr.length > tweetLimit ? tweetLimit : targetAr.length,
							timeout = 0,
							delay = 5000,
							tmpMovers = 0,
							tid = 0;
						if (lastID === '0') {
							// first time run; default number of "movers"
							tmpMovers = movers;
						}
						// set last tweet ID
						lastID = targetAr.first().children("div").attr("data-tweet-id");
						//console.log('after set:' + lastID)
						for (var j = 0; j < count; j++) {
							display(j, count, tmpMovers, delay, targetAr);
						}
						function resizeLightboxIframe() {
							var $iframe = $(top.document).find(".w11 iframe"),
								$html, $body, bodyStyles, iframeContentH;
							// poll for iframe content
							if ($iframe.contents().find(".iframecontent")[0]) {
								$html = $iframe.contents().find(".iframecontent");
								$body = $html.find("body");
								bodyStyles = window.getComputedStyle($body[0]);
								iframeContentH = Math.ceil(parseInt(bodyStyles.height, 10));
								//console.log($iframe.closest(".w11w5").css("--iframeHeight"))
								$iframe.closest(".w11w4").css({padding:0});
								$iframe.closest(".w11w5").css({"--iframeHeight":iframeContentH + "px"});
								$iframe.contents().find(".rc48w1").css({padding:"1em 0"});
								//console.log($iframe.closest(".w11w5").css("--iframeHeight"))
							} else {
								window.setTimeout(function () {return resizeLightboxIframe()},20);
							}
						}
						if (isInLightbox) {
							resizeLightboxIframe();
						}
					},
					beforeInjectionCallback: function (jsonresults) {
						var count = jsonresults.statuses.length > tweetLimit ? tweetLimit : jsonresults.statuses.length,
							hasNewRecords = false,
							idAr = [],
							partial,
							targetAr = [],
							newTweets = 0;
						// determine if this is the first run
						if (isFirstRun) {
							isFirstRun = false;
							return jsonresults;
						} else {
							// iterate through json results and flag new tweets
							for (var i = count - 1; i > -1; i--) {
								partial = '';
								if (AGreaterThanB(jsonresults.statuses[i].id_str, lastID)) {
									jsonresults.statuses[i].newclass = "rc48new";
									newTweets++;
									if (!hasNewRecords) {
										hasNewRecords = true;
									}
									// inject the  record onto the top of the tweet list
									partial = WS.tpl["rc48tweetshell"](jsonresults.statuses[i]);
									if (partial) {
										$(target).find(".rc48tweets > ul").prepend(partial);
									}
								}
							}
							targetAr = $(target).find(".rc48w3 > ul > li");
							// remove excess tweets
							if (targetAr.length > tweetCap)	{
								for (var i = tweetCap - 1; i < targetAr.length; i++) {
									targetAr.eq(i).remove();
								}
							}
							for (var j = 0; j < count; j++) {
								display(j, count, newTweets, delay, targetAr);
							}
							// store/reset the id of the latest tweet
							lastID = targetAr.first().children("div").attr("data-tweet-id");
							// cancel the standard injection by returning false
							return false;
						}
					}
				});
			}
		};

	$(".rc48").each( function (i, rc48) {

		var target = $(rc48).find(".rc48w2").first();
		if (propertyExists(target, "data-template")) {
			// poll to check if HBSINJECT is loaded
			interval[i] = setInterval( function () {
				if (objLoaded("HBSINJECT", "initialize")) {
					clearInterval(interval);
					injectFeed(target);
				}
			}, pollingDelay);
		}
	});
});

/*! RC51 */
var rc51interval = false;
var rc51currentTimestamp;

OCOM.register(function rc51($) {
	"use strict";

	let headingEls = $('h3.rc51title');
	for (var i = 0; i < headingEls.length ; i++) {
		headingEls[i].outerHTML = '<button class="rc51title">' + headingEls[i].innerHTML + '</button>';
	}
	var app = {},
		config,
		configData,
		configDefault = {
			"lang": "en",
			"day_f":[
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday"
			],
			"day_s":[
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat",
				"Sun"
			],
			"title_date":"%month_f% %d%, %yyyy%",
			"title_time":"%h%:%mm%%am_pm%",
			"title_time_separator": "&ndash;",
			"meridian":["AM","PM"],
			"miltime":false,
			"minute": "minute",
			"minutes": "minutes",
			"month_f":[
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],
			"month_s":[
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			"second": "second",
			"seconds": "seconds"
		},
		datetimePattern = /(\d{4})-(\d{1,2})-(\d{1,2})T(\d{1,2}):(\d{1,2})\|(\d{4})-(\d{1,2})-(\d{1,2})T(\d{1,2}):(\d{1,2})/,
		endpoint = {
			config:'/assets/json/rc51-formats.json',
			timezoneItems:'/assets/json/timezones.json'
		},
		host = window.location.host,
		manualTimestamp,
		manual = false,
		months,
		msInHour = 3600000,
		msInMinute = 60000,
		resizedMenuWidth,
		offset,
		overrideProps = ["miltime"], // Properties that can be set on a per agenda basis
		pgVars,
		props = Object.keys(configDefault),
		// Array of possible pattern elements that can be used in the format string
		replaceKeys = [
			"am_pm",		// meridian
			"h",			// hour
			"hh",			// 0 leading hour
			"m",			// minutes
			"mm",			// 0 leading minutes
			"month_f",		// month, full name
			"month_s",		// month, abbreviated
			"month_n",		// month digit
			"month_nn",		// month digit, leading 0
			"day_f",		// day
			"day_s",		// day, abbreviated
			"d",			// day of month
			"dd",			// day of month, leading 0
			"yyyy",			// full year
			"yy"			// 2-digit year
		],
		replaceValues = [],
		template = {
			title_date: "<h2 class=\"rc51date\">%date%</h2>",
			slot: "<div class=\"rc51w5\"><span class=\"rc51time\">%start_hours%</span><span class=\"rc51separator\">%time_separator%</span><span class=\"rc51time\">%end_hours%</span></div>",
			slotDuration: "<div class=\"rc51w5\"><span class=\"rc51time-duration\">%duration%</span></div>",
			testform: "<div class=\"rc51test cwidth\"><strong>RC51 Debug</strong><form>Enter a local time: <input type=\"text\" name=\"timetest\" placeholder=\"YYYY-MM-DDThh:mm\"></form></div>",
			timeslot: "<div class=\"rc51timeslot\"><div class=\"rc51w4\"><div class=\"rc51w6\"></div></div></div>"
		},
		tzData;
	// use local versions of the configuration files
	if (host.indexOf("developer.oracle.com") > -1) {
		endpoint.config = "https://developer.oracle.com/a/devo/docs/rc51-formats.json";
		endpoint.timezoneItems = "https://developer.oracle.com/a/devo/docs/timezones.json";
	} else if (host.indexOf("www-sites.oracle.com") > -1) {
		endpoint.config = "https://www-sites.oracle.com/asset/web/json/rc51-formats.json";
		endpoint.timezoneItems = "https://www-sites.oracle.com/asset/web/json/timezones.json";
	}
	/* 
	 * This function gives each agenda event a unique index 
	 */
	function addIndexToAgendaEvents() {
		$("[data-timeslot]").not(".rc51timeslot").each( function(i, ts) {
			$(ts).attr("data-index", i);
		});
	}
	function adjustRWInPageTabs(context) {
		if ($(context).find(".rw-inpagetabs")[0] && $(context).find(".rc51w11")[0] && getBreakpoint(context) == "desktop") {
			if ($(context).closest(".rtl")[0]) {
				$(context).find(".rw-inpagetabs li:last-of-type").css({"margin-left":$(context).find(".rc51w11").outerWidth()});
			} else {
				$(context).find(".rw-inpagetabs li:last-of-type").css({"margin-right":$(context).find(".rc51w11").outerWidth()});
			}
		} else {
			$(context).find(".rw-inpagetabs li:last-of-type").removeAttr("style");
		}
	}
	/* 
	 * Build the time zone select menus
	 */
	function buildTZmenu(context,d) {
		var area,
			areaAr = Object.keys(tzData["areas"]),
			areaArSize = areaAr.length,
			bigKey,
			c = [],
			currentTimestamp = d.getTime(),
			isDst,
			keys,
			less,
			label,
			loc,
			locAr,
			locArSize,
			$menuAll = $(context).find(".rc51menu.rc51menu-all"),
			$menuGrp = $(context).find(".rc51menu.rc51menu-grp"),
			offset,
			offsetH,
			offsetM,
			tabZones = [],
			tagged,
			tagObj = {},
			tagObj2 = {},
			tags,
			tagsUsed = [],
			timestamp,
			timezone,
			tmp,
			txt,
			zone;

		// inject event timezone option group
		$menuGrp.find("select").prepend("<optgroup id=\"rc51tabzones\" label=\"" + $menuGrp.data("label") + "\"></optgroup>")
		// inject optgroups for tags 
		$(context).find(".rc51-agenda").each( function (i,agenda) {
			var //label = "---",
				index = $(agenda).data("index"),
				tag = $(agenda).data("tag") ? $(agenda).data("tag") : $(agenda).attr("data-time-zone"),
				tagAr = tag.split(",");

			tabZones.push($(agenda).attr("data-time-zone"));

			for (var j = 0; j < tagAr.length; j++) {				
				if (tagsUsed.indexOf(tagAr[j]) < 0) {
					tagsUsed.push(tagAr[j]);
					tagObj[tagAr[j]] = {
						"index": tagsUsed.indexOf(tagAr[j]),
						"items": []
					}
				}
			}
		});

		// inject optgroup per unique tag
		for (var i = 0; i < tagsUsed.length; i++) {
			label = "---";
			if (!$menuGrp.find("optgroup[data-index=" + i + "]")[0]) {
				$menuGrp.find("#rc51global").before("<optgroup data-index=\"" + i + "\"label=\"" + label + "\"></optgroup>");
			}
		}
		
		// inject global optgroup
		label = $menuAll.attr("data-label");
		$menuAll.find("select").append("<optgroup label=\"" + label + "\"></optgroup>");
		// parse time zone data and build global menu
		for (var i = 0; i < areaArSize; i++) {
			locAr = Object.keys(tzData.areas[areaAr[i]]);
			locArSize = locAr.length;
			area = areaAr[i];
			for (var j = 0; j < locArSize; j++) {
				if (!tzData.areas[areaAr[i]][locAr[j]].hasOwnProperty("redirect")) {
					loc = locAr[j].replace(/_/g," ");
					txt = area + "/" + loc;
					less = {};

					if (tzData.areas[areaAr[i]][locAr[j]].hasOwnProperty("tag")) {
						tags = tzData.areas[areaAr[i]][locAr[j]].tag;
						tags = tags.replace(/\s*,\s*/,",");
						tags = tags.split(",");
					} else {
						tags = [];
					}
					if (tzData.areas[areaAr[i]][locAr[j]].data.length > 1) {
						for (var k = 0; k < tzData.areas[areaAr[i]][locAr[j]].data.length; k++) {
							//[timestamp,offset,zone,isDst] = tzData.areas[areaAr[i]][locAr[j]].data[k].split("|");

							var tmp_ar = tzData.areas[areaAr[i]][locAr[j]].data[k].split("|");
							timestamp = tmp_ar[0];
							offset = tmp_ar[1];
							zone = tmp_ar[2];
							isDst = tmp_ar[3];


							// UNIX timestamps are in seconds, JS in milliseconds
							if (timestamp * 1000 <= currentTimestamp) {
								less[timestamp] = tzData.areas[areaAr[i]][locAr[j]].data[k];
							}
						}
						// find the most recent entry; it will have the data that applies to the current date
						keys = Object.keys(less);
						bigKey = Math.max.apply(null,keys);
						var tmp_ar = less[bigKey].split("|");
						timestamp = tmp_ar[0];
						offset = tmp_ar[1];
						zone = tmp_ar[2];
						isDst = tmp_ar[3];
					} else {
						//[timestamp,offset,zone,isDst] = tzData.areas[areaAr[i]][locAr[j]].data[0].split("|");
						var tmp_ar = tzData.areas[areaAr[i]][locAr[j]].data[0].split("|");
						timestamp = tmp_ar[0];
						offset = tmp_ar[1];
						zone = tmp_ar[2];
						isDst = tmp_ar[3];
					}
					tagged = [];
					// Determine if any of the tags in the source are used by the publisher
					if (tags.length > 0) {
						for (var t = 0; t < tagsUsed.length; t++) {
							if (tags.indexOf(tagsUsed[t]) > -1) {
								tagged.push(tags[tags.indexOf(tagsUsed[t])]);

							} else if (tagsUsed[t] == area + "/" + loc) {
								// no tag was selected
								tagged.push(tagsUsed[t]);
								break;
							}

						}
					} else if (tagsUsed.indexOf(area + "/" + loc) > -1) {
						tagged.push(area + "/" + loc);
					}

					/* 
					 * Determine if offset contains minutes and recombine
					 * offset values into hours/minutes in the offset variable
					 */
					offset = convertOffset(offset);
					// build option and inject it into the appropriate optgroup

					// strip out daylight/standard from US time zomes b/c editorial
					zone = zone.replace(/^([ECMPAH])[SD]T$/,"$1"+"T").replace(/^AK[SD]T$/,"AKT");

					var option = $("<option value=\"" + area + "/" + loc + "\">" + area + "/" + loc + " (" + zone + ")" + "</option>");

					if (tagged.length > 0) {
						for (var k = 0; k < tagged.length; k++) {
							tagObj[tagged[k]].items.push({"option":option,"offset":offset,"area":area + "/" + loc});
							//$menuGrp.find("optgroup[data-index=" + tagObj[tagged].index + "]").append($(option).clone());
						}

					}

					// inject into the global menu
					$menuAll.find("select optgroup").last().append(option);
				}
			}
		}
		// sort event menu items
		var sortedKeys = [];
		var keys = Object.keys(tagObj);		
		for (var i = 0; i < keys.length; i++) {
			tagObj[keys[i]].items.sort( function (a,b) {
				if (a.offset > b.offset) {
					return 1;
				} else if (a.offset < b.offset) {
					return -1;
				} else {
					if (a.area > b.area) {
						return 1;
					} else if (a.area < b.area) {
						return -1;
					}
				}
			});
			// convert obj to array to sort keys by first item offset
			// adjust for offsets with minutes
			offset = tagObj[keys[i]].items[0].offset;
			var tmpAr = offset.toString().split(":");
			if (tmpAr.length > 1) {
				offsetM = tmpAr[1];
				offsetH = +tmpAr[0];
				offset = offsetH + (+offsetM/60);
			}
			sortedKeys.push({
				"key":keys[i],
				"offsetFloor":+offset
			});
		}
		sortedKeys.sort( function (a,b) {
			if (a.offsetFloor > b.offsetFloor) {
				return 1;
			} else if (a.offsetFloor < b.offsetFloor) {
				return -1;
			} else {
				if (a.key > b.key) {
					return 1;
				} else if (a.key < b.key) {
					return -1;
				}
			}
		});


		// inject event menu items
		for (var i = 0; i < sortedKeys.length; i++) {
			for (var j = 0; j < tagObj[sortedKeys[i].key].items.length; j++) {
				$menuGrp.find("optgroup[data-index=" + i + "]").append(tagObj[sortedKeys[i].key].items[j].option.clone());
			}
		}
	}
	/* 
	 * This function parses out the individual date/time elements that replace the 
	 * format string.
	 */
	function buildValues(dateObj) {
		var year = dateObj.getFullYear(),
			month = dateObj.getMonth(),
			day = dateObj.getDate(),
			dayOfWeek = dateObj.getDay(),
			hours = dateObj.getHours(),
			minutes = dateObj.getMinutes(),
			meridian = '';

		if (replaceValues.length > 0) {
			replaceValues.splice(0,replaceValues.length); // clear old values
		}
		if (!config.miltime) {
			meridian = hours < 12 ? config.meridian[0] : config.meridian[1]
			if (hours > 12) {
				hours = hours - 12;
			} else if (hours == 0) {
				hours = 12;
			}
		}
		replaceValues.push("<span class=\"rc51meridiem\">" + meridian + "</span>");
		replaceValues.push(hours);
		replaceValues.push(pad(hours));
		replaceValues.push(minutes);
		replaceValues.push(pad(minutes));
		replaceValues.push(config.month_f[month]);
		replaceValues.push(config.month_s[month]);
		replaceValues.push(month + 1);
		replaceValues.push(pad(+month + 1));
		replaceValues.push(config.day_f[dayOfWeek]);
		replaceValues.push(config.day_s[dayOfWeek]);
		replaceValues.push(day);
		replaceValues.push(pad(day));
		replaceValues.push(year);
		replaceValues.push(year.toString().slice(2));
	}
	function changeTimeZoneMenu(currentTarget,noTabs) {
		var $top = noTabs ? $(currentTarget) : $(currentTarget).closest(".rc51"),
			$menu = $top.find(".rc51activemenu .rc51zone");
		if (noTabs) {
			$menu.val($top.find(".rc51-agenda").attr("data-time-zone"));
		} else {
			$menu.val($top.find($(currentTarget).attr("href") + " .rc51-agenda").attr("data-time-zone"));
		}
	}
	function checkForRedirect(context) {
		var agendas = $(context).find("[data-time-zone]"),
			area,
			loc,
			newArea,
			newLoc,
			timezone;
		$(agendas).each( function (i,a) {
			timezone = $(a).attr("data-time-zone");
			area = timezone.split("/")[0];
			loc = timezone.replace(/^[^\/]+\//,"");

			if (tzData.areas.hasOwnProperty(area) && tzData.areas[area].hasOwnProperty(loc)) {
				if (tzData.areas[area][loc].redirect) {
					$(a).attr("data-time-zone",tzData.areas[area][loc].redirect);
				}
			}
		});
	}
	/*
	 * Compensate for JS Date object behavior of always displaying local offset time
	 */
	function compensateForLocalOffset(time) {
		//var d = new Date();
		time.setMinutes(time.getMinutes() + time.getTimezoneOffset());
		return time;
	}
	// expects offset in seconds
	function convertOffset(offset) {
		var offsetH,offsetM;
		offsetH = parseInt(offset / 3600);
		offsetM = (offset % 3600) / 60;
		if (offsetM > 0) {
			return offsetH + ":" + offsetM;
		} else {
			return offsetH;
		}
	}
	function convertTimeToNewOffset(time,offset,newOffset) {
		var newOffsetH,
			newOffsetM,
			offsetH,
			offsetM,
			originTime = new Date(time),
			newTime = new Date(time),
			shiftH,
			shiftM,
			tmp = [];
		if (offset) {
			tmp = newOffset.toString().split(":");
			newOffsetH = tmp[0] ? tmp[0] : 0;
			newOffsetM = tmp[1] ? tmp[1] : 0;	
			tmp = offset.toString().split(":");
			offsetH = tmp[0] ? tmp[0] : 0;
			offsetM = tmp[1] ? tmp[1] : 0;
			shiftH = +offsetH - +newOffsetH,
			shiftM = +offsetM - +newOffsetM;
		} else {
			tmp = newOffset.toString().split(":");
			if (tmp[1]) {
				shiftM = +tmp[1];
			} else {
				shiftM = 0;
			}
			shiftH = tmp[0] ? +tmp[0] : 0;
			shiftH = shiftH * -1;
			shiftM = shiftM * -1;
		}
		newTime.setHours(originTime.getHours() - shiftH);
		newTime.setMinutes(originTime.getMinutes() - shiftM);
		return newTime;
	}
	function convertToUTC(datetime) {
		var offsetM = Date.getTimezoneOffset();
		return datetime.setMinutes(datetime.getMinutes() - offsetM);
	}
	function error(e) {
		console.log('Error: configuration file not loaded.');
		console.log(e);
	}
	/**
	 * Returns string representation of breakpoint name ("desktop","mobile", etc.)
	 */
	function getBreakpoint(context) {
		return window.getComputedStyle($(context)[0], ':before').getPropertyValue('content').replace(/\"/g, '');
	}
	function getConfig(agenda) {
		var cdat,
			country,
			language,
			lang = $(agenda).data("lang") ? $(agenda).data("lang") : (pgVars.lang ? pgVars.lang : configDefault.lang), // can be set on a per agenda basis
			obj = {};
//console.log(lang);
		//[language,country] = lang.split("-");
		var tmp_ar = lang.split("-");
		language = tmp_ar[0];
		country = tmp_ar[1];

		for (var i = 0; i < props.length; i++) {
			if (overrideProps.indexOf(props[i]) >= 0 && $(agenda).data(props[i])) {
				obj[props[i]] = $(agenda).data(props[i]);
			} else {
				// checks for [language]-[country_code] (ex: "es-MX"); falls back on [language]
				if (configData.languages.hasOwnProperty(lang)) {
					cdat = configData.languages[lang];
				} else {
					cdat = configData.languages[language];
				}
				obj[props[i]] = cdat[props[i]] ? cdat[props[i]] : configDefault[props[i]];
			}
		}
		return obj;
	}
	// Arguments in ascending order
	// t1 & t2 must be JS timestamps
	// Returns a string value in minutes with unit label
	function getDuration(t1,t2) {
		var ms = t2 - t1,
			minutes = ms / msInMinute,
			units;

		if (minutes == 1) {
			units = config.minute;
		} else {
			units = config.minutes;
		}
		return minutes + ' ' + units;
	}
	function getOffset(d) {
		var date = d,
			offset = Math.abs(date.getTimezoneOffset()),
			factor = (date.getTimezoneOffset() > 0) ? -1 : 1,
			hours = Math.floor(offset / 60),
			minutes = offset % 60;
		if (minutes > 0) {
			return (factor * hours) + ":" + pad(minutes);
		} else {
			return factor * hours;
		}
	}
	function getPropsOfLocation(targetTimestamp,location) {
		var ar,
			area = location.split("/")[0],
			bigKey,
			d,
			isDst,
			keys,
			less = {},
			loc = location.replace(/^[^\/]+\//,""),
			offset,
			timestamp,
			txt,
			zone;
		loc = loc.replace(/ /g,"_");
		if (tzData.areas.hasOwnProperty(area) && tzData.areas[area].hasOwnProperty(loc)) {
			d = tzData.areas[area][loc].data;
			for (var i = 0; i < d.length; i++) {

				//[timestamp,offset,zone,isDst] = d[i].split("|");
				var tmp_ar = d[i].split("|");
				timestamp = tmp_ar[0];
				offset = tmp_ar[1];
				zone = tmp_ar[2];
				isDst = tmp_ar[3];

				// UNIX timestamps are in seconds, JS in milliseconds
				if (timestamp * 1000 <= targetTimestamp) {
					less[timestamp] = d[i];
				}
			}
			keys = Object.keys(less);
			bigKey = Math.max.apply(null,keys);
			return less[bigKey].split("|");
		}		
	}
	function getPageVars() {
		return {
			siteid: $('meta[name="siteid"]').attr('content') || false,
			countryid: $('meta[name="countryid"]').attr('content') || false,
			country: $('meta[name="country"]').attr('content') || false,
			lang: $('html').attr('lang') || false
		};
	}
	function getUTCTimestampsFromString(string) {
		var tmp,year,month,day,hour,minute,year_end,month_end,day_end,hour_end,minute_end;
		//[tmp,year,month,day,hour,minute,year_end,month_end,day_end,hour_end,minute_end] = string.match(datetimePattern);

		var tmp_ar = string.match(datetimePattern);
		year = tmp_ar[1];
		month = tmp_ar[2];
		day = tmp_ar[3];
		hour = tmp_ar[4];
		minute = tmp_ar[5];
		year_end = tmp_ar[6];
		month_end = tmp_ar[7];
		day_end = tmp_ar[8];
		hour_end = tmp_ar[9];
		minute_end = tmp_ar[10];

		month = month - 1;
		month_end = month_end - 1;
		return [new Date(Date.UTC(year,month,day,hour,minute)).getTime(), new Date(Date.UTC(year_end,month_end,day_end,hour_end,minute_end)).getTime()]
	}
	function initialize(data, timezoneData) {
		var hash = window.location.hash,
			currentDateObj = new Date();
		tzData = timezoneData[0];
		offset = getOffset(currentDateObj);
		pgVars = getPageVars();
		configData = data[0];
		addIndexToAgendaEvents();

		window.onhashchange = function () {
			hash = window.location.hash;
		}
		$(window).off('resize.rc51').on('resize.rc51', function () {
			$(".rc51").each( function (i, rc51) {
				adjustRWInPageTabs(rc51);
			});
		});
		$(".rc51").each( function (i, rc51) {
			checkForRedirect(rc51);
			if ($(rc51).find(".rc51w2 a")[0]) {
				$(rc51).find(".rc51w2 a").each( function (j, tab) {
					// add indexes to agendas
					$(rc51).find($(tab).attr("href") + " .rc51-agenda").attr("data-index",j);
					$(tab).keypress(function(e){
						if(e.which == 13 || e.which == 32){ 
							e.preventDefault();
							selectTab(e.currentTarget);
							document.activeElement.parentElement.classList.add("active");
							document.activeElement.click();
						}
					})
					$(tab).on("click", function (e) {
						e.preventDefault();
						selectTab(e.currentTarget);
						initializeUnstructuredAgendaBlock(rc51);
					});
				});
			} else {
				$(rc51).not(".rc51notabs").addClass("rc51notabs");
				// add indexes to agendas if there are no tabs
				$(rc51).find(".rc51-agenda").each( function (j,agenda) {
					$(agenda).attr("data-index",j);
				});
			}
			// build time zone select menus
			buildTZmenu(rc51,currentDateObj,offset);
			adjustRWInPageTabs(rc51);
			$(window).trigger("rt01.tabview");
			// determine default time zone option
			selectDefaultTZOption(rc51,currentDateObj,offset);
			// determine default tab
			if ($(rc51).find(".rc51w2 a")[0]) {
				if (hash) {
					$(rc51).find(".rc51w2 a").each( function (j,tab) {
						if ($(tab).attr("href") == hash) {
							$(tab).closest("li").addClass("rc51active");
						}
					});
				}
				if ($(rc51).find(".rc51w2 .active")[0]) {
					selectTab($(rc51).find(".rc51w2 .active a").first());
				} else {
					selectTab($(rc51).find(".rc51w2 a").first());
				}
			} else {
				// if there are no tabs, pass context and true
				selectTab(rc51,true);

			}
			// wrap rc51title containers with anchors if there are descriptions 
			$(rc51).find(".rc51desc").each( function (j,desc) {
				var html = $("<span class='expander icn-nav-down'>");
				if ($(desc).closest("[data-index]")[0]) {
					if ($(desc).closest("[data-index]").find(".rc51title")[0] && !$(desc).closest("[data-index]").find(".rc51title a")[0]) {
						$(desc).closest("[data-index]").find(".rc51title").append(html);
						$(desc).closest("[data-index]").find(".rc51title").attr("aria-expanded", "false");
					}
				}
			});
			$(rc51).on("click keydown",".rc51title",function (e) {
				if(e.type === 'click' || e.keyCode === 13 || e.keyCode === 32){
					if ($(e.currentTarget).closest("[data-index]").find(".rc51desc")[0]) {
						e.preventDefault();
						if(!$(e.currentTarget).hasClass("rc51active")){
							$(e.currentTarget).addClass("rc51active").attr("aria-expanded", true);
							$(e.currentTarget).closest("[data-index]").find(".rc51desc").addClass("rc51active").slideDown();
							$(e.currentTarget).find(".expander").removeClass("icn-nav-down").toggleClass("icn-nav-up");
						}else {
							$(e.currentTarget).removeClass("rc51active").attr("aria-expanded", false);
							$(e.currentTarget).closest("[data-index]").find(".rc51desc").removeClass("rc51active").slideUp();
							$(e.currentTarget).find(".expander").removeClass("icn-nav-up").toggleClass("icn-nav-down");
						}
					}
				}
			});
			$(rc51).on("change","select.rc51zone",function (e) {
				var tab;

				$(e.currentTarget).closest(".rc51w2").find("[selected]").removeAttr("selected");

				if ($(e.currentTarget).val() == "show") {
					$(e.currentTarget).closest(".rc51menu").removeClass("rc51activemenu");
					$(e.currentTarget).closest(".rc51menu").siblings(".rc51menu-all").addClass("rc51activemenu");
					// define active tab or first agenda
					tab = $(rc51).attr("data-selected") ? $(rc51).attr("data-selected") : $(rc51).find($(rc51).find(".rc51w2 .active a").attr("href") + " .rc51-agenda").attr("data-time-zone");

					$(e.currentTarget).closest(".rc51menu").siblings(".rc51menu-all").find("select").val(tab);
					$(rc51).attr("data-selected",tab);
				} else if ($(e.currentTarget).val() == "hide") {
					$(e.currentTarget).closest(".rc51menu").removeClass("rc51activemenu");
					$(e.currentTarget).closest(".rc51menu").siblings(".rc51menu-grp").addClass("rc51activemenu");
					// when returning to the event time zone menu, select the option that is either:
					// 1. the same value that was previously selected in the global menu
					// 2. the value represented by the selected tab
					// 3. the value represented by the first tab
					if ($(rc51).attr("data-selected") && $(e.currentTarget).closest(".rc51menu").siblings(".rc51menu-grp").find("[value=\"" + $(rc51).attr("data-selected") + "\"]")[0]) {
						tab = $(rc51).attr("data-selected");
					} else if ($(rc51).find(".rc51active .rc51-agenda")[0]) {
						tab = $(rc51).find(".rc51active .rc51-agenda").attr("data-time-zone");
					} else {
						tab = $(rc51).find(".rc51-agenda").attr("data-time-zone");
					}
					$(e.currentTarget).closest(".rc51menu").siblings(".rc51menu-grp").find("select").val(tab);
					$(rc51).attr("data-selected",tab);
				} else {
					$(rc51).attr("data-selected",$(e.currentTarget).val());
				}

				initializeUnstructuredAgendaBlock(rc51);
			});
			initializeUnstructuredAgendaBlock(rc51);

			// create testing util
			if (document.location.href.match(/8989\/builder\/compsample,f20/) && !$(".rc51 input[name='timetest']")[0] && !$(rc51).closest(".rc51static")[0]) {
				$(rc51).append(template.testform);
				$(".rc51test").on("submit", function(e) {
					e.preventDefault();
					console.log("******* DEBUG VALUE SUBMITTED *******")
					tester(e);
				});
			}

		});
		if (!$(".rc51static")[0]) {
			if (!rc51interval) {
				rc51interval = window.setInterval( function () {
					showProgress();
				},1000);
			}
		}
	}
	// clears and rebuilds agendas
	function initializeUnstructuredAgendaBlock(context) {
		var agendaObj = {},				// sorted agenda data
			caption,
			captions,
			convertedDatetime,			// date object of scheduled item converted to offset
			convertedDatetime_end,		// date object of scheduled item converted to offset
			convertedTimestamp,			// timestamp of scheduled item converted to offset
			convertedTimestamp_end,		// timestamp of scheduled item converted to offset
			dateKeyAr = [], 			// collected day keys for sorting
			datestamp,					// timestamp of day that agenda items are grouped
			duration,
			durationLabel,
			itemDate,
			offset,
			props,
			newLocation = $(context).find(".rc51activemenu select.rc51zone").val(),
			location,
			showDuration = $(context).hasClass("rc51duration"),
			slot,						// holds agenda item to be injected
			timeKeyObj,					// collects keys to sort timeslots
			times,
			timestamp,					// starting timestamp (UTC 0) of scheduled item
			timestamp_end,				// ending timestamp (UTC 0) of scheduled item
			titleDate,
			titleTime,
			tmp,
			ts;

		$(context).find(".rc51-agenda").each( function (i, agenda) {
			if ($(agenda).closest(".rc51active")[0]) {

				//Loop over all speakers lists and set role="none" to ul where length <= 1
				$(".rc51speakers").each(function(){
					if($(this).find("li").length <= 1){
						$(this).attr("role", "none");
						$(this).find("li").attr("role", "none")
					}
				});

				location = $(agenda).attr("data-time-zone");

				config = getConfig(agenda);
				agendaObj = {};
				dateKeyAr = [];
				timeKeyObj = {};
				// clear out the old timeslots
				$(agenda).find("div.rc51timeslot").remove();
				$(agenda).find("h2").remove();
				// (re)generate timeslots
				$(agenda).find("[data-timeslot]").not(".rc51timeslot").each( function (i, oracle_event) {
					var tmp_ar = getUTCTimestampsFromString($(oracle_event).data("timeslot"));
					timestamp = tmp_ar[0];
					timestamp_end = tmp_ar[1];

					// convert UTC timestamps to region offsetted date objects

					if (newLocation && location !== newLocation) {
						props = getPropsOfLocation(timestamp,newLocation);
						convertedDatetime = convertTimeToNewOffset(timestamp,null,convertOffset(props[1]));
						convertedDatetime_end = convertTimeToNewOffset(timestamp_end,null,convertOffset(props[1]));
					} else {
						props = getPropsOfLocation(timestamp,location);
						convertedDatetime = convertTimeToNewOffset(timestamp,null,convertOffset(props[1]));
						convertedDatetime_end = convertTimeToNewOffset(timestamp_end,null,convertOffset(props[1]));
					}

					convertedDatetime = compensateForLocalOffset(convertedDatetime);
					convertedDatetime_end = compensateForLocalOffset(convertedDatetime_end);

					// isolate day for grouping of agenda items
					datestamp = new Date(convertedDatetime.getFullYear(),convertedDatetime.getMonth(),convertedDatetime.getDate()).getTime();
					//datestamp_end = new Date(convertedDatetime_end.getFullYear(),convertedDatetime_end.getMonth(),convertedDatetime_end.getDate()).getTime();
					convertedTimestamp = convertedDatetime.getTime();
					convertedTimestamp_end = convertedDatetime_end.getTime();
					ts = convertedTimestamp + '-' + convertedTimestamp_end;
					if (!agendaObj.hasOwnProperty(datestamp)) {
					agendaObj[datestamp] = {};
						timeKeyObj[datestamp] = [];
						dateKeyAr.push(datestamp);
					}
					if (!agendaObj[datestamp].hasOwnProperty(ts)) {
						timeKeyObj[datestamp].push(ts);
						agendaObj[datestamp][ts] = [];
					}
					agendaObj[datestamp][ts].push($(oracle_event).clone());
				});
				// sort the dates
				dateKeyAr.sort();

				for (var i = 0; i < dateKeyAr.length; i++) {
					// sort the timeslots
					timeKeyObj[dateKeyAr[i]].sort();

					// inject date title
					buildValues(new Date(dateKeyAr[i]));
					titleDate = template.title_date.replace(/%date%/,parseFormattingStr(config.title_date));
					$(agenda).append(titleDate);

					for (var j = 0; j < timeKeyObj[dateKeyAr[i]].length; j++) {
						// timeslot
						var newBlock = $(template.timeslot);
						$(agenda).append(newBlock);

						// inject time title

						times = timeKeyObj[dateKeyAr[i]][j].split("-");
						if (showDuration) {
							
							durationLabel = "";
							for (var k = 0; k < agendaObj[dateKeyAr[i]][timeKeyObj[dateKeyAr[i]][j]].length; k++) {
								tmp = agendaObj[dateKeyAr[i]][timeKeyObj[dateKeyAr[i]][j]][k];
								durationLabel += tmp.attr("data-duration-label") ? tmp.attr("data-duration-label") : "";
							}
							if (durationLabel) {
								duration = durationLabel;
							} else {
								duration = getDuration(+times[0],+times[1]);
							}
							slot = template.slotDuration.replace(/%duration%/,duration);

						} else {
							buildValues(new Date(+times[0]));
							slot = template.slot.replace(/%start_hours%/,parseFormattingStr(config.title_time)).replace(/%time_separator%/,parseFormattingStr(config.title_time_separator));
							buildValues(new Date(+times[1]));
							slot = slot.replace(/%end_hours%/,parseFormattingStr(config.title_time));
						}
						
						$(newBlock).find(".rc51w4").prepend(slot);
						$(newBlock).attr("data-timeslot",timeKeyObj[dateKeyAr[i]][j]);

						// inject the cloned schedule items
						if (agendaObj[dateKeyAr[i]][timeKeyObj[dateKeyAr[i]][j]].length > 1) {
							if ($(newBlock).closest(".rc51v1")[0]) {
								$(newBlock).find(".rc51w6").addClass("rc51triplestack");
							} else {
								$(newBlock).find(".rc51w6").addClass("rc51doublestack");
							}
						}
						for (var k = 0; k < agendaObj[dateKeyAr[i]][timeKeyObj[dateKeyAr[i]][j]].length; k++) {
							tmp = agendaObj[dateKeyAr[i]][timeKeyObj[dateKeyAr[i]][j]][k];
							caption = $(tmp).children(".timeslot-caption");
							if (caption) {
								$(newBlock).find(".rc51w5").append(caption);
							}
							$(newBlock).addClass($(tmp).attr("class"));
							$(tmp).children(".rc51eventcontent").each( function (i, div) {
								$(div).attr("data-index",$(tmp).attr("data-index"));
								$(newBlock).find(".rc51w6").append($(div));
							});

						}
					}
				}
			}
		});
	}
	function manualTest (input) {
		var pattern = /(\d{4})-(\d{1,2})-(\d{1,2})T(\d{1,2}):(\d{1,2})/,
			matches = input.match(pattern),
			d;
		if (!manual) {
			manual = true;
		}
		if (rc51interval) {
			window.clearInterval(rc51interval);
			rc51interval = false;
		}
		if (matches) {
			d = new Date(matches[1],matches[2] - 1,matches[3],matches[4],matches[5]);
			manualTimestamp = d.getTime();
			showProgress();
			return d;
		}
	}
	function pad(value) {
	    return value < 10 ? '0' + value : value;
	}
	/*
	 *	parseFormattingStr() replaces each pattern element with the data it represents
	 */
	function parseFormattingStr(expression) {
		var newStr = expression || '',
			regex,
			length = replaceKeys.length;
		if (newStr.length > 0) {
			for (var i = 0; i < length; i++) {
				regex = new RegExp("%" + replaceKeys[i] + "%","g");
				newStr = newStr.replace(regex,replaceValues[i]);
			}
		}
		return newStr;
	}
	function selectDefaultTZOption(context,dateObj) {
		var $menuGrp = $(context).find(".rc51menu.rc51menu-grp"),
			target,
			zone;

		if ($(context).find(".rc51w2 .active a")[0]) {
			target = $(context).find(".rc51w2 .active a").attr("href");
		} else {
			target = $(context).find(".rc51w2 li:first a").attr("href");
		}
		zone = $(context).find(target).attr("data-time-zone");
		$menuGrp.find("select").val(zone);
		//set timezone menu
		changeTimeZoneMenu(context,true);
	}
	function selectTab(currentTarget,noTabs) {
		var $previousItem,
			$previousPanel,
			$currentItem,
			$currentPanel,
			context;
		if (noTabs) {
			context = currentTarget;
			$(context).find(".rc51w3").addClass("rc51active");
			$(context).attr("data-selected",$(context).find(".rc51w3 .rc51-agenda").attr("data-time-zone"));
		} else {
			$previousItem = $(currentTarget).closest("li").siblings(".active").find("href");
			$previousPanel = $(currentTarget).closest(".rc51w1").find(".rc51w3.rc51active");
			$currentItem = $(currentTarget).find("href");
			$currentPanel = $(currentTarget).closest(".rc51w1").find($(currentTarget).attr("href"));
			$previousItem.removeClass("active");
			$previousPanel.removeClass("rc51active");
			$currentItem.addClass("active");
			$previousItem.attr("aria-selected", "false");
			$currentItem.attr("aria-selected", "true");
			$currentPanel.addClass("rc51active");	
		}
		// if data-selected has not been set, change to tab timezone with when a tab is clicked
		if (!$(currentTarget).closest(".rc51").data("selected")) {
			changeTimeZoneMenu(currentTarget,noTabs);
		}
	}
	function showProgress() {
		var convertedCurrentDatetime,
			currentTimestamp,
			d,
			localDatetime,
			offset,
			slot = {
				start: '',
				end: ''
			},
			t1,t2,
			yyyy,mm,dd,h,min;

		$(".rc51-agenda").each( function (i, agenda) {
			if ($(agenda).closest(".rc51active")[0]) {

				//get offset
				//offset = $("a[href=\"#" + $(agenda).closest(".rc51w3").attr("id") + "\"]").data("offset");
				if (manual) {
					localDatetime = manualTimestamp;
				} else {
					d = new Date();
					// convert local time to UTC
					localDatetime = d.getTime();
				}
				currentTimestamp = localDatetime;

				$(agenda).find("[data-timeslot]").not(".rc51timeslot").each( function (j, timeslot) {
					var endTime,
						startTime,
						string = $(timeslot).data("timeslot"),
						target = $(agenda).find(".rc51timeslot [data-index=\"" + $(timeslot).data("index") + "\"]").closest(".rc51timeslot");

					var tmp_ar = getUTCTimestampsFromString(string);
					startTime = tmp_ar[0];
					endTime = tmp_ar[1];
					//[startTime, endTime] = getUTCTimestampsFromString(string);
					
					$(target).removeClass("rc51slotcurrent-1");
					$(target).removeClass("rc51slotcurrent-2");
					if (currentTimestamp >= startTime && currentTimestamp < endTime) {
						// time slot in progress
						$(target).removeClass("rc51slotpast");
						$(target).not(".rc51slotcurrent").addClass("rc51slotcurrent");
					} else if (currentTimestamp >= endTime) {

						// time slot passed
						$(target).not(".rc51slotpast").addClass("rc51slotpast");
						$(target).removeClass("rc51slotcurrent");
					} else {
						$(target).removeClass("rc51slotcurrent");
						$(target).removeClass("rc51slotpast");
					}

				});
				if ($(agenda).find(".rc51slotcurrent").length > 1) {
					
					$(".rc51slotcurrent").each( function (j, slot) {
						if ($(slot).next(".rc51slotcurrent")[0]) {
							$(slot).addClass("rc51slotcurrent-1");
						} else if ($(slot).prev(".rc51slotcurrent")[0]) {
							$(slot).addClass("rc51slotcurrent-2");
						}
					});

				}
			}
		});
	}
	function tester(e) {
		var input = $(e.currentTarget).find("input[name=timetest]").val();
		manualTest(input);
	}
	function timestampChangeOffset(timestamp,currentOffset,targetOffset) {
		var ms = (currentOffset - targetOffset) * msInHour;
		return timestamp - ms;
	}
	window.RC51test = function (input) {
		return manualTest(input);
	}
	jQuery.when(
		jQuery.ajax( {dataType:'json',url:endpoint.config,cache:true} ),
		jQuery.ajax( {dataType:'json',url:endpoint.timezoneItems,cache:true} )
	).then( initialize, error );
});

/*! RC63 */
OCOM.register(function rc63($) {
	'use strict';

	var delay = 900000, //ms in 15 minutes
		visited;
	$('div.rc63random').randomload(true);

	setTimeout(function(){
		$(".js div.rc63random .rc63w4, .js div.rc63static .rc63w4").css({'opacity': '1', 'display': 'flex'});
	},100);

	if (sessionStorage.rc63visited) {
		visited = +sessionStorage.rc63visited + +delay;
		if (visited >= Date.now()) {
			$("section.rc63").addClass("rc63revisited");
		} else {
			sessionStorage.removeItem("rc63visited");
		}
	}
	$("section.rc63").addClass("rc63ready");
	$(".rc63random,.rc63static").on("click", "a", function (e) {
		sessionStorage.rc63visited = Date.now();
	});

	$(window).resize(function() {
		if (document.documentElement.clientWidth <= 1024) {    
			$(".rc63w2").addClass("col-twothreefifth");
		} else {
			$(".rc63w2").removeClass("col-twothreefifth");
		}
	}).resize()

	/*
	$('.rc63traditionalAccount').on('click', function(e) {
		e.preventDefault();
		$('.rc63submit').addClass('inActive');
		$('.rc63Select, .rc63newAccount').removeClass('hide');
		$('.rc63inputLabel, .rc63input, .rc63traditionalAccount').addClass('hide');
	});

	$('.rc63newAccount').on('click', function(e) {
		e.preventDefault();
		$('.rc63submit').addClass('inActive');
		$('.rc63Select, .rc63newAccount').addClass('hide');
		$('.rc63inputLabel, .rc63input, .rc63traditionalAccount').removeClass('hide');
	});

	$('.rc63input').on('change keyup paste', function(e) {
		if ($(this).val()) {
			$('.rc63submit').removeClass('inActive');
		} else {
			$('.rc63submit').addClass('inActive');
		}
	});

	$(".rc63 .oform-w1").on( "change", function () { 
		if ($('.rc63 .oform-w1').hasClass('ovalid')) {
			$('.rc63submit').removeClass('inActive');
		} else {
			$('.rc63submit').addClass('inActive');
		}
	}); 

	*/

 });

/*! RC64 */
const rc64Wrapper = () => {
	$(document).ready(function() {
		'use strict';
		if($('.rc64:not(.rc64v3)')[0]){
					// Set variables
					var listenerResize = null;
					var breakpointMobile = 600;
					var rc64w1 = $('.rc64w1');
					var rc64w2 = $('.rc64w2');
					var rc64nav = $('.rc64nav');
					var maxTab=$('.rc64').attr('data-maxtab');
					var rc64primaryItems = $('.rc64nav>li:not(.rc64more)');
					var rc64v1 = ($('.rc64v1')[0]) ? true : false;
					var rc64v2=($('.rc64v2')[0]) ? true : false;
					var tabs = [];
					var focusedTab = null;
					var status = { visible: 'visible', hidden: 'hidden' };
					var rc64navIndex = 'rc64panel_1';
					var observeDOM = (function(){
						var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
							eventListenerSupported = window.addEventListener;
				  
						return function(obj, callback){
							if( MutationObserver){
								// define a new observer
								var observer = new MutationObserver(function(mutations, obs){
									if( mutations[0].addedNodes.length )
										callback();
										observer.disconnect();
								});
								// have the observer observe foo for changes in children
								observer.observe( obj, { childList:true, subtree:false });
							}
							else if( eventListenerSupported){
								obj.addEventListener('DOMNodeInserted', callback, false);
								obj.addEventListener('DOMNodeRemoved', callback, false);
							}
						}
					})();
	
					$('.rc64w5[class*="-scrim"]').each(function() {
						this.className = this.className.replace(/-scrim/,'');
					});
	
					/*
					* Combobox Component
					*/
					const Rc64ComboBox = function () {
						let dropDownMenu = `
							<div id="rc64combo" class="combo rc64combo">
								<nav aria-label="tab selector">
									<div class="combo-input">
										<div class="rc64combo-wrapper" 
											aria-expanded="false"
											id="combo1" 
											role="button"
											tabindex="0">
											<span class="rc64combo-content"></span>
											<div class="rc64mobile-arrow icn-img icn-chevron-down"><br></div>
										</div>
									</div>
									<ul class="combo-menu" aria-hidden="true" aria-label="Customer stories" id="listbox1">
									</ul>
								</nav>
							</div>
						`;
	
						// Select the node that will be observed for mutations
						const targetNode = document.getElementsByClassName('jsloaded')[0];
	
						const callback = function() {
							return Rc64ComboBox.prototype.init();
						}
	
						observeDOM(targetNode, callback);
	
						// Create DOM template
						let temp = document.createElement('template');
						dropDownMenu = dropDownMenu.trim(); 
						temp.innerHTML = dropDownMenu;
	
						document.getElementsByClassName('jsloaded')[0].appendChild(temp.content.firstChild);
					
					};
	
					Rc64ComboBox.prototype.init = function () {
						Rc64ComboBox.prototype.setState();
						let state = Rc64ComboBox.prototype.getState();
	
						// create options
						state.options.map((option, index) => {
							const optionEl = Rc64ComboBox.prototype.createOption(option.name, option.id, option.logo, state.tabHasLogo);
							state.listBox.appendChild(optionEl);
						});
				
						// select the option according to the active index
						const selectedOption = state.options.filter(option => option.id === state.activeIndex )[0];
						if (state.tabHasLogo) {
							state.comboBox.getElementsByTagName('span')[0].remove();
							state.comboBox.insertBefore(selectedOption.logo[selectedOption.logo.length - 1], state.comboBox.children[0]);
						} else {
							state.comboBox.getElementsByTagName('span')[0].innerText = selectedOption.name;
						}
						// event listeners
						state.comboBox.addEventListener('click', Rc64ComboBox.prototype.onComboClick.bind(this));
						state.comboBox.addEventListener('keydown', Rc64ComboBox.prototype.onComboKeyDown.bind(this));

						setPanelSlidesA11y(true);
						setFirstPanelSlideA11y();
					};
					
					Rc64ComboBox.prototype.setState = function () {
						let parent = document.querySelector('.rc64combo');
						let comboEl = parent.querySelector('.rc64combo-wrapper');
						let listboxEl = parent.querySelector('.combo-menu');
						let rc64nav = document.querySelectorAll('.rc64nav li a');
						let options = [];
						const tabHasLogo = rc64v1;
					
						if (tabHasLogo) {
							rc64nav.forEach(function(element) {
								const logo = element.querySelectorAll('.rw-logo');
								if (logo.length === 2) {
									let cloneLogoGrey = logo[0].cloneNode(true);
									cloneLogoGrey.innerHTML = cloneLogoGrey.innerHTML.replace('data-src', 'src');
									let cloneLogoColors = logo[1].cloneNode(true);
									cloneLogoColors.innerHTML = cloneLogoColors.innerHTML.replace('data-src', 'src');
									options.push({id: element.dataset.target, logo: [cloneLogoGrey, cloneLogoColors], dataTarget: element.dataset.target });
								} else {
									let cloneLogo = logo[0].cloneNode(true);
									cloneLogo.innerHTML = cloneLogo.innerHTML.replace('data-src', 'src');
									options.push({id: element.dataset.target, logo: [cloneLogo], dataTarget: element.dataset.target });
								}
							});
						} else {
							rc64nav.forEach(function(element) {
								options.push({id: element.dataset.target, name: element.innerText, dataTarget: element.dataset.target });
							});
						}
						
						let open = false;
						let activeIndex = rc64navIndex;
						let prevIndex = 0;
	
						Rc64ComboBox.prototype.state = {
							parentNode: parent,
							comboBox: comboEl,
							listBox: listboxEl,
							options: options,
							isOpenMenu: open,
							tabHasLogo: tabHasLogo,
							activeIndex: activeIndex,
							prevIndex: prevIndex
						}
					} 
	
					Rc64ComboBox.prototype.getState = function() {
						return Rc64ComboBox.prototype.state;
					}
	
					Rc64ComboBox.prototype.createOption = function(optionText, index, logo, tabHasImage) {
						let state = Rc64ComboBox.prototype.getState();
						const optionEl = document.createElement('li');
						const optionWrapper = document.createElement('div');
						optionWrapper.setAttribute('role', 'button');
						optionWrapper.id = `${index}`;
						optionWrapper.className ='combo-option';
						optionWrapper.setAttribute('aria-current', `${state.activeIndex === index}`);
	
						if (!tabHasImage) {
							optionWrapper.innerText = optionText;
						} else {
							optionWrapper.innerHTML = logo[0].innerHTML.replace('data-src', 'src');
						}
					  
						optionWrapper.addEventListener('click',  Rc64ComboBox.prototype.onOptionClick.bind(this, index));
						optionEl.appendChild(optionWrapper);

						return optionEl;
					}
	
					Rc64ComboBox.prototype.destroyState = function() {
						Rc64ComboBox.prototype.state = null;
					}
	
					Rc64ComboBox.prototype.openMenu = function () {
						let state = Rc64ComboBox.prototype.getState();
						state.listBox.classList.add('open');
						state.isOpenMenu = true;
						state.comboBox.setAttribute('aria-expanded', true);
						state.listBox.setAttribute('aria-hidden', false);
					}
	
					Rc64ComboBox.prototype.closeMenu = function () {
						let state = Rc64ComboBox.prototype.getState();
						state.isOpenMenu = false;
						state.listBox.classList.remove('open');
						state.comboBox.setAttribute('aria-expanded', false);
						state.listBox.setAttribute('aria-hidden', true);
						state.comboBox.removeAttribute('aria-activedescendant');
					}
	
					/**
					 * @description
					 *  Focus on the specified item
					 * @param element
					 *  The element to focus
					 */
					 Rc64ComboBox.prototype.focusItem = function (element, hasAlreadyAriaSelected) {
						let state = Rc64ComboBox.prototype.getState();
						if (element) {
							element.classList.add('option-current');
							if (!hasAlreadyAriaSelected) {
								element.setAttribute('aria-current', true);
							}
							state.comboBox.setAttribute('aria-activedescendant', element.id);
						}
	
						// ensure the new option is in view
						if (Rc64ComboBox.prototype.isScrollable(state.listBox)) {
							Rc64ComboBox.prototype.maintainScrollVisibility(element, state.listBox);
						}
					
						// ensure the new option is visible on screen
						// ensure the new option is in view
						if (!Rc64ComboBox.prototype.isElementInView(element)) {
							element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
						}
					};
	
					// check if an element is currently scrollable
					Rc64ComboBox.prototype.isScrollable = function(element) {
						return element && element.clientHeight < element.scrollHeight;
					}
	
					// ensure a given child element is within the parent's visible scroll area
					// if the child is not visible, scroll the parent
					Rc64ComboBox.prototype.maintainScrollVisibility = function (activeElement, scrollParent) {
						const { offsetHeight, offsetTop } = activeElement;
						const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;
					
						const isAbove = offsetTop < scrollTop;
						const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;
					
						if (isAbove) {
						scrollParent.scrollTo(0, offsetTop);
						} else if (isBelow) {
						scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
						}
					}
	
					// check if element is visible in browser view port
					Rc64ComboBox.prototype.isElementInView = function (element) {
						var bounding = element.getBoundingClientRect();
					
						return (
						bounding.top >= 0 &&
						bounding.left >= 0 &&
						bounding.bottom <=
							(window.innerHeight || document.documentElement.clientHeight) &&
						bounding.right <=
							(window.innerWidth || document.documentElement.clientWidth)
						);
					}
	
					Rc64ComboBox.prototype.selectOption = function (index) {
	
						let state = Rc64ComboBox.prototype.getState();
						// update state
						state.prevIndex = state.activeIndex;
						state.activeIndex = index;
					  
						// update displayed value
						const selected = state.options.filter(option => option.id === state.activeIndex)[0];
	
						if (!state.tabHasLogo) {
							state.comboBox.getElementsByTagName('span')[0].innerText = selected.name;	
						} else {
							state.comboBox.children[0].remove();
							state.comboBox.insertBefore(selected.logo[selected.logo.length - 1], state.comboBox.children[0]);
						}
					};
	
					Rc64ComboBox.prototype.updateMenuState = function (open, callFocus = true) {
						let state = Rc64ComboBox.prototype.getState();
						if (state.open === open) {
						  return;
						}
						// update state
						state.open = open;
					};
	
					Rc64ComboBox.prototype.showNextSlide = function (index) {
						let state = Rc64ComboBox.prototype.getState();
						const selectedOption = state.options.filter(option => option.id === index)[0];
						const prevSelectedOption = state.options.filter(option => option.id === state.prevIndex)[0];
						const prevElement = rc64w2.find(`[data-target='${prevSelectedOption.dataTarget}']`);
						const selectedElement = rc64w2.find(`[data-target='${selectedOption.dataTarget}']`);

						if (prevElement.length > 0) {
							prevElement.removeClass('active');
							prevElement[0].style.display = 'none';
						}
						if (selectedElement.length > 0) {
							selectedElement.addClass('active');
							selectedElement[0].style.display = '';
						}
					}
	
					Rc64ComboBox.prototype.setActiveSelection = function(index) {
						let state = Rc64ComboBox.prototype.getState();
						// Remove old option current selected
						for (let item of state.listBox.children) {
							let menuOption = item.children[0];
							if (menuOption.classList.contains('option-current')) {
								menuOption.classList.remove('option-current');
								menuOption.setAttribute('aria-current', false);
							}
						}
						const selectedOption = state.listBox.querySelector(`#${index}`);
						selectedOption.classList.add('option-current');
						selectedOption.setAttribute('aria-current', true);
					}
	
					Rc64ComboBox.prototype.onComboClick = function (event) { 
						event.preventDefault();
						event.stopPropagation();
						let state = Rc64ComboBox.prototype.getState();
						if (state.isOpenMenu) {
							Rc64ComboBox.prototype.closeMenu();
						} else {
							Rc64ComboBox.prototype.openMenu();
						}
					}
	
					Rc64ComboBox.prototype.onComboKeyDown = function (event) { 
						const { key } = event;
						const state = Rc64ComboBox.prototype.getState();
						const currentSelectedItem = state.listBox.querySelector('[aria-current=true]');
						switch (key) {
							case 'Enter': 
								event.preventDefault();
								event.stopPropagation();
								if (state.isOpenMenu) {
									currentSelectedItem.click();
								} else {
									Rc64ComboBox.prototype.openMenu();
									Rc64ComboBox.prototype.focusItem(currentSelectedItem, true);
								}
								break;
							case 'Escape':
								event.preventDefault();
								event.stopPropagation();
								if (state.isOpenMenu) {
									Rc64ComboBox.prototype.closeMenu();
								}
								break;
							case ' ':
								event.preventDefault();
								event.stopPropagation(); 
								if (state.isOpenMenu) {
									currentSelectedItem.click();
								} else {
									Rc64ComboBox.prototype.openMenu();
									Rc64ComboBox.prototype.focusItem(currentSelectedItem, true);
								}
								break;
							case 'Tab':
								if (state.isOpenMenu) { 
									currentSelectedItem.click();
								}
								break;
							case 'ArrowDown':
								event.preventDefault();
								event.stopPropagation();
								if (state.isOpenMenu) {
									let nextSelectedItem = state.listBox.querySelector('[aria-current=true]').parentElement.nextElementSibling?.children[0];
									if (nextSelectedItem ) {
										currentSelectedItem.classList.remove('option-current');
										currentSelectedItem.setAttribute('aria-current', false);
										Rc64ComboBox.prototype.focusItem(nextSelectedItem);
									}
								} else {
									Rc64ComboBox.prototype.openMenu();
									Rc64ComboBox.prototype.focusItem(currentSelectedItem, true);
								}
								break;
							case 'ArrowUp':
								event.preventDefault();
								event.stopPropagation();
								if (state.isOpenMenu) {
									let previousSelectedItem = state.listBox.querySelector('[aria-current=true]').parentElement.previousElementSibling?.children[0];
									if (previousSelectedItem) {
										currentSelectedItem.classList.remove('option-current');
										currentSelectedItem.setAttribute('aria-current', false);
										Rc64ComboBox.prototype.focusItem(previousSelectedItem);
									}	
								} else {
									Rc64ComboBox.prototype.openMenu();
									Rc64ComboBox.prototype.focusItem(currentSelectedItem, true);
								}
								break;
						}
					}
	
					Rc64ComboBox.prototype.onOptionClick = function(index, event) {
						event.preventDefault();
						event.stopPropagation();
						Rc64ComboBox.prototype.setActiveSelection(index);
						Rc64ComboBox.prototype.selectOption(index);
						Rc64ComboBox.prototype.updateMenuState(false);
						Rc64ComboBox.prototype.showNextSlide(index);
						Rc64ComboBox.prototype.closeMenu();
						//Move focus to the visible panel
						moveFocusToTheActivePanel(index);
					}
	
					/*
					* End Combobox Component
					**/	
					
					function setPanelSlidesA11y(makeHidden) {
						if (makeHidden) {
							Array.from(rc64w2[0].children).forEach(function(item) {
								item.style.display = 'none';
								item.setAttribute('tabindex', '-1');
								item.id = `rc64w2_${item.dataset.target}`;
							}); 
						} else {
							Array.from(rc64w2[0].children).forEach(function(item) {
								item.style.display = '';
								item.setAttribute('tabindex', '-1');
								item.id = `rc64w2_${item.dataset.target}`;
							}); 
						}
					}
					
					function moveFocusToTheActivePanel(index) {
						const activeElement = document.querySelector(`.rc64 #rc64w2_${index}`);
						if (activeElement) {
							activeElement.focus();
						}
					}

					//Set the active slide visible for the current active Index
					function setFirstPanelSlideA11y() {
						const activeElement = Array.from(rc64w2[0].children).filter(item => item.classList.contains("active"))[0];
						if (activeElement) {
							activeElement.style.display = '';
						}
					}

					function createDivParent() {
						var parent = rc64nav[0].parentNode;
						var wrapper = document.createElement('div');
						wrapper.classList.add("rc64wrapper")
						// set the wrapper as child (instead of the element)
						parent.replaceChild(wrapper, rc64nav[0]);
						// set element as child of wrapper
						wrapper.appendChild(rc64nav[0]);
					}
	
					function createArrows() {
						var rightScrollArrow = '<div class="rc64right icn-img icn-chevron-right" tabindex="-1"><br /></div>';
						rc64nav.after(rightScrollArrow);
						var leftScrollArrow = '<div class="rc64left icn-img icn-chevron-left hidden" tabindex="-1"><br /></div>';
						rc64nav.before(leftScrollArrow);
					}
	
					function setRc64ItemEvent(item) {
						item.addEventListener('focusout', function (event) { 
							const currentTab = event.currentTarget;
							const linkTab = currentTab.children[0];
							const originalTab = rc64nav[0].querySelector(`[data-target=${rc64navIndex}]`);
	
							if (linkTab.classList.contains('option-current')) {
								linkTab.classList.remove('option-current');
								linkTab.setAttribute('tabindex', -1);
								originalTab.setAttribute('tabindex', 0);
								focusedTab = originalTab;
							}
							event.stopPropagation();
							event.preventDefault();
						});
	
					}
	
					function getItemWidth(item) {
						if (rc64v1) {
							if (isMobile()) {
								return 110;
							} else {
								return 200;
							}
						}
						else {
							if ($(item).hasClass('sr-only')) {
								const cloneItemVisible = $(item).removeClass('sr-only');
								return $(cloneItemVisible).outerWidth();
							} else {
								return $(item).outerWidth();
							}
						}
					}
	
					function isTheElementWithinTheBounds(primaryWidth, stopWidth, itemWidth, maxTab, index) {
						return primaryWidth >= stopWidth + itemWidth &&(!maxTab||(index<maxTab));
					}
	
					function getRc64Tabs() {
						var stopWidth = $('.rc64right').outerWidth();
						var primaryWidth = rc64nav.outerWidth();
						tabs = [];
						$(rc64primaryItems).each(function(index, item) {
							setRc64ItemEvent(item);
							var itemWidth = getItemWidth(item);
							if (isTheElementWithinTheBounds(primaryWidth, stopWidth, itemWidth, maxTab, index)){
								tabs.push({id: item.querySelector('a').dataset.target, status: status.visible});
								stopWidth += itemWidth;
							} else {
								tabs.push({id: item.querySelector('a').dataset.target, status: status.hidden});
								stopWidth += itemWidth;
							}							
						});
						setActiveTabNav();	
						hideTabNavArrows();			
					}
	
					function rc64IsLoaded() {
						setTimeout(() => {
							$(rc64w1).addClass('jsloaded');
						}, 1);
					}
	
					function changeHeightForRc64v2() {
						if(rc64v2){
							setTimeout(()=>{
								var height = $('.rc64w3.active').outerHeight();
								$('.rc64w2').css('height', height);
							},500);
						
						}
					}
	
					function hideTabNavArrows() {
						const totalTabs = document.querySelectorAll('.rc64nav')[0].querySelectorAll('li').length;
						const visibleTabs = document.querySelectorAll('.rc64nav')[0].querySelectorAll('li:not(.sr-only)').length;
						const firstTabIsNotVisible = document.querySelectorAll('.rc64nav')[0].querySelectorAll('li')[0].classList.contains('sr-only');
						const lastTabIsNotVisible = document.querySelectorAll('.rc64nav')[0].querySelectorAll('li')[totalTabs - 1].classList.contains('sr-only');
	
						if (rc64navIndex != 'rc64panel_1') {
							$('.rc64left').removeClass("hidden");
						}
						if (rc64navIndex != tabs[tabs.length -1 ].id ) {
							$('.rc64right').removeClass("hidden");
						}
	
						if (totalTabs === visibleTabs) {
							$('.rc64right').addClass("hidden");
						}
	
						if (!firstTabIsNotVisible) {
							$('.rc64left').addClass("hidden");
						}
	
						if (!lastTabIsNotVisible) {
							$('.rc64right').addClass("hidden");
						}
					}
	
					function setActiveTabNav() {
						// Move to the active tab
						let startIndex = tabs.findIndex(tab => tab.id === rc64navIndex);
						const visibleItems = tabs.filter(tab => tab.status === status.visible).length;
						const totalItems = tabs.length;
						const totalVisibleItems = (visibleItems - 1);
						const hasStartIndexSpaceToExpand = startIndex + totalVisibleItems < totalItems - 1 ?  true: false;
	
						if (!hasStartIndexSpaceToExpand) {
							const indexDifference =  startIndex + totalVisibleItems -  (totalItems - 1);
							startIndex = startIndex - indexDifference;
						}
	
						for (let index = 0; index <= totalItems - 1; index++) {
							if (index >= startIndex && index <= startIndex + totalVisibleItems) {
								tabs[index].status = status.visible;
								setNavListVisibility(index, status.visible);
							} else {
								tabs[index].status = status.hidden;
								setNavListVisibility(index, status.hidden);
							}
						} 
					}
	
					function setActiveNavElement(navIndex) {
						// Set tab active
						const selectedTab = rc64nav[0].querySelector(`[data-target=${navIndex}]`);
						if (selectedTab) {
							selectedTab.classList.add('active');
							selectedTab.setAttribute('tabindex', 0);
							selectedTab.setAttribute('aria-selected', true);
							selectedTab.focus();
						}
					}
	
					function rc64adapts() {
						getRc64Tabs();
						changeHeightForRc64v2();
						rc64IsLoaded();
					}
	
					function setNavListVisibility(index, status) {
						switch(status) {
							case "hidden":
								document.querySelectorAll('.rc64nav li')[index].classList.add('sr-only');
								break;
							case "visible":
								document.querySelectorAll('.rc64nav li')[index].classList.remove('sr-only');
								break;
						}
					}
	
					function moveFocusToPreviousTab(currentTab) {
						const leftArrow = $('.rc64left');
						//it is not the first tab
						if (currentTab.parentElement.previousElementSibling) {
							focusedTab = currentTab.parentElement.previousElementSibling.children[0];
							if (focusedTab.parentElement.previousElementSibling) {
								moveToLeftTabs();
							}
							currentTab.setAttribute('tabindex', -1);
							currentTab.classList.remove('option-current');
							focusedTab.classList.add('option-current');
							focusedTab.setAttribute('tabindex', 0);
							focusedTab.focus();
						} else {
							// hide left arrow
							leftArrow.addClass("hidden");
						}
					}
	
					function moveFocusToNextTab(currentTab) {
						const rightArrow = $('.rc64right');
						if (!focusedTab) {
							currentTab.setAttribute('tabindex', -1);
							focusedTab = currentTab.parentElement.nextElementSibling.children[0];
							focusedTab.classList.add('option-current');
							focusedTab.setAttribute('tabindex', 0);
							focusedTab.focus();
						} else {
							// it is not last tab
							if (focusedTab.parentElement.nextElementSibling) {
								if (focusedTab.parentElement.nextElementSibling.classList.contains("sr-only")) {
									moveToTheRightTabs();
								}
								focusedTab.classList.remove('option-current');
								focusedTab.setAttribute('tabindex', -1);
								focusedTab = focusedTab.parentElement.nextElementSibling.children[0];
								focusedTab.classList.add('option-current');
								focusedTab.setAttribute('tabindex', 0);
								focusedTab.focus();
							} else {
								// hide right arrow
								rightArrow.addClass("hidden");
							}
						}
					}
	
					function moveToTheRightTabs() {
						const leftArrow = $('.rc64left');
						const lastTabVisible = tabs[tabs.length - 1 ]; 
						if (lastTabVisible.status === status.hidden)  {
							// show left arrow
							if (leftArrow.hasClass("hidden")) {
								leftArrow.removeClass("hidden");
							}
							// Hide first Item
							const firstItemVisible = tabs.filter(item => item.status === status.visible)[0];
							const firstItemVisibleIndex = tabs.findIndex(tab => tab.id === firstItemVisible.id);
							tabs.filter(tab => tab.id === firstItemVisible.id)[0].status = status.hidden;
							setNavListVisibility(firstItemVisibleIndex, status.hidden);
							// Show next item
							const firstItemHidden = tabs.filter(item => item.status === status.visible).reverse()[0];
							const firstItemHiddenIndex = tabs.findIndex(tab => tab.id === firstItemHidden.id);
							tabs[firstItemHiddenIndex + 1].status = status.visible;
							setNavListVisibility(firstItemHiddenIndex + 1, status.visible);
							
						}
						hideTabNavArrows();
					}
					
					function moveToLeftTabs() {
						const rightArrow = $('.rc64right');
						const firstTabVisible = tabs[0];
						if (firstTabVisible.status === status.hidden) {
							// show right arrow
							if (rightArrow.hasClass("hidden")) {
								rightArrow.removeClass("hidden");
							}
							// Hide first item from right to left
							const lastItemVisible = tabs.filter(item => item.status === status.visible).reverse()[0];
							const lastItemVisibleIndex = tabs.findIndex(tab => tab.id === lastItemVisible.id);
							tabs[lastItemVisibleIndex].status = status.hidden;
							setNavListVisibility(lastItemVisibleIndex, status.hidden);
							// Hide second item from left to right
							const firstItemVisible = tabs.filter(item => item.status === status.visible)[0];
							const firstItemVisibleIndex = tabs.findIndex(tab => tab.id === firstItemVisible.id);
							tabs[firstItemVisibleIndex - 1].status = status.visible;
							setNavListVisibility(firstItemVisibleIndex - 1, status.visible);
						} 
						hideTabNavArrows();
					}
	
					function isMobile() {
						return document.documentElement.clientWidth <= breakpointMobile;
					}
	
					function initEvents() {
						$('.rc64right').on('click', function(e) { e.preventDefault(); moveToTheRightTabs(); });
						$('.rc64left').on('click', function(e) {  e.preventDefault(); moveToLeftTabs(); });
						window.addEventListener("resize", function() {
							 if (listenerResize) { clearTimeout(listenerResize) };
								 listenerResize = setTimeout(function() {
									rc64adapts();
									if (isMobile()) {
										if (document.getElementsByClassName('rc64combo').length === 0 ) {
											$('.rc64wrapper').addClass("hidden");
											//remove all previous active things
											$('.rc64 [data-target]').filter('a[data-target]').removeClass('active').attr('aria-selected', false);
											$('.rc64 [data-target]').filter('a[data-target]').attr('tabindex', -1);
											Rc64ComboBox();
										}
									} else {
										if (document.getElementsByClassName('rc64combo').length === 1 ) {
											$('.rc64wrapper').removeClass("hidden");	
											document.getElementsByClassName('rc64combo')[0].remove();
											//remove all previous active things
											$('.rc64 [data-target]').filter('a[data-target]').removeClass('active').attr('aria-selected', false);
											$('.rc64 [data-target]').filter('a[data-target]').attr('tabindex', -1);
											// Update index
											rc64navIndex = Rc64ComboBox.prototype.state.activeIndex;
											getRc64Tabs();
											setActiveNavElement(rc64navIndex);
											Rc64ComboBox.prototype.destroyState();
										}
									}
								}, 100);
						}, false);
		
						//Nav Click
						rc64w1.on('click mousedown touchstart', '.rc64nav li a', function (e) {
							e.preventDefault();
							var $this = $(this);
							var $target = $(this).attr('data-target');
							if ($('.rc64w2').find("[data-target='" + $target + "']").length > 0) {
								// Get the previous selected element and hide the panel.
								const prevSelectedElement = $('.rc64 [data-target]').filter('a.active:not(.option-current)');
								if (prevSelectedElement) {
									const panelSelector = prevSelectedElement.data().target;
									const prevElement = rc64w2.find(`[data-target='${panelSelector}']`)[0];
									if (prevElement) {
										prevElement.style.display = 'none';					
									}
								}
								$('.rc64 [data-target]').removeClass('active').filter('a[data-target]').attr('aria-selected', false);
								$('.rc64 [data-target]').filter('a[data-target]').attr('tabindex', -1);
								$this.addClass('active').attr('aria-selected', true);
								$this.attr('tabindex', 0);
								$this.focus();
								// Show the panel for the current focused element
								if ($this.data().target) {
									const selectedElement = rc64w2.find(`[data-target='${$this.data().target}']`)[0];
									selectedElement.style.display = '';
								}
								rc64navIndex = $target;
								$('.rc64w2').find("[data-target='" + $target + "']").addClass('active');
								if ( rc64w1.is('.show-secondary') ) {
									rc64w1.removeClass('show-secondary');
								}
								if(rc64v2){
									var height = $('.rc64w3.active').outerHeight();
									$('.rc64w2').css('height', height);
								}
							}
							//Down Arrow
							rc64w1.on('keydown', '.rc64nav li a', function (e) {
								if (e.keyCode == 40) {
									$('.rc64w3.active').find('a').eq(0).focus();
								}
							});
						});
		
						//Nav Keydown - Enter and Space Bar
						rc64w1.on('keydown', '.rc64nav li a', function (event) {
							let flag = false;
							const currentTab = event.currentTarget;
							switch (event.key) {
								case 'Enter': 
									currentTab.click();
									currentTab.classList.remove('option-current');
									flag = true;
									break;
								case 'ArrowLeft':
									moveFocusToPreviousTab(currentTab);
									hideTabNavArrows();
									flag = true;
									break;
								case 'ArrowRight':
									moveFocusToNextTab(currentTab);
									hideTabNavArrows();
									flag = true;
									break;
								default:
								  break;
							  }
	
							  if (flag) {
								event.stopPropagation();
								event.preventDefault();
							  }
						});				
	
						//Adapt if images haven't been lazy loaded and it senses it being run
						/*if ($(".rc64v1 .rc64w1 .rc64nav>li>a img[data-src]")[0]) {
							$(document).on("lazydatasrc.srcloaded", function (e) {
								if (!lzysrcloaded) {
									lzysrcloaded = true;
									rc64adapts();
								}
							});
						}*/
					}
	
					function createA11yTabPattern() {
						const rc64nav = document.querySelector('.rc64 .rc64nav');
						const rc64List = document.querySelectorAll('.rc64 .rc64nav li');
						rc64nav.setAttribute('role', 'tablist');
						rc64List.forEach(function(element) {
							const tab = element.querySelector('a');
							tab.removeAttribute('tabindex');
							tab.removeAttribute('role');
							tab.removeAttribute('aria-current');
							element.removeAttribute('aria-hidden');
	
							element.setAttribute("role","none");
							tab.setAttribute('role','tab');
							tab.setAttribute('tabindex', -1);
							tab.setAttribute('aria-selected', false);
						});
						rc64List[0].querySelector('a').setAttribute('tabindex', 0);
						rc64List[0].querySelector('a').setAttribute('aria-selected', true);
					}
					
					// Main function
					function _init() {
						createDivParent();
						createArrows();
						rc64adapts();
						if (window.innerWidth <= breakpointMobile ) { 
							setTimeout(function() {
								$('.rc64wrapper').addClass("hidden");
								Rc64ComboBox();
							},1);
						};
						createA11yTabPattern();
						initEvents();
						setPanelSlidesA11y(true);
						setFirstPanelSlideA11y();
					}
	
					_init();
		}
	});
	}
	
	//We wrap up the entire component in a new function and then register it in the OCM framework if we're in OCM so it can be triggered
	var isOCM = document.querySelector('.scs-slot');
	if (isOCM){
		OCOM.register(function rc64($) {
			rc64Wrapper();
		});
	}
	else {
		rc64Wrapper();
	} 

/*! RC64 */
OCOM.register(function rc64($) {
//$(document).ready(function() {
	'use strict';	

	$('.rc68').each(function() {

		var rc68adapt = function rc64adapt() {
			$('.rc68 .col-framework.col3 h3').equalHeight();
		};

		setTimeout(function(){
			rc68adapt();
		},10);

		window.addEventListener('resize', rc68adapt);

	});

});

/*! RC78 */
OCOM.register(function rc78($) {
	'use strict';

	// don't do anything if more than one rc78 on the page and page must have f22 structure
	if($('.rc78').length == 1 && $('.f22')[0]){
		if ("IntersectionObserver" in window) {

			var c78target = document.querySelector('.rc78');
			var c78observer = new IntersectionObserver(function(entries, observer) {
					var e = entries[0];
					if (e.intersectionRatio < 1 && e.intersectionRect.top <= 0) {
						e.target.classList.add('rc78stuck');
					}else{
						e.target.classList.remove('rc78stuck');
					}
				},{
				threshold: [1]
			});

			if (!c78target.classList.contains("rc78init")) {
				c78observer.observe(c78target);
				c78target.classList.add("rc78init")
			}
			var c78contentobserver = new IntersectionObserver(function(entries, observer) {
					entries.forEach( function (e) {
						if (e.isIntersecting) {
							e.target.classList.add('rc78inview');
						}else{
							e.target.classList.remove('rc78inview');
						}
						rc78inview();
					});
				},{
				rootMargin: '-40px 0px -40% 0px'
			});


			function rc78inview(){
				$("a.rc78current").removeClass("rc78current");
				if($(".rc78inview[data-id]")[0]){
					var cid = $(".rc78inview").last().attr("data-id");
					$('.rc78 a[href="#'+cid+'"]').addClass("rc78current");
				}
			}


			// add class to f22 sidebar when rc78 is first item to offeset the reqiured top padding on the w1
			$('.f22sidebar *:first-child').each(function(){	

				// add first class to sidebar
				if($(this).is('.rc78')){
					$(this).closest('.f22sidebar').addClass('f22-rc78first');
				}

				// if the rc78 is the only thing in the sidebar add this class to collapse padding on mobile
				if($(this).is('.rc78') && !$(this).next()[0]){
					$(this).closest('.f22sidebar').addClass('f22-onlyrc78');
				}
			});

			function initializeAnchors() {
				// set up link/anchors when using static rc78
				$('.rc78 li a[href^="#"]').not(".anchorlink").each(function(){
					var cid = $(this).attr('href').split('#')[1];

					if($('#'+cid)[0]){
						$('#'+cid).addClass('rc78anchor').attr('data-id',cid);
			 			$(this).addClass('anchorlink')
						c78contentobserver.observe(document.getElementById(cid));
					
						 $('#'+cid).nextAll().each(function(){
							if(!this.id){
								$(this).addClass('rc78anchor').attr('data-id',cid);
								c78contentobserver.observe(this);
							};
						 });
					}
				
					$(this).on('click',function(e){
						if($('#'+cid)[0]){
							var stickyAdjustment = typeof window.WS_ANCHOR_stickyHt == "function" ? window.WS_ANCHOR_stickyHt() : 0;
							var delta = Math.abs($('#'+cid).offset().top - $(document).scrollTop()),
								velo = Math.floor(delta * .5),
								atop = 78,
								rc78 = $('.rc78');

							$('.rc78current').removeClass('rc78current');
							rc78.addClass('rc78scroll');
							$('html, body').animate({scrollTop:$('#'+cid).offset().top - stickyAdjustment}, velo, function(){
								rc78.removeClass('rc78scroll');
								$('.rc78current').removeClass('rc78current');
								$('a[href="#'+cid+'"]').addClass('rc78current');
							});
							$('#'+cid).attr('tabindex', '-1').focus();
						}
					});
				});
			}
			initializeAnchors();

			if (window.requirejs) {
				document.removeEventListener("f22contentAdded", initializeAnchors);
				document.addEventListener("f22contentAdded", initializeAnchors);
			}
			// onload check height of nav and any following components 
			var rc78 = $('.rc78');

			var h = rc78.outerHeight();

			 rc78.nextAll().each(function(){
				h = h + $(this).outerHeight();
			 });

			if(h > ($(window).height() - 100)){
				rc78.addClass('rc78tootall');
			}

			rc78.addClass('rc78ready');
		

			// resize to check if nav is too tall or not
			var onWindowResized = function() {
				var rc78 = $('section.rc78');
				if(rc78[0]){
					var h = rc78.outerHeight();
					 rc78.nextAll().each(function(){
						h = h + $(this).outerHeight();
					 });

					if(h > ($(window).height() - 100)){
						rc78.addClass('rc78tootall');
					}else{
						rc78.removeClass('rc78tootall');
					}
				}
			};

			$(window).off('resize.rc78').on('resize.rc78',onWindowResized.bind());

		}else{
		
			// for non sticky browsers just add too tall class to disable sticky CSS in case js doesn't totally work and CSS does...
			$('.rc78').addClass('rc78tootall');

			// keep animated scroll even though nav isn't sticky
			$('.rc78 li a[href^="#"]').each(function(){
				var cid = $(this).attr('href').split('#')[1];
			
				$(this).on('click',function(){
					if($('#'+cid)[0]){
						var stickyAdjustment = typeof window.WS_ANCHOR_stickyHt == "function" ? window.WS_ANCHOR_stickyHt() : 0;
						var delta = Math.abs($('#'+cid).offset().top - $(document).scrollTop()),
							velo = Math.floor(delta * .5),
							atop = 78,
							rc78 = $('.rc78');

						$('.rc78current').removeClass('rc78current');
						rc78.addClass('rc78scroll');
// 						$('html, body').animate({scrollTop:$('#'+cid).offset().top - atop}, velo, function(){
 							rc78.removeClass('rc78scroll');
 							$('.rc78current').removeClass('rc78current');
 							$('a[href="#'+cid+'"]').addClass('rc78current');
// 						});

					}
				});
			});


		}
		if (window.requirejs) {
			var rc78found = false;
			$(".rc78").closest(".f22sidebar").find("> *").each( function (i, item) {
				if ($(item).is(".rc78") || $(item).find(".rc78")[0]) {
					rc78found = true;
				} else {
					if (rc78found) {
						$(item).addClass("rc78next")
					} else {
						$(item).addClass("rc78prev");
					}
				}
			});
		}
	}
});


/*! RC100 */
OCOM.register(function rc100($) {
    'use strict';	

	function rc100adjust() {
		$('.rc100').each(function() {
            $(this).find('.col-item-w2 .rc100subhead').equalHeight();
            $(this).find('.col-item-w2 .rc100info').equalHeight();
            $(this).find('.col-item-w2 .rc100specs').equalHeight();
            $(this).find('.col-item-w3').equalHeight();
        });
	}

	$('.rc100 .col-framework').on('inview',rc100adjust);

	$(window).on('resize', rc100adjust);

});

/*! RC102 */
OCOM.register(function rc102($) {
	'use strict';	

	$('.rc102').each(function() {
		
		var rc102adapt = function rc102adapt() {
			$('.rc102 .col-item-w2').equalHeight();
			$('.rc102 .col-item-w3').equalHeight();
			$('.rc102 .col-item-w4').equalHeight();
		}

		setTimeout(function(){
			rc102adapt();
		},10);

		window.addEventListener('resize', rc102adapt);

	});
});

/*! RC104 */

OCOM.register(function rc104($) {
	"use strict";
	var _snippet = {
		//"check":"<div class=\"rc104check icn-img icn-check\"></div>",
		"chevron":"<div class=\"rc104btn icn-img icn-chevron-down\" role=\"button\" aria-expanded=\"false\" tabindex=\"0\"></div>"
	};
	function _addEvents(context) {
		$(context).on("click",".rc104btn",function (e) {
			var expanded = $(e.currentTarget).attr("aria-expanded") == "true" ? true : false;
			if (expanded) {
				_paneHide(e);
			} else {
				_paneShow(e);
			}
		});
		var input = document.getElementById("myInput");
		$(context).on("keyup", function (e) {
			if (e.keyCode === 13) {
		        e.preventDefault();
				$(e.target).trigger("click");
		    }
		});
	}
	function _addIcons(context) {
		$(context).find(".rc104header dd").append($(_snippet.chevron));
	}
	function _addIndexing(instance,context) {
		var id = "rc104i" + instance + "s"; // i for instance, s for section
		$(context).find(".rc104w3").each( function (i, w3) {
			let h4id = $(w3).find("h4").attr("id");
			$(w3).find(".rc104btn").attr("aria-controls",id + i);
			$(w3).find(".rc104btn").attr("aria-labelledby", h4id);
			$(w3).find(".rc104pane").attr("id",id + i);
		});
	}
	function _paneHide(e) {
		var targetId = $(e.currentTarget).attr("aria-controls");
		$(e.currentTarget).attr("aria-expanded","false");
		$(e.currentTarget).closest(".rc104w3").removeClass("rc104active");
		$(e.currentTarget).closest(".rc104w3").find(".rc104header").removeClass("rw-theme-accent");
		//$("#" + targetId).closest(".rc104w3").find(".rc104expand").removeClass("rc104expand");
		//$("#" + targetId).closest(".rc104w3").find(".rc104pane[aria-hidden]").attr("aria-hidden","true");
		$("#" + targetId).removeClass("rc104expand");
		setTimeout( function () {
			$("#" + targetId).hide("fast", function () {
				$(this).attr("aria-hidden","true");
			});
		},200);
		
	}
	function _paneShow(e) {
		var targetId = $(e.currentTarget).attr("aria-controls");
		$(e.currentTarget).attr("aria-expanded","true");
		$(e.currentTarget).closest(".rc104w3").addClass("rc104active");
		$(e.currentTarget).closest(".rc104w3").find(".rc104header").addClass("rw-theme-accent");
		//$("#" + targetId).addClass("rc104expand").attr("aria-hidden","false");
		$("#" + targetId).show( "fast", function () {
			$(this).attr("aria-hidden","false").addClass("rc104expand");
		});
	}
	function _initPaneShow(instance,context) {
		$(context).find('.rc104w3[data-show-item="true"]').each( function (i, w3) {
			$(w3).find(".rc104btn").trigger( "click" );
		});
	}
	function initialize(instance,context) {
		_addIcons(context);
		_addIndexing(instance,context);
		_addEvents(context);
		_initPaneShow(instance, context)
		$(context).find(".rc104pane").attr("aria-hidden","true");
	}

	$(".rc104").each( function (i, rc04) {
		initialize(i,rc04);
	});

});


/*! RC105 */
OCOM.register(function rc105($) {
	'use strict';

	if(!$('.rc105')[0]) { return false; }

	var $window = $(window),
		$container = $('.rc105w1'),
		$categories = $('.rc105w2'),
		$counts = $('.rc105count'),
		$productLists = $('.rc105w3'),
		vdub = window.innerWidth,
		resizeTimeout;

	countProducts();
	labelCategories();
	addAriaAttributes($productLists);

	//Add Aria labelledby  to wrapper
	$('.rc105w2-drawer').each(function(index) {
		var id =  this.querySelector('.rc105w3 h3').textContent.toLowerCase().split(' ').join('')+"_"+index;
		this.querySelector('.rc105w3').setAttribute('role','region');
		this.querySelector('.rc105w3').setAttribute('aria-labelledby',id)
		this.querySelector('.rc105w3 h3').setAttribute('id',id);
		if(this.querySelector('.rc105cta')){
			var $anchor = this.querySelector('.rc105cta a');
			$anchor.setAttribute('id','learn_more_' + index)
			$anchor.setAttribute('aria-labelledby', $anchor.getAttribute('id')+' '+ id)
		}
	});

	//Add Aria button attributes to links
	$('.rc105w2-drawer > a').each(function() {
	//	this.parentElement.setAttribute('role','region')
		if (!($(this).attr('role'))) {
			$(this).attr('role', 'button');

		}

	});

	//Add Aria attributes to link buttons
	$('.rc105w2-drawer > a').each(function() {

		if (!($(this).attr('aria-expanded'))) {
			$(this).attr('aria-expanded', 'false');
		}

	});

	//Add Aria tabindex attributes to panels
	$productLists.each(function() {
		$(this).append('<button class="rc105exit" aria-hidden="true" ></button>');
		if (!($(this).attr('tabindex'))) {
			$(this).attr('tabindex', '-1');

		}

	});

	function a11yClick(event){
		if(event.type === 'click'){
			return true;
		}
		else if(event.type === 'keypress'){
			var code = event.charCode || event.keyCode;
			if((code === 32)|| (code === 13)){
				return true;
			}
		}
		else{
			return false;
		}
	}

	$container.on('click keypress', '.rc105w2-drawer > a', function(e){
		e.preventDefault();
		if(a11yClick(event) === true){
			if(!$('.rc105w3.opening')[0]){
				onCategoryClick(e);
			}else{
				setTimeout(function (){
					onCategoryClick(e);
				},222);
			}
		}
	});

	$container.on('click', '.rc105w3 .icn-close', function(e) {
		e.preventDefault();
		restoreProductList($('.rc105w3.open'));
		$container.find('.rc105w2-drawer .current').focus();
	});

	$container.on('keypress', '.rc105w3 .icn-close', function(e) {
		e.preventDefault();
		if (e.keyCode == 13 || e.keyCode == 32) {
			restoreProductList($('.rc105w3.open'));
			$container.find('.rc105w2-drawer .current').focus();
		}
	});

	$container.on("focus", ".rc105exit", function (e) {
		var current = $container.find('.rc105w2-drawer .current');
		restoreProductList($('.rc105w3.open'));
		setTimeout(function (){
			if(current.closest('.rc105w2').next().find('a').length  > 0) {
				current.closest('.rc105w2').next().find('a').focus();
			}else {
				$('.a11-fs').focus()
			}
		},300)
	});

	// const checkMovement = function (){
	// 	if (document.activeElement.classList.contains('icn-close')){
	// 		isFocusMoveToCloseButton = true
	// 	}else {
	// 		isFocusMoveToCloseButton = false
	// 	}
	// }
	// $container.on('keyup', '.rc105w3', function(event){
	// 	console.log('-111-ddddddd---')
	// 	event.preventDefault();
	// 	console.log('--ddddddd---')
	// 	if(event.shiftKey && event.keyCode == 9) {
	// 		console.log('--insis---',isFocusMoveToCloseButton)
	// 		//shift was down when tab was pressed
	// 		if(isFocusMoveToCloseButton){
	// 			console.log($('.rc105w3.current .icn-close')[0])
	// 			$('.rc105w3.current .icn-close').click();
	// 		}
	// 		checkMovement()
	// 		return false
	// 	}
	// 	checkMovement()
	// });


	$(document).off('esckeydown.rc105').on('esckeydown.rc105', function(e) {
		restoreProductList($('.rc105w3.open'));
		$container.find('.rc105w2-drawer .current').focus();
	});

	$window.off('resize.rc105').on('resize.rc105', onWindowResized);

	$window.off('orientationchange.rc105').on('orientationchange.rc105', function(e) {
		restoreProductList($('.rc105w3.open'));
	});

	function keyDownHandler(event) {
		if(event.shiftKey && event.keyCode == 9) {
			if (document.activeElement.classList.contains('icn-close')) {
				restoreProductList($('.rc105w3.open'))
				setTimeout(()=>{
					$container.find('.rc105w2-drawer .current').focus();
				},0)
			}
		}
	}


	document.addEventListener('keydown', keyDownHandler);


	function countProducts() {

		$counts.each(function() {
			var $count = $(this),
				$products = $count.closest('.rc105w2').find('.rc105w4');

			$count
				.text($count.text().replace(/(#|\d+)/, $products.length))
				.css({ visibility: 'visible' });
		});
		return false;
	}

	function onCategoryClick(e) {
		if(!$('.rc105w3.opening')[0]){ // one more check to make sure another panel isn't opening from someone rapid clicking on the buttons
			var $category 	 = $(e.currentTarget).closest('.rc105w2'),
				$link        = $category.find('> a'),
				$currList    = $('.rc105w3.open'),
				categoryID   = $category.attr('data-guid'),
				$productList = $('[data-parent="' + categoryID + '"]'),
				$closeIcon   = $('<a href="#close" class="icn-close" aria-label="close expanded panel" title="Close"></a>'),
				currRow      = $category.attr('data-row'), // must use attr
				$rowLast     = $('[data-row="' + currRow + '"]:last'),
				offset, height;

			if(!$productList.find('.icn-close').length) {
				$productList.prepend($closeIcon);
			}

			// toggle whether the list should open or close use data so we don't force close
			$productList.data('open', !$productList.data('open'));
			$link.toggleClass('current').toggleClass('rw-theme-accent');

			$('.rc105w2-drawer > a').each(function() {

				if ($(this).hasClass('current')) {

					$(this).attr('aria-expanded', 'true');
				}

			});

			restoreProductList($currList);
			$productList.insertAfter($rowLast);

			// only set to current if this click has opened the products list
			if($productList.data('open')) {

				// get calculated height when open
				height = $productList
					.css({ height: '', padding: '' })
					.addClass('open')
					.addClass('opening')
					.outerHeight();

				$productList
					.outerHeight(0)
					.animate({
						height: height,
					}, {
						duration: 200,
						// easing: 'easeInOutSine',
						always: function() {
							// gross hack to fix heading alignment due to flexbox space-around :(
							$productList.find('> h5').offset({
								left: $productList.find('.rc105w4:first').offset().left
							});
							// opacity change after animation
							$productList.addClass('current')
							.attr('aria-expanded', 'true')
								.find('a')
								.removeAttr('aria-hidden')
								.attr('tabindex', 0);

							setTimeout( function () {
								$('.rc105w3.opening').removeClass('opening').find('.icn-close').focus();
							},220);

							// check if category is within viewport using generic-inviewport plugin
							// and scroll category to top if it is outside the viewport
							if(!$category.inViewport()) {
								// adjust for sticky nav height
								offset = $('[class*="stuck"]').first().outerHeight() || 0;
								$('html, body').animate({ scrollTop: $category.offset().top	- offset }, 400);
							}
						}
					});
			}

			addAriaAttributes($productLists);

		}
		return false;
	}

	function restoreProductList($currList) {

		var $parent,
			guid;

		// bail if nothing's open
		if($currList.length === 0) return false;

		guid = $currList.data('parent');
		$parent = $('[data-guid="' + guid + '"]');

		$currList.data('open', false).removeClass('current').css('height',0).attr('aria-expanded', false);

		setTimeout( function () {
			$currList.removeClass('open').appendTo($parent);
			$parent.find('> a').removeClass('current').removeClass('rw-theme-accent').attr('aria-expanded', false);
		},200);

		return false;
	}

	function onWindowResized(e) {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {

			// only hide panels if width changes since hight changes caused by mobile URL bar growing/shrinking can causes issue and we only need to readjust if width changes anyway
			if(vdub != window.innerWidth) {

				restoreProductList($('.rc105w3.open'));

				// preemptively kill animations to avoid layout bugs
				$productLists.finish();
				labelCategories();

				vdub = window.innerWidth;
			}
		}, 100);
		return false;
	}

	function labelCategories() {

		var row = 1,
			prevoffset = 0,
			guid = 0,
			offset;
		$('.rc105w2.extra').remove();
		$categories.each(function() {

			var $category    = $(this),
				$productList = $category.find($productLists),
				$link        = $category.find('> a'),
				$categoryTitle, categoryHref;

			// only need to initialize these once
			if(!$category.attr('data-guid')) {

				categoryHref = $link.attr('href');

				// set an id on parent/child to allow for easy reinsertion later
				$category
					.attr('data-guid', guid);

				if ($categories.closest(".rc105notitle")[0]) {
					$productList
						.attr('data-parent', guid)
						.attr('id', categoryHref.slice(1));
				} else {
					$productList
						.attr('data-parent', guid)
						//.attr('id', categoryHref.slice(1));
				}


				guid++;
			}

			// store row references
			offset = parseInt($category.offset().top);

			if(offset !== prevoffset) {
				row++;
				prevoffset = offset;
			}
			$category.attr('data-row', row);
		});

		var firstRow = $('.rc105w2:first').attr('data-row');
		var lastRow = $('.rc105w2:last').attr('data-row');
		var neededEls = $('[data-row="' + firstRow + '"]').length - $('[data-row="' + lastRow + '"]').length;
		for (var i=0;i<neededEls;i++){
			$('.rc105w1').append('<div class="rc105w2 extra"></div>');
		}
		return false;
	}

	function addAriaAttributes($productLists) {

		$productLists.not('.current').find('a')
			.attr('aria-hidden', 'true')
			.attr('tabindex', -1);
	}


});


/*! RC110 */
OCOM.register(function rc110($) {
    'use strict';

	$('.rc110').each(function(){
		var rc110 = $(this);
		$(this).css("z-index", "3")

        // kill the stikcy of any ct12's on the page
        $(".ct12").addClass("ct12nostick");
        var rc110contentobserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach( function (e) {
                    if (e.isIntersecting) {
                        e.target.classList.add('rc110inview');
                    }else{
                        e.target.classList.remove('rc110inview');
                    }
                    rc110inview();
                });
            },{
            rootMargin: '-40px 0px -40% 0px'
        });
        

        function rc110inview(){
            $('.rc110:visible').each(function(){
                $("a.rc110current").removeClass("rc110current");
                var cid = $(".rc110inview").last().attr("data-id");
                if($(this).find('a[href="#'+cid+'"]')[0]){
                    $(this).find('a[href="#'+cid+'"]').addClass("rc110current");
                    const letter = $(this).find('a[href="#'+cid+'"]').first().text();
                    $(this).find('.rc110menulink').find('span').text(letter);
                }else{
                    const defaultValue = $(this).find('.rc110menulink').attr('data-default')
                    $(this).find('.rc110menulink').find('span').text(defaultValue);
                }
            });
        }

        rc110aria();

        function rc110aria() {
            var menu = $('<nav aria-label="Jump To" class="rc110mobilemenu"></nav>');
            var mul = $('<ul class="rc110menuflyout"></ul>');
   
           rc110.find('li a[href^="#"]').each(function(){
   
               var cid = $(this).attr('href').split('#')[1];
               $('#'+cid).addClass('rc110anchor').attr('data-id',cid);;
   
               if($('#'+cid)[0]){
                   rc110contentobserver.observe(document.getElementById(cid));
           
                    $('#'+cid).nextAll().each(function(){
                       if(!this.id){
                           $(this).addClass('rc110anchor').attr('data-id',cid);
                           rc110contentobserver.observe(this);
                       };
                    });
               }
       
               $(this).on('click',function(){
                   if($('#'+cid)[0]){
                       $('.rc110current').removeClass('rc110current');
                       rc110.addClass('rc110scroll');
                   }
               });
               var mli = $('<li></li>');
               mli.append($(this).clone());
               mul.append(mli);
           });
   
           var mdef = rc110.find('.rc110heading').html();
           mul.prepend('<li><button class="rc110def" aria-label="close"><span>'+mdef+'</span></button></li>');
           menu.append('<div class="rc110menulink" data-default="'+mdef+'"><button class="btn-expand" aria-expanded="false"><span>'+mdef+'</span></button></div>').append(mul); 
   
           rc110.find('.rc110w1').append(menu);
        }

		rc110.on('click','.rc110menulink a', function (e) {
			$(this).closest('.rc110w1').removeClass('rc110menuopen');
		});

		rc110.on('click','button', function (e) {
			if($(this).closest('.rc110menulink')[0]){
				$(this).closest('.rc110w1').addClass('rc110menuopen');
			} else {
				$(this).closest('.rc110w1').removeClass('rc110menuopen');
			}
		});

        var btnExpand = $('.btn-expand');

        rc110.on('click', btnExpand, function (e) {
            if ($(btnExpand).closest('.rc110w1').hasClass('rc110menuopen')) {
                $(btnExpand).attr('aria-expanded', true).hide();
                $(this).find('.rc110menuflyout').find('.anchorlink:first').attr('tabindex', '-1').focus();
            } else {
                $(btnExpand).attr('aria-expanded', false).show();
            }
        });

		$('.anchorlink').click(function(e) {
            var rmv = $(this).attr('aria-current', true);
            
            $(this).closest('ul').find('.anchorlink').not(rmv).removeAttr('aria-current');
              
            $(this).each(function(i) {
                // determine the anchors name
                var name = $(this).attr('href').match(/#(.*)$/)[1];
                // Select all anchors with name that matches, set tabindex for focus event
                setTimeout(function() {
                    $('section[id="' + name +  '"] h3.rw-stitle').attr('tabindex', '-1').focus();
                },900);
            });

			if($(this).closest('.rc110mobile').hasClass('rc110menuopen')){
				$(this).closest('.rc110w1').removeClass('rc110menuopen')
			}
		});

        $(".rc110menuflyout").on('keydown', function(e){
			if(e.key === "Escape"){
				$(this).parent().parent().removeClass("rc110menuopen");
				$(this).prev().find(btnExpand).focus();
			}
		});

        function makeJump() {
            $(rc110).each(function(e) {
                $(this).find('.rc110heading').next().addClass('rc110jumplist');
            });
            $(".rc110heading").each(function(i){ 
                $(this).attr("id", `rc110jump-${i}`);
            });
            $(".rc110jumplist").each(function(i){ 
                $(this).attr("aria-labelledby", `rc110jump-${i}`);
            });
        }

        makeJump();

	    var rc110rsz = new ResizeObserver(rc110w1 => {
		var rcw1 = rc110w1[0].target;
		var w1 = rcw1.offsetWidth;
		var w2 = rcw1.children[0].children[0].offsetWidth + rcw1.children[0].children[1].offsetWidth + (w1 - rcw1.children[0].offsetWidth);

		if(w1 <= w2){
			rcw1.classList.add('rc110mobile');
			rcw1.children[0].setAttribute('aria-hidden', 'true');
			rcw1.children[0].querySelectorAll('a').forEach(function(a) {
				a.setAttribute('tabindex', '-1')
			});

            $(".rc110heading").each(function(i){ 
                $(this).attr("id", `rc110jumpmobile-${i}`);
            });

            $(".rc110jumplist").each(function(i){ 
                $(this).attr("aria-labelledby", `rc110jumpmobile-${i}`);
            });
        
		}else if(rcw1.classList.contains('rc110mobile')){
			rcw1.classList.remove('rc110mobile');
			rcw1.classList.remove('rc110menuopen');
			rcw1.children[0].setAttribute('aria-hidden', 'false');
			rcw1.children[0].querySelectorAll('a').forEach(function(a) {
				a.setAttribute('tabindex', '')
			});

            makeJump();
  
            $(btnExpand).show();
		}

	});

	rc110rsz.observe(rc110.find('.rc110w1')[0]);

	});

});


/*! RC112 */
OCOM.register(function rc112($) {
	'use strict';

	var delay = 900000, //ms in 15 minutes
		visited;
	$('div.rc112random').randomload(true);

	setTimeout(function(){
		$(".js div.rc112random .rc112w2").css({'opacity': '1', 'display': 'flex'});
	},100);

	if (sessionStorage.rc112visited) {
		visited = +sessionStorage.rc112visited + +delay;
		if (visited >= Date.now()) {
			$("section.rc112").addClass("rc112revisited");
		} else {
			sessionStorage.removeItem("rc112visited");
		}
	}
	$("section.rc112").addClass("rc112ready");
	// $(".rc112random,.rc112static").on("click", "a", function (e) {
	// 	sessionStorage.rc112visited = Date.now();
	// });

 });

// OCOM.register(function rc113($) {
// 	'use strict';
const rc113All = document.querySelectorAll('.rc113');
let rc113AllyData = null;
    if (rc113All.length) {

    //helper function to defer data fetch
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
            setTimeout( () => {
                fetchFromCacheOrNetwork();
            }, 100);                      
        }
    });

    //For now, there can only be one rt03 component per page, set scope for the first one, show warning.
    const rc113 = document.querySelectorAll('.rc113 [data-filter]');
    const rt03 = document.querySelectorAll('.rt03v0');
    const destinationRegions = document.querySelectorAll('[geo-data]');
    const locationDropdown = document.querySelectorAll('.geo_location');
    const fastConnectRegions = document.querySelectorAll('.rc113v1');   
    const OCI_DATA_URI = 'https://www.oracle.com/node/oce/storyhub/prod/api/v1.1/assets/slug/oci-latency-data/native/oci-latency.json';
    const SH_HOME_PROPERTIES = 'https://www-dev1.oracle.com/node/oce/storyhub/dev/api/v1.1/items/COREF3300B50CA8843268EAC4E2F8253FDFA';
    const CACHE_EXPIRATION_HOURS = 3;
    const GEO_DROPDOWN_ARIA_MESSAGE = 'Dropdown with geographic regions and latency values related to locations in column 1';
    const rt03tabs = document.querySelectorAll('.rt03 [data-filter]');
    let cachedData = '';



    const fetchFromCacheOrNetwork = function () {
        let networkDataReceived = false;

        // try to fetch cached data
        if (window.localStorage.getItem("oci-latency-data") !== null && localStorage["oci-latency-data"].length > 2) {
            const storedData = localStorage.getItem('oci-latency-data');
            let user_time = new Date().toUTCString();         
            user_time = Date.parse(user_time);

            let data_feched_time = JSON.parse(storedData).timestamp;   
            data_feched_time = Date.parse(data_feched_time);

            let next_update = data_feched_time + (CACHE_EXPIRATION_HOURS*60*60*1000)

            //////console.log('Next update in:', Math.trunc((next_update - user_time)/60000) + ' minutes'); 
            // console.log(data_feched_time);
            // console.log(next_update);
            // console.log(user_time);

             // don't overwrite newer network data, force a refresh if data is stale
            if ((next_update > user_time) && !networkDataReceived) {  
                //////console.warn('using cached data...');
                cachedData = JSON.parse(storedData);
                updateLatencyData();
            }
            else {
                localStorage.removeItem('oci-latency-data');
                fetchFromCacheOrNetwork();
            }
        }
        else {
            let networkUpdate = fetch(OCI_DATA_URI).then(function (response) {
                //////console.warn('fetching fresh data...');
                return response.json();
            }).then(function (data) {
                networkDataReceived = true;
                cachedData = data;
                //store response in localstorage
                const newCache = localStorage.setItem('oci-latency-data',JSON.stringify(cachedData));
                updateLatencyData(JSON.stringify(cachedData));
            });
            return networkUpdate;
        }   
    };

    const updateLatencyData = function () {
        const sourceRegions = document.querySelectorAll('.geo_location option'); //the menu is built dynamically so by executing the selector in this context, we ensure the dropdown has been dynamically populated.
            
        const allDestinationRegions = new Set();
        const allSourceRegions = new Array();
        

        destinationRegions.forEach((region) => {
            if (region.attributes['geo-data'].value != '') {
                allDestinationRegions.add(region.attributes['geo-data'].value);
                //regionsToCompare.push( allDestinationRegions.add(region.attributes['geo-data'].value));
            }
        });

        sourceRegions.forEach((geo_dropdown) => {
            allSourceRegions.push(geo_dropdown.value);
            //regionsToCompare.push(geo_dropdown.value);
        });

        initTableData();
        buildA11yTable();
    }

    const showErrorMessage = function () {
        console.error('Unable to retrieve OCI latency data or JS error occured');
        //todo: handle no-data scenario // hide latency data column?
    }  

    const setAriaLive = (region) => {
        //detele previous aria-live and create new one
        document.contains(document.querySelector('.rc113-aria-live')) ? document.querySelector('.rc113-aria-live').remove() : null;
        const ariaLiveMarkup = `<div class="rc113-aria-live sr-only" aria-live="polite">${region}</div>`;
        document.querySelector('.rc116').insertAdjacentHTML('afterend',ariaLiveMarkup);
    }      

    const updateTableData = (source, e) => {  
        const target = e.target;
        const target_table = target.parentNode.parentNode.parentNode.parentNode;
        const target_table_trs = target_table.querySelectorAll('tr');
        const activeTargetRegion = target_table.querySelector('.geo_location > [selected]').innerHTML;
        setAriaLive(activeTargetRegion);

        //Once we have the target table, look in every row, calculate the latency based on the geo-data cell and the source data
        for (let i = 0; i < target_table_trs.length; i++) {
            const destination = target_table_trs[i].querySelector('[geo-data]');
            const latencyCell = target_table_trs[i].querySelector('.latency');

            //destination ? ariaRegionsToCompare[activeTargetRegion].push(destination) : null;
            if (destination && destination != '' && latencyCell) {

                // Filter data object to get only current sourceRegion. [ Filter time complexity O(n) ]
                let result = cachedData?.datacenter_latency?.filter(obj => {
                    return obj.sourceRegion === source;
                });

                let latencyOutput = result[0].destinationRegions?.filter(obj => {
                    return obj.destinationRegion === destination.attributes['geo-data'].value;
                });

                if (latencyOutput[0] && latencyOutput[0].latency != null && destination.attributes['geo-data'].value != source) {
                    latencyCell.innerHTML = latencyOutput[0].latency.toFixed(1) + ' ms';
                }

                //case for null, case for 0, inject latency value in latency cell
                if (!latencyOutput || latencyOutput.length == 0) {
                    latencyCell.innerHTML = "&#8212;";
                }           
            }
        }
    }     

    const dropDownChangedA11y = (e) => {  
        let selectedOrigin = '';
        //for a11y, add selected property to option
        for (const op of e.target.options) {
            if (op.selected === true) {
                op.setAttribute("selected", "");
                selectedOrigin = op.value;
                //update the particular table for that changed dropdown
                updateTableData(selectedOrigin, e);
            }
            else {
                op.removeAttribute("selected");
            }
        }
    }

    function buildA11yTable() {
        const getTableData = fetch(SH_HOME_PROPERTIES)
        .then(response => response.json())
        .then(data => {
            rc113AllyData = data.fields.map_table;
            let selectedRegion = data.fields.map_table.values.find(el => el.region === rt03Data.menuData[rt03Data.selectedOptionIndex]);
            const tableHeaders = data.fields.map_table.header;
            let a11yTable = `<div class="rc113a11ytable sr-only"><table><caption>${data.fields.map_table.mapCaption}</caption>`;
            
            if (!selectedRegion){
                selectedRegion = data.fields.map_table.values;
            }
            
            a11yTable += '<tr>';
            tableHeaders.map((i) => {   
                a11yTable += `<th scope="col">${i}</th>`;
            });
            a11yTable += '</tr>';
             
			[].concat(selectedRegion).map((i) => {
                a11yTable += `<tr><th scope="row">${i?.region}</th><td>${i?.current_regions}</td><td>${i?.regions_coming_soon}</td><td>${i?.azure_interconnect}</td></tr>`
			});         
            a11yTable += '</table></div>'

            if (document.contains(document.querySelector(".rc113a11ytable"))) {
                document.querySelector('.rc113a11ytable').remove();
            }           
            document.querySelector('.rc116').insertAdjacentHTML('afterend',a11yTable);
        }).catch(function(){
            console.log('Unable to retrieve properties file for a11y table');
        });        		
	}  
    
    function updateA11yTable() {
        if (rc113AllyData) {
            let selectedRegion = '';
            if (rt03Data.selectedOptionIndex === 1 ) {
                selectedRegion = rc113AllyData.values;
            }
            else {
                selectedRegion = rc113AllyData?.values?.find( el => el.region == rt03Data.menuData[rt03Data.selectedOptionIndex-1]);
            }
            

            let a11yTableContent = '';            
			[].concat(selectedRegion).map((i) => {
                a11yTableContent += `<tr><th scope="row">${i?.region}</th><td>${i?.current_regions}</td><td>${i?.regions_coming_soon}</td><td>${i?.azure_interconnect}</td></tr>`
			});         

            if (document.contains(document.querySelector(".rc113a11ytable tr:not(:first-of-type)"))) {
                const a11yTrs = document.querySelectorAll(".rc113a11ytable tr:not(:first-of-type)");
                a11yTrs.forEach(tr => {tr.remove()})
            }           
            document.querySelector('.rc113a11ytable tr').insertAdjacentHTML('afterend',a11yTableContent);            
        }
    }
    

    function updateFastConnect(e) {
        //get name of data filter from the selected dropdown.  
        const rc113v1 = document.querySelectorAll('.rc113v1');

        for (const g of rc113v1) {
            let activeTableName = '';
            let activeTable;

            const prevSelected = g.querySelectorAll('.otable-w2 option[selected]');
            for (const o of prevSelected) {
                o.removeAttribute('selected');
            }
            //replace atctiveTableName with getting the active table based on 
            if (e) { 
                activeTableName = e.target.options[e.target.selectedIndex].value; 
                activeTable = e.target.closest('.rc113w1');
            }
            //hide all tables that have that data filter
            const fcs = activeTable.querySelectorAll('.otable-w2');

           [...fcs].forEach((fc) =>  {
                    e.target.options[e.target.selectedIndex].setAttribute('selected', '');

                    //get all selectors for every dropdown in that group
                    const allGroupOptions = fc.querySelectorAll('option');
                    if (fc.querySelector('.geo-fastconnect').innerHTML !== activeTableName) {
                        fc.classList.add('hidefc');
                    }
                    else {
                        fc.classList.remove('hidefc');
                        allGroupOptions[e.target.selectedIndex].setAttribute('selected', '');
                    }      
                })
        }
    }

    //Find cells tagged with [geo-data] by publishers by geographic region, then add those to their corresponding dropdown.
    locationDropdown.forEach(function (geo_drop) {
        const geoDropdownData = [geo_drop.closest('.otable-w2').querySelectorAll(`[geo-data]`)];
        geo_drop.setAttribute('aria-label',GEO_DROPDOWN_ARIA_MESSAGE);
        geo_drop.setAttribute('tabindex','-1');
        geoDropdownData[0].forEach(function (location,i) {
            if (location.attributes[0].nodeValue) {
                let option = document.createElement("option");
                option.value = location.attributes[0].nodeValue;
                option.text = location.innerHTML;
                geo_drop.appendChild(option);
            }
        });
        geo_drop.onchange = dropDownChangedA11y; 
    });



    //FastConnect tables should be grouped by region, regardless of the filter. We get the rc113v1 (FC tables), then loop through those
    //and build the independent select dropdowns off of those values.
    const setupFastConnectTables = [...fastConnectRegions].forEach(fc => { //replace fc with instance of rc113 
        const groupedFC = fc.querySelectorAll('.otable-w2');
        //Build FastConnect table dropdown
        const geoRegionDropdown = document.createElement('select');         
        [...groupedFC].forEach((fc_table, i) => {
            const fc_option = document.createElement('option');
            fc_option.value = fc_table.querySelector('.geo-fastconnect').innerHTML;
            fc_option.text = fc_table.querySelector('.geo-fastconnect').innerHTML;
            //select the first option by default
            if (i === 0) {
                fc_option.setAttribute("selected", "");
            }
            geoRegionDropdown.append(fc_option);
        }); 

        //After we've looped through each region and built the separate dropdowns, we loop through the groups again and inject them, together with the event listener
        //We also hide all but the first table in each group and setup a listener for updating them on dropdown change.
        [...groupedFC].forEach((fc_table, i) => {
            fc_table.onchange = updateFastConnect; 
            fc_table.querySelectorAll('.geo-fastconnect')[0].insertAdjacentElement('afterEnd',geoRegionDropdown.cloneNode(true));   
            if (i === 0) {
                fc_table.classList.remove('hidefc');
            }
            else {
                fc_table.classList.add('hidefc');
            }                   
        }); 
    });

    const initTableData = function () {  
        //find all geo-data dropdowns
        const tables = document.querySelectorAll('.rc116 table');
        
        for (let i = 0; i < tables.length; i++) {
            const target_tablet_th = tables[i].querySelectorAll('thead .geo_location');
            const target_table_trs = tables[i].querySelectorAll('tbody tr');

            //Once we have the target table, look in every row, calculate the latency based on the geo-data cell and the source data
            for (let i = 0; i < target_table_trs.length; i++) {
                const destination = target_table_trs[i].querySelector('[geo-data]');
                const latencyCell = target_table_trs[i].querySelector('.latency');
                const selectedDropdown = target_tablet_th[0];
                if (destination && destination != '' && latencyCell) {

                    // Filter data object to get only current sourceRegion. [ Filter time complexity O(n) ]
                    let result = cachedData.datacenter_latency.filter(obj => {
                        return obj.sourceRegion === selectedDropdown[0].value;
                    });

                    let latencyOutput = result[0].destinationRegions.filter(obj => {
                        return obj.destinationRegion === destination.attributes['geo-data'].value;
                    });

                    if (latencyOutput[0] && latencyOutput[0].latency != null && destination.attributes['geo-data'].value != selectedDropdown[0].value) {
                        latencyCell.innerHTML = latencyOutput[0].latency + ' ms';
                    }

                    //case for null, case for 0, inject latency value in latency cell
                    if (!latencyOutput || latencyOutput.length == 0) {
                        latencyCell.innerHTML = "&#8212;";
                    }           
                }
            }
        }
    };

    //Subscribes to events emmited by rt03 tabs
    rt03.forEach($el => $el.addEventListener('filterSelected', (e) => {
        //Content on rc113 is hidden by default. Show the appropriate panel if the data-filter value matches the selected on on rt03
        rc113.forEach($el => {
            toggleFilters(e.detail.name);
        });
    }));

    //Listen to menu changes for a11y table 
    rt03tabs.forEach($el => $el.addEventListener('click', (e) => {
        setTimeout( () => {
            updateA11yTable();
	    }, 150);
       
    }));
    

    const toggleFilters = function (filterName) {
        if (filterName == 'show-all') {
            rc113.forEach(el => {
                el.style.display = "table";
            });
        } else {
            rc113.forEach(el => {
                if (el.dataset.filter == filterName) {
                    el.style.display = "table";
                } else {
                    el.style.display = "none";
                }
            });
        }       
    };
}

OCOM.register(function rc115($) {
    'use strict';

    const rt03 = document.querySelectorAll('.rt03v0');
    const rc115 = document.querySelectorAll('.rc115v0 [data-filter]');

    //Subscribes to events emmited by rt03 tabs
    rt03.forEach($el => $el.addEventListener('filterSelected', (e) => {
        //Content on rc115 is hidden by default. Show the appropriate panel if the data-filter value matches the selected on on rt03
        rc115.forEach($el => {
            toggleFilters(e.detail.name);
        });
    }));

    const toggleFilters = function (filterName) {

        rc115.forEach(el => {

            if (el.dataset.filter == filterName || (filterName == 'show-all' && el.hasAttribute('data-filter-group'))) {
                el.style.display = "block";
            }

            else {
                el.style.display = "none";
            }
        });
    };
});

/*! RC116 */
OCOM.register(function rc116($) {
	'use strict';

	const rc116 = document.querySelectorAll('.rc116');

	//Init function if rc116 has been declared (Note, only one rc116 is supported at this time)
	if (rc116.length) {
		const rc116allListItems = document.querySelectorAll('.rc116w1 > ul > li');
		const rc116allListButtons = document.querySelectorAll('.rc116w1 > ul > li > a');
		const allButtons = document.querySelectorAll('.rc116header a[role="button"]');
		const allHeaders = document.querySelectorAll('.rc116header');
		// Working in conjunction with rc113. If there are no rc113 elements that match the active rt03 filter, then don't show the rc116 heading
		
		const CLS_OPEN = 'rc116open',
			CLS_PLUS = 'icn-plus',
			CLS_MIN = 'icn-min';

		/*** Hides the rc116 headings if they're empty by adding a setHeaderVisibility function to the rt03Data object. This function then gets called from rt03  ***/
		rt03Data.setHeaderVisibility = () => {
			allHeaders.forEach(hdr => {
				const allHdrTables = hdr.parentElement.querySelectorAll('[data-filter]');
				let hideHeader;
				rt03Data.selectedFilterName === 'show-all' ? hideHeader = 1 : hideHeader = 0;
			
				allHdrTables.forEach(hdrTable => {
					hdrTable.dataset.filter === rt03Data.selectedFilterName && hdrTable.style['display'] === 'table' ? hideHeader++ : null;
				})
				if (hideHeader > 0) {
					hdr.parentElement.classList.add('show');
					hdr.parentElement.classList.remove('hide')
				}
				else {
					hdr.parentElement.classList.add('hide');
					hdr.parentElement.classList.remove('show')
				}
			})
		},

		allButtons.forEach((btn,i) => {
			setTimeout( () => {
			btn.setAttribute('tabindex','0');
			btn.setAttribute('aria-controls','rc116section-'+i);
			btn.setAttribute('id','rc116control-'+i)
			btn.parentNode.parentNode.querySelector('.rc116w2 > .rc113').setAttribute('id','rc116section-'+i);
			btn.parentNode.parentNode.querySelector('.rc116w2 > .rc113').setAttribute('role','region');
			btn.parentNode.parentNode.querySelector('.rc116w2 > .rc113').setAttribute('aria-labeledby','rc116control-'+i);
			}, 150);
		});

	
		//Setup click and keyup listeners for drawers 
		rc116allListItems.forEach(li => {
			li.querySelector('.rc116header').addEventListener("click", toggleDrawer);
			li.querySelector('.rc116header').addEventListener("keyup", simulateClick);
		});

		rc116allListButtons.forEach(a => {
			a.addEventListener("keydown", toggleDrawer);
		});

		/*** Utility functions  ***/
		
		//Toggles the current target's parent li by switching the rc116open class, and adds a11y as necessary.
		function toggleDrawer(e) {
			rt03Data.setHeaderVisibility();
			e.preventDefault();
			//Only toggle drawer if click occurs on the heading
			if (e.target.nodeName == 'A' || e.target.nodeName == 'H2') {
				const currentButton = this.querySelector('[role="button"]');
				const currentHeader = currentButton.closest('li');
				const currentRc116w2 = currentHeader.querySelector('.rc116w2');

				currentButton.classList.toggle(CLS_MIN);
				currentButton.classList.toggle(CLS_PLUS);
				currentHeader.classList.toggle(CLS_OPEN);	

				if (currentHeader.classList.contains('rc116open'))  {
					currentButton.setAttribute('aria-expanded','true');
					this.focus();
				}
				else {
					currentButton.setAttribute('aria-expanded','false');
				}
			}
		} 

		//If using keyboard navigation, simulate a click when the enter key is pressed
		function simulateClick(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.target.click();
			}
		}
	}
});

/*! RC118 */
OCOM.register(function rc118($) {

	$(".rc118").each(function(){
        var rc118 = $(this);

            var imgdivs = rc118.find('.col-framework.col2 .col-w1 > div:first-child');
            var enlargetxt = (rc118.attr('data-enlarge')) ? rc118.attr('data-enlarge') : "Enlarge";

			// slide counts/controls to each slide	
			var rc118content = rc118.find( ".col-framework.col2 .col-item-w1" );
			rc118content.each(function(i) {
					var disprev = (i == 0) ? 'disabled' : '',
						disnext = ((i + 1) == rc118content.length) ? 'disabled' : '';
					$(this).prepend(`<div class="rc118nav"><button ${disprev} class="rc118snav" data-dir="prev" data-lbl="slide-`+i+`"><span class="sr-only">previous slide</span></button><div>`+ (i + 1) +`<span>/</span>`+ rc118content.length +`</div><button ${disnext} class="rc118snav" data-dir="next" data-lbl="slide-`+(i + 2)+`"><span class="sr-only">next slide</span></button></div>`);
			});
			
			rc118.find('button.rc118snav').on( "click",function(){
				// this changes the data-lbl on the real prev/next links to id the slide that's been selected, not sure if this is what they want, but they didn't want all arrows to track as prev/next only
				rc118.find('.slick-'+$(this).attr('data-dir')).attr('data-lbl',$(this).attr('data-lbl'))
				// now we trigger a click on the hidden real nav			
				rc118.find('.slick-'+$(this).attr('data-dir')).click()
			});

			imgdivs.each(function(i) {
				var imgdiv = $(this);
		
				if(imgdiv.find('div.ytvideo')[0]){
					let ytid = imgdiv.find('div.ytvideo').attr('data-ytid');
					imgdiv.append(`<div class="rc118enlarge"><a class="crsl-image-expand" href="?ytid=${ytid}" rel="vbox" role="button">${enlargetxt} <span class="sr-only">video</span><span aria-hidden="true">+</span></a></div>`); // i don't love the english only video/image sr-only text
				} else if(imgdiv.find('div.bcvideo')[0]){
					let bcid = imgdiv.find('div.bcvideo').attr('data-bcid');
					imgdiv.append(`<div class="rc118enlarge"><a class="crsl-image-expand" href="?bcid=${bcid}" rel="vbox" role="button">${enlargetxt} <span class="sr-only">video</span><span aria-hidden="true">+</span></a></div>`);
				} else if(imgdiv.find('img[src]') || imgdiv.find('img[data-src]')){
					let imgsrc = (imgdiv.find('img[src]')[0]) ? imgdiv.find('img').attr('src') : imgdiv.find('img').attr('data-src');
					imgdiv.append(`<div class="rc118enlarge"><a class="crsl-image-expand" href="${imgsrc}" rel="lightbox" role="button">${enlargetxt} <span class="sr-only">image</span> <span aria-hidden="true">+</span></a></div>`);
				}

			});

    });
});

/*! RC119 */
OCOM.register(function rc119($) {
	'use strict';

  const rt03 = document.querySelectorAll('.rt03v0'); 
  const rc119 = document.querySelectorAll('.rc119 [data-filter]');
  const rc119Container = document.querySelectorAll('.rc119');
  //Subscribes to events emmited by rt03 tabs
  rt03.forEach(el => el.addEventListener('filterSelected', (e) => {
    //Content on rc119 is hidden by default. Show the element if the data-filter value matches the selected on on rt03
    rc119.forEach(el => {
      toggleFilters(e.detail.name);
    });
  }));

  const toggleFilters = function(filterName) {
    for (const container of rc119Container) {
      // query relevant children
      const elements = [...container.querySelectorAll("[data-filter]")];
  
      // hide filtered elements
      for (const element of elements) {
        if (element.dataset.filter === filterName || filterName === 'show-all') {
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        }
      }
  
      // hide parent if all children are hidden
      if (elements.every(element => element.classList.contains('hidden'))) {
        container.classList.add('hidden');
      } else {
        container.classList.remove('hidden');
      }
    };
  };
  
});

/*! RC120 */
OCOM.register(function rc120($) {
	'use strict';

	$('.rc120[data-feedsrc]').each(hbsCheck);

	/* globals propertyExists, objLoaded */
	function hbsCheck() {
		return (
			objLoaded('HBSINJECT', 'initialize') &&
			propertyExists(this, 'data-feedsrc') &&
			propertyExists(this, 'data-template') &&
			init.call(this) ||
			setTimeout(hbsCheck.bind(this), 10)
		);
	}

	function init() {
		var $rc120 = $(this),
				$rc120colw1 = $rc120.find('.col-w1'),
				feedsrc = $rc120.attr('data-feedsrc'),
				template = $rc120.attr('data-template');

		window.HBSINJECT.initialize({
			feedsrc: feedsrc,
			targetObj: $rc120colw1,
			templateName: template,
			beforeInjectionCallback: prepJSON,
			afterInjectionCallback: $rc120colw1.addClass.bind($rc120colw1, 'hbs-initialized')
		});

		return this;
	}

	function prepJSON(json) {

		if(this.templateName == "rc120-storypanels-thumbdisplay-limit4hits" && 'object' === typeof json && 'hits' in json){
			var filteredjson = {};
			filteredjson.hits = [];
			var n = 0;
			var i = 0;

			while(json.hits[n] !== undefined) {
				if (json.hits[n]._source.thumbnail != "" &&  typeof json.hits[n]._source.thumbnail !== 'undefined'){
					filteredjson.hits[i] = json.hits[n];
					i++;
				}
				n++;
			}
			json.hits = filteredjson.hits;
		}
		
		return (
			'object' === typeof json &&
			'hits' in json &&
			'_source' in json.hits[0] &&
			Object.keys(json.hits[0]._source).length &&
			{ hits: json.hits.map(mapRecord) }
		);
	}

	function mapRecord(record) {
		return (
			'object' === typeof record &&
			'_source' in record &&
			{
				thumbnail: record._source.thumbnail,
				type: record._source.ui.types[1].text,
				date: record._source.publish_date,
				title: record._source.title,
				description: record._source.description,
				url: record._source.url,
				badges: record._source.ui.badges
			}
		);
	}
});



 

/*! RC145 */
OCOM.register(function rc145($) {
	'use strict';
	$("#download-button").keydown(function(e){
		if(e.keyCode === 13 || e.keyCode === 32){
			$("#download-button")[0].click();
		} 
	});
	$(".rc145tooltip").keydown(function(e){
		if(e.keyCode === 13 || e.keyCode === 32){
			if($(".rc145tooltiptext").css("visibility") == "hidden"){
				$(".rc145tooltiptext").css("visibility", "visible");
			} else {
				$(".rc145tooltiptext").css("visibility", "hidden");
			}
		} else if (e.keyCode === 9){
			$(".rc145tooltiptext").css("visibility", "hidden");
		}
	});
 }); 

/*! RC139 */
OCOM.register(function rc139($) {

    class Accordion {
        btnToggle = document.querySelector('.rc139 .ctitle-cta button.rc139btn-toggle');
        statusAccordion = {
         "open": true,
         "close": false
        }

        constructor(heading) {
           this.status = this.statusAccordion.close;
           this.heading = heading;
           this.btnToggle.addEventListener('click', this.toggle.bind(this));
        }

        toggle(event) {
         const context = event.currentTarget.parentElement.parentElement.parentElement;
         const activeAccordions = context.querySelectorAll('button[aria-expanded=true].rc139btn');
         const closedAccordions = context.querySelectorAll('button[aria-expanded=false].rc139btn');
         const { open, close  } = event.currentTarget.dataset;
            switch(this.status) {
               case this.statusAccordion.close:
                  closedAccordions.forEach((accordion) => {
                     const listItem = accordion.parentElement;
                     listItem.classList.add('rc139active');
                     listItem.firstElementChild.setAttribute('aria-expanded', true);
                     listItem.querySelector('[aria-hidden]:not(.icn-img)').setAttribute('aria-hidden', false);
                     listItem.querySelector('[aria-hidden]:not(.icn-img)').removeAttribute('hidden');
                     this.btnToggle.setAttribute('aria-expanded', true);
                  });

                  this.status = this.statusAccordion.open;
                  event.currentTarget.innerText = close;
                  break;
               case this.statusAccordion.open:
                  activeAccordions.forEach((accordion) => {
                     const listItem = accordion.parentElement;
                     listItem.classList.remove('rc139active');
                     listItem.firstElementChild.setAttribute('aria-expanded', false);
                     listItem.querySelector('[aria-hidden]:not(.icn-img)').setAttribute('aria-hidden', true);
                     listItem.querySelector('[aria-hidden]:not(.icn-img)').setAttribute('hidden', '');
                     this.btnToggle.setAttribute('aria-expanded', false);
                  });
                  this.status = this.statusAccordion.close;
                  event.currentTarget.innerText = open;
                  break;
            }
        }

        panelHiddenInit(){
            const closedAccordions = document.querySelectorAll('button[aria-expanded=false].rc139btn');
            closedAccordions.forEach((item, key) => {
               item.parentElement.lastElementChild.setAttribute('hidden', '');
            });
        }

        openAccordion(item) {
         if (item.classList.contains('rc139active')) {
            item.classList.remove('rc139active');
            item.firstElementChild.setAttribute('aria-expanded', false);
            item.querySelector('[aria-hidden]:not(.icn-img)').setAttribute('aria-hidden', true);
            item.querySelector('[aria-hidden]:not(.icn-img)').setAttribute('hidden', '');
         } else {
            item.classList.add('rc139active');
            item.firstElementChild.setAttribute('aria-expanded', true);
            item.querySelector('[aria-hidden]:not(.icn-img)').setAttribute('aria-hidden', false);
            item.querySelector('[aria-hidden]:not(.icn-img)').removeAttribute('hidden');
         }
        }

        checkToggleNaming(event) {
         const context = event.currentTarget.parentElement.parentElement.parentElement;
         const activeAccordions = context.querySelectorAll('button[aria-expanded=true].rc139btn');
         const closedAccordions = context.querySelectorAll('button[aria-expanded=false].rc139btn');
         const btnCloseOpenAll = context.querySelector('button');
         const { close, open } = btnCloseOpenAll.dataset;

         if (activeAccordions.length === 3)  {
            this.status = this.statusAccordion.open;
            btnCloseOpenAll.innerText = close;
         } else if (closedAccordions.length === 3) {
            this.status = this.statusAccordion.close;
            btnCloseOpenAll.innerText = open;
         }
        }

        showAccord() {
           const accordionHeading = document.querySelectorAll(this.heading);
           accordionHeading.forEach((item, key) => {
              item.addEventListener('click', (event) => {
                  event.preventDefault();
                  this.openAccordion(item.parentElement);
                  this.checkToggleNaming(event)
              });
           });
           this.panelHiddenInit()
        }
    }

    const accordion = new Accordion('.rc139 .rc139accord .rc139item button.rc139btn');

    accordion.showAccord();

});


 

/*! RC140 */
OCOM.register(function rc140($) {
    const rc140List = document.querySelectorAll('.rc140 div[data-panel]');
    const rc140Close = document.querySelectorAll('.rc140close');

    function getCurrentContext(event) {
        return event.currentTarget.parentElement.parentElement.parentElement;
    }

    function isPanelVisible(panel) {
        if (panel) {
            return panel.classList.contains('rc140active');
        } {
            return false;
        }
    }

    function setAriaExpanded(event, panelId, value) {
        const btnHeader = getCurrentContext(event).querySelector(`[aria-controls=${panelId}]`);
        btnHeader.setAttribute('aria-expanded', value);
        btnHeader.setAttribute('aria-current', value);
    }

    function showPanel(panel) {
        if (panel) {
            panel.classList.add('rc140active');
            return true;
        } else {
            return false;
        }
    }

    function hidePanel(panel) {
        if (panel) {
            panel.classList.remove('rc140active'); 
            return true;
        } else {
            return false;
        }
    }

    function scrollIntoBtnAccordion(event) {
        const containerView = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        const isMobile = window.innerWidth <= 650;
   
        if (!isMobile) {
            if (containerView) {
                const btnToFocus = document.querySelector(`[aria-controls=${containerView}]`);
                if (btnToFocus) {
                    btnToFocus.scrollIntoView({ behavior: 'smooth', block: "start" });
                }
            }
        } else {
            const headerOffset = 120;
            const elementPosition = event.currentTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    function tooglePanel(event, panelId) {
        const currentPanel = getCurrentContext(event).querySelector(`#${panelId}`);
        if (isPanelVisible(currentPanel)) {
            if (hidePanel(currentPanel)) {
                setAriaExpanded(event, panelId, false);
                setInactiveCards(event, panelId, true);
            }
        } else {
            if (showPanel(currentPanel)) {
                scrollIntoBtnAccordion(event);
                setAriaExpanded(event, panelId, true);
                setInactiveCards(event, panelId);
            };
        }
    };

    function hideInactivePanels(event, panelId) {
        const activePanels = getCurrentContext(event).querySelectorAll('.rc140panel.rc140active');
        activePanels.forEach(panel => {
            if (panel.id != panelId) {
                hidePanel(panel); 
                setAriaExpanded(event, panel.id, true);
                setInactiveCards(event, panelId);
            }
       });
    };

    function setInactiveCards(event, panelId, setAllActive) {
        const cards = getCurrentContext(event).querySelectorAll('.rc140cards div[data-panel]')
            cards.forEach((card) => {
                if (setAllActive) {
                    card.classList.remove('rc140inactive');
                } else {
                    if (card.dataset.panel !== panelId) {
                        card.classList.remove('rc140active');
                        card.classList.add('rc140inactive');
                    } else {
                        card.classList.remove('rc140inactive');
                        card.classList.add('rc140active');
                    }
                }
            });
    }

    function closeExpandedPanel(event, panelId) {
        event.stopPropagation();
        hideInactivePanels(event, '');
        setAriaExpanded(event, panelId, false);
        setInactiveCards(event, panelId, true);
    }

    function focusCardBtn(event, panelId) {
        const btnCard = getCurrentContext(event).querySelector(`[aria-controls='${panelId}']`);
        if (btnCard) {
            btnCard.focus();
        }
    }

    function attachEventToClose() {
        rc140Close.forEach((btn) => {
            const panelId = btn.parentElement.id;
            btn.addEventListener('click', event => {
                closeExpandedPanel(event, panelId);
                focusCardBtn(event, panelId);
            });
    
            btn.addEventListener('keypress', event => {
                if (event.key === 'Enter') {
                    closeExpandedPanel(event, panelId);
                    focusCardBtn(event, panelId);
                }
            });
        });   
    }

    function attachEventToCard() {
        rc140List.forEach((list) => {
            list.addEventListener('click', event => {
                event.stopPropagation();
                const { target } = event;
                let panelId = !target.matches('div[data-panel]') ? 
                        target.closest('div[data-panel]').dataset.panel : 
                        target.dataset.panel;
                if (!panelId) {
                    hideInactivePanels(event, '');
                    return false;
                }
                tooglePanel(event, panelId);
                hideInactivePanels(event, panelId);
                return false;
            });
        });
    }

    function _init() {
        attachEventToClose();
        attachEventToCard();
    }

    _init();
}); 

/*! rc162 */
$(document).ready(function() {
	const u30 = document.querySelector(".u30");
    const ct12 = document.querySelector(".ct12");
    const rc110 = document.querySelector(".rc110");
    const progressIndicator = `<div class="progress-bar-wrapper"><div class="progress-bar" id="progress-bar"></div></div>`;
    const hasProgressBar = document.querySelector(".rc162-progress-bar");
    //If rc162-progress-bar class has been added to <body> tag...
    if(hasProgressBar !== null && rc110 === null){
        //and CT12 is in DOM and RC110 is not, append progress to ct12
        if(ct12 !== null){
            ct12.innerHTML += progressIndicator;
        //else if CT12 is not in DOM and RC110 is not, but U30 is, append to U30
        }else if(ct12 === null && u30 !== null){
            u30.innerHTML += progressIndicator;
        }
        window.addEventListener("scroll", () => {
            let height = document.body.scrollHeight - window.innerHeight;
            let scrollPosition = document.documentElement.scrollTop;
            //If page has scrolled less than 10px, don't show progress bar
            if(scrollPosition < 10){
                document.querySelector(".progress-bar-wrapper").style = "opacity: 0"
            } else {
                //If page has been scrolled more than 10px, show progress bar
                document.querySelector(".progress-bar-wrapper").style = "opacity: 1"
            }
            let width = (scrollPosition / height) * 100;
            progressBarEl.style.width = `${width}%`;
        });
    }
    const progressBarEl = document.getElementById("progress-bar");
    //If progress bar is in DOM at load, don't show on initial load
    if(progressBarEl !== null){
        progressBarEl.style.width = `0%`;
        document.querySelector(".progress-bar-wrapper").style = "opacity: 0"
    }
});


/*! RH01 */
$(document).ready(function() {
 	'use strict';

 	var headerHeight = $('.rh01').outerHeight();
 	var headerHeightThird = headerHeight / 3;
	var marker = $('.rh01marker');

	setTimeout(function(){
 		if ($(window).scrollTop() <= headerHeight) {
			marker.addClass('fadein');
		}
 	},300);

 	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

 	var scrollCall = debounce(function() {
	    var previousScroll = 0;
	    $(window).scroll(function(){
	       var currentScroll = $(this).scrollTop();
	       if (currentScroll > previousScroll){
	            if ( $(window).scrollTop() > headerHeightThird && $(window).scrollTop() <= headerHeight) {marker.removeClass('fadein');}
	       } else {
	          if ( $(window).scrollTop() <= headerHeight) {marker.addClass('fadein');}
	       }
	       previousScroll = currentScroll;
	    });
	}, 20);

	window.addEventListener('scroll', scrollCall);

 });

/*! RT01 */

OCOM.register(function inpagetabs($) {
	"use strict";
	var delay = 200,
		selectedPanel,
		targetPanelId = window.location.hash.replace("#","").split("?")[0],
		targetAnchor = '',
		u28ht = $(".u28")[0] ? $(".u28").height() : 0;
	if (targetPanelId && !$("#" + targetPanelId)[0]) {
		targetAnchor = targetPanelId;
		targetPanelId = '';
	}
	
	// Only set role="none" to inpage tab links
	$('.rw-inpagetabs').not('.rt01-direct').find("li").attr("role", "none");
	$('.rw-inpagetabs').not('.rt01-direct').attr("role", "tablist");
	$('.rw-inpagetabs.rt01-direct').find("li.active").find('a').attr("aria-current", "page")
	$('.rw-inpagetabs').each(function (i, tabs){
		$(tabs).attr("data-instance",i);
		//if a11y role not set
		$(tabs).find("li").each(function (j, tab) {
			var a = $(tab).find("a").first();

			// anchor is not a tab if it is an outbound link
			if (a.attr("href").indexOf("#") == 0) {

				if (!a.attr("id")) {
					var href = a.attr("href");
					var newId = "rt01tab" + i + sanitize(href,"-");
					var c = href.split("#");

					a.attr("id",newId);
					
					if (c.length > 1) {
						a.attr("aria-controls", c[1]);
					}
				}

				if (!a.attr("role")) {
					a.attr("role","tab");
				}
				if (!a.attr("tabindex")) {
					a.attr("tabindex","-1");
				}
				if (!a.attr("aria-current")) {
					a.attr("aria-current","false");
				}
			}
		});
		// if active not defined, set to first LI
		if(!$(tabs).find('li.active')[0]){

			if (targetPanelId && $("#" + targetPanelId)[0] && $(tabs).find('li a[href="#' + targetPanelId + '"]')[0]) {
				$(tabs).find('li a[href="#' + targetPanelId + '"]').closest("li").addClass('active');
				$(tabs).find('li a[href="#' + targetPanelId + '"]').attr("aria-current","true").attr("tabindex",0);
				//$(tabs).find('li a[href!="#' + targetPanelId + '"]').attr("aria-selected","false").attr("tabindex",-1);
				window.setTimeout(function () {$('html, body').animate({scrollTop: $($(".rw-inpagetabs")[i]).offset().top - u28ht}, 1000)},delay);
			} else {
				$(tabs).find('li:first-of-type').addClass('active');
				$(tabs).find('li:first-of-type a').attr("aria-current","true").attr("tabindex",0);
				//$(tabs).find('li:not(:first-of-type) a').attr("aria-selected","false").attr("tabindex",-1);
			}
		}

		// add active class to tab container
		$(tabs).closest(".rt01").find('.rw-inpagetab.activetab').removeClass('activetab');
		//$(tabs).closest(".rt01").find('.rw-inpagetab.activetab').attr("aria-hidden","true");

		var ar = $(tabs).find('li.active > a').attr("href").split("#");

		selectedPanel = ar.length > 1 ? ar[1] : "";

		$(tabs).find("li").each(function (j,tab) {
			var panel = $(tab).find("a").attr("href");
			panel = sanitize(panel);

			if (panel == selectedPanel) {

				$("#" + panel).addClass("activetab");
				//$("#" + panel).attr("aria-hidden","false");

			} else {
				$("#" + panel).removeClass("activetab");
				//$("#" + panel).attr("aria-hidden","true");
			}
		});

		var activelnk = $(tabs).find('li.active a').clone(),
			toplnk = $(activelnk).clone();

		$(activelnk).attr("role","button").removeAttr("aria-selected").removeAttr("id").removeAttr('tabindex');

		$(toplnk).removeAttr("aria-selected").removeAttr("id").attr("role","button");
		// clone tabs for mobile menu
		var mmenu = $('<nav id="rw-tabnav-' + i + '" class="rw-tabmenu" aria-label="tab selector">'+tabs.outerHTML.replace("rw-inpagetabs","rw-tabmenuflyout").replaceAll("rt01tab","rt01flytab")+'</nav>');



		// mobile menu items are not considered tabs
		$(mmenu).find('.rw-tabmenuflyout').removeAttr("role");
		$(mmenu).find("li").removeAttr("role");
		$(mmenu).find("ul").attr("id","rw-tabmenuflyout-" + i);
		$(mmenu).find('a[href^="#"]').attr("role","button");
		$(mmenu).find("a").removeAttr("aria-controls").removeAttr("aria-haspopup");
		$(mmenu).find("a").removeAttr("tabindex");
		$(mmenu).find(".active").removeAttr("class");
		// add default item
		mmenu.prepend('<div class="rw-tabmenulink"></div>');
		mmenu.find('.rw-tabmenulink').append(activelnk);
		mmenu.find('.rw-tabmenulink a').attr("id","rw-tabmenu-label-" + i);
		//mmenu.find('ul').prepend('<li>'+toplnk[0].outerHTML+'</li>');
		mmenu.find('ul').prepend('<li></li>');
		$(mmenu).find("ul li:first a").attr("aria-haspopup","true");
		// append mobile after tabs
		$(tabs).after(mmenu);
		$(tabs).addClass('rw-tabinit');

		// desktop tab click
// THIS WAS TRIGGERING TWICE ON CLICK --> $(tabs).on("mousedown focus", "a[href*='#']", function (e) { 
		$(tabs).on("click", "a[href*='#']", function (e) {
			var arr = $(e.currentTarget).attr("href").split("#"),
				flyoutmenu = $(e.currentTarget).closest(".rw-inpagetabs").siblings(".rw-tabmenu").find(".rw-tabmenuflyout"),
				selectedTab = flyoutmenu.find("a[href=\"#" + arr[1] + "\"]").clone(),
				tabmenulink = $(e.currentTarget).closest(".rw-inpagetabs").siblings(".rw-tabmenu").find(".rw-tabmenulink");
			
/*
			selectedTab.attr("role","button").attr("aria-haspopup","listbox").attr("aria-expanded","false").removeAttr("aria-controls").removeAttr("aria-selected").removeAttr("id").removeAttr("class");
			tabmenulink.children("*").remove();
			tabmenulink.append(selectedTab);
*/
			//flyoutmenu.find("li:first").append(tabmenulink.find("a"));

			changetabs(e.currentTarget);
			pushTab(e.currentTarget);
			replaceButton(e.currentTarget);
			e.preventDefault();
		});

		$(tabs).siblings(".rw-tabmenu").on("click keypress", ".rw-tabmenuflyout a[href*=\"#\"]", function (e) {
			if(e.type === 'click' || e.keyCode === 13){
				e.preventDefault();
				// change tabs only if they clicked on a menu item
				if (!$(e.currentTarget).closest("li").is(":first-child")) {
					changetabs(e.currentTarget);
					pushTab(e.currentTarget);
				}
				// move button to back to .rw-tabmenulink
				replaceButton(e.currentTarget);
			}
		});
		
		$(tabs).find("a").on('keypress', function(e){
			if(e.keyCode === 13 || e.keyCode === 32){
				changetabs(e.currentTarget);
				pushTab(e.currentTarget);
				e.preventDefault();
				if(e.currentTarget.getAttribute("href").indexOf("#") === -1){
					e.currentTarget.click()
				}
			}
		})

		$(".rw-tabmenu a").on('keypress', function(e){
			if(e.keyCode === 32 || e.keyCode === 13){
				e.currentTarget.click();
				e.preventDefault();
			}
		});

		$(tabs).siblings(".rw-tabmenu").on("click", ".rw-tabmenulink,.rw-tabmenulink > a", function (e) {
			$(e.currentTarget).closest('.rw-tabmenu').addClass('rw-tabmenuopen');
			$(".rc110mobile").removeClass("rc110menuopen");
            $(".rc110").css("z-index", "")
/*
			// switch focus to cloned button
			$(e.currentTarget).blur();
			$(e.currentTarget).closest(".rw-tabmenu").find(".rw-tabmenuflyout li:first a").focus();
			$(e.currentTarget).closest(".rw-tabmenu").find(".rw-tabmenuflyout li:first a").attr("aria-expanded","true");
*/
 
			// move button to inside menu

			if ($(e.currentTarget).is("a")) {
				moveButton($(e.currentTarget));
			} else {
				moveButton($(e.currentTarget).find("a"));
			}
			e.preventDefault();
		});

		$(tabs).siblings(".rw-tabmenu").find('.rw-tabmenuflyout li:first-of-type,.rw-tabmenuflyout li:first-of-type a').on("click", function (e) {
			$(tabs).siblings(".rw-tabmenu.rw-tabmenuopen").removeClass('rw-tabmenuopen');

			$(e.currentTarget).closest(".rw-tabmenuflyout").siblings(".rw-tabmenulink").find("a").removeAttr("aria-expanded");
			$(".rc110").css("z-index", "3")

			var tabmenu = $(this).closest('.rw-tabmenu');

			if(!tabmenu.find(".rw-tabmenuflyout li a[href^=\"#\"]")[0]){
				replaceButton(tabmenu.find('.rw-tabmenuflyout li:first-of-type a'));
	        	$(tabmenu).removeClass("rw-tabmenuopen");
				e.stopPropagation();
			}

			e.preventDefault();

		});



		$(tabs).siblings(".rw-inpagetab").each( function (i, content) {
			var hash = targetAnchor,
				anchorlink = $("a[name=\"" + hash + "\"]"),
				id = anchorlink.closest(".rw-inpagetab").attr("id");

			if ($(content).find("a[name=\"" + targetAnchor + "\"]")[0]) {
				gotoAnchor(hash,id,anchorlink);
				return false;
			}
		});

	});

	$('.rw-inpagetab').each(function (i, panel){
		if ($(panel).attr("role") !== "tabpanel") {
			$(panel).attr("role","tabpanel");
		}
		if (!$(panel).attr("aria-labelledby")) {
			var labelId = $("a[href=\"#" + $(panel).attr("id") + "\"]").attr("id");
			if (labelId) {
				$(panel).attr("aria-labelledby",labelId);
			}
		}
	});

	// link to tab; link can be anywhere on page as long as it has the appropriate class
	$("body").on("click","a.rw-tablink",function (e) {
		e.preventDefault();
		var hash = $(e.currentTarget).attr("href"),
			parent = '',
			tablink;
		hash = hash ? hash.replace("#","") : hash;
		// if the section exists, then the tab exists, and the link is valid
		if ($("#" + hash + ".rw-inpagetab")[0]) {
			if ($(".rw-tabmenu").is(":visible")) {
				parent = ".rw-tabmenu";
			} else {
				parent = ".rw-inpagetabs";
			}
			tablink = $(parent + " a[href=\"#" + hash + "\"]");

			parent = $(parent + " a[href=\"#" + hash + "\"]").closest(parent);

			$('html, body').animate({scrollTop: $(parent).offset().top}, 1000, function(){
				changetabs(tablink.get(0));
			});
		}
	});
	$("body").on("click","a.rw-tabanchor",function (e) {
		e.preventDefault();
		var anchorlink,
			hash = $(e.currentTarget).attr("href"),
			id = '',
			parent = '',
			tablink,
			tablinks;
		hash = hash ? hash.replace("#","") : hash;
		$(".rt01").each( function (i, rt01) {
			if ($("a[name=\"" + hash + "\"]")[0]) {
				anchorlink = $("a[name=\"" + hash + "\"]");
				id = anchorlink.closest("div.rw-inpagetab").attr("id");
				return false;
			}
		});
		if (id) {
			gotoAnchor(hash,id,anchorlink);
			pushTab(e.currentTarget);
		}
	});
	$(window).on("hashchange", function (e) {
		var anchorlink,
			hash = window.location.hash.replace("#","").split("?")[0],
			id,
			tablink = $(".rw-inpagetabs a[href=\"#" + hash + "\"]").get(0);

		// if content exists
		if (hash && $("#" + hash).is(".rw-inpagetab")) {
			changetabs(tablink);
			window.setTimeout(function () {$('html, body').animate({scrollTop: $($(".rw-inpagetabs")[0]).offset().top - u28ht}, 1000)},delay);
		} else if ($("a[name=\"" + hash + "\"]")[0]) {
			anchorlink = $("a[name=\"" + hash + "\"]");
			id = anchorlink.closest(".rw-inpagetab").attr("id");
			gotoAnchor(hash,id,anchorlink);
		}
	});
	tabview();

	$(window).resize(function () {
		tabview();
	});
	$(window).off("rt01.tabview").on("rt01.tabview", function () {
		tabview();
	});
	$(document).keydown(function(e) {
		var items = false;

		if (e.key === "Escape") { // esc to close menu
	        $(".rw-tabmenuopen").each( function (i, tabmenu) {
	        	replaceButton($(tabmenu).find(".rw-tabmenuflyout li:first-child a"));
	        	$(tabmenu).removeClass("rw-tabmenuopen");
			});
		} else {
			// determine whether operations will be performed on the tabs or the flyout menu
			if ($(document.activeElement).closest(".rw-tabmenuflyout")[0] && $(document.activeElement).closest(".rw-tabmenuopen")[0]) {
				items = makeArray($(document.activeElement).closest(".rw-tabmenuflyout").find("a"));

			} else if ($(document.activeElement).closest(".rw-inpagetabs")[0]) {
				items = makeArray($(document.activeElement).closest(".rw-inpagetabs").find("a"));
			}

			if (items) {
				if (e.keyCode == 37 || e.keyCode == 38) { // left/up
					var i = items.indexOf(document.activeElement);
					items[i == 0 ? items.length - 1 : i - 1].focus();
					e.preventDefault();
					
				} else if (e.keyCode == 39 || e.keyCode == 40) { // right/down
					var i = items.indexOf(document.activeElement);
					items[i == items.length - 1 ? 0 : i + 1].focus();
					e.preventDefault();
					
				}
			}
		}
	});
	function tabview(){
		$('.rw-inpagetabs').each( function (i,tabs){
			// when the last LI is not positioned top 0 then it's wrapping, so switch to mobile view

			if($(this).find('li:last-of-type').position().top > 0){
				$(this).addClass('rw-tabmobile');
				$(this).attr("aria-hidden", "true");
 				// make tab index -1 so keyboard users can't tab to non-visible links
 				$(this).find("a[href^='#']").attr('tabindex','-1');
 				$(tabs).find(".rw-tabmenulink a[href^='#']").attr("tabindex","0");
			}else{
				$(this).removeClass('rw-tabmobile');
				$(this).removeAttr("aria-hidden");
				$('.rw-tabmenuopen').removeClass('rw-tabmenuopen');
				$(tabs).find("li.active a[href^='#']").attr("tabindex","0");
 				$(tabs).find(".rw-tabmenulink a[href^='#']").attr("tabindex","-1");
			}
		});
	}
	function changetabs(tablink){
		var current,
			flyParent,
			parent,
			parentAr = [],
			tabd,
			tmp;
		tmp = $(tablink).attr("href").split("#");
		tabd = tmp[1];
		parentAr = getParents(tablink);
		parent = parentAr[0];
		flyParent = parentAr[1];

		if($(".rw-inpagetab#"+tabd)[0] && $(".rw-inpagetab#"+tabd).not(".activetab")) {

			// remove + add activetab content class
			$("#"+tabd).siblings(".activetab").removeClass('activetab');
			$("#"+tabd).addClass('activetab');
			// remove + add active class on tab
			parent.find('.active a').attr('aria-current','false').attr('tabindex',-1);
			parent.find('.active').removeClass('active');
			parent.find('a[href="'+$(tablink).attr("href")+'"]').closest("li").addClass('active');
			parent.find('a[href="'+$(tablink).attr("href")+'"]').attr("aria-current","true").attr("tabindex",0);
			changeFlyTab(flyParent, tablink);
		}

		$(tablink).closest(".rw-tabmenu").find("[aria-expanded]").removeAttr("aria-expanded");
		$('.rw-tabmenuopen').removeClass('rw-tabmenuopen');

	}
	function changeFlyTab(flyParent, tablink) {
		var instance = $(tablink).closest("[data-instance]").attr("data-instance"),
			$newtab = $(tablink).clone();
		$newtab.attr("role","button").attr("aria-haspopup","listbox").attr("id","rw-tabmenu-label-" + instance);
		flyParent.find('[aria-current]').removeAttr('aria-current');
		$(tablink).attr("aria-current","true");

		flyParent.find('.rw-tabmenuflyout li:first-of-type').html($newtab.get(0).outerHTML);

		if ($(tablink).closest(".rw-tabmobile")) {
			// return focus to listbox button
			$(tablink).closest(".rw-tabmenuflyout").siblings(".rw-tabmenulink").find("a").focus();
		}
		window.dispatchEvent(new Event('resize'));
	}
	function getParents(tablink) {
		var parent, flyParent;
		if ($(tablink).closest(".rw-inpagetabs")[0]) {
			parent =  $(tablink).closest(".rw-inpagetabs");
			flyParent = $(tablink).closest(".rw-inpagetabs").siblings(".rw-tabmenu");
		}  else {
			parent =  $(tablink).closest(".rw-tabmenu").siblings(".rw-inpagetabs");
			flyParent = $(tablink).closest(".rw-tabmenu");
		}
		return [parent,flyParent];
	}
	function gotoAnchor(hash,parentId,anchorlink) {
		var parent = '',
			parentId,
			tablink,
			tablinks;

		anchorlink = $("a[name=\"" + hash + "\"]");
		tablinks = $("a[href=\"#" + parentId + "\"]");
		for (var i = 0; i < tablinks.length; i++) {
			if ($(tablinks[i]).closest(".rw-tabmenu:visible")[0]) {
				parent = $(tablinks[i]).closest(".rw-tabmenu")[0];
				tablink = $(tablinks[i]);
				break;
			} else if ($(tablinks[i]).closest(".rw-inpagetabs:visible")[0]) {
				parent = $(tablinks[i]).closest(".rw-inpagetabs")[0];
				tablink = $(tablinks[i]);
				break;
			}
		}

		if (parent) {
			changetabs(tablink.get(0));
			$('html, body').animate({scrollTop: anchorlink.offset().top}, 1000);
		}
	}
	// convert jquery collection to array
	function makeArray(jqObj) {
		var arr = [],
			l = jqObj.length;
		for (var i = 0; i < l; i++) {
			arr[i] = $(jqObj).get(i);
		}
		return arr;
	}
	function moveButton(target) {
		var flyout = $(target).closest(".rw-tabmenu").find(".rw-tabmenuflyout");
		// move button from rw-tabmenulink to first list item of open menu
		flyout.find("li:first").html($(target));
		$(target).attr("aria-expanded","true");
		// maintain focus on button after it's been moved
		$(target).focus();
	}
	function pushTab(target) {
		if(history.pushState) {
		    history.pushState(null, $(target).text(), $(target).attr("href"));
		}
		else {
		    location.hash = $(target).attr("href");
		}
	}
	// target must be a menu item anchor
	function replaceButton(target) {
		var btn,
			flyoutmenu,
			instance = $(target).closest(".rw-inpagetabs").attr("data-instance"),
			tabmenu,
			tabmenulink;

		if ($(target).closest(".rw-inpagetabs")[0]) {
			tabmenu = $(target).closest("ul").siblings(".rw-tabmenu");
		} else if ($(target).closest(".rw-tabmenu")[0]) {
			tabmenu = $(target).closest(".rw-tabmenu");
		}
		flyoutmenu = tabmenu.find(".rw-tabmenuflyout");
		tabmenulink = tabmenu.find(".rw-tabmenulink");

		// first list item of tabmenuflyout is where the button gets moved
		btn = tabmenu.find(".rw-tabmenuflyout li:first a");
		if (btn.length > 0) {
			// replace tab attributes with button attributes
			btn.attr("id","rw-tabmenu-label-" + instance).removeAttr("class").removeAttr("aria-selected").attr("aria-controls","rw-tabmenuflyout-" + instance).attr("aria-expanded","false");
			// move the button back to rw-tabmenulink
			tabmenulink.html(btn);
			// maintain focus on button after it's been moved
			if ($(target).closest(".rw-tabmenu")[0]) {
				tabmenulink.find("a").focus();
			}
		}
	}
	function sanitize(str,prefix,suffix) {
		var newstr = str.replace(/http:\/\/[^\/]+/,"").replace("#","").replaceAll(/ /g,"").replace(".html","").replaceAll(/[\/\.]{1}/g,"-");
		newstr = newstr.replace(/^-+/,"").replace(/-+$/,"");
		if (prefix) {
			newstr = prefix + newstr;
		}
		if (suffix) {
			newstr = newstr + suffix;
		}
		return newstr;
	}
});

/* !RT03 */

/**
 * The rt03Data object maintains the state for the filter tabs, in order to make it easier to sync tab and dropdowns
 * @param  {Integer} selectedOptionIndex Currently selected index (0-based)
 * @param  {String} selectedFilterName Currently selected filter name
 * @param  {Array} menuData Array representation containing the names (Strings) of all tab menu options
 * @param  {Boolean} isMobileMenuOpen Current state of mobile menu dropdown (open/closed)
 * @param  {Function} setOptionIndex Utility function to set the state of selectedOptionIndex
 * @param  {Function} setFilterName Utility function to set the state of selectedFilterName
 * @param  {Function} setFilterEvent Builds a CustomEvent object with the selected filter. This is passed down to components that are suscribed to rt03 so they can update accordingly
 * @param  {Function} sortMenuData Utility function to sort the mobile menu data, placing the currently selected option first
 */

//init and build rt03Data object
const rt03Data = {
	selectedOptionIndex: 0,
	selectedFilterName: '',
	menuData: [],
	isMobileMenuOpen: false,
	setOptionIndex: (newOption) => {
		rt03Data.selectedOptionIndex = newOption;
	},
	setFilterName: (newFilter) => {
		rt03Data.selectedFilterName = newFilter;
	},
	setFilterEvent: () => {
		const filterSelected = new CustomEvent('filterSelected', {
			detail: {
				name: rt03Data.selectedFilterName
			}
		});	
		return filterSelected	
	},
	sortMenuData: () => {
		rt03Data.menuData.forEach(function (item, i) {
			if (i === rt03Data.selectedOptionIndex) {
				rt03Data.menuData.splice(i, 1);
				rt03Data.menuData.unshift(item);
			}
		});
	},
	menuOptions: []
}

OCOM.register(function rt03($) {
	"use strict";

	const rt03 = document.querySelectorAll('.rt03v0');
	const tabs = document.querySelectorAll('.rt03 [role="tab"]');
	const tabList = document.querySelector('.rt03w1[role="tablist"]');
	rt03Data.setFilterName(document.querySelector('[data-filter-default]').getAttribute("data-filter"));  //Sets the default option state
	const rt03DefaultTab = document.querySelectorAll('.rt03v0 [data-filter="' + rt03Data.selectedFilterName + '"]');

	//For now, there can only be one rt03 component per page, scope for the first one, show warning.
	if (rt03.length > 1) {
		console.warn('Only one rt03v0 is supported per page at this time');
	}

	//Rename .rw-inpagetabs to .rt03-inpagetabs to avoid conflicts with other components
	const rwInPageTabs = document.querySelectorAll('.rt03 .rw-inpagetabs');
	rwInPageTabs.forEach(rwTab => {
		rwTab.classList.remove('rw-inpagetabs');
		rwTab.classList.add('rt03-inpagetabs');
	});
	
	const rt03InnerWrapper = document.querySelector('.rt03-inpagetabs');

	// Add a click event handler to each tab and set the default state based on which tab has the data-filter-default attribute
	tabs.forEach((tab, i) => {
		tab.addEventListener("click", changeDesktopTabs);
		if (tab.hasAttribute('data-filter-default')) {
			rt03Data.setOptionIndex(i+1);
			//rt03Data.setFilterName(tab.getAttribute("data-filter")); //Sets the default option state
		}
	});


	// Init tabs
	setTimeout(() => {
		rt03[0].dispatchEvent(rt03Data.setFilterEvent());

		//Inject mobile menu wrapper
		rt03InnerWrapper.insertAdjacentHTML('afterend', '<nav class="rw-tabmenu cwidth"><div class="rw-tabmenulink" tabindex="0"><div class="rw-tabmenu-label"><span></span></div><ul class="rw-tabmenuflyout rt01-direct" data-ocomid="inpagetabs" data-instance="0" role="menu" aria-labelledby="rw-tabmenu-label-0" id="rw-tabmenuflyout-0"></ul></div></nav>');

		const tabDOM = new DocumentFragment();
		let mobileMenu = document.querySelector('.rw-tabmenuflyout');
		let tabMenuLabel = document.querySelector('.rt03 .rw-tabmenu-label span');
		let tabMenu = document.querySelector('.rw-tabmenu');
		let tabMenuLink = document.querySelector('.rw-tabmenulink');

		rt03Data.setHeaderVisibility && rt03Data.setHeaderVisibility();


		/**
		 * Builds the mobile menu DOM structure based on the data present in rt03Data.menuData
		 * @property  {Array} rt03Data.menuData 
		*/
		const buildMobileMenu = () => {

			//build mobile dropdown content and inject to tabDOM fragment
			rt03Data.menuData.map((tab, i) => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				i++;
				a.setAttribute('href', '#');
				a.setAttribute('role', 'button');
				a.setAttribute('role', 'menuitem');
				a.setAttribute('id', 'tabmenuoption-' + i);
				a.setAttribute('aria-selected', 'false');
				a.setAttribute('tabindex', '-1');
				a.innerHTML = tab;
				li.append(a);
				tabDOM.appendChild(li);
			});
			//rt03Data.sortMenuData();

			//append tabDOM fragment to mobile wrapper
			tabMenuLabel.innerHTML = rt03Data.menuData[rt03Data.selectedOptionIndex-1];
			mobileMenu.appendChild(tabDOM);
		}

		/**
		 * Get values from desktop menu to populate rw-tabmenuflyout ul 
		*/
		tabList.querySelectorAll('[role="tab"]').forEach((t, i) => {
			//Get values from desktop menu and populate rt03 menu object 
			rt03Data.menuData.push(t.querySelector('span').innerHTML);
			// t.setAttribute("tabindex",-1); 
			// t.setAttribute("aria-selected","false")
		});
		buildMobileMenu();


		/**
		 * Mobile flyout listener
		*/
		const switchMobileTabs = (e) => {
			e.preventDefault();
			let tabMenuItem = mobileMenu.querySelector('[role="menuitem"]'); //gets only first item on the list
			let dropdownLabel = document.querySelector('.rw-tabmenu-label span');
			let selectedOption = e.target.id.split('-')[1];

			//toggle mobile menu state indicator and class
			tabMenu.classList.toggle('rw-tabmenuopen');
			rt03Data.isMobileMenuOpen = rt03Data.isMobileMenuOpen !== true;

			//If user selects an option from the dropdown, update state
			if (selectedOption && !isNaN(selectedOption)) {
				rt03Data.setOptionIndex(selectedOption--);
				dropdownLabel.innerHTML = rt03Data.menuData[selectedOption];
				tabs[selectedOption].getElementsByTagName("span")[0].click();
			}

			//TODO: Fix a11y for dropdown
			if (tabMenu.classList.contains('rw-tabmenuopen')) {
				//tabMenuLink.getElementsByTagName("a")[0].setAttribute('aria-expanded', 'true'); TODO: DEBUG
				//toggle tabmenulink 
				tabMenuLink.setAttribute('aria-hidden', 'true');
				tabMenuItem.focus();
			}

			else {
				tabMenuLink.setAttribute('aria-hidden', 'false');
				tabMenuLink.getElementsByTagName("a")[0].setAttribute('aria-expanded', 'false');
			}	
		};


		/**
		 * Click event listener for desktop tabs
		*/
		tabMenu.addEventListener("click", e => {
			switchMobileTabs(e);
			e.preventDefault();
		});

		/**
		 * Keydown event listener for mobile tabs, including logic to shift focus on dropdown elements for a11y
		*/
		let mobileTabFocus = 0;
		tabMenuLink.addEventListener("keydown", e => {
			e.preventDefault(); //prevent page from moving up or down
			let tabMenuItem = mobileMenu.querySelectorAll('[role="menuitem"]');

			tabMenuItem[mobileTabFocus].setAttribute("tabindex", 0);
			if (rt03Data.isMobileMenuOpen) {  //only process keyboard events for mobile dropdown if it's open [check wtih Chris]

				if (e.keyCode === 9) { //if tab is pressed, close dropdown, focus on document.
					tabMenu.classList.toggle('rw-tabmenuopen');
					rt03Data.isMobileMenuOpen = rt03Data.isMobileMenuOpen !== true;
					tabMenuLink.focus();
					e.preventDefault();
				}
				if (e.keyCode === 39 || e.keyCode === 40) { //press down or right
					mobileTabFocus++;
					// If we're at the end, go to the start
					if (mobileTabFocus >= tabs.length) {
						mobileTabFocus = 0;
					}
					// Move left
				} else if (e.keyCode === 37 || e.keyCode === 38) {
					mobileTabFocus--;
					// If we're at the start, move to the end
					if (mobileTabFocus < 0) {
						mobileTabFocus = tabs.length - 1;
					}
				}
				tabMenuItem[mobileTabFocus].focus();
			}
			if (!rt03Data.isMobileMenuOpen) { //if user focuses on dropdown and presses up and down, display dropdown
				//toggle mobile menu state indicator and class
				if (e.keyCode === 38 || e.keyCode === 40) {
					tabMenu.classList.toggle('rw-tabmenuopen');
					rt03Data.isMobileMenuOpen = rt03Data.isMobileMenuOpen !== true;
				}
			}

			// If enter is pressed, activate selected filter
			if (e.keyCode === 13) {
				setTimeout(() => {
					switchMobileTabs(e);
					e.preventDefault();
					tabMenuLink.focus();
				}, 50);

			}
		});

		// Init the default tab as selected
		rt03DefaultTab[0].setAttribute("aria-selected", true);
		rt03DefaultTab[0].setAttribute("tabindex", "0");

	}, 50);

	/**
	 * Keydown event listener for desktop tabs, including logic to shift focus for a11y, enabling arrow navigation between tabs
	*/
	let tabFocus = 0;
	tabList.addEventListener("keydown", e => {
		if (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 9) {
			e.preventDefault();
			tabs.forEach(t => t.setAttribute("tabindex", -1));
			tabs[tabFocus].setAttribute("tabindex", 0);
			if (e.keyCode === 39 || e.keyCode === 40 || (!e.shiftKey && e.keyCode === 9)) {
				
				tabFocus++;
				if (tabFocus >= tabs.length && (!e.shiftKey && e.keyCode === 9)) {
					tabFocus = tabs.length - 1;
					document.activeElement.blur();
					return false;
				}
				// If we're at the end, go to the start
				if (tabFocus >= tabs.length) {
					tabFocus = 0;
				}

				// Move left
			} else if (e.keyCode === 37 || e.keyCode === 38 || (e.shiftKey && e.keyCode === 9)) {
				tabFocus--;
				if (tabFocus <0 && (e.shiftKey && e.keyCode === 9)) {
					tabFocus = 0;
					document.activeElement.blur();
					return false;
				}				
				// If we're at the start, move to the end
				if (tabFocus < 0) {
					tabFocus = tabs.length - 1;
				}
				
			}
			tabs[tabFocus].focus();
		}

		// If enter is pressed, activate selected filter
		if (e.keyCode === 13 && e.keyCode === 32) {
			setTimeout(() => {
				tabs[tabFocus].setAttribute("tabindex", 0);
				tabs[tabFocus].setAttribute("aria-selected", true);
				tabMenuLabel.innerHTML = rt03Data.menuData[rt03Data.selectedOptionIndex];
				tabs[tabFocus].getElementsByTagName("span")[0].click();
			}, 50);
			e.preventDefault();
		}
	});

	/**
	 * Switches desktop tabs
	 * @param  {Event} e 
	*/
	function changeDesktopTabs(e) {
		const target = e.target.closest('button');
		const parent = target.closest('.rt03w1');
		rt03Data.setFilterName(target.getAttribute("data-filter"));
		let dropdownLabel = document.querySelector('.rt03 .rw-tabmenu-label span');

		// console.log('target', target);
		let selectedOption = target.id.split('-')[1];

		//if index is valid, populate dropdown label with selected filter's name
		if (selectedOption && !isNaN(selectedOption)) {
			rt03Data.setOptionIndex(selectedOption--);
			dropdownLabel.innerHTML = rt03Data.menuData[selectedOption];
		}

		//a11y: deselect all tab buttons
		parent.querySelectorAll('button').forEach(b => {
			b.setAttribute("tabindex", "-1");
			b.setAttribute("aria-selected", false);
		});

		//a11y: Set this tab as selected
		target.setAttribute("aria-selected", true);
		target.setAttribute("tabindex", "0");
		target.focus();

		rt03[0].dispatchEvent(rt03Data.setFilterEvent());
		rt03Data.setHeaderVisibility && rt03Data.setHeaderVisibility();
	}
});

/*! RH03 */
OCOM.register(function rh03($) {
	'use strict';

	// fallback for old code
	$('.rh03').each(function(){
		var rh03 = $(this);
		if(rh03.find('.rh03vid')[0] && rh03.find('.herotitle:not(.rh03twocol)')[0]){
			rh03.find('.herotitle > *:not(.rh03vid)').wrapAll('<div class="rh03col1"></div>');
			rh03.find('.herotitle').addClass('rh03twocol');
		}
	});
});


/*! RH05 */
const rh05Wrapper = () => {
$(document).ready(function() {
	
	'use strict';

	//NOTE: Inline script tag included in markup to load the first background image

	if($('.rh05')[0]){

		const autoRotate = $('.rh05').attr("data-autorotate");
		const anim_speed = 1000;
		const anim_autoplaySpeed = 5000;

		setTimeout(function(){
			$(".slick-animated-dots").removeClass("init");
		},anim_autoplaySpeed + anim_speed);
	
		var test_slider = $('.rh05w2');
		test_slider.slick({
			appendDots: $('.rh05w2'),
			verticalSwiping: false,
			lazyLoad: 'ondemand',
			dots: true,
			dotsClass: "slick-animated-dots cwidth init",
			customPaging: function(slick,index) {
				if(autoRotate) {
					return '<button type="button"><span style="transition-duration: ' + anim_autoplaySpeed+ 'ms; transition-delay: ' + anim_speed + 'ms; animation-duration: ' + anim_autoplaySpeed + 'ms;"></span></button';
				} else {
					return '<button type="button"><span></span></button';
				}
				
			},
			arrows: false,
			infinite: true,
			cssEase: 'ease',
			speed: anim_speed,
			autoplay: !!(autoRotate && parseInt(autoRotate) > 0),
			autoplaySpeed: anim_autoplaySpeed,
			centerMode: false,
			pauseOnHover: true,
			fade: false,
			swipe: true,
			touchMove: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		test_slider.on('init reInit', function(){ 
			$('.rh05w2').find('.slick-slide').each(function(){
				$(this).removeAttr('tabindex')
			}); 
		});

		test_slider.on('afterChange', function(){ 
			$('.rh05w2').find('.slick-slide').each(function(){
				$(this).removeAttr('tabindex')
			}); 
		});

		$('.rh05').addClass('loaded');

		
		$('.rh05w2').find(".slick-slide").each(function(){
			$(this).removeAttr("tabindex")
		});
		

		// Creating the play / pause button 
		if($('.rh05').attr("data-playtext")){
			const PLAY_TEXT = $('.rh05').attr("data-playtext");
			const PAUSE_TEXT = $('.rh05').attr("data-pausetext");
			const PLAY_ARIA_LABEL = 'Start autoplay';
			const PAUSE_ARIA_LABEL = 'Pause autoplay';

			$('<div class="rh05-pills cwidth"></div>').appendTo(test_slider);
			$('.slick-animated-dots').appendTo('.rh05-pills');
			$('<div class="rh05-pause"><button class="rh05-pausew1"  data-lbl="'+PAUSE_TEXT+'" title="'+PAUSE_TEXT+'" data-play="'+PLAY_TEXT+'" data-pause="'+PAUSE_TEXT+'" aria-label="'+PAUSE_ARIA_LABEL+'"><i class="rh05-pausebtn paused"></i><span>'+PAUSE_TEXT+'</span></button></div>').appendTo('.rh05-pills');

			$('.rh05-pausew1').on('click', function() {
				if($('.rh05-pausew1 i').hasClass('paused')){
					test_slider.slick('slickPause');
					$('.rh05-pausew1').attr("data-lbl", PLAY_TEXT);
					$('.rh05-pausew1').attr("title", PLAY_TEXT);
					$('.rh05-pausew1').attr("data-play", PAUSE_TEXT);
					$('.rh05-pausew1').attr("aria-label", PLAY_ARIA_LABEL);
					$('.rh05-pausew1 span').text(PLAY_TEXT);
					$('.rh05-pausew1').attr("aria-live", 'polite');
					$('.rh05-pausew1 i').removeClass('paused').addClass('rh05-pausebtn rh05-pausebtn');
				} else{
					test_slider.slick('slickPlay');
					$('.rh05-pausew1').attr("data-lbl", PAUSE_TEXT);
					$('.rh05-pausew1').attr("title", PAUSE_TEXT);
					$('.rh05-pausew1').attr("data-play", PAUSE_TEXT);
					$('.rh05-pausew1').attr("aria-label", PAUSE_ARIA_LABEL);
					$('.rh05-pausew1 span').text(PAUSE_TEXT);
					$('.rh05-pausew1').removeAttr("aria-live");
					$('.rh05-pausew1 i').removeClass('rh05-pausebtn').addClass('rh05-pausebtn paused');
				}
			});
		}

		$("ul.slick-animated-dots").on('keyup', function(e){
			if(e.keyCode === 37){
				$(this).find("li").not(".slick-active").find("button").css("outline", "0px");
				$(this).find("li.slick-active").find("button").css("outline", "2px dotted #FFF");
			}
			if(e.keyCode === 39){
				$(this).find("li").not(".slick-active").find("button").css("outline", "0px");
				$(this).find("li.slick-active").find("button").css("outline", "2px dotted #FFF");
			}
		})

		var rh05slides = document.getElementsByClassName('rh05w3');
		var rh05firstSlide = rh05slides[0];
		var rh05firstSlideSrc = rh05firstSlide.getAttribute('data-bgimg');
		if (rh05firstSlideSrc) {
			rh05firstSlide.style.backgroundImage = 'url('+rh05firstSlideSrc+')';
			rh05firstSlide.classList.add("bgimg");
			rh05firstSlide.removeAttribute("data-bgimg");
		}
	}
});
}

//We wrap up the entire component in a new function and then register it in the OCM framework if we're in OCM so it can be triggered
var isOCM = document.querySelector('.scs-slot');
if (isOCM){
	OCOM.register(function rh05($) {
		rh05Wrapper();
	});
}
else {
	rh05Wrapper();
}

/*! RH09 */
OCOM.register(function rh09($) {
    'use strict';

	function rh09adjust() {
		$('.rh09').each(function() {
			$(this).find('.rh09-ttl').equalHeight();
			if($(this).hasClass('rh09v3')) {
				$(this).find('.rh09-copy').equalHeight();
			}
		});
	}

	$('.rh09 .col-framework').on('inview',rh09adjust);

	$(window).on('resize', rh09adjust);

});



/*! RH10 */
OCOM.register(function rh10($) {
    'use strict';

	const getComponentBackground = window.getComputedStyle(document.querySelector(".rh10[class*='0bg'")).backgroundColor;
    //If theme color is 00 level, hard code gradient
    if(getComponentBackground === 'rgba(0, 0, 0, 0)'){
        document.querySelector('.rh10gradient').style = `background: left: 0%; height: 100%; width: 100%; top: 0px; background: linear-gradient(to right, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 73%);`
    } else {
        //If theme color is higher than 00, use supplied rgba color value from theme
        document.querySelector('.rh10gradient').style = `background: left: 0%; height: 100%; width: 100%; top: 0px; background: linear-gradient(to right, ${getComponentBackground} 40%, rgba(255,0,0,0) 73%);`
    }
});



/*! u31 */
OCOM.register(function u31($) {
	'use strict';

        var navSect = $('.u31');
        var nav1 = $('#u31nav');
        var ham = $('.u31 .u31ham');
        var tools = $('.u31 .u31tools');
        const u31 = document.getElementById('u31');
        const doc = document;

        $(ham).click(function () {
            if (navSect.hasClass('navopen')) {
                $(navSect).removeClass('navopen');
                $(this).removeClass('u31ham-anim');
                $(this).attr('aria-expanded','false');
                $(nav1).attr('aria-hidden','true');
            } else {
                $(navSect).addClass('navopen');
                $(this).addClass('u31ham-anim');
                $(this).attr('aria-expanded','true');
                $(nav1).attr('aria-hidden','false');
            }
        });
        // keyboard accessibility
        $(doc).keyup(function(e) {
            // ESCAPE key pressed when nav open
            if (e.which == 27) {
                if (navSect.hasClass('navopen')) {
                    $(navSect).removeClass('navopen');
                    $(ham).removeClass('u31ham-anim');
                    $(nav1).attr('aria-hidden','true');
                }
            }
            // Add click on focus ENTER key press and change icon
            if (e.which == 13 && $(tools).is(':focus')) {
                ham.click();
            } else if (e.which == 13 && $(navSect).hasClass('navopen')) {
                $(navSect).removeClass('navopen');
                $(ham).removeClass('u31ham-anim');
                $(nav1).attr('aria-hidden','false');
            }
        });

		//Skip to Content
		var u31skip2 = doc.getElementById("u31skip2");
		if(u31skip2){
			//Change Markup
			var u31skipLiParent = '';
			u31skip2.removeAttribute("tabindex");
			u31skip2.removeAttribute("aria-expanded");
			var u31skipLi = doc.getElementById("u31skip2c").parentNode;
			var u31skipLiHtml = u31skipLi.outerHTML;
			u31skipLiParent = doc.getElementById("u31skip2c").parentNode.parentNode;
			u31skipLi.remove();
			u31skipLiParent.insertAdjacentHTML('afterbegin', u31skipLiHtml);
			//Clone and Move Markup
			var u31skip2copy = u31skip2.cloneNode(true);
			u31skip2copy.id+= "content";
			document.body.insertBefore(u31skip2copy, document.body.firstElementChild);
			u31skip2.remove();
			//Insert target
			var u31skip2c = document.getElementById("u31skip2c");
			var u31skip2cHref = u31skip2c.getAttribute("href").replace("#","");
			var u31currentTarget = document.getElementById(u31skip2cHref);
			var u31skipMarkup = '<div id="'+u31skip2cHref+'" class="sr-only"></div>';
			if(!u31currentTarget){
				u31.insertAdjacentHTML('afterend', u31skipMarkup);
			}
		}

});

// NAIL, MEET HAMMER.
$(window).on("load",function() {
 	Waypoint.refreshAll();
});


/*! INFO */window["redwood-lib"] = "DEV BUILD";