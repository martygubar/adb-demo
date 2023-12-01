/*!
######################################################

# REDWOOD-BASE.JS

# OCOM GLOBAL ASSET RELEASE: DEV BUILD

# BUILD DATE: Sat Apr 29 2023 09:06:02 GMT-0700 (Pacific Daylight Time)

# COPYRIGHT ORACLE CORP 2023 [UNLESS STATED OTHERWISE]

######################################################
*/



// SET CSS / JS FILE PATH VARS
/*! GENERIC - SET PATHS */
var jsfilepath  = ($('script[data-wsjs]')[0]) ? $('script[data-wsjs]').first().attr('src').replace(/[^\/]+\.js/,'') : '';
var cssfilepath = ($('link[data-wscss]')[0])  ? $('link[data-wscss]').first().attr('href').replace(/[^\/]+\.css/,''): '';


// GENERIC UTILITIES
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();


/*! GENERIC - LAZY BGIMG OBSERVER */
/**
 * Sets a background image using a URL supplied by a data attribute
 * on a container when the user has scrolled to said container.
 * A container may also implement data-bgimg-lt & data-bgimg-rt
 * to attach absolutely positioned divs with the given img URL
 * @hook [data-bgimg]
 * @requires generic-obgimg-function
 * @requires waypoints
 * @requires jQuery
 */

jQuery(function($){
	'use strict';

	return 'OCOM' in window ?
        OCOM.register(genericLazyBgImg, true)
        : $(document).one('OCOMReady', function() {
            OCOM.register(genericLazyBgImg, true);
        });
			
	function genericLazyBgImg() {
		var lzybgimg;
		// NATIVE JS LAZYLOAD
		if ("IntersectionObserver" in window) {

			if (window.bgimgObserver !== "function") {
				window.bgimgObserver = new IntersectionObserver(function(entries, observer) {
					entries.forEach(function(entry) {
						if (entry.isIntersecting) {
							$(entry.target).bgimg()
							window.bgimgObserver.unobserve(entry.target);
						}
					});
				});
			}
			lzybgimg = document.querySelectorAll("[data-bgimg]");
			lzybgimg.forEach(function(bgimgs) {
				window.bgimgObserver.observe(bgimgs);
			});
			$(window).on("lazybgimgwaypoints.run", function () {
				lzybgimg = document.querySelectorAll("[data-bgimg]");
				lzybgimg.forEach(function(bgimgs) {
					window.bgimgObserver.observe(bgimgs);
				});
			});
		
		// WAYPOINT FALLBACK
		} else {
			function invokeLazyBgimg() {
				$('[data-bgimg]').waypoint(function(direction) {
					$(this.element).each(function() {
						$(this).bgimg()
					});
					this.destroy();
				}, {
					offset: '125%'
				});
			}
			invokeLazyBgimg();
			$(window).on("lazybgimgwaypoints.run", function () {
				invokeLazyBgimg();
			});
		}
	}
});

/*! GENERIC - LAZY BGIMG */
/**
 * Sets a background image using a URL supplied by a data attribute
 * on a container when the user has scrolled to said container.
 * A container may also implement data-bgimg-lt & data-bgimg-rt
 * to attach absolutely positioned divs with the given img URL
 * @hook [data-bgimg]
 * @requires jQuery
 */
 
jQuery(function($){
	'use strict';

	$.fn.bgimg = function() {

		var		el = $(this),
				css = '',
				pos = '',
				siz = '',
				rpt = '',
				src,
				srclist,
				srcArr;

		// full size - 1920 wide
		// bgimg01-filename.png
		// bgimg01-overlay-filename.png
		// bgimg01-bgnw-overlay-filename.png

		// half size - 960 wide
		// bgimg02-filename.png
		// bgimg02-overlay-filename.png
		// bgimg02-bgnw-overlay-filename.png

		// sm size - 480 wide
		// bgimg03-filename.png
		// bgimg03-overlay-filename.png
		// bgimg03-bgnw-overlay-filename.png

		// full width (not cover) - 1920 wide
		// bgimg04-filename.png

		// rw-bgnw-overlay-filename.png
		
		if(el.is('[data-bgimg]') || el.is('[data-bgimg2x]')) {

			src = ((el.is('[data-bgimg2x]') && $('html').hasClass('retina') && $(window).width() > 740)) ? el.attr('data-bgimg2x') : el.attr('data-bgimg');
			src = encodeURI(src);
			src = src.replace(/[{(}]/g, '%28');
			src = src.replace(/[{)}]/g, '%29');

			if(/full-/.test(src)){
				el.addClass('bgimg-full');
			}


			// if multiples or just one image that is an overlay then add as abs position div objects
			if(src.match(/,/g) || src.match(/-overlay/g) || src.match(/bgimg02/g) || src.match(/bgimg03/g) || src.match(/bgimg04/g)){

				srclist =  src.split(',');
		
				srclist.forEach(function(msrc,i){
					var	dtype = 'bgimg-cover',
						dover = (msrc.match(/-overlay/g)) ? ' bgimg-overlay' : '',
						dsize = ' bgimg-fsize',
						dbgc = '';

					if(/bgimg02-/.test(msrc)){
						dsize =  ' bgimg-hsize';
						if(/bg[ns]*w-/.test(msrc)){
							dtype = "bgimg-lhalf";
						}else if(/bg[ns]*e-/.test(msrc)){
							dtype = "bgimg-rhalf";
						}
					}

					if(/bgimg03-/.test(msrc)){
						dsize =  ' bgimg-smsize';
						if(/bg[ns]*w-/.test(msrc)){
							dtype = "bgimg-lhalf";
						}else if(/bg[ns]*e-/.test(msrc)){
							dtype = "bgimg-rhalf";
						}
					}
					
					if(/bgs[ew]*-/.test(msrc)){
						dtype += " bgimg-bottom";
					}

					if(/-cover-/.test(msrc)){
						dtype += " bgimg-cover";
					}

					if(/bgimg04-/.test(msrc)){
						dsize = ' bgimg-fwidth'; //overwrite fullsize
					}

					// get closest object with bg color, otherwise the closest can look too far and match a lighter color that's a parent of a darker color
					if(el.closest('[class*="0bg"]')[0]){

						var nearestbg = el.closest('[class*="0bg"]');

						if(nearestbg.is('[class*="-40bg"]')){
							dbgc = " bgimg-med";
						}else if(nearestbg.is('[class*="-30bg"]')){
							dbgc = " bgimg-light";
						}else if(nearestbg.is('[class*="-20bg"]')){
							dbgc = " bgimg-lighter";
						}else if(nearestbg.is('[class*="-10bg"]') || nearestbg.is('[class*="-00bg"]')){
							dbgc = " bgimg-lightest";
						}

					}

					var	bgdiv = '<div style="background-image:url('+msrc+')" class="bgimg bgimgw2 '+dtype+dsize+dover+dbgc+'"></div>';

					el.addClass('bgimgw1').prepend(bgdiv);		
						
				});

			}else{
				el.addClass('bgimg').css('backgroundImage','url('+src+')');
			}
		}

		el.removeAttr("data-bgimg2x").removeAttr("data-bgimg");

	};
});
 


/*! GENERIC - LAZY DATASRC */
 /**
 * Lazy loader for img[data-src] tags
 * 
 * @hook IMG tag lazy loader
 * @requires jQuery
 * @requires waypoint
 * @example
 * <img data-src="/foo/bar.jpg" />
 */


jQuery(document).ready(function($) {

	'use strict';

	window.genericLazyDatasrcObserver = null;
	window.genericLazyDatasrcCmpObserver = null;

	return 'OCOM' in window ?
        OCOM.register(lazydatasrc, true)
        : $(document).one('OCOMReady', function() {
            OCOM.register(lazydatasrc, true);
        });
        
	function lazydatasrc() {
		var components,lzyimg,slickCrsls;

		// NATIVE JS LAZYLOAD
		if ("IntersectionObserver" in window) {

			lzyimg = document.querySelectorAll("img[data-src]");
			//slickCrsls = document.querySelectorAll(".o-crsl,[class*='carousel']:not([class*='carousel-'])");
			components = document.querySelectorAll(".cscroll,.o-crsl,[class*='carousel']:not([class*='carousel-'])");
			if (!window.genericLazyDatasrcObserver) {
				window.genericLazyDatasrcObserver = new IntersectionObserver(function(entries, observer) {
					entries.forEach(function(entry) {
						if (entry.isIntersecting) {
							var image = entry.target;

							// skip images inside of slick or cg27
							if (image.closest(".o-crsl") || image.closest("[class*='carousel']") || image.closest("[class*='cscroll']")) {return;}

							image.onload = function () {
								image.removeAttribute('data-src');
								$(image).addClass('srcloaded');
								// determine img orientation
								if (image.naturalWidth > image.naturalHeight) {
									$(image).addClass('imgW');
								} else if (image.naturalWidth < image.naturalHeight) {
									$(image).addClass('imgH');
								} else if (image.naturalWidth == image.naturalHeight) {
									$(image).addClass('imgS');
								}
								// class added to remove initial styling transitions if applicable
								$(image).addClass('initload');
								window.setTimeout(function () {$(image).removeClass('initload')},200);
								$(document).trigger("lazydatasrc.srcloaded");
							}
							image.src = image.dataset.src;
							window.genericLazyDatasrcObserver.unobserve(image);
						}
					});
				});
			}
			// when slick carousel intersects, load all images within
			//var crslObserver = new IntersectionObserver(function(entries, observer) {
			if (!window.genericLazyDatasrcCmpObserver) {
				window.genericLazyDatasrcCmpObserver = new IntersectionObserver(function(entries, observer) {
					entries.forEach(function(entry) {
						if (entry.isIntersecting) {
							var component = entry.target,
								images = component.querySelectorAll("img[data-src]"),
								count = images.length;
							images.forEach(function(image, i, images) {
								image.onload = function () {
									image.removeAttribute('data-src');
									$(image).addClass('srcloaded');
									// determine img orientation
									if (image.naturalWidth > image.naturalHeight) {
										$(image).addClass('imgW');
									} else if (image.naturalWidth < image.naturalHeight) {
										$(image).addClass('imgH');
									} else if (image.naturalWidth == image.naturalHeight) {
										$(image).addClass('imgS');
									}
									// class added to remove initial styling transitions if applicable
									$(image).addClass('initload');
									window.setTimeout(function () {$(image).removeClass('initload')},200);
									$(document).trigger("lazydatasrc.srcloaded");
									// trigger "completed" event on last item
									// note: jquery can't "see" vanilla JS custom events and vice versa 
									if (i >= count - 1) {
										var vanillaJsEvent = new CustomEvent("lazydatasrc.srcloaded");
									    document.dispatchEvent(vanillaJsEvent);
									}	
								}
								image.src = image.dataset.src;
								if (component.classList.contains("slick-slider")) {
									// if last item in collection
									if (Object.is(images.length - 1, i)) {
										// signal slick to refresh positioning
										refreshSlick(component);
									}
								}
								
							});

							window.genericLazyDatasrcCmpObserver.unobserve(component);
						}
					});
				});
			}
			lzyimg.forEach(function(image) {
				window.genericLazyDatasrcObserver.observe(image);
			});
			components.forEach(function(cmp) {
				window.genericLazyDatasrcCmpObserver.observe(cmp);
			});
			$(window).off("datasrc.run").on("datasrc.run", function () {
				lzyimg = document.querySelectorAll("img[data-src]");
				lzyimg.forEach(function(image) {
					window.genericLazyDatasrcObserver.observe(image);
				});
				components = document.querySelectorAll(".cscroll,.o-crsl,[class*='carousel']:not([class*='carousel-'])");
				components.forEach(function(cmp) {
					if (!$(cmp).hasClass("datasrc-observed")) {
						$(cmp).addClass("datasrc-observed");
						window.genericLazyDatasrcCmpObserver.observe(cmp);
					}
				});
			});
		// WAYPOINT FALLBACK
		} else {
			function invokeDatasrc () {
				$('img[data-src]').waypoint(function(direction) {
					$(this.element).each(function() {
						$(this)[0].src = $(this).attr('data-src');
						$(this)[0].removeAttribute('data-src');
						$(this).addClass('srcloaded');
						$(document).trigger("lazydatasrc.srcloaded");
					});
					this.destroy();
				}, {
					offset: '110%'
				});
			}
			
			$(".cscroll,.rc51,.o-crsl,[class*='carousel']").not(".lazydatasrc-observed").waypoint(function(direction) {
					var $images = $(this).find("img[data-src]");
					$(this).addClass("lazydatasrc-observed");
					$images.each(function(i,img) {
						$(img)[0].src = $(img).attr('data-src');
						$(img)[0].removeAttribute('data-src');
						$(img).addClass('srcloaded');
						$(document).trigger("lazydatasrc.srcloaded");
						if ($(this).hasClass("slick-slider")) {
							// if last item in collection
							if ($images.length - 1 == i) {
								// signal slick to refresh positioning
								refreshSlick(this);
							}
						}
					});
					this.destroy();
				}, {
					offset: '110%'
				}
			);
			invokeDatasrc();
			$(window).off("datasrc.run").on("datasrc.run", function () {
				invokeDatasrc();
			});
		}
		function refreshSlick(slickCrsl) {
			//console.log("check")
			// wait until slick is initialized and all images are loaded
			if (slickCrsl.classList.contains("slick-initialized") && !slickCrsl.querySelectorAll("img:not(.srcloaded)")[0]) {
				$(slickCrsl).slick('setPosition');
				//console.log("refreshed")
			} else {
				window.setTimeout(function () {
					refreshSlick(slickCrsl);
				},20);
			}
		}
	}
});

/*! GENERIC - LAZY RW PATTERN */
jQuery(document).ready(function($) {
 /**
 * Lazy loader for img[data-src] tags
 * 
 * @hook IMG tag lazy loader
 * @requires jQuery
 * @requires waypoint
 * @example
 * <img data-src="/foo/bar.jpg" />
 */
 	'use strict';
	window.genericLazyRwPatternObserver = null;
	var lzypat;		

	return 'OCOM' in window ?
        OCOM.register(lazyRWPattern, true)
        : $(document).one('OCOMReady', function() {
            OCOM.register(lazyRWPattern, true);
        });

    function lazyRWPattern() {
		// NATIVE JS LAZYLOAD
		if ("IntersectionObserver" in window) {

			lzypat = document.querySelectorAll('[class*="rw-pattern"]');
			if (!window.genericLazyRwPatternObserver) {
				window.genericLazyRwPatternObserver = new IntersectionObserver(function(entries, observer) {
					entries.forEach(function(entry) {
						if (entry.isIntersecting) {
							$(entry.target).addClass('rw-pattern-load');
							window.genericLazyRwPatternObserver.unobserve(entry.target);
						}
					});
				});
			}
			lzypat.forEach(function(pattern) {
				if (!pattern.classList.contains('lazyrwpattern-observed')) {
					pattern.classList.add("lazyrwpattern-observed");
					window.genericLazyRwPatternObserver.observe(pattern);
				}
			});

			$(window).off("lazyrwpattern.run").on("lazyrwpattern.run", function () {
				lzypat = document.querySelectorAll('[class*="rw-pattern"]');
				lzypat.forEach(function(pattern) {
					if (!pattern.classList.contains('lazyrwpattern-observed')) {
						pattern.classList.add("lazyrwpattern-observed");
						window.genericLazyRwPatternObserver.observe(pattern);
					}
				});
			});
		
		// WAYPOINT FALLBACK
		} else {
			function invokeLazyrwpattern() {
				$('[class*="rw-pattern"]').not(".lazyrwpattern-observed").each( function (i, el) {
					$(el).addClass("lazyrwpattern-observed");
					$(el).waypoint(function(direction) {
						$(this.element).each(function() {
							$(this).addClass('rw-pattern-load');
						});
						this.destroy();
					}, {
						offset: '110%'
					});
				});
			}
			invokeLazyrwpattern();
			$(window).off("lazyrwpattern.run").on("lazyrwpattern.run", function () {
				invokeLazyrwpattern();
			});
		}
	}
});

/*! GENERIC - ESCKEY */
/** 
 *  A jQuery event extension to bind a callback handler when the escape key is pressed
 * 	@event esckeydown
 * 	@example $(document).on('esckeydown', function(e) {  ...your callback... });
 * 	@returns {function} callback - The callback handler
 *  @requies jQuery
 */

jQuery.event.special.esckeydown = {
	delegateType: 'keydown',
	bindType: 'keydown',
	handle: function(event) {
		var handleObj = event.handleObj,
			keycode = event.keyCode,
			ret = null;

		if(keycode === 27) {
			event.type = handleObj.origType;
			ret = handleObj.handler.apply( this, arguments );
			event.type = handleObj.type;
		}
		return ret;
	}
};

/*! GENERIC - DETECTION */
/**
 * Returns true if an object is loaded by checking if both the object and one of its properties exist
 * @function objLoaded
 * @param {string} objNameStr - the object name
 * @param {string} propNameStr - the name of a property in objNameStr
 */
function objLoaded (objNameStr, propNameStr) {
	if (propNameStr) {
		return typeof window[objNameStr] === "object" && window[objNameStr].hasOwnProperty(propNameStr);
	} else {
		return typeof window[objNameStr] === "object";
	}
}
/**
 * Returns true if a jQuery element has or contains a property
 * @function propertyExists
 * @param {object} element - the jQuery element
 * @param {string} propNameStr - the name of the property
 * @requires jQuery
 */
function propertyExists (element, propNameStr) {
	return 	$(element).is('[' + propNameStr + ']') ||
					$(element).has('[' + propNameStr + ']').length;
}


/*! ORACLE - PERFORMANCE */
/* eslint no-unused-vars:0 */
var OraclePerformance = (function(window) {
	'use strict';

	var
			// set a caching variable to store measurement data
			measurements = {},
			// Enable performance page timings measurements if supported
			pagetimings = 'performance' in window &&
			'timing' in window.performance,

			// Enable performance user timings measurements if supported
			usertimings = 'performance' in window &&
			'mark' in window.performance &&
			'measure' in window.performance,

			// Set a flag for whether metrics data has been sent
			// 	to ensure only one per visit
			navTracked = false;

	/**
	 * Converts a long decimal to properly rounded number with up to 2 dec places
	 */
	var ms2sec = function(num) {
		return +(Math.round(num / 1000 + 'e+2') + 'e-2');
	};

	/**
	 * Converts an array of timings into a key:value object
	 * 	based on a passed in function to operate on the timing object
	 */
	var timingsArrToObj = function(arr, fn) {

		if (!Array.isArray(arr) || !arr.length) { return false; }

		return arr.reduce(function(obj, prop) {
			// if filename of resource, strip protocol + folder path, query string
			var isResource = /https?:\/\//.test(prop.name),
					domain = isResource ? /https?:\/\/(.*?)\//.exec(prop.name)[1] : null,
					name = isResource ?
						prop.name.slice(prop.name.lastIndexOf('/') + 1).split('?')[0] :
						prop.name;

			if (isResource) {
				obj[domain] = obj[domain] || {};
				obj[domain][name] = fn ? fn(prop) : prop.startTime;

				// track duration of WS assets in analytics
				if (domain === window.location.host) {
					obj.WS = obj.WS || {};
					obj.WS = wsAssetsMeasurements(obj.WS, name, fn(prop));
				}
			} else {
				obj[name] = fn ? fn(prop) : prop.startTime;
			}
			return obj;
		}, {});
	};

	/**
	 * Categorize matching js/css resource assets into a WS object for
	 * 	trakcing durations in analytics
	 */
	var wsAssetsMeasurements = function(ws, key, obj) {

		var cb;

		if (/\.css$/.test(key)) {

			if (/-base(-styles)?\.css$/.test(key)) {
				ws['base-css'] = obj.duration;
			} else {
				ws['lib-css'] = obj.duration;
			}
		}

		if (/\.js$/.test(key)) {

			if (/jquery/.test(key)) {
				ws['jquery'] = obj.duration;
			} else if (/(-handlebars|-chat)\.js$/.test(key)) {
				/* noop */
			} else if (/-base\.js$/.test(key)) {
				ws['base-js'] = obj.duration;
			} else {
				ws['lib-js'] = obj.duration;
				// set a prop for which codebase we are in - if OCOM is available, use it, otherwise get it from the filename
				ws['codebase'] =
					('OCOM' in window) &&
					// IE does not support document.currentScript
					OCOM.codebase.length &&
					OCOM.codebase ||
					(cb = /(.*?(-lib)?)\.js$/.exec(key.slice(key.lastIndexOf('/') + 1))) && cb[1];
			}
		}

		return ws;
	};

	/**
	 * Converts a timing object into a list prop string to set
	 * 	Adobe Analytics s.prop in the form
	 * 		attrvalue(in secs)~attrvalue~attrvalue
	 * 	Ordered by property keys arrays - which will be mapped
	 * 		within analytics
	 *  Must return values for all attributes, even if null
	 *
	 * Current implementation (July 2018) is:
	 * 	prop44 = page and paint timing data
	 * 	prop46 = WS resources (codebase, css, js timings)
	 */
	var timingsObjToAnalyticsProp = function(obj) {

		var
				KVDELIM = '-',
				KVSAFE = '_',
				ATTRDELIM = '~',
				NULLVAL = 'na',
				ranges = [
					{ name: 'na', range: [Number.NEGATIVE_INFINITY, -0.01] },
					{ name: 't0', range: [0, 0.49] },
					{ name: 't1', range: [0.5, 0.99] },
					{ name: 't2', range: [1.0, 1.99] },
					{ name: 't3', range: [2.0, 4.99] },
					{ name: 't4', range: [5.0, 9.99] },
					{ name: 't5', range: [10.0, Number.POSITIVE_INFINITY] }
				],
				getRange = function(num) {
					return ranges.filter(function(obj) {
						return num >= obj.range[0] && num <= obj.range[1];
					}).shift().name;
				},
				makeParser = function(prop) {
					return function(key) {
						var rpl = new RegExp(KVDELIM, 'g');
						// if codebase value, don't pass to timing function
						if (key === 'codebase') { return prop[key] && prop[key].replace(rpl, KVSAFE); }
						// if null value, set to na classification
						if (!prop[key]) { return NULLVAL; }
						return getRange(ms2sec(prop[key]));
					};
				},
				// if browser does not support a set of timings properties we need to pass
				// 	null values for each attribute
				setNullVals = function(keys) {
					return keys
						.map(function(attr) { return NULLVAL; })
						.join(ATTRDELIM);
				},
				op = {
					page: function(prop) {
						var keys = [
							'domInteractive',
							'domContentLoaded',
							'domComplete'
						];
						if (!prop) { return setNullVals(keys); }
						return keys.map(makeParser(prop)).join(ATTRDELIM);
					},
					paint: function(prop) {
						var keys = [
							'first-paint',
							'first-contentful-paint',
							'first-styled-body-paint',
							'first-hero-image-paint'
						];
						if (!prop) { return setNullVals(keys); }
						return keys.map(makeParser(prop)).join(ATTRDELIM);
					},
					resource: function(prop) {
						var keys = [
							'codebase',
							'base-css',
							'lib-css',
							'jquery',
							'base-js',
							'lib-js'
						];
						if (!prop) { return setNullVals(keys); }
						return keys.map(makeParser(prop)).join(ATTRDELIM);
					},
					component: ''
				};

		// allows for passing a function in that will return the obj
		obj = 'function' === typeof obj ? obj() : obj;

		return !navTracked &&
			(navTracked = true) && {
			prop44: [op.page(obj.page), op.paint(obj.paint)].join(ATTRDELIM),
			prop46: op.resource(obj.resource.WS)
		};
	};

	/**
	 * Function to create a performance mark, (eg. a starting or ending point)
	 * that will be measured upon a call to <code>OraclePerformance.measure('component')</code>
	 * @class OraclePerformance.mark
	 * @example <caption>Components may mark entries within their own code which will flow through to measurement entries created here, by using the following code and naming conventions.  Both a start mark and end mark are required to log a measurement.  <br><u>Be sure to check that <code>OraclePerformance</code> is available!</u></caption>
	 * if('OraclePerformance' in window) {
	 *   OraclePerformance.mark('ex01-clickhandlerStart'); // [componentID]-[trackingName](Start|End)
	 * }
	 * doClickHandlerStuff();
	 * if('OraclePerformance' in window) {
	 *   OraclePerformance.mark('ex01-clickhandlerEnd'); // [componentID]-[trackingName](Start|End)
	 * }
	 * // performance measurement (startTime, duration) logged in OraclePerformance.measure('component').ex01.clickhandler
	 */
	var mark = function(name) {
		return usertimings && window.performance.mark(name);
	};

	/**
	 * Entry point for performance measurements, including page load, resource,
	 * 	paint, and user (component) timings
	 * @class OraclePerformance.measure
	 * @docs OraclePerformance.md
	 * @param {string (optional)} metric - One of 'page', 'resource', 'paint', 'component'
	 * @return {object} An object with recorded data points of timing metric
	 */
	var measure = function(metric) {

		switch (metric) {

			case 'page':
				return { page: measurements.page || (pagetimings && pageMeasurements()) };

			case 'resource':
				return { resource: measurements.resource || (window.performance && resourceMeasurements()) };

			case 'paint':
				return { paint: measurements.paint || (window.performance && paintMeasurements()) };

			case 'component':
				return { component: measurements.component || (usertimings && componentMeasurements()) };

			default:
				return (Object.keys(measurements).length && measurements) ||
					(measurements = {
						page: pagetimings ? pageMeasurements() : null,
						resource: window.performance ? resourceMeasurements() : null,
						paint: window.performance ? paintMeasurements() : null,
						component: usertimings ? componentMeasurements() : null
					});
		}
	};

	var pageMeasurements = function() {
		var t = window.performance.timing;

		return {
			domInteractive: t.domInteractive - t.domLoading,
			domContentLoaded: t.domContentLoadedEventStart - t.domLoading,
			domComplete: t.domComplete - t.domLoading
		};
	};

	var resourceMeasurements = function() {

		return timingsArrToObj(
			window.performance.getEntriesByType('resource'),
			function(entry) {
				return {
					startTime: entry.startTime,
					size: entry.decodedBodySize,
					totalSize: entry.transferSize,
					duration: entry.duration
				};
			});
	};

	var paintMeasurements = function() {
		var paints = window.performance.getEntriesByType('paint'),
				body = bodyStyledMeasurement(),
				hero = heroImgMeasurement();

		if (body) {
			paints.push(body);
		}
		if (hero) {
			paints.push(hero);
		}
		return timingsArrToObj(paints);
	};

	var bodyStyledMeasurement = function() {

		// in cases where we hide the body with opacity:0
		//  first-paint metrics are skewed, since nothing is actually visible
		//  so provide a number for when *-base.css has loaded
		var baseCss = document.querySelector('head link[href$="-base.css"]'),
				baseCssResource = window.performance.getEntriesByType('resource')
					.filter(function(resource) {
						return baseCss && resource.name === baseCss.href;
					});

		return baseCss && baseCssResource.length && ({
			name: 'first-styled-body-paint',
			startTime: baseCssResource[0].startTime + baseCssResource[0].duration
		});
	};

	var heroImgMeasurement = function() {

		var heroEl = document.querySelector('[class^="ch"], [class^="hp"]'),
				heroImg = heroEl && heroEl.querySelector('img'),
				heroBgEl = heroEl && heroEl.querySelector('[style*="background-image"]') ||
										heroEl && heroEl.style.backgroundImage.length && heroEl,
				bgRegExp = heroBgEl && /url\("?(.*?)"?\)/.exec(window.getComputedStyle(heroBgEl, null).backgroundImage),
				heroBgImg = bgRegExp && bgRegExp[1],
				heroImgResource = window.performance.getEntriesByType('resource')
					.filter(function(resource) {
						var img = heroImg ? heroImg.src : heroBgImg;
						return resource.name === img;
					});

		return (heroImg || heroBgImg) && heroImgResource.length && ({
			name: 'first-hero-image-paint',
			startTime: heroImgResource[0].startTime + heroImgResource[0].duration
		});
	};

	var componentMeasurements = function() {

		var markEntries = window.performance.getEntriesByType('mark'),
				componentEntries = {};

		// get array of all start marks (one per component),
		// find corresponding end mark and create a measurement entry
		// between the two (the execution time of the component)
		markEntries
			.filter(function(entry) {
				return /\Start$/.test(entry.name);
			}).map(function(entry) {

				var name = /([\w-]+)(?:Start|End)/.exec(entry.name)[1],

						// get corresponding end mark
						endMark = markEntries.filter(function(entry) {
							return new RegExp(name + 'End$').test(entry.name);
						})[0];
				
						// used to assume .name and would error out when page loaded with hash
						if (endMark !== undefined && endMark.name !== undefined) {
							window.performance.measure(name, entry.name, endMark.name);		
						}

			});

		window.performance.getEntriesByType('measure').map(function(entry) {

			var keys = entry.name.split('-');

			componentEntries[keys[0]] = componentEntries[keys[0]] || {};
			componentEntries[keys[0]][keys[1]] = {
				startTime: entry.startTime,
				duration: entry.duration
			};

		});

		return componentEntries;
	};

	return {
		mark: mark,
		measure: measure,
		setAnalytics: timingsObjToAnalyticsProp.bind(null, measure)
	};

})(window);


/*! GENERIC - LOAD MENU DATA */
/**
 * This file contains a data retrieval function (fetchMenuContent) and other utility functions used by components that need 
 * to fetch shared menu data from an html file (like U02 header and u10 footer).
 * 
 * It retrieves and returns the the html string of of a generated component (like /ocom/template-sample/ocom-global-menu.html) 
 * 
 * @function fetchMenuContent
 * @param {jquery} endpoint - path to file that contains the html menu 
 * @requires jQuery
 * 
 */


var oracleDataMenu = oracleDataMenu || {contentCache:[]};


oracleDataMenu.fetchMenuContent = function (endpoint) {


	if (!endpoint.length && endpoint) {
		return $.Deferred().reject();
	}

	//Strip out everything after index.html within the endpoint url. 
	//If the endpoint url doesn't end with index.html (ends with a slash), append index.html to it to prevent double calls.

	//console.log('original endpoint',endpoint);
	var urlSplit = endpoint.substring(0, endpoint.indexOf('.html'));
	//console.log ('urlSplit',urlSplit);
	if (urlSplit != '') {
		endpoint = urlSplit+'.html';
	}

	else {
		endpoint = endpoint +'index.html';
	}

	//console.log('processed endpoint',endpoint);	

	// if passed a jQuery object of menu, return as html string
	// if url matches content already fetched, return the cached html string
	// otherwise we do the ajax call and pass to the ajax handler
	return (endpoint instanceof jQuery &&
			$.Deferred().resolve(endpoint[0].outerHTML)) ||
		// if this endpoint has already been fetched
		// 	return the cached promise
		oracleDataMenu.contentCache[endpoint.split('/')[0]] ||

		// otherwise assign this ajax request to the cache
		// and make the call to the endpoint
		(oracleDataMenu.contentCache[endpoint.split('/')[0]] =
			jQuery.ajax({
				url: endpoint,
				type: 'GET',
				contentType: 'text/plain; charset=UTF-8',
				crossDomain: true,
				// support for custom/modified headers config
				/* globals beforeMenuContentFetch */
				beforeSend: 'undefined' !== typeof beforeMenuContentFetch &&
					beforeMenuContentFetch
			}));
};


/*! SHARED UTILITY FUNCTIONS */

oracleDataMenu.classSelector = function (arr, mod) {
	return (Array.isArray(arr) &&
			arr.map(function (cls) {
				return (Array.isArray(mod) &&
						mod.map(function (m) {
							return (Array.isArray(cls) &&
									'.' + cls.join(m + ' .') + m) ||
								'.' + cls + m;
						}).join()) ||

					(Array.isArray(cls) &&
						'.' + cls.join(' .') + (mod || '')) ||

					'.' + cls + (mod || '');
			}).join()) ||

		(Array.isArray(mod) &&
			mod.map(function (m) {
				return '.' + arr + m;
			}).join()) ||

		'.' + arr + (mod || '');
};


oracleDataMenu.classList = function (arr) {
	return (Array.isArray(arr) && arr.filter(function (cls) {
		// remove any false refs
		return !!cls;
	}).join(' ')) || arr;
};

oracleDataMenu.createElement = function (tag, clsArr, attrObj) {
	var el = document.createElement(tag);
	clsArr = clsArr || [];
	clsArr = Array.isArray(clsArr) ? clsArr : [clsArr];
	attrObj = attrObj || {};
	Object.keys(attrObj).map(function (key) {
		el[key] = attrObj[key];
	});
	return $(el).addClass(oracleDataMenu.classList(clsArr));
};


/**
 *  Adds tabindex attribute and removes aria-hidden from descendant <a> tags
 * 	of the provided open submenu root that have a computed visibility of visible.
 * 	This passed in parameter should be a boolean check whether to do this,
 * 	since it is an expensive style calculation...
 */
oracleDataMenu.addAriaAttributes = function(needsAria) {
	return needsAria && this.each(function() {
		var $target = $(this);
		$target.find('a').get().forEach(function(a) {
			var link = a;
			window.requestAnimationFrame(
				function() {
					if(window.getComputedStyle(link, null).visibility === 'visible') {
						link.removeAttribute('aria-hidden');
						link.setAttribute('tabindex', 0);
					}
				});
		});
	}) || this;
};

/*! GENERIC - EQUALHEIGHT */
/**
 *  A jQuery plugin to take a collection of elements and make each element's height
 *		equal to the tallest element within the same row
 *		NOTE: If any elements in the collection are hidden or display:none, you will
 *					need to show these temporarily in order for their height to be considered
 * 	@function equalHeight
 *  @requires jQuery
 * 	@example $('div.differentheights').equalHeight();
 *	@param {boolean} force - whether to force equal height on all elements,
 *	                       regardless of offset position
 * 	@returns {jQuery} collection - The jQuery collection with modified/equalized heights
 */

(function($) {
	'use strict';

	jQuery.fn.equalHeight = function(force) {

		var currTallest = 0,
			currRow = -1,
			rows = [],
			count = 0,
			total = this.length,
			offset,
			prevoffset,
			el,
			height;

		force = force || false;

		// if only one or no elements in the collection, we can abort
		if(total <= 1) return this;

		return this.each(function() {

			el = $(this)[0];
			el.style.height = 'auto';
			height = el.offsetHeight;

			// if force, only set it once so that all elements are height matched
			// use jQuery offset to find doc relative position
			// prevent slight (< 10px) offset differences from aborting
			if(count === 0 || !force) {
				offset = parseInt($(el).offset().top / 10, 10);
			}

			if(offset !== prevoffset) {
				currRow++;
				rows[currRow] = {
					collection: []
				};
				prevoffset = offset;
				// initialize with first element's height
				currTallest = height;
			} else {
				currTallest = height > currTallest ? height : currTallest;
			}
			rows[currRow].collection.push(el);
			rows[currRow].heightMatch = currTallest;

			count++;

			// only run this once after all calcs
			if(count === total) {
				rows.forEach(function(row) {
					if(row.collection.length < 2) return false;
					row.collection.forEach(function(el) {
						el.style.height = row.heightMatch + 'px';
					});
				});
			}
		});
	};
}(jQuery));


/*! GENERIC - GETURLVARS */
/**
 * Extracts the query string parameters from the current URL
 * @function getUrlVars
 */
function getUrlVars(){
	var vars = [], hash;
	var url = window.location.href;
	if (url.indexOf("#") != -1) url = url.split("#")[0];
	var hashes = url.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++){
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}


/*! GENERIC - COOKIEDATA */

function getCookieData(label){
	var labelLen = label.length;
	var cLen = document.cookie.length;
	var i = 0;
	var cEnd;
	while(i < cLen){
		var j=i+labelLen;
		if (document.cookie.substring(i,j) == label){
			cEnd=document.cookie.indexOf(";",j);
			if (cEnd==-1){
				cEnd=document.cookie.length;
			}
			j++;
	 			   	var u = decodeURIComponent(document.cookie.substring(j, cEnd).replace(/\+/g,"%20"));
			    	return cleanCookieContent(u);
		}
		i++;
	}
	return "";
}

function cleanCookieContent(sContent) {
    var sMe = (typeof (sContent) == "undefined") ? "NoData" : sContent;
    var badChar = "<>";
    if (sMe != "NoData") {
        var al = sMe.length;
        for (i = 0; i < al; i++) {
            if (sMe.substr(i, 1) != "." && sMe.substr(i, 1) != "?" && badChar.search(sMe.substr(i, 1)) > -1) {
                sMe = "Invalid";
                i = al + 1;
            }
        }
    }
    return sMe;
}


/*! GENERIC - PDITLOCALEMAP */

/* eslint no-unused-vars:0 */
var PDITLocaleMap = (function($, window) {
	'use strict';


	var docloco = document.location.href;
	var endpoint = "https://www.oracle.com/pdit-locale-map.json";

	if (docloco.indexOf('/www-sites-stage') > -1 || docloco.indexOf('/www-stage') > -1){
		endpoint = "https://www-stage.oracle.com/pdit-locale-map.json";
	}else if (docloco.indexOf('localhost') > -1 || docloco.indexOf('/webstandards') > -1){
		endpoint = "/pdit-locale-map.json";
	}

	var
			// set expiration of 2 weeks
			expires = +new Date(+new Date() + 1000 * 60 * 60 * 24 *14),
			promise = $.Deferred(),
			init = false,
			storageKey = 'pditlocalemap',
			localeData = getLocalStorage(storageKey);

	function fetchLocaleMapJSON() {

		// if ajax call already initialized, return a reference
		if(init) { return promise; }


		promise =
							$.getJSON(endpoint)
								.then(function(data) {
									return setLocalStorage(storageKey, data);
								})
								.fail(function(err) {
									/* eslint no-console:0 */
									switch(err.status) {
										case 200 :
											console.warn('PDITLocaleMap file ' +
												endpoint + ' found, but with JSON errors');
											break;
										default :
											console.warn('PDITLocaleMap file ' +
												endpoint + ' error: ' + err.statusText);
									}
								});

		// set this immediately, to prevent multiple ajax calls
		init = true;

		return promise;
	}

	function generateLookup(data) {
		localeData = localeData || {};
		data.forEach(function(loc) {
			localeData[loc.siteid] = loc;
		});
		return localeData;
	}

	/* globals JSON */
	function getLocalStorage(key) {

		var storage = JSON.parse(localStorage.getItem(key)),
				isValid = storage &&
									!!storage.expires &&
									storage.expires > +new Date();

		return isValid ? storage : false;
	}

	function setLocalStorage(key, data) {
		localeData = generateLookup(data);
		localeData.expires = expires;
		localStorage.setItem(key, JSON.stringify(localeData));
		return localeData;
	}

	function removeLocalStorage(key) {
		localeData = null;
		localStorage.setItem(key, false);
	}

	function findEntryByKey(obj) {
		obj = obj || {};
		return !localeData && [] ||
			Object.keys(localeData).filter(function(locale) {
				var match = true;
				Object.keys(obj).forEach(function(key) {
					if(localeData[locale][key] !== obj[key]) { match = false; }
				});
				// don't include expires prop
				return locale === 'expires' ? false : match;
			}).map(function(lkey) {
				return localeData[lkey];
			});
	}

	function groupByKey(key) {
		return !localeData && {} ||
			Object.keys(localeData).reduce(function(obj, locale) {
				if(locale !== 'expires') {
					obj[localeData[locale][key]] = obj[localeData[locale][key]] || [];
					obj[localeData[locale][key]].push(localeData[locale]);
				}
				return obj;
			}, {});
	}


	return {
		/**
		 * Initializes PDITLocaleMap, so that the data can be set to a local
		 * 	lookup hash object to get English country name, localized country name,
		 * 	country code, region name from a given siteid key.
		 * 	Initialization fetches external wordmap data (once)
		 * 	via ajax if there is no localStorage locale data, and stores
		 * 	returned locale data in localStorage for improved	performance.
		 * @class PDITLocaleMap.init
		 * @returns {Promise} a chainable $.Deferred object
		 * @requires jQuery
		 * @example
		 *  <caption><b>NOTE:</b> Because the locale data may require an ajax call, you must use a Promise callback to know when the data is available.  If the locale data is found in localStorage the promise will resolve immediately.</caption>
		 *  var myLocaleData;
		 *
		 *  PDITLocaleMap.init().then(function(data) {
		 *  	myLocaleData = data;
		 *  	...other callbacks that will use myLocaleData...
		 *  })
		 */
		init: function() {
			return (localeData && $.Deferred().resolve(localeData)) || fetchLocaleMapJSON();
		},
		/**
		 * Convenience function for searching pdit-locale data by a key other than siteid
		 * (to get related data by siteid, just initialize to a local variable and
		 * 	reference by <code>myLocaleData[siteid]</code>).
		 * @class PDITLocaleMap.find
		 * @param {object} obj - an object with key: value pairs to match locale data entries against
		 * @returns {array} an array of matching entries, or empty array if no matches are found
		 * @requires jQuery
		 * @example
		 *  <caption><b>NOTE:</b> Because the locale data may require an ajax call, you must use a Promise callback to know when the data is available.  If the locale data is found in localStorage the promise will resolve immediately.</caption>
		 *  var myLocaleArr;
		 *
		 *  PDITLocaleMap.init().then(function(data) {
		 *  	myLocaleArr = PDITLocaleMap.find({ region: 'europe' });
		 *  	...other callbacks that will use myLocaleArr...
		 *  })
		 */
		find: findEntryByKey,
		/**
		 * Convenience function for creating a lookup object of locales grouped by a key
		 * 	passed as a parameter.  Typical usage would be to group by 'region' or 'regionname'.
		 * @class PDITLocaleMap.group
		 * @param {string} key - the property by which to group the locales
		 * @returns {object} a lookup object with the unique values of the provided key, each containing an array of locales
		 * @requires jQuery
		 * @example
		 *  <caption><b>NOTE:</b> Because the locale data may require an ajax call, you must use a Promise callback to know when the data is available.  If the locale data is found in localStorage the promise will resolve immediately.</caption>
		 *  var myLocaleGroups;
		 *
		 *  PDITLocaleMap.init().then(function(data) {
		 *  	myLocaleGroups = PDITLocaleMap.group('region');
		 *  	...other callbacks that will use myLocaleGroups...
		 *  })
		 */
		group: groupByKey

	};

})(jQuery, window);


/*! GENERIC - XTRA HTML CLASSES */

if (location.protocol == 'https:'){
	document.getElementsByTagName('html')[0].classList.add('ishttps');
}else{
	document.getElementsByTagName('html')[0].classList.add('ishttp');
}

if (location.href.indexOf('www-sites.oracle') > -1){
	document.getElementsByTagName('html')[0].classList.add('iswsites');
}

////////////////////////////////////////////////////////////
// ADD RETINA CLASS
////////////////////////////////////////////////////////////

if(window.devicePixelRatio >= 1.2 || document.location.href.indexOf('?retina') > -1){
	jQuery('html').addClass('retina');
}

/**
 * Helper function to check whether a script is on localhost or a staging site
 * @function isStageSite
 * @return {Boolean} true if location contains localhost or www-sites.oracle
 */
function isStageSite() {
	'use strict';
	return (document.documentElement.classList.contains('iswsites') || /localhost/.test(window.location.host));
}

// Add ready class to body (after added delay) to turn on tranistions for
// some object b/c of chrome bug that causing animations to show unstyled to
// styled b/c of transitions.
jQuery(document).ready(function($) {
	// make a timeout that looks for transparent/filter of components
	var delay = 1200;
	setTimeout(function() {
		$('body').addClass('ready');
	}, delay);
});


/*! GENERIC - MULI LINE CHARACTER CLAMPING */
/**
 * Helper function to shorten your text to a specified size, and then add an ellipsis at the end (line clamping)

 * @function lineClamp
 * @param {int} size - number of characters after which the text will be cut off
 * @param {string} ommision - string that represents the ellipsis (or any other character)
 * @param {boolean} ignore - by default, the plugin removes the set of 32 ASCII special characters at the end of words, ie. `! " # $` and so on. Setting to true disables this behavior.
 */

(function($) {
	'use strict';

	$.fn.charClamp = function(options) {

		var settings = $.extend({
				size: 75,
				omission: '...',
				ignore: true
			}, options);

		return this.each(function() {
			var textDefault,
				textTruncated,
				elements = $(this),
				regex    = /[!-\/:-@\[-`{-~]$/,
				init     = function() {
					elements.each(function() {
						textDefault = $(this).html();

						if (textDefault.length > settings.size) {
							textTruncated = $.trim(textDefault)
											.substring(0, settings.size)
											.split(' ')
											.slice(0, -1)
											.join(' ');

							if (settings.ignore) {
								textTruncated = textTruncated.replace(regex, '');
							}

							$(this).html(textTruncated + settings.omission);
						}
					});
				};
			init();
		});
	};
})(jQuery);


/*! GENERIC - HORIZONTAL SCROLL */
/**
 * Helper function to simulate horizontal scroll when using mouse wheel or Mac sideways scroll

 * @function hScroll
 * @param {int} amount - Optional scroll amount (translates to scroll speed)
 */


(function($) {
	'use strict';
	$.fn.hScroll = function (amount) {
        amount = amount || 60;
            $(this).bind("DOMMouseScroll mousewheel", function (event) { 
                    var oEvent = event.originalEvent,
                        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                        position = $(this).scrollLeft();
                    if (Math.abs(direction) > amount/2) {  //don't scroll on "minor" scroll
                        position += direction > 0 ? -amount : amount;
                        $(this).scrollLeft(position);
                    }
                    event.preventDefault();
            });
    };
})(jQuery);

/*! GENERIC - WSTOOLS */
window.addEventListener("load", function(){
	(function($) {

// 		COMPONENTS THAT HAVE BEEN FIXED BUT REQUIRE MARKUP CHANGES FROM PUBLISHING
// 		components listed here need full variation id's, each variation needs to be set as fixed
// 		var a11yupdated = 'cc02v0,cc02v1,cc02v2,cc02v3,cc02v4,cc02v5,cc02v6,rc35v0,rc35v1,rc103v0,rc34v0,rc34v1,rc34v2,rc34v3,r56v0,rc56v1,rc64v0,rc64v1,rc64v2,rc97v0,rh09v0,rh09v1,u31v0,rc07v0,rc24v0,rc24v1,rc24v2,rc77v0,rc77v1,rc77v2';
// 
// 		COMPONENTS HAVE BEEN FIXED WITH WS JS OR CSS AND REQUIRE NO MARKUP CHANGES OR OLD COMPONENTS THAT PASS A11Y AND ARE ALREADY ACCESSIBLE
// 		components listed here need full variation id's, each variation needs to be set as fixed
// 		var a11ypass = 'rc13vN,rc19v0,cc00v0,cc00v1,rc04v0,rc04v1,rc04v2,rc04v3,rc04v4,rc29v0,rc29v1,rc31v0,rc31v1,rc62v0,rc62v1,rc62v2,rc62v3,rc62v4,rc62v5,rc62v6,rc78v0,rc93v0,rh04v0,u03v0,u03v1,u03v2,u03v3,u03v4,u03v5,u03v6,u24v0,u28v0,u28v1,u28v2,u28v3,rc23v0,rc23v1,rc23v2,rc23v3,rc23v4,u32v0,vd03v0,vd03v1,w10v0,w10v1,u31v0,w10v0,w10v1,rc11v0,rc11v1,rc11v2,rc20v3,rc43v1,rc22v3,rc112v0,rc102v0,rc24v3,rc24v4';

		// A11Y DATA GENERATED BY GRUNT DO NOT TOUCH
			var a11yupdated = ',cb103vN,cb105vN,cb137vN,cb41vN,cc02vN,cg20vN,cg21vN,cg24vN,cg25vN,cg26vN,cw58vN,cw65vN,f24vN,rc02vN,rc05vN,rc07vN,rc10vN,rc100vN,rc101vN,rc103vN,rc104vN,rc106vN,rc107vN,rc108vN,rc119vN,rc13vN,rc14vN,rc15vN,rc153vN,rc16vN,rc22vN,rc24vN,rc25vN,rc26vN,rc27vN,rc28vN,rc30vN,rc32vN,rc33vN,rc35vN,rc36vN,rc37vN,rc45vN,rc46vN,rc47vN,rc49vN,rc51vN,rc54vN,rc55vN,rc56vN,rc57vN,rc58vN,rc59vN,rc61vN,rc63vN,rc64vN,rc65vN,rc66vN,rc69vN,rc70vN,rc71vN,rc74vN,rc77vN,rc79vN,rc86vN,rc88vN,rc91vN,rc92vN,rc94vN,rc95vN,rc97vN,rc98vN,rh06vN,rh07vN,rh08vN,rh13vN,u10vN,u18vN,u33vN,w10vN,';
var a11ypass = ',cb50vN,cb71vN,cb81vN,cc00vN,cc04vN,cg14vN,ct12vN,f20vN,f22vN,rc03vN,rc04vN,rc08vN,rc102vN,rc109vN,rc11vN,rc110vN,rc111vN,rc112vN,rc138vN,rc149vN,rc19vN,rc20vN,rc23vN,rc29vN,rc31vN,rc38vN,rc39vN,rc41vN,rc42vN,rc43vN,rc44vN,rc50vN,rc52vN,rc62vN,rc67vN,rc72vN,rc73vN,rc78vN,rc89vN,rc93vN,rc96vN,rc99vN,rh01vN,rh03vN,rh04vN,rh05vN,rh09vN,rt01vN,rt03vN,u31vN,u32vN,u34vN,w11vN,';

		// A11Y DATA GENERATED BY GRUNT DO NOT TOUCH

		'use strict';

		var loco = document.location.href;
		
		// ASSET VERSION EASTER EGG
		if (loco.indexOf('wsversion') != -1) {
			var vm = $('<div class="ws-vcheck" style="position:fixed;bottom:10px;right:10px;min-width:300px;background:#fff;border-radius:6px;z-index:9999;padding:1em;box-shadow: 0px 0px 28px -8px rgba(0,0,0,0.5);"><style>.ws-vcheck td{border:1px solid #ccc;padding:4px 8px;font-size:15px}</style></div>'),
				vt = $('<table style="border-collapse: collapse;width:100%"></table>');

			$('link[href*="css"]').each(function(){
					var cssfile = $(this).attr('href').replace(/.*\/([^\/]+).css$/g,'$1');
					$('body').append('<div style="display:none" id="'+cssfile+'"></div>');
					if($('#'+cssfile).css('content') != "" && $('#'+cssfile).css('content') != "normal" && $('#'+cssfile).css('content') != "none"){
						vt.append('<tr><td>'+cssfile+'.css</td><td>'+$('#'+cssfile).css('content').replace(/"/g,'')+'</td></tr>');
					}
					$('#'+cssfile).remove();
			});

			$('script[src]').each(function(){
				var jsfile = $(this).attr('src').replace(/.*\/([^\/]+).js$/g,'$1');
				if(window[jsfile]){
					vt.append('<tr><td>'+jsfile+'.js</td><td>'+window[jsfile]+'</td></tr>');
				}
			});

			vm.append(vt);
			$('body').append(vm);

		}

		// WS CALLOUTS EASTER EGG
		if (loco.indexOf('wscallout') != -1 || sessionStorage.getItem("wstools") == "callout" || sessionStorage.getItem("wstools") == "callout-headings" ) {

			if(loco.indexOf('wscallout-sample') < 0){
				if(sessionStorage.getItem("wstools") != 'callout-headings'){
					sessionStorage.setItem('wstools','callout');
				}else{
					$('body').addClass('ws-showheading');
				}
			}else{
				$('body').addClass('ws-templatecallout');
			}

			var codebase = false;
						
			$('link[href*="css"]').each(function(){
				var cssfile = $(this).attr('href').replace(/.*\/([^\/]+).css$/g,'$1');
				if(/search|blogs-style/.test(cssfile)){
					codebase = cssfile.replace(/-.*/,'');
					return false;
				}else if(/-base/.test(cssfile)){
					codebase = cssfile.replace(/-base/,'').replace(/-v1/,'').replace(/ocom-lan/,'lan');
					if(codebase == 'redwood' && !$('link[href*="redwood-styles"]')[0]){
						codebase = 'redwoodhome';
					}
					return false;
				}else if(/redwood-events/.test(cssfile)){
					codebase = 'redwood-events';
					return false;
				}else if(/redwood-blogs/.test(cssfile)){
					codebase = 'redwood-blogs';
					return false;
				}
			});

			if(codebase){

				a11yupdated = a11yupdated.toLowerCase()
				a11ypass = a11ypass.toLowerCase()

				var wsurl = "https://webstandards.oraclecorp.com";

				// set url to local or ws when looking at templates instead of live pages
				if(loco.indexOf('localhost') != -1 || loco.indexOf('webstandards') != -1){
					wsurl = loco.split('//')[0]+"//"+loco.split('//')[1].split('/')[0];
				}


				

				// codebase link			
				$('body').append('<div class="ws-cbase"><a target="_blank" href="'+wsurl+'/'+codebase+'/">'+codebase.toUpperCase()+' CODEBASE</a></div><div class="ws-hding"><button>HEADINGS</button></div>    <div class="ws-calloff rw-icons"><a href="?" title="Exit callout mode" class="icn-close" onclick="sessionStorage.removeItem(\'wstools\')"><span class="sr-only">EXIT CALLOUT MODE</span></a></div>');

				$('section[class],body > div > nav[class],body > div > footer[class],body > div > div[class]:not(div.atarget),body[class],div.ct06,div.cb19,div.cn15,nav.ct12,div.u02,div.s15,div.cb11,div.cw36,div.u10v1x2,div.cb07,div.atarget > div').each(function(){
				
					if(!$(this).is('.hascompid')){
						var comp = $(this),
							compid = "•"+comp.attr('class').replace(/ /g,'•')+"•",
							baseid = "",
							hashid = "";

						comp.addClass('hascompid'); //add class so we don't run it twice from the crazy selectors above

						if(comp.attr('data-wscallout')){
							compid = comp.attr('data-wscallout').replace(/x.*/g,'');
							fullid = comp.attr('data-wscallout');
						}else if(/.*•([a-z]+[0-9]+v[0-9]+)•.*/.test(compid)){
							compid = compid.replace(/.*•([a-z]+[0-9]+v[0-9]+)•.*/g,'$1');
							fullid = compid;
						}else if(/.*•([a-z]+[0-9]+)•.*/.test(compid)){
							compid = compid.replace(/.*•([a-z]+[0-9]+)•.*/g,'$1');
							fullid = compid;
						}else if(/.*•([a-z]+[0-9]+v[0-9]x[0-9]+)•.*/.test(compid)){
							compid = compid.replace(/.*•([a-z]+[0-9]+v[0-9]+)[^•]*•/g,'$1');
							fullid = compid;
						}else{
							compid = null;
						}
				
				
						if(compid){
							baseid = compid.replace(/v.*/,'');
							hashid = (fullid.indexOf('v') > -1) ? '#v'+fullid.toLowerCase().split('v')[1].split('.')[0] : '';

							if(comp.css('position') == 'static'){
								comp.css('position','relative');
							}

							var a11ystat = "a11y-unknown";
							var a11yicon = "";
							
							if(a11yupdated.indexOf(","+compid.toLowerCase()+",") > -1 || a11yupdated.indexOf(","+compid.toLowerCase().split('v')[0]+"vn,") > -1){
								a11ystat = "a11y-ready";
								a11yicon = "icn-warning";
							}
							if(comp.attr('data-a11y') == "true" || a11ypass.indexOf(","+compid.toLowerCase()+",") > -1 || a11ypass.indexOf(","+compid.toLowerCase().split('v')[0]+"vn,") > -1){
								a11ystat = "a11y-true";
								a11yicon = "icn-check-circle";
							}

							// overwrites for RC24 since most are ok, but some have issues, we look for the markup of the one with issue and flag them, and make all others ok
							if(comp.attr('data-a11y') != "true" && compid.toLowerCase().split('v')[0] == "rc24"){
								a11ystat = "a11y-true";
								a11yicon = "icn-check-circle";
								if(
									(comp.find('.r-number2')[0] && !comp.find('[role="listitem"]')[0]) ||
									(comp.find('.r-number')[0] && !comp.find('[role="listitem"]')[0]) ||
									(comp.find('.rc24w2 h3')[0] && comp.find('.rc24w2 h3').first().text().indexOf('1.') > -1 && !comp.find('.rc24w2[role="listitem"]')[0]) ||
									(comp.find('.col-framework.col2 ul').length > 1)
								){
									a11ystat = "a11y-ready";
									a11yicon = "icn-warning";
								}
							}

							fullid = fullid.toUpperCase().replace(/V/,'v').replace(/X/,'x').replace(/v0$/,'');
							comp.prepend('<div class="rw-icons ws-compid ws-compid-'+baseid+' '+a11ystat+'"><a target="_blank" class="'+a11yicon+'" href="'+wsurl+'/'+codebase+'/components/'+baseid+'.html'+hashid+'">'+fullid+'</a></div>');
						}
					}
				});


			$('.ws-hding button').on('click',function(){
				$('body').toggleClass('ws-showheading');
				if(loco.indexOf('wscallout-sample') < 0){
					if($('body').is('.ws-showheading') && loco.indexOf('wscallout-sample') != -1){
						sessionStorage.setItem('wstools','callout-headings');
					}else{
						sessionStorage.setItem('wstools','callout');
					}
				}
			})

				$('h1,h2,h3,h4,h5,h6').each(function(){
				
						var hding = $(this),
							hashid = hding.prop("tagName");

							if(hding.css('position') == 'static'){
								hding.css('position','relative');
							}

							hding.prepend('<div class="ws-headid">'+hashid+'</div>');

				});


			}
		}

	})(jQuery);
});

/*! GENERIC - RANDOMLOAD.JS */
// THIS SCRIPT USED BY THE HOMEPAGE -- EDIT WITH CAUTION!
(function($) {
    $.fn.randomload = function(deletehidden) {
        return this.each(function() {   
			var elem = $(this).children();
			if(deletehidden){
				elem.addClass('deleterandom');
			}
			var wght = ($(this).children('[data-loadweight]')[0]) ? true : false;
			var rndm = (!wght) ? Math.floor ( Math.random () * ( elem.length )) : Math.floor ( Math.random () * ( 100 ));
			if (elem.length > 1 && !wght) {
				for (var i = 0; i < elem.length; i++) {
					if (rndm == i){
						$(elem[i]).show();
						$(elem[i]).removeClass('deleterandom');
					}
				}
			}else if (elem.length > 1 && wght) {
				var totw = 0;
				for (var i = 0; i < elem.length; i++) {
					totw = ($(elem[i]).attr('data-loadweight')) ? totw + ($(elem[i]).attr('data-loadweight') * 1) : totw;
				}
				if(totw == 100){
					var rttl = 0;
					for (var i = 0; i < elem.length; i++) {
						rttl = ($(elem[i]).attr('data-loadweight') * 1) + rttl;
						if (rndm <= rttl){
							$(elem[i]).show();
							$(elem[i]).removeClass('deleterandom');
							break;
						}
					}
				}else{
					$(elem[0]).show();
					$(elem[0]).removeClass('deleterandom');
				}
			}else if (elem.length == 1) {
				$(elem[0]).show();
				$(elem[0]).removeClass('deleterandom');
			}

			if(deletehidden){
				$('.deleterandom').remove();
			}    

        });
    };
})(jQuery);


/*! GENERIC - ARIALIVE */
/**
 * Creates/Updates aria-live span block on page eg. arialive("you have two minutes remaining")
 * @function arialive
 */

function arialive(txt){
	var firsttime = false;
	// if aria live object doesn't exist add it first
	if(!document.getElementById('aria-announcement')){
		var live = document.createElement('span');
		live.setAttribute("aria-live", "polite");
		live.setAttribute("aria-atomic", false);
		live.className = "sr-only";
		live.id = "aria-announcement";
		document.querySelector('body').appendChild(live);
		firsttime == true;
	}
	// if not the first time and txt exist, update live span
	if(txt && !firsttime){
		document.getElementById('aria-announcement').innerText = txt;
		var duration = ((txt.split(" ").length) + 2) * 1000;
		setTimeout(function(){
			if (txt == document.getElementById('aria-announcement').innerText){
				document.getElementById('aria-announcement').innerText = "";
			}
		}, duration);
	}
}

// add on load since browsers are a bit slow if the live object is added when this function is first called and the live object is embedded in the page
if(document.body){
	arialive();
}else{
	window.onload = function () {
		arialive();
	}
}


/*!
 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
*/

// this copy of "1.6.0" is from 7/7/17, apparently nobody actually versions this project,
// so a year from now it may still be "1.6.0". NOTE that this file is altered from the
// source file in github. The orginal file started with...
//
//  ;(function(factory) {
//
// but that semicolon was causing issues with our grunt build and removing it fixes it
// ORACLE.COM OVERRIDES:
// 07/06/2018 (AP): Added conditinal around stopImmediatePropagation so obttn focus would work - line:2064
// 02/09/2018 (AP): Added conditinal around stopImmediatePropagation so obttn focus would work - line:1045
// 01/24/2018 (TG): Add a slick-dotted-hidden class if nav dots are hidden to remove margin - line:516
// 01/12/2018 (AP): Changed default prev/next to A instead of button for tracking  - line:56
// 01/09/2018 (TG): Use .hide class for show/hide instead of jQuery show/hide() - line:1488
//                  Add _.hideDots prop, check for data-dots=false on slider & parent - line:497
// 12/06/2017 (TG): Kill focus grab on resize - line:1709
// 11/17/2017 (TG): Added class="hide" to dots if only one - line:513
// 10/13/2017 (TG): Updated window.resixze to use window.innerWidth instead of $(window).width()
//                  Debounce setPosition event trigger - line:2223
// 09/11/2019 (DC): Need to check for existence of _.$prevArrow and _.$nextArrow Line 801

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
//              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
//              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                prevArrow: '<a href="#" tabindex="0" role="button" class="slick-prev" data-lbl="prev-slide" aria-label="Previous Slide">Previous</a>',
                nextArrow: '<a href="#" tabindex="0" role="button" class="slick-next" data-lbl="next-slide" aria-label="Next Slide">Next</a>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false || $('body').hasClass('rtl'),
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.hideDots = false;
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.setPositionDelay = null;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowDelay = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false',
            'tabindex': '0'
        }).find('a, input, select').attr({
            'role': 'button'
        });

        _.$slideTrack.find('.slick-active').find('a, input, select').removeAttr( "tabindex" );
       
        _.$slideTrack.find('[aria-hidden=true]')
                     .find('a, input, button, select')
                     .attr({ 'tabindex': '-1' });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        _.hideDots = ('undefined' !== typeof _.$slider.data('dots') &&
                        !_.$slider.data('dots')) ||
                     ('undefined' !== typeof _.$slider.parent().data('dots') &&
                        !_.$slider.parent().data('dots'));

        if (_.options.dots === true) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

            _.$dots.find('li').each(function () {
                if (!$(this).hasClass('slick-active')) {
                    $(this).find('button').attr('tabindex', -1);
                }
            });

            // option to add data-dots=false to hide nav dots
            if(_.getDotCount() === 0 || _.hideDots) {
                _.$dots.addClass('hide');
                _.$slider.addClass('slick-dotted-hidden');
            } else {
                _.$dots.removeClass('hide');
                _.$slider.removeClass('slick-dotted-hidden');
            }

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

                var lastSlide = _.slideCount - _.options.slidesToShow ;
                if (_.options.slidesToShow !== 1) {
                    lastSlide = lastSlide + 1;
                }
 
                if (_.slideCount > _.options.slidesToShow) {
                    var isTheFirstDot = _.$dots[0].firstChild.classList.contains('slick-active') ? true: false;

                    if (isTheFirstDot && _.slideCount > 4) {
                        _.slideHandler(lastSlide, false, dontAnimate);
                    } else {
                        _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                    }
                    if ($target.prevObject.length > 0) {
                        if($target.prevObject[0].classList.contains('slick-arrow')){
                            arialive('Slide ' +  (_.currentSlide + 1) + ' of ' + _.slideCount);
                        }
                    }
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    const isTheLastDot = _.$dots[0].lastElementChild.classList.contains('slick-active') ? true: false;
                    if (isTheLastDot) {
                        _.slideHandler(0, false, dontAnimate);
                    } else {
                        _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                    }

                    if ($target.prevObject.length > 0) {
                        if($target.prevObject[0].classList.contains('slick-arrow')){
                            arialive('Slide ' +  (_.currentSlide + 1) + ' of ' + _.slideCount);
                        }
                    }
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                //Need to check for existence of injected _.$prevArrow and _.$nextArrow
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);    
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

			// oracle hack to exclude obttns from stopImmediatePropagation so focus event can fire
			if(!$(this).closest('.obttns')[0] && !$(this).find('.obttns')[0]){
	            event.stopImmediatePropagation();
    		}

            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots(false);
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    $(this).attr({
                        'aria-describedby': 'slick-slide-control' + _.instanceUid + slideControlIndex
                    });
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': 'Slide ' + (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
            _.$slides.eq(i).attr('tabindex', 0);
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               //}, _.changeSlide, arialive('Slide ' +  (_.currentSlide + 1) + ' of ' + _.slideCount));
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               //}, _.changeSlide, arialive('Slide ' +  (_.currentSlide + 1) + ' of ' + _.slideCount));
               }, _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow && !_.hideDots) {

            _.$dots.removeClass('hide');
            _.$slider.removeClass('slick-dotted-hidden');

        }

    };

    Slick.prototype.keyHandler = function(event) {
        var _ = this;
        var keyButtons = {
            arrowLeft: 37,
            arrowRight: 39,
            spaceBar: 32 
        }

        // fires links on spacebar .
        if(event.keyCode === keyButtons.spaceBar && event.target.tagName.match('A')) {
            event.target.click();
        }

         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT|A')) {
            if (event.keyCode === keyButtons.arrowLeft && _.options.accessibility === true) {
                _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll - 1))
                .find('button')

                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === keyButtons.arrowRight && _.options.accessibility === true) {
                _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll + 1))
                .find('button')

                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
                // for non-autoplay: once active slide (group) has updated, set focus on first newly showing slide
                // if (!_.options.autoplay) {
                //     var $currentSlide = $(_.$slides.get(_.currentSlide));
                //     $currentSlide.attr('tabindex', 0).focus();
                // }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if (window.innerWidth !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = window.innerWidth;
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
         _.slideWidth = Math.round(_.listWidth / _.options.slidesToShow); // changed to round to prevent rounding up and making it bigger   _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
          _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        // debounce event trigger to avoid multiple calls to handler
        clearTimeout(_.setPositionDelay);
        _.setPositionDelay = window.setTimeout(function() {
            _.$slider.trigger('setPosition', [_]);
        }, 250);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.addClass('hide');
            _.$slider.addClass('slick-dotted-hidden');

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {
        var _ = this,
            centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite && !_.options.ariaDisabled) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function(setfocus) {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end()
                .find('button')
                    .attr({
                        'aria-selected': false
                    });

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .find('button')
                .attr({
                    'aria-selected': true
                });
                
                if(setfocus){
		            _.$dots.focus();
                }
                
                _.$dots.find('li').each(function () {
                    if (!$(this).hasClass('slick-active')) {
                        $(this).find('button').attr('tabindex', -1);
                    } else {
                        $(this).find('button').removeAttr('tabindex');
                    }
                });

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


// CORE UTILITIES
/*!
	JAVASCRIPT/CSS/LESS FILES $IMPORT UTILITY
	https://github.com/w3core/import.js/
	@version 1.0.0
	@license BSD License
	@author Max Chuhryaev
*/

// WARNING!!!  THIS HAS BEEN UDPATED BY WEBSTANDARDS TO NOT BREAK IN IE8 BUT ADDING IF/ELSE FOR addEventListener -- SO TEST IE 8 AND PATCH IF NEEDED IF ANY UPDATES ARE MADE!!!

!new function(e,n){function t(e,n,t,r){if (n.addEventListener){n.addEventListener(e,t,r)} else if (n.attachEvent){n.attachEvent(e,t,r);}}function r(e,n,t,r){if (n.removeEventListener){n.removeEventListener(e,t,r)} else if (el.removeEvent){el.removeEvent(e,t,r);}}function a(n){return n&&"object"==typeof n&&"number"==typeof n.length&&!n.nodeName&&n!=e}function u(e,t){var r=n.createEvent("HTMLEvents")
return r.data=t,r.initEvent(e,!0,!0),!n.dispatchEvent(r)}function o(e){var n=/^(\s*\[\s*(\!?)\s*([a-zA-Z0-9\.\-_]*)\s*\:?\s*([a-zA-Z]*)\s*\])?\s*([^\s]+)\s*$/g.exec(e),t=/^[^#?]+\.([a-zA-Z0-9]+)([?#].*)?$/g.exec(e)
return n?{reload:!!n[2],name:n[3]?[n[3]]:[],type:n[4]||t?(n[4]||t[1]).toLowerCase():null,url:n[5]}:null}function l(e,n){var n="string"==typeof n?o(n):n
if(n){for(var t,r=0;r<e.length;r++)if(e[r].url==n.url){if(n.reload&&(e[r].reload=!0),n.type&&!e[r].type&&(e[r].type=n.type),n.name.length)for(var a=0;a<n.name.length;a++)e[r].name.indexOf(n.name[a])<0&&e[r].name.push(n.name[a])
t=!0
break}t||e.push(n)}}function f(e){var n,t=[],r=[]
if("function"==typeof e)t.push(e)
else if("string"==typeof e){n=e.split(",")
for(var u=0;u<n.length;u++)l(r,n[u])}else if(e&&"object"==typeof e){var o=a(e)
for(var u in e){n=f(e[u])
for(var i=0;i<n.src.length;i++)o||n.src[i].name.push(u),l(r,n.src[i])
for(var s=0;s<n.callback.length;s++)t.push(n.callback[s])}}return{src:r,callback:t}}function i(e){return!e||"js"==e}function s(e){return i(e)?"script":"link"}function c(e){return i(e)?"src":"href"}function p(e,u){var o=n.createElement("img"),l="load",f="error",p=i(e.type),h=n.createElement(s(e.type))
h.queue=[u],h[c(e.type)]=e.url,h[p?"type":"rel"]=p?"text/javascript":"less"==e.type?"stylesheet/less":"stylesheet"
var v=function(n){if(r(l,h,v),r(f,h,v),a(h.queue)&&h.queue.length)for(;h.queue.length>0;){var t=h.queue.shift()
"function"==typeof t&&t(h,e,n)}}
return t(l,p?h:o,v),t(f,p?h:o,v),m.push(h),y.appendChild(h),p||(o.src=e.url),h}function h(e,t){for(var r=c(e),a=n.getElementsByTagName(s(e)),u=0;u<a.length;u++)if(a[u][r]==t)return a[u]}function v(e,n){var t=h(e,n)
if(t)return a(t.queue)||(t.queue=[],m.push(t)),t
for(var r=c(e),u=0;u<m.length;u++)if(m[u][r]==n)return m[u]}function g(e,n){var t=f([].slice.call(arguments)),e=t.src,n=t.callback,r=0,a=function(e){return e.parentNode||y.appendChild(e),e},o=function(){for(var t=0;t<n.length;t++)n[t](e)
for(var t=0;t<e.length;t++){u("@import",e[t])
for(var r=0;r<e[t].name.length;r++)u("@import:"+e[t].name[r],e[t])}}
if(!e.length)return o()
for(var l=function(){r++,r==e.length&&o()},i=0;i<e.length;i++){var s=e[i].type,c=e[i].url,h=v(s,c)
h?(e[i].node=a(h),h.queue.length?h.queue.push(l):l()):e[i].node=p(e[i],l)}}var m=[],y=n.getElementsByTagName("head")[0]
e.$import=g}(window,document);




/*! CORE VIDEO */

// *******************************************************************************************
// players and settings
// *******************************************************************************************
// global for tracking root-level declarations or event handlers that should not be repeated; an identifying string is added as the name of an attribute and set to true
window.vidCtl = {};
//window.w10previousSelectedElement = null;
// for testing alternative players, we set the playerid/policykey, but then allow for a beta override
var vod_playerid = 'VkKNQZg6x';
var live_playerid = '8tn635jJU';
var mini_playerid = '9jYHuR8jl';
var vloco = document.location.href;
var vod_pkey = 'BCpkADawqM1pW2-ioZdHgeOcY68cw0JSS05kIrwkV2y41a0Far9G-VzxhorxiMYmQNJqbjdZTfJNO8DfjreigQD2g0ikp_jGrofJCVAUNFU1xgsl6dBYsY6L_yI';
var betavideo = false;
var videoinfo = false;
var	pglang = (jQuery('meta[name="Language"]').attr('content')) ? jQuery('meta[name="Language"]').attr('content') : 'en';
var waypoint_debug = [];
var YT_PLAYERVARS = [
	"autoplay",
	"cc_lang_pref",
	"cc_load_policy",
	"color",
	"controls",
	"disablekb",
	"enablejsapi",
	"end",
	"fs",
	"hl",
	"iv_load_policy",
	"list",
	"listType",
	"loop",
	"modestbranding",
	"origin",
	"playsinline",
	"rel",
	"start",
	"widget_referrer"
];
if (vloco.indexOf('videoinfo=true') > -1){
	videoinfo = [];
}

if (vloco.indexOf('betavideo=') > -1){
	var bvid = vloco.split('betavideo=')[1].split('&')[0];
	vod_playerid = (bvid == 'true') ? 'Bk2kPOcu' : bvid;
	betavideo = 'BC VIDEO: loading single/playlist beta player -> '+vod_playerid;
}

if (vloco.indexOf('betavideolive=') > -1){
	var bvid = vloco.split('betavideolive=')[1].split('&')[0];
	live_playerid  = (bvid != 'true') ? bvid : live_playerid;
	var pkmsg = 'BC VIDEO: loading live beta player -> '+live_playerid;
	betavideo = (betavideo) ? betavideo + '\n'+pkmsg : pkmsg;
}

if (vloco.indexOf('betavideopkey=') > -1){
	vod_pkey = vloco.split('betavideopkey=')[1].split('&')[0];
	var pkmsg =	'BC VIDEO: loading beta policy key ->'+vod_pkey;
	betavideo = (betavideo) ? betavideo + '\n'+pkmsg : pkmsg;
}
var bc_errors = {
	'1': {
		'headline': {
			'en':'The video download was cancelled.'
		},
		'description': {
			'en':'You aborted the media playback'
		}
	},
	'2': {
		'headline': {
			'en':"The video connection was lost, please confirm you're connected to the internet"
		},
		'description': {
			'en':'A network error caused the media download to fail part-way.'
		}
	},
	'3': {
		'headline': {
			'en':"The video is bad or in a format that can't be played on your browser"
		},
		'description': {
			'en':"The media playback was aborted due to a corruption problem or because the media used features your browser did not support."
		}
	},
	'4': {
		'headline': {
			'en':"This video is either unavailable or not supported in this browser"
		},
		'description': {
			'en':"The media could not be loaded, either because the server or network failed or because the format is not supported."
		}
	},
	'5': {
		'headline': {
			'en':"The video you're trying to watch is encrypted and we don't know how to decrypt it"
		},
		'description': {
			'en':"The media is encrypted and we do not have the keys to decrypt it."
		}
	},
	'unknown': {
		'headline': {
			'en':'There was an error'
		},
		'description': {
			'en':"An unanticipated problem was encountered. Check back soon and try again."
		}
	},
	'VIDEO_CLOUD_ERR_NOT_PLAYABLE': {
		'headline': {
			'en':'There was an error'
		},
		'description': {
			'en':'The video is not available.'
		}
	}
}
var bc_config  = {

	// ocom's bc account #
	 'account'  : '1460825906',

	// policy key -- USED W/ API CALLS, NOTE THIS IS TIED TO THE VkKNQZg6x PLAYER
		  'pk'  : vod_pkey,

	// brightcove key -- USED W/ BC HOSTED VIDEOS / IFRAMED LIVE PLAYERS
		  'bckey'  : 'AQ~~,AAAAAFcSbzI~,OkyYKKfkn3wagZQIWBO967-6Frb9WeJM',

	// players
	'playlist'  : {
					'playerid'	: vod_playerid,
					'bcidtype'	: 'data-playlist-id',
					'video'		: '<video data-embed="default" class="video-js" controls playsinline></video>',
					'appendHTML': '<div class="playlist-wrapper"><ol class="vjs-playlist vjs-csspointerevents vjs-mouse"></ol></div>'
				},
	  'single'  : {
					'playerid'	: vod_playerid,
					'bcidtype'	: 'data-video-id',
					'video'		: '<video data-embed="default" class="video-js" controls playsinline></video>'
				},
	  'background'  : {
					//'playerid'	: 'B13U1lbKg',
					'playerid'	: 'K5HHwnATM',
					'bcidtype'	: 'data-video-id',
					'video'		: '<video data-embed="default" class="video-js" playsinline></video>'
				},

		'live'	: {
					'playerid'	: live_playerid,
					'bcidtype'	: 'data-video-id',
					'video'		: '<video data-embed="default" class="video-js" controls playsinline></video>'
				},
		'mini'	: {
					'playerid'	: mini_playerid,
					'bcidtype'	: 'data-video-id',
					'video'		: '<video data-embed="default" class="video-js" controls playsinline></video>'
				}

};


// *******************************************************************************************
// polyfill for old hardcoded embeds, runs from in page js at run time, before onready
// *******************************************************************************************
function embedBrightcove(x,autoplay,type,bcid,k,surl){

	// set autoplay
	autoplay = (autoplay) ? 'data-autoplay=true' : '';

	// set shareURL
	surl = (surl) ? 'data-share='+surl : '';

	// reduce types to live or single (no playlist was avialable for hardcoded js embeds)
	type = (type.indexOf('live-') > -1) ? 'live' : 'single';

	// write out new style embedd
	document.write('<div class="bcembed bcvideo" data-bcid="'+bcid+'" data-type="'+type+'" '+autoplay+' '+surl+'></div>');

}

// *******************************************************************************************
// on ready, set up all embeds (old and new) AND import css
// *******************************************************************************************

window.vd01Initialize = function() {
	// set up old embeds
	bc_embedsetup(jQuery(document));

// all css files include video css now, this is no longer needed
//	if (!jQuery(".bc-cssimported")[0]) {
		// test if video CSS exist, if not import it
//		jQuery('body').append('<div id="vidcsstest"></div>');
		
// if not content:ovid and cssfilepath undefined or just in redwood (this test for ovid is race conditiony), need to clean this up
// 		if (window.getComputedStyle(document.querySelector('#vidcsstest'), ':before').getPropertyValue('content') != 'ovid' && typeof cssfilepath !== "undefined" && typeof cssfilepath !== "undefined" && !$('body.f20')[0]){
// 			$import(cssfilepath+'oracle-video.css');
// 		}

//		jQuery('html').addClass("bc-cssimported");
//	 	jQuery('#vidcsstest').remove();
//	}

}

// *******************************************************************************************
// set up function, converts old div embeds, sets up all embeds to lazyload
// *******************************************************************************************

// context => jquery ojbect containing possible video embeds
function bc_embedsetup(context){

	// kill all responsiveVid classes
	context.find('.responsiveVid').removeClass('responsiveVid');

	// udpdate lighbox links & set trackas/data-lbl
	context.find('a[rel^="brightcoveLightBox"],a[rel^="vbox"]').not("[href*=\"ytid=\"]").each(function(){

		var lb = jQuery(this);

		// convert old
		lb.attr('rel','vbox');
		lb.attr('href', lb.attr('href').replace(/.*videoplayer-ocom.html/g,'').replace(/bctid/g,'bcid').replace(/ /g,''));

		// set trackas
		if(!lb.is('[data-lbl]') && lb.is('[title]')){
			lb.attr('data-lbl','lighbox-open-'+lb.attr('title').toLowerCase().replace(/ /g,'-'));
		}else if(!lb.is('[data-lbl]') && lb.text()){
			lb.attr('data-lbl','lighbox-open-'+lb.text().toLowerCase().replace(/ /g,'-'));
		}else if(lb.is('[data-lbl]')){
			lb.attr('data-lbl',lb.attr('data-lbl'));
		}else{
			lb.attr('data-lbl','lighbox-open');
		}
		if(!lb.is('[data-trackas]')){
			lb.attr('data-trackas','lightbox');
		}

	});

	// convert old div embeds
	context.find('div[data-embedbc]').each(function(){
		var bcid = jQuery(this).attr('data-embedbc').split(',')[3].replace(/['" ]*/g,'');
		jQuery(this).after('<div class="bcembed bcvideo" data-bcid="'+bcid+'" data-type="single"></div>');
		jQuery(this).remove();
	});

	// check if there's embeds with the class bcload to load them instantly
	context.find('.bcembed.bcload').each(function(){
		bc_loadplayer(jQuery(this));
	});
	// check if there's embeds, then set them as lazy loading to load video on scroll

	// vbox link aria polyfill
	context.find('a[rel^="vbox"]:not([role="button"])').each(function(){
		$(this).attr('role','button');
	});

	// NATIVE JS LAZYLOAD
	if ("IntersectionObserver" in window) {

		lazyvids = document.querySelectorAll("div.bcembed");

		var vidObserver = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					bc_loadplayer(jQuery(entry.target));
					vidObserver.unobserve(entry.target);
				}
			});
		});

		lazyvids.forEach(function(vid) {
			if (!vid.classList.contains("bcobserved")) {
				vidObserver.observe(vid);
				jQuery(vid).addClass("bcobserved");
			}
		});
	
	// WAYPOINT FALLBACK
	} else {
		context.find('div.bcembed').each(function(i,embed){
			if (!jQuery(embed).hasClass("bcobserved")) {
				waypoint_debug[i] = jQuery(embed).waypoint(function() {
					bc_loadplayer(jQuery(this.element));
					this.destroy();
				},{offset: '105%'});
				jQuery(embed).addClass("bcobserved");
			}
		});
	}
}

// *******************************************************************************************
// load div embed function
// *******************************************************************************************

// embedDiv => jquery ojbect of embed div
function bc_loadplayer(embedDiv){

/*
	// if bg video has delayuntil then check other video for bgloaded
	if(embedDiv.is('[data-delayuntil]')){

		// if other video is loaded kill the delayuntil so when it runs it will load
		if (jQuery('div.bcvideo[data-bcid="'+embedDiv.attr('data-delayuntil')+'"]').hasClass('bgloaded')){
			embedDiv.removeAttr('data-delayuntil');
			console.log('removed delay...');
		}else{
			console.log('check again...');
			// check in .5 sec if delay is gone
			setTimeout(function() {
				bc_loadplayer(embedDiv);
			}, 500);
			return;
		}
	}

	<div class="bcembed bcvideo bchidetitle bcload" data-bcid="5276026275001" data-type="background" data-delayuntil="5276042718001"></div>

*/

	// console log beta video msg

	var embedHTML = '';

	if (betavideo){
		console.log(betavideo);
	}

	// clean up bcid value in case there are spaces (it's happened more than once)
	if(typeof embedDiv.attr('data-bcid') !== 'undefined' ) {
		embedDiv.attr('data-bcid',embedDiv.attr('data-bcid').replace(/ /g,''));
	}

	// remove "bcembed" to prevent reprocessing
	embedDiv.removeClass('bcembed');

	// get/set player type
	embedDiv.ptype = (embedDiv.attr('data-type'))  ? embedDiv.attr('data-type') : "single";

	var iscw55 = (embedDiv.ptype == "background" && embedDiv.closest('.cw55')[0]) ? true : false,
		bcthumbnail = (embedDiv.hasClass('bcthumbnail')) ? true : false,
		bcgallery = (embedDiv.hasClass('bcgallery')) ? true : false,
		bcfgallery = (typeof embedDiv.attr('data-playlistid') !== 'undefined') ? true : false,
		bcvideotimes = embedDiv.attr('data-videotimes') == 'true' ? true : false,
		// set var to easily check if video is a playlist
		isplaylist = (embedDiv.ptype.indexOf('playlist') > -1) ? true : false,
		bcoptions = (typeof embedDiv.attr('data-options') == 'undefined') ? '' : embedDiv.attr('data-options'),
		unmuteTxt = embedDiv.attr('data-umute') ? embedDiv.attr('data-umute') : 'Unmute video';


	if(embedDiv.ptype != "live-iframe" && !iscw55 && !bcthumbnail && !bcgallery && !bcfgallery){

		// set js file path to prop
		embedDiv.jspath = '//players.brightcove.net/'+bc_config.account+'/'+bc_config[embedDiv.ptype].playerid+'_default/index.min.js?s';

		// set id value
		embedDiv.vid = 'bcvid-'+embedDiv.attr('data-bcid').replace(/,/g,'-')+'-'+Math.floor(Math.random() * ((1000000-2)+1) + 2);
		embedDiv.attr('data-bcobjid',embedDiv.vid);


		// define video object
		var thisvideo = jQuery(bc_config[embedDiv.ptype].video)
						.attr('data-player',bc_config[embedDiv.ptype].playerid)
						.attr('data-account',bc_config.account)
						.attr('id',embedDiv.vid);
		
		// add custom poster attr
		if(embedDiv.is('[data-poster]')){
			thisvideo.attr('poster',embedDiv.attr('data-poster'));
		}

		// if bcid is NOT a comma delineated list, set bcid to video object
		if(embedDiv.attr('data-bcid').indexOf(',') < 0){
			thisvideo.attr(bc_config[embedDiv.ptype].bcidtype,embedDiv.attr('data-bcid'));
		}

		// temporarly change existing playlist class so BC's dumb js will append the playlist code to the new player
		if(isplaylist){
			jQuery('ol.vjs-playlist').addClass('vjs-playlist-tmp').removeClass('vjs-playlist');
		}

		// append video object to embed div
		embedDiv.append(thisvideo);

		// add any prependHTML to DOM after embed div
		if(bc_config[embedDiv.ptype].prependHTML){
			embedDiv.append(bc_config[embedDiv.ptype].prependHTML);
		}

		// add any appendHTML to DOM after embed div
		if(bc_config[embedDiv.ptype].appendHTML){
			embedDiv.append(bc_config[embedDiv.ptype].appendHTML);
		}

		// if OCM...
		if (window.requirejs) {

			if (require.defined("bc")) {
				require.undef("bc");
			}
			if (embedDiv.ptype == "background") {
				require.config({
				  'paths': {
				    'bc': "https://players.brightcove.net/1460825906/K5HHwnATM_default/index.min"
				  },
				  timeout: 30
				});

				require(['bc'], function() {
					videojs.getPlayers()[embedDiv.vid].on("loadstart", function() {
						embedVideo(embedDiv, this);
					});
			    });
			} else {
				require.config({
				  'paths': {
				    'bc': "https://players.brightcove.net/1460825906/VkKNQZg6x_default/index.min"
				  },
				  timeout: 30
				});
				require(['bc'], function() {
					videojs.getPlayer(embedDiv.vid).ready( function() {
						embedVideo(embedDiv, this);
					});
			    });

			}

		} else {
			// load js to trigger bc embed
			$import(embedDiv.jspath,function(){
				embedVideo(embedDiv);
			});

		}

		function embedVideo(embedDiv, player) {
			// sets opacity to 1
			embedDiv.addClass('showembed');

			// set videojs object
			var vid = videojs(embedDiv.vid);

			// set preload to true
			vid.preload(true);

			// kill volume to retain sanity in local testing, don't commit without commenting out!!! --
			// vid.volume(0);

			if(embedDiv.ptype == "background"){
				// mutes video so it can autoplay
				vid.volume(0);
				embedDiv.find("video").prop('muted', true);

				// add play/pause toggle				
				embedDiv.parent().css('position:relative');
				var pausetxt = (embedDiv.attr('data-pausetxt')) ? embedDiv.attr('data-pausetxt') : 'Pause video',
					playtxt = (embedDiv.attr('data-playtxt')) ? embedDiv.attr('data-playtxt') : 'Play video';

				var descby = '';
				
				if(embedDiv.find("div.sr-only")[0]){
					embedDiv.find("div.sr-only")[0].id = "desc-"+embedDiv.attr('data-bcid');
					descby = 'aria-describedby="desc-'+embedDiv.attr('data-bcid')+'"';
				}
			

				var ppclass = (window.matchMedia("(prefers-reduced-motion: reduce)").matches !== false) ? ' bgplayvid' : '';

				embedDiv.parent().append('<div class="bgvidpause"><div class="cwidth'+ppclass+'">\
					<button class="bgvidpausebttn" '+descby+' onclick="videojs(\''+embedDiv.vid+'\').pause();this.parentElement.classList.add(\'bgplayvid\');this.parentElement.children[1].focus()"><span>'+pausetxt+'</span></button>\
					<button class="bgvidplaybttn" '+descby+' onclick="videojs(\''+embedDiv.vid+'\').play();this.parentElement.classList.remove(\'bgplayvid\');this.parentElement.children[0].focus()"><span>'+playtxt+'</span></button>\
					</div></div>');
				}

			if ((embedDiv.ptype == "single" || embedDiv.ptype == "live") && (embedDiv.is('[data-autoplay="true"]') && !embedDiv.closest(".w10")[0] && !embedDiv.is(".bcslipload") || embedDiv.closest(".w10onload")[0]) ) {
				//console.log(embedDiv)
				// mutes video so it can autoplay
				vid.volume(0);
				embedDiv.find("video").prop('muted', true);
				embedDiv.append($("<div class=\"video-unmute\"></div>"));
				embedDiv.find(".video-unmute").on("click", function (e) {
					embedDiv.find("video").prop('muted', false);
					vid.volume(0.7);
					$(e.currentTarget).remove();
				});
				vid.one("play", function(e) {
					vid.one("volumechange", function(e) {
						if (embedDiv.find(".video-unmute")[0]) {
							embedDiv.find(".video-unmute").remove();
						}
					});
				});
			}
			// add video object to videoinfo array for testing in the console
			if(videoinfo){
				videoinfo.push(vid);
			}
			// revert class change on all other playlist
			if(isplaylist){

				jQuery('ol.vjs-playlist-tmp').addClass('vjs-playlist').removeClass('vjs-playlist-tmp');


				// set the initial title
				$("ol.vjs-playlist").each( function(i,pl) {
					var checkInt = [];
					if (bcvideotimes) {
						// set the initial title after the videos have been loaded
						checkInt[i] = window.setInterval( function() {
							if ($(pl).find(".vjs-selected cite")[0]) {
								if (bcvideotimes) {
									$(pl).find(".vjs-playlist-item time").wrap('<div class="bctimew1"></div>');
								}
								clearInterval(checkInt[i]);
							}
						}, 50);
					}
				});
			}

			// turn on autoplay only if they don't have prefered reduced motion set...unless it's in a lightbox link
			if(window.matchMedia("(prefers-reduced-motion: reduce)").matches !== false && !embedDiv.closest('.w10')[0]){
				vid.autoplay(false);
			}else if(embedDiv.is('[data-autoplay="true"]')){
				vid.autoplay(true);
			}
			
			// turn on looping
			if(embedDiv.is('[data-loopvideo="true"]')){
				vid.loop(true);
			}

			// disable share
			if(embedDiv.is('[data-share="none"]')){
				embedDiv.addClass('bcnosocial');
			}

			// turn on captions
			if(embedDiv.is('[data-autocaption]')){
				var lang = embedDiv.attr('data-autocaption'),
					tracks = vid.textTracks(),
					captionsActivated = false;
				//console.log(tracks)
				vid.on("loadedmetadata", function (e) {
					for (var i = 0; i < tracks.length; i++) {
						var track = tracks[i];
						if (track.kind === 'captions' && track.language === lang) {
							track.mode = 'showing';
							captionsActivated = true;
						}
					}
					// fallback: if captions were not activated, find and activate subtitles
					if (!captionsActivated) {
						for (var i = 0; i < tracks.length; i++) {
							var track = tracks[i];
							if (track.kind === 'subtitles' && track.language === lang) {
								track.mode = 'showing';
							}
						}
					}
				});
			}


			// set share value if video has social & it's not disabled by publisher
			if (typeof vid.social == 'function' && !embedDiv.is('[data-share="none"]')){

				// strip any vid args and set to page url, also default value for playlist
				var shareURL = document.location.href.replace(/[\?\&]bcid=[\d]+/gi,'').replace(/[\?\&]playerType=[^\&\#]+/gi,'').replace(/\#.*/gi,'').replace(/[\?\&]shareURL=[^\&\#]+/gi,'').replace(/\#.*/gi,'');

				// if defined set to that
				if(embedDiv.is('[data-share]') && embedDiv.data('share') != 'none' && embedDiv.data('share').indexOf('playvid') < 0){

					shareURL = embedDiv.attr('data-share');

				// if video is a single player then set share to page + video
				}else if(!isplaylist){

					// set share to current video bcid, check for ? deliminator
					shareURL = (shareURL.indexOf('?') > -1) ? shareURL+"&bcid="+embedDiv.attr('data-bcid') :  shareURL+"?bcid="+embedDiv.attr('data-bcid');

					// if player is anything else besides single, set playerType arg
					shareURL = (embedDiv.ptype != 'single') ? shareURL+"&playerType="+embedDiv.ptype : shareURL;

				}

				// set share value
				var shareopts = {
					"url": shareURL
				};

				// set auto share to display share screen at the end of the video (but not on playlist)
				if(embedDiv.is('[data-autoshare="true"]') && !isplaylist){
					shareopts.displayAfterVideo = true;
				}

				// set URL
				vid.social(shareopts);

			}

			vid.ready(function () {
				var message, headline;
				// Create a div in which to place HTML content and place image inside
				var newElement = document.createElement("div");
				newElement.className = "vjs-error-w1";
				newElement.innerHTML = '<div class="vjs-error-w2"><h1></h1><p></p></div><div class="vjs-error-logo"></div>';
				// Define options object to be used for modal content
				var options = {};
				options.content = newElement;

				// Create Modal with options object
				var ModalDialog = videojs.getComponent("ModalDialog");
				var errorModal = new ModalDialog(vid, options);
				vid.addChild(errorModal);
				var id = errorModal.descEl_.id;


				if (embedDiv.closest(".w10")[0]) {
					// apply focus to first focusable element inside the modal
					w10applyFocusOnElement(embedDiv.closest(".w10"));
				}


				// Listen for an error event
				vid.on("error", function(err) {

					// The Modal should only be displayed if the error code is 4
					// and the duration is NaN (not a number)
					// The following code gets the error code and duration
					var errNo = vid.error().code,
						duration = vid.duration(),
						allErr = vid.errors.getAll(),
						headling = '',
						message = '';
					//console.log(allErr)
					// if video hasn't played...
					if (isNaN(duration)) {
						// Hide the error display
						vid.errorDisplay.hide();
						// Hide default modal close button
						$('#' + id).siblings('button.vjs-close-button').hide();

						// determine headline
						if (bc_errors[errNo]) {
							headline = bc_errors[errNo]['headline'][pglang];
						} else {
							headline = bc_errors['unknown']['headline'][pglang];
						}

						// determine message
						if (vid.error().message) {
							message = vid.error().message;

						} else if (errNo) {
							// errNo exceptions
							if (errNo == 'VIDEO_CLOUD_ERR_NOT_PLAYABLE') {
								message = bc_errors[errNo]['description'][pglang];
							} else {
								// match error type to error dump object
								for (var key in allErr) {
									if (errNo == allErr[key].type) {
										message = allErr[key].headline;
										break;
									}
								}
								// no match for message, then use a default
								if (!message) {
									message = bc_errors['unknown']['description'][pglang];
								}
							}
						} else {
							message = bc_errors['unknown']['description'][pglang];
						}
						// show custom modal
						errorModal.open();
						// inject headline and message
						$('#' + id).siblings('.vjs-modal-dialog-content').find('.vjs-error-w2 h1').text(headline);
						$('#' + id).siblings('.vjs-modal-dialog-content').find('.vjs-error-w2 p').text(message);					  
					}
				});
			});

			// if publisher defined playlist, then add videos
			if(isplaylist && embedDiv.attr('data-bcid').indexOf(',') > -1){
				var bcids = embedDiv.attr('data-bcid').split(',');
				var pubplaylist = videojs(embedDiv.find("video")[0].id);
				bc_getdata(pubplaylist, bcids, function (videoData) {
					pubplaylist.playlist(videoData);
				});
			} else {

			}		
		}


	// if background && cw55 preload HTML5 video manually
	}else if(iscw55){

		embedDiv.vid = 'bcvid-'+embedDiv.attr('data-bcid').replace(/,/g,'-')+'-'+Math.floor(Math.random() * ((1000000-2)+1) + 2);
		embedDiv.attr('class','bcvideo bcvideo-noflash showembed');
		embedDiv.html('<div class="video-js"><video preload="auto" class="vjs-tech" id="'+embedDiv.vid+'"></video></div>');

		if(document.all && !window.atob){ // throw error class for IE9 and down
			embedDiv.addClass('bgloaderror');
		}else{
			jQuery.ajax({
				headers: {
					Accept : "application/json;pk="+bc_config.pk
				},
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Accept', 'application/json;pk='+bc_config.pk);
				},
				url: "https://edge.api.brightcove.com/playback/v1/accounts/"+bc_config.account+"/videos/" + embedDiv.attr('data-bcid'),
				method: 'GET',
				dataType: 'json',
				crossDomain: true,
				success: function(data){
					var n = 0;
					while(data.sources[n]){
						if(data.sources[n].container = "MP4"){
							var thevid = jQuery('#'+embedDiv.vid);

							// set poster
							thevid[0].poster = data.poster;

							// get blob
							var req = new XMLHttpRequest();
							req.open('GET', data.sources[n].src, true);
							req.responseType = 'blob';
							req.onload = function() {
								if (this.status === 200) {
									var videoBlob = this.response;
									try {
										var vid = URL.createObjectURL(videoBlob); // IE10+

										// Video is now downloaded and we can set it as source on the video element
										thevid[0].src = vid;

										// set loaded class to embed div
										thevid.closest('.bcvideo').addClass('bgloaded');
									} catch(err) {
										thevid.closest('.bcvideo').addClass('bgloaderror');
									}
								}
							}
							req.onerror = function() {
								thevid.closest('.bcvideo').addClass('bgloaderror');
							}
							req.send();
							n = 100;
						}
						n++;
					}
				},
				error: function () {
					embedDiv.addClass('bgloaderror');
				}
			});
		}
	/*****************************************************************************	
	 * Framework Gallery w/ BC video
	 */
	} else if(bcfgallery) {

		var playlistEl = embedDiv,
			bcPlaylistID = playlistEl.attr("data-playlistid"),
			local = false,
			snippet = {
				'framework':'<div class="col-framework col-gutters col4 col-multi cwidth"><ul class="col-w1"></ul></div>'
			},
			href = window.location.href,
			jsonURL;

		/*
				if (playlistEl.attr('data-vd01more') && playlistEl.attr('data-vd01less')) {
					bcfgalleryVarObj.textMore = playlistEl.attr('data-vd01more');
					bcfgalleryVarObj.textLess = playlistEl.attr('data-vd01less');
				}
		*/

		if (href.indexOf('oracle.com') > -1 && href.indexOf('webstandards') < 0) {
			jsonURL = '//edge.api.brightcove.com/playback/v1/accounts/'+bc_config.account+'/playlists/'+bcPlaylistID;
		} else {
			jsonURL = '/ws-lib/helper-scripts/bc-midman.php?account='+bc_config.account+'&playlist='+bcPlaylistID;
		}
		//playlistEl.removeAttr("data-playlistID");


		jQuery.when(
			vd01loadplayslist(playlistEl,jsonURL)
		).done(
			function (d) {
				var shareonly,
					video,
					vtitle,
					hours,
					minutes,
					seconds,
					vthumb,
					video_str,
					vdesc,
					vdescTxt,
					lsstxt,
					vhidden,
					breakpoint = vd01GetBreakpoint(),
					txtMore = playlistEl.attr('data-viewmore'),
					txtLess = playlistEl.attr('data-viewless'),
					cols = 4,
					itemsPer = typeof playlistEl.attr('data-pagesize') !== 'undefined' && +playlistEl.attr('data-pagesize') > 0 ? +playlistEl.attr('data-pagesize') : 12,
					newItemsPer;
				
				playlistEl.append($(snippet.framework));
				if (bcoptions.indexOf('bccol3') >= 0) {
					playlistEl.find('.col4').removeClass('col4').addClass('col3');
					cols = 3;
				}
				newItemsPer = vd01itemsPer(itemsPer,cols);

				videoList = d.videos;
				playlistEl.find('.col-framework').inView();
				for (var i=0; i < videoList.length; i++){
					video = videoList[i];

					if (i >= newItemsPer && txtMore && txtLess) {
						vhidden = ' bchidden';
					} else {
						vhidden = '';
					}
					vtitle = (video.hasOwnProperty('custom_fields') && video.custom_fields && video.custom_fields.editorialtitledescription) ? video.custom_fields.editorialtitledescription : video.name;
					// Append "Highlight: " if the video has a full-lenght keynote
					vtitle = (video.hasOwnProperty('custom_fields') && video.custom_fields && video.custom_fields.secondary_rel_url) ? "Highlight: " + vtitle : vtitle;
					vdesc = video.hasOwnProperty('description') ? '<div class="bcdesc">' + video.description + '</div>' : '';
					//vdescTxt = video.description ? ' data-description="' + video.description + '"' : "";
					// Append video length
					if ("duration" in video){
						hours = 0;
						minutes = Math.floor(video.duration / 60000);
						seconds = Math.floor((video.duration / 1000) % 60);
						if (seconds < 10) {
							seconds = '0' + seconds.toString();
						}
						if (minutes > 59) {
							hours = Math.floor(minutes/60);
							minutes = minutes % 60;
						}
						if (minutes < 10) {
							minutes = '0' + minutes.toString();
						}
						if (hours) {
							vtitle += " (" + hours + ":" + minutes.toString() + ":" + seconds.toString() + ")";
						} else {
							vtitle += " (" + +minutes + ":" + seconds.toString() + ")";
						}
					}
					

						
					shareonly = playlistEl.attr("data-shareonly") ? '&shareonly=' + embedDiv.attr("data-shareonly") : '',
					playlistElWidth = playlistEl.outerWidth();
					vthumb = (video.thumbnail && playlistElWidth < 300) ? video.thumbnail : video.poster;

					video_str = '<li class="col-item' + vhidden + '"><div class="col-item-w1">'
						+ '<a href="?bcid=' + video.id + shareonly + '" class="bclink" role="button" title="'+vtitle.replace(/\d?\d-\d?\d-\d\d\d\d/g,'').replace(/--/g,'&ndash;') + '" aria-label="'+vtitle.replace(/\d?\d-\d?\d-\d\d\d\d/g,'').replace(/--/g,'&ndash;') + ' video"></a>' + '<img class="bcimg" src="' + vthumb + '" /></div>'
						+ '<div class="col-item-w2">' + '<div class="bcfgallery-title"><h3>' + vtitle.replace(/\d?\d-\d?\d-\d\d\d\d/g,'').replace(/--/g,'&ndash;') + '</h3>';

					if (bcoptions.indexOf('bcdesc') >= 0) {
						video_str += vdesc;
					}

					if (bcoptions.indexOf('bcspkr') >= 0) {
						video_str += vd01appendSpeakers(video);
					}

					video_str += vd01appendFulllengthKeynote(video, playlistEl) + '</div></div></li>';

					playlistEl.find('.col-w1').append(video_str);
				}

				vd01speakerVis(playlistEl);
				vd01keynoteReader(playlistEl);

				if (txtMore && txtLess) {
					vd01injectBtn(playlistEl,txtMore);
					vd01viewMore(playlistEl,itemsPer,txtMore,txtLess);
				}
				playlistEl.find('div.bcfgallery-speakers').each(function(e){ // show more/less is not visible so ok to embed as english, for tracking only
					$(this).hide();
					var vtitle1 = $(this).siblings('h3').text();
					lsstxt = $(this).attr('data-lsstxt');
					$(this).after('<div class="bcfgallery-showless"><a class="bcfgallery-showless icn-img icn-min-cs" role="button" aria-expanded="true" href="#hide" title="Show less">'+lsstxt+'<span class="sr-only"> speakers for '+vtitle1+'</span></a></div>');
					playlistEl.find('div.bcfgallery-showless').hide();
					$(this).siblings('.bcfgallery-showmore').append('<span class="sr-only"> for '+vtitle1+'</span>');
				});
			}
		).fail(
			function (d) {
				console.log('Error.');
				//console.log(d);
			}
		);
	}else if(bcthumbnail){
		if(!embedDiv.is('.bcimgadded')){
			embedDiv.addClass("bcimgadded");
			var bcVideoID = embedDiv.attr("data-bcid"),
				shareonly = embedDiv.attr("data-shareonly") ? '&shareonly=' + embedDiv.attr("data-shareonly") : '',
				arialabel = embedDiv.attr("aria-label") ? ' aria-label="'+embedDiv.attr("aria-label")+'"': '',
				islive = embedDiv.attr("data-type") && embedDiv.attr("data-type") == "live" ? true : false,
				embedDivWidth = embedDiv.outerWidth(),
				lang = embedDiv.attr('data-autocaption') ? "&autoCaption=" + embedDiv.attr('data-autocaption') :'',
				clickvidoverlay = embedDiv.closest(".clickvideo-overlay")[0] ? '&w10overlay=true': '';
				
			jQuery.ajax({
				headers: {
					Accept : "application/json;pk="+bc_config.pk
				},
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Accept', 'application/json;pk='+bc_config.pk);
				},
				url: "https://edge.api.brightcove.com/playback/v1/accounts/"+bc_config.account+"/videos/" + embedDiv.attr('data-bcid'),
				method: 'GET',
				dataType: 'json',
				crossDomain: true,
				success: function(data){
						var imgsrc = (data.thumbnail & embedDivWidth < 300) ? data.thumbnail : data.poster,
							providedThumb = embedDiv.children("img"),
							livebttn = "",
							modalDesc,
							modalTitle;
						if(islive){
							var liveplayer = '&playerType=live',
							livetxt = embedDiv.attr("data-livetxt") ? embedDiv.attr("data-livetxt") : 'LIVE',
							livebttn = '<div class="bclive">'+livetxt+'</div>';
						}else{
							var liveplayer = '';
						}
						if (data.description) {
							modalDesc = jQuery("<div>").addClass("w10meta").addClass("w10meta-desc").attr("aria-hidden","true").html(data.description);
						}
						if (data.name) {
							modalTitle = jQuery("<div>").addClass("w10meta").addClass("w10meta-title").attr("aria-hidden","true").html(data.name);
						}
						if (!embedDiv.find(".w10meta-title")[0] && modalTitle) {
							embedDiv.append(modalTitle);
						}
						if (!embedDiv.find(".w10meta-desc")[0] && modalDesc) {
							embedDiv.append(modalDesc);
						}

						if(arialabel != ''){
							embedDiv.removeAttr('aria-label')
						}else if(data.name){
							arialabel = ' aria-label="'+data.name+'"';
						}

						if (providedThumb[0]) {
							providedThumb.first().before('<a href="?bcid=' + bcVideoID + liveplayer + shareonly + clickvidoverlay + lang +'" class="bclink" role="button"'+arialabel+'>'+livebttn+'<span class="vjs-big-play-button" aria-hidden="true" tabindex="-1"></span></a>');
						} else {
							embedDiv.append('<a href="?bcid=' + bcVideoID + liveplayer + shareonly + clickvidoverlay + lang +'" class="bclink" role="button"'+arialabel+'>'+livebttn+'<span class="vjs-big-play-button" aria-hidden="true" tabindex="-1"></span></a>');
						}
						
						if(clickvidoverlay == ''){
							if (providedThumb[0]) {
								embedDiv.children("img").first().addClass("bcimg");
							} else {
								embedDiv.append('<img class="bcimg" src="' + imgsrc + '" alt=""/>');
							}
						}
				}
				//,
				//error: function () {
				//	embedDiv.addClass('thumbloaderror');
				//}
			});
			embedHTML = embedDiv.html();
			embedDiv.html(embedHTML.replace(/&nbsp;/g,''));
		}
	// Brighcove In-page Gallery	
	} else if(bcgallery) {

		embedDiv.html('<div data-experience="' + embedDiv.attr('data-bcid') + '"></div><script src="https://players.brightcove.net/' + bc_config.account + '/experience_' + embedDiv.attr('data-bcid') + '/live.js"></script>');
	}
	// if iframed smart player
	else{
		embedDiv.attr('class','');
		embedDiv.html('<iframe class="bciframe" id="bcIframe" src="https://link.brightcove.com/services/player/bcpid993701296001?bckey='+bc_config.bckey+'&bctid='+embedDiv.attr('data-bcid')+'&width=100%25&height=100%25&includeAPI=true&templateLoadHandler=onTemplateLoaded&templateReadyHandler=onTemplateReady&secureConnections=true&secureHTMLConnections=true&wmode=transparent"></iframe>');
	}
	embedDiv.on("focus", '.vjs-play-control', function (e) {
		if (vd01GetBreakpoint(true) == 'webkit-tablet') {
			$(e.currentTarget).blur();
			embedDiv.off("focus",'.vjs-play-control');
		}
	})

}

// *******************************************************************************************
// lightbox ESC close
// & tab handling
// *******************************************************************************************
if (!window.vidCtl["handler-esc-close"]) {
/*
	jQuery(document).keyup(function(e) {
		if (e.key == "Tab" || e.keyCode == 9) {
			console.log("activeElement")
			console.log(document.activeElement)
		}
	})
*/
	jQuery(document).keydown(function(e){
		if(e.which == 32) { // space
			// allow close button to be activated by space
			if ($(document.activeElement).is("#w10close")) {
				$(document.activeElement).trigger("click");
			}
		} else if(e.which == 27){  // escape
			if(jQuery('.w10.w10yt')[0]){
				yt_closelightbox();
			}else if(jQuery('#w10')[0]){
				bc_closelightbox();
			}
		} else if (jQuery(".w10")[0]) {
			w10trapFocusInContainer(jQuery(".w10"), e)
		}
	});
	window.vidCtl["handler-esc-close"] = true;
}

// *******************************************************************************************
// add lightbox to page
// *******************************************************************************************

// embedDiv => jquery ojbect of embed div
window.bc_loadlightbox = function (e,hrf,bcid,ptype,surl,bigs,shareonly,clickvidoverlay){


	var modalDesc = "",
		modalTitle = "",
		titleHtml,
		descHtml;
	//window.w10previousSelectedElement = e.currentTarget;
	// lightbox can be opened from a div or an anchor, depending on the component. 
	if (jQuery(e.currentTarget).closest(".bcvideo")[0]) {
		if (jQuery(e.currentTarget).closest(".bcvideo").find(".w10meta-title")[0]) {
			titleHtml = jQuery(e.currentTarget).closest(".bcvideo").find(".w10meta-title").html();
		}
		if (jQuery(e.currentTarget).closest(".bcvideo").find(".w10meta-desc")[0]) {
			descHtml = jQuery(e.currentTarget).closest(".bcvideo").find(".w10meta-desc").html();
		}
	} else if (jQuery(e.currentTarget).is("a")) {
		if (jQuery(e.currentTarget).attr("title")) {
			titleHtml = jQuery(e.currentTarget).attr("title");
		}
		if (jQuery(e.currentTarget).attr("data-description")) {
			descHtml = jQuery(e.currentTarget).attr("data-description");
		}
	}
	if (titleHtml) {
		modalTitle = '<div class="modal-info" id="w10title">' + titleHtml + '</div>';
	}
	if (descHtml) {
		modalDesc = '<div class="modal-info" id="w10desc">' + descHtml + '</div>';
	}
	if(!e){
		console.log('Error: invalid event')
	}

	var etype = (e) ? '' : ' w10onload'; 

	window.bc_pauseAll();

	if(hrf){
	
		bcid  = hrf.split('bcid=')[1].split('&')[0];
		ptype = (hrf.indexOf('playerType=') > -1) ? hrf.split('playerType=')[1].split('&')[0] : 'single';
		surl  = (hrf.indexOf('shareURL=') > -1) ? hrf.split('shareURL=')[1].split('&')[0] : false;
		aCapt  = (hrf.indexOf('autoCaption=') > -1) ? hrf.split('autoCaption=')[1].split('&')[0] : false;
		clickvidoverlay = (typeof e == 'object' && $(e.currentTarget).closest(".clickvideo-overlay")[0]) ? ' w10overlay' : '';
		bigs  = (bigs || hrf.indexOf('bigscreen=true') > -1) ? ' w10big' : '';
		shareonly = hrf.indexOf('shareonly=') > -1 ? 'data-shareonly=' + hrf.split('shareonly=')[1].split('&')[0] : '';
	}


	// scrub old player types
	ptype = (ptype.indexOf('live-') > -1) ? 'live' : ptype;
	ptype = (!bc_config[ptype]) ? 'single' : ptype;

	surl = (surl) ? 'data-share='+surl : '';
	aCapt = (aCapt) ? 'data-autocaption='+aCapt : '';
	injectionContent = '<div class="w10 w10fadein'+bigs+clickvidoverlay+etype+'" id="w10"><div class="w10w1"><div class="w10w2 w10initfocus" tabindex="0" role="dialog" aria-labelledby="w10title" aria-describedby="w10desc">' + modalTitle + modalDesc +
			'<div class="bcembed bcvideo bc'+ptype+'" data-bcid="'+bcid+'" data-type="'+ptype+'" '+surl+' '+aCapt+' data-autoplay="true" '+shareonly+'></div>'+ '<a id="w10close" href="#close" data-trackas="lightbox" data-lbl="lightbox-close" aria-label="Close video" role="button"><em>Close</em></a>' +
			'</div><div class="w10w3"></div></div></div>';

	// inject into DOM
	if (clickvidoverlay) {
		// opens lightbox as an overlay within the component
		jQuery($(e.currentTarget).closest(".clickvideo-overlay")).append(injectionContent);
	} else {
		jQuery('body').append(injectionContent);
	}
	w10AriaHidePage();
	jQuery('#w10').addClass('w10'+ptype)

	setTimeout(function() {
		jQuery('#w10').removeClass('w10fadein');
		jQuery('#w10close').removeClass('hidden');
		// prevent page from scrolling with lightox, but not with overlay
		if (!clickvidoverlay) {jQuery('body').addClass('lightbox-noscroll')}
	}, 10);

	jQuery(e.currentTarget).addClass("w10active");
	// process embed
	bc_loadplayer(jQuery('#w10').find('div.bcembed'));

}
if (!window.w10ytInterval) {
	window.w10ytInterval = 0;
}
window.yt_loadlightbox = function(e,hrf,ytid,bigs,autoplay,end,feature,loop,modestbranding,list,rel,showinfo,start){
	var query, arg, options,
		modalDesc = "",
		modalTitle = "",
		attribTitle = "",
		attribDesc = "",
		descHtml = "",
		titleHtml = "";
	//window.w10previousSelectedElement = e.currentTarget; //Store last focused element before lightbox is opened
	window.VD03.pauseAll();
	// lightbox can be opened from a div or an anchor, depending on the component. 
	if (jQuery(e.currentTarget).closest(".ytvideo")[0]) {
		if (jQuery(e.currentTarget).closest(".ytvideo").find(".w10meta-title")[0]) {
			titleHtml = jQuery(e.currentTarget).closest(".ytvideo").find(".w10meta-title").html();
		}
		if (jQuery(e.currentTarget).closest(".ytvideo").find(".w10meta-desc")[0]) {
			descHtml = jQuery(e.currentTarget).closest(".ytvideo").find(".w10meta-desc").html();
		}
	} else if (jQuery(e.currentTarget).is("a")) {
		if (jQuery(e.currentTarget).attr("title")) {
			titleHtml = jQuery(e.currentTarget).attr("title");
		}
		if (jQuery(e.currentTarget).attr("data-description")) {
			descHtml = jQuery(e.currentTarget).attr("data-description");
		}
	}
	if (titleHtml) {
		modalTitle = '<div class="modal-info" id="w10title">' + titleHtml + '</div>';
		attribTitle = " aria-labelledby=\"w10title\"";
	}
	if (descHtml) {
		modalDesc = '<div class="modal-info" id="w10desc">' + descHtml + '</div>';
		attribDesc = " aria-describedby=\"w10desc\"";
	}

	if(hrf){
		arg = {
			"autocaption": (hrf.indexOf('autocaption=') > -1) ? hrf.split('autocaption=')[1].split('&')[0] : '',
			"autoplay": (hrf.indexOf('autoplay=') > -1) ? hrf.split('autoplay=')[1].split('&')[0] : '',
			"cc_lang_pref": (hrf.indexOf('cc_lang_pref=') > -1) ? hrf.split('cc_lang_pref=')[1].split('&')[0] : 0,
			"cc_load_policy": (hrf.indexOf('cc_load_policy=') > -1) ? hrf.split('cc_load_policy=')[1].split('&')[0] : 0,
			"bigs": (bigs || hrf.indexOf('bigscreen=true') > -1) ? ' w10big' : '',
			"end": (hrf.indexOf('end=') > -1) ? hrf.split('end=')[1].split('&')[0] : '',
			"feature": (hrf.indexOf('feature=') > -1) ? hrf.split('feature=')[1].split('&')[0] : '',
			"loop": (hrf.indexOf('loop=') > -1) ? hrf.split('loop=')[1].split('&')[0] : 0,
			"modestbranding": (hrf.indexOf('modestbranding=') > -1) ? hrf.split('modestbranding=')[1].split('&')[0] : 1,
			"list": (hrf.indexOf('list=') > -1) ? hrf.split('list=')[1].split('&')[0] : '',
			"rel": (hrf.indexOf('rel=') > -1) ? hrf.split('rel=')[1].split('&')[0] : 0,
			"showinfo": (hrf.indexOf('showinfo=') > -1) ? hrf.split('showinfo=')[1].split('&')[0] : '',
			"start": (hrf.indexOf('start=') > -1) ? hrf.split('start=')[1].split('&')[0] : '',
			"ytid": hrf.split('ytid=')[1].split('&')[0]
		}
		for (var opt in arg) {
			if (arg[opt] != '') {
				if (opt == 'bigs' || opt == 'cc_lang_pref' || opt == 'cc_load_policy' || opt == 'autocaption') {continue;}
				options += ' data-' + opt + '="' + arg[opt] +'"';
			}
		}
		if (arg['cc_load_policy'] && arg['cc_lang_pref']) {
			options += ' data-autocaption="' + arg['cc_lang_pref'] +'"';
		} else if (arg['autocaption']) {
			options += ' data-autocaption="' + arg['autocaption'] +'"';
		}
		if (e == false) {
			options += ' data-urlplay="1"';
		}

	}
	// inject into DOM
	jQuery('body').append('<div class="w10 w10fadein w10yt'+arg.bigs+'" id="w10" aria-hidden="false"><div class="w10w1"><div class="w10w2 w10initfocus" role="dialog"' + attribTitle + attribDesc +  '>' + modalTitle + modalDesc +
	'<div class="ytembed ytvideo" '+ options +'></div>'+
	'<a role="button" id="w10close" aria-label="Close" href="#close" data-trackas="lightbox" data-lbl="lightbox-close" tabindex="0"><em>Close</em></a></div><div class="w10w3"></div></div></div>');
	setTimeout(function() {
		jQuery('#w10').removeClass('w10fadein');
		jQuery('#w10close').removeClass('hidden');
		jQuery('body').addClass('lightbox-noscroll');
		w10AriaHidePage(); // set aria-hidden for non modal elements
	}, 10);
	jQuery(e.currentTarget).addClass("w10active");
	// process embed
	window.VD03.execute(jQuery('#w10').find('div.ytembed'));

	//jQuery("#w10").find(".w10w2").focus();

	window.w10ytInterval = window.setInterval(function () {
		if (jQuery("#w10").find("iframe")[0]) {
			clearInterval(window.w10ytInterval);
			//jQuery("#w10").find("#w10title").focus();
			w10applyFocusOnElement(jQuery("#w10 .w10w2"));
		}
	}, 100);
}

// *******************************************************************************************
// remove lightbox from page
// *******************************************************************************************

function bc_closelightbox(){
	jQuery('#w10').addClass('w10fadeout');
	var bcvid = jQuery('#w10').find('[data-bcobjid]');
	
	if (window.requirejs && require.defined("bc")) {
		require.undef("bc");
	}
	// if .w10close is clicked too quickly, videojs won't be defined
	if (typeof videojs == 'undefined') {
		jQuery('#w10').remove();
		jQuery('body').removeClass('lightbox-noscroll');
		return false;
	}
	var vid = videojs(bcvid.attr('data-bcobjid'));

	// fade out volume (because why not)
	function bc_fadevolume(){
		try {
			var cvol = vid.volume() - .08;
			if (cvol > 0){
				vid.volume(cvol);
				setTimeout(bc_fadevolume, 50);
			}else{
				vid.volume(0);
			}
		}catch(e){
			// shhh
		}

	}
	bc_fadevolume(vid.volume());

	// wait for CSS animations before destroying objects
	setTimeout(function() {
		try {
			vid.stop();
			vid.dispose();
			jQuery('#w10').remove();
			jQuery('body').removeClass('lightbox-noscroll');
		}catch(err){
			jQuery('#w10').remove();
			jQuery('body').removeClass('lightbox-noscroll');
		}
		jQuery(".w10active").removeClass("w10active").focus();

		//w10AriaHidePage(true);
		//if (window.w10previousSelectedElement) {
		//	$(window.w10previousSelectedElement).focus();
		//	window.w10previousSelectedElement = null;
		//}
	}, 1300);
}

function yt_closelightbox(){
	jQuery('#w10').addClass('w10fadeout');
	if (window.w10ytInterval) {
		clearInterval(window.w10ytInterval)
	}
	// wait for CSS animations before destroying objects
	setTimeout(function() {
		jQuery('#w10').remove();
		if (typeof window.vd03player == "object" && window.vd03player.length > 0) {
			window.vd03player.pop();
		}
		jQuery('body').removeClass('lightbox-noscroll');
		//jQuery(".w10active").removeClass("w10active").find(">button").focus();
		var $tmp = jQuery(".w10active");
		if ($tmp[0]) {
			$tmp.removeClass("w10active");
			if ($tmp.find(">button")[0]) {
				$tmp.find(">button").focus();
			} else {
				$tmp.focus();
			}

		}
	}, 500);
}
// *******************************************************************************************
// Load video in lightbox or in place
// *******************************************************************************************
if (!window.vidCtl["handler-bclink-click"]) {
	jQuery(document).on('click keypress', '.bclink[href*="bcid="]', function(e){
		if(vda11yClick(event) === true){
		e.preventDefault();
		e.stopPropagation();
		window.bc_pauseAll();
		var hrf = jQuery(this).attr('href'),
			playerarg = '';
	    	slipwrap = jQuery(this).parent();
		if(hrf){
			bcid = hrf.split('bcid=')[1].split('&')[0];
		}
		//pass player type
		var playertype = "";
		if(hrf && hrf.indexOf('playerType') > -1){
			playertype = 'data-type="'+hrf.split('playerType=')[1].split('&')[0]+'"';
		}
		var playerHTML = '<div class="bcembed bcvideo bcslipload" data-bcid="'+bcid+'" '+playertype+' data-autoplay=\"true\"></div>',
			$this = jQuery(this),
			placeHolder = ($this.closest(".col-item-w1")[0] && $this.closest("div.bcgallery[data-playlistid]")[0]) ? $this.closest('.col-item-w1') : jQuery(this).parent("[data-bcid='" + bcid+ "']"),
			relwidth = (jQuery(window).width() > 1600) ? 1600 : jQuery(window).width();
		//placeHolder.addClass('bcplaying');
		if(($this.outerWidth() >= 600 || $this.outerWidth() > relwidth * .70) && !jQuery(this).closest('.lightboxonly')[0] && !jQuery(this).closest('.clickvideo')[0]) {
			
			// Inline
			if (!placeHolder.hasClass('sliploaded')) {
				placeHolder.addClass('sliploaded');
				placeHolder.append(playerHTML);
				bc_loadplayer(placeHolder.find('div.bcembed'));
			}

		} else {
			// Lightbox
			window.bc_loadlightbox(this,this.href);
		}
	}
	});
	window.vidCtl["handler-bclink-click"] = true;
}
// *******************************************************************************************
// add tracking attribute to lightbox anchors that launch a youtube video
// *******************************************************************************************
function yt_addTracking(anchor) {
	var args, 
		href = jQuery(anchor).attr("href").replace(/^\?/,""),
		ytid;
	if (href) {
		args = href.split(/&/);
		if (args.length > 0) {
			for (var i = 0; i < args.length; i++) {
				if (args[i].match(/^ytid=/)) {
					ytid = args[i].split(/=/);
					if (ytid[1]) {
						jQuery(anchor).attr("data-lbl","yt-play-" + ytid[1]);
					}
				}
			}
		}
	}
}
jQuery("a[rel^=\"vbox\"][href*=\"ytid=\"]").not("[data-lbl]").each( function (i, anchor) {
	yt_addTracking(anchor);
});
// *******************************************************************************************
// lightbox clicks
// *******************************************************************************************

/*
	jQuery(document).keyup(function(e) {
		if (e.key == "Tab" || e.keyCode == 9) {
			console.log("activeElement")
			console.log(document.activeElement)
		}
	})
*/

function vda11yClick(event){
    if(event.type === 'click'){
        return true;
    }
    else if(event.type === 'keypress'){
        var code = event.charCode || event.keyCode || event.which;
        // space == 32 || enter == 13
        if((code === 32) || (code === 13)){
            return true;
        }
    }
    else{
        return false;
    }
}

if (!window.vidCtl["handler-bcid-vbox-click"]) {
	jQuery(document).on('click keypress', 'a[rel^="vbox"][href*="bcid="]', function(e){
		e.preventDefault();
		if(vda11yClick(event) === true){
			window.bc_loadlightbox(e,this.href);
		}
	});
	window.vidCtl["handler-bcid-vbox-click"] = true;
}
if (!window.vidCtl["handler-ytid-vbox-click"]) {
	jQuery(document).on('click keypress', 'a[rel^="vbox"][href*="ytid="]', function(e){
		e.preventDefault();
		if(vda11yClick(event) === true){
			window.yt_loadlightbox(e,this.href);
		}
	});
	window.vidCtl["handler-ytid-vbox-click"] = true;
}
if (!window.vidCtl["handler-w10close"]) {
	jQuery(document).on('click', '#w10close, .w10w3', function(e){
		e.preventDefault();
		if (jQuery(e.currentTarget).closest(".w10").find(".ytshowembed")[0]) {
			yt_closelightbox();
		} else {
			bc_closelightbox();
		}
	});
	window.vidCtl["handler-w10close"] = true;
}
if (!window.vidCtl["handler-vjs-close-button"]) {
	jQuery(document).on('click', '.vjs-close-button', function(e){
		jQuery('#w10close').removeClass('hidden');
	});
	window.vidCtl["handler-vjs-close-button"] = true;
}
if (!window.vidCtl["handler-vjs-close-button-touchstart"]) {
	jQuery(document).on('touchstart', '.vjs-close-button', function(e){
		jQuery('#w10close').removeClass('hidden');
	});
	window.vidCtl["handler-vjs-close-button-touchstart"] = true;
}
if (!window.vidCtl["handler-vjs-share-control"]) {
	jQuery(document).on('click', 'button.vjs-share-control', function(e){
		$('#w10close').addClass('hidden');
	});
	window.vidCtl["handler-vjs-share-control"] = true;
}
if (!window.vidCtl["handler-vjs-share-control-touchstart"]) {
	jQuery(document).on('touchstart', 'button.vjs-share-control', function(e){
		$('#w10close').addClass('hidden');
	});
	window.vidCtl["handler-vjs-share-control-touchstart"] = true;
}
if (!window.vidCtl["handler-clickvideo"]) {
	jQuery(document).on('click', '.clickvideo', function(e){
		// detect .clickvideo-overlay parent to prevent spawning of additional w10 lightboxes
		if (!$(e.currentTarget).hasClass('clickvideo-overlay')) {
			jQuery(this).find('div.ytthumbnail,a.bclink').click();
		}
	});
	window.vidCtl["handler-clickvideo"] = true;
}

// *******************************************************************************************
// pause all other players
// *******************************************************************************************

// currentVid => string of current video ID value
window.bc_pauseAll = function(currentVid,context){

	if(!context){
		context = jQuery(document);
	}

	if (typeof videojs == 'function'){
		context.find('div.vjs-playing').each(function(){
			if(!jQuery(this).closest('[data-loopvideo="true"]')[0]){
				var oid = jQuery(this).attr('id');
				var vid = videojs(oid);
				if((currentVid && currentVid != oid) || !currentVid){
					try {
						vid.pause();
					}catch(e){
						// maybe it found a flash video not loaded and it freaked out, but lets keep that on the DL
					}
				}
			}
		});
	}
}

// *******************************************************************************************
// get video data for playlist creation
// *******************************************************************************************
// @param {array} videoIds array of video ids
// @return {array} videoData array of video objects

function bc_getdata(vidplayer, videoIds, callback) {
	var i = 0,
	iMax = videoIds.length,
	videoObjectsForReturn =  [];

	getVideo(vidplayer);

	// makes catalog calls for all video ids in the array
	function getVideo(vidplayer) {
		if (i < iMax) {
			vidplayer.catalog.getVideo(videoIds[i], pushData);
		}else{
			callback(videoObjectsForReturn);
		}
	}

	// callback for the catalog calls pushes the returned data object into an array
	// @param {string} error error returned if the call fails
	// @parap {object} video the video object
	function pushData(error, video) {
		videoObjectsForReturn.push(video);
		i++;
		getVideo(vidplayer);
	}
}

// *******************************************************************************************
// load lightbox if URL has bcid value
// *******************************************************************************************
function vd01LoadLightbox() {
	var bcid, loco = document.location.href;
	if(loco.indexOf('bcid=') > -1 || loco.indexOf('playvid=') > -1){
		loco = loco.replace(/['"<>]/gi,'').replace(/playvid/gi,'bcid');
		bcid = loco.split('bcid=')[1].split('&')[0];
		if (document.querySelector("[data-bcid=\"" + bcid + "\"]") || document.querySelector("[rel=\"vbox\"][href*=\"bcid=" + bcid + "\"]")) {
			window.bc_loadlightbox(false, loco);
		}
	}
}
// *******************************************************************************************
// set playlist to autoplay upon click of any item & hide share panel
// *******************************************************************************************
if (!window.vidCtl["handler-vjs-playlist-item"]) {
	jQuery(document).on('click', '.vjs-playlist-item', function(e){

		// hide share panel, since clearly they don't wanna share
		if(jQuery(this).closest('.bcplaylist').find('div.vjs-social-overlay')[0] && !jQuery(this).closest('.bcplaylist').find('div.vjs-social-overlay').hasClass('vjs-hidden')){
			jQuery(this).closest('.bcplaylist').find('div.vjs-social-overlay').addClass('vjs-hidden');
			jQuery(this).closest('.bcplaylist').find('div.vjs-dock-text,div.vjs-dock-shelf').removeClass('vjs-hidden');
			jQuery(this).closest('.bcplaylist').find('div.vjs-controls-disabled').removeClass('vjs-controls-disabled').addClass('vjs-controls-enabled');
		}

		// turn on autoplay for this playlist
		if(jQuery(this).closest('[data-bcobjid]')[0] && !jQuery(this).closest('[data-autoplay]')[0]){

			// get embed div and add autoplay to prevent setting again
			var bcvid = jQuery(this).closest('[data-bcobjid]');
			bcvid.attr('data-autoplay','true');

			// get videojs object and set autplay
			var vid = videojs(bcvid.attr('data-bcobjid'));
			vid.autoplay(true);
		}
	});
	window.vidCtl["handler-vjs-playlist-item"] = true;
}
// *******************************************************************************************
// set share to current playlist video
// *******************************************************************************************

jQuery(document).on('click', '.bcplaylist button.vjs-share-control', function(e){

	var embedDiv = jQuery(this).closest('div.bcplaylist');
	var vid = videojs(embedDiv.data('bcobjid'));
	//console.log(vid.playlistMenu.items[vid.playlist.currentItem()].item.id);
	// set share URL to current page
	var shareURL = document.location.href.replace(/[\?\&]bcid=[\d]+/gi,'').replace(/[\?\&]playerType=[^\&\#]+/gi,'').replace(/\#.*/gi,'').replace(/[\?\&]shareURL=[^\&\#]+/gi,'').replace(/\#.*/gi,'');

	// set to current video in playlist
	shareURL = (shareURL.indexOf('?') > -1) ? shareURL+"&bcid="+vid.catalog.data.videos[vid.playlist.currentItem()].id :  shareURL+"?bcid="+vid.playlistMenu.items[vid.playlist.currentItem()].item.id;

	var shareopts = {
		"url": shareURL,
		"services": setSocialLinks.call(embedDiv)
	};

	// set URL
	vid.social(shareopts);

});

jQuery('button.vjs-share-control').on('touchstart click', function(e) {
  e.preventDefault();
  if(e.type == "touchstart") {
		var embedDiv = jQuery(this).closest('div.bcvideo');
		var vid = videojs(embedDiv.data('bcobjid'));
		var shareopts = {
			"services": setSocialLinks.call(embedDiv)
		};
		// set share links
		vid.social(shareopts);
		jQuery('#w10close').removeClass('hidden');

  } else if(e.type == "click") {
  	var embedDiv = jQuery(this).closest('div.bcvideo');
		var vid = videojs(embedDiv.data('bcobjid'));
		var shareopts = {
			"services": setSocialLinks.call(embedDiv)
		};
		// set share links
		vid.social(shareopts);
		jQuery('#w10close').removeClass('hidden');
  }
});

// OLD
//jQuery(document).on('click', 'button.vjs-share-control', function(e){
//
//	var embedDiv = jQuery(this).closest('div.bcvideo');
//	var vid = videojs(embedDiv.data('bcobjid'));
//
//	var shareopts = {
//		"services": setSocialLinks.call(embedDiv)
//	};
//
//	// set share links
//	vid.social(shareopts);
//
//	jQuery('#w10close').toggleClass('hidden');
//});

function setSocialLinks() {

	var services = {
			"facebook": true,
			"google": true,
			"twitter": true,
			"tumblr": true,
			"pinterest": true,
			"linkedin": true
		},
		serviceArr, service;

	if(this.data('shareonly')) {

		serviceArr = this.data('shareonly').split(',');

		for(service in services) {
			// return boolean whether service is in shareonly list
			services[service] = serviceArr.some(function(s) { return s.toLowerCase() === service; })
		}
	}

	return services;

}

// *******************************************************************************************
// remove right click menus
// *******************************************************************************************
function vd01RemoveRightClickMenu() {
	jQuery("video").bind("contextmenu",function(){
		return false;
	});
}
// *******************************************************************************************
// iframe resize for sandboxed smart players
// *******************************************************************************************
function vd01IframeResize() {
	jQuery('iframe.bciframe').not(".bciframesized").each(function(){
		bciframeResize(jQuery(this));
		jQuery(this).addClass('bciframesized');
	});

	if(jQuery('iframe.bciframe')[0] && !window.vidCtl['handler-bciframe-resize']){
		jQuery(window).on('resize',function() {
			jQuery('iframe.bciframe').each(function(){
				bciframeResize(jQuery(this));
			});
		});
		window.vidCtl['handler-bciframe-resize'] = true;
	}
}

function bciframeResize(iframe){
	iframe.css('height',((iframe.width() * .5625) - 1));
}

// THIS FUNCTION IS FOR AJAX DATA
// when ajax data is returned in jquery all script tags are obliterated when you set that data to a jqeuery object. this function finds all script tags with the embedBrightcove()
// function call in them and converts them to DIVs so you can convert the string to a jquery object, which the js later processes into video objects after it is instered into the page.
function convertBCscripts2div(string){

	// first look for embedBrightcove's with "s in them and make them into ' for use in a the data-embedbc attr
    var re1 = /embedBrightcove\([\S\s]*?\)/g;
    var re2 = /"/ig;
    string = string.replace(re1,
        function(m0, m1){
            return m0.replace(re2, '\'');
        });
	return string.replace(/embedBrightcove\([^)]+,[ ']*([^'),]+)[ ']*\)/gi,'•<div class="bcembed bcvideo" data-bcid="$1"></div>•').replace(/<\/[^>]*script[^>]*>/gi,'°</script>').replace(/(<[^\/>]*script[^>]*>)/gi,'$1°').replace(/<[^\/>]*script[^>]*>°[^°•]+•/gi,'').replace(/<\/div>•[^°]+°<\/[^>]*script[^>]*>/gi,'<\/div>');
}


function vd01GetBreakpoint(single) {
	var selector = single == true ? '.bcvideo[data-bcid]' : '.bcgallery[data-playlistID]';
	return window.getComputedStyle(document.querySelector(selector), ':before').getPropertyValue('content').replace(/\"/g, '');
}

window.VD03 = (function ($) {
	window.vd03player = [];
	
	
	
	var component = {},
		_baseURL = 'https://www.youtube-nocookie.com/embed/',
		_baseThumbUrl = 'https://i.ytimg.com/vi/[YTID]/',
		_defaultThumb = 'hqdefault.jpg',
		_maxThumb = 'maxresdefault.jpg',
		_configs = {},
		_defaults = {
			"autoplay": 0,
			"autocaption": '',
			"end": '',
			"feature": '',
			"loop": 0,
			"modestbranding": 1,
			"list": '',
			"rel": 0,
			"showinfo": '',
			"start": '',
			"ytid": '',
			"thumbq": ''
		},
		_vidObserver,
		/*
		_addThumbButton = function (el) {
			jQuery(el).prepend('<button class="vjs-big-play-button" type="button"></button>');
		},
		*/
		_addThumbButtonWithTracking = function (el) {
			jQuery(el).prepend('<button class="vjs-big-play-button" data-lbl="' + _getTrackingStr(el) + '"' + _getAriaLabel(el) + '></button>');
			jQuery(el).removeAttr("data-lbl");
		},
		

		// used in lightboxed vids		
		_buildHref = function (refType,el) {
	
			// the el object must be used when the lightbox type is specified
			// because the config variable may be stale at the time of invocation
			var href,
				index = jQuery(el).attr("data-index");
			if (refType == "lightbox") {
				if (el !== undefined) {
					href = '?ytid=' + jQuery(el).attr('data-ytid') + '&';
				} else {
					href = '?ytid=' + _configs[index].ytid + '&';
				}
			} else {
				if (el !== undefined) {
					href = _baseURL + jQuery(el).attr('data-ytid') + '?';
				} else {
					href = _baseURL + _configs[index].ytid + '?';
				}
			}
			if (el !== undefined) {

				for (var opt in _defaults) {
					var actualValue = jQuery(el).attr('data-' + opt),
						defaultValue = _defaults[opt];
					if (opt == 'ytid') {continue;}

					if (opt == 'list' && jQuery(el).attr('data-playlist')) {
						href += 'list=' + jQuery(el).attr('data-playlist') + '&';
						continue;
					}

					if (opt == 'autocaption' && actualValue) {
						href += 'cc_lang_pref=' + actualValue + '&cc_load_policy=1&';
					} else if (actualValue === '' || actualValue == null) {
						if (defaultValue === '') {
							continue;
						} else {
							href += opt + '=' + defaultValue + '&';
						}
					} else {
						href += opt + '=' + actualValue + '&';
					}
					//if (opt == 'autoplay') {
						//href += '&mute=1&';
					//}
				}
			} else {
				for (var opt in _configs[index]) {
					if (opt == 'ytid') {continue;}
					if (_configs[index][opt] === '') {continue;}
					if (opt == 'autocaption') {
						if (_configs[index][opt]) {
							href += 'cc_lang_pref=' + _configs[index][opt] + '&cc_load_policy=1&';
						}
						continue;
					}
					href += opt + '=' + _configs[index][opt] + '&';
					if (opt == 'autoplay') {
						//href += '&mute=1&';
					}
				}
			}

			return href; //.replace(/&$/,'');

		},
		_createFrame = function (w, h, el) {
			var newEl = jQuery('<iframe frameborder="0" width="' + w + '" height="' + h + '" allow="autoplay; encrypted-media" allowfullscreen></iframe>'),
				src = _buildHref('',el);
			newEl.addClass("ytembed");
			newEl.attr("src", src);
			return newEl;
		},
		_getNextIndex = function () {
			var collection = document.querySelectorAll("[data-ytid][data-index]"),
				index = -1;
			for (var i = 0; i < collection.length; i++) {
				var f = collection.item(i).getAttribute("data-index");
				if (f && +f > index) {
					index = +f;
				}
			}
			return index + 1;
		},
		_getTrackingStr = function (el) {
			var lbl = $(el).attr("data-lbl"),
				ytid = $(el).attr("data-ytid");
			// check for data-lbl attribute; if it exists, it should have priority
			if (lbl) {
				return lbl;
			} else {
				return "yt-play-" + ytid;
			}
		}
		_getAriaLabel = function (el) {
			var lbl = $(el).attr("aria-label");
			if (lbl) {
				$(el).removeAttr("aria-label");
				return ' aria-label="'+lbl+'"';
			} else {
				return ' aria-label="view the video"';
			}
		}
		_injectThumbnail = function (el) {
			var index = jQuery(el).attr("data-index"),
				newEl = jQuery("<img></img>"),
				thumbQ = $(el).attr("data-thumbq"),
				baseUrl;
			if (thumbQ == "max") {
				baseUrl = _baseThumbUrl + _maxThumb;
			} else {
				baseUrl = _baseThumbUrl + _defaultThumb;
			}
			jQuery(newEl).attr('src', baseUrl.replace("[YTID]", _configs[index].ytid))
			jQuery(el).prepend(newEl);
		},
		_injectVideo = function (el) {
			var meta, newEl, w, h, child, player, playerVars = {}, wrap = jQuery('<div class="ytvideo ytshowembed"><div><div class="ytwrap"></div></div></div>'),
				index = jQuery(el).attr("data-index");
			//transfer index, urlplay from el to new wrapper and flag if ytthumb
			jQuery(wrap).attr("data-index",index);
			if (jQuery(el).attr("data-urlplay")) {
				jQuery(wrap).attr("data-urlplay",jQuery(el).attr("data-urlplay"));
			}
			if (jQuery(el).hasClass("ytthumbnail")) {
				jQuery(wrap).attr("data-ytthumb",1);
			}
			jQuery(el).after(wrap);

			
			//extract modal info if applicable
			meta = jQuery(el).find(".w10meta");
			if (meta.length > 0) {
				jQuery(wrap).append(meta);
			}

			jQuery(el).remove();
			
			// Exclude Yotube iframe api from China(/cn/)
			// if(false){ //<------- THIS LINE FOR TESTING ONLY
			if(window.location.href.includes('/cn/') === false){
				child = jQuery(wrap).find("div.ytwrap");
				Object.keys(_configs[index]).forEach( function(key) {
					if (key == "autocaption") {
						if ($(el).data("autocaption")) {
							playerVars.cc_lang_pref = $(el).data("autocaption");
							playerVars.cc_load_policy = 1;
						}
					} else if (YT_PLAYERVARS.indexOf(key) >= 0) {
						if (_configs[index][key]) {
							playerVars[key] = _configs[index][key];
						}
					}
				});

				playerVars.enablejsapi = true;
				playerVars.ytid = jQuery(el).attr("data-ytid");

				if(jQuery(el).attr("data-playlist")){
					playerVars.list = jQuery(el).attr("data-playlist");
				}

				player = _initYoutubeTracking(child,playerVars); // Youtube Tracking Updated
			} else {
				child = jQuery(wrap).children("div");
				newEl = _createFrame("100%", "100%", el);
				jQuery(child).append(newEl);
			}
		},
		_init = function () {
			var href = window.location.href;
			if (typeof window.vd03ytplayer == "undefined") {
				window.vd03ytplayer = [];
			}
			// prevent URL-launched YT vieo lightboxes and embedded autoplay YT videos from loading at the same time
			if (href.indexOf("ytid=") > -1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches !== false) {
				jQuery("[data-ytid]").not(".ytthumbnail").not(".vd03init").each( function (i, el) {
					if (!$(el).closest("#w10")[0]) {
						$(el).addClass("ytthumbnail");
					}
				});
			}
			if ("IntersectionObserver" in window) {
				if (!_vidObserver) {
					_vidObserver = new IntersectionObserver(function (entries, observer) {
						entries.forEach( function (entry) {
							if (entry.isIntersecting) {
								_loadConfigs(entry.target);
								_injectVideo(entry.target);
								_vidObserver.unobserve(entry.target);
							}
						});
					});
				}
				jQuery("[data-ytid]").not(".ytthumbnail").not(".vd03init").each( function (i, el) {
					//_loadConfigs(el);
					_vidObserver.observe(el);
					jQuery(el).addClass("vd03init");
				});
			} else {
				jQuery("[data-ytid]").not(".ytthumbnail").not(".vd03init").each( function (i, el) {
					_loadConfigs(el);
					_replaceEl(el);
					jQuery(el).addClass("vd03init");
				});

			}
			
			jQuery(".ytthumbnail[data-ytid]").not(".vd03init").each( function (i, el) {
				var meta;
				_loadConfigs(el);
				if (!jQuery(el).find("img")[0]) {
					meta = jQuery(el).find(".w10meta");
					jQuery(el).html(''); // nuke any markup in embed (namley stupid nbsp's)
					if (meta.length > 0) {
						jQuery(el).prepend(meta);
					}
					_injectThumbnail(el);
				}
				_addThumbButtonWithTracking(el);
				_replaceThumbEvent(el);
				jQuery(el).addClass("vd03init");
			});

		},
		/* ************************************************************************
		 * Youtube Adobe and Infinity Tracking - START
		 */
		_initYoutubeTracking = function(child, playerVars) {
			var plr,
				ytid = playerVars.ytid,
				condition = { // look for specific parent nodes immediately because YT API replaces child
					"w10": child.closest("#w10")[0],
					"urlplay": child.closest("[data-urlplay]")[0],
					"ytthumb": child.closest("[data-ytthumb]")[0]
				};
			delete playerVars.ytid;
			function initYoutubeEvents() {
				var player = new YT.Player(child[0], {
					height: "100%",
					width: "100%",
					videoId: ytid,
					playerVars: playerVars,
					events: {
						'onReady': function(event) {
							// For Infinity Tracking
							if(window.ORA && window.ORA.analytics && window.ORA.analytics.plugins && window.ORA.analytics.plugins.yt && window.ORA.analytics.plugins.yt.addPlayer){
								window.ORA.analytics.plugins.yt.addPlayer(event.target);
							}
							// For Adobe Tracking
							if(window.onYTPlayerReady){
								window.onYTPlayerReady(event, player);
							}
							// mute video if autoplay is set so that it passes browser autoplay rules
							if (+playerVars.autoplay == 1) {
//console.log("1. " + Boolean(condition["w10"])) // video not in modal
//console.log("2. " + Boolean(condition["urlplay"])) // video lightbox launched from URL
//console.log("3. " + Boolean(condition["ytthumb"])) // video not embedded with ytthumbnail
/*
Matrix for Muting:
	in modals	urlplay	ytthumbnail	Mute?
desktop embed w/ ytthumbnail	FALSE	FALSE	TRUE	no
small desktop embed w/ ytthumbnail	TRUE	FALSE	TRUE	no
launched from URL	TRUE	TRUE	FALSE	yes
desktop autoplay embed	FALSE	FALSE	FALSE	yes
small desktop autoplay embed	FALSE	FALSE	FALSE	yes
*/
								if (
									(condition["w10"] && condition["urlplay"])
									|| (!condition["w10"] && !condition["urlplay"] && !condition["ytthumb"])
								) {
									event.target.mute();
								}
							}
						},
						'onStateChange': function(data) {
							if(window.onYTPlayerStateChange){
								window.onYTPlayerStateChange(data, player);
							}
						}
					}  
				});
				window.vd03player.push(player);
			}
			if (window.YT) {
				initYoutubeEvents();
			} else {
				_loadIframeApiScript( function(){
					if (typeof YT !== 'undefined'){
						if(YT.loaded) {
							initYoutubeEvents();
						} else {
							YT.ready(function (){ initYoutubeEvents() });
						}
					}else{
						//hacky fix for weird race condition that occurs when two YT embeds (not thumbs) are on a page, no idea how it works, but it does :)
						setTimeout(function() {
							initYoutubeEvents();
						}, 1000);
					}

				});


			}
		},
		/* 
		 * Load  youtube iframe api script
		 */
		_loadIframeApiScript = function (callback) {
			if (window.requirejs) {
				if (require.defined("ytapi")) {
					callback();
				} else {
					window.onYouTubeIframeAPIReady = function () {
						callback();
					}
					require(["ytapi"], function() {
						console.log("Require: Loading YouTube iframe API...")
				    });
				}
			} else {
				if(document.querySelector("script[src*='//www.youtube.com/iframe_api']") || window.YT){
				    callback();
				}else{
				    var tag = document.createElement('script');
				    tag.src = "//www.youtube.com/iframe_api";
				    tag.onload = callback;
				    var firstScriptTag = document.getElementsByTagName('script')[0];
				    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
				}
			}
		},
		/*
		 * Youtube Adobe and Infinity Tracking - END
		 ************************************************************************/
		_loadConfigs = function (el) {
			var index,
				newObj = {};
			//for (var opt in _defaults) {
			//	_configs[opt] = jQuery(el).attr("data-" + opt) ? jQuery(el).attr("data-" + opt) : _defaults[opt];
			//}

			for (var opt in _defaults) {
				newObj[opt] = jQuery(el).attr("data-" + opt) ? jQuery(el).attr("data-" + opt) : _defaults[opt];
			}

			index = _getNextIndex();
			_setIndex(el,index);
			_configs[index] = newObj;
		},
		_replaceEl = function (el) {
			jQuery(el).waypoint(function() {
				_injectVideo(el);
				this.destroy();
			},{offset: '105%'});
		},
		_replaceThumbEvent = function (el) {
			jQuery(el).on("click", function (e) {
				// navtrack ping onclick
				if (typeof navTrack == 'function' && typeof s_setAccount == 'function'){
					var trackas = (jQuery(el).closest('[data-trackas]')[0]) ? jQuery(el).closest('[data-trackas]').attr('data-trackas') : 'yt-video';
					navTrack(s_setAccount()[1],s_setAccount()[2],trackas,'yt-play-'+jQuery(el).attr('data-ytid'));
				}

				var relwidth = (jQuery(window).width() > 1600) ? 1600 : jQuery(window).width(),
					$this = jQuery(e.currentTarget);

				if(($this.outerWidth() >= 600 || $this.outerWidth() > relwidth * .70) && !jQuery(this).closest('.lightboxonly')[0] && !jQuery(this).closest('.clickvideo')[0]) {
					// Inline
					_injectVideo(el);
				} else {
					// Lightbox
					window.yt_loadlightbox(e,_buildHref("lightbox", el));
					e.stopPropagation()
					e.preventDefault();
				}
			});
		},
		_setIndex = function (target, index) {
			target && jQuery(target).attr("data-index",index);
		};
	component.defaults = function () {
		return _defaults;
	}
	component.initialize = function () {
		_init();
	}
	component.execute = function (el) {
		if (jQuery(el).is("[data-ytid]")) {
			_loadConfigs(el);
			_replaceEl(el);
		}
	}
	component.pauseAll = function () {
		// find and pause all youtube video players
		if (typeof window.vd03player == "object" && window.vd03player.length > 0) {
			for (var i = 0; i < window.vd03player.length; i++) {
				if (typeof window.vd03player[i].stopVideo == "function") {
					window.vd03player[i].stopVideo();
				}
			}
		}
	}
	return component;
})(jQuery);
// *******************************************************************************************
// load lightbox if URL has ytid value
// *******************************************************************************************
function vd03LoadLightbox() {
	var ytid, loco = document.location.href;
	if(loco.indexOf('ytid=') > -1){
		loco = loco.replace(/['"<>]/gi,'');
		ytid = loco.split('ytid=')[1].split('&')[0];
		if (document.querySelector("[data-ytid=\"" + ytid + "\"]") || document.querySelector("[rel=\"vbox\"][href*=\"ytid=" + ytid + "\"]")) {
			window.yt_loadlightbox(false, loco);
		}	
	}
}
jQuery(document).ready(function() {
	vd03LoadLightbox();
});
// *******************************************************************************************
// MS Edge full-screen z-index bugfix
// *******************************************************************************************
if ('onwebkitfullscreenchange' in document) {
	if (!window.vidCtl['handler-webkitfullscreenchange']) {
		jQuery(document).on('webkitfullscreenchange', function(e) {
			// store a ref to .bcvideo div parent of the iframe that has gone fullscreen
			// 	if we're exiting fullscreen, document.webkitFullscreenElement is null and we return false
			var el = document.webkitFullscreenElement,
					bcvideo = el &&
										el.parentElement.classList.contains('bcvideo') &&
										el.parentElement;

			return bcvideo &&
							// needs z-index >= U20 nav
							(bcvideo.style.zIndex = 20) &&
							// if in fullscreen, set another once listener for exit to reset z-index
							jQuery(document).one('webkitfullscreenchange', function(e) {
								return (bcvideo.style.zIndex = '');
							});
		});
		window.vidCtl['handler-webkitfullscreenchange'] = true;
	}
	
}

// *******************************************************************************************
// gallery framework functions
// *******************************************************************************************
function vd01loadplayslist(playlistEl,jsonURL){
	return $.ajax({
		headers: { 
			Accept : 'application/json;pk='+bc_config.pk
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Accept', 'application/json;pk='+bc_config.pk);
		},
		url: jsonURL,
		method: 'GET',
		dataType: 'json',
		crossDomain: true,
	});
}
function vd01appendSpeakers(video){
	var speaker_str = '';
	var speakers = (video.hasOwnProperty('custom_fields') && video.custom_fields && video.custom_fields.speakers) ? video.custom_fields.speakers : '';
	if (speakers){
		var speaker_arr = speakers.split(';');
		speaker_str = '<h4>' + speaker_arr[0] + '</h4>';
		var speaker_str2 = '';
		for (var i=1; i< speaker_arr.length; i++){
			var speaker = speaker_arr[i];
			speaker_str2 += '<h4>' + speaker + '</h4>'
		}
		if (speaker_arr.length > 1){
			speaker_str += '<div class="bcfgallery-speakers" data-lsstxt="Show less" style="display: none;" aria-hidden="true" tabindex="-1">' + speaker_str2 + '</div><a class="bcfgallery-showmore icn-img icn-plus-cs" role="button" aria-expanded="false" href="#show">Show all speakers</a>';
		}
	}
	return speaker_str;
}

function vd01appendFulllengthKeynote(video, playlistEl){
	var keynote_str = '';
	var keynote = (video.hasOwnProperty('custom_fields') && video.custom_fields && video.custom_fields.secondary_rel_url) ? video.custom_fields.secondary_rel_url : '';
	if (keynote){
		var keynote_txt = video.custom_fields.secondary_rel_text ? video.custom_fields.secondary_rel_text : 'Watch full-length keynote';
		keynote_str = '<div><a class="icn-img bcfullkeynote" href="?bcid='+keynote+'" role="button" aria-hidden="true" tabindex="-1" rel="vbox" data-lbl="lightbox-open-'+keynote_txt.toLowerCase().replace(/ /g,'-')+'" data-trackas="lightbox">'+keynote_txt+'</a></div>'
	}
	return keynote_str;	
}
function vd01keynoteReader(context) {
	context.find('a.bcfullkeynote').each(function(e){
		var vtitle2 = $(this).parent().siblings('h3').text();
		// console.log(vtitle2);
		$(this).append('<span class="sr-only"> for '+vtitle2+'</span>');
	});
}	
function vd01speakerVis(context) {
	context.on("click keypress","div.bcfgallery-showless, a.bcfgallery-showmore", function(e) {
			e.preventDefault();	
		
		// if(event.type === 'click'){
            	
			var tog   = $(this).closest('div.bcfgallery-title');
			var panel = $(tog).find('div.bcfgallery-speakers');
			var less  = $(tog).find('div.bcfgallery-showless');
			var more  = $(tog).find('a.bcfgallery-showmore');
			
			$(tog).toggleClass('bcfgalleryactive');
		if(vda11yClick(event) === true){
			if($(tog).hasClass('bcfgalleryactive')){
				$(more).hide().attr("aria-hidden", "true");	
				$(less).fadeIn().attr("aria-hidden", "false");
				$(panel).slideDown().attr("aria-hidden", "false").focus();		
			} else {
				$(less).hide().attr("aria-hidden", "true");
				$(more).fadeIn().attr("aria-hidden", "false").focus();	
				$(panel).slideUp().attr("aria-hidden", "true");
			}
		}
	// 	} else if(event.type === 'keypress'){
    //     	// var code = event.charCode || event.keyCode;
    //     	if((event.keyCode === 13) || (event.keyCode  === 32)){
	// 		var tog   = $(this).closest('div.bcfgallery-title');
	// 		var panel = $(tog).find('div.bcfgallery-speakers');
	// 		var less  = $(tog).find('div.bcfgallery-showless');
	// 		var more  = $(tog).find('a.bcfgallery-showmore');
			
	// 		$(tog).toggleClass('bcfgalleryactive');

	// 		if($(tog).hasClass('bcfgalleryactive')){
	// 			$(more).hide().attr("aria-hidden", "true");	
	// 			$(less).fadeIn().attr("aria-hidden", "false");
	// 			$(panel).slideDown().attr("aria-hidden", "false").focus();		
	// 		} else {
	// 			$(less).hide().attr("aria-hidden", "true");
	// 			$(more).fadeIn().attr("aria-hidden", "false").focus();	
	// 			$(panel).slideUp().attr("aria-hidden", "true");
	// 		}
    //     }
    // }
    
	});
}
function vd01injectBtn(context,txtMore) {

	var btn = $('<div class="obttns obttn-center vd01expand"><div><a role="button" tabindex="0">' + txtMore + '</a></div></div>');
	if ($(context).find('.bchidden')[0]) {
		$(context).append(btn);
	}
}
function vd01itemsPer(itemsPer,cols) {
	var breakpoint = vd01GetBreakpoint(),
		itemsPerObj = {};

	if (cols == 3) {
		itemsPerObj = {
			'desktop': itemsPer,
			'tablet': Math.floor(itemsPer * (2/3)),
			'mobile': Math.floor(itemsPer * (1/3)),
		};
	} else {
		itemsPerObj = {
			'desktop': itemsPer,
			'tablet': Math.floor(itemsPer * 0.75),
			'mobile': Math.floor(itemsPer * 0.5),
		};
	}
	return itemsPerObj[breakpoint];
}
function vd01debounce(func, wait, immediate) {
    var timeout, result;
    return function() {
        var context = this, args = arguments, later, callNow;
        later = function() {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
            }
        };
        callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
        }
        return result;
    };
}
function vd01viewMore(context,itemsPer,txtMore,txtLess,cols) {
	var total = $(context).find(".col-item").length;
	$(context).on('click keypress','.vd01expand a', function (e) {
		if(vda11yClick(event) === true){
		var newItemsPer = vd01itemsPer(itemsPer,cols);
		e.preventDefault();
		if ($(context).find('.bchidden')[0]) {
			var firstpanelrevealed = $(context).find('.col-item.bchidden').first();
			$(context).find('.col-item.bchidden').each( function (i, item) {

				if (i < newItemsPer) {
					$(item).removeClass("bchidden");
					$(firstpanelrevealed).find(".col-item-w1 a").focus();
				}
			});
			if (!$(context).find('.bchidden')[0]) {
				$(e.currentTarget).text(txtLess);
			}
			
		} else {
			if ($(context).find('.col-item').length > newItemsPer) {
				vd01viewReset(context,itemsPer,txtMore,txtLess,cols);
				$(e.currentTarget).text(txtMore);			
				$('html, body').animate({
					scrollTop: $(context).offset().top,
				},250,'linear');
			}
		}
	}
	});
}
function vd01viewReset(context,itemsPer,txtMore,txtLess,cols) {
	var total = $(context).find(".col-item").length,
		newItemsPer;
		
	newItemsPer = vd01itemsPer(itemsPer,cols);

	$(context).find(".col-item").each( function (i, item) {
		var firstpanel = $(context).find('.col-item').first();
		if (i >= newItemsPer) {
			$(item).addClass("bchidden");
			$(firstpanel).find(".col-item-w1 a").focus();
		} else {
			$(item).removeClass('bchidden');
		}
	});
	$(context).find(".vd01expand a").text(txtMore);
	if (newItemsPer < total) {
		$(context).find(".vd01expand").show();
	} else {
		$(context).find(".vd01expand").hide();
	}
}
var vd01resize = vd01debounce(function() {
	$(".bcgallery[data-playlistid]").each( function (i,bcpl) {
		var itemsPer = $(bcpl).attr('data-pagesize'),
			txtMore = $(bcpl).attr('data-viewmore'),
			txtLess = $(bcpl).attr('data-viewless'),
			cols;
		if (txtMore && txtLess) {
			if ($(bcpl).find('.col3')[0]) {
				cols = 3;
			} else {
				cols = 4;
			}
			vd01viewReset(bcpl,itemsPer,txtMore,txtLess,cols);
		}
	});
}, 100);

if (jQuery(".bcgallery[data-playlistid]")[0] && !window.vidCtl['handler-bcgallery-resize']) {
	window.addEventListener('resize', vd01resize);
	window.vidCtl['handler-bcgallery-resize'] = true;
}

function w10applyFocusOnElement(container, last) {
	var focusableElements = $(container).find("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"]),iframe");
	// focus on the first element by default
	if (last) {
		if ($(focusableElements[$(focusableElements).length - 1]).is("iframe")) {
			$(focusableElements[$(focusableElements).length - 1]).get(0).contentWindow.focus();
		} else {
			$(focusableElements[$(focusableElements).length - 1]).focus();
		}
	} else {
		if ($(focusableElements[0]).is("iframe")) {
			if ($(container).find(".ytvideo")) {
				// youtube video detected
				$(container).attr("tabindex","-1");
				$(container).focus();
			} else {
				$(focusableElements[0]).get(0).contentWindow.focus();
			}
		} else {
			$(focusableElements[0]).focus();
		}
		//$(focusableElements[0]).focus();
	}
}
function w10AriaHidePage(unhide) {
	if (unhide) {
		$("#w10").siblings().each( function (i,sib) {
			if ($(sib).attr("data-aria-hidden")) {
				// restore pre-existing value
				$(sib).attr("aria-hidden",$(sib).attr("data-aria-hidden"));
			} else {
				$(sib).removeAttr("aria-hidden");
			}
		});
	} else {
		$("#w10").siblings().each( function (i,sib) {
			if ($(sib).attr("aria-hidden") && !$(sib).attr("data-aria-hidden")) {
				// save pre-existing value
				$(sib).attr("data-aria-hidden",$(sib).attr("aria-hidden"));
			}
			$(sib).attr("aria-hidden","true");
		});
	}
}
function w10trapFocusInContainer(container, e) {
	var focusableElements, elActive, elFirst, elLast;
	if ($(container).find("iframe")[0]) {
		focusableElements = $(container).find("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"]), iframe").filter(":visible");
	} else {
		focusableElements = $(container).find("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])").filter(":visible");
	}
	elActive = document.activeElement;
	elFirst = focusableElements[0];
	elLast = focusableElements[focusableElements.length - 1];

	if ((e.key == "Tab" || e.keyCode == 9) && ($(container).find("video")[0] || $(container).closest(".w10yt")[0])) {
		if (e.shiftKey) {
			if ($(elActive)[0] == $(elFirst)[0] || $(elActive)[0] == $("#w10 .w10initfocus")[0]) {
				e.preventDefault();
				if ($(elLast).is("iframe")) {
					$(elLast).get(0).contentWindow.focus();
				} else {
					$(elLast).focus();
				}
			}
		} else {
			if ($(elActive)[0] == $(elLast)[0]) {
				e.preventDefault();
				if ($(elFirst).is("iframe")) {
					$(elFirst).get(0).contentWindow.focus();
				} else {
					$(elFirst).focus();
				}
				//$(elFirst).focus();
			}
		}
	}
}

if (!window.vidCtl["remove-rt-click-menus"]) {
	jQuery(document).ready(function() {
		vd01RemoveRightClickMenu();
	});
	window.vidCtl["remove-rt-click-menus"] = true;
}
if (typeof OCOM == "object") {
	OCOM.register(corevideo, true);
} else {
	$(document).one('OCOMReady', function() {
		OCOM.register(corevideo, true);
    });
}
/* NOTE:
 * 6/29/2022: the Eloqua team invokes corevideo() in external, non-WS code.
 * Their current use case is to call corevideo after asynchronously injecting video markup.
 * Do not change without sending word through the appropriate channels.
 * 7/12/2022: the Engineered Selling team invokes corevideo() in external, non-WS code.
 */
function corevideo() {
	vd01Initialize();
	vd01LoadLightbox();
	vd01IframeResize();
	VD03.initialize();
}

/**
 *
 * Version: 2.0.4
 * Author: Gianluca Guarini
 * Contact: gianluca.guarini@gmail.com
 * Website: http://www.gianlucaguarini.com/
 * Twitter: @gianlucaguarini
 *
 * Copyright (c) Gianluca Guarini
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/
 
!function(doc,win){if("function"!=typeof doc.createEvent)return!1;var pointerId,currX,currY,cachedX,cachedY,timestamp,target,dblTapTimer,longtapTimer,pointerEvent=function(type){var lo=type.toLowerCase(),ms="MS"+type;return navigator.msPointerEnabled?ms:!!window.PointerEvent&&lo},touchEvent=function(name){return"on"+name in window&&name},defaults={useJquery:!win.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:win.SWIPE_THRESHOLD||100,tapThreshold:win.TAP_THRESHOLD||150,dbltapThreshold:win.DBL_TAP_THRESHOLD||200,longtapThreshold:win.LONG_TAP_THRESHOLD||1e3,tapPrecision:win.TAP_PRECISION/2||30,justTouchEvents:win.JUST_ON_TOUCH_DEVICES},wasTouch=!1,touchevents={touchstart:touchEvent("touchstart")||pointerEvent("PointerDown"),touchend:touchEvent("touchend")||pointerEvent("PointerUp"),touchmove:touchEvent("touchmove")||pointerEvent("PointerMove")},isTheSameFingerId=function(e){return!e.pointerId||void 0===pointerId||e.pointerId===pointerId},setListener=function(elm,events,callback){for(var eventsArray=events.split(" "),i=eventsArray.length;i--;)elm.addEventListener(eventsArray[i],callback,!1)},getPointerEvent=function(event){return event.targetTouches?event.targetTouches[0]:event},getTimestamp=function(){return(new Date).getTime()},sendEvent=function(elm,eventName,originalEvent,data){var customEvent=doc.createEvent("Event");if(customEvent.originalEvent=originalEvent,data=data||{},data.x=currX,data.y=currY,data.distance=data.distance,defaults.useJquery&&(customEvent=jQuery.Event(eventName,{originalEvent:originalEvent}),jQuery(elm).trigger(customEvent,data)),customEvent.initEvent){for(var key in data)customEvent[key]=data[key];customEvent.initEvent(eventName,!0,!0),elm.dispatchEvent(customEvent)}for(;elm;)elm["on"+eventName]&&elm["on"+eventName](customEvent),elm=elm.parentNode},onTouchStart=function(e){if(isTheSameFingerId(e)&&(pointerId=e.pointerId,"mousedown"!==e.type&&(wasTouch=!0),"mousedown"!==e.type||!wasTouch)){var pointer=getPointerEvent(e);cachedX=currX=pointer.pageX,cachedY=currY=pointer.pageY,longtapTimer=setTimeout(function(){sendEvent(e.target,"longtap",e),target=e.target},defaults.longtapThreshold),timestamp=getTimestamp(),tapNum++}},onTouchEnd=function(e){if(isTheSameFingerId(e)){if(pointerId=void 0,"mouseup"===e.type&&wasTouch)return void(wasTouch=!1);var eventsArr=[],now=getTimestamp(),deltaY=cachedY-currY,deltaX=cachedX-currX;if(clearTimeout(dblTapTimer),clearTimeout(longtapTimer),deltaX<=-defaults.swipeThreshold&&eventsArr.push("swiperight"),deltaX>=defaults.swipeThreshold&&eventsArr.push("swipeleft"),deltaY<=-defaults.swipeThreshold&&eventsArr.push("swipedown"),deltaY>=defaults.swipeThreshold&&eventsArr.push("swipeup"),eventsArr.length){for(var i=0;i<eventsArr.length;i++){var eventName=eventsArr[i];sendEvent(e.target,eventName,e,{distance:{x:Math.abs(deltaX),y:Math.abs(deltaY)}})}tapNum=0}else cachedX>=currX-defaults.tapPrecision&&cachedX<=currX+defaults.tapPrecision&&cachedY>=currY-defaults.tapPrecision&&cachedY<=currY+defaults.tapPrecision&&timestamp+defaults.tapThreshold-now>=0&&(sendEvent(e.target,tapNum>=2&&target===e.target?"dbltap":"tap",e),target=e.target),dblTapTimer=setTimeout(function(){tapNum=0},defaults.dbltapThreshold)}},onTouchMove=function(e){if(isTheSameFingerId(e)&&("mousemove"!==e.type||!wasTouch)){var pointer=getPointerEvent(e);currX=pointer.pageX,currY=pointer.pageY}},tapNum=0;setListener(doc,touchevents.touchstart+(defaults.justTouchEvents?"":" mousedown"),onTouchStart),setListener(doc,touchevents.touchend+(defaults.justTouchEvents?"":" mouseup"),onTouchEnd),setListener(doc,touchevents.touchmove+(defaults.justTouchEvents?"":" mousemove"),onTouchMove),win.tocca=function(options){for(var opt in options)defaults[opt]=options[opt];return defaults}}(document,window);



/* CORE - CLICKFOCUS */

$(document).on('blur','.o-hf',function(){
	$(this).removeClass('o-hf');
});

$(document).on('mousedown touchstart','a,button,span[tabindex],li[tabindex],div[tabindex]',function(){
	$(this).addClass('o-hf');
});


/*! CORE FORMS */

jQuery(document).ready(function($) {
	'use strict';
	return 'OCOM' in window ?
		OCOM.register(oform, true)
		: $(document).one('OCOMReady', function() {
			OCOM.register(oform, true);
		});

	function oform($) {

		var rwform = false;
		if ( $('body').is('.f20, .f11v6, .f11v7') || $('div').is('.w11w1') ) {
			rwform = true;
		}

		$('.oform').each(function() {

			if($(this).closest('.w11content').length == 0){ // skip processing if contained in a w11 since it will get processed when lightboxed

				var $form = $(this),
						oreqtxt = $form.attr('data-reqtxt') || 'Required';
				// Default message is empty / not shown - must be specified at the element level

				//This class limits height of text areas and adds a custom -webkit-resizer. Firefox currently doesn't let you hide their version so we removed this
				//if (rwform) {
					//$form.addClass('rw-oform');
				//}

				// set flag if html5 validation exist
				this.html5form = ('reportValidity' in document.createElement('form')) ? true : false;

				// set patterns for a few types
				$form.find('input[type=email]').not('[pattern]').each(function() {
					$form.attr('pattern', '[^@ ]+@[^@ ]+');
				});

				$form.find('input[type=number]').not('[pattern]').each(function() {
					$form.attr('pattern', '[0-9]+');
				});

				$form.find('input[type=tel]').not('[pattern]').each(function() {
					$form.attr('pattern', '[0-9\\+\\-\\(\\)\\. ]+');
				});

				$form.find('input, textarea, select').each(function() {

					var $input = $(this),
							nowraps = 'textarea,[type="checkbox"],[type="radio"],[type="hidden"]',
							date = '[type="date"]',
							chkorrad = '[type="checkbox"],[type="radio"]',
							oclearInput = '[type="text"],[type="tel"],[type="email"]',
							$label = $input.closest('.oform').find('label[for="' + $input.attr('name') + '"]'),
							reqmsg = '',
							ptnmsg = '';

					// because safari is really stoopid about baseline alignment
					//  with empty inputs  (https://bugs.webkit.org/show_bug.cgi?id=142968),
					//  we put a space char in the placeholder so it doesn't fuck the label
					if (!$input.attr('placeholder')) {
						$input.attr('placeholder', ' ');
					}

					// wrap all inputs in spans for flex handling
					$input.wrap(function() {
						return ($input.is('select') && !$input.closest('.oselect').length && '<span class="oselect"></span>') ||
							(!$input.is(nowraps) && !$input.closest('.oinput').length && '<span class="oinput"></span>');
					});

					// wrap input + label in span.oform-w1 for styling
					if ($input.is('select')) {
						$label.addClass('oselect-lbl');

						if (!$input.closest(".oform-w1")[0]) {
							$input.closest('.oselect').add($label).wrapAll('<span class="oform-w1"></span>');
						}
						// checkbox, radio
					} else if ($input.is(chkorrad)) {
						if ($input.closest('ul').is('.oagree')) {
							// need to mark each li for required validation
							$input.closest('li').addClass('oform-w1');
						} else {
							// part of a checkbox group, so one checked will be valid
							$input.closest('ul').addClass('oform-w1');
						}
						// don't wrap hidden inputs
					} else if (!$input.closest('.oform-w1').length && !$input.is('[type="hidden"]')) {
						$input.closest('.oselect, .oinput').add($input.filter(nowraps)).add($label).wrapAll('<span class="oform-w1"></span>');
					} else {
						$label.prependTo($input.closest('.oform-w1'));
					}

					// add otextarea class for required styling
					if ($input.is('textarea')) {
						//See Line 23
						//if (rwform) {
						//	$( '<div class="rw-tah"></div>' ).insertAfter($input);
						//}
						$input.closest('.oform-w1').addClass('otextarea');
					}

					if ((!$input.is(chkorrad)) && !$input.is('[type="hidden"]')) {
						if($input.val()){
							oformValidation($(this).closest('.oform')[0], this);
						}
					}

					if (($input.is(chkorrad) && $input.is(':checked'))) {
						oformValidation($(this).closest('.oform')[0], this);
					}

					// add required flag to labels
					if ($input.is('[required]')) {
						$input.closest('.oform-w1').addClass('oreq');
						$label.attr('data-reqtxt', oreqtxt);
						reqmsg = $input.attr('data-reqmsg') || $label.attr('data-reqmsg') || '';
						reqmsg = reqmsg.length ? '<div class="oform-bbl oform-bblerr">' + reqmsg + '</div>' : '';
						if (reqmsg && rwform) {
							$label.addClass('hasOreq');
						}
					}

					if ($input.is('[pattern]')) {
						ptnmsg = $input.attr('title') || '';
						ptnmsg = ptnmsg.length ? '<div class="oform-bbl oform-bblmis">' + ptnmsg + '</div>' : '';
						//Seth Removed
						//ptnmsg = ptnmsg.length ? $label.addClass('hasOreq') : '';
						if (rwform) {
							//$label.addClass('hasOreq');
						}
					}

					// wrap label text in span for flex handling
					if (!$input.is(chkorrad)) {
						if (ptnmsg) {
							$label.addClass('hasOreq')
						}
						$label.wrapInner('<span class="oform-lbl"></span>').append(reqmsg).append(ptnmsg);
					} else {
						// only add one, and only to first label if part of a group
						if (!$label.closest('ul').find('.oform-bbl').length) {
							$label.first().append(reqmsg);
						}
						// on checkboxes and radios, insert empty span for fake input styling
						$input.after('<span class="obox"></span>');
					}

					if ($input.is(date)) {
						$(this).closest('.oform-w1').addClass('odate');
					}

					// ++++++++++++++++++++++++++++
					// input event listeners
					// ++++++++++++++++++++++++++++

					// on input kill valid/error/mismatch, re-evaluate on blur
					$input.on('focus input change', function(e) {
						$(this).closest('.oform-w1')
							.removeClass('ovalid oerror omismatch')
							.addClass(function() { return e.type === 'focus' && 'ofocus'; });

						// if dependent select, fire that function
						if ($(this).is('.odepselect') && e.type === 'change') {
							onDepSelectChanged.call(this);
						}

						// Adds Clear Icon to rwform
						var oclearParent = $input.parent();
						if ($input.val() && $input.val().length > 0 && $input.is(oclearInput) && rwform) {
							if (oclearParent.find('a.oclear').length == 0) {
								if ( $('body').is('.f11v6') ) {
									var clearIcn = 'icn-plus-cf';
								}
								else {
									var clearIcn = 'icn-close-circle-s';
								}
								var fieldName = oclearParent.prevAll("label").find('.oform-lbl')[0]?.innerText || '';
								if (fieldName !== '' && fieldName !== undefined) {
									oclearParent.append( '<a href="#" class="oclear '+clearIcn+'" role="button" aria-label="Clear '+fieldName+'"></a>' );	
								}
								else {
									oclearParent.append( '<a href="#" class="oclear '+clearIcn+'" role="button" aria-label="Clear field"></a>' );
								}
							}
							if (oclearParent.find('a.oclear').hasClass('hide')) {
								oclearParent.find('a.oclear').removeClass('hide');
							}
						}
						else if ($input.val() && $input.val().length == 0 && $input.is(oclearInput) && rwform) {
							oclearParent.find('a.oclear').addClass('hide');
						}
					});

					// test form element on blur
					$input.on('blur', function() {
						$(this).closest('.oform-w1').removeClass('ofocus');
						oformValidation($(this).closest('.oform')[0], this);
					});

					// test select on change
					if ($input.is('select')) {
						$input.on('change', function() {
							oformValidation($(this).closest('.oform')[0], this);
						});
					}

					// set/unset active class for animation on checkbox / radio
					if ($input.is(chkorrad)) {
						//$input.next('.obox').on('animationend', $input.removeClass.bind($input, 'active'));
						//$input.add($input.closest('label')).add($input.next('.obox'))
						//	.on('touchstart mousedown change', $input.addClass.bind($input, 'active'));

						$input.next('.obox').on('animationend', function () {
							$input.removeClass('active');
						});
						$input.add($input.closest('label')).add($input.next('.obox')).on('touchstart mousedown change', function () {
							$input.addClass('active');
						});
					}

					// if this is a depselect, trigger the dependent content
					// in case it was autocompleted on page refresh
					if ($input.is('.odepselect') &&
							($input.is(chkorrad) ? $input.is(':checked') : $input.val().length)) {
						$input.trigger('change');
					}

				});

				$form.find('.icn-help').each(function() {
					var $help = $(this);
					var $helplabel = $(this).closest('label');
					$help.appendTo($helplabel);
				});

				// turn of html5 validation becuase some browsers still suck, we're gonna do this the old school javascript way bro!
				$form.find('input[type=submit], button').attr('formnovalidate', '');

				// initialize once all wrappers, elements are in place
				$form.addClass('oform-initialized');

				// ++++++++++++++++++++++++++++
				// form event listeners
				// ++++++++++++++++++++++++++++

				$form.on('submit', function() {
					return oformValidation(this);
				});
			}

		});

		$('.oinput').on('click keydown', 'a.oclear', function(e){
			//clear form using keyboard actions
			if ((e.type && e.type === "keydown" && (e.code === "Enter" || e.code == "Space")) || e.type == "click"){
				var $thatInput = $(e.target).siblings('input');
				$thatInput.val('');
				$(e.target).addClass('hide');
				$thatInput.focus();
				 e.preventDefault();
			}
		});

		// dependent select handler
		function onDepSelectChanged(e) {

			var input = this,
					val = new RegExp(input.value),
					isChkOrRad = $(input).is('[type="checkbox"],[type="radio"]');

			$('[data-depsfor="' + this.name + '"]')
				.find('[data-showfor]')
				.each(function() {
					var flag = val.test($(this).data('showfor'));
					flag = isChkOrRad ? flag && $(input).is(':checked') : flag;
					$(this)
						.toggle(flag)
						.find('input').prop({
							required: flag,
							disabled: !flag
						});
				});
		}

		// validation function
		function oformValidation(theform, theinput) {

			// ++++++++++++++++++++++++++++
			// validation sub functions
			// ++++++++++++++++++++++++++++

			// error class handling
			var flagError = function(obj, eclass) {
				return $(obj).closest('.oform-w1').removeClass('ovalid oerror omismatch').addClass(eclass);
			};

			// validate input
			var validateTextInput = function(obj) {

				// reset to valid
				$(obj).attr('aria-invalid',false);

				var tempID = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
				
				// strip trailing whitespace
				var cval = obj.value.replace(/[ \t]+$/, '');
				obj.value = cval;
				
				// verify the pattern
				var thepattern = '^' + $(obj).attr('pattern') + '$';

				// if required check if value exist, if not mark as error and bail
				if (!cval.length && $(obj).is('[required]')) {
					$(obj).attr('aria-invalid',true);
					$(obj).parent().prev('label').find('.oform-bbl').attr('id',tempID);
					$(obj).attr('aria-describedby',tempID);
					return flagError(obj, 'oerror');
				}

				//  if pattern is required, and no match, mark as mismatch
				if ($(obj).is('[pattern]') && cval.length && !cval.match(thepattern)) {
					$(obj).attr('aria-invalid',true);
					$(obj).parent().prev('label').find('.oform-bbl').attr('id',tempID);
					$(obj).attr('aria-describedby',tempID);
					return flagError(obj, 'omismatch');
				}

				return cval.length && flagError(obj, 'ovalid');

			};

			// validate textarea

			// validate select
			var validateSelect = function(obj) {
				return (obj.value.length && flagError(obj, 'ovalid')) ||
					(!obj.value.length && $(obj).is('[required]') && flagError(obj, 'oerror'));
			};

			// validate checkbox/radio
			var validateCheckRadio = function(obj) {
				// if this is a list of agreements, all that are required need to be checked
				// else make sure at least one input in group is checked, eg. if radio
				return ($(obj).is('[required]') && $(obj).closest('.oform-w1').find(':checked').length > 0) && flagError(obj, 'ovalid') ||
					(!$(obj).is('[required]') && flagError(obj, 'ovalid')) ||
					flagError(obj, 'oerror');
			};

			// ++++++++++++++++++++++++++++
			// form validation
			// ++++++++++++++++++++++++++++

			// clear errors classes
			if (!theinput) {
				$(theform).find('.oerror, .omismatch').removeClass('oerror omismatch');
			}

			// check form data
			$(theform).find('input, textarea, select').each(function() {

				if (!theinput || this == theinput) {

					switch (this.tagName.toLowerCase()) {

						case 'input':

							// text input
							if (/text|email|password|number|date|tel/.test($(this).attr('type'))) {
								validateTextInput(this);
								// checkbox, radio
							} else if (/checkbox|radio/.test($(this).attr('type'))) {
								validateCheckRadio(this);
							}
							break;

							// textarea
						case 'textarea':
							validateTextInput(this);
							break;

							// select
						case 'select':
							validateSelect(this);
							break;

						default:
							break;
					}
				}
			});

			// if submitting the form, return true or fasle
			if (!theinput) {
				// if error still exist scroll to first one and return false
				if ($(theform).find('.oerror')[0] || $(theform).find('.omismatch')[0]) {

					// if not in an iframe scroll to the element -- when in an iframe it can scroll an otherwise unscrollable iframe and crop off content
					if (window.location === window.parent.location) {
						// scroll to first error element
						$('html,body').animate({ scrollTop: $(theform).find('.oerror,.omismatch').first().offset().top - 150 });
						// set focus to first field with error
						$(theform).find('.oerror,.omismatch').find('[type!=hidden]').first().focus();
					}

					// stop sumbit
					return false;

					// else submit the form
				} else {
					return true;
				}
			}
			
		}
	}
});



/*! PRISMJS 1.24.1 */

// initialize manual implementation to prevent auto-highlight
window.Prism = { manual: true };

/* https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+java+markup-templating+jsx+sql */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,e={},M={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof W?new W(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function t(e,r){var a,n;switch(r=r||{},M.util.type(e)){case"Object":if(n=M.util.objId(e),r[n])return r[n];for(var i in a={},r[n]=a,e)e.hasOwnProperty(i)&&(a[i]=t(e[i],r));return a;case"Array":return n=M.util.objId(e),r[n]?r[n]:(a=[],r[n]=a,e.forEach(function(e,n){a[n]=t(e,r)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==n)return t[r]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function(e,n){var t=M.util.clone(M.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(t,e,n,r){var a=(r=r||M.languages)[t],i={};for(var l in a)if(a.hasOwnProperty(l)){if(l==e)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);n.hasOwnProperty(l)||(i[l]=a[l])}var s=r[t];return r[t]=i,M.languages.DFS(M.languages,function(e,n){n===s&&e!=t&&(this[e]=i)}),i},DFS:function e(n,t,r,a){a=a||{};var i=M.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],r||l);var o=n[l],s=M.util.type(o);"Object"!==s||a[i(o)]?"Array"!==s||a[i(o)]||(a[i(o)]=!0,e(o,t,l,a)):(a[i(o)]=!0,e(o,t,null,a))}}},plugins:{},highlightAll:function(e,n){M.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};M.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),M.hooks.run("before-all-elements-highlight",r);for(var a,i=0;a=r.elements[i++];)M.highlightElement(a,!0===n,r.callback)},highlightElement:function(e,n,t){var r=M.util.getLanguage(e),a=M.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var i=e.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var l={element:e,language:r,grammar:a,code:e.textContent};function o(e){l.highlightedCode=e,M.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,M.hooks.run("after-highlight",l),M.hooks.run("complete",l),t&&t.call(l.element)}if(M.hooks.run("before-sanity-check",l),(i=l.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!l.code)return M.hooks.run("complete",l),void(t&&t.call(l.element));if(M.hooks.run("before-highlight",l),l.grammar)if(n&&u.Worker){var s=new Worker(M.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(M.highlight(l.code,l.grammar,l.language));else o(M.util.encode(l.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};return M.hooks.run("before-tokenize",r),r.tokens=M.tokenize(r.code,r.grammar),M.hooks.run("after-tokenize",r),W.stringify(M.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new i;return I(a,a.head,e),function e(n,t,r,a,i,l){for(var o in r)if(r.hasOwnProperty(o)&&r[o]){var s=r[o];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(l&&l.cause==o+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}for(var v=c.pattern||c,m=a.next,y=i;m!==t.tail&&!(l&&y>=l.reach);y+=m.value.length,m=m.next){var b=m.value;if(t.length>n.length)return;if(!(b instanceof W)){var k,x=1;if(h){if(!(k=z(v,y,n,f)))break;var w=k.index,A=k.index+k[0].length,P=y;for(P+=m.value.length;P<=w;)m=m.next,P+=m.value.length;if(P-=m.value.length,y=P,m.value instanceof W)continue;for(var E=m;E!==t.tail&&(P<A||"string"==typeof E.value);E=E.next)x++,P+=E.value.length;x--,b=n.slice(y,P),k.index-=y}else if(!(k=z(v,0,b,f)))continue;var w=k.index,S=k[0],O=b.slice(0,w),L=b.slice(w+S.length),N=y+b.length;l&&N>l.reach&&(l.reach=N);var j=m.prev;O&&(j=I(t,j,O),y+=O.length),q(t,j,x);var C=new W(o,g?M.tokenize(S,g):S,d,S);if(m=I(t,j,C),L&&I(t,m,L),1<x){var _={cause:o+","+u,reach:N};e(n,t,r,m.prev,y,_),l&&_.reach>l.reach&&(l.reach=_.reach)}}}}}}(e,a,n,a.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=M.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=M.hooks.all[e];if(t&&t.length)for(var r,a=0;r=t[a++];)r(n)}},Token:W};function W(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function z(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function I(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function q(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;(n.next=r).prev=n,e.length-=a}if(u.Prism=M,W.stringify=function n(e,t){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach(function(e){r+=n(e,t)}),r}var a={type:e.type,content:n(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(a.classes,i):a.classes.push(i)),M.hooks.run("wrap",a);var l="";for(var o in a.attributes)l+=" "+o+'="'+(a.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+l+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(M.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),t=n.language,r=n.code,a=n.immediateClose;u.postMessage(M.highlight(r,M.languages[t],t)),a&&u.close()},!1)),M;var t=M.util.currentScript();function r(){M.manual||M.highlightAll()}if(t&&(M.filename=t.src,t.hasAttribute("data-manual")&&(M.manual=!0)),!M.manual){var a=document.readyState;"loading"===a||"interactive"===a&&t&&t.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return M}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?\]\]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;
!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n="(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",a={pattern:RegExp(n+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{"class-name":[a,{pattern:RegExp(n+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),lookbehind:!0,inside:a.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":a,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism);
!function(h){function v(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(h.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,r,e,o){if(a.language===r){var c=a.tokenStack=[];a.code=a.code.replace(e,function(e){if("function"==typeof o&&!o(e))return e;for(var n,t=c.length;-1!==a.code.indexOf(n=v(r,t));)++t;return c[t]=e,n}),a.grammar=h.languages.markup}}},tokenizePlaceholders:{value:function(p,k){if(p.language===k&&p.tokenStack){p.grammar=h.languages[k];var m=0,d=Object.keys(p.tokenStack);!function e(n){for(var t=0;t<n.length&&!(m>=d.length);t++){var a=n[t];if("string"==typeof a||a.content&&"string"==typeof a.content){var r=d[m],o=p.tokenStack[r],c="string"==typeof a?a:a.content,i=v(k,r),u=c.indexOf(i);if(-1<u){++m;var g=c.substring(0,u),l=new h.Token(k,h.tokenize(o,p.grammar),"language-"+k,o),s=c.substring(u+i.length),f=[];g&&f.push.apply(f,e([g])),f.push(l),s&&f.push.apply(f,e([s])),"string"==typeof a?n.splice.apply(n,[t,1].concat(f)):a.content=f}}else a.content&&e(a.content)}return n}(p.tokens)}}}})}(Prism);
!function(i){var t=i.util.clone(i.languages.javascript),e="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function n(t,n){return t=t.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return e}),RegExp(t,n)}e=n(e).source,i.languages.jsx=i.languages.extend("markup",t),i.languages.jsx.tag.pattern=n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),i.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,i.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,i.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,i.languages.jsx.tag.inside.comment=t.comment,i.languages.insertBefore("inside","attr-name",{spread:{pattern:n("<SPREAD>"),inside:i.languages.jsx}},i.languages.jsx.tag),i.languages.insertBefore("inside","special-attr",{script:{pattern:n("=<BRACES>"),inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:i.languages.jsx},alias:"language-javascript"}},i.languages.jsx.tag);var o=function(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(o).join(""):""},r=function(t){for(var n=[],e=0;e<t.length;e++){var a=t[e],s=!1;if("string"!=typeof a&&("tag"===a.type&&a.content[0]&&"tag"===a.content[0].type?"</"===a.content[0].content[0].content?0<n.length&&n[n.length-1].tagName===o(a.content[0].content[1])&&n.pop():"/>"===a.content[a.content.length-1].content||n.push({tagName:o(a.content[0].content[1]),openedBraces:0}):0<n.length&&"punctuation"===a.type&&"{"===a.content?n[n.length-1].openedBraces++:0<n.length&&0<n[n.length-1].openedBraces&&"punctuation"===a.type&&"}"===a.content?n[n.length-1].openedBraces--:s=!0),(s||"string"==typeof a)&&0<n.length&&0===n[n.length-1].openedBraces){var g=o(a);e<t.length-1&&("string"==typeof t[e+1]||"plain-text"===t[e+1].type)&&(g+=o(t[e+1]),t.splice(e+1,1)),0<e&&("string"==typeof t[e-1]||"plain-text"===t[e-1].type)&&(g=o(t[e-1])+g,t.splice(e-1,1),e--),t[e]=new i.Token("plain-text",g,null,g)}a.content&&"string"!=typeof a.content&&r(a.content)}};i.hooks.add("after-tokenize",function(t){"jsx"!==t.language&&"tsx"!==t.language||r(t.tokens)})}(Prism);
Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};


// ORACLE UTILITIES
/*! ORACLE - TRUSTE */

var oracle = oracle || {};
oracle.truste =  {};
oracle.truste.api =  {};

(function() {
    var trusteCookieName = "notice_preferences";
    var trustarcGdprCookieName = "notice_gdpr_prefs";
    var trusteStorageItemName = "truste.eu.cookie.notice_preferences";
    var trustarcGdprStorageItemName = "truste.eu.cookie.notice_gdpr_prefs";

    this.getCookieName = function() {
      return trusteCookieName;
    };
    this.getStorageItemName = function() {
      return trusteStorageItemName;
    };
    this.getGdprCookieName = function() {
      return trustarcGdprCookieName;
    };
    this.getGdprStorageItemName = function() {
      return trustarcGdprStorageItemName;
    };
}).apply(oracle.truste);

// inject new behaviour into the api namespace
// which we defined via the truste module
(function(){
  var trusteCommon = oracle.truste;

  function getCookie(cookieKey) {
    var name = cookieKey + "=";
    var cookieArray = document.cookie.split(';');
    for(var i=0; i<cookieArray.length; i++) {
        var c = cookieArray[i];
        while (c.charAt(0)==' ')
          c = c.substring(1);
        if (c.indexOf(name) == 0)
          return c.substring(name.length, c.length);
    }
    return null;
  };

  function getLocalStorageItem(storageKey){
    //Check if local storage is supported
    if(typeof(Storage) !== "undefined") {
      // Read the value from the local storage
      return localStorage.getItem(storageKey);
    }
    return null;
  };

  function getTRUSTeLocalStorageValue(storageKey){
    var value = getLocalStorageItem(storageKey);
    if(value != null)
    {
      var obj = JSON.parse(value);
      return obj.value;
    }
    return null;
  };

  //Get Cookie value for Truste
  this.getConsentCode = function(){

    var value = getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName()) ||
                  getCookie(trusteCommon.getCookieName());

    if(value == null) {
      return -1;
    } else {
      return parseInt(value) + 1;
    }

  };

  //Get Cookie value for Truste
  this.getGdprConsentCode = function(){

    var value = getTRUSTeLocalStorageValue(trusteCommon.getGdprStorageItemName()) ||
                  getCookie(trusteCommon.getGdprCookieName());

    if(value == null) {
      return -1;
    } else {
      var temp = new Array();
      temp = value.split(",");
      for (a in temp ) {
    temp[a] = parseInt(temp[a], 10) + 1;
      }
      return temp.toString();
    }

  };

  //Get Cookie value and Source for Truste
  this.getConsentDecision = function(){

    var value = this.getConsentCode();

    if(value == -1) {
      var text = '{"consentDecision": 0, "source": "implied"}';
      return JSON.parse(text);
    } else {
      var text = '{"consentDecision": ' +
      parseInt(value) +
      ', "source": "asserted"}';
      return JSON.parse(text);
    }

  }

  //Get Cookie value and Source for Truste
  this.getGdprConsentDecision = function(){

    var value = this.getGdprConsentCode();

    if(value == -1) {
      var text = '{"consentDecision": [0], "source": "implied"}';
      return JSON.parse(text);
    } else {
      var text = '{"consentDecision": [' +
      value +
      '], "source": "asserted"}';
      return JSON.parse(text);
    }

  }

}).apply(oracle.truste.api);


/*! ORACLE - PROFILE V2 */
var USER = new getUserInfo();

// EXISTSUCMCOOKIE
function existsUCMCookie(s){
	if (s == "ORA_UCM_INFO"){
		if ((ORA_UCM_INFO.version != null) && (ORA_UCM_INFO.guid != null) && (ORA_UCM_INFO.username != null)){
			return true;
		}
	}
	return false;
}

// ISUCMREGISTERED
function isUCMRegistered(){
	if (existsUCMCookie("ORA_UCM_INFO") == true){
		orainfo_exists = true;
		otnnm_exists = true;
		return true;
    }
	return false;
}

// ISUCMANONYMOUS
function isUCMAnonymous(){
	if ((ORA_UCM_INFO.version != null) && (ORA_UCM_INFO.guid != null) && (isUCMRegistered() == false)){
		return true;
	}else{
		return false;
	}
}

// GETUCMCOOKIES
function getUCMCookies(){
	ORA_UCM_INFO = new private_ORA_UCM_INFO();
}

// GETUSERINFO
function getUserInfo(){
	var USER = new Object();
	this.value_enc  = getCookieData("ORA_UCM_INFO");
	this.array      = this.value_enc.split("~");
	USER.version    = this.array[0];
	USER.guid       = this.array[1];
	USER.firstname  = this.array[2];
	USER.lastname   = this.array[3];
	USER.username   = this.array[4];
	return USER;
}

// INVALIDATEAUTHCOOKIE
function invalidateAuthCookie(){
    var oraSSOauthHint = getCookieData("ORASSO_AUTH_HINT");
    if (oraSSOauthHint != null){
		var cookie_invalid_str = "ORASSO_AUTH_HINT=INVALID; Max-Age=0; domain=.oracle.com; path=/;";
		document.cookie = cookie_invalid_str;
    }
}

// SSO_SIGN_OUT
function sso_sign_out(){
	var rUrl = escape(window.location.href.replace(/^http:/gi,'https:'));
	if ((rUrl.indexOf('\/secure') != -1)){
		//Added by Seth 11/7/19
		if (window.location.href.indexOf("/opn/") > -1) {
			rUrl = 'https://www.oracle.com/opn/';
		}
		else {
			rUrl = 'https://www.oracle.com/partners/';
		}
	}
	invalidateAuthCookie();
	if (window.location.host.indexOf("-stage") > -1){
		window.location="https://login-stage.oracle.com/sso/logout?p_done_url="+rUrl;
	}else{
		window.location="https://login.oracle.com/sso/logout?p_done_url="+rUrl;
	}
}

// PRIVATE_UCMCOOKIEDECODE
function private_UCMCookieDecode(value){
	var asciiArray = " !\"#$&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~.";
	var urldecodevalue = unescape(value);
	var ucmdecodevalue = '';
	var ch = '';
	for (i=0; i<urldecodevalue.length; i++){
		ch = urldecodevalue.charAt(i)
		j = asciiArray.indexOf(ch);
		if (j != -1){
			j +=2;
			if(j > ( asciiArray.length - 1)){
				j -= asciiArray.length;
			}
			ucmdecodevalue += asciiArray.charAt(j);
		}else{
			ucmdecodevalue += ch;
		}
	}
	return ucmdecodevalue;
}

// PRIVATE_ORA_UCM_INFO
function private_ORA_UCM_INFO(){
	this.value_enc  = getCookieData("ORA_UCM_INFO");
	this.array      = this.value_enc.split("~");
	this.version    = this.array[0];
	this.guid       = this.array[1];
	this.firstname  = this.array[2];
	this.lastname   = this.array[3];
	this.username   = this.array[4];
	var newCookie   = ["3", this.guid, this.firstname, this.lastname, this.username ];
	var cookieData  = newCookie.join("~");
}


/*! ORACLE - TRACKING URL */
jQuery(document).ready(function(){
	
	// check data atrributes data-cxdtrack="source" data-adbtrack="intcmp"
	jQuery("a[data-cxdtrack],a[data-adbtrack]").each( function() {
		
		var trkurl = "";
		var trklocale = ( $('meta[name=siteid]').attr("content") != "us" ) ? "_"+$('meta[name=siteid]').attr("content") : "";
		var trkhref = jQuery(this).attr('href');
		var trktype = (trkhref.indexOf('go.oracle.com') != -1) ? "src1" : "source";
		var trkjoin = (trkhref.indexOf('?') != -1) ? "&" : "?";
				
		if ( jQuery(this).attr('data-cxdtrack') && trkhref.indexOf(trktype+'=') == -1 ) { trkurl = trktype+"="+jQuery(this).attr('data-cxdtrack')+trklocale; }
		if ( jQuery(this).attr('data-adbtrack') && trkhref.indexOf('intcmp=') == -1 ) { (trkurl == "") ? trkurl="intcmp="+jQuery(this).attr('data-adbtrack')+trklocale : trkurl+="&intcmp="+jQuery(this).attr('data-adbtrack')+trklocale }
		
		jQuery(this).attr('href', trkhref+trkjoin+trkurl);
		
	});
	
	

		var sourceStrTest = getUrlVars()["source"];
		var sourceStr = "";
		if (sourceStrTest != undefined) {sourceStr = sourceStrTest;}
		
		if (sourceStr != "") {
			jQuery(document).on('mousedown', 'a:not([href^="#"])', function (e) {
				var cLink = jQuery(this).attr('href');
				var searchSourceStr = sourceStr.split('+')[0];
				if (cLink == undefined || cLink.indexOf('source=' + searchSourceStr) != -1 || cLink.indexOf('src1=' + searchSourceStr) != -1 || cLink.indexOf('sourceType=' + searchSourceStr) != -1 || cLink.indexOf('elqSignOut') != -1 || cLink.indexOf('learn.oracle.com') != -1 || cLink.indexOf('eeho.fa.us2.oraclecloud.com') != -1) {
					return true;
				}

				var vars = {}, hash;
				var ua = cLink.split("?");
				var base_url = "";
				var nexturl_found = 0;
				var eloquaform_link = false;
				do {
					base_url += ua.shift() + "?";
				} while (ua.length > 1);
				var qs = ua.shift();
				var type = (cLink.indexOf('go.oracle.com') != -1) ? "src1" : "source";
				type = (cLink.indexOf('myservices.us.oraclecloud.com') != -1 || cLink.indexOf('signup-stage.oraclecloud.com') != -1 || cLink.indexOf('signup.oraclecloud.com') != -1 || cLink.indexOf('signup.cloud.oracle.com') != -1 || cLink.indexOf('signup-miglab.oraclecloud.com') != -1) ? "sourceType" : type;
				
				qs2 = (qs == undefined) ? [] : qs.split('&');
				for (var i = 0; i < qs2.length; i++) {
					hash = qs2[i].split('=');
					vars[hash[0]] = hash[1];
				}

				vars[type] = (vars[type] == undefined) ? sourceStr : sourceStr.split('+')[0].split('%2B')[0] + '%2B' + vars[type];
				qsSource = base_url;
				jQuery.each(vars, function (key, value) {	
					if (key != type) {
						qsSource += key + "=" + value;
						if (key == "nexturl") {
							nexturl_found = 1;
							qsSource += "?" + type + "=" + vars[type];
						}
						if (key == "iframe") {
							eloquaform_link = true;
						}
						qsSource += "&";
					}
				});
				if (nexturl_found == 0) {
					qsSource += type + "=" + vars[type] + "&";
				}
				qsSource = qsSource.slice(0, -1);
				if (eloquaform_link) {
					var url_params = "";
					jQuery.each( getUrlVars(), function(key, value) { 
						if(value != "source"){
							url_params += "&" + value + (getUrlVars()[value] ? "=" + getUrlVars()[value] : "")
						}
					});
					qsSource += url_params;
					eloquaform_link = false;
				}
				
				jQuery(this).attr('href', qsSource);
			});
		}	
});


/*! ORACLE - TRACKING EXPLORER  */

var oracleTrackingExplorer = (function () {
    'use strict';
    var app = {},
    	anchors,
    	aLength,
    	codes = {
    		"M0101": ["uk"],
			"M0202": ["de"],
			"M0303": ["fr"],
			"M0404": ["it"],
			"M0505": ["es"],
			"M5501": ["ca-en"],
			"M5503": ["ca-fr"],
			"M0701": ["ie"],
			"M0801": ["za"],
			"M0902": ["at"],
			"M1002": ["ch-de"],
			"M1003": ["ch-fr"],
			"M1101": ["ae"],
			"M1106": ["ae-ar"],
			"M1201": ["sa"],
			"M1206": ["sa-ar"],
			"M1301": ["se"],
			"M1401": ["be"],
			"M1403": ["be-fr"],
			"M1407": ["be-nl"],
			"M1501": ["no"],
			"M1601": ["fi"],
			"M1720": ["dk"],
			"M1801": ["middleeast","om","qa","ye"],
			"M1806": ["middleeast-ar","om-ar","qa-ar","ye-ar"],
			"M1901": ["il-en"],
			"M1906": ["il"],
			"M2009": ["ru"],
			"M2110": ["tr"],
			"M2207": ["nl"],
			"M2319": ["cz"],
			"M2408": ["pl"],
			"M2601": ["iq","jo","kw","lb"],
			"M2606": ["iq-ar","jo-ar","kw-ar","lb-ar"],
			"M2701": ["eg"],
			"M2706": ["eg-ar"],
			"M2801": ["au"],
			"M2901": ["nz"],
			"M3001": ["asiasouth","id"],
			"M3101": ["in"],
			"M3201": ["hk"],
			"M3311": ["jp"],
			"M3412": ["tw"],
			"M3514": ["kr"],
			"M3613": ["cn"],
			"M3701": ["apac","bd","vn"],
			"M3901": ["bz"],
			"M3905": ["bo","ec","gt","hn","lad","pa","pr","py","uy"],
			"M4015": ["br"],
			"M4105": ["pe"],
			"M4205": ["ve"],
			"M4305": ["ar"],
			"M4401": ["ba","bg","cy","ee","emea","hr"],
			"M4505": ["mx"],
			"M4605": ["co"],
			"M4705": ["cl"],
			"M4805": ["cr"],
			"M5001": ["sg"],
			"M5101": ["africa","bh","ke"],
			"M5103": ["africa-fr"],
			"M5106": ["bh-ar"],
			"M5601": ["bn"],
			"M5701": ["bt"],
			"M5806": ["dz"],
			"M5901": ["gh"],
			"M6001": ["kh"],
			"M6101": ["la"],
			"M6201": ["lk"],
			"M6324": ["lt"],
			"M6425": ["lu"],
			"M6526": ["lv"],
			"M6606": ["ma"],
			"M6727": ["md"],
			"M6828": ["me"],
			"M6929": ["mn"],
			"M7030": ["mt"],
			"M7101": ["mv"],
			//"M7232": ["my"],
			"M7201": ["my"],
			"M7301": ["ng"],
			"M7405": ["ni"],
			"M7501": ["np"],
			"M7601": ["ph"],
			"M7701": ["pk"],
			"M7816": ["pt"],
			"M7936": ["ro"],
			"M8037": ["rs"],
			"M8138": ["si"],
			"M8239": ["sk"],
			"M8303": ["sn"],
			"M8401": ["th"],
			"M8541": ["ua"]
    	},
    	converted = 0,
    	defaultCode = "M0601",
    	href,
    	keys = Object.keys(codes),
    	kLength = keys.length,
    	pattern = /_M\d{4}_/g,
    	replacement,
    	siteid = document.querySelector("meta[name=\"siteid\"]") ? document.querySelector("meta[name=\"siteid\"]").getAttribute("content") : false;
/*    var _interceptClick = function (e) {
    	console.log("click")
    	var href,
    		matches,
    		target = e.target || e.srcElement;
	    if (target.tagName === 'A') {
	        href = target.getAttribute('href');
	        matches = href.match(pattern);
	        if (matches.length) {
				//e.preventDefault();
				for (var i = 0; i < kLength; i++) {
					if (codes[keys[i]].indexOf(siteid) >= 0) {
						target.setAttribute("href",href.replaceAll(pattern, "_" + keys[i] + "_"));
						break;
					}
				}
	        }
	    }
    }*/
//    app.localizeClick = function () {
//    	document.addEventListener("click",_interceptClick);
//    }
	app.localize = function () {
		anchors = document.querySelectorAll("a[href*=\"source=:\"]");
    	aLength = anchors.length;
	    if (aLength > 0) {
	    	// find a match
	    	for (var i = 0; i < kLength; i++) {
	    		if (codes[keys[i]].indexOf(siteid) >= 0) {
					for (var j = 0; j < aLength; j++) {
			    		href = anchors.item(j).getAttribute("href");
			    		anchors.item(j).setAttribute("href",href.replaceAll(pattern, "_" + keys[i] + "_"));
			    		converted += 1;
			    	}
			    	break;
	    		} 
	    	}
	    	if (!converted) {
    			for (var j = 0; j < aLength; j++) {
		    		href = anchors.item(j).getAttribute("href");
		    		anchors.item(j).setAttribute("href",href.replace(pattern, "_" + defaultCode + "_"));
		    	}
	    	}
	    }
	}
	app.initialize = function () {
		// do not pass go without siteid
		if (siteid) {
			if (document.readyState == "complete" || document.readyState == "interactive") {
				app.localize();
			} else {
				document.addEventListener("readystatechange", function (e) {
					if (document.readyState == "complete" || document.readyState == "interactive") {
						app.localize();
					}
				});
			}
		}
		//app.localizeClick();
    }
    return app;
})();
oracleTrackingExplorer.initialize();

// A11y FOR ICN-IMG Divs
/*! GENERIC-ICN-DIV-A11Y */

jQuery(document).ready(function($) {
	'use strict';

	$('section').not('.cb79, .cc05, .cw67, .rc27').each(function(n) {

		$(this).find('div.icn-img:not([aria-label])').each(function() {

			$(this).filter(function() {
			  return this.className.split(' ').filter(function(e) {
			    return e.indexOf('icn-') == 0;
			  }).length >= 2;
			}).attr("aria-hidden","true");
		});
		
		$('div.rc35icon.rc35-svg').attr("aria-hidden","true");	
		
	});
	$('div.cb79w3').attr("aria-hidden","true");
	$('div.cc05w5 .icn-img.icn-circle').attr("aria-hidden","true");	
});


// COMPONENTS
/*! U28 */

// ready function
function ready(fn) {
	if (document.readyState !== 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

/**
 *  fetch http data
 * @param url {String}
 * @returns {Promise<unknown>}
 */
const fetchData = (url) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		// Setup our listener to process completed requests
		xhr.onload = function () {
			// Process our return data
			if (xhr.status >= 200 && xhr.status < 300) {
				// What do when the request is successful
				resolve(xhr.response)
			} else {
				// What do when the request fails
				//console.log('The request failed!');
				reject('something went wrong')
			}
			// Code that should run regardless of the request status
			//console.log('This always runs...');
		};
		// Create and send a GET request
		// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
		// The second argument is the endpoint URL
		xhr.open('GET', url);
		xhr.send();
	})
}
/**
 *  show element with duration
 * @param target {HTMLElement}
 * @param duration {Number}
 */
const slideDown = (target, duration = 500) => {
	//target.style.removeProperty('display');
	let { display } = window.getComputedStyle(target);
	if (display === 'none') {
		display = 'block';
	}
	target.style.display = display;
	const height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	// eslint-disable-next-line no-unused-expressions
	target.offsetHeight;
	target.style.boxSizing = 'border-box';
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = `${duration}ms`;
	target.style.height = `${height}px`;
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
};

/**
 *  hide element with duration
 * @param target {HTMLElement}
 * @param duration {Number}
 */
const slideUp = (target, duration = 500) => {
	target.style.display = 'block';
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = `${duration}ms`;
	target.style.boxSizing = 'border-box';
	target.style.height = `${target.offsetHeight}px`;
	// eslint-disable-next-line no-unused-expressions
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
};

/**
 *  Toggle element with duration
 * @param target {HTMLElement}
 * @param duration {Number}
 */
const slideToggle = function (target, duration = 500) {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
}

/**
 *  get outerWidth
 * @param el {HTMLElement}
 */
const outerWidth = (el) =>{
	let width = el.offsetWidth;
	const style = getComputedStyle(el);

	width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	return width;
}

/**
 *  next siblings elements with filter
 * @param el {HTMLElement}
 * @param filter {function}
 */
function getNextSiblings(el, filter) {
	var siblings = [];
	while (el= el.nextSibling) { if (!filter || filter(el)) siblings.push(el); }
	return siblings;
}

/**
 *  previous siblings elements with filter
 * @param el {HTMLElement}
 * @param filter {function}
 */
function getPreviousSiblings(el, filter) {
	var siblings = [];
	while (el = el.previousSibling) { if (!filter || filter(el)) siblings.push(el); }
	return siblings;
}

/**
 * // get Index
 * @param el {HTMLElement}
 * @returns {number}
 */
function getIndex(el) {
	if (!el) return -1;
	var i = 0;
	do {
		i++;
	} while (el = el.previousElementSibling);
	return i;
}

var NE = function (parameter, context) {
	if (!(this instanceof NE)) {
		return new NE(parameter, context);
	}

	// No need to further processing it if it's already an instance
	if (parameter instanceof NE) {
		return parameter;
	}

	// Parse it as a CSS selector if it's a string
	if (typeof parameter === 'string') {
		parameter = this.select(parameter, context);
	}

	// If we're referring a specific node as in on('click', function(){ NE(this) })
	// or the select() function returned a single node such as in '#id'
	if (parameter && parameter.nodeName) {
		parameter = [parameter];
	}

	// Convert to an array, since there are many 'array-like' stuff in js-land
	this.nodes = this.slice(parameter);
};

NE.prototype = {
	get length () {
		return this.nodes.length;
	}
};

NE.prototype.nodes = [];

// Add class(es) to the matched nodes
NE.prototype.addClass = function () {
	return this.eacharg(arguments, function (el, name) {
		el.classList.add(name);
	});
};

// [INTERNAL USE ONLY]
// Add text in the specified position. It is used by other functions
NE.prototype.adjacent = function (html, data, callback) {
	if (typeof data === 'number') {
		if (data === 0) {
			data = [];
		} else {
			data = new Array(data).join().split(',').map(Number.call, Number);
		}
	}

	// Loop through all the nodes. It cannot reuse the eacharg() since the data
	// we want to do it once even if there's no "data" and we accept a selector
	return this.each(function (node, j) {
		var fragment = document.createDocumentFragment();

		// Allow for data to be falsy and still loop once
		NE(data || {}).map(function (el, i) {
			// Allow for callbacks that accept some data
			var part = (typeof html === 'function') ? html.call(this, el, i, node, j) : html;
			if (typeof part === 'string') {
				return this.generate(part);
			}
			return NE(part);
		}).each(function (n) {
			this.isInPage(n)
				? fragment.appendChild(NE(n).clone().first())
				: fragment.appendChild(n);
		});
		callback.call(this, node, fragment);
	});
};

// Add some html as a sibling after each of the matched elements.
NE.prototype.after = function (html, data) {
	return this.adjacent(html, data, function (node, fragment) {
		node.parentNode.insertBefore(fragment, node.nextSibling);
	});
};

// Add some html as a child at the end of each of the matched elements.
NE.prototype.append = function (html, data) {
	return this.adjacent(html, data, function (node, fragment) {
		node.appendChild(fragment);
	});
};

// [INTERNAL USE ONLY]
NE.prototype.args = function (args, node, i) {
	if (typeof args === 'function') {
		args = args(node, i);
	}

	if (typeof args !== 'string') {
		args = this.slice(args).map(this.str(node, i));
	}

	// Then convert that string to an array of not-null strings
	return args.toString().split(/[\s,]+/).filter(function (e) {
		return e.length;
	});
};

// Merge all of the nodes that the callback return into a simple array
NE.prototype.array = function (callback) {
	callback = callback;
	var self = this;
	return this.nodes.reduce(function (list, node, i) {
		var val;
		if (callback) {
			val = callback.call(self, node, i);
			if (!val) val = false;
			if (typeof val === 'string') val = NE(val);
			if (val instanceof NE) val = val.nodes;
		} else {
			val = node.innerHTML;
		}
		return list.concat(val !== false ? val : []);
	}, []);
};

// [INTERNAL USE ONLY]
// Handle attributes for the matched elements
NE.prototype.attr = function (name, value, data) {
	data = data ? 'data-' : '';
	// This will handle those elements that can accept a pair with these footprints:
	// .attr('a'), .attr('a', 'b'), .attr({ a: 'b' })
	return this.pairs(name, value, function (node, name) {
		return node.getAttribute(data + name);
	}, function (node, name, value) {
		node.setAttribute(data + name, value);
	});
};

// Add some html before each of the matched elements.
NE.prototype.before = function (html, data) {
	return this.adjacent(html, data, function (node, fragment) {
		node.parentNode.insertBefore(fragment, node);
	});
};

// Get the direct children of all of the nodes with an optional filter
NE.prototype.children = function (selector) {
	return this.map(function (node) {
		return this.slice(node.children);
	}).filter(selector);
};

/**
 * Deep clone a DOM node and its descendants.
 * @return {[Object]}         Returns instance.
 */
NE.prototype.clone = function () {
	return this.map(function (node, i) {
		var clone = node.cloneNode(true);
		return clone;
	});
};

// Find the first ancestor that matches the selector for each node
NE.prototype.closest = function (selector) {
	return this.map(function (node) {
		// Keep going up and up on the tree. First element is also checked
		do {
			if (NE(node).is(selector)) {
				return node;
			}
		} while ((node = node.parentNode) && node !== document);
	});
};

// Handle data-* attributes for the matched elements
NE.prototype.data = function (name, value) {
	return this.attr(name, value, true);
};
NE.prototype.last = function (name, value) {
	var node =  this.nodes[this.nodes.length -1]
	return NE(node);
};

// Loops through every node from the current call
NE.prototype.each = function (callback) {
	// By doing callback.call we allow "this" to be the context for
	this.nodes.forEach(callback.bind(this));
	return this;
};

// [INTERNAL USE ONLY]
// Loop through the combination of every node and every argument passed
NE.prototype.eacharg = function (args, callback) {
	return this.each(function (node, i) {
		this.args(args, node, i).forEach(function (arg) {
			// Perform the callback for this node
			callback.call(this, node, arg);
		}, this);
	});
};

// .filter(selector)
// Delete all of the nodes that don't pass the selector
NE.prototype.filter = function (selector) {
	// The default function if it's a CSS selector
	// Cannot change name to 'selector' since it'd mess with it inside this fn
	var callback = function (node) {
		// Make it compatible with some other browsers
		node.matches = node.matches || node.msMatchesSelector || node.webkitMatchesSelector;
		// Check if it's the same element (or any element if no selector was passed)
		return node.matches(selector || '*');
	};
	// filter() receives a function as in .filter(e => NE(e).children().length)
	if (typeof selector === 'function') callback = selector;
	// filter() receives an instance of
	if (selector instanceof NE) {
		callback = function (node) {
			return (selector.nodes).indexOf(node) !== -1;
		};
	}
	// Just a native filtering function for ultra-speed
	return NE(this.nodes.filter(callback));
};

// Find all the nodes children of the current ones matched by a selector
NE.prototype.find = function (selector) {
	return this.map(function (node) {
		return NE(selector || '*', node);
	});
};

// Get the first of the nodes
NE.prototype.first = function () {
	return this.nodes[0] || false;
};

// [INTERNAL USE ONLY]
// Generate a fragment of HTML. This irons out the inconsistences
NE.prototype.generate = function (html) {
	// Table elements need to be child of <table> for some f***ed up reason
	if (/^\s*<tr[> ]/.test(html)) {
		return NE(document.createElement('table')).html(html).children().children().nodes;
	} else if (/^\s*<t(h|d)[> ]/.test(html)) {
		return NE(document.createElement('table')).html(html).children().children().children().nodes;
	} else if (/^\s*</.test(html)) {
		return NE(document.createElement('div')).html(html).children().nodes;
	} else {
		return document.createTextNode(html);
	}
};

// Change the default event for the callback. Simple decorator to preventDefault
NE.prototype.handle = function () {
	var args = this.slice(arguments).map(function (arg) {
		if (typeof arg === 'function') {
			return function (e) {
				e.preventDefault();
				arg.apply(this, arguments);
			};
		}
		return arg;
	}, this);
	return this.on.apply(this, args);
};

// Find out whether the matched elements have a class or not
NE.prototype.hasClass = function () {
	// Check if any of them has all of the classes
	return this.is('.' + this.args(arguments).join('.'));
};

// Set or retrieve the html from the matched node(s)
NE.prototype.html = function (text) {
	// Needs to check undefined as it might be ""
	if (text === undefined) {
		return this.first().innerHTML || '';
	}

	// If we're attempting to set some text
	// Loop through all the nodes
	return this.each(function (node) {
		// Set the inner html to the node
		node.innerHTML = text;
	});
};

// Check whether any of the nodes matches the selector
NE.prototype.is = function (selector) {
	return this.filter(selector).length > 0;
};

/**
 * @param  {[Object]}  node DOM node
 * @return {Boolean}        The Node.contains() method returns a Boolean value indicating whether a node is a descendant of a given node or not.
 */
NE.prototype.isInPage = function isInPage (node) {
	return (node === document.body) ? false : document.body.contains(node);
};

// Get the last of the nodes
NE.prototype.last = function () {
	return this.nodes[this.length - 1] || false;
};

// Merge all of the nodes that the callback returns
NE.prototype.map = function (callback) {
	return callback ? NE(this.array(callback)).unique() : this;
};

// Delete all of the nodes that equals the filter
NE.prototype.not = function (filter) {
	return this.filter(function (node) {
		return !NE(node).is(filter || true);
	});
};

// Attach a callback to the specified events
NE.prototype.on = function (events, cb, cb2) {
	var sel = null;
	var orig_callback = cb;
	if (typeof cb === 'string') {
		sel = cb;
		orig_callback = cb2;
		cb = function (e) {
			const args = arguments;
			let targetFound = false;
			NE(e.currentTarget)
				.find(sel)
				.each(function (target) {
					if (target === e.target || target.contains(e.target)) {
						targetFound = true;
						try {
							Object.defineProperty(e, 'currentTarget', {
								get: function () {
									return target;
								}
							});
						} catch (err) { }
						cb2.apply(target, args);
					}
				});
			// due to e.currentEvent reassigning a second (or subsequent) handler may
			// not be fired for a single event, so chekc and apply if needed.
			if (!targetFound && e.currentTarget === e.target) {
				cb2.apply(e.target, args);
			}
		};
	}

	// Add the custom data as arguments to the callback
	const callback = function (e) {
		return cb.apply(this, [e].concat(e.detail || []));
	};

	return this.eacharg(events, function (node, event) {
		node.addEventListener(event, callback);
		// Store it so we can dereference it with `.off()` later on
		node._e = node._e || {};
		node._e[event] = node._e[event] || [];
		node._e[event].push({
			callback: callback,
			orig_callback: orig_callback,
			selector: sel
		});
	});
};

NE.prototype.off = function (events, cb, cb2) {
	const cb_filter_off = (cb == null && cb2 == null);
	let sel = null;
	let cb_to_be_removed = cb;
	if (typeof cb === 'string') {
		sel = cb;
		cb_to_be_removed = cb2;
	}

	return this.eacharg(events, function (node, event) {
		NE(node._e ? node._e[event] : []).each(function (ref) {
			if (cb_filter_off || (ref.orig_callback === cb_to_be_removed && ref.selector === sel)) {
				node.removeEventListener(event, ref.callback);
			}
		});
	});
};


// [INTERNAL USE ONLY]

// Take the arguments and a couple of callback to handle the getter/setter pairs
NE.prototype.pairs = function (name, value, get, set) {
	// Convert it into a plain object if it is not
	if (typeof value !== 'undefined') {
		var nm = name;
		name = {};
		name[nm] = value;
	}
	if (typeof name === 'object') {
		// Set the value of each one, for each of the { prop: value } pairs
		return this.each(function (node) {
			for (var key in name) {
				set(node, key, name[key]);
			}
		});
	}
	// Return the style of the first one
	return this.length ? get(this.first(), name) : '';
};

// Travel the matched elements one node up
NE.prototype.parent = function (selector) {
	return this.map(function (node) {
		return node.parentNode;
	}).filter(selector);
};

// Add nodes at the beginning of each node
NE.prototype.prepend = function (html, data) {
	return this.adjacent(html, data, function (node, fragment) {
		node.insertBefore(fragment, node.firstChild);
	});
};

// Delete the matched nodes from the DOM
NE.prototype.remove = function () {
	// Loop through all the nodes
	return this.each(function (node) {
		// Perform the removal only if the node has a parent
		if (node.parentNode) {
			node.parentNode.removeChild(node);
		}
	});
};

// Removes a class from all of the matched nodes
NE.prototype.removeClass = function () {
	// Loop the combination of each node with each argument
	return this.eacharg(arguments, function (el, name) {
		// Remove the class using the native method
		el.classList.remove(name);
	});
};

// Replace the matched elements with the passed argument.
NE.prototype.replace = function (html, data) {
	var nodes = [];
	this.adjacent(html, data, function (node, fragment) {
		nodes = nodes.concat(this.slice(fragment.children));
		node.parentNode.replaceChild(fragment, node);
	});
	return NE(nodes);
};

// [INTERNAL USE ONLY]
// Select the adecuate part from the context
NE.prototype.select = function (parameter, context) {
	// Allow for spaces before or after
	parameter = parameter.replace(/^\s*/, '').replace(/\s*$/, '');
	if (/^</.test(parameter)) {
		return NE().generate(parameter);
	}
	return (context || document).querySelectorAll(parameter);
};

// Travel the matched elements at the same level
NE.prototype.siblings = function (selector) {
	return this.parent().children(selector).not(this);
};// Travel the matched elements at the same level

NE.prototype.next = function (selector) {
	let sibling = this.nodes[0].nextElementSibling;
	// If there's no selector, return the first sibling
	if (!selector) return sibling;
	// If the sibling matches our selector, use it
	// If not, jump to the next sibling and continue the loop
	while (sibling) {
		if (sibling.matches(selector)) return NE(sibling);
		sibling = sibling.nextElementSibling;
	}
};

// [INTERNAL USE ONLY]
// Force it to be an array AND also it clones them
NE.prototype.slice = function (pseudo) {
	// Check that it's not a valid object
	if (!pseudo ||
		pseudo.length === 0 ||
		typeof pseudo === 'string' ||
		pseudo.toString() === '[object Function]') return [];
	// Accept also a NE() object (that has .nodes)
	return pseudo.length ? [].slice.call(pseudo.nodes || pseudo) : [pseudo];
};


// [INTERNAL USE ONLY]
// Create a string from different things
NE.prototype.str = function (node, i) {
	return function (arg) {
		// Call the function with the corresponding nodes
		if (typeof arg === 'function') {
			return arg.call(this, node, i);
		}
		// From an array or other 'weird' things
		return arg.toString();
	};
};

// Set or retrieve the text content from the matched node(s)
NE.prototype.text = function (text) {
	// Needs to check undefined as it might be ""
	if (text === undefined) {
		return this.first().textContent || '';
	}
	// If we're attempting to set some text
	// Loop through all the nodes
	return this.each(function (node) {
		// Set the text content to the node
		node.textContent = text;
	});
};

// Activate/deactivate classes in the elements
NE.prototype.toggleClass = function (classes, addOrRemove) {
	// Check if addOrRemove was passed as a boolean
	if (!!addOrRemove === addOrRemove) {
		return this[addOrRemove ? 'addClass' : 'removeClass'](classes);
	}
	// Loop through all the nodes and classes combinations
	return this.eacharg(classes, function (el, name) {
		el.classList.toggle(name);
	});
};

// [INTERNAL USE ONLY]

// Removed duplicated nodes, used for some specific methods
NE.prototype.unique = function () {
	return NE(this.nodes.reduce(function (clean, node) {
		var istruthy = node !== null && node !== undefined && node !== false;
		return (istruthy && clean.indexOf(node) === -1) ? clean.concat(node) : clean;
	}, []));
};

/////////////////////////////////////////////////////////////////////////////
/*! U28 */
ready(function() {
	if(NE('.u28').nodes.length > 0){
		var v1check = false
		document.querySelector(".u28").classList.add("ws-sticky");
		if(NE('.u28v1').nodes.length > 0){
			v1check = true;
		}
		var u28 = NE('#u28');
		u28rtl = u28.closest('.rtl').nodes[0] ? true : false;

		var u28skip2 = document.getElementById("u28skip2content");
		if(u28skip2){
			document.body.prepend(NE('#u28skip2content').clone().nodes[0]);
			NE('.u28 #u28skip2content').remove();

			NE('#u28skip2c').on("click", function(e) {
				u28focusnext();
				e.preventDefault();
			});

			NE('#u28skip2c').on('keydown', function(e) {
				if (e.keyCode === 13) {
					u28focusnext();
					e.preventDefault();
				}
			});
		}



		function u28focusnext(){
			if (u28.next('section').find('a').first()){
				u28.next('section').find('a').first().focus();
			}
			else if (u28.next('nav').find('a').first()){
				u28.next('nav').find('a').first().focus();
			}
			else {
				document.querySelector('#maincontent').focus();
			}
		}

		//Cheack if on staging
		var u28staging = false,
			w_url = window.location.href;
		if (w_url.indexOf('www-stage') > -1 || w_url.indexOf('www-portal-stage') > -1 || w_url.indexOf('www.stage') > -1 || w_url.indexOf('www-sites') > -1) {
			var u28staging = true;
		}

		var u28developer = false;
		var u28developermenu = false;
		if (w_url.indexOf('developer.oracle') > -1) {u28developer = true;}
		if (NE('.u28dev').nodes.length> 0) {u28developermenu = true;}

		function u28mobileCheck() {
			u28mobile = '';
			var ele = document.querySelector('.u28ham');
			var state = getComputedStyle(ele);
			if (state.display === "flex") {
				u28mobile = true;
			}
			if (state.display === "none") {
				u28mobile = false;
			}
		}

		u28mobileCheck();

		// V1 Equal Height
		function u28v1equalHeight() {
			var u28v1dropdown = NE('.u28v1 .u28navw2');
			if (!u28mobile) {
				// var u28v1 = NE( ".u28v1" ).nodes[0];
				var u28navItems = NE('.u28v1 .u28navw2');
				u28v1dropdown.removeClass("u28abs");
				var u28tallest = 0;
				u28navItems.each(function (item) {
					if(item.clientHeight > u28tallest) {
						u28tallest = item.clientHeight;
					}
				});
				NE('.u28v1 .u28nav').nodes[0].style.height = u28tallest +'px';
				u28v1dropdown.addClass("u28abs");
			}
			else {
				u28v1dropdown.addClass("u28abs");
			}
		}

		var cmenucontent;
		if (NE('.u28ham').first().getAttribute('href')){
			cmenucontent = NE('.u28ham').first().getAttribute('href');
		}

		//Populate mega menu
		if(cmenucontent){
			getMegaMenuData(cmenucontent);
		}
		function getMegaMenuData(cmenucontent) {
			var CLS_CLINK = 'u20ham';
			fetchData(cmenucontent)
				.then(function (data) {
					buildMegaMenu(data.replace(/<([^h/>]*)h5/g, '<a class="' + CLS_CLINK + '"').replace(/<\/h5>/g, '</a>'));
					NE('.u28ham').addClass('u28clickable');
					NE('.u28cloudbg').attr('aria-label', NE('.u28cloudbg').text());
					NE('.u28cloudbg').html(NE('.u28cloudbg').text().replace(/(\s\w+?)$/, ' <span>$1</span>'));
					if (!NE('.u28cloudbg > span').nodes[0]) {
						NE('.u28cloudbg').append('<span />');
					}
					if (v1check) {
						NE('.u28navw2[data-type]').addClass('u28first-active');
						u28.addClass('u28-down');
						NE('.u28ham').after('<a tabindex="0" class="u28menutab">&nbsp;</a>')

						NE('.u28v1 .u28navw1 h1').remove();
						NE('.u28navw2 h3 > a').parent().addClass('u28linked');
						NE('.u28navw2 div > a').parent().addClass('u28linked');

						var u28navw2 = document.querySelectorAll('.u28navw2');
						u28navw2.forEach(function (u28navw2Item, index) {
							var exitBack = '<a href="#goback" class="u28exitlink u28exitback"> </a>';
							u28navw2Item.insertAdjacentHTML('afterbegin', exitBack);
							var exitForward = '<a href="#gofwd" class="u28exitlink u28exitfwd"> </a>';
							u28navw2Item.insertAdjacentHTML('beforeend', exitForward);
						});

						//V1
						NE('.u28nav-r2').each(function () {
							NE(this).append('<a href="#exitmenu" class="u28exitlink u28exitmobile"> </a>');
						});

						//Developer
						NE('.u28nav-r3').each(function () {
							NE(this).append('<a href="#exitmenu" class="u28exitlink u28exitmobile"> </a>');
						});

						NE('a.u28menutab').on('focus', function (e) {
							NE('.u28navw1 a').nodes[0].focus();
						});

						NE('a.u28exitlink').on('focus', function (e) {
							NE('.u28navitm.active').addClass('u28closethis');
							u28.removeClass("u28navactive u28cover u28-up").addClass('u28-down');
							u28nav.removeClass('u28fadeIn');
							NE(".u28v1 .u28s4 a[data-target], .u28navw1 a[data-target], .u28navw2[data-type]").removeClass('active');
							if (NE(this).is('.u28exitmobile')) {
								NE('a.u28search').nodes[0].focus();
							} else if (NE(this).is('.u28exitfwd') && NE('.u28closethis').is('.u28navitm:last-of-type')) {
								NE('a.u28prof').nodes[0].focus();
							} else if (NE(this).is('.u28exitfwd')) {
								getNextSiblings(document.querySelector('a.u28closethis'), function (el) {
									return el.offsetWidth > 0 && el.offsetHeight > 0 && el.firstChild
								})[0].focus();
							} else {
								getPreviousSiblings(document.querySelector('a.u28closethis'), function (el) {
									return el.offsetWidth > 0 && el.offsetHeight > 0 && el.firstChild
								})[0].focus();
							}
							NE('a.u28closethis').removeClass('u28closethis');
						});

						setTimeout(function () {
							u28v1equalHeight();
							NE('.u28v1 .u28s4').addClass('u28clickable');
						}, 500);

					}
				})
		}

		function asyncrWait() {
			var deferred = $.Deferred();
			setTimeout(function () {
				deferred.resolve("generating async wait");
			}, 0);
			return deferred.promise();
		}

		function u28acscheck() {
			if (NE(".u24show").nodes[0]){
				NE('.u24close').nodes[0].click();
			}
		}

		function positionSearchBar() {
			var lSpace = 15;
			var parentWidth = document.querySelector('.u28').offsetWidth;
			var navWrapperoffset = document.querySelectorAll(".u28w1 .cwidth")[0].offsetLeft;
			var u28searchwidth = 0;
			var navwidth = 0;
			var offset = 0;
			var offset2 = 0;
			var firstNavItemOffsetLeft = document.querySelectorAll(".u28navitm:first-child")[0].offsetLeft;
			var firstItemOffsetLeft = document.getElementById("u28s1").offsetLeft;
			var firstItemwidth = document.querySelector('.u28s1').offsetWidth;
			var mobileBtnsWidth = document.querySelector('.u28s1').offsetWidth;
			if (u28rtl) {
				var firstNavItemOffsetLeft = document.querySelectorAll(".u28navitm:last-child")[0].offsetLeft - 10;
				var firstItemOffsetLeft = document.getElementById("u28s3").offsetLeft;
				var firstItemwidth = document.querySelector('.u28s3').offsetWidth;
			}
			if (u28mobile) {
				var offset2 = navWrapperoffset + firstItemwidth +'px';
				u28searchwidth = outerWidth(NE('.u28search').nodes[0]);
				var offset = firstItemOffsetLeft + firstItemwidth +'px';
				var navwidth = outerWidth(NE('.u28s4').nodes[0]);
				if (u28rtl) {
					var firstNavItemOffsetLeft = -(firstItemOffsetLeft + mobileBtnsWidth);
				}
			} else {
				// Position Desktop
				NE('.u28s4 a').each(function(el) {
					u28searchwidth += outerWidth(el);
				});
				var offset = firstItemOffsetLeft + firstItemwidth + lSpace +'px';
				var offset2 = navWrapperoffset + firstItemwidth + lSpace +'px';
				if (u28rtl) {
					var offset2 = navWrapperoffset + firstItemwidth + 5 +'px';
				}
				var navwidth =  outerWidth(document.querySelector('.u28s4')) - lSpace;
			}
			if (!NE('.u28s2').hasClass('active')) {
				//position inactive
				document.querySelector('.u28s2').style.cssText = 'width:' + u28searchwidth + 'px;transform:translate(' + firstNavItemOffsetLeft + 'px, 0);'
			} else {
				//position active
				if (u28rtl) {
					if (u28mobile) {
						var offset = parseInt(offset);
						var offset = offset - lSpace + mobileBtnsWidth + u28searchwidth;
						var offset = -offset  + 'px';
					}
					else {
						var offset = parseInt(offset) - lSpace + 'px';
					}
				}
				document.querySelector('.u28s2').style.cssText = 'width:' + navwidth + 'px;transform:translate(' + offset + ', 0);'
				document.querySelector('.u28suggestw1').style.transform = 'translate(-' + offset2 + ', 0)';
				if (NE('body').is('.f11')) {
					document.querySelector('ul.u28suggest').style.maxWidth = parentWidth;
				}
			}
		}

		function buildMegaMenu(html) {
			html = html.replace(/h2/g, 'div');
			html = html.replace(/h3/g, 'div');
			var dummyEl = document.createElement('div');
			dummyEl.innerHTML = html;
			var mmContainer;
			if(v1check){
				if(u28developermenu){
					mmContainer = dummyEl.querySelector('.u28nav-r3');
				}
				else {
					mmContainer = dummyEl.querySelector('.u28nav-r2');
				}
				mmContainer.classList.add('u28navw1');
			}else{
				mmContainer = dummyEl.querySelector('.u28navw1');
			}
			var quotes = dummyEl.querySelector('.u28w7');
			NE('#u28nav').append(mmContainer);
			NE('#u28nav .u28navw1').addClass('cwidth');
			NE('.u28w6').append(quotes);
			u28rotatingsuggest();
			u28buildmobilenav();
			//Mobile Nav Expand/Collapse Nav
			NE('.mclose').on("click", function(e) {
				NE(e.target).toggleClass('open');
				NE(e.target).siblings('ul').each(function (el){
					slideToggle(el,300)
				});
			});
			addAccessibility();
			setTimeout(function() {
				u28.addClass('dropdownloaded');
				adjustDropdown();
			}, 500);
		}

		function addAccessibility(){
			//Convert all tabindex greater than one to tabindex=0
			NE('[tabindex]').each(function(el){
				if (NE(el).attr('tabindex') >0 ? NE(el).attr('tabindex','0') : false);
			});

			//Ally general adjustments (don't change order unless required)
			NE('.u28-searchicon').attr('tabindex','-1');
			NE('.u28ham').attr('aria-controls','u28navw1').attr('aria-expanded','false').attr('aria-haspopup','true');
			NE('#u28nav').attr('aria-role','menu').attr('tabindex','-1');
			if (window.frameElement) {
				NE('#u28nav').find('a').attr('target', '_top');
			}

			NE('.u28-profile').attr('tabindex','-1');
			NE('.u28-profilew1').attr('tabindex','-1').attr('id','u28-profilew1');
			NE('.u28-profilew1 a[data-lbl]').each(function(el){NE(el).attr('tabindex','-1');});

			var signIntxt = NE('.u28prof > span').nodes[0].innerText;
			var signInlbl = NE('.u28prof').nodes[0].getAttribute("title");
			var signInlbltxt = signInlbl +", "+ signIntxt;

			NE('.u28prof').attr('aria-controls','u28-profilew1').attr('aria-label',signInlbltxt).attr('aria-expanded','false').attr('aria-haspopup','true');
			NE('.u28prof > span').remove();

			var lastNavItem = NE('#u28nav').find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').last();
			lastNavItem.addEventListener('keydown', trapTabKeyNav);

			var lastProfileItem = NE('.u28-profilew1').find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').last();
			lastProfileItem.addEventListener('keydown', trapTabKeyProfile);
		}

		function trapTabKeyNav(e) {
			if (e.shiftKey && e.keyCode == 9) {
				return;
			}
			else if (e.keyCode === 9) {
				NE('#askoracleinput').attr('tabindex','0');
				NE('.u28b1').attr('tabindex','0');
				NE('#u28nav').attr('tabindex','-1');
				u28.toggleClass("u28navactive u28cover");
				u28nav.toggleClass('u28fadeIn');
				NE('.u28prof').attr('tabindex','0');
				NE('.u28ham').attr('aria-expanded','false');
				setTimeout(function(){NE('.u28ham').nodes[0].focus(); }, 50);
			}
		}

		function trapTabKeyProfile(e) {
			if (e.keyCode === 9) {
				NE('.u28prof').attr('aria-expanded','false');
				NE('#u28-profilew1').attr('tabindex',-1);
				NE('#u28-profilew1 a[data-lbl]').each(function(){NE(this).attr('tabindex','-1');});
				u28profiledropdown.toggleClass("u28fadeIn");
				u28.toggleClass('profactive');
				setTimeout(function(){NE('.u28prof').nodes[0].focus(); }, 50);
			}
		}

		var mobile = false;
		var askoracleform = NE('#askoracle');
		var elem = NE('#askoracleinput');
		var placeindex = 0;
		var dropdown = NE('.u28w4');
		var searchresults = NE('.u28w8');
		var u28nav = NE('.u28nav');
		var u28profile = NE('.u28-profile');
		var u28profiledropdown = NE('.u28-profilew1');
		var liSelected;
		var next;
		var nodim;
		var u28questions = [];
		var u28searchpg = 0;
		var u28noprefix = false;
		var u28questionPrefix = elem.data("prefix");
		if (!u28questionPrefix) {
			var u28noprefix = true;
			var u28questionPrefix = '';
		}
		// Hide Header on on scroll down
		var u28didScroll;
		var lastScrollTop = 0;
		var resizing = false;

		NE('.u28ham').append('<i></i><i></i><i></i>').addClass('u28animatedham');

		// cookie to test hello, name cookie on localhost - DO NOT COMMIT THIS FILE WITH THIS UNCOMMENTED!!!!
		// fakeuser
		//document.cookie = "ORA_UCM_INFO=3~93446F2E9B0E5ADEE040548C2D706F69~JeanLuc~Picard~jeanluc.picard@oracle.com";
		// no name
		//document.cookie = "ORA_UCM_INFO=3~93446F2E9B0E5ADEE040548C2D706F69~NOT_FOUND~NOT_FOUND~jeanluc.picard@oracle.com";
		// no acct
		//document.cookie = "ORA_UCM_INFO=3~93446F2E9B0E5ADEE040548C2D706F69~Jean Luc~Picard";

		if (USER.guid){
			if (USER.username && USER.username != "NOT_FOUND"){
				//$('.u28l-in').prepend('<li><a href="PLACEHOLDER.html">'+USER.username+'</a></li>');
			}
			if (USER.firstname && USER.firstname != "NOT_FOUND" && USER.lastname && USER.lastname != "NOT_FOUND"){
				NE('.u28l-in').prepend('<li><a href="https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl='+w_url+'" data-lbl="profile:user-account">'+USER.firstname+' '+USER.lastname+'</a></li>');
			}else if (USER.firstname && USER.firstname != "NOT_FOUND"){
				NE('.u28l-in').prepend('<li><a href="https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl='+w_url+'" data-lbl="profile:user-account">'+USER.firstname+'</a></li>');
			}
			u28profile.addClass('loggedin');
		}

		NE(document).on('keyup',function(e) {
			if (e.key === "Escape" && u28.hasClass('u28navactive')) {
				u28.removeClass("u28navactive u28cover u28-up").addClass('u28-down');
				u28nav.removeClass('u28fadeIn');
				removeInputFocus();
				if(v1check){
					NE(".u28v1 .u28s4 a[data-target], .u28navw1 a[data-target], .u28navw2[data-type]").removeClass('active');
				}
			}
			if (e.key === "Escape" && u28.hasClass('dropdownactive') && !NE('div.w10').nodes[0]) {
				elem.nodes[0].value = ''
				closedropdown();
				if(v1check){
					NE('.u28v1 .u28s2').removeClass("active");
					NE('.u28v1 .u28s4').removeClass('hidden');
					positionSearchBar();
					NE(".u28v1 .u28s4 a[data-target], .u28navw1 a[data-target], .u28navw2[data-type]").removeClass('active');
				}
			}
		});

		//Hide Search Bar
		function u28hasScrolled() {
			if (!resizing) {
				if (!u28.hasClass('dropdownactive') && !u28.hasClass('u28navactive')) {
					var doc = document.documentElement;
					var st = (window.pageYOffset || doc.scrollTop);
					var u28height = u28.nodes[0].offsetHeight;
					if (st <= 1) {
						u28.removeClass('u28-down u28-up mhide').addClass('u28-top');
					}
					if(Math.abs(lastScrollTop - st) <= u28height) {
						return;
					}
					if (st > lastScrollTop && st > u28height){
						// Scroll Down - hide nav
						if (!u28.hasClass('u28-up')) {
							u28.removeClass('u28-top u28-down').addClass('u28-up');
							setTimeout(function() {
								if (!u28.hasClass('u28-past')) {
									u28.addClass('u28-past');
								}
							}, 400);
						}
					} else {
						var body = document.body,
								html = document.documentElement,
								height = Math.max( body.scrollHeight, body.offsetHeight,
									html.clientHeight, html.scrollHeight, html.offsetHeight );
						// Scroll Up - show nav
						if(Math.abs(st) + window.innerHeight < height) {
							if (!u28.hasClass('u28-down') && st > 0) {
								u28.removeClass('u28-top u28-up').addClass('u28-down');
							}
						}
					}
					lastScrollTop = st;
				}
			}
		}

		var scrollToTop = function scrollToTop() {
			var c = document.documentElement.scrollTop || document.body.scrollTop;
			if (c > 0) {
				window.requestAnimationFrame(scrollToTop);
				window.scrollTo(0, c - c / 8);
			}
		};

		NE('.u28input').append('<div class="u28placeholder"><span></span></div>');
		NE('.u28w2').append('<div class="u28suggestw1"></div>');
		NE('.u28suggestw1').append('<ul id="u28suggest" class="u28suggest" role="listbox" aria-label="u28suggest" tabindex="-1"></ul>');
		u28.prepend('<span class="u28cover"></span>');
		u28.prepend('<span class="u28bttop"></span>');

		//Create Skeleton
		searchresults.append('<ul class="u28skel"></ul>');
		var cont = [];
		for (var i = 0;i<10;i++) cont.push('<li></li>');
		NE('.u28skel').html(cont.join(''));

		// append close link
		// get localized close text from data attr, or old nav menu close, or fall back to english
		// fallback
		var closetxt = "Close",
			closelbl = "Close Search Results";

		// if data attrs exist use those
		if(NE('#askoracle').attr('data-resultsclose') && NE('#askoracle').attr('data-resultscloselabel')){
			closetxt = NE('#askoracle').attr('data-resultsclose');
			closelbl = NE('#askoracle').attr('data-resultscloselabel');

		// if .mnavback (old close in mobile text) exist use that, and if it's == "Close" set "Close Search Results" as the label, otherwise make it the same as close
		}else if(NE('.mnavback').text()){
			closetxt = NE('.mnavback').text();
			closelbl = (closetxt == "Close") ? "Exit Search Results" : closetxt;
		}

		searchresults.prepend('<div class="u28resultsclose"><a href="#closeresults" aria-label="'+closelbl+'">'+closetxt+'</a></div>');

		function u28focusSearch(e) {
			NE('.u28found').removeClass('u28fadeIn u28loaded u28found');
			NE('.u28w4').removeClass('dropdownopen u28dropfadeIn');
			u28.addClass("u28cover");
			searchresults.addClass('hidden');
			addInputFocus();
			NE('#askoracleinput').nodes[0].focus();
		}

		NE('.u28resultsclose a').on("click", function(e) {
			u28focusSearch(e);
			elem.nodes[0].value = ''
			elem.nodes[0].removeAttribute("aria-activedescendant")
			elem.nodes[0].setAttribute('aria-expanded','false');
			NE('.u28w3').removeClass('u28typing');
			e.preventDefault();
			e.stopImmediatePropagation();
		});

		NE('.u28resultsclose a').on('keydown', function(e) {
			if (e.shiftKey && e.keyCode === 9) {
				u28focusSearch(e);
				e.preventDefault();
			}
		});

		function u28delay(fn, ms) {
			var u28timer = 0;
			return function () {
				clearTimeout(u28timer);
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
				u28timer = setTimeout(fn.bind.apply(fn, [this].concat(args)), ms || 0);
			};
		}

		//Delay on fetching JSON on keyup. less gets jumpy
		var u28debouncenum = 600;

		//Input form back < btn
		elem.on("click", function(e) {
			u28acscheck();
			addInputFocus();
			//Close Nav
			if(!v1check){
				u28.removeClass("u28navactive u28cover profactive");
				u28nav.removeClass('u28fadeIn');
				u28profiledropdown.removeClass("u28fadeIn");
			}
		});

		function checkShortProf(){
			document.querySelector('.u28-profilew1').style.display ='block';
			var clientHeight = document.querySelector('.u28-profilew1').clientHeight;
			document.querySelector('.u28-profilew1').style.display ='';
			if ( clientHeight + document.querySelector('.u28').offsetHeight > window.innerHeight) {
				NE('.u28-profilew1').addClass('shortprof');
			}
			else {
				NE('.u28-profilew1').removeClass('shortprof');
			}
		}

		NE(document).on('click', 'a.u28suggestlnk', function(e) {
			e.preventDefault();
			var $u28suggest=   NE('.u28suggest')
			//$u28suggest.nodes[0].style.display = 'none';
			$u28suggest.removeClass('active');
			NE('.u28').removeClass('dropdownloaded');
			scrollToTop();
			closesearch(e);
			var url = NE(this).attr('href');
			window.location = url;
		});

		NE(document).on('click', '.u28w8 a', function(e) {
			if (e.target.getAttribute("href") !== '#closeresults' && !e.target.classList.contains('bclink') && !e.target.classList.contains('u28videolink') && !e.target.classList.contains('vjs-big-play-button')) {
				NE('.u28').removeClass('dropdownloaded');
				NE('.u28w4').removeClass('dropdownopen u28dropfadeIn');
				scrollToTop();
				closesearch(e);
				var url = NE(this).attr('href');
				window.location = url;
			}
			e.preventDefault();
			e.stopImmediatePropagation();
		});

		NE(document).on('click', '.u28navw2 a', function(e) {
			NE('.u28').removeClass("u28navactive u28cover u28-up u28-open dropdownactive");
			NE('.u28nav').removeClass('u28fadeIn');
			NE('.u28w4').removeClass('dropdownopen u28dropfadeIn');
			NE('.u28v1 .u28s4 a[data-target], .u28navw1 a[data-target], .u28navw2[data-type]').removeClass('active');
			if (u28mobile) {
				NE('.u28v1 .u28navw2[data-type]').each(function (el){
					el.style.display = 'none'
				})
			}
			scrollToTop();
			var url = NE(this).attr('href');
			setTimeout(function() {
				window.location = url;
			}, 10);
			e.preventDefault();
		});

		function toggleprof(){
			if (NE('.u28prof').attr('aria-expanded') == 'false') {
				adjustDropdown(); // needed on slow connections
				NE('.u28prof').attr('aria-expanded','true');
				// $('#u28-profilew1').attr('tabindex',0);
				NE('#u28-profilew1 a[data-lbl]').each(function(el){NE(el).attr('tabindex','0');});
			}
			else {
				NE('.u28prof').attr('aria-expanded','false');
				NE('#u28-profilew1').attr('tabindex',-1);
				NE('#u28-profilew1 a[data-lbl]').each(function(el){NE(el).attr('tabindex','-1');});
			}

			if(v1check){
				NE(".u28s4 a[data-target], .u28navw1 a[data-target]").removeClass('active');
				NE(".u28navw2[data-type]").removeClass('active');
				u28mobileCheck();
				if (u28mobile) {
					NE(".u28v1 .u28navw2[data-type]:not(.active)").each(function (el){
						// slideUp(el,300);
						el.style.display = 'none'
					})
				}
				closedropdown();
				elem.nodes[0].value = '';
				if (NE('.u28s2').hasClass("active")) {
					NE('.u28s2').removeClass("active");
					NE('.u28s4').removeClass('hidden');
					positionSearchBar();
				}
				checkShortProf();
			}

			u28profiledropdown.toggleClass("u28fadeIn");
			u28.toggleClass('profactive');
			u28.removeClass('u28-up dropdownactive');
			u28.addClass('u28-down');
			//Close Nav
			removeInputFocus();
			u28.removeClass("u28navactive u28cover");
			u28nav.removeClass('u28fadeIn');
		}

		NE(".u28prof, .u28actbck").on("click", function(e) {
			toggleprof();
			e.preventDefault();
			e.stopImmediatePropagation();
			return false;
		});

		// force close profile menu when nav link or contact is focused
		NE(".u28v1 a.u28-free-tier,.u28v1 a.u28contact,.u28v1 a.u28navitm").on("focus", function(e){
			if (u28profiledropdown.hasClass("u28fadeIn")) {
				toggleprof();
			}
		});

		NE(document.body).on('click', function(e) {
			if (u28profiledropdown.hasClass("u28fadeIn")) {
				toggleprof();
			}
		});

		//Nav
		if(NE('.u28v0').nodes[0]){
			NE('.u28ham, .mnavback, .u28cover').on('click',function(e) {
				u28acscheck();
				u28.toggleClass("u28navactive u28cover");
				u28nav.toggleClass('u28fadeIn');
				u28.removeClass('u28-up');
				u28.addClass('u28-down');
				removeInputFocus();
				//Accessibility
				if (NE('.u28ham').attr('aria-expanded') == 'false') {
					NE('.u28ham').attr('aria-expanded','true');
					NE('#askoracleinput').attr('tabindex','-1');
					NE('.u28prof').attr('tabindex','-1');
					NE('.u28b1').attr('tabindex','-1');
					NE('#u28nav').attr('tabindex','0');
				}
				else {
					NE('.u28ham').attr('aria-expanded','false');
					NE('#askoracleinput').attr('tabindex','0');
					NE('.u28prof').attr('tabindex','0');
					NE('.u28b1').attr('tabindex','0');
					NE('#u28nav').attr('tabindex','-1');
				}
				e.preventDefault();
				return false;
			});
		}

		if(NE('.u28v0').nodes[0]){
			function _handler(){
				if(!u28nav.hasClass('bgload')){
					u28nav.addClass('bgload');
				}
			}
			document.querySelector('.u28ham').addEventListener('touchstart',_handler ,{ once: true });
			document.querySelector('.u28ham').addEventListener('mouseenter',_handler ,{ once: true });
		}

		if(v1check){
			function _handler() {
				if(!u28nav.hasClass('bgload')){
					u28nav.addClass('bgload');
					// Dropdown Callout Background Images
					NE('.u28a1').each( function(  el,index ) {
						var u28a1src = NE(el).attr('data-u28bgsrc');
						el.style.backgroundImage= 'url("'+u28a1src+'")';

					});
					if(NE('.u28first-active').nodes[0]){
						setTimeout(function() {
							NE('.u28navw2[data-type]').removeClass('u28first-active');
						}, 500);
					}
				}
				NE('.u28v1 .u28s4 a, .u28v1 .u28ham').off('mouseenter touchstart focus',_handler)

			}
			NE('.u28v1 .u28s4 a, .u28v1 .u28ham').on('mouseenter touchstart focus',_handler)
			NE('.mnavback, .u28cover').on('click',function(e) {
				u28.removeClass("u28navactive dropdownactive u28cover u28-up").addClass('u28-down');
				u28nav.removeClass('u28fadeIn');
				NE(".u28v1 .u28s4 a[data-target], .u28navw1 a[data-target], .u28navw2[data-type]").removeClass('active');
				if (u28mobile) {
					NE(".u28v1 .u28navw2[data-type]").each(function (el){
						// slideUp(el,300)
						el.style.display = 'none'
						NE(el).removeClass('active');
					})                }
				else {
					NE(".u28v1 .u28navw2[data-type]").removeClass('active');
				}
				NE('.u28v1 .u28s4').removeClass('hidden');
				NE('.u28v1 .u28s2').removeClass('active');
				positionSearchBar();
				adjustDropdown();
				removeInputFocus();
				//CHANGE for V1
				//Accessibility
				if (NE('.u28ham').attr('aria-expanded') == 'false') {
					NE('.u28ham').attr('aria-expanded','true');
					NE('#askoracleinput').attr('tabindex','-1');
					NE('.u28prof').attr('tabindex','-1');
					NE('.u28b1').attr('tabindex','-1');
					NE('#u28nav').attr('tabindex','0');
					NE('.u28nav-r2 a.u28navitm').first().focus();
					NE('.u28nav-r3 a.u28navitm').first().focus();
				}
				else {
					NE('.u28ham').attr('aria-expanded','false');
					NE('#askoracleinput').attr('tabindex','0');
					NE('.u28prof').attr('tabindex','0');
					NE('.u28b1').attr('tabindex','0');
					NE('#u28nav').attr('tabindex','-1');
				}
				e.preventDefault();
				return false;
			});
		}

		NE('a.mnavback').on('focus', function() {
			NE('.u28ham').nodes[0].focus();
		});

		function u28rotatingsuggest() {
			NE('.u28w7 li').each(function(el) {
				var suggestedtext = NE(el).text();
				u28questions.push(suggestedtext);
			});
			NE('.u28placeholder span').nodes[0].style.display = 'none';
			if (u28noprefix) {
				NE('.u28placeholder span').text(u28questionPrefix + ' ' + u28questions[0]);
			}
			else {
				NE('.u28placeholder span').text(u28questionPrefix + ' "'+ u28questions[0]+'"');
			}
			NE('.u28placeholder span').nodes[0].style.display = 'block';
			setTimeout(function (){
				NE('.u28placeholder span').nodes[0].style.display = 'none';
				placeindex = (placeindex + 1) % u28questions.length;
				if (u28noprefix) {
					NE('.u28placeholder span').text(u28questions[placeindex]);
				} else {
					NE('.u28placeholder span').text(u28questionPrefix + ' "'+ u28questions[placeindex]+'"');
				}
			},2000);
		}

		function u28buildmobilenav() {
			//DELETE
			//DELETE
			NE('.u28navw1>ul>li>h3').each(function (el) {
				// @Todo
				//  $(this).not(':has(a)').css('opacity', '0.6');
				if (NE(el).siblings('ul').length) {
					NE(el).parent().prepend('<span class="mclose"></span>');
				}
			});
			NE('.u28navw1>ul>li>div').each(function (el) {
				// @Todo
				// $(this).not(':has(a)').css('opacity', '0.6');
				if (NE(el).siblings('ul').length) {
					NE(el).parent().prepend('<span class="mclose"></span>');
				}
			});
		}

		//Video Check
		function u28videocheck() {
			if (NE('.u28w8 .bcembed').nodes[0]) {
				NE('.u28w8 .bcembed').each(function(el) {
					bc_loadplayer($(el));
				});
			}
			if (NE('.u28w8 .ytembed').nodes[0]) {
				NE('.u28w8 .ytembed').each(function(el) {
					VD03.initialize();
				});
			}
		}

		//Input form back < btn
		//$(".u28 a.u28-back, .u28clear ").on("click", function(e) {
		NE(".u28 a.u28-back").on("click", function(e) {
			if (v1check) {
				closesearch(e);
			}else{
				//V0
				e.preventDefault();
				elem.nodes[0].value ='';
				closedropdown();
				u28.removeClass("u28navactive u28cover u28-up dropdownactive");
				u28.addClass('u28-down');
				u28nav.removeClass('u28fadeIn');
				return false;
			}
		});

		NE(".u28v1 a.u28search,.u28v1 a.u28home,.u28v1 .u28ham").on("focus", function(e){
			if (NE(".u28.dropdownactive").nodes[0]) {
				closesearch(e);
				if(this.classList.contains("u28search") && !u28mobile){
					this.nextElementSibling.focus();
				}else if(this.classList.contains("u28search") && u28mobile){
					document.getElementsByClassName('u28prof')[0].focus();
				}
			}
		});

		function closesearch(e) {
			addInputFocus();
			NE('.u28s4').removeClass('hidden');
			NE('.u28s2').removeClass('active');
			positionSearchBar();
			u28.removeClass("u28navactive u28cover u28-up dropdownactive").addClass('u28-down');
			u28nav.removeClass('u28fadeIn');
			closedropdown();
			elem.nodes[0].value ='';
			elem.nodes[0].removeAttribute("aria-activedescendant")
			elem.attr('aria-expanded','false');
			searchresults.find('*').not('.u28skel').not('.u28skel li').not('.u28resultsclose').not('.u28resultsclose a').remove();
			e.preventDefault();
			return false;
		}

		/*
		function clearInput() {
			closedropdown();
			$('.u28suggest').removeClass('active');
			elem.val('');
			clearbtn.css("opacity", 1.0).animate({"opacity": 0.0}, 300).delay(300).css("visibility", "hidden");
			elem.focus();
		}
		*/

		function opendropdown() {
			if (!u28.hasClass("dropdownactive") && !v1check || v1check) {
				u28.addClass('dropdownactive');
				dropdown.addClass('u28dropfadeIn');
				elem.nodes[0].removeAttribute('placeholder');
				adjustDropdown();
				setTimeout(function() {
					dropdown.addClass('dropdownopen');
				}, 501);
			}
		}

		function closedropdown() {
			NE('.u28suggest').removeClass('active');
			NE('.u28w3').removeClass('u28typing');
			searchresults.addClass('hidden');
			NE('.u28placeholder').removeClass('u28hidden');
			u28.removeClass('u28cover');
			u28.removeClass('dropdownactive');
			dropdown.addClass('u28move');
			setTimeout(function() {
				dropdown.removeClass('u28move');
				dropdown.removeClass('u28dropfadeIn');
				dropdown.removeClass('dropdownopen');
			}, 401);
		}

		function removeInputFocus() {
			u28.removeClass('u28focus');
		}

		function addInputFocus() {
			u28.addClass('u28focus');
		}

		//Sumbit Autocomplete link
		NE('.u28w2').on("click", "a.u28complete", function(e) {
			var lnk = NE(e.currentTarget).text();
			elem.nodes[0].value = lnk;
			NE('.u28suggest').html('');
			NE('.u28suggest').removeClass('active');
			searchresults.removeClass('hidden');
			submitHandler(e)
			//askoracleform.nodes[0].submit();
			e.preventDefault();
			e.stopImmediatePropagation();
			return false;
		});

		searchresults.on("click", ".u28w7 li", function(e) {
			var nosuglnk = NE(this).text();
			elem.nodes[0].value = nosuglnk;
			submitHandler(e)
			e.preventDefault();
			return false;
		});

		function buildResults(u28count){
			if (!u28count) {
				var u28count = 0;
				if (u28developermenu) {
					var u28count = 1;
				}
			}
			var num = 0;
			var Ntt = NE('.u28w3 input[name=Ntt]').nodes[0] && NE('.u28w3 input[name=Ntt]').nodes[0].value.toLowerCase();
			var Ntt = encodeURIComponent(Ntt);
			var nty = NE('.u28w2 input[name=Nty]').nodes[0] && NE('.u28w2 input[name=Nty]').nodes[0].value;
			var ntk = NE('.u28w2 input[name=Ntk]').nodes[0] && NE('.u28w2 input[name=Ntk]').nodes[0].value;
			var Dy = NE('.u28w2 input[name=Dy]').nodes[0] && NE('.u28w2 input[name=Dy]').nodes[0].value;
			var cty = NE('.u28w2 input[name=cty]').nodes[0] && NE('.u28w2 input[name=cty]').nodes[0].value;
			var lang = NE('.u28w2 input[name=lang]').nodes[0] && NE('.u28w2 input[name=lang]').nodes[0].value;
			//New Search Value
			var Bst = NE('.u28w2 input[name=NoBstNoRec]').nodes[0] && NE('.u28w2 input[name=NoBstNoRec]').nodes[0].value;
			if(typeof Bst === 'undefined' || (!Bst)) {
				var Bst = 'no';
			}
			var filtertxt = elem.attr("data-filtertxt");
			var ctytxt = elem.attr("data-ctytxt");

			if (u28count <= 1) {
				searchresults.addClass('loading');
				searchresults.removeClass('u28found');
			}

			nodim = 'results-nodim';

			if(!u28staging && !u28developer && !u28developermenu) {
				//regular results
				if (cty && lang) {
					if(cty === 'us' && lang === 'en'){
						var searchurl = '/search/'+nodim+'?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
					}
					else {
						var searchurl = '/search/'+nodim+'?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&cty='+cty+'&lang='+lang+'&format=json';
					}
				}
				else {
					var searchurl = '/search/'+nodim+'?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json'
				}
			}
			else if (u28developermenu) {
				var searchurl = '/docs/search/?q='+Ntt+'&pg='+u28count+'&size=10&showfirstpage=true&lang='+lang+'';
			}else if (u28developer) {
				if (cty && lang) {
					if(cty === 'us' && lang === 'en'){
						var searchurl = 'https://www.oracle.com/search/'+nodim+'?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
					}
					else {
						var searchurl = 'https://www.oracle.com/search/'+nodim+'?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&cty='+cty+'&lang='+lang+'&format=json';
					}
				}
				else {
					var searchurl = 'https://www.oracle.com/search/'+nodim+'?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json'
				}
			}
			else {
				//stage results
				if (cty && lang) {
					if(cty === 'us' && lang === 'en'){
						//var searchurl = 'https://www.oracle.com/search/results-nodim?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&format=json';
						//var searchurl = 'https://www-portal-stage.oracle.com/search/results-nodim?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&format=json';
						var searchurl = 'https://www-stage.oracle.com/search/'+nodim+'?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
					}
					else {
						//var searchurl = 'https://www.oracle.com/search/results-nodim?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&cty='+cty+'&lang='+lang+'&format=json';
						//var searchurl = 'https://www-portal-stage.oracle.com/search/results-nodim?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&cty='+cty+'&lang='+lang+'&format=json';
						var searchurl = 'https://www-stage.oracle.com/search/'+nodim+'?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&cty='+cty+'&lang='+lang+'&format=json';
					}
				}
				else {
					//var searchurl = 'https://www.oracle.com/search/results-nodim?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&format=json';
					//var searchurl = 'https://www-portal-stage.oracle.com/search/results-nodim?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&format=json';
					var searchurl = 'https://www-stage.oracle.com/search/'+nodim+'?No='+u28count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
				}
			}

			var i = 0;
			var pub = '';
			var resultlistfound = false;
			var reclistfound = false;
			var recexecuted = false;
			fetchData(searchurl).then(function (data) {
				data = JSON.parse(data);
				window.NE = NE;
				return new Promise(function (res, rej) {
					u28.removeClass('u28navactive');
					if (u28developermenu) {
						for (var e = 0; e < data.hits.length; e++) {
							var results = data.hits;
						}
					} else {
						for (var e = 0; e < data.contents.length; e++) {
							//old json
							if (data.contents[e]["@type"] === 'ResultsList' && !resultlistfound) {
								resultlistfound = true;
								var results = data.contents[e].records;
							}
							if (data.contents[e]["@type"] === 'TopHeaderContent' && !reclistfound) {
								reclistfound = true;
								var reccomendedresult = data.contents[e].url;
							}
							//new json
							if (!resultlistfound && !reclistfound) {
								if (data.contents[0].mainContent[0].contents[0]["@type"] === 'ResultsList' && !resultlistfound) {
									resultlistfound = true;
									var results = data.contents[0].mainContent[0].contents[0].records;
								}
								if (data.contents[0].mainContentTop[1].contents.length > 0 && data.contents[0].mainContentTop[1].contents[0]["@type"] === 'TopHeaderContent' && !reclistfound) {
									reclistfound = true;
									var reccomendedresult = data.contents[0].mainContentTop[1].contents[0].url;
								}
							}
						}
					}

					var ctryfilter = '';
					var sitelinkmarkup = '';
					var reccomendedmarkup = '';
					var resultsmarkup = '';
					var sitelinkctrl = '';
					var sitelinksfound = false;
					var videofound = false;

					// call Infinity search tracking function
					if (window.ORA && u28count <= 1) {
						infinitySearchTracking(document.getElementById("askoracleinput"), results.length);
					}
					if (results.length > 0) {
						for (var i = 0; i < results.length; i++) {
							if (u28developermenu) {
								var sitelinkr = false;
								var u28track = u28count + i;
								var title = results[i]._source.asset_title;
								var displayurl = results[i]._source.basepath;
								var devsitelinkfound = false;
								var record = {};
								record.attributes = {};
								record.attributes.Title = results[i]._source.title;
								if (results[i].highlight.description && results[i].highlight.description.length > 0) {
									record.attributes.Description = results[i].highlight.description.trim();
								} else {
									record.attributes.Description = results[i].highlight.body.trim();
								}
								var description = record.attributes.Description;
								record.attributes.DisplayURL = results[i]._source.url;
								record.attributes.SiteLink = [];
								record.attributes.SiteLink[0] = "";
								//Check for youtube video
								var u28youtubeVid = false;
								var ytregExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
								var match = displayurl[0].match(ytregExp);
								if (match&&match[7].length==11){
									var u28youtubeVidID=match[7];
									u28youtubeVid = true;
								}
								if (results[i].inner_hits && results[i].inner_hits.same_basepath_hits && results[i].inner_hits.same_basepath_hits.hits.length > 0) {
									//dev sitelinks found
									//var devsitelinkfound = true;
									if (results[i]._source.url != results[i]._source.basepath) {
										var offset = 2;
										record.attributes.SiteLink[0] += "siteLinkTitles1=" + record.attributes.Title.replace("~", "&#126;") + "~siteLinkDescriptions1=" + record.attributes.Description.replace("~", "&#126;") + "~siteLinkUrls1=" + results[i]._source.url.replace("~", "&#126;");
										record.attributes.Description = "";
										record.attributes.DisplayURL = results[i]._source.basepath;
									} else {
										var offset = 1;
									}
									record.attributes.Title = results[i]._source.asset_title;
									for (var sb = 0; sb < results[i].inner_hits.same_basepath_hits.hits.length && sb < 3; sb++) {
										var ih = results[i].inner_hits.same_basepath_hits.hits[sb];
										var iht = "siteLinkTitles" + (sb + offset) + "=" + ih._source.title;
										var ihd = "siteLinkDescriptions" + (sb + offset) + "=";
										if (ih.highlight.description && ih.highlight.description.length > 0) {
											ihd += ih.highlight.description.trim();
										} else {
											ihd += ih.highlight.body.trim();
										}
										var ihu = "siteLinkUrls" + (sb + offset) + "=" + ih._source.url;
										if (record.attributes.SiteLink[0].length > 0) {
											record.attributes.SiteLink[0] += "~";
										}
										record.attributes.SiteLink[0] += iht.replace("~", "&#126;") + "~" + ihd.replace("~", "&#126;") + "~" + ihu.replace("~", "&#126;");
										var sitelinks = record.attributes.SiteLink;
										var devsitelinkfound = true;
									}
								} else {
									//record.attributes.SiteLink[0] = "siteLinkTitles1=" + record.attributes.Title + "~siteLinkDescriptions1=" + record.attributes.Description + "~siteLinkUrls1=" + record.attributes.DisplayURL;
								}
							} else {
								var sitelinkr = false;
								var u28track = u28count + i;
								var title = results[i].attributes.Title;
								var description = results[i].attributes.Description;
								var displayurl = results[i].attributes.DisplayURL;
								//Display SiteLinks
								var sitelinks = results[i].attributes.SiteLink;
								//Check for youtube video
								var u28youtubeVid = false;
								var ytregExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
								var match = displayurl[0].match(ytregExp);
								if (match&&match[7].length==11){
									var u28youtubeVidID=match[7];
									u28youtubeVid = true;
								}
							}
							if ((typeof sitelinks != 'undefined' && !sitelinksfound && u28count <= 0 && i == 0) || (devsitelinkfound)) {
								//process sitelinks
								var sitelinksfound = true;
								var sitelinkr = true;
								if (!devsitelinkfound) {
									var title = results[i].attributes.Title;
								}
								devsitelinkfound = false;
								resultsmarkup += '<div class="u28sitelinkw1" data-lbl="sitelinks-' + title + '">';
								resultsmarkup += '<div class="u28sitelinks u28result u28sitelinksp">';
								resultsmarkup += '<h4><a href="' + displayurl + '">' + title + '</a></h4>';
								resultsmarkup += '<cite><a tabindex="-1" href="' + displayurl + '">' + displayurl + '</a></cite>';
								if (typeof description !== 'undefined') {
									resultsmarkup += '<p data-lbl="sitelinks:' + title + '">' + description + '</p>';
								}
								resultsmarkup += '</div>';
								for (var u = 0; u < sitelinks.length; u++) {
									var sitesplitString = sitelinks[u].split("~");
									//testing
									//var sitesplitString = ["siteLinkTitles1=siteLinkTitles1", "siteLinkDescriptions2=siteLinkDescriptions2", "siteLinkDescriptions3=siteLinkDescriptions3", "siteLinkTitles3=siteLinkTitles3", "siteLinkTitles2=siteLinkTitles2", "siteLinkDescriptions1=siteLinkDescriptions1", "siteLinkDescriptions6=siteLinkDescriptions6", "siteLinkDescriptions4=siteLinkDescriptions4", "siteLinkDescriptions5=siteLinkDescriptions5", "siteLinkUrls4=siteLinkUrls4", "siteLinkUrls3=siteLinkUrls3", "siteLinkUrls2=siteLinkUrls2", "siteLinkUrls1=siteLinkUrls1", "siteLinkTitles5=siteLinkTitles5", "siteLinkTitles4=siteLinkTitles4", "siteLinkTitles6=siteLinkTitles6", "siteLinkUrls6=siteLinkUrls6", "siteLinkUrls5=siteLinkUrls5"];
									var titlearray = [0];
									var descrarray = [0];
									var urlarray = [0];
									for (var q = 0; q < sitesplitString.length; q++) {
										var sitelinkcnt = parseInt(sitesplitString.length / 3);
										var sitelinkdesc = sitesplitString[q].split('=')[0];
										var sitelinkdata = sitesplitString[q].substring(sitesplitString[q].indexOf('=') + 1);
										for (var t = 0; t <= sitelinkcnt;) {
											var siteLinkTitles = 'siteLinkTitles' + t;
											var siteLinkDescriptions = 'siteLinkDescriptions' + t;
											var siteLinkUrls = 'siteLinkUrls' + t;
											if (sitelinkdesc === siteLinkTitles) {
												titlearray[t - 1] = sitelinkdata;
											}
											if (sitelinkdesc === siteLinkDescriptions) {
												descrarray[t - 1] = sitelinkdata;
											}
											if (sitelinkdesc === siteLinkUrls) {
												urlarray[t - 1] = sitelinkdata;
											}
											t++
										}
									}
									if (titlearray.length === sitelinkcnt && descrarray.length === sitelinkcnt && urlarray.length === sitelinkcnt) {
										for (var y = 0; y < (sitelinkcnt + 1);) {
											if (descrarray[y] && titlearray[y] && urlarray[y]) {
												var scurl = urlarray[y];
												var scdescr = descrarray[y];
												var sctitle = titlearray[y];
												if (scurl && scdescr && sctitle) {
													resultsmarkup += '<div class="u28sitelinks u28result u28sitelinksc">';
													resultsmarkup += '<div class="u28rw1">';
													resultsmarkup += '<div class="u28rw2">';
													resultsmarkup += '<h4><a href="' + scurl + '" data-lbl="sitelinks:' + sctitle + '">' + sctitle + '</a></h4>';
													//resultsmarkup += '<cite><a href="'+urlarray[y]+'">'+urlarray[y]+'</a></cite>';
													resultsmarkup += '<p data-lbl="sitelinks:' + sctitle + '">' + scdescr + '</p>';
													resultsmarkup += '</div>';
													resultsmarkup += '</div>';
													resultsmarkup += '</div>';
												}
											}
											y++
										}
									}
									u++;
								}
								resultsmarkup += '</div>';

								if (!u28developermenu) {
									var sitelinkmarkup = resultsmarkup;
								}

							}
							if (typeof reccomendedresult != 'undefined' && u28count <= 0) {
								if (!recexecuted) {
									recexecuted = true;
									var reccomendedresult2 = reccomendedresult.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
									reccomendedmarkup += reccomendedresult2;
								}
							}

							//Display Regular Results
							if (title != undefined && displayurl != undefined && !sitelinkr) {
								if (!u28developermenu) {
									if (results[i].attributes.SourceTag == null) {
										var srctagfound = false;
									} else {
										var srctagfound = true;
										var srctag = results[i].attributes.SourceTag.toString().toLowerCase();
										if (srctag === 'video') {
											videofound = true;
											var videosrc = results[i].attributes.Id[0];
										} else {
											videofound = false;
										}
									}
								}
								if (u28youtubeVid) {
									var videosrc = u28youtubeVidID
									if (videosrc) {
										videofound = true;
									}
								}
								if (videofound) {
									resultsmarkup += '<div class="u28result u28video" data-lbl="search-row:' + u28track + '">';
								} else {
									resultsmarkup += '<div class="u28result" data-lbl="search-row:' + u28track + '">'; // killed  dir="rtl"
								}
								resultsmarkup += '<div class="u28rw1">';
								resultsmarkup += '<div class="u28rw2">';
								//if (videofound) {
								//	resultsmarkup += '<div class="bcembed bcthumbnail clickvideo" data-bcid="'+videosrc+'"></div>';
								//}
								resultsmarkup += '<div class="u28rw3">';
								if (videofound) {
									if (u28youtubeVid) {
										resultsmarkup += '<h4><a rel="vbox" role="button" class="u28videolink" href="?ytid=' + videosrc + '">' + title + '</a></h4>';
									}else {
										resultsmarkup += '<h4><a rel="vbox" role="button" class="u28videolink" href="?bcid=' + videosrc + '">' + title + '</a></h4>';
									}
								}
								else {
									resultsmarkup += '<h4><a href="' + displayurl + '">' + title + '</a></h4>';
								}
								if (!srctagfound) {
									//Don't show URL for Videos
									if (!videofound) {
										resultsmarkup += '<cite><a tabindex="-1" href="' + displayurl + '">' + displayurl + '</a></cite>';
									}
								} else {
									if (videofound) {
										//hiding URLs for video results
										//resultsmarkup += '<cite><a tabindex="-1" href="' + displayurl + '">' + displayurl + '</a></cite>';
									} else {
										resultsmarkup += '<cite><div class="u28type"><span>' + results[i].attributes.SourceTag + '</span><a tabindex="-1" href="' + displayurl + '">' + displayurl + '</a></div></cite>';
									}
								}
								if (typeof description !== 'undefined') {
									resultsmarkup += '<p>' + description + '</p>';
								}
								resultsmarkup += '</div>';
								if (videofound && !u28youtubeVid) {
									resultsmarkup += '<div class="bcembed bcthumbnail clickvideo" data-bcid="' + videosrc + '"></div>';
								}
								if (videofound && u28youtubeVid) {
									resultsmarkup += '<div class="u28ytembed"><div class="ytembed ytvideo ytthumbnail" data-ytid="' + videosrc + '"></div></div>';
								}
								resultsmarkup += '</div>';
								resultsmarkup += '</div>';
								resultsmarkup += '</div>';
								var videofound = false;
								var srctagfound = false;
								var videosrc = '';
								num++;
							}
						}
						if (u28count <= 0) {
							searchresults.find('*').not('.u28skel').not('.u28skel li').not('.u28resultsclose').not('.u28resultsclose a').remove();
						}
						setTimeout(function () {
							searchresults.append(sitelinkmarkup);
							searchresults.append(reccomendedmarkup);
							searchresults.append(resultsmarkup);
							searchresults.removeClass('hidden').addClass('u28found');
							if (u28searchpg === 0) {
								searchresults.find('.u28resultsclose a').each(function (el){
									el.focus();
								})
							}
							u28videocheck();
							if (window.NE('.cb19v2').nodes.length) {
								window.NE('.cb19v2').each(function (el) {
									if (window.NE(el).find('img, .bcthumbnail').length) {
										window.NE(el).closest('.cb19v2').addClass('u28proimg');
									}
								});
								window.NE('cite a').attr('tabindex', '-1');
							}
							removeInputFocus();
							var input = document.getElementById("askoracleinput");
							//Run Analytics
							if (u28count <= 0) {
								//function s_postPlugins(s) {
								try {
									s.prop3 = s.pageName + ":Search>" + input.value;
									s.prop4 = "Search>" + input.value;
									s.prop6 = "0";
									s.prop8 = s.pageName;
									s.eVar26 = "search:askoracle";
									s.prop26 = s.eVar26;
									s.channel = "askoraclesearch";
									s.eVar52 = searchurl;
									s.pageName = s_account[1] + ":" + s_account[2] + ":askoraclesearch";
									s_Ping(true);
									s.pageName = s.prop8;
								} catch (e) {
									//console.log('analytics var fail');
								}
								//}
								//$.getScript('//oracle.com/search/assets/ngui/ora_code.js');
								//$.getScript('//oracle.com/search/assets/ngui/ora_code_endecasearch.js');
							}
							input.selectionEnd = input.selectionStart;
							input.blur();
							adjustDropdown();
							searchresults.removeClass('loading');
						}, 100);
						res(data)
					} else if (u28count <= 0) {
						setTimeout(function () {
							if (!NE('.u28w8 .u28noresults').nodes[0]) {
								searchresults.removeClass('loading hidden');
								searchresults.addClass('u28found');
								if (u28searchpg === 0) {
									searchresults.find('.u28resultsclose a').each(function (el){
										el.focus();
									})
								}
								searchresults.nodes[0].append(NE('.u28w9').clone().nodes[0].firstElementChild);
								NE('.u28w8 .u28noresults .u28rw2').nodes[0].append(NE('.u28w7').clone().nodes[0])
								adjustDropdown();
								res(data)
							}
						}, 200);
					} else {
						searchresults.removeClass('loading hidden');
						searchresults.addClass('u28found');
						adjustDropdown();
					}
				})
			})
				.then(function( data ) {
					var u28bottom = true;
					searchresults.addClass('u28loaded');
					//Remove Tab from vjs-big-play-button
					NE(".u28w8").on("keydown", ".bclink", function (e) {
						NE('.u28video .vjs-big-play-button').attr('tabindex','-1');
					});
					setTimeout(function() {

						var u28results = document.querySelectorAll('.u28w8 .u28result'),
						lastChild =  u28results [u28results.length -1 ];
						var $allAnchor = lastChild.querySelectorAll('a');
						var lastAnchor  = $allAnchor[0];
						function _handler(e) {
							if (e.shiftKey && e.keyCode == 9) {
								return;
							}
							if (e.keyCode === 9) {
								e.preventDefault();
								searchresults.find('.u28resultsclose a').each(function (el){
									el.focus();
								})
							}
						}
						lastAnchor && lastAnchor.addEventListener('keydown', _handler);

						NE('.u28w4').on('scroll',function() {
							var a = searchresults.nodes[0].getBoundingClientRect().top;
							var b = parseFloat(getComputedStyle(searchresults.nodes[0], null).height.replace("px", ""))
							var c = window.innerHeight|| document.documentElement.clientHeight||
								document.body.clientHeight;
							//var d = $(window).scrollTop();
							var d = NE('.u28w4').nodes[0].scrollTop;
							if ((c+d)>(a+b)) {
								if(u28bottom){
									//Reached Search Bottom');
									if (u28searchpg >= 0) {
										u28searchpg = u28searchpg + 10;
									}
									buildResults(u28searchpg);
									u28bottom=false;
								}
							}
						});
					}, 200);
				});
		};

		// Infinity search tracking function
		function infinitySearchTracking(searchBoxEle, recordsCount){
			var searchTerm = (searchBoxEle) ? searchBoxEle.value : "";
			var formName,
				searchBoxLoc = NE(searchBoxEle).closest('[data-trackas]').attr('data-trackas'),
				$searchform = NE(searchBoxEle).closest('form');
			var datapayload = {
				'wt.z_osplugin' : '1',
				'wt.oss': searchTerm,
				'wt.oss_r': recordsCount,
				'wt.oss_sbl': searchBoxLoc
			};

			if (window.infinityIsAutocomplete == true){
				datapayload['wt.oss_ac'] = 1;
			}
			// get search form name
			if ($searchform) {
				var formName = $searchform.attr('name') ? $searchform.attr('name') : ( $searchform.attr('id') ? $searchform.attr('id') : null);
				if (formName) {
					datapayload['wt.oss_sbt'] = formName;
				}
			}
			// custom click tracking call
			if (window.ORA) {
				ORA.click({"config": {},"data": datapayload});
			}
		}

		function submitHandler(e) {
			e.preventDefault();
			//opendropdown();
			searchresults.find('*').not('.u28skel').not('.u28skel li').not('.u28resultsclose').not('.u28resultsclose a').each(function (el) {
				el.remove();
			})
			u28searchpg = 0;
			// set a variable to identify if autocomplete is used
			if (!e['originalEvent'] || (index(NE(".u28suggest li[aria-selected='true']").nodes[0]) > 0)) {
				window.infinityIsAutocomplete = true;
			} else {
				window.infinityIsAutocomplete = false;
			}

			buildResults(0);
			u28.removeClass("u28navactive u28cover");
			u28nav.removeClass('u28fadeIn');
			opendropdown();
			setTimeout(function () {
				searchresults.addClass('u28fadeIn').siblings('.u28trgt').removeClass('u28fadeIn');
				NE('.u28suggest').removeClass('active');
			}, 200);
			e.preventDefault();
		}

		askoracleform.on('submit',submitHandler);

		function updateLinks(u28p) {
			var	hloco = window.location.host;
			var	turl = encodeURI(window.location.href.replace(/^http:/gi, 'https:')).replace(/^https:\/\/www-content/gi, 'http://www-content');
			u28p.find('a[href*="nexturl="]').each(function(el){
				var $plink = NE(el);
				$plink.attr('href', $plink.attr('href').replace(/nexturl=/gi, 'nexturl=' + turl));
			})
			// maybe need this	$psout.attr('href', $psout.attr('href').replace(/p_done_url=/gi, 'p_done_url=' + turl));
			//if page is in a frame target top
			if (window.frameElement) {
				NE(document).find('#u28 a, #u28nav a').attr('target', '_top');
			}
		}

		updateLinks(NE('.u28l-out'));

		function adjustDropdown() {
			var formheight = NE('.u28 .u28w1').nodes[0].offsetHeight
			var inputwrapoffset = NE(".u28 .u28w2").nodes[0].getBoundingClientRect();
			var u28s2offset = {
				left: NE(".u28 .u28s2").nodes[0].offsetLeft,
				top: NE(".u28 .u28s2").nodes[0].offsetTop
			};
			var cwPos = {
				left: NE(".u28w1 .cwidth").nodes[0].offsetLeft,
				top: NE(".u28w1 .cwidth").nodes[0].offsetTop
			};
			var leftMargin = NE(".u28w1 .cwidth").nodes[0].style.marginLeft;
			var cwOffset = cwPos.left + parseInt(leftMargin ? leftMargin : 0, 10);
			var u28s2width = NE(".u28 .u28s2").nodes[0].offsetWidth;
			var windowheight = window.innerHeight;
			//var windowwidth = window.innerWidth;
			var windowwidth = window.innerWidth;
			var u28profilebtn = NE('.u28 .u28prof');
			var btnwidth = u28profilebtn.nodes[0].offsetWidth;
			var profileright = (windowwidth - (u28profilebtn.nodes[0].getBoundingClientRect().left + btnwidth));
			if (u28rtl) {
				var profileright = u28profilebtn.nodes[0].getBoundingClientRect().left
			}
			var observer = new MutationObserver(function(mutations){
				mutations.forEach(function(mutation){
					u28mobileCheck();
					if (u28mobile) {
						if(mutation.target.classList.contains('u28navactive') || mutation.target.classList.contains('dropdownactive')  || mutation.target.classList.contains('profactive')){
							NE('body').addClass('u28disable-scroll');
						}
						else {
							NE('body').removeClass('u28disable-scroll');
						}
					}
				});
			});

			var u28id = document.getElementById("u28");

			observer.observe(u28id, {attributes: true});
			u28profiledropdown.nodes[0].style.display = "block"
			var offsetWidth = u28profiledropdown.nodes[0].offsetWidth
			if ((profileright + btnwidth - 20) <= offsetWidth) {
				u28profiledropdown.addClass('right');
			}
			if ((profileright + btnwidth - 20) > offsetWidth) {
				u28profiledropdown.removeClass('right');
			}
			u28profiledropdown.nodes[0].style.display = ""
			if (!u28mobile) {
				if (NE('body').is('.f11')) {
					var lSpace = 15;
					var firstItemOffsetLeft = document.getElementById("u28s1").offsetLeft;
					var firstItemwidth =document.querySelector('.u28s1').offsetWidth;
					var offset = firstItemOffsetLeft + firstItemwidth + lSpace ;
					searchresults.nodes[0].style.cssText = "width:" + u28s2width + 'px' + ";left:" + ((cwOffset+offset  )+'px') + ";"
					//$('.u28 .u28w2 ul.u28suggest li a, .u28 .u28w2 ul.u28suggest li cite').each( function(){
					NE('.u28 .u28w2 ul.u28suggest li a').each( function(el){
							//$(this).css({'margin-left':(u28s2offset.left+'px')});
							el.style.marginLeft = ((cwOffset + offset + 'px'));
							el.style.maxWidth = (u28s2width + 'px')
					});
				}
				else {
					searchresults.nodes[0].style.cssText = "width:" + u28s2width + 'px' + ";left:" + (inputwrapoffset.left+'px') + ";"
					// searchresults.css("width", u28s2width).css({'left':(inputwrapoffset.left+'px')});
					//$('.u28 .u28w2 ul.u28suggest li a, .u28 .u28w2 ul.u28suggest li cite').each( function(){
					NE('.u28 .u28w2 ul.u28suggest li a').each( function(el){
						//$(this).css({'margin-left':(inputwrapoffset.left+'px')});
						el.style.marginLeft = (inputwrapoffset.left + 'px');
						el.style.maxWidth = (u28s2width + 'px')
						// $(this).css({
						//     'margin-left' : (inputwrapoffset.left+'px'),
						//     'max-width' : (u28s2width+'px')
						// });
					});
				}
			}

			if(NE('.u28v0').nodes[0]){
				var heights  = NE('.u28v0 .u28navw1>ul').map(function (node) {
					return node.clientHeight;
				})
				var maxHeight = Math.max.apply(null, heights);
				var u28buffer = 88;
			}
			if(v1check){
				var heights = NE('.u28v1 .u28navw2').map(function (node) {
					return node.clientHeight;
				})
				var maxHeight = Math.max.apply(null, heights.nodes);
				var u28buffer = 61;
			}

			if (formheight + maxHeight + u28buffer >= windowheight) {
				NE('.u28 .u28nav').addClass('u28shortnav');
			}
			else {
				NE('.u28 .u28nav').removeClass('u28shortnav');
			}
		}

		function showsuggest() {
			if (v1check) {
				u28.removeClass('u28cover');
			}
			setTimeout(function() {
				NE('.u28suggest').addClass('active');
				searchresults.removeClass('hidden');
			}, 300);
			NE('.u28navactive .u28nav').removeClass('u28fadeIn');
			u28.removeClass('u28navactive');
			if ( elem.nodes[0].style.opacity == '0' || elem.nodes[0].style.visibility == "hidden"){
				//why run?
				elem.nodes[0].style.opacity = 0
				elem.nodes[0].style.visibility = "visible";
				setTimeout(function (){
					lem.nodes[0].style.opacity = 1
				},300)
			}
			//if ( clearbtn.css('display') == 'none' || clearbtn.css("visibility") == "hidden"){
			//	clearbtn.css("opacity", 0.0).css("visibility", "visible").delay(300).animate({"opacity": 1.0}, 300);
			//}
		}

		if (!v1check) {
			window.addEventListener("resize", function() {
				u28mobileCheck();
				adjustDropdown();
			});

			window.addEventListener("orientationchange", function() {
				adjustDropdown();
				// hammer, meet nail...
				if(v1check && !NE('.u28navitm.active').nodes[0] && NE('.u28.u28cover').nodes[0]){
					NE('a.mnavback').click();
				}
			});
		}

		setTimeout(function() {
			//adjustDropdown();
			window.addEventListener("scroll",function(){
				u28didScroll = true;
				var doc = document.documentElement;
				var pgst = (window.pageYOffset || doc.scrollTop);
				if (pgst <= 1 && u28.hasClass('u28-past')) {
					u28.removeClass('u28-down u28-up u28-past').addClass('u28-top');
				}
			});
			setInterval(function() {
				if (u28didScroll) {
					u28hasScrolled();
					u28didScroll = false;
				}
				//used to be 50
			}, 25);
		}, 200);

		var inputField = '',
				lastComplete,
				u28suggestCnt;

		var  Autocomplete = {
			init: function(opts) {
				inputField = opts.inputField;
				lastComplete = null;
			},
			clearTypeAhead: function(id) {

			},
			onload: function() {
				Autocomplete.init({
					inputField: NE('#askoracleinput')
				});
				inputField.on('input', function() {
					var u28length = this.value.length;
					if (u28length > 0) {
						NE('.u28placeholder').addClass('u28hidden');
						NE('.u28w3').addClass('u28typing');
					}
					if (u28length === 0) {
						NE('.u28w3').removeClass('u28typing');
					}
				});
				inputField.on('keydown',function(event) {
					var u28code = event.keyCode;
					var li = NE('.u28suggest li');
					if(u28code === 40) {
						if (NE('.u28suggest').hasClass('active')) {
							if(liSelected) {
								liSelected.attr('aria-selected', 'false');
								next = liSelected.nodes.length >0 ?liSelected.nodes[0].nextElementSibling :null;
								if(next) {
									liSelected = NE(next).attr('aria-selected', 'true');
								} else {
									liSelected = NE(li.nodes[0]).attr('aria-selected', 'true');
								}
							} else {
								liSelected = NE(document.querySelectorAll(".u28suggest li:not([aria-selected='true'])")[0]).attr('aria-selected', 'true');
								liSelected.siblings().attr('aria-selected', 'false');
							}
							if(liSelected) {
								var x =  liSelected.find('a').clone();
								x.children('cite').each(function (item){
									item.parentNode.removeChild(item)
								})
								elem.nodes[0].value = x.nodes.length >0 ? (x.nodes[0].textContent):'';
								elem.attr("aria-activedescendant", liSelected.attr('id'));
							}
							return false;
						}
					} else if (u28code === 38) {
						//Up Arrow and shift tab
						if(liSelected) {
							liSelected.attr('aria-selected', 'false');
							next = liSelected.nodes.length >0 ? liSelected.nodes[0].previousElementSibling:null;
							if(next) {
								liSelected = NE(next).attr('aria-selected', 'true');
							} else {
								liSelected = NE(li.nodes[li.nodes.length -1]).attr('aria-selected', 'true');
							}
						} else {
							liSelected = NE(li.nodes[li.nodes.length -1]).attr('aria-selected', 'true');
						}
						if(liSelected) {
							var x =  liSelected.find('a').clone();
							x.children('cite').each(function (item){
								item.parentNode.removeChild(item)
							});
							elem.nodes[0].value = x.nodes.length >0 ? (x.nodes[0].textContent):'';
							elem.attr("aria-activedescendant", liSelected.attr('id'));
						}
						return false;
					}
				});

				inputField.on('keyup',u28delay(function(event){
					var inputval = this.value.replace(/</g,'&lt;').replace(/>/g,'&gt;');
					var inputvalurl = encodeURIComponent(this.value);
					//var inputval = this.value.replace(/</,'&lt;').replace(/>/g,'&gt;');
					//var suggestinputval = encodeURIComponent(inputval);
					//var suggestreplace = false;
					var u28code = event.keyCode;
					var u28length = this.value.length;
					var u28match = false;
					var li = NE('.u28suggest li');
					var firstsugtxt = '';
					if(!u28staging && !u28developer) {
						var AutosuggestJsonUrl = '/search/askoraclesuggest/json?Ntx=all&Ntt=' +inputvalurl + '';
						var AutocompleteJsonUrl = '/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=' +inputvalurl + '*';
					}
					else if (u28developer) {
						var AutosuggestJsonUrl = 'https://www.oracle.com/search/askoraclesuggest/json?Ntx=all&Ntt=' +inputvalurl + '';
						var AutocompleteJsonUrl = 'https://www.oracle.com/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=' +inputvalurl + '*';
						//if (u28local) {
						//	var AutosuggestJsonUrl = '/search/askoraclesuggest/json?Ntx=all&Ntt=' +inputvalurl + '';
						//	var AutocompleteJsonUrl = '/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=' +inputvalurl + '*';
						//}
					}
					else {
						//stage
						//var AutosuggestJsonUrl = 'https://www-portal-stage.oracle.com/search/askoraclesuggest/json?Ntt=' +inputvalurl + '';
						//var AutocompleteJsonUrl = 'https://www-portal-stage.oracle.com/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=' +inputvalurl + '*';
						var AutosuggestJsonUrl = 'https://www-stage.oracle.com/search/askoraclesuggest/json?Ntt=' +inputvalurl + '';
						var AutocompleteJsonUrl = 'https://www-stage.oracle.com/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=' +inputvalurl + '*';
						//production
						//var AutosuggestJsonUrl = 'https://www.oracle.com/search/askoraclesuggest/json?Ntx=all&Ntt=' +inputvalurl + '';
						//var AutocompleteJsonUrl = 'https://www.oracle.com/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=' +inputvalurl + '*';
					}

					//Keycodes
					//8=backspace 46=delete
					if( u28code == 8 || u28code == 46 ) {
						return false;
					}

					//Return
					if (u28code == 13) {
						//check to see if suggest link is selected, then follow link
						NE('.u28suggestlnk').each( function(el){
							if (NE(el).parent().attr('aria-selected') == 'true' && (NE('.u28suggest').nodes[0].offsetWidth >0 ||  NE('.u28suggest').nodes[0].offsetHeight >0)) {
								closedropdown();
								NE('.u28suggest').nodes[0].style.display = 'none';
								var url = NE(el).attr('href');
								window.location = url;
								return false;
							}
						});
						scrollToTop();
						NE('.u28suggest').removeClass('active');
						return false;
					}

					//down arrow or tab
					if(u28code === 40 || u28code === 9) {
						event.preventDefault();
						return false;
					} else if(u28code === 38) {
						return false;
					}
					//right arrow or tab
					if(u28code === 39 || u28code === 9) {
						if(u28code === 9) {
							event.preventDefault();
						}
						if(lastComplete) {
							Autocomplete.clearTypeAhead();
							inputField.nodes[0].value = lastComplete;
						}
					}

					//Length
					if (u28length === 0 ||  inputField.nodes[0].value === '') {
						Autocomplete.clearTypeAhead('u28typeahead');
						//$('.u28-microphone').fadeIn(100);
						//clearbtn.css("opacity", 1.0).animate({"opacity": 0.0}, 300).delay(300).css("visibility", "hidden");
						NE('.u28w3').removeClass('u28typing');
					}
					if (u28length > 0) {
						addInputFocus();
						//if ( clearbtn.css('display') == 'none' || clearbtn.css("visibility") == "hidden"){
						//	clearbtn.css("opacity", 0.0).css("visibility", "visible").delay(300).animate({"opacity": 1.0}, 300);
						//}
					}
					if (u28length > 2 && !searchresults.hasClass('loading')) {
						var autosuggest = false;
						var autocomplete = false;
						//Get Autosuggest
						Promise.all([fetchData(AutosuggestJsonUrl), fetchData(AutocompleteJsonUrl)]).then(function( res ) {
							var a1 = [];
							var a2 = [];
							a1[0] = JSON.parse(res[0])
							a2[0] = JSON.parse(res[1])
							NE('.u28suggest').html('');
							//Display Autosuggest
							if (a1[0].contents[0].numResults > 0 && NE('.u28.dropdownactive').nodes[0] && !u28developermenu){
								a1[0].contents[0].records.forEach(function (val, key) {
									if (key <= 2) {
										var title = val.attributes.Title;
										var url = val.attributes.aoDestinationURL;
										var type = val.attributes.aoDestinationType;
										var typeclass = 'u28-globe';
										var titleTxt = title.toString();
										var suggestb = titleTxt.replace(new RegExp(inputval, "gi"), function (match) {
											return "<b>".concat(match, "</b>");
										});

										if (type) {
											if (type[0] === 'Video') {
												var typeclass = 'icn-video';
											}
											if (type[0] === 'Coversation') {
												var typeclass = 'icn-chat';
											}
										}
										NE('.u28suggest').append('<li aria-selected="false" role="option" tabindex="-1"><a tabindex="-1" class="'+typeclass+' u28suggestlnk" href="'+url+'" data-trackas="header:search:suggestlnk" data-lbl="keyword:'+inputval+':suggest:'+title+'">'+suggestb+'<cite>'+url+'</cite></a></li>');
									}
								});
								var autosuggest = true;
							}
							//Display Autocomplete
							if(a2[0].contents[0].autoSuggest[0].totalNumResults > 0 && NE('.u28.dropdownactive').nodes[0]){
								a2[0].contents[0].autoSuggest[0].dimensionSearchGroups[0].dimensionSearchValues.forEach(function (val, key) {
									var rep_regex = new RegExp(inputval,"gi");
									var completeb = val.label.replace(rep_regex,"<b>" + inputval + "</b>");
									NE('.u28suggest').append('<li aria-selected="false" role="option" tabindex="-1"><a tabindex="-1" class="u28-search u28complete" href="#" data-trackas="header:search" data-lbl="keyword:'+inputval+':suggest:'+val.label+'">'+completeb+'</a></li>');
								});
								var autocomplete = true;
							}else if(!NE('#u28.dropdownactive').nodes[0] && NE('a.u28clsSearch').nodes[0]){
								NE('a.u28clsSearch').click();
							}

							//Display dropdown if autocomplete or autosuggest gets results
							if(autosuggest || autocomplete) {
								if (NE(NE('.u28suggest li').nodes[0].querySelectorAll('a')).nodes.length > 0) {
									var firstsug = NE('.u28suggest li').nodes[0];
									//var firstsugtxt = $('.u28suggest li:first a').text();
									var x =  NE(NE('.u28suggest li').nodes[0].querySelectorAll('a')).clone()
									x.children('cite').each(function (item){
										item.parentNode.removeChild(item)
									})
									var firstsugtxt = (x.nodes[0].textContent);
									if (firstsugtxt.indexOf(inputval) === 0) {
										//search term found in first list item
										var complete = firstsugtxt;
										var lastComplete = complete;
										if(complete === null) {
											Autocomplete.clearTypeAhead('u28typeahead');
										} else {
											//Look for matches to inputval in text of dropdown, if not insert one with inputval after
											NE('.u28suggest li a').each(function(elm){
												if (inputval === NE(elm).text()) {
												//u28match = true;
												if (!NE(elm).hasClass("u28suggestlnk")) {
													NE(elm).parent().remove();
												}
												}
											});
											NE(NE('.u28suggest li').nodes[0]).before('<li aria-selected="false" role="option" tabindex="-1"><a tabindex="-1" class="u28-search u28complete" href="#">'+inputval+'</a></li>');
											// insertAfter(firstsug,NE('<li aria-selected="false" role="option" tabindex="-1"><a tabindex="-1" class="u28-search u28complete" href="#">'+inputval+'</a></li>').nodes[0])
											var begin = complete.substr(0,u28length);
											var end = complete.substr(u28length);
											var input = document.getElementById("askoracleinput");
											var y = u28length+end.length;
											elem.nodes[0].value = (begin + end);
											input.focus();
											// Highlights
											input.setSelectionRange(u28length, y);
											firstsug.setAttribute('aria-selected', 'true');
											setTimeout(function() {
												adjustDropdown();
											}, 100);
										}
									}
									else {
										Autocomplete.clearTypeAhead('u28typeahead');
										firstsug.setAttribute('aria-selected', 'false');
										NE('.u28suggest').prepend('<li aria-selected="true" role="option" tabindex="-1"><a tabindex="-1" class="u28-search u28complete" href="#">'+inputval+'</a></li>');
									}
									adjustDropdown();
									opendropdown();
								}

							}
							else {
								//No Auto Complete Results
								NE('.u28suggest').append('<li aria-selected="true" role="option" tabindex="-1"><a tabindex="-1" class="u28-search u28complete" href="#">'+inputval+'</a></li>');
								adjustDropdown();
								opendropdown();
							}

							NE('.u28suggest li').each( function(el,ind) {
								NE(el).attr('id', 'suggest-' + parseInt(ind + 1));
								NE(el).attr('aria-posinset', parseInt(ind + 1));
								u28suggestCnt = ind;
							});

							NE('.u28suggest li').each(function() {
								NE(this).attr('aria-setsize', u28suggestCnt);
								if (NE(this).attr('aria-selected') === "true") {
									elem.attr("aria-activedescendant", NE(this).attr('id'));
								}
							});

							var u28announce = document.querySelector('#u28announce');
							if (u28announce) {
								u28announce.innerText = '';
								var alerttxt = u28announce.getAttribute('data-alerttxt');
								u28announce.innerText = u28suggestCnt + ' ' + alerttxt;
							}

							elem.attr('aria-expanded','true');
							showsuggest();
						});
					}
				},u28debouncenum));

				//V1
				if(v1check){

					NE('.u28v1,.u28v1 .u28s2').addClass('killtransition');

					NE('.u28input').append('<a href="#" class="u28clsSearch" title="Clear Search Field"></a>');

					NE('a.u28clsSearch').on("click", function(e) {
						closedropdown();
						u28.addClass('u28cover dropdownactive');
						NE('.u28suggest').removeClass('active');
						NE('.u28w3').removeClass('u28typing');
						elem.nodes[0].value= '';
						elem.nodes[0].focus();
						e.preventDefault();
						return false;
					});

					var u28resizedelay = 100;

					window.addEventListener("resize", function() {
						if (!resizing) {
							resizing = true;
							u28v1resize();
							adjustDropdown();
							setTimeout(function() {
								resizing = false;
								positionSearchBar();
							}, u28resizedelay);
						}
					}, false);

					window.addEventListener("orientationchange", function() {
						if (!resizing) {
							//Fixes iPad Pro issue
							if(NE('.u28nav.u28fadeIn')[0]){
								NE('.u28nav.u28fadeIn').addClass('u29temphide');
								setTimeout(function() {
									NE('.u29temphide').removeClass('u29temphide');
								}, 10);
							}
							resizing = true;
							u28v1resize();
							adjustDropdown();
							setTimeout(function() {
								resizing = false;
								positionSearchBar();
							}, u28resizedelay);
						}
					}, false);

					function u28v1resize() {
						if (NE(".u28v1 .u28navw2[data-type].active").length === 0) {
							u28.removeClass('u28navactive u28cover u28-up u28-open');
							NE(".u28v1 .u28s4 a[data-target], .u28v1 .u28navw1 a[data-target]").removeClass('active');
							u28nav.removeClass('u28fadeIn');
						}
						if (NE('.u28s2').hasClass("active")) {
							u28.addClass('u28cover');
						}
						if (searchresults.hasClass("u28found")) {
							u28.removeClass('u28cover');
						}
						//give time for rotation, could switch between desktop and mobile
						setTimeout(function() {
							u28mobileCheck();
							var u28id = document.getElementById("u28");
							if (NE('body').hasClass('u28disable-scroll')) {
								if(!u28id.classList.contains('u28navactive') || !u28id.classList.contains('dropdownactive') || !u28id.classList.contains('profactive')){
									NE('body').removeClass('u28disable-scroll');
								}
							}
							if (u28mobile) {
								NE(".u28v1 .u28navw2[data-type]:not(.active)").each(function (el){
									slideUp(el,0);
								})
							}
							else {
								NE(".u28v1 .u28navw2[data-type]").each(function (el){
									el.style.display = 'grid'
								})
							}
							u28v1equalHeight();
							checkShortProf();
						}, u28resizedelay);
						//positionSearchBar();
					}

					function u28showSearchBar() {
						NE('.u28v1 .u28s2').addClass('killtransition');
						positionSearchBar();
						NE('.u28v1 .u28s2').removeClass('killtransition');
						NE('.u28v1 .u28s4').addClass('hidden');
						NE('.u28v1 .u28s2').addClass('active');
						positionSearchBar();
						addInputFocus();
						setTimeout(function() {
							elem.nodes[0].focus();
						}, 400);
						//Close Nav
						NE(".u28v1 .u28s4 a[data-target], .u28v1 .u28navw1 a[data-target]").removeClass('active');
						NE(".u28v1 .u28navw2[data-type]").removeClass('active');
						u28acscheck();
					}

					var u28mobilebuilt = false;

					NE('.u28v1 .u28s4 a, .u28v1 .u28ham').on('click', function (e) {
						resizing = true;
						setTimeout(function() {
							resizing = false;
						}, 2500);
						// nuke search state
						NE('.u28w4').removeClass('u28dropfadeIn dropdownopen');
						NE('#askoracleinput').nodes[0].value = '';
						NE('.u28w3').removeClass('u28typing');

						NE("#u28").addClass('rw-icons').removeClass('killtransition');
						if (u28profiledropdown.hasClass("u28fadeIn")) {
							toggleprof();
						}
						if (!u28mobilebuilt) {
							u28mobilebuilt = true;
							NE('.u28v1 .u28s4 a').each(function(node) {
								if (!NE(node).hasClass("u28search")) {
									var u28btntrgt = NE(node).attr('data-target');
									var p = node.cloneNode(true);
									p.classList.add('u28mctrl')
									// NE(this).clone().addClass('u28mctrl').insertBefore(".u28v1 .u28navw2[data-type='"+u28btntrgt+"']");
									// insertBefore(p, NE(".u28v1 .u28navw2[data-type='" + u28btntrgt + "']").nodes[0])
									NE(".u28v1 .u28navw2[data-type='" + u28btntrgt + "']").before(p)
								}
							});
							//Mobile Menu Control
							NE('.u28v1 a.u28mctrl').on("click", function(e) {
								var u28btntrgt = NE(this).attr('data-target');
								if (NE(this).hasClass('active')) {
									NE(".u28v1 .u28s4 a[data-target],.u28v1 .u28navw1 a[data-target]").removeClass('active');
									NE(".u28v1 .u28navw2[data-type]").each(function (el){
										// slideUp({element: el, slideSpeed: 200})
										el.style.display = 'none'
										NE(el).removeClass('active');
									})
								}
								else {
									NE(".u28v1 .u28s4 a[data-target],.u28v1 .u28navw1 a[data-target]").removeClass('active');
									NE(e.target).addClass('active');
									NE(".u28v1 .u28s4 a[data-target='"+u28btntrgt+"'], .u28v1 .u28navw1 a[data-target='"+u28btntrgt+"']").addClass('active');
									//$(".u28v1 .u28navw2[data-type]").removeClass('active');
									NE(".u28v1 .u28navw2[data-type]").each(function (el){
										// slideUp({element: el, slideSpeed: 200})
										el.style.display = 'none'
										NE(el).removeClass('active');
									})
									NE(".u28v1 .u28navw2[data-type='"+u28btntrgt+"']").nodes[0].style.display ='grid'
									slideDown( NE(".u28v1 .u28navw2[data-type='"+u28btntrgt+"']").nodes[0],  500)
									NE(".u28v1 .u28navw2[data-type='"+u28btntrgt+"']").addClass('active');
								}
								e.preventDefault();
								e.stopImmediatePropagation();
								return false;
							});
						}
						if (NE(this).hasClass("u28search")) {
							// nuke/hide any old content on open (maybe some is left over from exiting out of search before json is returned)
							NE('ul.u28suggest').html(''); // clear suggest on open
							NE('.u28suggest.active').removeClass('active');  // remove suggest active on open
							NE('.u28found').removeClass('u28fadeIn u28loaded u28found');  // remove results classes if any lingering found objects are present, otherwise we get flashes of search results after exiting a search before results are returned, then initiating another search
							positionSearchBar();
							u28showSearchBar();
							u28.toggleClass("dropdownactive u28cover");
							u28.removeClass('u28-up u28-open').addClass('u28-down');
							elem.nodes[0].focus();
							if (u28.hasClass("u28navactive")) {
								NE(".u28v1 .u28s4 a[data-target], .u28v1 .u28navw2[data-type], .u28v1 .u28navw1 a[data-target]").removeClass('active');
								if (u28mobile) {
									NE(".u28v1 .u28navw2[data-type]").each(function (el){
										// slideUp(el,300);
										el.style.display = 'none'
									})
								}
								u28acscheck();
								u28.toggleClass("u28navactive u28cover");
								u28nav.toggleClass('u28fadeIn');
								u28.removeClass('u28-up u28-open').addClass('u28-down');
							}
							e.preventDefault();
							return false;
						}
						if (u28.hasClass("u28navactive") && NE(this).hasClass("u28ham")) {
							NE('.u28ham').attr('aria-expanded','false');
							setTimeout(function() {
								u28nav.nodes[0].scrollTop = 0;
								NE(".u28v1 .u28s4 a[data-target], .u28navw1 a[data-target], .u28navw2[data-type]").removeClass('active');
								if (u28mobile) {
									NE(".u28v1 .u28navw2[data-type]").each(function (el){
										//  slideUp({element:el,slideSpeed:0})
										el.style.display = 'none'
										NE(el).removeClass('active');
									})
								}
							}, 401);
						}

						if (!u28.hasClass("u28navactive") && NE(this).hasClass("u28ham")) {
							NE('.u28ham').attr('aria-expanded','true');
						}

						if (!u28.hasClass("u28navactive") || NE(this).hasClass("u28ham")) {
							u28v1equalHeight();
							u28acscheck();
							u28.toggleClass("u28navactive u28cover");
							u28nav.toggleClass('u28fadeIn');
							u28.removeClass('u28-up').addClass('u28-down u28-open');
							removeInputFocus();
						}

						if (NE(this).hasClass("u28ham")) {
							if (NE('.u28v1 .u28s2').hasClass("active")) {
								//Close Search
								NE('.u28v1 .u28s4').removeClass('hidden');
								NE('.u28v1 .u28s2').removeClass("active");
								positionSearchBar();
							}
						}

						if (NE(this).attr('data-target') && typeof NE(this).attr('data-target') !== "undefined") {
							var u28btntrgt = NE(this).attr('data-target');
							if (!NE(this).hasClass("active")) {
								NE('.u28ham').attr('aria-expanded','true');
								NE('.u28nav').nodes[0].scrollTo =0;
								//Nav Links
								NE(".u28v1 .u28s4 a[data-target], .u28navw1 a[data-target]").removeClass('active');
								NE(".u28v1 .u28s4 a[data-target='"+u28btntrgt+"'], .u28navw1 a[data-target='"+u28btntrgt+"']").addClass('active');
								//Nav Content
								NE(".u28v1 .u28navw2[data-type]").removeClass('active');
								NE(".u28v1 .u28navw2[data-type='"+u28btntrgt+"']").addClass('active');
								NE("#u28").addClass('rw-icons');
								setTimeout(function() {
									//$(".u28v1 .u28navw2[data-type]").css("display", "none");
									NE(".u28v1 .u28navw2[data-type]").each(function (el){
										el.style.visibility = 'hidden';
									})
									NE(".u28v1 .u28navw2[data-type='"+u28btntrgt+"']").each(function (el){
										el.style.display = 'grid';
									})
								}, 300);
								setTimeout(function() {
									NE(".u28v1 .u28navw2[data-type]").each(function (el){
										el.style.display = 'grid';
									})
								}, 301);
								if(!NE(this).is('.o-hf')){
									setTimeout(function() {
										NE('div[data-type="'+u28btntrgt+'"].u28navw2 div a:first-of-type').nodes.length > 0 ? NE('div[data-type="'+u28btntrgt+'"].u28navw2 div a:first-of-type').nodes[0].focus() :null;
									}, 301);
								}
							}
							else {
								NE('.u28ham').attr('aria-expanded','false');
								//Close Nav
								if (!u28.hasClass("u28navactive")) {
									NE(".u28v1 .u28s4 a[data-target],.u28v1 .u28navw1 a[data-target]").removeClass('active');
									NE(".u28v1 .u28navw2[data-type]").removeClass('active');
								}
								else {
									setTimeout(function() {
										NE(".u28v1 .u28s4 a[data-target],.u28v1 .u28navw1 a[data-target]").removeClass('active')
										NE(".u28v1 .u28navw2[data-type]").removeClass('active');
									}, 401);
								}
								u28acscheck();
								u28.toggleClass("u28navactive u28cover");
								u28nav.toggleClass('u28fadeIn');
								u28.removeClass('u28-up');
								u28.addClass('u28-down');
								u28.removeClass('u28-open');
							}
						}
						adjustDropdown();
						e.preventDefault();
					});

					NE('#u28 .u28navw1').on('click', 'a', function(e) {
						e.preventDefault();
					});

				};
			}
		};

		//window.addEventListener("load",function(event) {
			Autocomplete.onload();
		//});
	}
});



$(function(){
	
/*! U30 */
var u30Wrapper = () => {
const u30 = document.getElementById('u30');

let u30v4 = document.getElementsByClassName('u30v4').length > 0 ? true : false;
if (u30v4) {
	//Skip to Content
	var u30skip2 = document.getElementById("u30skip2");
	if(u30skip2){
		//Change Markup
		u30skip2.removeAttribute("tabindex");
		u30skip2.removeAttribute("aria-expanded");
		var u30skipLi = doc.getElementById("u30skip2c").parentElement;
		var u30skipLiHtml = u30skipLi.outerHTML;
		u30skipLiParent = u30skipLi.parentElement;
		u30skipLi.remove();
		u30skipLiParent.insertAdjacentHTML('afterbegin', u30skipLiHtml);
		//Clone and Move Markup
		var u30skip2copy = u30skip2.cloneNode(true);
		u30skip2copy.id+= "content";
		document.body.insertBefore(u30skip2copy, document.body.firstElementChild);
		u30skip2.remove();
		//Insert target
		var u30skip2c = document.getElementById("u30skip2c");
		var u30skip2cHref = u30skip2c.getAttribute("href").replace("#","");;
		var u30currentTarget = document.getElementById(u30skip2cHref);
		if(!u30currentTarget){
			u30.insertAdjacentHTML('afterend', '<div id="'+u30skip2cHref+'" class="sr-only"></div>');
		}
	}
}

(function() {
	if (u30 && !u30v4) {
		/**
		 * If browser back button was used, flush cache
		 * This ensures that user will always see an accurate, up-to-date view based on their state
		 * https://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked
		 * 	*/

		(function () {
			window.onpageshow = function(event) {
				if (event.persisted) {
					//window.location.reload();
					u30CloseSearch();
					u30CloseNav();
				}
			};
		})();

		u30.classList.add("ws-sticky");
		const doc = document;
		const u30nav = doc.getElementById('u30nav');
		const u30navw1 = doc.getElementById('u30navw1');
		const u30search = doc.getElementById('u30search');
		const u30input = doc.getElementById("u30input");
		const u30ham = doc.getElementById('u30ham');
		const u30clearSearch = doc.getElementById("u30clear");
		const u30navitems = doc.getElementsByClassName("u30navitem");
		const u30autosuggest = doc.getElementById("u30autosuggest");
		const u30searchForm = doc.getElementById("u30searchForm");
		const u30closeSearchBtn = doc.getElementById("u30closesearch");
		const u30SearchBtn = doc.getElementById("u30searchBtn");
		const u30searchw1 = doc.getElementById('u30searchw1');
		const u30searchw3 = doc.getElementById('u30searchw3');
		const u30results = doc.getElementById("u30results");
		const u30searchresults = doc.getElementById("u30resultsw1");
		const u30accountBtn = doc.getElementById("u30-flyout");
		const u30accountFlyout = doc.getElementById("u30-profilew1");
		const u30actbck = doc.getElementById("u30actbck");
		const u30btitle = doc.getElementById("u30btitle");
		const u30w10 = doc.getElementById("w10");
		const allMainNavLinks = doc.querySelectorAll('a.u30navitem');
		let u30v3 = doc.getElementsByClassName('u30v3').length > 0 ? true : false;
		if (u30v3) {
			var u30contactBtn = doc.querySelector(".u30-contact a");
		}
		let u30Parent = u30.parentElement;
		var cmenucontent = u30ham.href ? u30ham.href : false;
		const u30w_url = window.location.href;
		const u30w_safe_url = encodeURIComponent(window.location.href.replace(/</,"&lt;").replace(/>/,"&gt;")); // lightweight clean up to protect against XSS
		const u30rtl = u30.closest('.rtl') ? true : false;
		const u30opn = u30.classList.contains('opn') ? true : false;
		var u30searchpg = 0;
		var u30suggestCnt = '';
		var firstsugtxt;
		var u30searchprocessing = false;
		var u30keyPressed;

		u30.setAttribute('role','banner');
		u30results.insertAdjacentHTML('beforeend', '<ul id="u30skel"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>');
		const u30skel = doc.getElementById("u30skel");

		//if (u30.classList.contains('u30mobile')) {
		//	u30nav.setAttribute('aria-hidden','true');
		//}

		if (USER.guid && doc.getElementsByClassName('u30l-in').length > 0){
			let u30in = doc.getElementsByClassName('u30l-in')[0];
			if (USER.firstname && USER.firstname != "NOT_FOUND" && USER.lastname && USER.lastname != "NOT_FOUND"){
				u30in.insertAdjacentHTML('afterbegin', '<li><a href="https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl='+u30w_safe_url+'" data-lbl="profile:user-account">'+USER.firstname+' '+USER.lastname+'</a></li>');
			}else if (USER.firstname && USER.firstname != "NOT_FOUND"){
				u30in.insertAdjacentHTML('afterbegin', '<li><a href="https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl='+u30w_safe_url+'" data-lbl="profile:user-account">'+USER.firstname+'</a></li>');
			}
			u30accountFlyout.classList.add('loggedin');
		}

		// add next URL to log in button
		if(u30accountFlyout && u30accountFlyout.querySelectorAll('a[href$="signon?nexturl="]')[0]){
			var u30_signin = u30accountFlyout.querySelectorAll('a[href$="signon?nexturl="]')[0];
			u30_signin.href = u30_signin.href + u30w_safe_url;
		}

		//Change "home" to "oracle home" on logo
		if(u30btitle && u30btitle.getAttribute("aria-label").toLowerCase() === 'home') {
			u30btitle.setAttribute('aria-label','Oracle Home');
		}

		//var liSelected;
		var lastComplete = '';
		let u30staging = u30w_url.indexOf('www-stage') > -1 || u30w_url.indexOf('www-portal-stage') > -1 || u30w_url.indexOf('www.stage') > -1 || u30w_url.indexOf('www-sites') > -1 ? true : false;
		let u30developer = u30w_url.indexOf('developer.oracle') > -1 ? true : false;
		let u30developermenu = doc.getElementsByClassName('u30dev').length > 0 ? true : false;
		let u30navLi = doc.getElementsByClassName('u30navul').length > 0 ? true : false;
		let u30ocom = doc.getElementsByClassName('f11v6').length > 0 ? true : false;
		let u30local = u30w_url.indexOf('localhost') > -1 ? true : false;

		//Skip to Content
		var u30skip2 = doc.getElementById("u30skip2");
		if(u30skip2){
			//Change Markup
			u30skip2.removeAttribute("tabindex");
			u30skip2.removeAttribute("aria-expanded");
			var u30skipLi = doc.getElementById("u30skip2c").parentElement;
			var u30skipLiHtml = u30skipLi.outerHTML;
			u30skipLiParent = u30skipLi.parentElement;
			u30skipLi.remove();
			u30skipLiParent.insertAdjacentHTML('afterbegin', u30skipLiHtml);
			//Clone and Move Markup
			var u30skip2copy = u30skip2.cloneNode(true);
			u30skip2copy.id+= "content";
			document.body.insertBefore(u30skip2copy, document.body.firstElementChild);
			u30skip2.remove();
			//Insert target
			var u30skip2c = document.getElementById("u30skip2c");
			var u30skip2cHref = u30skip2c.getAttribute("href").replace("#","");
			var u30currentTarget = document.getElementById(u30skip2cHref);
			var u30ct12 = document.querySelectorAll('.ct12')[0];
			var u30u03 = document.querySelectorAll('.u03')[0];
			var u30skipMarkup = '<div id="'+u30skip2cHref+'" class="sr-only"></div>';
			if(!u30currentTarget){
				if (u30ct12 && !u30u03) {
					u30ct12.insertAdjacentHTML('afterend', u30skipMarkup);
				} else if (!u30ct12 && u30u03) {
					u30u03.insertAdjacentHTML('afterend', u30skipMarkup);
				} else {
					u30.insertAdjacentHTML('afterend', u30skipMarkup);
				}
			}

		}

		function u30closeAccount() {
			u30accountBtn.setAttribute('aria-expanded','false');
			u30accountBtn.classList.remove('active');
			u30accountFlyout.classList.remove('active');
			u30actbck.setAttribute('aria-hidden','true');
		}

		// MAKE FIXED IF CT12 DOESN'T EXIST
		if(typeof doc.getElementsByClassName("ct12")[0] !== "undefined"){
			u30.classList.add('u30nonstick');
		}

		// ADD GENERIC STICKY CLASS TO HELP CONTROL SCROLLTO SO THAT ITEMS AREN'T UNDER THE NAV
		u30.classList.add('rw-sticky');

		/*function hideSiblings(val) {
			for (const child of u30Parent.children) {
				if (!child.classList.contains("u30")) {
					child.setAttribute('aria-hidden',val);
				}
			}
		}*/

		u30.addEventListener('focusout', (e) => {
			if (!u30.contains(e.relatedTarget) && u30.classList.contains('navexpand') && e.relatedTarget !== null) {
				doc.querySelectorAll('.u30navitem')[0].focus();
			}
			//if (!u30.contains(e.relatedTarget) && u30.classList.contains('searchexpand') && e.relatedTarget !== null && !u30w10.contains(e.relatedTarget)) {
			//	u30CloseSearch();
			//}
			if (!u30.contains(e.relatedTarget) && u30.classList.contains('searchexpand') && e.relatedTarget !== null) {
				u30CloseSearch();
			}
			if (u30w10 && !u30w10.contains(e.relatedTarget)) {
				u30CloseSearch();
			}
		});

		//Focus on Ham if nav loses focus
		u30nav.addEventListener('focusout', (e) => {
			if (!u30nav.contains(e.relatedTarget) && u30.classList.contains('u30mobile')) {
				u30ham.focus();
			}
		});

		/**
		 * fetch http data
		 * @param url {String}
		 * @returns {Promise<unknown>}
		 */
		var u30fetchData = (url) => {
			if(window.__React__Header){
				url=window.reactHeaderHandler(url);
			}
			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				// Setup our listener to process completed requests
				xhr.onload = function () {
					// Process our return data
					if (xhr.status >= 200 && xhr.status < 300) {
						// What do when the request is successful
						resolve(xhr.response);
					} else {
						// What do when the request fails
						//alert('The request failed!');
						reject('something went wrong');
					}
					// Code that should run regardless of the request status
					//alert('This always runs...');
				};
				// Create and send a GET request
				// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
				// The second argument is the endpoint URL
				xhr.open('GET', url);
				xhr.send();
			});
		};

		//Populate mega menu
		if (cmenucontent.indexOf("-new") > -1) {
			cmenucontent = cmenucontent.replace('-new','-v2');
		}
		if(cmenucontent){
			getMegaMenuData(cmenucontent);
		}

		function getMegaMenuData(data) {
			u30fetchData(data)
			.then(function (data) {
				if (data) {
					buildMegaMenu(data);
				}
			});
		}

		function buildMegaMenu(html) {
			var navBg = doc.createElement("div");
			navBg.id = "u30navBg";
			var navBgScroll = doc.createElement("div");
			navBgScroll.id = "u30navBgscroll";
			var pgOverlay = doc.createElement("span");
			pgOverlay.id = "u30pgOverlay";
			navBgScroll.classList.add('cwidth');
			u30.appendChild(navBg);
			navBg.appendChild(navBgScroll);
			u30.appendChild(pgOverlay);
			var navBgScrolldiv = doc.createElement("div");
			navBgScroll.appendChild(navBgScrolldiv);
			var dummyEl = doc.createElement('div');
			dummyEl.innerHTML = html;
			const allNavContent = dummyEl.querySelectorAll('[data-navcontent]');
			var closeTxt = u30nav.getAttribute('data-closetxt');
			u30ham.removeAttribute('aria-haspopup');
			if(!closeTxt) {
				var closeTxt = 'close';
			}

			if(doc.getElementById("u30").classList.contains("u30v0")){
				//Clone everything in u30tools (except search and ham) into the mobile nav
				var mobileToolWrap = doc.createElement("div");
				mobileToolWrap.id = "u30toolsMobile";
				u30nav.prepend(mobileToolWrap);
				const u30tools = doc.getElementById('u30tools');
				for (let i = 0; i < u30tools.children.length; i++) {
					if (!["u30ham","u30search","ac-flag"].includes(u30tools.children[i].id)) {
						var u30toolCopy = u30tools.children[i].cloneNode(true);
						doc.getElementById('u30toolsMobile').append(u30toolCopy);
					}
				}
			}

			if (!u30navLi){
				u30navw1_html = u30navw1.innerHTML;
				u30navw1_new_html = '<ul class="u30navul">' + u30navw1_html + '</ul>';
				u30navw1.innerHTML = u30navw1_new_html;
			}

			var u30clicksCreated = false;

			//Create Dropdowns
			allNavContent.forEach(function(val,idx,index) {
				let navId = val.dataset.navcontent;
				let navType = val.dataset.navtype;
				let target = doc.querySelector("[data-navtarget=" + navId + "]");
				if (!u30navLi && target){
					var target_wrap = document.createElement('li');
					target.parentNode.insertBefore(target_wrap, target);
					target_wrap.appendChild(target);
				}
				let u30navWrap = doc.createElement('div');
				u30navWrap.setAttribute('data-dropdown' , navId);
				u30navWrap.setAttribute("class","u30navw2");
				u30navWrap.setAttribute("id",navId + '2');
				u30navWrap.setAttribute('role','region');
				u30navWrap.setAttribute("aria-labelledby", navId + '1');
				target?.setAttribute("id",navId + '1');
				target?.setAttribute("aria-controls", navId + '2');
				target && target.after(u30navWrap);
				if (navType.includes('two-column-scroll' ) && target) {
					target.classList.add('scroll');
					u30navWrap.classList.add('vert-scroll');
				}
				var clsNavBtn = `
					<button class="closenav" aria-label="${closeTxt}">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M7,7 L17,17"></path>
							<path d="M17,7 L7,17"></path>
						</svg>
					</button>
				`;
				//u30navWrap.innerHTML = '<div class="u30navw3 ' + navType + '">' + val.outerHTML + ' ' + clsNavBtn + '</div>';
				var u30navStructure = '<div class="u30navw3 ' + navType + '">' + val.outerHTML + ' ' + clsNavBtn + '</div>';
				//Insert into sessinStorage if it's not already there
				if (window.sessionStorage) {
					let path = ''+cmenucontent+navId+'2';
					if (sessionStorage.getItem(path) === null) {
						sessionStorage.setItem(path, u30navStructure);
					}
				//Insert directly
				}else {
					u30navWrap.innerHTML = u30navStructure;
				}
				if (idx === index.length - 1){ 
					u30.classList.add('contentloaded');
					u30.classList.remove('pause');
				}
			});

			//Close Nav Mobile Page Overlay
			doc.querySelectorAll('#u30navBg').forEach(item => {
				item.addEventListener('click', event => {
					if (u30.classList.contains('u30mobile')) {
						u30CloseNav();
					}
				});
			});

			function u30insertMenuContent() {
				doc.querySelectorAll(".u30navw2:not(.loaded)").forEach(item => {
					let itemid = ''+cmenucontent+item.id+'';
					let idEl = doc.getElementById(item.id);
					if(sessionStorage[itemid] && idEl){
						idEl.innerHTML = sessionStorage[itemid];
						item.classList.add('loaded');
					}
				});
				doc.querySelectorAll('[data-u30bgsrc]').forEach(item => {
					let u30bgsrc = item.dataset.u30bgsrc;
					item.style.backgroundImage = "url('"+u30bgsrc+"')";
					item.removeAttribute('data-u30bgsrc');
				});
				doc.querySelectorAll('[data-u30imgsrc]').forEach(item => {
					let u30imgsrc = item.dataset.u30imgsrc;
					item.src = u30imgsrc;
					item.removeAttribute('data-u30imgsrc');
				});
				u30checkSubs();
			}

			setTimeout(function() {
				var u30rsz = new ResizeObserver(u30 => {
					u30position();
					u30checkSubs();
					var u30cwidthPx = window.getComputedStyle(u30w1, null).getPropertyValue("padding-left");
					var u30cwidthPadding = parseInt(u30cwidthPx, 10);
					//let closenavs = doc.querySelectorAll(".closenav");
					//[].forEach.call(closenavs, function(el) {
					//	el.style.right=u30cwidthPadding + 'px';
					//});
				});

				if (u30ocom) {
					u30rsz.observe(document.body);
				}else {
					u30rsz.observe(doc.getElementById('u30'));
				}

				//1st level Nav control
				doc.querySelectorAll('.u30navitem').forEach(item => {
					item.addEventListener('click', event => {
						u30insertMenuContent();
						if (!u30clicksCreated) {
							u30clicksCreated = true;
							u30clickCreate();
						}
						let navLink = event.target;
						let navId = navLink.dataset.navtarget;
						let navContent = doc.querySelector("[data-dropdown='"+navId+"']");
						let allDropdowns = doc.getElementsByClassName("u30navw2");
						//Open
						if (navId !== undefined && !navLink.classList.contains('active') && !u30.classList.contains('navexpand')) {
							u30.classList.add('navshow');
							const acsWrapper = document.querySelector('.acs-wrapper');
							if (acsWrapper !== null) {
								if (acsWrapper.classList.contains('close-acs')) {
									acsWrapper.classList.remove('close-acs');
								} else {
									acsWrapper.classList.add('close-acs');
								}
							}

							setTimeout(() => {
								doc.getElementById("u30navBg").classList.remove('scroll');
								navLink.classList.add("active");
								navLink.setAttribute('aria-expanded','true');
								navContent && navContent.classList.add("active");
								u30.classList.add('navexpand');
								u30nav.classList.add('navactive');
								u30nav.classList.add('active');
								u30ham.setAttribute('aria-expanded','true');
								//hideSiblings(true);
								if (!u30.classList.contains('u30mobile')) {
									u30openMobileSubnavs();
								}
								if (navLink.classList.contains('scroll')) {
									doc.getElementById("u30navBg").classList.add('scroll');
								}
								else {
									doc.getElementById("u30navBg").classList.remove('scroll');
								}
							}, 1);
						}
						//Swap
						else if (navId !== undefined && !navLink.classList.contains('active') && u30.classList.contains('navexpand')) {
							doc.getElementById("u30navBg").classList.remove('scroll');
							for (let item of u30navitems) {
								item.classList.remove("active");
								item.setAttribute('aria-expanded','false');
							}
							for (let item of allDropdowns) {
								item.classList.remove("active");
							}
							navLink.classList.add("active");
							navLink.setAttribute('aria-expanded','true');
							navContent && navContent.classList.add("active");
							if (navLink.classList.contains('scroll')) {
								doc.getElementById("u30navBg").classList.add('scroll');
							}
							else {
								doc.getElementById("u30navBg").classList.remove('scroll');
							}
						}
						//Close
						else if (navId !== undefined) {
							const acsWrapper = document.querySelector('.acs-wrapper');
							if (acsWrapper !== null) {
								if (acsWrapper.classList.contains('close-acs')) {
									acsWrapper.classList.remove('close-acs');
								} else {
									acsWrapper.classList.add('close-acs');
								}
							}
							navLink.classList.remove("active");
							navLink.setAttribute('aria-expanded','false');
							navContent.classList.remove("active");
							doc.getElementById("u30navBg").classList.remove('scroll');
							if (!u30.classList.contains('u30mobile')) {
								u30ham.setAttribute('aria-expanded','false');
								u30nav.classList.remove('active');
								u30.classList.remove('navexpand');
								u30nav.classList.remove('navactive');
								//hideSiblings(false);
								setTimeout(() => {
									u30.classList.remove('navshow');
								}, 200);
							}
						}
						u30CloseSearch();
						if(u30v3){
							u30closeAccount();
						}
					});
				});

				function u30clickCreate() {

					//2nd level Nav control
					var u302ndBtns = doc.querySelectorAll("[data-navcontent]>ul>li>button");
					u302ndBtns.forEach(item => {
						item.addEventListener('click', event => {
							let navLink = event.target;
							let navContent = event.target.nextElementSibling;
							var activeLinks = doc.querySelectorAll("[data-dropdown].active [data-navcontent]>ul>li>button.active");
							var activeDropdowns = doc.querySelectorAll("[data-dropdown].active [data-navcontent]>ul>li :not(button).active");
							if (navLink && navContent) {
								//Open
								if (!navLink.classList.contains('active')) {
									[].forEach.call(activeLinks, function(el) {
										el.setAttribute('aria-expanded','false');
										el.setAttribute('aria-selected','false');
										el.classList.remove("active");
									});
									[].forEach.call(activeDropdowns, function(el) {
										el.classList.remove("active");
									});
									navLink.classList.add("active");
									navLink.setAttribute('aria-expanded','true');
									navLink.setAttribute('aria-selected','true');
									navContent.classList.add("active");
								}
								//Swap
								else if (navLink.classList.contains('active')) {
									if (u30.classList.contains('u30mobile')) {
										navLink.classList.remove("active");
										navContent.classList.remove("active");
										navLink.setAttribute('aria-expanded','false');
									}
								}
								//Close
								else {
									return;
								}
								event.preventDefault();
							}
						});
					});

					//3rd level Nav control for mobile
					doc.querySelectorAll('[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button').forEach(item => {
						item.addEventListener('click', event => {
							let navLink = event.target;
							let navContent = event.target.nextElementSibling;
							if (navLink && navContent) {
								//Open
								if (!navLink.classList.contains('active')) {
									navLink.classList.add("active");
									navContent.classList.add("active");
									navLink.setAttribute('aria-expanded','true');
								}
								//Swap
								else if (navLink.classList.contains('active')) {
									if (u30.classList.contains('u30mobile')) {
										navLink.classList.remove("active");
										navContent.classList.remove("active");
										navLink.setAttribute('aria-expanded','false');
									}
								}
								//Close
								else {
									return;
								}
								event.preventDefault();
							}
						});
					});

					//Arrow up/down control for 2 column subnavs
					const u30verticalNavs = document.querySelectorAll(".vert-scroll [data-navcontent]>ul");
					if (u30verticalNavs) {
						for (const vertNavs of u30verticalNavs) {
							vertNavs.addEventListener('keydown', event => {
								const { key } = event;
								if (key === 'ArrowDown') {
									var nextlistitem = event.target.parentNode.nextElementSibling;
									if (nextlistitem) {
										var nextlistitemBtn = nextlistitem.getElementsByTagName('button')[0];
									}
									if (nextlistitemBtn) {
										nextlistitemBtn.focus();
									}
								}
								if (key === 'ArrowUp') {
									var prevlistitem = event.target.parentNode.previousElementSibling;
									if (prevlistitem) {
										var prevlistitemBtn = prevlistitem.getElementsByTagName('button')[0];
									}
									if (prevlistitemBtn) {
										prevlistitemBtn.focus();
									}
								}
							});
						}
					}

					let u30resizeTimer;
					window.addEventListener("resize", () => {
						u30.classList.add("pause");
						clearTimeout(u30resizeTimer);
						u30resizeTimer = setTimeout(() => {
							u30.classList.remove("pause");
						}, 400);
						u30checkShortNav();
						if (u30.classList.contains('u30mobile') && "false" === u30ham.getAttribute("aria-expanded")) {
							//u30nav.setAttribute('aria-hidden','true');
						}
					});

					//Close Nav Button
					doc.querySelectorAll('.closenav').forEach(item => {
						item.addEventListener('click', event => {
							u30CloseNav();
							event.preventDefault();
						});
					});

					//Close Nav Page Overlay
					doc.querySelectorAll('#u30pgOverlay').forEach(item => {
						item.addEventListener('click', event => {
							u30CloseNav();
						});
					});

					u30setDefaults();

					u30.classList.add('contentloaded');
					u30.classList.remove('pause');

					u30checkShortNav();

				}

				u30input.addEventListener('keyup', event => {
					const { key } = event;
					u30keyPressed = key;
					//if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Backspace' || key === 'Enter') return;
					if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Enter') return;
					u30runAutoComplete();
				});

			}, 300);
		}

		//Video Check
		function u30videocheck() {
			doc.querySelectorAll('#u30results .bcembed').forEach(item => {
				if(window.__React__Header){
					bc_loadplayer(item)
				}else {
					bc_loadplayer($(item));
				}
			});
			doc.querySelectorAll('#u30results .ytembed').forEach(item => {
				VD03.initialize();
			});
		}

		//Hamburger
		(function () {
			function clicked(event) {
				u30CloseSearch();
				if(u30v3){
					u30closeAccount();
				}
				//Open
				if (!u30.classList.contains('navexpand')) {
					u30.classList.add('navshow','navexpand');
					u30nav.classList.add('navactive');
					u30ham.setAttribute('aria-expanded','true');
					//hideSiblings(true);
					setTimeout(function() {
						u30nav.classList.add('active');
					}, 201);
					setTimeout(function() {
						doc.querySelectorAll('.u30navitem')[0].focus();
					}, 401);
				//Close
				}else {
					u30.classList.remove('navexpand');
					u30nav.classList.remove('active');
					u30ham.setAttribute('aria-expanded','false');
					setTimeout(function() {
						u30.classList.remove('navshow');
						u30nav.classList.remove('navactive');
						//hideSiblings(false);
						//Close 1st level Nav Items
						doc.querySelectorAll('.u30navitem').forEach(item => {
							for (let item of u30navitems) {
								item.classList.remove("active");
								item.setAttribute('aria-expanded','false');
							}
							var activeDrodowns = doc.querySelectorAll('.u30navw2.active');
							for (let item of activeDrodowns) {
								item.classList.remove("active");
							}
						});
						u30clsMobileSubnavs();
					//Delay for loading mobile styles with navactive class on mobile
					}, 201);
				}
				event.preventDefault();
				event.stopPropagation();
			}
			if (u30ham) {
				u30ham.addEventListener("click", clicked, false);
			}
		}());

		function u30position(){
			var u30windowWidth = window.innerWidth;
			var u30scrollbarWidth = u30windowWidth - doc.documentElement.clientWidth;
			var u30w1 = doc.getElementById('u30w1');
			var u30w1Left = u30w1.getBoundingClientRect().left;
			var u30w1OffsetLeft = u30w1.offsetLeft;
			var u30cwidthPx = window.getComputedStyle(u30w1, null).getPropertyValue("padding-left");
			var u30cwidthPadding = parseInt(u30cwidthPx, 10);
			var u30logow = doc.getElementById('u30logo').getBoundingClientRect().width;
			var u30width = doc.getElementById('u30').getBoundingClientRect().width;
			if (u30accountBtn){
				var u30accountBtnWidth = u30accountBtn.getBoundingClientRect().width;
			}
			var u30searchOffset = u30rtl ? u30windowWidth - u30search.offsetLeft - u30search.offsetWidth - u30w1Left - u30w1Left - u30scrollbarWidth + 1 : u30search.offsetLeft - u30search.scrollLeft + u30search.clientLeft;
			var u30searchBtnw = u30SearchBtn.getBoundingClientRect().width;
			//Must Match CSS #u30btxt {padding-left = 16 and 12px spacing
			var searchWidth = u30searchOffset + u30searchBtnw - u30cwidthPadding - u30logow - 28;
			if (u30v3 && u30contactBtn) {
				var u30contactBtnWidth = u30contactBtn.getBoundingClientRect().width;
				if (u30windowWidth <= 600) {
					u30.classList.add('fullsearch');
					var searchWidth = u30width - u30contactBtnWidth - u30accountBtnWidth - (u30cwidthPadding * 2);
					if(!u30rtl) {
						u30searchw1.style.right = -(u30contactBtnWidth + u30accountBtnWidth) + 'px';
					}
					else {
						u30searchw1.style.left = -(u30contactBtnWidth + u30accountBtnWidth) + 'px';
					}
				}else {
					u30.classList.remove('fullsearch');
					if(!u30rtl) {
						u30searchw1.style.right = 0 + 'px';
					}else {
						u30searchw1.style.left = 0 + 'px';
					}
				}
				if (u30.matches(".fullsearch.searchexpand")) {
					u30accountBtn.tabIndex = -1;
					u30contactBtn.tabIndex = -1;
				}else {
					u30accountBtn.tabIndex = 0;
					u30contactBtn.tabIndex = 0;
				}
			}
			let u30barPos = u30searchw1.getBoundingClientRect();
			let scrollLeft = window.scrollX || doc.documentElement.scrollLeft;
			var u30w3Offset = u30logow + 29 + u30cwidthPadding + u30w1Left;
			if (u30ocom) {var u30w3Offset = u30logow + 28 + u30cwidthPadding + u30w1OffsetLeft;}
			//Position Searchbar
			//Shift Search wrapper to align with searchbar
			if (!u30rtl) {
				u30searchw1.style.width=searchWidth + 'px';
				u30searchw3.style.marginLeft='-' + u30w3Offset + 'px';
			}else{
				u30searchw1.style.width=searchWidth + 'px';
				if(u30ocom) {u30searchw3.style.marginRight='-' + (u30w3Offset - 1) + 'px';}
				else {u30searchw3.style.marginRight='-' + (u30w3Offset - 3) + 'px';}
			}
			u30searchw3.style.width='calc(100vw - '+u30scrollbarWidth+'px)';
			u30searchw3.style.maxWidth=''+u30width+'px';
			if (u30cwidthPadding > 0) {
				//"Mobile"
				u30results.style.paddingLeft=u30cwidthPadding + 'px';
				u30results.style.paddingRight=u30cwidthPadding + 'px';
				u30skel.style.left=u30cwidthPadding + 'px';
				u30skel.style.right=u30cwidthPadding + 'px';
				u30autosuggest.style.paddingLeft=u30cwidthPadding + 'px';
				u30autosuggest.style.paddingRight=u30cwidthPadding + 'px';
			}
			else {
				//"desktop"
				u30results.style.paddingLeft='0px';
				u30results.style.paddingRight='0px';
				u30skel.style.left='0px';
				u30skel.style.right='0px';
				if (!u30rtl) {
					if (u30ocom) {u30autosuggest.style.paddingLeft=(u30w1OffsetLeft + u30logow + scrollLeft + 28) + 'px';}
					else {u30autosuggest.style.paddingLeft=(u30barPos.left + scrollLeft) + 'px';}
					u30autosuggest.style.paddingRight='0px';
				}
				else {
					u30autosuggest.style.paddingLeft='0px';
					if (u30ocom) {u30autosuggest.style.paddingRight=(u30w1OffsetLeft + u30logow + scrollLeft + 28) + 'px';}
					else {u30autosuggest.style.paddingRight=(u30logow + 26 + u30cwidthPadding + scrollLeft + u30w1Left) + 'px';}
				}
			}
			if (u30v3) {
				u30checkShortProf();
			}
		}

		function u30checkSubs(){
			if (u30.classList.contains('u30mobile') && !u30nav.classList.contains('defaultclosed')) {
				u30nav.classList.add('defaultclosed');
				u30clsMobileSubnavs();
			}
			if (!u30.classList.contains('u30mobile') && u30nav.classList.contains('defaultclosed')) {
				u30nav.classList.remove('defaultclosed');
				u30openMobileSubnavs();
			}
		}

		function u30checkShortProf(){
			u30accountFlyout.style.display ='block';
			var clientHeight = u30accountFlyout.clientHeight;
			u30accountFlyout.style.display ='';
			if ( clientHeight + doc.querySelector('.u30').offsetHeight > window.innerHeight) {
				u30accountFlyout.classList.add('shortprof');
			}
			else {
				u30accountFlyout.classList.remove('shortprof');
			}
		}

		function u30checkShortNav(){
			if (window.innerHeight < 500) {
				if (!u30.classList.contains('shortnav')) {
					u30.classList.add('shortnav');
				}
			}
			else {
				u30.classList.remove('shortnav');
			}
		}

		//Click Search Icon That Opens Search Form
		(function () {
			//var searchBtn = doc.getElementById("u30searchBtn");u30searchBtn
			function clicked(event) {
				var btn = this;
				btn.setAttribute("aria-expanded", "false" === btn.getAttribute("aria-expanded"));
				if ("false" === btn.getAttribute("aria-expanded")) {
					u30.classList.remove('searchexpand');
					u30position();
				} else {
					u30CloseNav();
					if(u30v3){
						u30closeAccount();
					}
					u30.classList.add('searchexpand');
					u30position();
					//Messes with animation if you don't wait till animation is complete (.searchexpand)
					setTimeout(function() {
						u30input.focus();
					}, 1000);// 300 = #u30searchw2 animation speed
				}
				event.preventDefault();
			}
			if (u30SearchBtn) {
				u30SearchBtn.addEventListener("click", clicked, false);
			}
		}());

		function u30CloseNav (focus) {
			let allDropdowns = doc.querySelectorAll(".u30navw2.active");
			[].forEach.call(allDropdowns, function(el) {
				el.classList.remove("active");
			});
			let allnavItems = doc.querySelectorAll(".u30navitem.active");
			[].forEach.call(allnavItems, function(el) {
				el.classList.remove("active");
				el.setAttribute('aria-expanded','false');
				if (focus === undefined) {
					el.focus();
				}
			});
			u30.classList.remove('navexpand');
			u30nav.classList.remove('navactive');
			u30ham.setAttribute('aria-expanded','false');
			//hideSiblings(false);
			u30nav.classList.remove('active');
			setTimeout(() => {
				u30.classList.remove('navshow');
			}, 200);
		}

		function u30CloseSearch () {
			u30.classList.remove('searchexpand','searchsuggest','searchresults','skel');
			u30input.setAttribute("aria-activedescendant", '');
			u30input.setAttribute('aria-expanded','false');
			u30SearchBtn.setAttribute('aria-expanded','false');
			u30searchresults.innerHTML = "";
			u30autosuggest.innerHTML = "";
			u30input.value='';
			u30clearSearch.classList.remove('active');
			if (u30.classList.contains('fullsearch')) {
				u30accountBtn.tabIndex = 0;
				if (u30v3) {
					u30contactBtn.tabIndex = 0;
				}
			}
		}

		//Close Search Less Than Icon In Search Input
		u30closeSearchBtn.addEventListener("click", function(event) {
			u30SearchBtn.setAttribute("aria-expanded", "false" === u30SearchBtn.getAttribute("aria-expanded"));
			if ("false" === u30SearchBtn.getAttribute("aria-expanded")) {
				u30CloseSearch();
			} else {
				u30.classList.add('searchexpand');
			}
			setTimeout(() => {
				u30SearchBtn.focus();
			}, 100);
			event.preventDefault();
			event.stopPropagation();
		}, false);

		if(u30v3){
			var acctBtnLabel = "acctBtnLabel";
			var acttxt = document.getElementsByClassName('acttxt')[0];
			u30accountBtn.setAttribute("aria-labelledby", acctBtnLabel);
			acttxt.id = acctBtnLabel;
			u30accountBtn.addEventListener("click", function(event) {
				if ("false" === u30accountBtn.getAttribute("aria-expanded")) {
					u30CloseSearch();
					u30CloseNav();
					u30accountBtn.setAttribute('aria-expanded','true');
					u30accountBtn.classList.add('active');
					u30accountFlyout.classList.add('active');
					u30actbck.setAttribute('aria-hidden','false');
					u30checkShortProf();
				} else {
					u30closeAccount();
				}
			}, false);
			u30actbck.addEventListener("click", function(event) {
				u30closeAccount();
				u30accountBtn.focus();
			}, false);
		}

		//Close Search Results
		doc.getElementById("u30closeresults").addEventListener("click", function(event) {
			u30CloseSearch();
			u30SearchBtn.setAttribute('aria-expanded','false');
			event.preventDefault();
			event.stopPropagation();
			setTimeout(() => {
				u30SearchBtn.focus();
			}, 100);
		}, false);

		// Infinity search tracking function
		function infinitySearchTracking(searchBoxEle, recordsCount){
			var searchTerm = (searchBoxEle) ? searchBoxEle.value : "";
			var formName,
				searchBoxLoc = searchBoxEle.closest('[data-trackas]').getAttribute('data-trackas'),
				$searchform = searchBoxEle.closest('form');
			var datapayload = {
				'wt.z_osplugin' : '1',
				'wt.oss': searchTerm,
				'wt.oss_r': recordsCount,
				'wt.oss_sbl': searchBoxLoc
			};
			if (window.infinityIsAutocomplete == true){
				datapayload['wt.oss_ac'] = 1;
			}
			// get search form name
			if ($searchform) {
				var formName = $searchform.getAttribute('name') ? $searchform.getAttribute('name') : ( $searchform.getAttribute('id') ? $searchform.getAttribute('id') : null);
				if (formName) {
					datapayload['wt.oss_sbt'] = formName;
				}
			}
			// custom click tracking call
			if (window.ORA) {
				ORA.click({"config": {},"data": datapayload});
			}
		}

		//Form Submit
		u30searchForm.addEventListener("submit", function(event) {
			u30searchpg = 0;
			u30.classList.remove('searchsuggest');
			if (!u30opn){u30.classList.add('skel');}
			u30input.setAttribute('aria-expanded','false');
			// set a variable to identify if autocomplete is used
			if (!event['originalEvent'] || ($("#u30autosuggest li[aria-selected='true']").index() > 0)) {
				window.infinityIsAutocomplete = true;
			} else {
				window.infinityIsAutocomplete = false;
			}
			u30searchresults.innerHTML = "";
			u30searchprocessing = true;
			setTimeout(() => {
				u30searchprocessing = false;
			}, 2000);
			u30buildResults(0);
			event.preventDefault();
			//event.stopPropagation();
		}, false);

		//Clear Search Field X Icon
		u30clearSearch.addEventListener("click", function(event) {
			u30input.value='';
			u30input.focus();
			u30input.setAttribute('placeholder', '');
			u30clearSearch.classList.remove('active');
			u30.classList.remove('searchsuggest', 'searchresults');
			u30input.setAttribute('aria-expanded','false');
			u30searchresults.innerHTML = "";
			event.preventDefault();
		}, false);

		function u30debounce(func, timeout = 600){
			let timer;
			return (...args) => {
				clearTimeout(timer);
				timer = setTimeout(() => { func.apply(this, args); }, timeout);
			};
		}

		const u30runAutoComplete = u30debounce(() => u30autoComplete());

		function u30autoComplete() {
			let u30length = u30input.value.length;
			var u30inputval = u30input.value.replace(/</g,'&lt;').replace(/>/g,'&gt;');
			var u30inputvalurl = encodeURIComponent(u30input.value);
			if(!u30staging && !u30developer) {
				var AutosuggestJsonUrl = '/search/askoraclesuggest/json?Ntx=all&Ntt=' +u30inputvalurl + '';
				var AutocompleteJsonUrl = '/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=' +u30inputvalurl + '*';
			}
			else if (u30developer) {
				var AutosuggestJsonUrl = 'https://www.oracle.com/search/askoraclesuggest/json?Ntx=all&Ntt=' +u30inputvalurl + '';
				var AutocompleteJsonUrl = 'https://www.oracle.com/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=' +u30inputvalurl + '*';
			}
			else {
				//stage
				var AutosuggestJsonUrl = 'https://www-stage.oracle.com/search/askoraclesuggest/json?Ntt=' +u30inputvalurl + '';
				var AutocompleteJsonUrl = 'https://www-stage.oracle.com/search/autosuggest.json/browse?Dy=1&contentPaths=%2Fcontent%2FWeb%2FShared%2FAuto-Suggest%20Panel&templateTypes=AutoSuggestPanel&Ntt=' +u30inputvalurl + '*';
			}

			if (u30length >= 1) {
				var autosuggest = false;
				var autocomplete = false;
				//Get Autosuggest
				Promise.all([u30fetchData(AutosuggestJsonUrl), u30fetchData(AutocompleteJsonUrl)]).then(function( res ) {
					var a1 = [];
					var a2 = [];
					var u30selected = 'false';

					if(res[0]) {a1[0] = JSON.parse(res[0]);}
					else {return;}
					if(res[1]) {a2[0] = JSON.parse(res[1]);}
					else {return;}

					u30autosuggest.innerHTML = "";
					//Display Autosuggest
					if (a1[0].contents[0].numResults > 0 && !u30developermenu){
						a1[0].contents[0].records.forEach(function (val, key) {
							if (key <= 2) {
								var title = val.attributes.Title;
								var url = val.attributes.aoDestinationURL;
								var type = val.attributes.aoDestinationType;
								var typeclass = 'u30-globe';
								var titleTxt = title.toString();
								var suggestb = titleTxt.replace(new RegExp(u30inputval, "gi"), function (match) {
									return "<b>".concat(match, "</b>");
								});
								/*
								if (type) {
									if (type[0] === 'Video') {
										var typeclass = 'icn-video';
									}
									if (type[0] === 'Coversation') {
										var typeclass = 'icn-chat';
									}
								}
								*/
								u30autosuggest.insertAdjacentHTML('beforeend', '<li aria-selected="false" role="option" tabindex="-1"><a tabindex="-1" class="'+typeclass+' u30suggestlnk" href="'+url+'" data-trackas="header:search:suggestlnk" data-lbl="keyword:'+u30inputval+':suggest:'+title+'">'+suggestb+'<cite>'+url+'</cite></a></li>');
							}
						});
						var autosuggest = true;
					}

					//Display Autocomplete
					if(a2[0].contents[0].autoSuggest[0].totalNumResults > 0){
						a2[0].contents[0].autoSuggest[0].dimensionSearchGroups[0].dimensionSearchValues.forEach(function (val, key) {
							var rep_regex = new RegExp(u30inputval,"gi");
							var completeb = val.label.replace(rep_regex,"<b>" + u30inputval + "</b>");
							if (u30inputval != val.label) {
								if (!firstsugtxt) {
									firstsugtxt = val.label;
									var u30selected = 'true';
								}
								u30autosuggest.insertAdjacentHTML('beforeend', '<li aria-selected="'+u30selected+'" role="option" tabindex="-1"><a tabindex="-1" class="u30complete" href="#" data-trackas="header:search" data-lbl="keyword:'+u30inputval+':suggest:'+val.label+'">'+completeb+'</a></li>');
							}
							else {
								if (!firstsugtxt) {
									firstsugtxt = val.label;
									var u30selected = 'true';
								}
								u30autosuggest.insertAdjacentHTML('afterbegin', '<li aria-selected="'+u30selected+'" role="option" tabindex="-1"><a tabindex="-1" class="u30complete" href="#" data-trackas="header:search" data-lbl="keyword:'+u30inputval+':suggest:'+val.label+'">'+completeb+'</a></li>');
							}
						});
						var autocomplete = true;
					}

					//Display dropdown if autocomplete or autosuggest gets results
					if(!u30searchprocessing) {
						if(autosuggest || autocomplete) {
							u30.classList.remove('searchresults');
							u30.classList.add('searchsuggest');
							u30input.setAttribute('aria-expanded','true');
							if (firstsugtxt) {
								var firstsugtxtLwr = firstsugtxt.toLowerCase();
								var u30inputvalLwr = u30inputval.toLowerCase();
								if (firstsugtxtLwr.indexOf(u30inputvalLwr) === 0) {
									if (u30keyPressed != 'Backspace') {
										var begin = firstsugtxt.substr(0,u30length);
										var end = firstsugtxt.substr(u30length);
										var y = u30length+end.length;
										u30input.value = (begin + end);
										u30input.focus();
										u30input.setSelectionRange(u30length, y);
									}
								}
							}
							firstsugtxt = '';
						}
						else {
							u30autosuggest.insertAdjacentHTML('beforeend', '<li aria-selected="true" role="option" tabindex="-1"><a tabindex="-1" class="u30complete" href="#">'+u30inputval+'</a></li>');
						}
					}

					let allAutosuggestItems = doc.querySelectorAll('#u30autosuggest li');
					allAutosuggestItems.forEach(function(val,index) {
						val.setAttribute('id', 'suggest-' + parseInt(index + 1));
						val.setAttribute('aria-posinset', parseInt(index + 1));
						u30suggestCnt = index;
					});

					allAutosuggestItems.forEach(function(val,index) {
						val.setAttribute('aria-setsize', u30suggestCnt + 1);
						if (val.getAttribute("aria-selected") === "true") {
							var id = val.getAttribute("id");
							u30input.setAttribute("aria-activedescendant", id);
						}
					});

				})
				.then(function( res ) {
					var u30announce = doc.getElementById("u30announce");
					if (u30announce && u30suggestCnt && u30.classList.contains('searchexpand')) {
						u30announce.innerText = '';
						var alerttxt = u30announce.getAttribute('data-alerttxt');
						alertNode = doc.createTextNode(u30suggestCnt + 1 + ' ' + alerttxt);
						u30announce.appendChild(alertNode);
						u30announce.style.visibility='hidden';
						u30announce.style.visibility='visible';
					}

					doc.querySelectorAll('a.u30complete').forEach(item => {
						item.addEventListener('click', event => {
							u30input.value = item.innerText;
							u30searchForm.dispatchEvent(new Event('submit', { cancelable: true }));
							event.preventDefault();
							event.stopImmediatePropagation();
							return;
						});
					});

					u30position();

				});
			}
		}

		//Listen for input on search
		u30input.addEventListener('input', function (event) {
			let u30length = this.value.length;
			if (u30length > 0) {u30clearSearch.classList.add('active');}
			else {u30clearSearch.classList.remove('active');}
		});

		/*
		//Load autosuggest
		u30input.addEventListener('keyup', event => {
			const { key } = event;
			if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Backspace' || key === 'Enter') return;
			u30runAutoComplete();
		});
		*/

		//Keyboard Navigation for autosuggest
		u30input.addEventListener('keydown', event => {
			const { key } = event;
			var option = doc.querySelector("#u30autosuggest [aria-selected=true]");
			if (key === 'Enter') {
				if (option) {
					u30searchresults.innerHTML = "";
					u30suggestLink = option.querySelectorAll('.u30suggestlnk');
					if (u30suggestLink.length > 0 && u30suggestLink[0].href.length > 0) {
						event.preventDefault();
						window.location = u30suggestLink[0].href;
					}
				}
			}

			if (key !== 'ArrowDown' && key !== 'ArrowUp') return;

			event.preventDefault();

			let selectedOption;

			if (!option) {
				var option = u30autosuggest.firstChild.setAttribute('aria-selected', 'true');
				return;
			}
			if (key === 'ArrowDown') selectedOption = option.nextElementSibling;
			if (key === 'ArrowUp') selectedOption = option.previousElementSibling;
			if (selectedOption) {
				option.setAttribute('aria-selected', 'false');
				selectedOption.setAttribute('aria-selected', 'true');
				u30input.setAttribute('aria-activedescendant', selectedOption.id);
				var u30isComplete = selectedOption.querySelectorAll('.u30complete');
				if (u30isComplete.length > 0) {
					if (u30isComplete[0].innerText.length > 0) {
						u30input.value = u30isComplete[0].innerText;
					}
				}
			}
			else {
				//End of autosuggest
				option.setAttribute('aria-selected', 'false');
				var option = u30autosuggest.firstChild.setAttribute('aria-selected', 'true');
			}
		});

		function u30setDefaults() {
			var u30t2defaults = doc.querySelectorAll("[data-dropdown] [data-navcontent]>ul>li>button");
			var u30t3defaults = doc.querySelectorAll("[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button");
			for (var i = 0; i < u30t2defaults.length; i++) {
				if (u30t2defaults[i].classList.contains('active') ) {
					u30t2defaults[i].setAttribute('data-default','');
				}
			}
			for (var i = 0; i < u30t3defaults.length; i++) {
				if (u30t3defaults[i].classList.contains('active') ) {
					u30t3defaults[i].setAttribute('data-default','');
				}
			}
		}

		function u30clsMobileSubnavs() {
			var u30t2subs = doc.querySelectorAll("[data-dropdown] [data-navcontent]>ul>li>button");
			var u30t3subs = doc.querySelectorAll("[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button");
			for (var i = 0; i < u30t2subs.length; i++) {
				if (u30t2subs[i].classList.contains('active') ) {
					u30t2subs[i].setAttribute('aria-expanded','false');
					u30t2subs[i].setAttribute('aria-selected', 'false');
					u30t2subs[i].classList.remove('active');
					var t2navContent = u30t2subs[i].nextElementSibling;
					if (t2navContent) {
						t2navContent.classList.remove('active');
					}
				}
			}
			for (var i = 0; i < u30t3subs.length; i++) {
				if (u30t3subs[i].classList.contains('active') ) {
					u30t3subs[i].classList.remove('active');
					u30t3subs[i].setAttribute('aria-expanded','false');
					var t3navContent = u30t3subs[i].nextElementSibling;
					if (t3navContent) {
						t3navContent.classList.remove('active');
					}
				}
			}
		}

		function u30openMobileSubnavs() {
			var u30t2subs = doc.querySelectorAll("[data-dropdown] [data-navcontent]>ul>li>button.active");
			var u30t3subs = doc.querySelectorAll("[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button.active");
			if (!u30t2subs.length) {
				var u30defaultSubs = doc.querySelectorAll("[data-dropdown] [data-navcontent]>ul>li>button[data-default]");
				for (var i = 0; i < u30defaultSubs.length; i++) {
					u30defaultSubs[i].classList.add('active');
					u30defaultSubs[i].setAttribute('aria-expanded','true');
					u30defaultSubs[i].setAttribute('aria-selected', 'true');
					var u30defaultSubsContent = u30defaultSubs[i].nextElementSibling;
					if (u30defaultSubsContent) {
						u30defaultSubsContent.classList.add('active');
					}
				}
			}
			if (!u30t3subs.length) {
				var u30defaultSubSubs = doc.querySelectorAll("[data-dropdown] [data-navcontent]>ul>li>.u30scontent ul li button[data-default]");
				for (var i = 0; i < u30defaultSubSubs.length; i++) {
					u30defaultSubSubs[i].classList.add('active');
					u30defaultSubSubs[i].setAttribute('aria-expanded','true');
					var u30defaultSubSubsContent = u30defaultSubSubs[i].nextElementSibling;
					if (u30defaultSubSubsContent) {
						u30defaultSubSubsContent.classList.add('active');
					}
				}
			}
		}

		function u30buildResults(u30count){
			if (!u30count) {
				var u30count = 0;
			}
			var num = 0;
			var Ntt = doc.getElementsByName('Ntt')[0].value;
			var Ntt = encodeURIComponent(Ntt);
			let nty = doc.getElementsByName('Nty')[0].value;
			let ntk = doc.getElementsByName('Ntk')[0].value;
			let Dy = doc.getElementsByName('Dy')[0].value;
			let cty = doc.getElementsByName('cty')[0].value;
			let lang = doc.getElementsByName('lang')[0].value;
			let Bst = doc.getElementsByName('NoBstNoRec').length ? doc.getElementsByName('NoBstNoRec')[0].value : 'no';

			if (u30opn) {
				let newUrl = `https://partnerhelp.oracle.com/app/search/kw/${Ntt}`;
				window.location.href = newUrl;
				return;
			}

			if (Bst === "yes") {nodim = 'results-intnodim';}
			else {nodim = 'results-nodim';}

			if (!u30staging && !u30developer && !u30developermenu) {
				//regular results
				if (cty && lang) {
					if(cty === 'us' && lang === 'en'){
						var searchurl = '/search/'+nodim+'?No='+u30count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
					}
					else {
						var searchurl = '/search/'+nodim+'?No='+u30count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&cty='+cty+'&lang='+lang+'&format=json';
					}
				}
				else {
					var searchurl = '/search/'+nodim+'?No='+u30count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
				}
			}
			else if (u30developermenu) {
				var searchurl = '/docs/search/?q='+Ntt+'&pg='+u30count+'&size=10&showfirstpage=true&lang='+lang+'';
			} else if (u30developer) {
				if (cty && lang) {
					if(cty === 'us' && lang === 'en'){
						var searchurl = 'https://www.oracle.com/search/'+nodim+'?No='+u30count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
					}
					else {
						var searchurl = 'https://www.oracle.com/search/'+nodim+'?No='+u30count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&cty='+cty+'&lang='+lang+'&format=json';
					}
				}
				else {
					var searchurl = 'https://www.oracle.com/search/'+nodim+'?No='+u30count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
				}
			}
			else {
				//stage results
				if (cty && lang) {
					if(cty === 'us' && lang === 'en'){
						var searchurl = 'https://www-stage.oracle.com/search/'+nodim+'?No='+u30count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
					}
					else {
						var searchurl = 'https://www-stage.oracle.com/search/'+nodim+'?No='+u30count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&cty='+cty+'&lang='+lang+'&format=json';
					}
				}
				else {
					var searchurl = 'https://www-stage.oracle.com/search/'+nodim+'?No='+u30count+'&Ntt='+Ntt+'&Dy='+Dy+'&Nty='+nty+'&Ntk='+ntk+'&NoBstNoRec='+Bst+'&format=json';
				}
			}

			var i = 0;
			var pub = '';
			var resultlistfound = false;
			var reclistfound = false;
			var recexecuted = false;
			u30fetchData(searchurl).then(function (data) {
				//data = JSON.parse(data);
				if(data) {data = JSON.parse(data);}
				else {return;}
				return new Promise(function (res, rej) {
					if (u30developermenu) {
						for (var e = 0; e < data.hits.length; e++) {
							var results = data.hits;
						}
					} else {
						for (var e = 0; e < data.contents.length; e++) {
							//old json
							if (data.contents[e]["@type"] === 'ResultsList' && !resultlistfound) {
								resultlistfound = true;
								var results = data.contents[e].records;
							}
							if (data.contents[e]["@type"] === 'TopHeaderContent' && !reclistfound) {
								reclistfound = true;
								var reccomendedresult = data.contents[e].url;
							}
							//new json
							if (!resultlistfound && !reclistfound) {
								if (data.contents[0].mainContent[0].contents[0]["@type"] === 'ResultsList' && !resultlistfound) {
									resultlistfound = true;
									var results = data.contents[0].mainContent[0].contents[0].records;
								}
								if (data.contents[0].mainContentTop[1].contents.length > 0 && data.contents[0].mainContentTop[1].contents[0]["@type"] === 'TopHeaderContent' && !reclistfound) {
									reclistfound = true;
									var reccomendedresult = data.contents[0].mainContentTop[1].contents[0].url;
								}
							}
						}
					}

					var sitelinkmarkup = '';
					var reccomendedmarkup = '';
					var resultsmarkup = '';
					var sitelinksfound = false;
					var videofound = false;

					// call Infinity search tracking function
					if (window.ORA && u30count < 1 && typeof infinitySearchTracking !== undefined) {
						infinitySearchTracking(doc.getElementById("u30input"), results.length);
					}

					if (results.length > 0) {
						for (var i = 0; i < results.length; i++) {
							if (u30developermenu) {
								var sitelinkr = false;
								var u30track = u30count + i;
								var title = results[i]._source.asset_title;
								var displayurl = results[i]._source.basepath;
								var devsitelinkfound = false;
								var record = {};
								record.attributes = {};
								record.attributes.Title = results[i]._source.title;
								if (results[i].highlight.description && results[i].highlight.description.length > 0) {
									record.attributes.Description = results[i].highlight.description.trim();
								} else {
									record.attributes.Description = results[i].highlight.body.trim();
								}
								var description = record.attributes.Description;
								record.attributes.DisplayURL = results[i]._source.url;
								record.attributes.SiteLink = [];
								record.attributes.SiteLink[0] = "";
								//Check for youtube video
								var u30youtubeVid = false;
								var ytregExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
								var match = displayurl[0].match(ytregExp);
								if (match&&match[7].length==11){
									var u30youtubeVidID=match[7];
									u30youtubeVid = true;
								}
								if (results[i].inner_hits && results[i].inner_hits.same_basepath_hits && results[i].inner_hits.same_basepath_hits.hits.length > 0) {
									//dev sitelinks found
									//var devsitelinkfound = true;
									if (results[i]._source.url != results[i]._source.basepath) {
										var offset = 2;
										record.attributes.SiteLink[0] += "siteLinkTitles1=" + record.attributes.Title.replace("~", "&#126;") + "~siteLinkDescriptions1=" + record.attributes.Description.replace("~", "&#126;") + "~siteLinkUrls1=" + results[i]._source.url.replace("~", "&#126;");
										record.attributes.Description = "";
										record.attributes.DisplayURL = results[i]._source.basepath;
									} else {
										var offset = 1;
									}
									record.attributes.Title = results[i]._source.asset_title;
									for (var sb = 0; sb < results[i].inner_hits.same_basepath_hits.hits.length && sb < 3; sb++) {
										var ih = results[i].inner_hits.same_basepath_hits.hits[sb];
										var iht = "siteLinkTitles" + (sb + offset) + "=" + ih._source.title;
										var ihd = "siteLinkDescriptions" + (sb + offset) + "=";
										if (ih.highlight.description && ih.highlight.description.length > 0) {
											ihd += ih.highlight.description.trim();
										} else {
											ihd += ih.highlight.body.trim();
										}
										var ihu = "siteLinkUrls" + (sb + offset) + "=" + ih._source.url;
										if (record.attributes.SiteLink[0].length > 0) {
											record.attributes.SiteLink[0] += "~";
										}
										record.attributes.SiteLink[0] += iht.replace("~", "&#126;") + "~" + ihd.replace("~", "&#126;") + "~" + ihu.replace("~", "&#126;");
										var sitelinks = record.attributes.SiteLink;
										var devsitelinkfound = true;
									}
								} else {
									//record.attributes.SiteLink[0] = "siteLinkTitles1=" + record.attributes.Title + "~siteLinkDescriptions1=" + record.attributes.Description + "~siteLinkUrls1=" + record.attributes.DisplayURL;
								}
							} else {
								var sitelinkr = false;
								var u30track = u30count + i;
								var title = results[i].attributes.Title;
								var description = results[i].attributes.Description;
								var displayurl = results[i].attributes.DisplayURL;
								var sitelinks = results[i].attributes.SiteLink;
								//Check for youtube video
								var u30youtubeVid = false;
								var ytregExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
								var match = displayurl[0].match(ytregExp);
								if (match&&match[7].length==11){
									var u30youtubeVidID=match[7];
									u30youtubeVid = true;
								}
							}
							if ((typeof sitelinks != 'undefined' && !sitelinksfound && u30count <= 0 && i == 0) || (devsitelinkfound)) {
								//process sitelinks
								var sitelinksfound = true;
								var sitelinkr = true;
								if (!devsitelinkfound) {
									var title = results[i].attributes.Title;
								}
								devsitelinkfound = false;
								resultsmarkup += '<div class="u30sitelinkw1" data-lbl="sitelinks-' + title + '">';
								resultsmarkup += '<div class="u30sitelinks u30result u30sitelinksp">';
								resultsmarkup += '<a class="u30head" href="' + displayurl + '">' + title + '</a>';
								resultsmarkup += '<cite><a tabindex="-1" href="' + displayurl + '">' + displayurl + '</a></cite>';
								if (typeof description !== 'undefined') {
									resultsmarkup += '<p data-lbl="sitelinks:' + title + '">' + description + '</p>';
								}
								resultsmarkup += '</div>';
								for (var u = 0; u < sitelinks.length; u++) {
									var sitesplitString = sitelinks[u].split("~");
									var titlearray = [0];
									var descrarray = [0];
									var urlarray = [0];
									for (var q = 0; q < sitesplitString.length; q++) {
										var sitelinkcnt = parseInt(sitesplitString.length / 3);
										var sitelinkdesc = sitesplitString[q].split('=')[0];
										var sitelinkdata = sitesplitString[q].substring(sitesplitString[q].indexOf('=') + 1);
										for (var t = 0; t <= sitelinkcnt;) {
											var siteLinkTitles = 'siteLinkTitles' + t;
											var siteLinkDescriptions = 'siteLinkDescriptions' + t;
											var siteLinkUrls = 'siteLinkUrls' + t;
											if (sitelinkdesc === siteLinkTitles) {
												titlearray[t - 1] = sitelinkdata;
											}
											if (sitelinkdesc === siteLinkDescriptions) {
												descrarray[t - 1] = sitelinkdata;
											}
											if (sitelinkdesc === siteLinkUrls) {
												urlarray[t - 1] = sitelinkdata;
											}
											t++;
										}
									}
									if (titlearray.length === sitelinkcnt && descrarray.length === sitelinkcnt && urlarray.length === sitelinkcnt) {
										for (var y = 0; y < (sitelinkcnt + 1);) {
											if (descrarray[y] && titlearray[y] && urlarray[y]) {
												var scurl = urlarray[y];
												var scdescr = descrarray[y];
												var sctitle = titlearray[y];
												if (scurl && scdescr && sctitle) {
													resultsmarkup += '<div class="u30sitelinks u30result u30sitelinksc">';
													resultsmarkup += '<div class="u30rw1">';
													resultsmarkup += '<div class="u30rw2">';
													resultsmarkup += '<a class="u30head" href="' + scurl + '" data-lbl="sitelinks:' + sctitle + '">' + sctitle + '</a>';
													//resultsmarkup += '<cite><a href="'+urlarray[y]+'">'+urlarray[y]+'</a></cite>';
													resultsmarkup += '<p data-lbl="sitelinks:' + sctitle + '">' + scdescr + '</p>';
													resultsmarkup += '</div>';
													resultsmarkup += '</div>';
													resultsmarkup += '</div>';
												}
											}
											y++;
										}
									}
									u++;
								}
								resultsmarkup += '</div>';

								if (!u30developermenu) {
									var sitelinkmarkup = resultsmarkup;
								}

							}
							if (typeof reccomendedresult != 'undefined' && u30count <= 0) {
								if (!recexecuted) {
									recexecuted = true;
									var reccomendedresult2 = reccomendedresult.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
									reccomendedmarkup += reccomendedresult2;
								}
							}

							//Display Regular Results
							if (title != undefined && displayurl != undefined && !sitelinkr) {
								if (!u30developermenu) {
									if (results[i].attributes.SourceTag == null) {
										var srctagfound = false;
									} else {
										var srctagfound = true;
										var srctag = results[i].attributes.SourceTag.toString().toLowerCase();
										if (srctag === 'video') {
											videofound = true;
											var videosrc = results[i].attributes.Id[0];
										} else {
											videofound = false;
										}
									}
								}
								if (u30youtubeVid) {
									var videosrc = u30youtubeVidID
									if (videosrc) {
										videofound = true;
									}
								}
								if (videofound) {
									resultsmarkup += '<div class="u30result u30video" data-lbl="search-row:' + u30track + '">';
								} else {
									resultsmarkup += '<div class="u30result" data-lbl="search-row:' + u30track + '">';
								}
								resultsmarkup += '<div class="u30rw1">';
								resultsmarkup += '<div class="u30rw2">';
								resultsmarkup += '<div class="u30rw3">';
								if (videofound) {
									if (u30youtubeVid) {
										resultsmarkup += '<a class="u30head" rel="vbox" role="button" href="?ytid=' + videosrc + '">' + title + '</a>';
									}else {
										resultsmarkup += '<a class="u30head" rel="vbox" role="button" href="?bcid=' + videosrc + '">' + title + '</a>';
									}
								}
								else {
									resultsmarkup += '<a class="u30head" href="' + displayurl + '">' + title + '</a>';
								}
								if (!srctagfound) {
									//Don't show URL for Videos
									if (!videofound) {
										resultsmarkup += '<cite><a tabindex="-1" href="' + displayurl + '">' + displayurl + '</a></cite>';
									}
								} else {
									if (videofound) {
										//Don't show URL for Videos
										//resultsmarkup += '<cite><a tabindex="-1" href="' + displayurl + '">' + displayurl + '</a></cite>';
									} else {
										resultsmarkup += '<cite><div class="u30type"><span>' + results[i].attributes.SourceTag + '</span><a tabindex="-1" href="' + displayurl + '">' + displayurl + '</a></div></cite>';
									}
								}
								if (typeof description !== 'undefined') {
									resultsmarkup += '<p>' + description + '</p>';
								}
								resultsmarkup += '</div>';
								if (videofound && !u30youtubeVid) {
									resultsmarkup += '<div class="bcembed bcthumbnail clickvideo" data-bcid="' + videosrc + '"></div>';
								}
								if (videofound && u30youtubeVid) {
									resultsmarkup += '<div class="u30ytembed"><div class="ytembed ytvideo ytthumbnail" data-ytid="' + videosrc + '"></div></div>';
								}
								resultsmarkup += '</div>';
								resultsmarkup += '</div>';
								resultsmarkup += '</div>';
								var videofound = false;
								var srctagfound = false;
								var videosrc = '';
								num++;
							}
						}
						setTimeout(function () {
							if (u30searchpg === 0) {
								u30searchresults.innerHTML = "";
							}
							u30searchw3.classList.remove('loading');
							u30searchresults.insertAdjacentHTML('beforeend', sitelinkmarkup + reccomendedmarkup + resultsmarkup);
							u30videocheck();
							/*
							if (window.NE('.cb19v2').nodes.length) {
								window.NE('.cb19v2').each(function (el) {
									if (window.NE(el).find('img, .bcthumbnail').length) {
										window.NE(el).closest('.cb19v2').addClass('u30proimg');
									}
								});
								window.NE('cite a').attr('tabindex', '-1');
							}
							*/
							//Run Analytics
							if (u30count <= 0) {
								//function s_postPlugins(s) {
								try {
									s.prop3 = s.pageName + ":Search>" + u30input.value;
									s.prop4 = "Search>" + u30input.value;
									s.prop6 = "0";
									s.prop8 = s.pageName;
									s.eVar26 = "search:askoracle";
									s.prop26 = s.eVar26;
									s.channel = "askoraclesearch";
									s.eVar52 = searchurl;
									s.pageName = s_account[1] + ":" + s_account[2] + ":askoraclesearch";
									s_Ping(true);
									s.pageName = s.prop8;
								} catch (e) {
									//alert('analytics var fail');
								}
								//}
								//$.getScript('//oracle.com/search/assets/ngui/ora_code.js');
								//$.getScript('//oracle.com/search/assets/ngui/ora_code_endecasearch.js');
							}
							u30input.selectionEnd = u30input.selectionStart;
							u30input.blur();
						}, 50);
						res(data)
					} else if (u30count <= 0) {
						//No Results on first search
						u30searchresults.innerHTML = "";
						u30searchw3.classList.remove('loading');
						var u30bottom = true;
						u30.classList.remove('skel');
						u30.classList.remove('searchsuggest');
						u30input.setAttribute('aria-expanded','false');
						u30.classList.add('searchresults');
						let u30noresults = doc.getElementById('u30noresults');
						let clonedu30noresults = u30noresults.innerHTML;
						u30searchresults.insertAdjacentHTML('beforeend', clonedu30noresults);
					}
					else {
						//No Results on any search
						u30.classList.remove('skel');
						u30searchw3.classList.remove('loading');
					}
				})
			})
			.then(function( data ) {
				if(!data) {
					return;
				}
				var u30bottom = true;
				u30.classList.remove('skel');
				u30.classList.remove('searchsuggest');
				u30input.setAttribute('aria-expanded','false');
				u30.classList.add('searchresults');
				//Remove Tab from vjs-big-play-button
				/*
				NE(".u30w8").on("keydown", ".bclink", function (e) {
					NE('.u30video .vjs-big-play-button').attr('tabindex','-1');
				});
				*/
				setTimeout(function() {
					var u30results2 = doc.querySelectorAll('#u30resultsw1 .u30result'),
					lastChild = u30results2 [u30results2.length -1 ];
					var $allAnchor = lastChild.querySelectorAll('a');
					var lastAnchor = $allAnchor[0];
					function _handler(e) {
						if (e.key === "Shift" && e.key === "Tab") {
							return;
						}
						if (e.key === "Tab") {
							if (u30searchw3.classList.contains('loading')) {
								e.preventDefault();
							}
						}
					}
					lastAnchor && lastAnchor.addEventListener('keydown', _handler);

					if (u30searchpg === 0) {
						doc.getElementById('u30closeresults').focus();
					}

					//Search for new results on scroll down
					u30results.addEventListener('scroll',function(){
						var scrollTop = (u30results.pageYOffset || u30results.scrollTop);
						var scrollHeight = u30results.scrollHeight;
						var offsetHeight = u30results.offsetHeight;
						var contentHeight = scrollHeight - offsetHeight - 100;
						if (contentHeight <= scrollTop){
							if(u30bottom){
								if (u30searchpg >= 0) {
									u30searchpg = u30searchpg + 10;
								}
								u30searchw3.classList.add('loading');
								u30buildResults(u30searchpg);
								u30bottom=false;
							}
						}
					},false)
				}, 200);
			});
		};

		//Escape Key
		window.addEventListener("keydown", event => {
			event = event || window.event;
			if(event.key === "Escape") {
				if (u30.classList.contains('searchexpand')) {
					setTimeout(() => {
						u30searchBtn.focus();
					}, 200);
				}
				u30CloseSearch();
				u30CloseNav();
				if(u30v3 && u30accountBtn.classList.contains('active')){
					u30accountBtn.focus();
					u30closeAccount();
				}
			}
		});

		//adjust links if in iFrame
		if (window.frameElement) {
			let allu30Links = document.querySelectorAll('.u30 a');
			allu30Links.forEach(link => link.setAttribute('target', '_top'));
		}

	}
})();
}

//We wrap up the entire component in a new function and then register it in the OCM framework if we're in OCM so it can be triggered
var isOCM = document.querySelector('.scs-slot');
if (isOCM){
	OCOM.register(function u30($) {
		u30Wrapper();
		$('#u30').prependTo('.f11w1');
	});
}
else {
	u30Wrapper();
}

});

/*! U10 */
/*! OCOM-norewrite */
const u10Wrapper = () => {

	function langVersion(queryStringCountry, country, browserLang){
        if(queryStringCountry ? queryStringCountry === 'jo' : country.country_code.toLowerCase() === 'jo'){
            return `jo${browserLang === 'ar' ? '-ar' : ''}`
        } else if(queryStringCountry ? queryStringCountry === 'ae' : country.country_code.toLowerCase() === 'ae'){
            return `ae${browserLang === 'ar' ? '-ar' : ''}`
        } else if(queryStringCountry ? queryStringCountry === 'bh' : country.country_code.toLowerCase() === 'bh'){
            return `bh${browserLang === 'ar' ? '-ar' : ''}`
        } else if(queryStringCountry ? queryStringCountry === 'ch' : country.country_code.toLowerCase() === 'ch'){
            return `ch${browserLang === 'de' ? '-de' : '-fr'}`
        } else if(queryStringCountry ? queryStringCountry === 'ca' : country.country_code.toLowerCase() === 'ca'){
            return `ca${browserLang === 'en' ? '-en' : '-fr'}`
        } else if(queryStringCountry ? queryStringCountry === 'il' : country.country_code.toLowerCase() === 'il'){
            return `il${browserLang === 'he' ? '' : '-en'}`
        } else if(queryStringCountry ? queryStringCountry === 'jo' : country.country_code.toLowerCase() === 'jo'){
            return `il${browserLang === 'ar' ? '-ar' : ''}`
        } else if(queryStringCountry ? queryStringCountry === 'kw' : country.country_code.toLowerCase() === 'kw'){
            return `kw${browserLang === 'ar' ? '-ar' : ''}`
        } else if(queryStringCountry ? queryStringCountry === 'lb' : country.country_code.toLowerCase() === 'lb'){
            return `lb${browserLang === 'ar' ? '-ar' : ''}`
        } else if(queryStringCountry ? queryStringCountry === 'middleeast' : country.country_code.toLowerCase() === 'middleeast'){
            return `middleeast${browserLang === 'ar' ? '-ar' : ''}`
        } else if(queryStringCountry ? queryStringCountry === 'om' : country.country_code.toLowerCase() === 'om'){
            return `om${browserLang === 'ar' ? '-ar' : ''}`
        } else if(queryStringCountry ? queryStringCountry === 'sa' : country.country_code.toLowerCase() === 'sa'){
            return `sa${browserLang === 'ar' ? '-ar' : ''}`
        } else if(queryStringCountry ? queryStringCountry === 'ye' : country.country_code.toLowerCase() === 'ye'){
            return `ye${browserLang === 'ar' ? '-ar' : ''}`
        } else {
            return queryStringCountry ? queryStringCountry : country.country_code.toLowerCase();
        }
    }
    function fetchCountryAndPhone() {
        const queryStringCountry = document.location.search.split("&usercountry=")[1]; //Use country from query string if available to test
        if (sessionStorage.getItem("country_code") !== null) {
        //    console.log("Loading from Session Storage data")
          let getCountryCode = sessionStorage.getItem("country_code");
          let phoneContact = sessionStorage.getItem("phone");
          let hasFlag = sessionStorage.getItem("flag_url");
          const pageCountryId = document.querySelector('meta[name="siteid"]').content; 
    
          if(queryStringCountry ? queryStringCountry !== pageCountryId : getCountryCode && pageCountryId !== getCountryCode){
            [...document.querySelectorAll(".u10w2 ul li:first-child")].splice(-1)[0].insertAdjacentHTML('beforebegin',`<li> ${hasFlag === null ? `<span class="u10globefallback"/>` : `<img alt="" src="${sessionStorage.getItem("flag_url").replace(/uk/,'gb')}"/>`} ${getCountryCode.toUpperCase().split("-")[0]} Sales: ${phoneContact}</li>`);
          }
    
        } else {
        
        let vinfo = (document.location.href.indexOf('www-sites') > -1 || document.location.href.indexOf('developer.oracle.com') > -1) ? 'https://www.oracle.com/visitorinfo/' : '/visitorinfo/';
        
          return Promise.all([
            fetch(vinfo).then(response => response.json()),
            fetch('/assets/json/ac-sales-contact-data.json').then(response => response.json())
          ]).then(([countryCode, phoneNum]) => {
            // console.log("Loading from API calls")
            // console.log(countryCode, phoneNum)
            const country = countryCode;
            const phone = phoneNum;
            const browserLang = navigator.language;
            const countryHasFlag = phone[`${langVersion(queryStringCountry, country, browserLang)}`].flag;
            // console.log("Country has flag: ", countryHasFlag)
            // console.log("Country lang ", langVersion(country, browserLang))
            const pageCountryId = document.querySelector('meta[name="countryid"]').content.toLowerCase();
            // console.log("Country of page ", pageCountryId)
            const formattedPhone = phone[`${langVersion(queryStringCountry, country, browserLang)}`].sales.replace(/(\+?[0-9][0-9ORACLE\-\. \(\)]+[0-9\)])/g,"<a href=\"tel:$1\">$1</a>").replace(/"([^"]+)"/g, (match) => '"tel:'+match.replace(/[^0-9]/g,"")+'"');
            // console.log("FORMATTED PHONE ", formattedPhone)
            countryHasFlag !== undefined && sessionStorage.setItem("flag_url", `https://static.oracle.com/cdn/fnd/gallery/2210.2.0/images/flg-${queryStringCountry ? queryStringCountry : country.country_code.toLowerCase()}.svg`);
            // console.log("pageCountryId !== country_code: ", pageCountryId !== country.country_code.toLowerCase())
            // console.log(browserLang)
            // console.log("LANG VER PROPS", queryStringCountry, country, browserLang)

            if(queryStringCountry ? queryStringCountry !== pageCountryId : country.country_code && pageCountryId !== country.country_code.toLowerCase()){
                [...document.querySelectorAll(".u10w2 ul li:first-child")].splice(-1)[0].insertAdjacentHTML('beforebegin',`<li> ${countryHasFlag === undefined ? `<span class="u10globefallback"/>` : `<img alt="" src="${countryHasFlag.replace(/uk/,'gb')}"/>`} ${langVersion(queryStringCountry ? queryStringCountry : country.country_code).toUpperCase().split("-")[0]} Sales: ${formattedPhone}</li>`);
            }
            
            sessionStorage.setItem("country_code", queryStringCountry ? queryStringCountry : country.country_code.toLowerCase())
            sessionStorage.setItem("phone", formattedPhone/*phone[`${sessionStorage.getItem("country_code")}`].sales)*/);
          });
        }
    }
    if(document.getElementById("u10") !== null){
        fetchCountryAndPhone();
    }

	const oracleCS = {};	

	jQuery(document).ready(function ($) {
		if ($('.u10')[0] || $('#u10')[0]) {
			oracleCS.u10Ele = document.querySelector('.u10');
			oracleCS.mobileBreakpoint = 770;
			oracleCS.tabletBreakpoint = 1025;
			oracleCS.selectedCaret = 0;
			oracleCS.isOpen = false;
			oracleCS.countryTabFocus = 0;
			oracleCS.regionTabFocus = 0;
			oracleCS.isGlobal = false;
			oracleCS.keyboardEventSet = {'desktopCountries':false, 'desktopRegions':false, 'mobileCountries':[], 'mobileRegions':[]};
			oracleCS.cmenucontent = document.querySelector('#u10cmenu a')?.getAttribute('href') || null;		

			oracleCS.CLS_REGN = 'u10regn',
			oracleCS.CLS_CMENU = 'u10countrymenu',
			oracleCS.CLS_CMENUL1 = 'u10cmenu-l1',
			oracleCS.CLS_CMENUL2 = 'u10cmenu-l2',
			oracleCS.CLS_TICON = 'u10ticon',
			oracleCS.CLS_CLINK = 'u10clink',
			oracleCS.CLS_CURREGN = 'u10currentcr',
			oracleCS.CLS_CURRCTRY = 'u10currentcc',
			oracleCS.CLS_DEFLTREGN = 'u10currentdr',
			oracleCS.CLS_TOOLPOP = 'u10toolpop',
			oracleCS.CLS_NOOVERRIDE = 'uu10ooverride',
			oracleCS.CLS_LOCALNAV = 'u10v6',
			oracleCS.CLS_CMENUPOP = 'u10menupop',
			oracleCS.CLS_SELECTEDRGN = 'selected-region',

	/**
	 * jQuery legacy code
	 */

		// backwards compatibility for only using id on u10v0
		$('[id="u10"]').addClass('u10').not('.u10v0').removeAttr('id');
		$('.u10w3').prepend('<a class="u10btn"></a>'); 
		$('.u10w6.icn-googleplus').closest('.u10w2').remove();
		$('#teconsent > a').removeAttr('role');
		$('.u10w3').find('h5').contents().unwrap().wrap('<div class="u10ttl"></div>');
		//Remove text from the Social Icon links
		$('.scl-icons a').text(' ');	
		
		//Polyfill for a11y markup changes
		const isA11yCompatible = document.querySelector('.u10w11');
		if (!isA11yCompatible) {
			$('.u10w1').wrap('<nav class="u10w1" aria-label="Footer"></nav>');
			$('.u10w2').unwrap();
			$('.u10w1 > .u10w4').remove();
			$('.u10w1').append('<div class="u10w4"><hr></div>');
			$('.u10w5').insertAfter($('.u10w5').parent());
			$('.u10w5').wrap('<div class="u10w11"></div>');
			$('.u10-cr').insertBefore($('.u10w5'));
			$('.scl-icons').wrap('<nav class="u10scl" aria-label="Social media links"></nav>');
			$('.u10scl').insertAfter('.u10w5');
			$('.u10w5').wrap('<nav class="u10w5 u10w10" aria-label="Site info"></nav>');
			$('.u10-links').unwrap();
		}

		//Use h4 tags for headings
		$('.u10ttl').each(function(){
			$(this).replaceWith($('<h4/>').addClass('u10ttl').attr('aria-hidden','true').html($(this).html()));
		});			
		

		$('.u10').find('.u10-links li > a').eq(1).attr('id','u10footer1');
		$('.u10').find('.u10-links li > a').eq(2).attr('id','u10footer2');
		$('.u10').find('.u10-links li > a').eq(3).attr('id','u10footer3');
		$('.u10').find('.u10-links').find('u10last a').attr('id','u10footerlast');

		$('.u10').find('.scl-icons').attr('id','scl-icons');

		//Replace title attribute on social media icons with aria-label
		$('.scl-icons li a').each(function() {
			let ttl = $(this).attr('title');
			$(this).attr('aria-label', ttl);
			$(this).removeAttr('title');
		});

		//Replace Country Selector link with button
		document.querySelector(`.${oracleCS.CLS_TICON}`)?.setAttribute('role','button');

		// Accessibility
		// remove outdated aria attributes
		document.querySelector('#u10cmenu')?.setAttribute('role','none');
		document.querySelector('.u10-cr')?.setAttribute('role','none');


		if (window.frameElement) {
			$(document).find('.u10 a').attr('target', '_top');
		}

		//Listener for click to open country menu
		$('body .u10ticon').on('click keydown touchstart', function (e) {
			//oracleCS.countryTabFocus ? null : oracleCS.countryTabFocus = 0;
			oracleCS.countryTabFocus = 0;
			oracleCS.regionTabFocus ? null : oracleCS.regionTabFocus = 0;
			if (e.keyCode !== 9 && e.keyCode !== 16) {
			e.preventDefault();
			e.stopImmediatePropagation();

			//Check if country menu url from Country Selector anchor property exists and fetch data to build counry menu
			oracleCS.cmenucontent ? getCountryData(oracleCS.cmenucontent) : null;

			$('body').removeClass('u10hide');		
			toggleCountriesMenu(e);
			if ($(window).width() < oracleCS.mobileBreakpoint && oracleCS.isOpen) {
				if (!($('.u10modal').length)) {
					$('.u10modal #u10cmenu').addClass('u10opened mobile');
					setupMobileCountryKeyboardListeners();
				}
			}

			//Open desktop version
			else {
				//If a region was clicked on, keep dialog open. If a country link was clicked on, go to link. 
				const countrySelector = document.getElementById("u10cmenu");
				countrySelector.classList.add('u10opened');
				window.addEventListener('mouseup', closeDesktopCountrySelector, true);
				setupCountrySelectorA11yNav();
				
				if (e.target.classList[0] !== 'u10ticon' && !isOCM) {  //Don't try to go to href
					if (e.target.href) {
						window.location = e.target.href;
					}
				}
			}
		}
		});

		//Handle a11y on plus/minus buttons
		showHideMobileButtons();
		addArialLabeledByTag();

		//Listener for mobile drawers, allows for opening/closing and rotating arrow.
		document.querySelector('.u10').addEventListener('click', e => toggleLinks(e));
		document.querySelector('.u10').addEventListener('keydown', e => toggleLinks(e));
		document.querySelector('.u10').addEventListener('touchstart', e => toggleLinks(e), {passive: true});
		
		window.addEventListener('resize', debounce(onResize));	
	}
	});


	/**
	 * debounce(func) 
	 * Utility function to delay function calling (used when resizing)
	 */		
	const debounce = (func) => {
		
		var timer;
		return function (event) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(func, 150, event);
		};
	}

	/**
	 * onResize() 
	 * Allows switching between mobile/tablet and desktop country selector views
	 */	
	const onResize = () => {
	if (oracleCS.isOpen) {
		// MOBILE
		if (
		window.innerWidth < oracleCS.mobileBreakpoint &&
		!document
			.querySelector(".u10modal .u10mtool")
			?.classList.contains("u10opened")
		) {
		loadCountryMenuInMobileView();
		setTimeout(() => {
			oracleCS.csRegionsMobile[oracleCS.regionTabFocus].focus();
		}, 500);
		}

		//DESKTOP
		if (window.innerWidth > oracleCS.mobileBreakpoint) {
		document.querySelector(".u10mtool").classList.add("u10opened");
		document.querySelector(".u10ticon").setAttribute("aria-expanded", "true");
		document.querySelector(".u10modal")?.remove();
		oracleCS.keyboardEventSet.mobileCountries = [];
		oracleCS.keyboardEventSet.mobileRegions = [];

		document.body.classList.remove("noScroll");
		const allElementsExceptModal = document.querySelectorAll('body >*:not(.u10modal)');
		allElementsExceptModal.forEach(el => el.removeAttribute('aria-hidden'));	  
		cmenuEqualHeight();
		//setupCountrySelectorA11yNav();
		setTimeout(() => {
			oracleCS.csRegions[oracleCS.regionTabFocus].click();
			oracleCS.csRegions[oracleCS.regionTabFocus].focus();
		}, 500);
		}
	} 
	showHideMobileButtons();
	};

	/**
	 * closeActiveFooterLink() 
	 * Close previously active link
	 */	
	const closeActiveFooterLink = () => {
		const activeEle = document.querySelector('.u10active');
		if (activeEle) {
			activeEle.classList.remove('u10active');
		}
	};


	/**
	 * toggleLinks(e) 
	 * Listener for mobile drawers, allows for opening/closing and rotating arrow.
	 * @param  {[event]} e mouse or click event
	*/ 
	const toggleLinks = (e) => {
		const ele = e.target;
		const u10w3 = ele.closest('.u10w3');
		const activeClass = 'u10active';
		const footerCarets = document.querySelectorAll('.u10btn');
		footerCarets.forEach((btn, i) => {
			btn.setAttribute('aria-expanded','false');
			if (btn.parentElement.classList.contains('u10active')) {
				selectedCaret = i;
			}
		});

		if (e.target.classList.contains('u10btn') && !e.target.parentElement.classList.contains(activeClass)) {
				e.target.setAttribute('aria-expanded','true');
		}

	if (window.innerWidth < oracleCS.tabletBreakpoint) {
		if (e.code === "Escape" || e.code === "Esc") {
		if (oracleCS.isOpen) {
			oracleCS.isOpen = false;
			document.querySelector(".u10modal .closeModal").click();
			return;
		}
		}

		if (
		ele &&
		(ele.classList.contains("u10btn") ||
			(ele.parentNode &&
			ele.parentNode.classList.contains("u10w3") &&
			ele.tagName === "H5")) &&
		window.innerWidth <= oracleCS.tabletBreakpoint
		) {
		//e.preventDefault();
		if (e.shiftKey && e.key === "Tab") {
			if (oracleCS.selectedCaret == 0) {
			const prevEl = document
				.querySelector(".u10")
				.previousElementSibling.querySelectorAll("a");
			const last = prevEl[prevEl.length - 1];
			last.focus();
			return;
			} else {
			oracleCS.selectedCaret = oracleCS.selectedCaret - 1;
			//footerCarets[oracleCS.selectedCaret].focus();
			}
			return;
		}

		if (e.keyCode === 9) {
			if (oracleCS.selectedCaret == footerCarets.length - 1) {
			//document.querySelector(".u10ticon").focus();
			return;
			} else {
			oracleCS.selectedCaret = oracleCS.selectedCaret + 1;
			//footerCarets[oracleCS.selectedCaret].focus();
			}
		}

		if (e.keyCode === 13 || e.type == "click") {
			if (u10w3.classList.contains(activeClass)) {
			// close current active link
			closeActiveFooterLink();
			//footerCarets[oracleCS.selectedCaret].focus();
			} else {
			// Close previous active link 
			closeActiveFooterLink();
			u10w3.classList.add(activeClass);
			
			// setTimeout(()=> {
			// 	console.log('focus on: ',document.querySelector('.u10active ul a')); 
			// 	document.querySelector('.u10active ul a').focus();
			// },50);
			} 
		}
		}
	}
	};
	
	// Read and format country html
	const loadCountryDropdown = (mContent) => {

		const href =
		oracleCS.u10Ele.querySelector(oracleCS.CLS_REGN) &&
		oracleCS.u10Ele.querySelector(oracleCS.CLS_REGN).length &&
		oracleCS.u10Ele.current.querySelector(oracleCS.CLS_REGN).attr('href');
		const cmid = (href && href.split('#')[1]) || oracleCS.CLS_CMENU;
		const tool = oracleCS.u10Ele.querySelector('#u10cmenu');

		// Remove exissting content
		if (tool && tool.querySelector(`.${oracleCS.CLS_TOOLPOP}`)) {
		tool.querySelector(`.${oracleCS.CLS_TOOLPOP}`).remove();
		}

		// append
		const tmpEle = document.createElement('div');
		const menuContent = mContent
		.replace(/<([^h/>]*)h5/g, '<button class="u10clink" role="treeitem"')
		.replace(/<\/h5>/g, '</button>')
		.replace(/u02/g, 'u10');
		tmpEle.innerHTML = menuContent;
		const cMenu = tmpEle.querySelector(`#${cmid}`);
		const u10pttlEle = document.createElement('li');
		u10pttlEle.classList.add('u10pttl-li');

		if (cMenu) {
		// Toggle country region
		cMenu.onclick = toggleCountryRegion;
		cMenu.onkeydown = handleCountrySelectorFocus;

		const tmp = document.createElement('h5');
		tmp.classList.add('u10pttl');
		tmp.innerText = oracleCS.u10Ele.querySelector('#u10cmenu .u10ticon').innerText;
		u10pttlEle.appendChild(tmp);
		const u10CountryUl = cMenu.querySelector('.u10countrymenu > ul');
		u10CountryUl.insertBefore(u10pttlEle, u10CountryUl.firstChild);
		cMenu.querySelector(`.${oracleCS.CLS_CURREGN}`).classList.add('u10currentdr');
		cMenu.querySelector(`.${oracleCS.CLS_CURREGN} .u10cmenu-l2`).classList.add(oracleCS.CLS_SELECTEDRGN);
		
		const toolpop = document.createElement('div');
		toolpop.classList.add('u10menupop');
		toolpop.classList.add(oracleCS.CLS_TOOLPOP);
		toolpop.appendChild(cMenu);
		tool.appendChild(toolpop);

		if (cMenu.getAttribute('data-toollabel')) {
			const label = cMenu.getAttribute('data-toollabel');
			toolpop.querySelector('h5.u10pttl').innerHTML = label;
			toolpop.querySelector('.u10ticon > span').innerHTML = label;
		}

		setCountryIndicator();

		// Cleanup
		tmpEle.remove();
		tmp.remove();
		cmenuEqualHeight();
		}
	};

	const showHideMobileButtons = () => {
		if (window.innerWidth > oracleCS.tabletBreakpoint) {
			$('.u10w3 .u10btn').attr('aria-hidden', 'true');
			$('.u10w3 .u10btn').attr('tabindex', '-1');		
			$('.u10w3 .u10btn').attr('role', '');	
		}
		else {
			$('.u10w3 .u10btn').attr('aria-hidden', 'false');
			$('.u10w3 .u10btn').attr('aria-expanded', 'false');
			$('.u10w3 .u10btn').attr('tabindex', '0');	
			$('.u10w3 .u10btn').attr('role', 'button');				
		}
	}


	function getCountryData(cmenucontent) {
		const getDataPromise = new Promise(function(resolve, reject) {
			if (!oracleCS.html) {
				resolve(oracleDataMenu.fetchMenuContent(cmenucontent));
			}
		});	

		getDataPromise.then(
			data => {
				oracleCS.html = data;
				loadCountryDropdown(data);
				addAriaTree();
				setupCountrySelectorA11yNav();
			},
			error => {
				console.warn('Unable to retrieve country data.', error);
			}
		);
	}

	const toggleCountriesMenu = (e) => {
		if (e && e.target.classList.contains('u10regn')) {
		e.preventDefault();
		oracleCS.isOpen = oracleCS.isOpen ? false : true;

		if (window.innerWidth < oracleCS.mobileBreakpoint) {
			loadCountryMenuInMobileView();
		}	
		e.target.setAttribute('aria-expanded','true');
		} 
	};

		// Mobile view country menu
		const loadCountryMenuInMobileView = () => {
			if (!document.querySelector('.u10modal')) {
			const modalWrp = document.createElement('div');
			modalWrp.classList.add('u10modal', 'show');
			let mobileMenuEle;
			const closeEle = document.createElement('button');
			closeEle.setAttribute('aria-label','Close country selector');
			const allElementsExceptModal = document.querySelectorAll('body >*:not(.u10modal)');

			setTimeout( () => {
				if (!document.querySelector('.u10modal .u10mtool')) {
					mobileMenuEle = document.querySelector('.u10-cr #u10cmenu').cloneNode(true);
					mobileMenuEle.classList.add('u10opened');
					modalWrp.appendChild(mobileMenuEle);

					// Close Ele
					if (modalWrp.querySelector('.closeModal')) {
						modalWrp.querySelector('.closeModal').remove();
					}
					
					closeEle.classList.add('closeModal');				
					if (mobileMenuEle.querySelector('.u10pttl-li')) {
						mobileMenuEle.querySelector('.u10pttl-li').appendChild(closeEle);
					}
					document.body.appendChild(modalWrp);
				}
				


				document.body.classList.add('noScroll');
				
				allElementsExceptModal.forEach(el => el.setAttribute('aria-hidden','true'));
								
				setupMobileCountryKeyboardListeners();
				const activeLink = document.querySelector('.u10modal .u10currentcr .u10clink');
				activeLink ? activeLink.focus() : null;
				
			},500)


		
			// Close event
			closeEle.onclick = (e) => {
				e.preventDefault();
				document.body.classList.remove('noScroll');
				allElementsExceptModal.forEach(el => el.removeAttribute('aria-hidden'));
				modalWrp.remove();
				toggleCountriesMenu(false);
				oracleCS.isOpen = false;
				oracleCS.keyboardEventSet.mobileCountries = [];
				oracleCS.keyboardEventSet.mobileRegions = [];
				document.querySelector('.u10ticon')?.setAttribute('aria-expanded','false');
			};
		
			// Toggle regions
			modalWrp.onclick = toggleCountryRegion;
			modalWrp.onkeydown = handleCountrySelectorFocus;
			}
		};


	const handleCountrySelectorFocus = (e) => {
		if (e.shiftKey && e.key === "Tab") {
			closeCountrySelector();
			if (window.innerWidth < oracleCS.mobileBreakpoint) {
				let footerCarets = [...document.querySelectorAll('.u10w3 .u10btn')]
				footerCarets = footerCarets[footerCarets.length-1];
				footerCarets?.focus();			
			}
			else {
				let footerLinks = [...document.querySelectorAll('.u10w3 ul li a')];
				footerLinks = footerLinks[footerLinks.length-1];
				footerLinks?.focus();
			}

			e.preventDefault();
			return;
		}
		if (e.key === "Tab") {
			closeCountrySelector();
			document.querySelector('.u10-links a')?.focus();
			e.preventDefault();
			return;
		}
	}

	// open selected region
	const toggleCountryRegion = (e) => {
		const targetEle = e.target;
		if (targetEle.classList.contains('u10clink')) {
			oracleCS.regionTabFocus = oracleCS.csRegions.findIndex(rgn => rgn.innerHTML == targetEle.innerHTML);

			const wrapper = targetEle.closest('.u10countrymenu');
			e.preventDefault();
			if (targetEle.parentElement.classList.contains(oracleCS.CLS_CURREGN) ) {
				targetEle.setAttribute('aria-expanded','false');
				if (wrapper.querySelector(`.${oracleCS.CLS_SELECTEDRGN}`)) { 
				wrapper.querySelector(`.${oracleCS.CLS_SELECTEDRGN}`).classList.remove(oracleCS.CLS_SELECTEDRGN);
				targetEle.parentElement.classList.remove(oracleCS.CLS_CURREGN);
				return;
				}

			} 
			
			else {
				if (wrapper.querySelector(`.${oracleCS.CLS_CURREGN}`)) {
					wrapper.querySelector(`.${oracleCS.CLS_CURREGN}`).classList.remove(oracleCS.CLS_CURREGN);
				}
				if (wrapper.querySelector(`.${oracleCS.CLS_SELECTEDRGN}`)) {
					wrapper.querySelector(`.${oracleCS.CLS_SELECTEDRGN}`).classList.remove(oracleCS.CLS_SELECTEDRGN);
				}
				targetEle.parentElement.querySelector(`.${oracleCS.CLS_CMENUL2}`).classList.add(oracleCS.CLS_SELECTEDRGN);
				targetEle.parentElement.classList.add(oracleCS.CLS_CURREGN);
			}
			if (!targetEle.closest('.u10modal')) {
				cmenuEqualHeight();
			}
			addAriaTree(targetEle);
		}
		};

	/**
	 * removeSelectedRegion() 
	 * Removes existing region selection
	 */		  
	const removeSelectedRegion = () => {
		if (oracleCS.u10Ele.querySelector(`.u10menupop .${oracleCS.CLS_CURREGN}`)) {
		oracleCS.u10Ele.querySelector(`.u10menupop .${oracleCS.CLS_CURREGN}`).classList.remove(oracleCS.CLS_CURREGN);
		}
		if (oracleCS.u10Ele.querySelector(`.u10menupop .${oracleCS.CLS_SELECTEDRGN}`)) {
		oracleCS.u10Ele.querySelector(`.u10menupop .${oracleCS.CLS_SELECTEDRGN}`).classList.remove(oracleCS.CLS_SELECTEDRGN);
		}
	};	  

		//Copied over from react core library. Possibly deprecated - used for international sites?
	const setCurrentCountry = (searchtext) => {
			const xpath = `//a[text()='${searchtext}']`;
			const matchContryEle = document.evaluate(xpath, u10Ele, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
				.singleNodeValue;
			// Clear sections
			removeSelectedRegion();
			// Clear Country
			if (u10Ele.querySelector(`.u10menupop .${oracleCS.CLS_CURREGN} .${CLS_CURRCTRY}`)) {
				u10Ele.querySelector(`.u10menupop .${oracleCS.CLS_CURREGN} .${CLS_CURRCTRY}`).classList.remove(CLS_CURRCTRY);
			}
			// set new country
			matchContryEle.classList.add(CLS_CURRCTRY);
			matchContryEle.closest(`.${oracleCS.CLS_CMENUL2}`).classList.add(oracleCS.CLS_SELECTEDRGN);
			matchContryEle.closest(`.${oracleCS.CLS_CMENUL1} > li`).classList.add(oracleCS.CLS_CURREGN);
			matchContryEle.classList.add(CLS_CURRCTRY).focus();
			cmenuEqualHeight();
	};

		/**
		 * cmenuEqualHeight() 
		 * Sets country menu height
		 */	
	const cmenuEqualHeight = () => {
		if (!document.querySelector('.u10modal.show')) {
			const tgt = oracleCS.u10Ele.querySelector(`.${oracleCS.CLS_CMENUL1}`);
			
			if (oracleCS.isOpen) {
			if (oracleCS.u10Ele.querySelector(`.${oracleCS.CLS_CURREGN} .${oracleCS.CLS_CMENUL2}`)) {
				const offset = oracleCS.u10Ele.querySelector(`.${oracleCS.CLS_CURREGN} .${oracleCS.CLS_CMENUL2}`).getBoundingClientRect();
				tgt.style.height = `${offset.height}px`;
			}
			} else if (tgt) {
			tgt.style.height = '0px';
			}
		}

		//TODO === Should this be only on desktop?
		//a11y: Combine both country groups with aria tags	
		document.querySelectorAll('.u10cmenuc1 li').forEach((countryGroup) => {countryGroup.setAttribute('role','none'); });
		document.querySelectorAll(`.${oracleCS.CLS_CMENUL2}`).forEach((countryGroup) => {
			countryGroup?.setAttribute('role','group');
		});	

		oracleCS.csCountries?.forEach((country) => {
			country.setAttribute('role','treeitem');
		});

		document.querySelector(`.${oracleCS.CLS_CMENUL1}`).setAttribute('role','tree');
		//a11y: Combine both country groups with aria tags	
		document.querySelectorAll('.u10cmenuc1').forEach((countryGroup) => {countryGroup.setAttribute('role','none'); });
		document.querySelectorAll(`.${oracleCS.CLS_CMENUL2} ul`).forEach((ul) => {ul.setAttribute('role','none'); });	
		document.querySelectorAll(`.${oracleCS.CLS_CMENUL1} li`).forEach((li) => {li.setAttribute('role','none'); });

		document.querySelectorAll(`.${oracleCS.CLS_CMENUL1} li a`).forEach((a) => {
			a.setAttribute('role','treeitem');
		})
		
		
	};


	/**
	 * setCountryIndicator() 
	 * Highlight current country in menu based on side id and with with the help of pdit local map JSON
	 */
	const setCountryIndicator = () => {
		// Read site ID from meta data, default to US
		const siteid =
		(document.querySelector('meta[name="siteid"]') &&
			document.querySelector('meta[name="siteid"]').getAttribute('content')) ||
			locale || 'us';
		const pditResp = PDITLocaleMap.init();

		pditResp.then((data) => {
		if (data) {
			const countryLinks = oracleCS.u10Ele.querySelectorAll('.u10menupop a:not(.u10clink):not(.u10blink)');
			// Create country array to identify selected country
			const scoreArr = [];
			countryLinks.forEach((ele) => {
			const eleText = ele.text;
			let matches = 0;
			matches += +(eleText === data[siteid].englishcountryname);
			matches += +(eleText === data[siteid].countryname);
			matches += +(eleText.localeCompare(data[siteid].countryname) === 0);
			matches += +new RegExp(`/${siteid}/`, 'i').test(ele.getAttribute('href'));
			scoreArr.push({ name: eleText, score: matches });
			});
			// Sort score array in descending order to get highest score country label
			const sorted = scoreArr.sort((a, b) => (a.score > b.score ? -1 : b.score > a.score ? 1 : 0));
			// Get hightest score value to select country
			if (sorted[0].score > 0) {
			const searchtext = sorted[0].name;
			setCurrentCountry(searchtext);
			}
		}
		});
	};  

	/**
	 * addAriaTree() 
	 * Setup CS menu as an aria tree with unique regions
	 * Optional paramenter, name of the node that needs to be toggled on.
	 */  
	const addAriaTree = (nodeToToggle) => {
		if (oracleCS.isOpen) {
		document.querySelectorAll('.u10clink').forEach((ele,i) => {
			ele.setAttribute('type', 'button');
			ele.setAttribute('aria-controls', `region-${i}`);
			ele.setAttribute('aria-expanded', 'false');
			if (nodeToToggle && ele.innerHTML == nodeToToggle.innerHTML) {
				ele.setAttribute('aria-expanded', 'true');
				nodeToToggle.setAttribute('aria-expanded', 'true');
			}
			if ([...ele.parentNode.classList].includes('u10currentcr')) {
				ele.setAttribute('aria-expanded', 'true');
			}
			ele.setAttribute('id', `region-heading-${i}`);
			ele.nextElementSibling.setAttribute('id',`region-${i}`);
			ele.nextElementSibling.setAttribute('aria-labelledby',`region-heading-${i}`);
		});
		//   const currentRegionEle = document.querySelector(`.${oracleCS.CLS_CURREGN} > a`);
		//   if (currentRegionEle) {
		//     currentRegionEle.setAttribute('aria-expanded', 'true');
		// 	currentRegionEle.setAttribute('aria-current','true');
		//   }
		document.querySelectorAll(`.${oracleCS.CLS_CMENUL2} a`).forEach((ctry) => {
			ctry.setAttribute('role', 'treeitem');
		});
		}
	};	


	/**
	 * updateCountryCodes() 
	 * Sets up a country code based on the data-lbl property so that screen readers can better handle the international naming
	 */
	const updateCountryCodes = () => {	
		let countries = [...document.querySelectorAll('.u10modal #u10countrymenu .u10cmenu-l2 li > a, #u10countrymenu .u10cmenu-l2 .u10cmenuc1 a')];
		countries.forEach(country => {
			let cc = country.getAttribute('data-lbl').toString();
			cc = cc.replace(/-/g, ' ');
			country.setAttribute('lang',cc);
		});
	}

	/**
	 * setupCountrySelectorA11yNav() 
	 * Sets up keyboard navigation between country groups and regions on both desktop and mobile
	 */
	function setupCountrySelectorA11yNav() {
		oracleCS.csCountries = [...document.querySelectorAll('.u10cmenu-l2.selected-region a')];
		oracleCS.csRegions = [...document.querySelectorAll('.u10cmenu-l1 .u10clink')];
		//oracleCS.countryTabFocus = oracleCS.csCountries.findIndex(c => c.classList.contains('u10currentcc')) || 0;
		const csRegions = [...document.querySelectorAll('.u10cmenu-l1 > li > button')];

		setTimeout(() => {
			const currentCountry = document.querySelector('.u10cmenu-l2.selected-region .u10currentcc');
			if (currentCountry) {
				currentCountry.setAttribute('aria-current','true');
				currentCountry.focus();
			}
			else { // if the CS is closed and then reopened, focus on the first element in the country group
				oracleCS.csCountries.length ? oracleCS.csCountries[0].focus() : null;
			}	
			getCountryIndex();

		}, "300");

		// setTimeout(() => {	
		// 	const currentRegion = document.querySelector('.u10cmenu-l1 .u10currentcr .u10clink');
		
		// 	oracleCS.regionTabFocus = oracleCS.csRegions.findIndex(rgn => rgn.innerHTML == currentRegion.innerHTML);
		// 		if (window.innerWidth < oracleCS.mobileBreakpoint) {
		// 			oracleCS.regionTabFocus >= 0 ? oracleCS.csRegionsMobile[oracleCS.regionTabFocus].focus() : oracleCS.csRegionsMobile[0]?.focus();
		// 		}
		// 		else {
		// 			oracleCS.regionTabFocus >= 0 ? oracleCS.csRegions[oracleCS.regionTabFocus].focus() : oracleCS.csRegions[0]?.focus();
		// 		}
		// 		getCountryIndex();
		
		// 	}, "100");	
		
		const getCountryIndex = () => {oracleCS.csCountries.forEach((country,i) => {
			country.classList.contains('u10currentcc') ? oracleCS.countryTabFocus = i : 0;
		})
		return oracleCS.countryTabFocus;
		};


		if (!oracleCS.keyboardEventSet.desktopRegions) {
			csRegions.forEach(i => {
					oracleCS.keyboardEventSet.desktopRegions = true;
					i.setAttribute('role','treeitem');
						i.addEventListener('keydown', e => {		
							//i.setAttribute('listener', 'true');
							if (e.keyCode === 40) { //move down 
								oracleCS.regionTabFocus++;
								// If we're at the end, go to the start
								if (oracleCS.regionTabFocus >= csRegions.length) {
									oracleCS.regionTabFocus = 0;
								}
								csRegions[oracleCS.regionTabFocus].focus();
								document.activeElement.click();
					
								// Move up
							} if (e.keyCode === 38) {
								oracleCS.regionTabFocus--;
								// If we're at the start, move to the end
								if (oracleCS.regionTabFocus < 0) {
									oracleCS.regionTabFocus = csRegions.length - 1;
								}
								csRegions[oracleCS.regionTabFocus].focus();
								document.activeElement.click();
							}
					
							//if right key is pressed, switch focus to country group
							if (e.keyCode === 39) {
									oracleCS.csCountries = [...document.querySelectorAll('.u10cmenu-l2.selected-region a')];
									oracleCS.countryTabFocus = 0;
									oracleCS.csCountries[0].focus();
							}	

							if ((e.keyCode === 13) || (e.keyCode === 32)) {
								document.activeElement.click();
							}				

							//close modal via ESC key
							if (e.keyCode === 27) {
								document.querySelector('.u10.u10v6 #u10cmenu')?.classList.remove('u10opened');
								document.querySelector('.u10ticon').focus();
								oracleCS.isOpen = false;
								oracleCS.keyboardEventSet.mobileCountries = [];
								oracleCS.keyboardEventSet.mobileRegions = [];
							}					

							e.preventDefault();		
						})
			})
		}

		const countryGroups = document.querySelectorAll('.u10cmenu-l2');
		if (oracleCS.csCountries.length && oracleCS.keyboardEventSet.desktopCountries === false) {
			oracleCS.keyboardEventSet.desktopCountries = true;
			countryGroups.forEach(cg => {
				cg.addEventListener("keydown", e => {
					
					if (e.keyCode === 40) { //move down 
						oracleCS.countryTabFocus++;
						// If we're at the end, go to the start
						if (oracleCS.countryTabFocus >= oracleCS.csCountries.length) {
							oracleCS.countryTabFocus = 0;
						}
						oracleCS.csCountries[oracleCS.countryTabFocus].focus();
						// Move up
					} if (e.keyCode === 38) {
						oracleCS.countryTabFocus--;
						// If we're at the start, move to the end
						if (oracleCS.countryTabFocus < 0) {
							oracleCS.countryTabFocus = oracleCS.csCountries.length - 1;
						}
						oracleCS.csCountries[oracleCS.countryTabFocus].focus();
					}
					
					//if left key is pressed, switch focus to region group
					if (e.keyCode === 37) {
						const level1Menu = document.querySelector('.u10currentcr .u10clink');
						level1Menu.focus();
					}
			
					if ((e.keyCode === 13) || (e.keyCode === 32)) {
						document.activeElement.click();
					}
			
					//close modal via ESC key
					if (e.keyCode === 27) {
						document.querySelector('.u10.u10v6 #u10cmenu')?.classList.remove('u10opened');
						document.querySelector('.u10ticon')?.setAttribute('aria-expanded','false');
						document.querySelector('.u10ticon').focus();
						oracleCS.isOpen = false;
					}				
					e.preventDefault();
				});	
			});
		}
	}


	/**
	 * setupMobileCountryKeyboardListeners(e) - Sets up an event listener on the entire window in the capture phase, as the country selector (desktop version) needs to close if a click is detected outside of it. 
	 * When the country selector is closed, the event listener gets removed from the page to improve performance 
	 * @param  {oracleCS.csCountriesMobile} - Node list of countries based on the selected region
	 * @param  {oracleCS.csRegionsMobile} - Node list of all mobile regions
	 */

	function setupMobileCountryKeyboardListeners () {
		oracleCS.csCountriesMobile = [...document.querySelectorAll('.u10modal #u10countrymenu .u10cmenu-l2.selected-region li > a')];
		oracleCS.csRegionsMobile = [...document.querySelectorAll('.u10modal .u10clink')];

		oracleCS.csCountriesMobile.forEach(mcg => {
				if (oracleCS.keyboardEventSet.mobileCountries.includes(mcg.innerHTML) === false) {
					oracleCS.keyboardEventSet.mobileCountries.push(mcg.innerHTML);
					mcg.addEventListener("keydown", e => {
						if (e.keyCode === 40) { //move down 
							oracleCS.countryTabFocus++;
							// If we're at the end, go to the start
							if (oracleCS.countryTabFocus >= oracleCS.csCountriesMobile.length) {
								oracleCS.countryTabFocus = 0;
							}
							oracleCS.csCountriesMobile[oracleCS.countryTabFocus].focus();
							// Move up
						} if (e.keyCode === 38) {
							oracleCS.countryTabFocus--;
							// If we're at the start, move to the end
							if (oracleCS.countryTabFocus < 0) {
								oracleCS.countryTabFocus = oracleCS.csCountriesMobile.length - 1;
							}
							oracleCS.csCountriesMobile[oracleCS.countryTabFocus].focus();
						}
						
						//if left key or tab is pressed, switch focus to region group
						if (e.keyCode === 37) {
							document.querySelector('.u10modal .u10clink').focus();
						}		
						
						if ((e.keyCode === 13) || (e.keyCode === 32)) {
							document.activeElement.click();
						}		
								
						e.preventDefault();
					});	
				}
				
			});
		

		//Region listener setup
		oracleCS.csRegionsMobile.forEach(region => {	
			const regionName = region.innerHTML;
			if (!oracleCS.keyboardEventSet.mobileRegions.includes(regionName)) {
				oracleCS.keyboardEventSet.mobileRegions.push(regionName);
				region.addEventListener("keydown", e => {
					if (e.keyCode === 40) { //move down 
						oracleCS.regionTabFocus++;
						// If we're at the end, go to the start
						if (oracleCS.regionTabFocus >= oracleCS.csRegionsMobile.length) {
							oracleCS.regionTabFocus = 0;
						}

						oracleCS.csRegionsMobile[oracleCS.regionTabFocus].focus();
						//document.activeElement.click();
		
						// Move up
					} if (e.keyCode === 38) {
						oracleCS.regionTabFocus--;
						// If we're at the start, move to the end
						if (oracleCS.regionTabFocus < 0) {
							oracleCS.regionTabFocus = oracleCS.csRegionsMobile.length - 1;
						}
						oracleCS.csRegionsMobile[oracleCS.regionTabFocus].focus();
						//document.activeElement.click();
					}

					//if right key is pressed, switch focus to country group
					if (e.keyCode === 39) {
						setupMobileCountryKeyboardListeners(oracleCS.csCountriesMobile);
						oracleCS.csCountriesMobile[0].focus();
						oracleCS.countryTabFocus = 0;
					}			
								
				});	
			}	
		});

		//Close modal via ESC
		document.querySelector('.u10modal')?.addEventListener('keydown', e => {
			if (e.keyCode === 27) {
				document.querySelector('.u10.u10v6 #u10cmenu')?.classList.remove('u10opened');
				document.querySelector('.closeModal')?.click();
				document.querySelector('.u10ticon').focus();
				oracleCS.isOpen = false;
				document.querySelector('.u10ticon')?.setAttribute('aria-expanded','false');
				oracleCS.keyboardEventSet.mobileRegions = [];
				oracleCS.keyboardEventSet.mobileCountries = [];
			}						
		});	
	}

	/**
	 * addArialLabeledByTag() - Adds an id to the footer headings in case it's missing
	 */
	function addArialLabeledByTag() {
		document.querySelectorAll('.u10w3').forEach(function (u10w3) {
			let val = u10w3.querySelector('.u10ttl').textContent.replace(/[^a-zA-Z]+/g, "").toLowerCase();
			// add id if not present in element
			if(!u10w3.querySelector('.u10ttl').getAttribute('id')) {
				u10w3.querySelector('.u10ttl').id = val;
			}
			u10w3.setAttribute('aria-labelledby', val);
			u10w3.querySelector('ul').setAttribute('aria-labelledby', val);
			// add aria-labelledby if not present in element
			u10w3.querySelector('.u10btn').setAttribute('aria-labelledby', val);

			u10w3.querySelectorAll('a').forEach((link) => {
				const lbl = link.textContent.replace(/[^a-zA-Z]+/g, "-").toLowerCase();
				if (lbl.length) {
					link.setAttribute('data-lbl',`${val}:${lbl}`);
				}
			})
		});
	}

	const closeCountrySelector = () => {
		const countrySelector = document.getElementById("u10cmenu");
		oracleCS.isOpen = false;
		// oracleCS.keyboardEventSet.mobileRegions = [];
		// oracleCS.keyboardEventSet.mobileCountries = [];		
		// oracleCS.keyboardEventSet.desktopCountries = false;
		// oracleCS.keyboardEventSet.desktopRegions = false;
		document.querySelector('.u10.u10v6 #u10cmenu')?.classList.remove('u10opened');	
		document.querySelector('.u10ticon')?.setAttribute('aria-expanded','false');
		document.querySelector('.u10modal')?.remove();
		countrySelector?.classList.remove('u10opened');
		document.body.classList.remove("noScroll");
		const allElementsExceptModal = document.querySelectorAll('body >*:not(.u10modal)');
		allElementsExceptModal.forEach(el => el.removeAttribute('aria-hidden'));	
	}

	/**
	 * closeDesktopCountrySelector(e) - Sets up an event listener on the entire window in the capture phase, as the country selector (desktop version) needs to close if a click is detected outside of it. 
	 * When the country selector is closed, the event listener gets removed from the page to improve performance 
	 * @param  {[event]} e mouse or click event
	 */
	const closeDesktopCountrySelector = (e) => {
		const countrySelector = document.getElementById("u10cmenu");
		if (window.innerWidth > 770 && countrySelector.classList.contains('u10opened') && !e.target.classList.contains('u10clink') || e.target.classList.contains('u10cmenu-l1')) {
			e.preventDefault();
			e.stopImmediatePropagation();
			countrySelector?.classList.remove('u10opened');
			window.removeEventListener('mouseup', closeDesktopCountrySelector, true);
			window.removeEventListener('touchstart', closeDesktopCountrySelector, true);
			oracleCS.keyboardEventSet.mobileRegions = [];
			oracleCS.keyboardEventSet.mobileCountries = [];			
			oracleCS.isOpen = false;	
			document.querySelector('.u10ticon')?.setAttribute('aria-expanded','false');
		}
	};



	jQuery(document).on('mouseup touchstart', function (e) {
		if (jQuery(window).width() > 770) {
			if (jQuery(e.target).closest(".u10.u10v6 #u10cmenu").length === 0) {
				jQuery('body').addClass('u10hide');
				$('.u10').find('.u10ticon').attr('aria-expanded',false);
				oracleCS.isOpen = false;
			}
		}
	})
};

//We wrap up the entire component in a new function and then register it in the OCM framework if we're in OCM so it can be triggered
var isOCM = document.querySelector('.scs-slot');
if (isOCM){
	OCOM.register(function u10($) {
		u10Wrapper();
	});
}
else {
	u10Wrapper();
}

/*! U24 - NEW ACS */
jQuery(document).ready(function($) {
    if(document.querySelector("#ac-flag") !== null){
        document.querySelector(".u10-cr") && document.querySelector(".u10-cr").remove();
        const getCountryCodeFromURL = document.location.href.split("?pagecountry=")[1] !== undefined ? window.location.href.split("?pagecountry=")[1].split("&")[0] : document.location.href.split("&pagecountry=")[1]//document.location.href.split("?acs=")[1] !== undefined ? window.location.href.split("?acs=")[1].split("-")[0].split("&")[0] : document.location.href.split("&acs=")[1]
        // console.log("Country code from URL: ", getCountryCodeFromURL)
        document.querySelector('meta[name="siteid"]').content = `${getCountryCodeFromURL ? getCountryCodeFromURL : 'us'}`
        const setPageLang = window.location.href.split("&pagelang=")[1] !== undefined ? window.location.href.split("&pagelang=")[1].match(/(.*?)&/)[1].split("-")[0] : 'en';//window.location.href.split("&lang=")[1] !== undefined ? window.location.href.split("&lang")[1].match(/=(.*?)&/)[1] : 'en';
        document.documentElement.setAttribute("lang", `${setPageLang}` ? `${setPageLang}` : 'en');
        document.querySelector('meta[name="Language"]').content = `${setPageLang ? setPageLang: 'en'}`
        const pageSiteId = document.querySelector('meta[name="siteid"]').content;
        const pageLang = document.querySelector('meta[name="Language"]').content;
        const browserLang = 
            ["en-gb", "en-nz", "en-us", "en", "en-za", "en-ca","en-in","en-au","en-ie","en-gb-oxendict"].includes(navigator.language.toLowerCase()) ? "en" :
            ["-lx","es-mx","es-cl","es-cr"].includes(navigator.language.toLowerCase()) ? "es" :
            navigator.language.toLowerCase().includes("fr-") ? "fr" : 
            navigator.language.toLowerCase();
        const ACS_COOKIE = document.cookie.includes("ORA_COUNTRYSELECT");
        const getAltPages = document.querySelector('meta[name="altpages"]').content;
        const fakeGeo = document.location.href.split("&usercountry=")[1];
        // console.log("fake geo: ",fakeGeo)
        
        //If page is in altpages, make link point to same page, else point to homepage
        function getCorrectModalURL (param){
            if(getAltPages.includes(param)){
                // console.log("make link point to same page as current")
                return `https://www.oracle.com/${param === 'us' ? '' : `${param}/`}${window.location.href.match(/^((?:[^\/]*\/){4}[^\/]*)/)[1].split("/")[4]}`
            } else {
                // console.log("make link point to homepage")
                return param === 'us' ? `https://www.oracle.com/` : `https://www.oracle.com/${param}/`
            }
        }
        const useCountry = (type) => {
            return {
                'ae-ar':'ae',
                'be-nl':'nl',
                'be-fr':'be',
                'bh-ar':'bh',
                'co':'co',
                'cr':'cr',
                'ja':'jp',
                'el':'gr',
                'es-lx':'es',
                'es-es':'es',
                'fr-ca':'ca',
                'hn':'hn',
                'lb-ar':'lb',
                'middleeast-ar':'ar',
                'iq-ar':'ar',
                'jo-ar':'ar',
                'he':'il',
                'ko':'kr',
                'kw-ar':'kw',
                'uk':'gb',
                'ca-fr':'ca',
                'ca-en':'ca',
                'eg-ar':'eg',
                'qa-ar':'qa',
                'zh-tw':'tw',
                'sa-ar':'sa',
                'ye-ar':'ye',
                'zh':'tw',
                'om-ar':'om'
            }[type] || type
        }
        // console.log("country code for flag", useCountry(pageSiteId))
        const useLang = (type) => {
            return {
                'ae-ar':'ar',
                'africa-fr':'fr',
                'at':'de',
                'be-fr':'fr',
                'be-nl':'nl',
                'bo':'es-lx',
                'bh-ar':'ar',
                'br':'pt-br',
                'fr-ca':'fr',
                'fr-ch':'fr',
                'fr-CA':'fr',
                'ca-fr':'fr',
                'ch-de':'de',
                'ch-fr':'fr',
                'cis':'ru',
                'cl':'es-es',
                'cn':'zh',
                'co':'es-es',
                'cr':'es-es',
                'cs':'cz',
                'dk':'sv',
                'dz':'fr',
                'ec':'es-es',
                'eg-ar':'ar',
                'el':'gr',
                'en-gb':'en',
                'en-ca':'en',
                'es':'es-es',
                'es-mx':'es-es',
                'es-419':'es-lx',
                'es-hn':'es-lx',
                'gt':'es-es',
                'hn':'es-es',
                'en-ie':'en',
                'il':'he',
                'iq-ar':'ar',
                'jo-ar':'ar',
                'jp':'ja',
                'lb-ar':'ar',
                'kr':'ko',
                'kw-ar':'ar',
                'lad':'es-es',
                'ma':'fr',
                'md':'ru',
                'middleeast-ar':'ar',
                'mx':'es-es',
                'ni':'es-es',
                'en-au':'en',
                'en-nz':'en',
                'en-za':'en',
                'om':'ar',
                'om-ar':'ar',
                'pa':'es-es',
                'pe':'es-es',
                'pr':'es-es',
                'pt-br':'pt-br',
                'py':'es-es',
                'qa-ar':'ar',
                'sa-ar':'ar',
                'se':'sv',
                'sn':'fr',
                'uk':'uk',
                'uy':'es-es',
                'tw':'zh-tw',
                've':'es-lx',
                'ye-ar':'ar',
                '':'en'
            }[type] || type
        }
        const englishLangCountry = ['ae', 'africa', 'asiasouth', 'be', 'be-nl', 'bz', 'ca-en', 'ca', 'cr', 'ec', 'ee', 'emea', 'gh', 'hk', 'id', 'in', 'ke', 'kh', 'lu', 'me', 'middleeast', 'my', 'ph', 'pk', 'sg', 'ye']
        // console.log("page site id is english: ", englishLangCountry.includes(pageSiteId))
        const ACS_WRAPPER = `
        <div class="acs-wrapper" id="acs-wrapper" role="dialog" aria-labelledby="continue-message stay-message">
            <button class="icn-close acs-close" aria-label="close country selector"><span class="sr-only">Close</span></button>
            <div class="acs-details-wrapper">
                <!--//Browser language-->
                <p class="continue-message" id="continue-message"></p>
                <!--//Page language-->
                <p class="stay-message" id="stay-message"></p>
                <div class="acs-buttons">
                    <div class="obttns">
                        <div>
                            <a href="placeholder.html" class="page-button"></a>
                        </div>
                        <div class="obttn1">
                            <a href="" class="browser-button"></a>
                        </div>
                    </div>
                </div>
                <a href="#localcontent" rel="lightbox" role="button" class="choose-language"></a>
            </div>
        </div>`
        //Append ACS TO #ac-flag
        if(!ACS_COOKIE === true){
            const acFlag = document.querySelector("#ac-flag");
            acFlag.innerHTML += ACS_WRAPPER;
            document.querySelector(".flag-focus").setAttribute("data-attr", "countrieslist");
            const acsWrapper = acFlag.querySelector(".acs-wrapper");
            //After 2 seconds, add "show" class to acs-wrapper for load animation
            setTimeout(() => {
                acsWrapper.classList.add("show");
            },2000)
        }
    
        //Add .close-acs class to ACS which sets the ACS to display:none;
        function closeACS(){
            document.querySelector(".acs-wrapper").classList.add('close-acs');
        }
        //If user clicks close ACS button, close ACS and set ORA_COUNTRYSELECT cookie
        document.querySelector(".acs-close") && document.querySelector(".acs-close").addEventListener('click', function(){
            closeACS();
            var expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (12 * 60 * 60 * 1000)); // add 12 hours to the current time
            document.cookie = "ORA_COUNTRYSELECT=true; expires=" + expirationDate.toUTCString();
        });
        function fetchCountryCode(regions) {
            let getTranslationData;
            let getUserLocation;
            //Get translations data if ACS_COOKIE hasn't been set
            if(!ACS_COOKIE === true){

                let vinfo = (document.location.href.indexOf('www-sites') > -1 || document.location.href.indexOf('developer.oracle.com') > -1) ? 'https://www.oracle.com/visitorinfo/' : '/visitorinfo/';

                fetch('/assets/json/acs-translation-data.json')
                .then(response => response.json())
                .then(data => {getTranslationData = data.languages; processTranslation()})
                .catch(error => console.error(error));
                
                // if(sessionStorage.getItem("country_code") === null){
                    fetch(vinfo)
                    .then(response => response.json())
                    .then(data => {
                        getUserLocation = data.country_code.toLowerCase(); processTranslation(getUserLocation);
                        // console.log("is page country same as user country", pageSiteId, getUserLocation ? getUserLocation.toLowerCase() : getUserLocation)
                        //If ACS_COOKIE exists or getUserLocation is same as pageSiteId or fakeGeo is same as pageSiteId, ensure ACS doesn't load
                        // console.log(getUserLocation.includes("-") ? getUserLocation.split("-")[1] : getUserLocation === pageSiteId || fakeGeo.includes("-") ? fakeGeo.split("-")[0] : fakeGeo === pageSiteId)
                        // console.log("SHOULD CLOSE IF PAGE AND USER SAME", fakeGeo === getCountryCodeFromURL ? `${fakeGeo}, ${getCountryCodeFromURL}: should close` : "should stay open")
                        if(ACS_COOKIE === true || fakeGeo === getUserLocation || fakeGeo === getCountryCodeFromURL || getCountryCodeFromURL === getUserLocation /*|| getUserLocation.includes("-") ? getUserLocation.split("-")[1] : getUserLocation === pageSiteId || fakeGeo.includes("-") ? fakeGeo.split("-")[0] : fakeGeo === pageSiteId*/){
                            closeACS();
                        }
                    })
                    .catch(error => console.error(error));
                // }
            }
 
            fetch('/assets/json/acs-locale-map.json')
            .then(response => response.json())
            .then(data => {localeMapData = data; processData(); countryNameForFlag = data; setFlag(); localeMapData = data; getCountryNameFromGeo = data; processTranslation();})
            .catch(error => console.error(error));
            function processData() {
                let mobileList = localeMapData.map(c => c)
                for (let i = 0; i < regions.length; i++) {
                let region = regions[i];
                let regionName = region[0];
                let countries = region[2];
                let countriesList = document.createElement('ul');
                for (let j = 0; j < countries.length; j++) {
                    let country = localeMapData.find(c => c.siteid === `${countries[j]}`);
                    if (country) {
                    let countryName = country.countryname;
                    let countryItem = document.createElement('li');
                    countryItem.innerHTML = `<a href="${getCorrectModalURL(country.siteid)}">${country.countrycode === "US" ? "United States" : countryName} ${country.language === 'fr-CA' ? ' - Français' : country.language === 'en-CA' ? ' - English' : ""}</a>`;
                    countriesList.setAttribute("aria-labelledby", regionName);
                    countriesList.appendChild(countryItem).setAttribute("lang", `${country.language.includes("-") ? country.language.split("-")[0] : country.language}-${country.countrycode}`);
                    } 
                }
                    if(window.innerWidth > 450){
                        document.querySelector('.countries-list').innerHTML += `<h4 id=${regionName}>${regionName}</h4>`;
                        document.querySelector('.countries-list').appendChild(countriesList);
                    }
                }
                if(window.innerWidth <= 450){
                    const groupedCountries = Object.values(mobileList.reduce((acc, curr) => {
                        const key = curr.countrycode;
                        if (!acc[key]) {
                          acc[key] = [];
                        }
                        acc[key].push(curr);
                        return acc;
                      }, {})).flat().filter(c => c.countryname.length > 0);
                
                    let countriesList = document.createElement('ul');
                    for(let country of groupedCountries.sort((a, b) => a.englishcountryname.localeCompare(b.englishcountryname))){
                        const {countryname, siteid} = country;
                        let countryItem = document.createElement('li');
                        countryItem.innerHTML = `<a href="${getCorrectModalURL(siteid)}">${countryname} ${country.language === 'fr-CA' ? ' - Français' : country.language === 'en-CA' ? ' - English' : ""}</a>`;
                        countriesList.appendChild(countryItem).setAttribute("lang", `${country.language.includes("-") ? country.language.split("-")[0] : country.language}-${country.countrycode}`);
                        document.querySelector('.countries-list').appendChild(countriesList)
                    }
                } 
            }
            let countryNameForFlag;
            function setFlag(){
                const countryNameFromCode = countryNameForFlag && countryNameForFlag.map(c => c).filter(c => c.siteid.toLowerCase() === pageSiteId)[0].englishcountryname//getCountryCodeFromURL !== undefined && countryName && countryName.find(data => data.siteid === getCountryCodeFromURL).englishcountryname; 
                //If siteid is in this list, no flag is available so keep default globe image in place
                const noFlagCountries = ["africa", "africa-fr", "apac", "cl", "asiasouth", "emea", "lad", "middleeast", "middleeast-ar", "cis"];
                if(!noFlagCountries.includes(pageSiteId) && !noFlagCountries.includes(useCountry(getCountryCodeFromURL))){
                    document.querySelector(".flag-image").setAttribute("data-attr", "countrieslist");
                    document.querySelector(".flag-image").setAttribute("src",`https://static.oracle.com/cdn/fnd/gallery/2210.2.0/images/flg-${getCountryCodeFromURL ? useCountry(getCountryCodeFromURL).split("-")[0] : useCountry(pageSiteId).split("-")[0] ? useCountry(pageSiteId).split("-")[0] : 'us'}.svg`);
                    document.querySelector(".flag-image").setAttribute("alt",`${countryNameFromCode ? countryNameFromCode : 'united states'} selected`);
                    document.querySelector(".default-globe") && document.querySelector(".default-globe").remove();
                }
            } 
            setFlag();
            function primaryCTALink(param) {
                const arabCountries = ['middleeast', 'bh', 'eg', 'iq', 'jo', 'kw', 'lb', 'om', 'qa', 'sa', 'ae', 'ye'];
                if (arabCountries.includes(param) && browserLang === 'ar') {
                    return `https://www.oracle.com/${param}-ar`;
                  } else if(arabCountries.includes(param) && browserLang !== 'ar'){
                    return `https://www.oracle.com/${param}`;
                  } else if (param === "ch" && browserLang === 'fr') {
                    return `https://www.oracle.com/ch-fr`;
                  } else if (param === "ch" && browserLang === 'de') {
                    return `https://www.oracle.com/ch-de`;
                  } else if (param === "il" && browserLang === 'he') {
                    return `https://www.oracle.com/il`;
                  } else if (param === "il" && browserLang !== "he") {
                    return `https://www.oracle.com/il-en`;
                  } else if (param === "ca" && browserLang === "fr"){
                    return `https://www.oracle.com/ca-fr`;
                  } else if (param === "ca" && browserLang === "fr-ca"){
                    return `https://www.oracle.com/ca-fr`;
                  } else if (param === "ca" && browserLang !== "fr"){
                    return `https://www.oracle.com/ca-en`;
                  } else if (param === "gb" && browserLang !== "en-GB"){
                    return `https://www.oracle.com/uk`;
                  } else {
                    return `https://www.oracle.com/${param === 'us' ? '' : param}`;
                  }
            }
            let getCountryNameFromGeo;
            function processTranslation(){
                if(!ACS_COOKIE === true){
                    const nonLatinCountryName = fakeGeo ? getCountryNameFromGeo && getCountryNameFromGeo.filter(c => c.countrycode.toLowerCase() === fakeGeo && c.language !== 'en' && c.language === browserLang).map(c => c.countryname) : '';
                    // console.log("NON LATIN COUNTRY NAME: ",nonLatinCountryName.length > 0 ? nonLatinCountryName : '')
                    // console.log(fakeGeo)
                    const countryNameFromGeo = fakeGeo !== undefined ? 
                    getCountryNameFromGeo && getCountryNameFromGeo.filter(c => c.siteid.toLowerCase() === fakeGeo)[0]?.countryname :
                    getUserLocation && getCountryNameFromGeo && getCountryNameFromGeo.filter(c => c.siteid.toLowerCase() === getUserLocation)[0]?.countryname;
                    // console.log(countryNameFromGeo)
                    const englishCountryNameFromGeo = fakeGeo !== undefined ? 
                    getCountryNameFromGeo && getCountryNameFromGeo.filter(c => c.siteid.toLowerCase() === fakeGeo)[0]?.englishcountryname : 
                    getUserLocation && getCountryNameFromGeo && getCountryNameFromGeo.filter(c => c.siteid.toLowerCase() === getUserLocation)[0]?.englishcountryname;
                    // console.log("GEO COUNTRY", englishCountryNameFromGeo);
                    // console.log("User coming from: ", getUserLocation)
                    const {question} = getTranslationData[`${useLang(browserLang)}`];
                    const pageLanguageValid = getTranslationData[`${useLang(pageLang)}`] ? getTranslationData[`${useLang(pageLang)}`].question : false;
                    
                    //If invalid page language used in query string param to test, close ACS and provide console error message.
                    if(!pageLanguageValid){
                        console.log(`Page language ${pageLang} is invalid.`)
                        closeACS();
                    } else {
                        //adds data-attr to default globe image to trigger function for moving button above modal content for a11y
                        document.querySelector("svg.default-globe rect") && document.querySelector("svg.default-globe rect").setAttribute("data-attr", "countrieslist");
                        //
                        if(pageLang !== browserLang){
                            // console.log("page language ", pageLang, "browser lang ", browserLang.split("-")[0])
                            document.querySelector("#u30tools .acs-wrapper .continue-message").innerText = question;
                            document.querySelector("#u30tools .acs-wrapper .continue-message").setAttribute("lang", `${browserLang && browserLang.split("-")[0]}-${fakeGeo ? fakeGeo.split("-")[0] : getUserLocation && getUserLocation.split("-")[0]}`);
                            document.querySelector("#u30tools .acs-wrapper .stay-message").innerText = getTranslationData[`${englishLangCountry.includes(useLang(pageLang)) === true ? 'en' : useLang(pageLang)}`].question;
                            document.querySelector("#u30tools .acs-wrapper .stay-message").setAttribute("lang", useLang(pageLang).split("-")[0])
                            document.querySelector("#u30tools .acs-wrapper .page-button").innerHTML = 
                            `<span class="countrynamewrapper">
                                <span class="englishcountryname">
                                    ${getTranslationData[`${englishLangCountry.includes(useLang(browserLang)) === true ? 'en' : useLang(browserLang)}`].visit}
                                    ${englishCountryNameFromGeo}
                                </span>
                                <span class="countryname">
                                    ${getTranslationData[`${englishLangCountry.includes(useLang(pageLang)) === true ? 'en' : useLang(pageLang)}`].visit}
                                    ${countryNameFromGeo === 'United States' ? '' : countryNameFromGeo}
                                </span>
                            </span>
                            `;
                            document.querySelector("#u30tools .acs-wrapper .page-button").setAttribute("href", fakeGeo ? primaryCTALink(fakeGeo) : primaryCTALink(getUserLocation === 'us' ? '' : getUserLocation));
                            document.querySelector("#u30tools .acs-wrapper .page-button").setAttribute("lang", `${browserLang.split("-")[0]}-${fakeGeo ? fakeGeo : getUserLocation}`);
                            document.querySelector("#u30tools .acs-wrapper .choose-language").innerText = getTranslationData[`${englishLangCountry.includes(useLang(browserLang)) === true ? 'en' : useLang(browserLang)}`].seepage;
                            document.querySelector("#u30tools .acs-wrapper .choose-language").setAttribute("lang", useLang(browserLang));
                            document.querySelector("#u30tools .acs-wrapper .choose-language").setAttribute("data-attr", "countrieslist");
                            document.querySelector("#u30tools .acs-wrapper .choose-language").addEventListener("click", function (event) { 
                                event.preventDefault();
                                closeACS(event);
                                var expirationDate = new Date();
                                expirationDate.setTime(expirationDate.getTime() + (12 * 60 * 60 * 1000)); // add 12 hours to the current time
                                document.cookie = "ORA_COUNTRYSELECT=true; expires=" + expirationDate.toUTCString();
                            });
                        }
                        if(pageLang === browserLang){
                            // console.log("page language ", pageLang, "browser lang ", browserLang)
                            document.querySelector("#u30tools .acs-wrapper .stay-message").innerText = getTranslationData[`${englishLangCountry.includes(useLang(pageLang)) === true ? 'en' : useLang(pageLang)}`].question;
                            document.querySelector("#u30tools .acs-wrapper .choose-language").innerText = getTranslationData[`${englishLangCountry.includes(useLang(browserLang)) === true ? 'en' : useLang(browserLang)}`].seepage;
                            document.querySelector("#u30tools .acs-wrapper .choose-language").setAttribute("lang", useLang(browserLang));
                            document.querySelector("#u30tools .acs-wrapper .choose-language").setAttribute("data-attr", "countrieslist");
                        }
                        document.querySelector("#u30tools .acs-wrapper .page-button").innerHTML = 
                        `<span class="countrynamewrapper">
                            <span class="englishcountryname">
                                ${getTranslationData[`${englishLangCountry.includes(useLang(browserLang)) === true ? 'en' : useLang(browserLang)}`].visit}
                                ${nonLatinCountryName && nonLatinCountryName.length > 0 ? nonLatinCountryName : countryNameFromGeo === 'United States' ? 'United States' : countryNameFromGeo}
                            </span>
                            <span class="countryname">
                                ${getTranslationData[`${englishLangCountry.includes(useLang(pageLang)) === true ? 'en' : useLang(pageLang)}`].visit}
                                ${englishCountryNameFromGeo}
                            </span>
                        </span>
                        `;
                        document.querySelector("#u30tools .acs-wrapper .page-button").setAttribute("href", fakeGeo ? primaryCTALink(fakeGeo) : primaryCTALink(getUserLocation === 'us' ? '' : getUserLocation));
                        document.querySelector("#u30tools .acs-wrapper .page-button").setAttribute("lang", `${browserLang.split("-")[0]}-${fakeGeo ? fakeGeo : getUserLocation}`);
                        document.querySelector("#u30tools .acs-wrapper .browser-button").innerText = getTranslationData[`${englishLangCountry.includes(useLang(pageLang)) === true ? 'en' : useLang(pageLang)}`].nothanks;
                        document.querySelector("#u30tools .acs-wrapper .browser-button").setAttribute("lang", useLang(pageLang))
                        document.querySelector("#u30tools .acs-wrapper .browser-button").addEventListener("click", function (event) { 
                            event.preventDefault();
                            closeACS(event);
                            var expirationDate = new Date();
                            expirationDate.setTime(expirationDate.getTime() + (12 * 60 * 60 * 1000)); // add 12 hours to the current time
                            document.cookie = "ORA_COUNTRYSELECT=true; expires=" + expirationDate.toUTCString();
                        });
                        document.querySelector("#u30tools .acs-wrapper .choose-language").addEventListener("click", function (event) { 
                            event.preventDefault();
                            closeACS(event);
                            var expirationDate = new Date();
                            expirationDate.setTime(expirationDate.getTime() + (12 * 60 * 60 * 1000)); // add 12 hours to the current time
                            document.cookie = "ORA_COUNTRYSELECT=true; expires=" + expirationDate.toUTCString();
                        });
                        //Get pixel width of coutryname and englishcountryname and use largest to set width of PrimaryCTA button
                        function setWidth(){
                            let countryNameWidth = document.querySelector(".countryname").offsetWidth;
                            let englishCountryNameWidth = document.querySelector(".englishcountryname").offsetWidth;
                            return (englishCountryNameWidth > countryNameWidth) ? `${englishCountryNameWidth}` : `${countryNameWidth}`;
                        }
                        document.querySelector(".countrynamewrapper").style.minWidth=setWidth() + "px"

                        //Set aria-hidden to non-brower language message to avoid double VO readout
                        document.querySelector(".countryname").setAttribute("aria-hidden", true)

                        //If pagelang and browserlang are the same, remove continue message
                        document.querySelector(".continue-message") && document.querySelector(".continue-message").innerHTML === '' && document.querySelector(".continue-message").remove();
                    }
                }
            }
    
            const debounce = (func) => {
                var timer;
                return function (event) {
                if (timer) clearTimeout(timer);
                    timer = setTimeout(func, 150, event);
                };
            }
            window.addEventListener('resize', debounce(onResize));
            function onResize(){
                let portrait = window.matchMedia("(orientation: portrait)");//check for orientation change to portrait and prevent modal from closing on mobile when going from landscape to portrait
                if(window.innerWidth <= 450 && !portrait){
                    document.querySelector(".w11close") && document.querySelector(".w11close").click();
                }
            }
        }
        var regions = [
            ["americas","Americas",    ["ar","bz","bo","br","ca-en","ca-fr","cl","co","cr","ec","gt","hn","lad","mx","ni","pa","py","pe","pr","us","uy","ve"]],
            ["asia","Asia",            ["apac","asiasouth","au","bd","bt","bn","kh","cn","hk","in","id","jp","kr","la","my","mv","mn","np","nz","pk","ph","sg","lk","tw","th","vn"]],
            ["europe","Europe",        ["emea","at","be","be-fr","be-nl","ba","bg","hr","cis","cy","cz","dk","ee","fi","fr","de","gr","hu","ie","it","lv","lt","lu","mt","md","me","nl","no","pl","pt","ro","rs","sk","si","es","se","ch-fr","ch-de","tr","ua","uk"]],
            ["middleeast","Middle East and Africa",["africa","dz","bh-ar","eg","eg-ar","gh","il-en","il","iq","iq-ar","jo","jo-ar","ke","kw","kw-ar","lb","lb-ar","middleeast","middleeast-ar","ma","ng","om","om-ar","qa","qa-ar","sa","sa-ar","sn","za","ae","ae-ar","ye","ye-ar"]]
        ];
        fetchCountryCode(regions);
    } else {
 
    // set page location
    var docloco = document.location.href+'&';
 
    // set test mode
    var acstest = (docloco.indexOf('activecountry&') > -1) ? true : false;
 
    // kill added &
    docloco = docloco.replace(/\&$/,'');
 
    // helper to exit, log exit, and ping navtrack
    function exitACS(msg,nvtrk){
        if(acstest){console.log('ACS:'+msg)}
        if(nvtrk){
            if(typeof s_setAccount !== 'undefined'){
                navTrack(s_setAccount()[1],s_setAccount()[2],'active-country-select',msg);
            }
        }
        return false;
    }
 
    // set trustchk
    var trustchk;
    try {
        trustchk = oracle.truste.api.getConsentDecision();
        // first check if 0 or more, will double check against EU countries after we get the user's country id
        trustchk = (trustchk.consentDecision > -1) ? trustchk.consentDecision : -1;
    }catch(err){
        trustchk = -1;
    }
 
    // EXIT - if trustchk fails
    if(trustchk == -1){
        exitACS('truste-failed',true);
    }else if(docloco.indexOf('developer.oracle') > -1){
        exitACS('developer-oracle',false);
    }else{
        // if(acstest){  // if there's a big problem with ACS, uncomment this IF statement to
            activeCountrySelect();
        //}
    }
 
    // code in function so we can return to bail at any point
    function activeCountrySelect(){
 
        // EXIT - if cookie exist
        var cc = readCookie('ORA_COUNTRYSELECT');
        if (cc !== "" && cc !== null){
            return exitACS('cookie-exist');
        }
 
        var
        // acs vars
        vi_countryid,
        vi_siteid,
        // get page metadata
        pgsiteid    = ($('meta[name="siteid"]').attr('content')) ? $('meta[name="siteid"]').attr('content') : false,
        pgcountryid    = ($('meta[name="countryid"]').attr('content')) ? $('meta[name="countryid"]').attr('content').toLowerCase() : false,
        pgcountry    = ($('meta[name="country"]').attr('content')) ? $('meta[name="country"]').attr('content') : false,
        pglang        = ($('meta[name="Language"]').attr('content')) ? $('meta[name="Language"]').attr('content') : false,
        html_lang        = ($('html').attr("lang")) ? $('html').attr("lang").toLowerCase() : false,
        addUS         = ($('link[hreflang="en-US"]')[0]) ? ",us" : "",
        altpages    = ($('meta[name="altpages"]').attr('content')) ? ","+$('meta[name="altpages"]').attr('content')+addUS+"," : "",
        userLangs = navigator.languages;
 
        // EXIT - if page meta data is undefined
        if(!pgsiteid || !pgcountryid || !pgcountry || !pglang){
            return exitACS('no-metadata');
        }
 
        //Temp fix for Spanish speaking countries other than Spain
        if (pglang == 'es' && pgsiteid != 'es') {
            pgsiteid = 'es-lx';
        }
 
        //Temp fix for United Kingdom, it was conflicting with Ukraine
        if (pglang == 'en' && pgsiteid == 'uk') {
            pgsiteid = 'en';
        }
 
        // hard coded list of all EU sites, or sites that require truste acceptance before setting cookies
        var trusteblacklist = ",at,be,bg,hr,cy,cz,dk,ee,fi,fr,de,gr,hu,ie,it,lt,lv,lu,mt,nl,pl,pt,ro,sk,si,se,se,uk,co,kr,gb,";
 
        // hard coded list of all siteid's to allow stripping siteid from current page URL
        var allsiteid = "middleeast-ar,bh-ar,lu,cis,cz,dk,fi,de,ch-de,ae,ke,apac,emea,in,jo,kw,lb,om,qa,it,dz,gh,ma,sn,ar,bz,md,ua,br,ca-en,ca-fr,hk,kh,id,my,pk,ph,sg,kr,nl,no,cn,pl,pt,sa,ye,africa,middleeast,asiasouth,us,np,bg,be,hr,mn,me,ee,py,pe,pr,uy,ve,nz,tw,rs,ch-fr,si,bd,at,ro,sk,za,es,se,tr,bt,bn,la,mv,ng,ec,gt,eg-ar,iq-ar,jo-ar,kw-ar,lb-ar,om-ar,qa-ar,sa-ar,ae-ar,ye-ar,il-en,hn,mx,ni,pa,ie,lt,lv,mt,gr,fr,hu,il,jp,lad,be-fr,be-nl,eg,iq,ba,uk,cy,bo,cl,co,cr,lk,th,vn,au";
 
        // overwrite altpages if on homepage or contact page with all site id's
        //if ($('.rh02')[0] || docloco.indexOf("/corporate/contact/index") > -1) {
        //if ($('.rh02')[0] || $('link[rel="canonical"]').attr('href') === "https://www.oracle.com/corporate/contact/") {
 
        var canonical = '';
        if ($('link[rel="canonical"]')[0]) {
            var canonical = $('link[rel="canonical"]').attr('href');
        }
 
        if ($('.rh02')[0] || canonical.indexOf("/corporate/contact/") > -1) {
            altpages = allsiteid.replace(/,emea/,'');
            altpages = ","+altpages+",";
        }
 
        // EXIT - if no altpages
        if(altpages == ""){
            return exitACS('no-altpages');
        }
 
        // get page URL, strip out domain and siteid from URL
        var pgURL = (function() {
            var loco = docloco.split('://')[1].replace(/^[^\/]+/,'');
            jQuery.each(allsiteid.split(','), function(){
                if(loco.indexOf('/'+this+'/') == 0){
                    loco = loco.replace(new RegExp('^\/'+this+'\/','g'),'/');
                    return false;
                }
            });
            return loco;
        })();
 
        // get visitorinfo country id or set to test id from activecountryid easter egg arg
        if(docloco.indexOf('activecountryid=') > 0) {
            vi_countryid = docloco.split('activecountryid=')[1].split('&')[0];
        }else{
            function getViCountryId(url) {
                var vjson = $.ajax({
                    type: 'GET',
                    url: url,
                    dataType: 'json',
                    global: false,
                    async:false,
                    success: function(data) {
                        return data;
                    },
                    error: function(){
                        return false;
                    }
                }).responseText;
 
                 // if not false or if it doesn't contains html continue
                if(!vjson || vjson.indexOf('<') < 0){
                    return JSON.parse(vjson);
                }else{
                    return false;
                }
            }
 
            var vinfo_url = (docloco.indexOf('www-sites') > -1 || docloco.indexOf('developer.oracle.com') > -1) ? 'https://www.oracle.com/visitorinfo/' : '/visitorinfo/';
            var visitorinfo = getViCountryId(vinfo_url);
 
            // EXIT - if visitorinfo countrid is blacklisted from implied truste
            if(visitorinfo["country_code"] && trustchk == 0){
                 if (trusteblacklist.indexOf(','+visitorinfo["country_code"].toLowerCase()+',') > -1){
                    return exitACS('truste-implied-failed');
                }
            }
 
            // EXIT - if no visitorinfo + send navtrack
            if(!visitorinfo["country_code"]){
                // SET COOKIE 1HR
                // createCookie('ORA_COUNTRYSELECT', 'true', .04);
                return exitACS('visitorinfo-failed',true);
            }else{
                vi_countryid = visitorinfo["country_code"].toLowerCase();
            }
        }
 
        // EXIT - if vi_countryid == pgcountryid (user is local)
        if(vi_countryid == pgcountryid){
            // SET COOKIE 1HR
            // createCookie('ORA_COUNTRYSELECT', 'true', .04);
            return exitACS('user-is-local');
        }
 
        // get pdit-local-map
        var pditlocal = false; // flag for exiting later if needed
        var cdata = [];
        var pdata;
 
		var pditjson = "https://www.oracle.com/pdit-locale-map.json";

		if (docloco.indexOf('/www-sites-stage') > -1 || docloco.indexOf('/www-stage') > -1){
			pditjson = "https://www-stage.oracle.com/pdit-locale-map.json";
		}else if (docloco.indexOf('localhost') > -1 || docloco.indexOf('/webstandards') > -1){
			pditjson = "/pdit-locale-map.json";
		}
 
        function getpditlocal(){
            var getpdit = $.ajax({
                url: pditjson,
                method: 'GET',
                dataType: 'json',
                async:false,
                crossDomain: true,
                cache: true,
                contentType: "text/plain; charset=UTF-8",
                success: function(data) {
                    pdata = data;
                    // loop pdit locale, set to array key'd with site id
                    $.each(data, function(i, ctnry) {
                        cdata[ctnry.siteid] = [ctnry.countrycode,ctnry.countryname,ctnry.englishcountryname];
                        // get visitors home site's siteid
                        if(ctnry.countrycode.toLowerCase() == vi_countryid){
                            vi_siteid = ctnry.siteid;
                        }
                    });
                    // us/default fix
                    vi_siteid = (vi_siteid == 'default') ? 'us' : vi_siteid;
                    if(altpages.indexOf(','+vi_siteid+',') < 0){
                        pditlocal = 'no-localpage-available';
                    }
                }
            }).fail(function(transerr) {
                pditlocal = 'pditlocalemap-failed';
            });
        }
 
        getpditlocal();
 
        // EXIT - if getting pdit-locale-map.json fails or no equivelant page exist
        if(pditlocal){
            if(pditlocal.indexOf('pdit') > -1){
                // SET COOKIE 1HR
                createCookie('ORA_COUNTRYSELECT', 'true', .04);
                return exitACS(pditlocal,true);
            }else{
                return exitACS(pditlocal);
            }
        }
 
        // Get Translated Text
        var transchk = false; // flag for exiting later if needed
        var visittrans = "";
        var seepagetrans = "";
        var nothankstrans = "";
        var questiontrans = "";
        var countryttrans = "";
        // var transurl = (docloco.indexOf('betamode=webstandards') > -1) ? 'https://webstandards.us.oracle.com:89/assets/json/ac-translation-data.json' : '/assets/json/ac-translation-data.json';
       //   var transurl = '/assets/json/ac-translation-data.json';
 
        // Build Primary CTA's or CTA Menu
        function translationCheck() {
            $.ajax({
				url: '/assets/json/ac-translation-data.json',
//              url: transurl,
                type: 'GET',
                dataType: 'json',
                crossDomain: true,
                cache: true,
                contentType: "text/plain; charset=UTF-8",
                async:false
            })
            .done(function(tdata) {
                var dataResults = tdata;
                var countriesArray = [];
 
                $.each(dataResults.languages,function(i,v){
                    var key = Object.keys(v);
                    countriesArray.push(key[0]);
                });
 
                //Check Browser Language
                var setCountry = '';
                if (userLangs) {
                    for (var i = 0; i < userLangs.length; i++) {
                        listCountry = userLangs[i];
                        for (var j = 0; j < countriesArray.length; j++) {
                            if (listCountry == countriesArray[j] && !setCountry) {
                                setCountry = listCountry;
                                visittrans = dataResults.languages[j][setCountry][0].visit;
                                seepagetrans = dataResults.languages[j][setCountry][0].seepage;
                                nothankstrans = dataResults.languages[j][setCountry][0].nothanks;
                                questiontrans = dataResults.languages[j][setCountry][0].question;
                                countryttrans = dataResults.languages[j][setCountry][0].country;
                            }
                        }
                    }
                }
 
                //Check HTML Language
                if (visittrans == ""){
                    $.each(dataResults.languages,function(i,v){
                        $.each(v,function(plang,v){
                            if (visittrans == ""){
                                if (html_lang == plang){
                                    //html_lang match
                                    visittrans = v[0].visit;
                                    seepagetrans = v[0].seepage;
                                    nothankstrans = v[0].nothanks;
                                    questiontrans = v[0].question;
                                    countryttrans = v[0].country;
                                }
                            }
                        });
                    });
                }
 
                //Check Meta Language
                if (visittrans == ""){
                    $.each(dataResults.languages,function(i,v){
                        $.each(v,function(plang,v){
                            if (pglang == plang || pgsiteid == plang){
                                //pglang or pgsiteid match
                                visittrans = v[0].visit;
                                seepagetrans = v[0].seepage;
                                nothankstrans = v[0].nothanks;
                                questiontrans = v[0].question;
                                countryttrans = v[0].country;
                            }
                        });
                    });
                }
 
                //English Fallback
                if (visittrans == ""){
                    $.each(dataResults.languages,function(i,v){
                        $.each(v,function(plang,v){
                            if (plang == "en"){
                                //englishbackup
                                visittrans = v[0].visit;
                                seepagetrans = v[0].seepage;
                                nothankstrans = v[0].nothanks;
                                questiontrans = v[0].question;
                                countryttrans = v[0].country;
                            }
                        });
                    });
                }
            })
            .fail(function() {
                transchk = 'translation-json-failed';
            });
        }
 
        translationCheck();
 
        // EXIT - if getting ac-translation-data.json fails
        if(transchk){
            return exitACS(transchk,true);
        }
 
        // EXIT - if no translation is set
        if(visittrans == ""){
            return exitACS('no-translation-found');
        }
 
        var btclss = '';
        var u24variation = '';
        $('body').addClass('u24under');
        // inject base html
 
        //Check that the u28.js has moved this markup
        if($('#u28')[0]){
            $('#u28').after($('<div/>').addClass('u24 u24v0 darktheme').attr("data-trackas", "active-country-select"));
            u24variation = 'u28';
        }
        else if($('#u30')[0]){
            $('#u30').after($('<div/>').addClass('u24 u24v0 darktheme').attr("data-trackas", "active-country-select"));
            u24variation = 'u30';
        }
        else if($('.u02nav')[0]){
            $('.u02nav').after($('<div/>').addClass('u24 u24v0 darktheme').attr("data-trackas", "active-country-select"));
            u24variation = 'u02';
        } else {
            return
        }
 
        if($('.f20')[0]){
            $('.u24').prepend($('<div/>').addClass('u24w1 cwidth rw-globe'));
        }else{
            btclss = 'icn-none';
            $('.u24').prepend($('<div/>').addClass('u24w1 cwidth icn-globe'));
        }
 
        $('.u24w1').prepend($('<div/>').addClass('u24w2'));
        $('.u24w2').prepend($('<div/>').addClass('u24w4wrap'));
        $('.u24w4wrap').prepend('<div class="u24w5"></div>')
        $('.u24w4wrap').prepend('<div class="u24w4 icn-cv-down" tabindex="0">'+seepagetrans+'</div>');
        $('.u24w4').prepend('<i></i>');
        $('.u24w2').prepend($('<div/>').addClass('obttns u24stay'));
        if (u24variation == 'u02') {
            $('.u24 .u24stay').prepend($('<div/>').addClass('obttn5 u24nothanks'));
        }else {
            $('.u24 .u24stay').prepend($('<div/>').addClass('obttn1 u24nothanks'));
        }
        $('.u24w1').append('<a href="#" data-lbl="close" class="u24close u24closebtn icn-close"></a>');
        $('.u24w1').append('<a href="#" id="u24closetrigger"></a>');
        $('.u24w5').append('<div class="u24w6"></div>');
        $('.u24w2').prepend($('<strong>'+questiontrans+'</strong>'));
        $('.u24w2 strong').after($('<div/>').addClass('obttns u24visit'));
        if (u24variation == 'u02') {
            $('.u24visit').prepend($('<div/>').addClass('obttn1 u24visitlink'));
        }else {
            $('.u24visit').prepend($('<div/>').addClass('obttn2 u24visitlink'));
        }
        $('.u24 .u24visitlink').prepend('<div class="u24w3"><i></i></div>');
        $('.u24w3').prepend($('<ul/>'));
        $('.u24 .u24nothanks').prepend('<a data-lbl="u24nothanks" href="#close" class="u24close thankstrans '+btclss+'">'+nothankstrans+'</a>');
        $('.u24w6').prepend('<span class="u24w6Title">'+countryttrans+'</span>');
 
        var transNumber = 0;
        $.each(pdata, function(i, v) {
            if (cdata[v.siteid][0].toLowerCase() == vi_countryid && v.siteid != "default"){
                transNumber++;
 
                //Update buttons styles and content if there are country specific translations
                if (transNumber > 1) {
                    $('.u24btnlnk').remove();
                    $('.u24 .u24visit').addClass('u24addlang');
                }
 
                // scrub /us from site id/path
                var burl = (v.siteid == 'us') ? '' : '/'+v.siteid;
                $('.u24 .u24visitlink').prepend($('<a/>').addClass('u24btnlnk icn-none').attr("data-lbl", "suggested-" + v.siteid + "").attr('href', burl + pgURL).text(visittrans +' '+ v.countryname));
 
                if (transNumber > 1) {
                    $('.u24btnlnk').removeClass('icn-none').addClass('icn-cv-down');
                }
 
                //Build Translation Menu
                var languageAssign = v.siteid.substr(v.siteid.indexOf("-") + 1);
                if (languageAssign === "en") {$('.u24w3 ul').prepend('<li><a href="/' + v.siteid + pgURL +'">' + v.countryname + ' - English</a></li>');}
                if (languageAssign === "fr") {$('.u24w3 ul').prepend('<li><a href="/' + v.siteid + pgURL +'">' + v.countryname + ' - Français</a></li>');}
                if (languageAssign === "de") {$('.u24w3 ul').prepend('<li><a href="/' + v.siteid + pgURL +'">' + v.countryname + ' - German</a></li>');}
                if (languageAssign === "nl") {$('.u24w3 ul').prepend('<li><a href="/' + v.siteid + pgURL +'">' + v.countryname + ' - Dutch</a></li>');}
                if (languageAssign === "ar") {
                    $('.u24w3 ul').prepend($('<li><a href="/' + v.siteid + pgURL +'>' + v.countryname + '</a></li>'));
                    $('.u24 .u24visit').removeClass('u24addlang');
                    $('.u24w3').remove();
                }
                if (v.siteid === "middleeast") {$('.u24 .u24visit').removeClass('u24addlang');$('.u24w3').remove();}
                if (v.siteid === "cn") {$('.u24 .u24visit').removeClass('u24addlang');$('.u24w3').remove();}
                return;
            }
        });
 
        // loop regions + build menu of all avialable equivelant pages (secondary suggestions)
        var regions = [
            ["americas","Americas",    ["ar","bz","bo","br","ca-en","ca-fr","cl","co","cr","ec","gt","hn","lad","mx","ni","pa","py","pe","pr","us","uy","ve"]],
            ["asia","Asia",            ["apac","asiasouth","au","bd","bt","bn","kh","cn","hk","in","id","jp","kr","la","my","mv","mn","np","nz","pk","ph","sg","lk","tw","th","vn"]],
            ["europe","Europe",        ["emea","at","be","be-fr","be-nl","ba","bg","hr","cis","cy","cz","dk","ee","fi","fr","de","gr","hu","ie","it","lv","lt","lu","mt","md","me","nl","no","pl","pt","ro","rs","sk","si","es","se","ch-fr","ch-de","tr","ua","uk"]],
            ["middleeast","Middle East and Africa",["africa","dz","bh-ar","eg","eg-ar","gh","il-en","il","iq","iq-ar","jo","jo-ar","ke","kw","kw-ar","lb","lb-ar","middleeast","middleeast-ar","ma","ng","om","om-ar","qa","qa-ar","sa","sa-ar","sn","za","ae","ae-ar","ye","ye-ar"]]
        ];
 
        for (let i = 0; i < regions.length; i++) {
            for (let j = 0; j < regions.length; j++){
            console.log(regions[i][j]);
            }
        }
 
        $.each(regions, function(i, regn) {
            var thisregn = '',
                isvis = 'u24-l2visible',
                iscr = 'u24regioncr';
            $.each(regn[2], function(n, sid) {
                if (altpages.indexOf(","+sid+",") > -1){
                    var cname = ((sid.indexOf('-') > -1)) ? getNameWithLang(sid) : cdata[sid][1];
                    if (!cname && sid === 'us') {
                        thisregn += '<li><a href="'+ pgURL +'">United States</a></li>\n';
                    }else{
                        thisregn += '<li><a href="/' + sid + pgURL +'">' + cname + '</a></li>\n';
                    }
                }
            });
            if (thisregn != ''){
                if($('.u24w6 ul')[0]) {
                    isvis = '';
                    iscr = '';
                }
                $('.u24w6').append('<a href="#" class="u24region '+regn[0]+' '+iscr+'">'+regn[1]+'</a><ul class="'+regn[0]+'-l2 u24-l2 '+isvis+'"><li class="l2Title">'+regn[1]+'</li>'+thisregn+'</ul>');
            }
        });
 
        function getNameWithLang(sid){
            if (sid.split('-')[0] == "ca" && sid.split('-')[1] == "en"){
                lang = " - English";
            }else if (sid.split('-')[0] == "ca" && sid.split('-')[1] == "fr"){
                lang = " - Français";
            }else{
                lang = "";
            }
            return cdata[sid][1] + lang;
        }
 
        // make container the height of tallest content on mobile
        function u24equalHeight(){
            var maxHeight = 0,
                    subnav = $('.u24-l2'),
                    u24w6 = $('.u24w6'),
                    u24mobile = '',
                    ele = document.querySelector('.u24w6'),
                    state = getComputedStyle(ele);
            if (state.overflow === "hidden") {u24mobile = true;}
            if (state.overflow === "visible") {u24mobile = false;}
            if (u24mobile) {
                subnav.each(function() {
                    var thisH = $(this).outerHeight();
                    if (thisH > maxHeight) { maxHeight = thisH;}
                });
                u24w6.height(maxHeight);
            }
            else {
                u24w6.height('auto');
            }
        }
        u24equalHeight();
 
        // make region list two column
        $(function($) {
            var num_cols = 2,
                    container = $('.u24-l2'),
                    listItem = 'li',
                    listClass = 'u24-l2sub';
            container.each(function() {
                var items_per_col = new Array(),
                items = $(this).find(listItem),
                min_items_per_col = Math.floor(items.length / num_cols),
                difference = items.length - (min_items_per_col * num_cols);
                for (var i = 0; i < num_cols; i++) {
                    if (i < difference) {
                        items_per_col[i] = min_items_per_col + 1;
                    } else {
                        items_per_col[i] = min_items_per_col;
                    }
                }
                for (var i = 0; i < num_cols; i++) {
                    $(this).append($('<ul ></ul>').addClass(listClass));
                    for (var j = 0; j < items_per_col[i]; j++) {
                        var pointer = 0;
                        for (var k = 0; k < i; k++) {
                            pointer += items_per_col[k];
                        }
                        $(this).find('.' + listClass).last().append(items[j + pointer]);
                    }
                }
            });
        });
 
        // For testing Page Language
        //var pglang = 'fr'
 
        // Show u24 after 2 seconds
        setTimeout(function(){
            $('body').addClass('u24show');
            setTimeout(function(){
                $('body').addClass('u24vis');
            }, 1);
            if(typeof s_setAccount !== 'undefined'){
                navTrack(s_setAccount()[1],s_setAccount()[2],'active-country-select','acs-loaded');
            }
        }, 2000);
 
    //EVENT HANDLING
        //Active Region Dropdown
        $(document).on('click','a.u24region',function(e){
            $('.u24region').removeClass('u24regioncr');
            $('.u24-l2visible').removeClass('u24-l2visible');
            $(this).addClass('u24regioncr').next('ul').addClass('u24-l2visible');
            return false;
        });
 
        //Show Translation List
        $(document).on('mouseenter','.u24addlang',function(){
            $('.u24w3').addClass('u24w3open');
        });
 
        $(document).on('mouseleave','.u24addlang',function(){
            $('.u24w3').removeClass('u24w3open');
        });
 
        $(document).on('click touchstart','.u24w2 .u24addlang a.u24w3open',function(){
            $('.u24w3').addClass('u24w3open');
            return false;
        });
 
        $(document).on('focus','.u24w2 .u24addlang a',function(){
            $('.u24w3').addClass('u24w3open');
        });
 
        $(document).on('blur','.u24w2 .u24addlang a',function(){
            $('.u24w3').removeClass('u24w3open');
        });
 
        //Click on "Country" to go back to list of countries
        $(document).on('click touchstart','.l2Title',function(){
            $('.u24-l2visible').removeClass('u24-l2visible');
            $('.u24region').removeClass('u24regioncr');
            return false;
        });
 
        //Show All Countries List
        $(document).on('mouseenter','.u24w4wrap',function(){
            $('.u24w5').addClass('u24w5open');
            $('.u24w4').addClass('u24w4open');
        });
 
        $(document).on('mouseleave','.u24w5.u24w5open,.u24w4wrap',function(){
            $('.u24w5').removeClass('u24w5open');
            $('.u24w4').removeClass('u24w4open');
        });
 
        $(document).on('focus','.u24close',function(){
            $('.u24w5').removeClass('u24w5open');
            $('.u24w4').removeClass('u24w4open');
        });
 
        $(document).on('click touchstart','.u24w4 a.u24w3open',function(){
            $('.u24w5').addClass('u24w5open');
            $('.u24w4').addClass('u24w4open');
            return false;
        });
 
        $(document).on('focus','.u24w4 a',function(){
            $('.u24w5').addClass('u24w5open');
            $('.u24w5').addClass('u24w4open');
        });
 
        $(document).on('focus','.u24w4',function(){
            $('.u24w5').addClass('u24w5open');
            $('.u24w5').addClass('u24w4open');
        });
 
        //Close U24 if hidden link receives focus
        $(document).on('focus','#u24closetrigger',function(){
            if($('body').hasClass("u24show")){
                $('.u24closebtn').click();
            }
        });
 
        //Escape to close
        $(document).keyup(function(e) {
            if (e.keyCode === 27)
                if($('body').hasClass("u24show")){
                    $('.u24closebtn').click();
                    e.preventDefault();
                }
        });
 
        //Click to close
        $(document).on('click','.u24close',function(e){
            $('body').removeClass('u24show u24vis');
            createCookie('ORA_COUNTRYSELECT', 'true', 1);
            e.preventDefault();
        });
 
        // Prevent default when button is a menu
        $(document).on('click','.u24addlang a.u24btnlnk',function(e){
            e.preventDefault();
        });
 
        // fire cookie when clicking on button link that's not a menu
        $(document).on('click','a.u24btnlnk',function(e){
            if(!$(this).closest('.u24addlang')[0]){
                createCookie('ORA_COUNTRYSELECT', 'true', 1);
            }
        });
 
        // fire cookie for any exit link
        $(document).on('click','.u24w3 a,ul.u24-l2sub a',function(e){
            createCookie('ORA_COUNTRYSELECT', 'true', 1);
        });
 
        window.addEventListener("resize", function() {
            if($('body').hasClass("u24show")){
                u24equalHeight();
            }
        }, false);
 
    }
    // activeCountrySelect() close
}
});
 
//gonna move to external global core js
//Cookie Functions - https://scotch.io/tutorials/easily-create-read-and-erase-cookies-with-jquery
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}
 
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}

// @import '../../../components/u24/u24.js';

/*! RH02 */
$(document).ready(function($) {
	'use strict';

   var rh02 = $('.rh02');
   var rh02next = $('.rh02').next();

   // ADD BACK LINK
   var back = (rh02.is('[data-backlbl]')) ? rh02.attr('data-backlbl') : 'Back';
   if (rh02.hasClass('rh02v0')) {
   	rh02.find('.rh02w3').append('<a class="rh02back" href="#back">'+back+'</a>');
   }
   if (rh02.hasClass('rh02v1')) {
	rh02.find('.rh02w5').append('<a class="rh02back" href="#back">'+back+'</a>');
   }

   // ADD BLUR OUT LINK FOR KEYBOARD USERS
   rh02.find('.rh02w1').append('<a class="rh02blurout" href="#close"></a>');

   // ADD CLASS FLAG FOR DEFAULT FIRST PANEL
   rh02.find('.rh02panel').each(function(){
	   $(this).find('.rh02w2').first().each(function(){
		   if($(this).find('button.rh02-pcontent')[0]){
			   $(this).addClass('rh02defpanel');
		   }
	   });
   });

   ////////////////////////////////////////////////////////////
   // CAROUSEL SETUP
   ////////////////////////////////////////////////////////////

   //Setup for v0
   if (rh02.hasClass('rh02v0')) {
	   rh02.find('.rh02carousel').each(function(){

		   this.swiping = false;
		   this.moved = false;

		   var n = 0,
			   rh02nav = $('<ul class="rh02nav rh02navloading"></ul>'),
			   panel = $(this);

		   panel.find('.rh02w2').each(function(){
			   n++;
			   $(this).addClass('rh02-slide'+n);
			   rh02nav.append('<li><a href="#'+n+'" title="View Slide '+n+'"><b>View Slide '+n+'</b></a></li>')
		   });

		   // add nav
		   panel.append(rh02nav);

		   setTimeout(function() {
			   rh02.find('.rh02nav').removeClass('rh02navloading');
		   }, 600);

		   // set current item
		   var citem = 1;
		   if(panel.is('.rh02random')){
			   citem = Math.floor(Math.random() * (panel.find('.rh02w2').length - 1 + 1)) + 1;
		   }

		   panel.find('.rh02w2:nth-of-type('+citem+')').addClass('rh02current');
		   panel.find('.rh02nav li:nth-of-type('+citem+') a').addClass('rh02cnav');

		   // set init class to kill :first-of style used for loading
		   panel.addClass('rh02carouselinit');

		   // trigger autoroate if used
		   if(panel.is('[data-auto]')){
			   setTimeout(function() {
				   rh02automove(panel,panel.attr('data-auto'));
			   }, panel.attr('data-auto') * 1000); // timing set by pubs in seconds, so convert to ms
		   }

	   });
   }
   else if (rh02.hasClass('rh02v1')) {
	   var anim_speed = 1000;
	   var anim_autoplaySpeed = 5000;

	   setTimeout(function(){
			rh02.find(".slick-animated-dots").removeClass("init");
	   },anim_autoplaySpeed + anim_speed);

	   rh02.find('.rh02carousel').each(function(){

		   this.swiping = false;
		   this.moved = false;

		   var n = 0,
			   rh02nav = $('<ul class="rh02nav slick-animated-dots init"></ul>'),
			   panel = $(this);

		   panel.find('.rh02w2').each(function(){
			   n++;
			   $(this).addClass('rh02-slide'+n);
			   rh02nav.append('<li role="presentation"><button slide="'+n+'" title="View Slide '+n+'"><b>View Slide '+n+'</b><span style="transition-duration: ' + anim_autoplaySpeed+ 'ms; transition-delay: ' + anim_speed + 'ms; animation-duration: ' + anim_autoplaySpeed + 'ms;"></button></li>');
		   });

		   // add nav
		   panel.find('.rh02w6').append(rh02nav);

		   setTimeout(function() {
			   rh02.find('.rh02nav').removeClass('rh02navloading');
		   }, 600);

		   // set current item
		   var citem = 1;
		   if(panel.is('.rh02random')){
			   citem = Math.floor(Math.random() * (panel.find('.rh02w2').length - 1 + 1)) + 1;
		   }

		   panel.find('.rh02w2:nth-of-type('+citem+')').addClass('rh02current');
		   panel.find('.rh02nav li:nth-of-type('+citem+') button').addClass('rh02cnav');
		   panel.find('.rh02nav li:nth-of-type('+citem+') ').addClass('slick-active');


		   // set init class to kill :first-of style used for loading
		   panel.addClass('rh02carouselinit');

		   // trigger autorotate if used
		   if(panel.is('[data-auto]')){
			   setTimeout(function() {
				   rh02automove(panel, parseInt(panel.attr('data-auto')));
			   }, panel.attr('data-auto') * 1000); // timing set by pubs in seconds, so convert to ms
		   }

		   panel.find('.rh02w2').each(function(){
			if(!$(this).is('[data-bgimg]')){
				$(this).addClass('bg-full');
			}
		});

	   });
   }
   ////////////////////////////////////////////////////////////
   // CAROUSEL IMG LOAD
   ////////////////////////////////////////////////////////////
   rh02.find('.rh02w2[data-bgimg]').each(function(){
	   $(this).bgimg();
   });


   ////////////////////////////////////////////////////////////
   // CAROUSEL EVENTS
   ////////////////////////////////////////////////////////////

   // SWIPE IT REAL GOOD
   $(document).on('swipeleft','.rh02carousel',function(e){
	   //console.log('swipe left');
	   this.swiping = true;
	   this.moved = true;
	   rh02move(false,$(this),1);
	   $(this).addClass('rh02stopped');
   })

   $(document).on('swiperight','.rh02carousel',function(e){
	   //console.log('swipe right');
	   this.swiping = true;
	   this.moved = true;
	   rh02move(false,$(this),-1);
	   $(this).addClass('rh02stopped');
   })

   // CAROUSEL NAV DOTS (DASHES)
   $(document).on('click','.rh02nav a, .rh02nav button',function(e){
	   var thspos = 0, curpos;
	   if (this.tagName === "BUTTON") {
		   if ($(this).parent().hasClass('slick-active')) {
			   return
		   }
		   thspos = parseInt($(this).closest('.rh02nav').find('.rh02cnav').first()[0].attributes[0].value);
		   curpos = parseInt(this.attributes[0].value);
	   }
	   else {
		   thspos = parseInt($(this).closest('.rh02nav').find('.rh02cnav').first()[0].href.split('#')[1]);
		   curpos = parseInt(this.href.split('#')[1]);
	   }
		   var dir = (curpos < thspos) ? -1 : 1;

	   if(thspos != curpos){
		   rh02move(curpos,$(this).closest('.rh02carousel'),dir);
		   $(this).closest('.rh02carousel')[0].moved = true;
	   }

	   $(this).closest('.rh02carousel').addClass('rh02stopped');

	   e.preventDefault();
   })

   ////////////////////////////////////////////////////////////
   // CAROUSEL MOVE FUNCTIONS
   ////////////////////////////////////////////////////////////
   function rh02automove(panel,sec){
		   if(!panel.is('.rh02pause') && !panel.is('.rh02stopped') && !panel.is('.rh02open') && !panel[0].moved){
			   rh02move(false,panel,1);
		   }else{
			   panel[0].moved = false;
		   }

		   setTimeout(function() {
			   rh02automove(panel,sec);
		   }, sec * 1000); // timing set by pubs in seconds, so convert to ms

   }

   function rh02move(pos,panel,dir){

	   // wait a sec then kill swiping flag if true
	   if(panel[0].swiping){
		   setTimeout(function() {
			   panel[0].swiping = false;
		   }, 600);
	   }
	   
	   if(!$('.rh02menuopen')[0] || panel.hasClass('rh02carousel')){

		   if(dir < 0){
			   panel.addClass('rh02carouselback');
		   }else{
			   panel.removeClass('rh02carouselback');
		   }

		   setTimeout(function() {
			   if(!pos){
				   //First we try to get the value href from the current nav anchor, if that fails because it's a button (on v1), then get the value out of it
				   try {
					   pos = parseInt(panel.find('.rh02cnav')[0].href.split('#')[1]) + dir;
				   }
				   catch(e) {
					   pos = parseInt(panel.find('.rh02cnav')[0].getAttribute("slide")) + dir;
				   }

				   if (pos > panel.find('.rh02w2').length){
					   pos = 1;

				   }else if(pos < 1){
					   pos = panel.find('.rh02w2').length;
				   }
			   }

			   if(pos && !panel.find('.rh02current.rh02-slide'+pos)[0] && !panel.is('.rh02moving')){
				   panel.find('.rh02current').addClass('rh02out').removeClass('rh02current');
				   panel.find('.rh02-slide'+pos).addClass('rh02current');
				   panel.addClass('rh02moving');

				   // SET NAV DOT
				   pos--;
				   panel.find('.rh02cnav').removeClass('rh02cnav');
				   $(panel.find('.slick-active')).removeClass('slick-active');

					// ONLY DO THIS FOR V1
				   if($('.rh02v1')[0]){
					   $(panel.find('.rh02nav a, .rh02nav button span')).remove();
					   $(panel.find('.rh02nav a, .rh02nav button')[pos]).append('<span style="transition-duration: ' + anim_autoplaySpeed+ 'ms; transition-delay: ' + anim_speed + 'ms; animation-duration: ' + anim_autoplaySpeed + 'ms;animation-name:slick-anim-fist;animation-timing-function:linear">')
				   }

				   $(panel.find('.rh02nav a, .rh02nav button')[pos]).closest('li').addClass('slick-active');
				   $(panel.find('.rh02nav a, .rh02nav button')[pos]).addClass('rh02cnav');

				   setTimeout(function() {
					   panel.find('.rh02out').removeClass('rh02out');
					   panel.find('.rh02outdef').removeClass('rh02outdef');
					   panel.removeClass('rh02moving');
					   panel.removeClass('rh02carouselback');
				   }, 600); // timing to match css timing

			   }

		   }, 10); // tiny pause so that the back class can work and move the hidden panel to the correct side

	   }

   }


   ////////////////////////////////////////////////////////////
   // DESKTOP OPEN/CLOSE PANEL
   ////////////////////////////////////////////////////////////

   $(document).on('mouseenter click','button.rh02-pcontent',function(){
	   var bttn = $(this);

	   if(!rh02ismobile() && !bttn.closest('.rh02panel')[0].swiping){

		   $('.rh02menuopen').removeClass('rh02menuopen');
		   $('.rh02open').removeClass('rh02open');
		   $('body').addClass('rh02menuopen');
		   bttn.closest('.rh02panel').addClass('rh02open').addClass('rh02opening');
		   setTimeout(function() {
			   bttn.closest('.rh02panel').removeClass('rh02opening');
		   }, 600); // timing to match css timing
	   }
   })

   $(document).on('focus','.rh02-pcontent',function(){
	   if(!rh02ismobile() && !$(this).closest('.rh02open')[0]){
		   $('.rh02menuopen').removeClass('rh02menuopen');
		   $('.rh02open').removeClass('rh02open');
	   }
   })

   $(document).on('mouseleave','.rh02panel',function(){
	   if(!rh02ismobile()){
		   $(this)[0].moved = true;
		   $('.rh02menuopen').removeClass('rh02menuopen');
		   $(this).removeClass('rh02open');
	   }
   })


   $(document).on('focus','.rh02blurout',function(){
	   if($('.rh02open')[0]){
		   $('.rh02menuopen').removeClass('rh02menuopen');
		   $('.rh02open').removeClass('rh02open');
		   rh02next.find('a').first().focus();
	   }
   })

   $(".rh02-pcontent").keypress(function (event) {
	   if (event.which == 13) {
		   if(!$(this).closest('.rh02open')[0]){
			   $('.rh02menuopen').removeClass('rh02menuopen');
			   $('.rh02open').removeClass('rh02open');
			   $('body').addClass('rh02menuopen');
			   $(this).closest('.rh02panel').addClass('rh02open');
			   event.preventDefault();
		   }
	   }
   });

   $(document).on('mouseenter touchstart','.rh02panel',function(){
	   $(this).addClass('rh02pause');
   })

   $(document).on('mouseleave touchend','.rh02panel',function(){
	   $(this).removeClass('rh02pause');
   })

   ////////////////////////////////////////////////////////////
   // MOBILE OPEN/CLOSE PANEL
   ////////////////////////////////////////////////////////////

   $(document).on('click','button.rh02-pcontent',function(){
	   if( !$(this).closest('.rh02open')[0] && !$(this).closest('.rh02panel')[0].swiping){
		   $('.rh02menuopen').removeClass('rh02menuopen');
		   $('.rh02open').removeClass('rh02open');
		   $('body').addClass('rh02menuopen');
		   $(this).closest('.rh02panel').addClass('rh02open');
	   }
   })


   $(document).on('click','.rh02back',function(e){
	   //seth removed this check for iPads in landscape
	   //if(rh02ismobile()){
		   $('.rh02menuopen').removeClass('rh02menuopen');
		   $(this).closest('.rh02panel').removeClass('rh02open');
		   e.preventDefault();
	   //}
   })

   function rh02ismobile(){
	   return (parseInt(rh02.css('margin-top')) == 0) ? true : false;
   }

});



/* eslint-disable */
// *********************  rh08 ***********************/
if (document.querySelector('#rh08')) {
    // constant
    var FADE = 'fade';
    var backgroundImageWidth = 0;
    var clickDisabled = false;

    var CHANGE_SLIDER_BREAK_POINT = 975;
    var MIN_WIDTH_SLIDER_DESKTOP_BREAK_POINT = 1468;
    // mobile case
    var SLIDE_TRANSITION_SPEED = 800;

    // desktop
    var IMAGE_FADE_DURATION = 500; // image fade IN and fadeout speed
    var PERCENTAGE_AFTER_FADE_IN_START = 70; // percentage after fade IN text start
    var TEXT_FADE_OUT_DURATION = (PERCENTAGE_AFTER_FADE_IN_START/100)*IMAGE_FADE_DURATION;  // text fade IN and fadeout speed
    // var TEXT_FADE_IN_DURATION = IMAGE_FADE_DURATION - TEXT_FADE_OUT_DURATION;  // text fade IN and fadeout speed

    var FADE_SLIDE_SPEED = 500;
    var isSliderObjectCreated = false;
    var MIN_HEIGHT_WHITE_BOX_DESKTOP = 372;

    var previousWidth = -1,
        hasPauseClass = false;
    const ARIA_LABEL = 'aria-label';
    const ARIA_CURRENT = 'aria-current';
    const ARIA_LIVE = "aria-live";
    const ARIA_HIDDEN = "aria-hidden";
    const POLITE = "polite";
// pause & play string
    const PLAY_TEXT = document.querySelector('.rh08').getAttribute('data-playtext')||'Play';
    const PAUSE_TEXT = document.querySelector('.rh08').getAttribute('data-pausetext')||'Pause';
    const PLAY_ARIA_LABEL = 'Start autoplay';
    const PAUSE_ARIA_LABEL = 'Pause autoplay';

    const PAUSE_FLAGS = {
        MANUAL: 1,
    };
    const {floor, abs} = Math;
    var ATTRIBUTES_UPDATE_EVENT = 'component_move.page';
    var PILLS_ATTRIBUTES_UPDATE_EVENT = 'updatePillsClass';
    const UPDATE_EVENT = 'component_updated.page component_refresh.page';
    const WRAPPER_ELEMENT = 'rh08slider';
    var MESSAGE_PREFIX = '[CUSTOMSLIDER]';
    const ELEMENT_CLASSES = {
        topElement: WRAPPER_ELEMENT,
        w1: `${WRAPPER_ELEMENT}w1`,
        ls: `${WRAPPER_ELEMENT}w2`,
        slide: `rh08slide`,
        arrows: `rh08-arrows`,
        arrow: `rh08-arrow`,
        prev: `rh08-prevarrow`,
        next: `rh08-nextarrow`,
        pillsWrapper: `rh08-pills rh02w6`,
        pills: `rh08-pillsw1  slick-animated-dots init dot-height`,
        pillsButton: `rh08-pillbtn`,
        pillsItem: `rh08-pill`,
        pauseBtnWrapper: `rh08-pause`,
        pauseBtnCls: `rh08-pausew1`,
        pause: `rh08-paused`,
        pauseBtn: `rh08-pausebtn`,
        navNextClicked: `nextbtn-clicked`,
        navPrevClicked: `prebtn-clicked`,
        pillsClicked: `pills-clicked`,
        srOnly:'sr-only',
        // animation classes
        fadeInRightImage:'fadein-right-img',
        fadeInText:'fadein-text',
        fadeInRightImgWithDelay:'fadein-right-img-with-delay',
        fadeInLeftImgWithDelay:'fadein-left-img-with-delay',
        fadeInTextWithLargeDelay:'fadein-text-with-large-Delay',
        fadeOutLeftImage:'fadeout-left-image',
        fadeOutText:'fadeout-text',
        fadeOutRightImage:'fadeout-right-image'

    };
    const STATUS_CLASSES = {
        active: 'slick-active',
        visible: 'is-visible',
        loading: 'is-loading',
    };
    const DEFAULT_PROPS = {
        type: 'slide',
        speed: 10000,
        waitForTransition: true,
        start: 0,
        arrows: true,
        pills: true,
        autoplay: false,
        interval: 5000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        isDragRequired: true,
        swipeDistanceThreshold: 150,
        direction: 'ltr',
        isNavigation: false,
        updateOnMove: false,
        throttle: 100,
        componentUnMount: false,
        classes: ELEMENT_CLASSES,
        parentElementOpacityRequired: true
    };
    const SLIDER_STATES = {
        SLIDE_CREATED: 1,
        SLIDE_MOUNTED: 2,
        SLIDE_IDLE: 3,
        SLIDE_MOVING: 4,
        SLIDE_DESTROYED: 5
    };
    const SLIDE_MOVING = 4;
    const SLIDE = 'slide';
    var {keys} = Object;
    const STYLE_RESTORE_EVENTS = 'component_update.slide';

    function getBackgroundSizeFn(elem, onImageLoad) {
        if (elem) {
            var computedStyle = getComputedStyle(elem),
                image = new Image(),
                src = computedStyle.backgroundImage.replace(
                    /url\((['"])?(.*?)\1\)/gi,
                    "$2"
                );

            image.addEventListener('load', onImageLoad);
            image.src = src;
        }
    }
    // manage slider state
    const ManageState = initialValue => {
        let curr = initialValue;
        return {
            set(st) {
                curr = st;
            },
            is(st) {
                return st === curr;
            },
        };
    };
    // event handler pub sub model
    const EventHandler = () => {
        let data = [];
        const EventHandler = {
            subscribe(events, handler, elm = null, options = {}) {
                events.split(' ').forEach(event => {
                    if (elm) {
                        elm.addEventListener(event, handler, options);
                    }

                    data.push({event, handler, elm, options});
                });
            },

            unsubscribe(events, elm = null) {
                events.split(' ').forEach(event => {
                    data = data.filter(item => {
                        if (item && item.event === event && item.elm === elm) {
                            removeListener(item);
                            return false;
                        }
                        return true;
                    });
                });
            },

            publish(event, ...args) {
                data.forEach(item => {
                    if (!item.elm && item.event.split('.')[0] === event) {
                        item.handler(...args);
                    }
                });
            },

            componentUnMount() {
                data.forEach(removeListener);
                data = [];
            },
        };

        function removeListener(item) {
            if (item.elm) {
                item.elm.removeEventListener(item.event, item.handler, item.options);
            }
        }

        return EventHandler;
    };
    // find element
    function findFn(elm, selector) {
        return elm ? elm.querySelector(selector.split(' ')[0]) : null;
    }
    // find child
    function childFn(parent, tagOrClassName) {
        return childrenFn(parent, tagOrClassName)[0];
    }
    // find all children
    function childrenFn(parent, tagOrClassName) {
        if (parent) {
            return values(parent.children).filter(child => {
                return hasClass(child, tagOrClassName.split(' ')[0]) || child.tagName === tagOrClassName;
            });
        }

        return [];
    }
    // create element
    function create(tag, attrs) {
        const elm = document.createElement(tag);
        each(attrs, (value, key) => setAttributeFn(elm, key, value));

        return elm;
    }
    // domify
    function domify(html) {
        const div = create('div', {});
        div.innerHTML = html;

        return div.firstChild;
    }
    // remove elements from dom
    function removeFn(elms) {
        toArray(elms).forEach(elm => {
            if (elm) {
                const parent = elm.parentElement;
                parent && parent.removeChild(elm);
            }
        });
    }
    // append element
    function append(parent, child) {
        if (parent) {
            parent.appendChild(child);
        }
    }

    function before(elm, ref) {
        if (elm && ref) {
            const parent = ref.parentElement;
            parent && parent.insertBefore(elm, ref);
        }
    }
    // apply style
    function applyStyle(elm, styles) {
        if (elm) {
            each(styles, (value, prop) => {
                if (value !== null) {
                    elm.style[prop] = value;
                }
            });
        }
    }
    // wrapper of add class and remove class
    function addOrRemoveClasses(elm, classes, remove) {
        if (elm) {
            toArray(classes).forEach(name => {
                if (name) {
                    elm.classList[remove ? 'remove' : 'add'](name);
                }
            });
        }
    }
    // add class
    function addClassFn(elm, classes) {
        addOrRemoveClasses(elm, classes, false);
    }
    // remove class
    function removeClassFn(elm, classes) {
        addOrRemoveClasses(elm, classes, true);
    }
    // check class present in element of nor
    function hasClass(elm, className) {
        return !!elm && elm.classList.contains(className);
    }
    // set attribute
    function setAttributeFn(elm, name, value) {
        if (elm) {
            elm.setAttribute(name, value);
        }
    }
    // get attribute value
    function getAttributeFn(elm, name) {
        return elm ? elm.getAttribute(name) : '';
    }
    // remove attribute
    function removeAttribute(elms, names) {
        toArray(names).forEach(name => {
            toArray(elms).forEach(elm => elm && elm.removeAttribute(name));
        });
    }
    // get element rect
    function getRect(elm) {
        return elm.getBoundingClientRect();
    }
    // when image loaded successfully
    function loaded(elm, callback) {
        const images = elm.querySelectorAll('img');
        const length = images.length;
        if (length) {
            let count = 0;
            each(images, img => {
                img.onload = img.onerror = () => {
                    if (++count === length) {
                        callback();
                    }
                };
            });
        } else {
            callback();
        }
    }
     // slide transition effect
     var SlideTransition = (CustomSlider, Components) => {
        let ls;
        let endCallback;

        return {

            componentWillMount() {
                ls = Components.SliderElements.ls;

                CustomSlider.subscribe('transitionend', e => {
                    if (e.target === ls && endCallback) {
                        endCallback();
                    }
                }, ls);
            },


            start(endIndex, nextIndex, lastIndex, coord, done) {
                const options = CustomSlider.options;
                let speed = options.speed;
                endCallback = done;

                let sign = -1;


                function onImageLoad(e) {
                    let image = e.target;
                    backgroundImageWidth = image.width;
                    slideTextureImage();
                }

                getBackgroundSizeFn(document.querySelector(".rh08sliderw1 .bg-texture2"), onImageLoad);

                // eslint-disable-next-line no-inner-declarations
                function slideTextureImage() {
                    const width = backgroundImageWidth - CustomSlider.Components.SliderLayout.getSlideWidth(0);
                    let distance = sign * (width / (CustomSlider.length)) * nextIndex;
                    applyStyle(ls, {
                        transition: `transform ${speed}ms ${options.easing}`,
                        transform: `translate(${coord.x}px,${coord.y}px)`,
                    });

                    applyStyle(document.querySelector(".rh08sliderw1 .bg-texture2"), {
                        transition: `background-position-x ${speed}ms ${options.easing}`,
                        backgroundPositionX: `${distance}px`,
                    });
                }

                if (backgroundImageWidth !== 0) {
                    slideTextureImage();
                } else {
                    getBackgroundSizeFn(document.querySelector(".rh08sliderw1 .bg-texture2"), onImageLoad);
                }

            },
        };
    };

    // combine all type of object which slider support
    function combineAllObj(CustomSlider, Components, Transition) {
        const components = {};

        each(Components, (Component, name) => {
            components[name] = Component(CustomSlider, components, name.toLowerCase());
        });
        if (!Transition) {
            Transition = CustomSlider.is(FADE) ? FadeObj : SlideTransition;
        }
        components.Transition = Transition(CustomSlider, components);
        return components;
    }

    function error(message) {
        console.error(`${MESSAGE_PREFIX} ${message}`);
    }

    function exist(subject, message) {
        if (!subject) {
            throw new Error(message);
        }
    }
    // each loop
    function each(obj, callback) {
        keys(obj).some((key, index) => {
            return callback(obj[key], key, index);
        });
    }
    // get all values
    function values(obj) {
        return keys(obj).map(key => obj[key]);
    }
    // check element is object of not
    function isObject(subject) {
        return typeof subject === 'object';
    }
    // merge to object
    function merge({...to}, from) {
        each(from, (value, key) => {
            if (isObject(value)) {
                if (!isObject(to[key])) {
                    to[key] = {};
                }

                to[key] = merge(to[key], value);
            } else {
                to[key] = value;
            }
        });

        return to;
    }
    // copy with new instance
    function assign(to, from) {
        keys(from).forEach(key => {
            if (!to[key]) {
                Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
            }
        });

        return to;
    }
    // used in case of resize
    function throttle(func, wait) {
        let timeout;

        return function () {
            if (!timeout) {
                timeout = setTimeout(() => {
                    func();
                    timeout = null;
                }, wait);
            }
        };
    }

    function toArray(value) {
        return Array.isArray(value) ? value : [value];
    }

    function between(value, m1, m2) {
        return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
    }

    function unit(value) {
        const type = typeof value;

        if (type === 'number' && value > 0) {
            return parseFloat(value) + 'px';
        }

        return type === 'string' ? value : '';
    }

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }

    function toPixel(topElement, value) {
        if (typeof value === 'string') {
            const div = create('div', {});

            applyStyle(div, {
                position: 'absolute',
                width: value,
            });

            append(topElement, div);

            value = div.clientWidth;

            removeFn(div);
        }

        return +value || 0;
    }
    // create interval
    function createInterval(callback, interval, progress) {
        const {requestAnimationFrame} = window;
        let start, elapse, r, pause = true;

        const s = timestamp => {
            if (!pause) {
                if (!start) {
                    start = timestamp;

                    if (r && r < 1) {
                        start -= r * interval;
                    }
                }

                elapse = timestamp - start;
                r = elapse / interval;

                if (elapse >= interval) {
                    start = 0;
                    r = 1;
                    callback();
                }

                if (progress) {
                    progress(r);
                }

                requestAnimationFrame(s);
            }
        };

        return {
            pause() {
                pause = true;
                start = 0;
            },

            play(reset) {
                start = 0;

                if (reset) {
                    r = 0;
                }

                if (pause) {
                    pause = false;
                    requestAnimationFrame(s);
                }
            },
        };
    }
    // a11y
    const KeyboardInteraction
        = (CustomSlider) => {
        let target;

        return {

            componentWillMount() {
                CustomSlider.subscribe('component_mounted component_updated', () => {
                    const topElement = CustomSlider.topElement;
                    const mainContent = findFn(document.body, '#u28skip2c');
                    if (target) {
                        CustomSlider.unsubscribe('keyup', target);
                    }

                    target = topElement;
                    CustomSlider.subscribe('keyup', e => {
                        if (topElement.contains(document.activeElement) && e.keyCode === 9) {
                            CustomSlider.publish(`paused_slider`);
                        }
                    }, target);
                    if (mainContent) {
                        mainContent.addEventListener('keydown', e => {
                            if (topElement.contains(document.activeElement) && e.keyCode === 13) {
                                CustomSlider.publish(`paused_slider`);
                            }
                        });
                    }

                });
            }
        };
    };
    // puase on mouse hover
    const MouseHoverHandler
        = (CustomSlider) => {
        let pauseOnEnter=false;

        return {

            componentWillMount() {
                CustomSlider.subscribe('component_mounted component_updated', () => {
                    CustomSlider.Components.SliderElements.getSlides(false).forEach((item) => {
                        const target=item.slide.querySelector('.rh02txt');
                        if (target) {
                            CustomSlider.unsubscribe('mouseenter', target);
                            CustomSlider.unsubscribe('mouseleave', target);
                        }
                        CustomSlider.subscribe('mouseenter', e => {
                            if(!hasClass(CustomSlider.topElement.querySelector(`.${CustomSlider.classes.pauseBtn}`),CustomSlider.classes.pause)){
                                pauseOnEnter=true;
                                CustomSlider.publish(`paused_slider`);
                            }
                        }, target);
                        CustomSlider.subscribe('mouseleave', e => {
                            if(pauseOnEnter){
                                pauseOnEnter=false;
                                CustomSlider.publish(`play_slider`);
                            }
                        }, target);
                    });


                });

            }
        };
    };
    // Announce slide no on nav/pill click
    const SlideAnnouncer
        = (CustomSlider) => {
        let slideNumber;
        return {
            componentWillMount() {
                slideNumber=create('span',{class: CustomSlider.classes.srOnly, [ARIA_LIVE]: POLITE});
                append(CustomSlider.topElement,slideNumber);
                CustomSlider.subscribe('announce_slide', e => {
                    slideNumber.innerHTML=`slide ${CustomSlider._intialIndex+1} of ${CustomSlider.Components.SliderElements.total}`;
                });

            }
        };
    };
    // fade out obj
    var FadeObj = (CustomSlider, Components) => {
        var FadeObj = {
            componentWillMount() {
                apply(CustomSlider.index);
            },
            start(endIndex, nextIndex, lastIndex, coord, done) {
                const w1 = Components.SliderElements.w1;
                applyStyle(w1, {height: unit(w1.clientHeight)});
                apply(nextIndex, lastIndex);

                setTimeout(() => {
                    done();
                    applyStyle(w1, {height: ''});
                });
            },
        };

        function fadeInRightImage(elm,callback) {
            addClassFn(elm,CustomSlider.options.classes.fadeInRightImage);
            callback();

        }
        function fadeInText(elm) {
            addClassFn(elm,CustomSlider.options.classes.fadeInText);
        }

        function fadeInWhiteBoxText(index){
            fadeInText(Components.SliderElements.slides[index].querySelector('.rh08w5'));
        }


        function apply(index, lastIndex) {
            const options = CustomSlider.options;
            if (options.requiredFadeInClass) {
                if(!lastIndex && lastIndex!==0){
                    fadeInRightImage(Components.SliderElements.slides[index].querySelector('.rh02-img'),fadeInWhiteBoxText.bind(this,index));
                }
            }
            if (options.parentElementOpacityRequired && (lastIndex || lastIndex === 0)) {
                applyStyle(Components.SliderElements.slides[index], {
                    transition: `opacity ${options.speed}ms ${options.easing}`,
                    transitionDelay: `${options.transitionDelayBetweenSlide}ms`
                });
            }
        }

        return FadeObj;
    };
    // navigation component
    const NavigationArrows = (CustomSlider, Components, name) => {
        let prev;
        let next;
        const classes = CustomSlider.classes;
        const topElement = CustomSlider.topElement;
        let created;
        const SliderElements = Components.SliderElements;
        const NavigationArrows = {
            required: CustomSlider.options.arrows,
            componentWillMount() {
                prev = SliderElements.arrows.prev;
                next = SliderElements.arrows.next;
                if ((!prev || !next) && CustomSlider.options.arrows) {
                    prev = createArrow(true);
                    next = createArrow(false);
                    if(document.querySelectorAll('.rh08slide').length <= 1){
                        prev.style.display = 'none';
                        next.style.display = 'none';
                    }
                    created = true;
                    appendArrows();
                }
                if (prev && next) {
                    addEventListeners();
                }

                this.arrows = {prev, next};
            },
            componentDidMount() {
                CustomSlider.publish(`${name}:component_mounted`, prev, next);
            },
            componentUnMount() {
                removeAttribute([prev, next], 'disabled');

                if (created) {
                    removeFn(prev.parentElement);
                }
            },
        };


        function addEventListeners() {
            CustomSlider
                .subscribe('click', (e) => {
                    if (!e.detail || e.detail === 1) {
                        if (clickDisabled)
                            return;
                        clickDisabled = true;

                        setTimeout(function () {
                            clickDisabled = false;
                        }, IMAGE_FADE_DURATION + TEXT_FADE_OUT_DURATION);
                        const callbackFn = () => {
                            if (CustomSlider._intialIndex === 0) {
                                CustomSlider.proceed(`<${CustomSlider.length - 1}`);
                            } else {
                                CustomSlider.proceed('<');
                            }
                            CustomSlider.publish('announce_slide');
                        };
                        CustomSlider.publish(`paused_slider`);
                        removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.pillsClicked);
                        removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked);
                        addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked);
                        CustomSlider.publish(`previous_nav_clicked`,callbackFn);

                    }
                }, CustomSlider.options.rtl ? next : prev)
                .subscribe('click', (e) => {
                    if (clickDisabled)
                        return;
                    clickDisabled = true;

                    setTimeout(function () {
                        clickDisabled = false;
                    }, IMAGE_FADE_DURATION + TEXT_FADE_OUT_DURATION);
                    if (!e.detail || e.detail === 1) {
                        const callbackFn = () => {
                            if (CustomSlider._intialIndex < CustomSlider.length - 1) {
                                CustomSlider.proceed('>');
                            } else {
                                CustomSlider.proceed('>0');
                            }
                            CustomSlider.publish('announce_slide');
                        };
                        CustomSlider.publish(`paused_slider`);
                        removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.pillsClicked);
                        removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked);
                        addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked);
                        CustomSlider.publish(`next_nav_clicked`,callbackFn);
                    }

                }, CustomSlider.options.rtl ? prev : next)
                .subscribe('component_mounted component_move component_updated component_refresh', updateDisabled);
        }

        function updateDisabled() {
            const {lastIndex, nextIndex} = Components.ControlManager;
            CustomSlider.publish(`${name}:component_updated`, prev, next, lastIndex, nextIndex);
        }
        function appendArrows() {
            const wrapper = create('div', {class: classes.arrows});

            append(wrapper, prev);
            append(wrapper, next);

            before(wrapper, topElement.firstElementChild);
        }

        function createArrow(prev) {
            const arrow = `<button  data-lbl= ${prev ? "scroll-left" :"scroll-right"} class="${classes.arrow} ${prev ? classes.prev : classes.next}" aria-label= "${prev ? "previous " : "next "}slide" type="button"/>`;
            return domify(arrow);
        }

        return NavigationArrows;
    };
    // auto rotate component
    const AutoRotate = (CustomSlider, Components, name) => {
        let flags = [];
        let interval;

        const SliderElements = Components.SliderElements;
        const AutoRotate = {
            required: CustomSlider.options.autoplay,
            componentWillMount() {
                const options = CustomSlider.options;

                if (SliderElements.slides.length > 1) {
                    interval = createInterval(() => {
                        if (CustomSlider.options.requiredFadeInClass) {
                            const callbackFn = () => {
                                if (CustomSlider._intialIndex < CustomSlider.length - 1) {
                                    CustomSlider.proceed('>');
                                } else {
                                    CustomSlider.proceed('>0');
                                }
                            };
                            removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.pillsClicked);
                            removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked);
                            addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked);
                            CustomSlider.publish(`auto_rotate_event`,callbackFn);

                        } else {
                            CustomSlider.proceed('>');
                        }

                    }, options.interval, r => {
                        CustomSlider.publish(`${name}:playing`, r);
                    });

                    addEventListeners();
                    // Grab the prefers reduced media query.
                    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
                    // Check if the media query matches with reduced motion
                    if (mediaQuery && mediaQuery.matches) {
                        CustomSlider.options.hasPauseClass = true;
                    } else {
                        this.play();
                    }
                }
            },


            play(flag = 0) {
                flags = flags.filter(f => f !== flag);

                if (!flags.length) {
                    CustomSlider.publish(`${name}:play`);
                    interval.play(true);
                }
            },


            pause(flag = 0) {
                interval.pause();

                if (flags.indexOf(flag) === -1) {
                    flags.push(flag);
                }

                if (flags.length === 1) {
                    CustomSlider.publish(`${name}:pause`);
                }
            },
        };

        function addEventListeners() {
            if (SliderElements.play) {
                CustomSlider.subscribe('click', () => {
                    AutoRotate.play(PAUSE_FLAGS.MANUAL);
                }, SliderElements.play);
            }

            if (SliderElements.pause) {
                switchOn([SliderElements.pause], 'click', PAUSE_FLAGS.MANUAL, false);
            }

            CustomSlider
                .subscribe('component_move component_refresh', () => {
                    AutoRotate.play();
                })
                .subscribe('componentUnMount', () => {
                    AutoRotate.pause();
                });
        }

        function switchOn(elms, event, flag, play) {
            elms.forEach(elm => {
                CustomSlider.subscribe(event, () => {
                    AutoRotate[play ? 'play' : 'pause'](flag);
                }, elm);
            });
        }

        return AutoRotate;
    };
    // click handler
    const ClickHandler = (CustomSlider, Components) => {
        let disabled = false;
        const ClickHandler = {

            required: CustomSlider.options.isDragRequired,

            componentWillMount() {
                CustomSlider
                    .subscribe('click', onClick, Components.SliderElements.w1, {capture: true})
                    .subscribe('component_drag', () => {
                        disabled = true;
                    })
                    .subscribe('component_dragged', () => {
                        setTimeout(() => {
                            disabled = false;
                        });
                    });
            },
        };


        function onClick(e) {
            if (disabled) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }

        return ClickHandler;
    };

    const ControlManager = (CustomSlider, Components) => {
        let options;
        const ControlManager = {

            componentWillMount() {
                options = CustomSlider.options;
                addEventListeners();
            },

            proceed(control) {
                const endIndex = this.getActualIndex(this.parse(control));
                Components.Navigation.proceed(endIndex, this.rewind(endIndex),false);
            },

            parse(control) {
                let index = CustomSlider.index;

                const matches = String(control).match(/([+\-<>]+)(\d+)?/);
                const indicator = matches ? matches[1] : '';
                const number = matches ? parseInt(matches[2]) : 0;

                switch (indicator) {
                    case '>':
                    case '<':
                        index = parsePage(number, index, indicator === '<');
                        break;

                    default:
                        index = parseInt(control);
                }

                return index;
            },

            toIndex(page) {
                if (hasFocus()) {
                    return page;
                }

                const length = CustomSlider.length;

                let index = page;
                index = index - (this.pageLength  - length) * floor(index / length);

                if (length - 1 <= index && index < length) {
                    index = length - 1;
                }

                return index;
            },

            toPage(index) {
                if (hasFocus()) {
                    return index;
                }

                const length = CustomSlider.length;

                if (length - 1 <= index && index < length) {
                    return floor((length - 1));
                }

                return floor(index / 1);
            },

            getActualIndex(index) {
                index =  between(index, 0, this.edgeIndex);
                return index;
            },

            rewind(index) {
                const edge = this.edgeIndex;
                if (index > edge) {
                    index = 0;
                } else if (index < 0) {
                    index = edge;
                }
                return index;
            },

            get pageLength() {
                const length = CustomSlider.length;
                return hasFocus() ? length : Math.ceil(length);
            },

            get edgeIndex() {
                const length = CustomSlider.length;

                if (!length) {
                    return 0;
                }

                if (hasFocus() || options.isNavigation) {
                    return length - 1;
                }

                return length - 1;
            },


            get lastIndex() {
                let prev = CustomSlider.index - 1;
                return prev > -1 ? prev : -1;
            },


            get nextIndex() {
                let next = CustomSlider.index + 1;
                return (CustomSlider.index < next && next <= this.edgeIndex) || next === 0 ? next : -1;
            },
        };


        function addEventListeners() {
            CustomSlider
                .subscribe('component_move', nextIndex => {
                    CustomSlider.index = nextIndex;
                })
                .subscribe('component_updated component_refresh', newOptions => {
                    options = newOptions || options;
                    CustomSlider.index = between(CustomSlider.index, 0, ControlManager.edgeIndex);
                });
        }


        function hasFocus() {
            return  false;
        }


        function parsePage(number, index, prev) {
            if (number > -1) {
                return ControlManager.toIndex(number);
            }
            const sign = prev ? -1 : 1;
            return ControlManager.toIndex(ControlManager.toPage(index) + sign);
        }

        return ControlManager;
    };
    // drag handler
    const DragHandler = (CustomSlider, Components) => {
        const Navigation = Components.Navigation;
        const ControlManager = Components.ControlManager;
        let initialCoordinate;
        let initialInfomation;
        let currentInfo;
        let isDragging;
        const axis = 'x';
        const DragHandler = {
            disabled: false,
            componentWillMount() {
                const SliderElements = Components.SliderElements;
                const w1 = SliderElements.w1;
                CustomSlider
                    .subscribe('touchstart mousedown', startHandler, w1)
                    .subscribe('touchmove mousemove', moveHandler, w1, {passive: false})
                    .subscribe('touchend touchcancel mouseleave mouseup dragend', end, w1)
                    .subscribe('component_mounted component_refresh', () => {
                        each(SliderElements.ls.querySelectorAll('img, a'), elm => {
                            CustomSlider
                                .unsubscribe('dragstart', elm)
                                .subscribe('dragstart', e => {
                                    e.preventDefault();
                                }, elm, {passive: false});
                        });
                    })
                    .subscribe('component_mounted component_updated', () => {
                        this.disabled = !CustomSlider.options.isDragRequired;
                    });
            },
        };

        function startHandler(e) {
            if (!DragHandler.disabled && !isDragging) {
                componentInitialized(e);
            }
        }

        function componentInitialized(e) {
            initialCoordinate = Navigation.getCoordinate(Navigation.position);
            initialInfomation = analyze(e, {});
            currentInfo = initialInfomation;
        }

        function moveHandler(e) {
            if (initialInfomation) {
                currentInfo = analyze(e, initialInfomation);

                if (isDragging) {
                    if (e.cancelable) {
                        e.preventDefault();
                    }

                    if (!CustomSlider.is(FADE)) {
                        const position = initialCoordinate[axis] + currentInfo.offset[axis];
                        Navigation.moveXDirection(resist(position));
                    }
                } else {
                    if (shouldMove(currentInfo)) {
                        CustomSlider.publish('component_drag', initialInfomation);
                        isDragging = true;
                        Navigation.cancel();
                        componentInitialized(e);
                    }
                }
            }
        }

        function shouldMove({offset}) {
            if (CustomSlider.ManageState.is(SLIDE_MOVING) && CustomSlider.options.waitForTransition) {
                return false;
            }

            let angle = Math.atan(abs(offset.y) / abs(offset.x)) * 180 / Math.PI;

            return angle < 30;
        }

        function resist(position) {
            const friction = 7;
            if (CustomSlider.is(SLIDE)) {
                const sign = Navigation.sign;
                const start = sign * Navigation.getActualIndex(Navigation.toPosition(0));
                const end = sign * Navigation.getActualIndex(Navigation.toPosition(ControlManager.edgeIndex));

                position *= sign;

                if (position < start) {
                    position = start - friction * Math.log(start - position);
                } else if (position > end) {
                    position = end + friction * Math.log(position - end);
                }

                position *= sign;
            }

            return position;
        }

        function end() {
            initialInfomation = null;

            if (isDragging) {
                CustomSlider.publish('component_dragged', currentInfo);
                proceed(currentInfo);
                isDragging = false;
            }
        }

        function proceed(info) {
            const velocity = info.velocity[axis];
            const absV = abs(velocity);

            if (absV > 0) {
                const options = CustomSlider.options;
                const index = CustomSlider.index;
                const sign = velocity < 0 ? -1 : 1;

                let endIndex = index;

                if (!CustomSlider.is(FADE)) {
                    let destination = Navigation.position;

                    if (absV > .6 && abs(info.offset[axis]) < options.swipeDistanceThreshold) {
                        destination += sign * Math.min(
                            absV * 600,
                            Components.SliderLayout.size * (1)
                        );
                    }

                    endIndex = Navigation.toIndex(destination);
                }


                if (endIndex === index && absV > 0.1) {
                    endIndex = index + sign * Navigation.sign;
                }

                if (CustomSlider.is(SLIDE)) {
                    endIndex = between(endIndex, 0, ControlManager.edgeIndex);
                }
                if (options.requiredFadeInClass) {
                    const callbackFn = (endIndex)=>{

                        if (endIndex === -1) {
                            addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked);
                            ControlManager.proceed(`>${CustomSlider.length - 1}`, options.isNavigation);
                        } else if (endIndex > CustomSlider.length - 1) {
                            addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked);
                            ControlManager.proceed(`>0`, options.isNavigation);
                        } else {
                            endIndex > CustomSlider._intialIndex ? addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked): addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked);
                            ControlManager.proceed(endIndex, options.isNavigation);
                        }

                    };
                    removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked);
                    removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked);
                    if (endIndex === -1) {
                        addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked);
                    } else if (endIndex > CustomSlider.length - 1) {
                        addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked);
                    } else {
                        endIndex > CustomSlider._intialIndex ? addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked): addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked);
                    }
                    CustomSlider.publish(`paused_slider`);
                    CustomSlider.publish('component_swiped', endIndex,callbackFn.bind(this,endIndex));
                } else {
                    removeCssOpacity(endIndex);
                    ControlManager.proceed(endIndex, options.isNavigation);
                    CustomSlider.publish(`paused_slider`);

                }
            }
        }

        function analyze(e, initialInfomation) {
            const {timeStamp, touches} = e;
            const {clientX, clientY} = touches ? touches[0] : e;
            const {x: fromX = clientX, y: fromY = clientY} = initialInfomation.to || {};

            const startTime = initialInfomation.time || 0;
            const offset = {x: clientX - fromX, y: clientY - fromY};
            const duration = timeStamp - startTime;
            const velocity = {x: offset.x / duration, y: offset.y / duration};

            return {
                to: {x: clientX, y: clientY},
                offset,
                time: timeStamp,
                velocity,
            };
        }

        return DragHandler;
    };
    // slide
    const Slide = (CustomSlider, index, realIndex, slide) => {

        const updateOnMove = CustomSlider.options.updateOnMove;


        const STATUS_UPDATE_EVENTS = 'ready.slide component_updated.slide component_resized.slide component_moved.slide'
            + (updateOnMove ? ' component_move.slide' : '');


        const Slide = {
            slide,
            index,
            realIndex,
            isClone: realIndex > -1,

            componentWillMount() {
                if (!this.isClone) {
                    slide.id = `${CustomSlider.topElement.id}-s${pad(index + 1)}`;
                }

                CustomSlider
                    .subscribe(STATUS_UPDATE_EVENTS, () => this.update()
                    )
                    .subscribe(STYLE_RESTORE_EVENTS, restoreStyles)
                    .subscribe('click', () => CustomSlider.publish('click', this), slide);


                if (updateOnMove) {
                    CustomSlider.subscribe('component_move.slide', nextIndex => {
                        if (nextIndex === realIndex) {
                            update(true, false);
                        }
                    });
                }

                applyStyle(slide, {display: ''});

                this.styles = getAttributeFn(slide, 'style') || '';
            },

            componentUnMount() {
                CustomSlider.unsubscribe(STATUS_UPDATE_EVENTS).unsubscribe(STYLE_RESTORE_EVENTS).unsubscribe('click', slide);
                removeClassFn(slide, values(STATUS_CLASSES));
                restoreStyles();
            },


            update() {
                update(this.isActive(), false);
                update(this.isVisible(), true);
            },


            isActive() {
                return CustomSlider.index === index;
            },


            isVisible() {
                const active = this.isActive();

                if (CustomSlider.is(FADE) || active) {
                    return active;
                }

                const {ceil} = Math;
                const w1Rect = getRect(CustomSlider.Components.SliderElements.w1);
                const slideRect = getRect(slide);

                return w1Rect.left <= slideRect.left && slideRect.right <= ceil(w1Rect.right);
            },


            isWithin(from, within) {
                let diff = Math.abs(from - index);

                if (!CustomSlider.is(SLIDE) && !this.isClone) {
                    diff = Math.min(diff, CustomSlider.length - diff);
                }

                return diff < within;
            },
        };

        function update(active, forVisibility) {
            const type = forVisibility ? 'visible' : 'active';
            const className = STATUS_CLASSES[type];

            setAttributeFn(slide, 'aria-role', 'group');

            if (active) {
                addClassFn(slide, className);
                setAttributeFn(slide, ARIA_HIDDEN, false);
                setAttributeFn(slide, 'tabindex', 0);
                CustomSlider.publish(`${type}`, Slide);
            } else {
                if (hasClass(slide, className)) {
                    removeClassFn(slide, className);
                    removeClassFn(slide, '');
                    setAttributeFn(slide, ARIA_HIDDEN, true);
                    setAttributeFn(slide, 'tabindex', -1);
                    CustomSlider.publish(`${forVisibility ? 'hidden' : 'inactive'}`, Slide);
                }
            }
        }

        function restoreStyles() {
            setAttributeFn(slide, 'style', Slide.styles);
        }

        return Slide;
    };
    // slider element
    const SliderElements = (CustomSlider, Components) => {

        const topElement = CustomSlider.topElement;

        const classes = CustomSlider.classes;

        let Slides = [];

        const SliderElements = {

            componentWillMount() {
                this.componentInitialized()	;

                CustomSlider
                    .subscribe('component_refresh', () => {
                        this.componentUnMount();
                        this.componentInitialized()	;
                    }).subscribe('component_updated', () => {
                    removeClassFn(topElement, getClasses());
                    addClassFn(topElement, getClasses());
                });
            },


            componentUnMount() {
                Slides.forEach(Slide => {
                    Slide.componentUnMount();
                });
                Slides = [];
                removeClassFn(topElement, getClasses());
            },


            componentInitialized()	 {
                collect();
                addClassFn(topElement, getClasses());

                this.slides.forEach((slide, index) => {
                    this.register(slide, index, -1);
                });
            },


            register(slide, index, realIndex) {
                const SlideObject = Slide(CustomSlider, index, realIndex, slide);
                SlideObject.componentWillMount();
                Slides.push(SlideObject);
            },


            getSlide(index) {
                return Slides.filter(Slide => Slide.index === index)[0];
            },


            getSlides(includeClones) {
                return includeClones ? Slides : Slides.filter(Slide => !Slide.isClone);
            },

            each(callback) {
                Slides.forEach(callback);
            },


            get length() {
                return this.slides.length;
            },


            get total() {
                return Slides.length;
            },
        };


        function collect() {
            SliderElements.w1 = findFn(topElement, `.${classes.w1}`);
            SliderElements.ls = childFn(SliderElements.w1, classes.ls);

            exist(SliderElements.w1 && SliderElements.ls, 'Slider list not found');

            SliderElements.slides = childrenFn(SliderElements.ls, classes.slide);

            const arrows = findParts(classes.arrows);
            SliderElements.arrows = {
                prev: findFn(arrows, `.${classes.prev}`),
                next: findFn(arrows, `.${classes.next}`),
            };

            SliderElements.w1.id = SliderElements.w1.id || `${topElement.id}rh08sliderw1`;
            SliderElements.ls.id = SliderElements.ls.id || `${topElement.id}rh08sliderw2`;
        }


        function getClasses() {
            const options = CustomSlider.options;

            return [
                `rh08t-${options.type}`,
            ];
        }

        function findParts(className) {
            return childFn(topElement, className);
        }

        return SliderElements;
    };

    const Horizontal = (CustomSlider, Components) => {
        const SliderElements = Components.SliderElements;
        const topElement = CustomSlider.topElement;
        let w1;
        let options = CustomSlider.options;

        return {
            componentInitialized()	 {
                this.resize();
            },

            resize() {
                options = CustomSlider.options;
                w1 = SliderElements.w1;
                this.gap = toPixel(topElement, 0);
                const padding = 0;
                const left = toPixel(topElement, padding.left || padding);
                const right = toPixel(topElement, padding.right || padding);
                this.padding = {left, right};
                applyStyle(w1, {paddingLeft: unit(left), paddingRight: unit(right)});
            },

            getTotalWidth(index = CustomSlider.length - 1) {
                const Slide = SliderElements.getSlide(index);
                let width = 0;

                if (Slide) {
                    const slideRect = getRect(Slide.slide);
                    const listRect = getRect(SliderElements.ls);
                    width = slideRect.right - listRect.left;
                    width += this.gap;
                }

                return width;
            },

            getSlideWidth() {
                const width =  ((this.width + this.gap) / 1) - this.gap;
                return toPixel(topElement, width);
            },

            get width() {
                return w1.clientWidth - this.padding.left - this.padding.right;
            },
        };
    };
    // slider layout
    const SliderLayout = (CustomSlider, Components) => {

        const SliderElements = Components.SliderElements;
        const SliderLayout = assign({
            componentWillMount() {
                addEventListeners();
                componentInitialized()	;

                this.totalSize = this.getTotalWidth;
                this.slideSize = this.getSlideWidth;
            },

            componentUnMount() {
                removeAttribute([SliderElements.ls, SliderElements.w1], 'style');
            },


            get size() {
                return this.width;
            },
        }, Horizontal(CustomSlider, Components));

        function componentInitialized()	 {
            SliderLayout.componentInitialized()	;

            applyStyle(CustomSlider.topElement, {maxWidth: unit(0)});
            SliderElements.each(Slide => {
                Slide.slide.style['marginRight'] = unit(SliderLayout.gap);
            });
            if(CustomSlider.options.type === SLIDE){
                resize();
            }
        }

        function addEventListeners() {
            CustomSlider
                .subscribe('resize load', throttle(() => {
                    CustomSlider.publish('resize');
                }, CustomSlider.options.throttle), window)
                .subscribe('resize', resize)
                .subscribe('component_updated component_refresh', componentInitialized	);
        }

        function resize() {
            SliderLayout.resize();
            applyStyle(SliderElements.Navigation, {height: unit(0)});
            SliderElements.each(Slide => {
                applyStyle(Slide.slide, {
                    width:  unit(SliderLayout.getSlideWidth(Slide.index)),
                });

            });

            CustomSlider.publish('component_resized');
        }

        return SliderLayout;
    };

    // pill component
    const Pills = (CustomSlider, Components, name) => {

        let data = {};
        const SliderElements = Components.SliderElements;

        const Pills = {

            componentWillMount() {
                const pills = CustomSlider.options.pills;
                const autoplay = CustomSlider.options.autoplay;

                if (pills) {
                    data = createPills();
                    if (autoplay) {
                        const pauseBtn = createPauseButton();
                        append(data.ls, pauseBtn);
                    }

                    const parent =  CustomSlider.topElement;
                    append(parent, data.ls);

                    CustomSlider.subscribe(ATTRIBUTES_UPDATE_EVENT, function(index, lastIndex){
                        if(!CustomSlider.options.requiredFadeInClass){
                            updateAttributes(index, lastIndex);
                        }
                    });
                    CustomSlider.subscribe(PILLS_ATTRIBUTES_UPDATE_EVENT, updateAttributes);
                }

                CustomSlider
                    .unsubscribe(UPDATE_EVENT)
                    .subscribe(UPDATE_EVENT, () => {
                        Pills.componentUnMount();

                        if (CustomSlider.options.pills) {
                            Pills.componentWillMount();
                            Pills.componentDidMount();
                        }
                    });
            },

            componentDidMount() {
                if (CustomSlider.options.pills) {
                    const index = CustomSlider.index;
                    CustomSlider.publish(`${name}:component_mounted`, data, this.getItem(index));
                    updateAttributes(index, -1);
                }
            },

            componentUnMount() {
                removeFn(data.ls);

                if (data.items) {
                    data.items.forEach(item => {
                        CustomSlider.unsubscribe('click', item.button);
                    });
                }

                CustomSlider.unsubscribe(ATTRIBUTES_UPDATE_EVENT);

                data = {};
            },

            getItem(index) {
                return data.items[Components.ControlManager.toPage(index)];
            },


            get data() {
                return data;
            },
        };

        function updateAttributes(index, lastIndex) {
            const prev = Pills.getItem(lastIndex);
            const curr = Pills.getItem(index);
            const active = STATUS_CLASSES.active;

            if (prev) {
                removeClassFn(prev.li, active);
                removeAttribute(prev.button, ARIA_CURRENT);
            }

            if (curr) {
                addClassFn(curr.li, active);
                setAttributeFn(curr.button, ARIA_CURRENT, true);
            }

            CustomSlider.publish(`${name}:component_updated`, data, prev, curr);
        }

        function createPauseButton() {
            const classes = CustomSlider.classes;
            const wrapper = create('div', {class: classes.pauseBtnWrapper});
            const $button = create('button', {class: classes.pauseBtnCls, [ARIA_LIVE]: POLITE,tabindex:"0", "data-lbl":"pause", "title":PAUSE_TEXT});
            const $i = create('i', {
                class:'paused'
            });

            // const iTag = create('i', {class: 'icn-img icn-pause'});
            const buttonText=create('span',{});
            setAttributeFn($button, 'data-play', PLAY_TEXT);
            setAttributeFn($button, 'data-Pause', PAUSE_TEXT);

            buttonText.innerHTML = CustomSlider.options.hasPauseClass ? PLAY_TEXT : PAUSE_TEXT;
            addClassFn($i, classes.pauseBtn);
            CustomSlider.options.hasPauseClass ? removeClassFn($i, 'paused') : addClassFn($i, 'paused');
            CustomSlider.options.hasPauseClass ? setAttributeFn($button, ARIA_LABEL, PLAY_ARIA_LABEL) : setAttributeFn($button, ARIA_LABEL, PAUSE_ARIA_LABEL);
            CustomSlider.options.hasPauseClass ? addClassFn($i, [classes.pause]) : null;
            append($button, $i);
            append($button, buttonText);
            append(wrapper, $button);

            const pauseButtonClicked = () => {
                removeClassFn($i, 'paused');
                addClassFn($i, classes.pause);
                CustomSlider.Components.AutoRotate.pause(3);
                buttonText.innerHTML = getAttributeFn($button, 'data-Play');
                setAttributeFn($button, ARIA_LABEL, PLAY_ARIA_LABEL);
                setTimeout(()=>{ setAttributeFn($button, "data-lbl", "play");
                    setAttributeFn($button, "title", PLAY_TEXT);},10)
            };
            const playButtonClicked = () => {
                addClassFn($i, 'paused');
                removeClassFn($i, classes.pause);

                // removeClassFn(iTag, 'icn-play');
                CustomSlider.Components.AutoRotate.play(3);
                setAttributeFn($button, ARIA_LABEL, PAUSE_ARIA_LABEL);
                setTimeout(()=>{ setAttributeFn($button, "data-lbl", "pause");setAttributeFn($button, "title", PAUSE_TEXT);},10)
                buttonText.innerHTML = getAttributeFn($button, 'data-Pause');
            };
            CustomSlider.subscribe(`paused_slider`, () => {
                removeAttribute([$i.parentElement],ARIA_LIVE);
                if(!hasClass($i, classes.pause)){
                    pauseButtonClicked();
                }
            });
            CustomSlider.subscribe(`play_slider`, () => {
                if(hasClass($i, classes.pause)){
                    playButtonClicked();
                }
            });
            CustomSlider.subscribe('click', () => {
                setAttributeFn($i.parentElement,ARIA_LIVE,POLITE);
                if (hasClass($i, classes.pause)) {
                    document.querySelector(`.${CustomSlider.options.rtl?classes.prev:classes.next}`).click();
                    playButtonClicked();
                } else {
                    pauseButtonClicked();
                }
                // setTimeout(()=>$button.blur(),500);
            }, $button);
            return wrapper;
        }
        function createPills() {
            const classes = CustomSlider.classes;
            const ls = create('ul', {class: classes.pills});
            const wrapper = create('div', {class: classes.pillsWrapper,
                'data-trackas':"pills"});

            const items = SliderElements.getSlides(false)
                .filter(Slide =>  Slide.index % 1 === 0)
                .map((Slide, page) => {
                    const li = create('li', {class: classes.pillsItem});
                    const button = create('button', {
                        class: classes.pillsButton,
                        type: 'button',
                        title: `Slide ${page + 1}`,
                        "data-lbl":`view-slide-${page + 1}`
                    });
                    const span = create('span', {});
                    span.innerHTML = `Slide ${page + 1}`;
                    append(button, span);
                    append(li, button);
                    append(ls, li);
                    append(wrapper, ls);
                    CustomSlider.subscribe('click', (e) => {
                        // e.stopPropagation();
                        // e.stopImmediatePropagation()
                        if (page === CustomSlider._intialIndex) return;


                        if (CustomSlider.options.requiredFadeInClass) {
                            if (clickDisabled)
                                return;
                            clickDisabled = true;
                            setTimeout(function () {
                                clickDisabled = false;
                            }, IMAGE_FADE_DURATION + TEXT_FADE_OUT_DURATION);
                            const callbackFn = (index)=>{
                                CustomSlider.proceed(`>${index}`);
                                CustomSlider.publish('announce_slide');
                            };
                            CustomSlider.publish(`paused_slider`);
                            removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked);
                            removeClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked);
                            CustomSlider._intialIndex > page ? addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navPrevClicked) : addClassFn(document.querySelector("#rh08"),CustomSlider.options.classes.navNextClicked);
                            CustomSlider.publish('pills_clicked', page, CustomSlider._intialIndex,callbackFn.bind(this,page));

                        } else {
                            removeCssOpacity(page);
                            CustomSlider.proceed(`>${page}`);
                        }

                    }, button);
                    return {li, button, page};
                });

            return {ls: wrapper, items};
        }

        return Pills;
    };

    const Navigation = (CustomSlider, Components) => {
        let SliderLayout;
        let SliderElements;
        let ls;
        const isFade = CustomSlider.is(FADE);
        const sign = CustomSlider.options.rtl ? 1 : -1;
        const Navigation = {
            sign,
            componentWillMount() {
                SliderElements = Components.SliderElements;
                SliderLayout = Components.SliderLayout;
                ls = SliderElements.ls;
            },

            componentDidMount() {
                if (!isFade) {
                    this.moveToIndex(0);
                    CustomSlider.subscribe('component_mounted resize component_updated', () => {
                        this.moveToIndex(CustomSlider.index);
                    });
                }
            },

            proceed(endIndex, nextIndex) {
                const newPosition = getTrimmedPosition(endIndex);
                const lastIndex = CustomSlider.index;

                CustomSlider.publish('component_move', nextIndex, lastIndex, endIndex);

                if (Math.abs(newPosition - this.position) >= 1 || isFade) {
                    if (CustomSlider.options.requiredFadeInClass) {
                        Components.Transition.start(endIndex, nextIndex, lastIndex, this.getCoordinate(newPosition), () => {
                            done(endIndex, nextIndex, lastIndex, false);
                        });
                    } else {
                        Components.Transition.start(endIndex, nextIndex, lastIndex, this.getCoordinate(newPosition), () => {
                            done(endIndex, nextIndex, lastIndex, false);
                        });
                    }
                } else {
                    if (endIndex !== lastIndex) {
                        Components.ControlManager.proceed(endIndex + endIndex - lastIndex, false);
                    } else {
                        done(endIndex, nextIndex, lastIndex, false);
                    }
                }
            },

            moveToIndex(index) {
                this.moveXDirection(getTrimmedPosition(index));
            },

            moveXDirection(position) {
                applyStyle(ls, {transform: `translateX(${position}px)`});
            },

            cancel() {
                this.moveXDirection(this.position);
                applyStyle(ls, {transition: ''});
            },

            getActualIndex(position) {
                const edge = sign * (SliderLayout.totalSize() - SliderLayout.size - SliderLayout.gap);
                return between(position, edge, 0);
            },

            toIndex(position) {
                let index = 0;
                let minDistance = Infinity;

                SliderElements.getSlides(true).forEach(Slide => {
                    const slideIndex = Slide.index;
                    const distance = abs(this.toPosition(slideIndex) - position);

                    if (distance < minDistance) {
                        minDistance = distance;
                        index = slideIndex;
                    }
                });

                return index;
            },

            getCoordinate(xCoordinate) {
                return {
                    x: xCoordinate,
                    y: 0,
                };
            },

            toPosition(index) {
                const position = SliderLayout.totalSize(index) - SliderLayout.slideSize(index) - SliderLayout.gap;
                return sign * (position);
            },

            get position() {
                const prop = CustomSlider.options.rtl ? 'right' : 'left';
                return getRect(ls)[prop] - (getRect(SliderElements.w1)[prop] - SliderLayout.padding[prop] * sign);
            },
        };

        function done(endIndex, nextIndex, lastIndex) {
            applyStyle(ls, {transition: ''});
            if (!isFade) {
                Navigation.moveToIndex(nextIndex);
            }
            CustomSlider.publish('component_moved', nextIndex, lastIndex, endIndex);
        }

        function getTrimmedPosition(index) {
            return Navigation.getActualIndex(Navigation.toPosition(index));
        }

        return Navigation;
    };

    const FULL_OBJECT = {
        ControlManager,
        SliderElements,
        Navigation,
        SliderLayout,
        DragHandler,
        ClickHandler                                             ,
        AutoRotate,
        NavigationArrows,
        Pills,
        KeyboardInteraction,
        MouseHoverHandler,
        SlideAnnouncer
    };
    // base core class
    class BaseClass {
        constructor(topElement, options = {}, Components = {}) {
            this.topElement = topElement instanceof Element ? topElement : document.querySelector(topElement);
            exist(this.topElement, 'Invalid Selector');

            this.Components = null;
            this.EventHandler = EventHandler();
            this.ManageState = ManageState(SLIDER_STATES.SLIDE_CREATED);
            this._option = merge(DEFAULT_PROPS, options);
            const randomize = document.querySelector('.rh08').getAttribute('data-randomize');
            this._intialIndex = randomize ? randomIntFromInterval(0,len -1): 0;
            this._components = Components;
        }

        componentWillMount() {
            // Reset the state.
            this.ManageState.set(SLIDER_STATES.SLIDE_CREATED);
            this.Components = combineAllObj(this, merge(this._components, {}), null);

            try {
                each(this.Components, (component, key) => {
                    const required = component.required;

                    if (required === undefined || required) {
                        component.componentWillMount && component.componentWillMount();
                    } else {
                        delete this.Components[key];
                    }
                });
            } catch (e) {
                error(e.message);
                return;
            }

            const {ManageState} = this;
            ManageState.set(SLIDER_STATES.SLIDE_MOUNTED);

            each(this.Components, component => {
                component.componentDidMount && component.componentDidMount();
            });

            this.publish('component_mounted');
            ManageState.set(SLIDER_STATES.SLIDE_IDLE);
            this.publish('ready');

            applyStyle(this.topElement, {visibility: 'visible'});

            this
                .subscribe('component_move component_drag', () => ManageState.set(SLIDER_STATES.SLIDE_MOVING))
                .subscribe('component_moved component_dragged', () => ManageState.set(SLIDER_STATES.SLIDE_IDLE));

            return this;
        }

        subscribe(events, handler, elm = null, options = {}) {
            this.EventHandler.subscribe(events, handler, elm, options);
            return this;
        }

        unsubscribe(events, elm = null) {
            this.EventHandler.unsubscribe(events, elm);
            return this;
        }

        publish(event, ...args) {
            this.EventHandler.publish(event, ...args);
            return this;
        }

        proceed(control, wait = this.options.waitForTransition) {
            if (this.ManageState.is(SLIDER_STATES.SLIDE_IDLE) || (this.ManageState.is(SLIDER_STATES.SLIDE_MOVING) && !wait)) {
                this.Components.ControlManager.proceed(control, false);
            }

            return this;
        }

        is(type) {
            return type === this._option.type;
        }

        componentUnMount(completely = true) {
            if (this.ManageState.is(SLIDER_STATES.SLIDE_CREATED)) {
                this.subscribe('ready', () => this.componentUnMount(completely));
                return;
            }

            values(this.Components).reverse().forEach(component => {
                component.componentUnMount && component.componentUnMount(completely);
            });

            this.publish('componentUnMount', completely);

            this.EventHandler.componentUnMount();
            this.ManageState.set(SLIDER_STATES.SLIDE_DESTROYED);

            return this;
        }

        get index() {
            return this._intialIndex;
        }

        set index(index) {
            this._intialIndex = parseInt(index);
        }

        get length() {
            return this.Components.SliderElements.length;
        }

        get options() {
            return this._option;
        }

        set options(options) {
            const created = this.ManageState.is(SLIDER_STATES.SLIDE_CREATED);

            if (!created) {
                this.publish('component_update');
            }

            this._option = merge(this._option, options);

            if (!created) {
                this.publish('component_updated', this._option);
            }
        }

        get classes() {
            return this._option.classes;
        }

    }
    // custom slider
    class CustomSlider extends BaseClass {
        constructor(topElement, options) {
            super(topElement, options, FULL_OBJECT);
        }
    }

    window.CustomSlider = CustomSlider;

    const autoRotate = document.querySelector('.rh08').getAttribute('data-autorotate');
    window.customSlider = null;
    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    var len = document.querySelectorAll('.rh08slide').length;
    const randomize = document.querySelector('.rh08').getAttribute('data-randomize');
    var fadeObject = {
            type: 'fade',
            autoplay: !!(autoRotate && parseInt(autoRotate) > 0),
            interval: autoRotate && parseInt(autoRotate) > 0 ? parseInt(autoRotate) * 1000 : 0,
            transitionDelayBetweenSlide: FADE_SLIDE_SPEED,
            requiredFadeInClass: true,
            hasPauseClass: hasPauseClass,
            start: randomize ? randomIntFromInterval(0,len -1) :0,
            pills: len > 1,
            parentElementOpacityRequired: false,
            throttle:IMAGE_FADE_DURATION/2,
            arrows: false,
            rtl: hasClass(document.body, 'rtl')
        },
        slideObject = {
            type: 'slide',
            autoplay: !!(autoRotate && parseInt(autoRotate) > 0) && false,
            interval: autoRotate && parseInt(autoRotate) > 0 ? parseInt(autoRotate) * 1000 : 0,
            transitionDelayBetweenSlide: 0,
            speed: SLIDE_TRANSITION_SPEED,
            requiredFadeInClass: false,
            parentElementOpacityRequired: false,
            arrows: false,
            throttle:100,
            pills: len > 1,
            rtl: hasClass(document.body, 'rtl')
        };

    function isChange(innerWidth) {
        let currentWidth = innerWidth;
        return !(previousWidth !== -1 && (previousWidth < CHANGE_SLIDER_BREAK_POINT && currentWidth < CHANGE_SLIDER_BREAK_POINT) || (previousWidth > CHANGE_SLIDER_BREAK_POINT && currentWidth > CHANGE_SLIDER_BREAK_POINT));
    }

    function createSlider(obj) {
        if (!isSliderObjectCreated) {
            window.customSlider = new CustomSlider('#rh08', obj).componentWillMount();
        }
    }

    function moveOverlayToSliderContainer() {
        var $elm = document.querySelector('.cwidth > .bgimgw1');
        if($elm) {
            var $cloneOverlay = $elm.cloneNode(true);
            // $elm.parentNode.removeChild($elm);
            $elm.style.display ='none'
            $cloneOverlay.style.display ='none'
            document.querySelector('.rh08sliderw1').prepend($cloneOverlay)
        }
    }

    function moveBackgroundImageOutsideSliderContainer() {
        var $elm = document.querySelector('.cwidth > .bgimgw1');
        $elm.style.display = "block";
        var $elms = document.querySelectorAll('.rh08sliderw1 > .bgimgw1')
        $elms.forEach(function ($el){
            $el.parentNode.removeChild($el);
        })
    }

    function componentInitialized()	 {
        const innerWidth = window.innerWidth;
        if (isChange(innerWidth)) {
            // mobile
            if (innerWidth < CHANGE_SLIDER_BREAK_POINT) {
                if (isSliderObjectCreated) {
                    hasPauseClass = hasClass(document.querySelector('.rh08-pausebtn'), 'rh08-paused') || false;
                    if(window.customSlider) {
                        let index = window.customSlider._intialIndex || 0;
                        window.customSlider.Components.SliderElements.componentUnMount();
                        window.customSlider.options = {...slideObject, start: index, hasPauseClass: hasPauseClass};
                        window.customSlider.componentUnMount();
                        window.customSlider.componentWillMount();
                        window.customSlider.EventHandler.publish('component_moved', 0);

                        if (backgroundImageWidth !== 0) {
                            slideTextureImage(index);
                        } else {
                            getBackgroundSizeFn(document.querySelector(".rh08sliderw1 .bg-texture2"), onImageLoad);
                        }
                    }
                } else {
                    createSlider({...slideObject, start: 0, hasPauseClass: false});
                    if (window.customSlider) {
                        window.customSlider.EventHandler.publish('component_moved', 0);
                    }
                }
                moveOverlayToSliderContainer();
            } else {
                // desktop
                if (isSliderObjectCreated) {
                    if(window.customSlider) {
                        let index = window.customSlider._intialIndex || 0;
                        window.customSlider.Components.SliderElements.componentUnMount();
                        window.customSlider.options = {
                            ...fadeObject,
                            start: index,
                            hasPauseClass: hasPauseClass,
                            arrows: true
                        };
                        window.customSlider.componentUnMount();
                        window.customSlider.componentWillMount();
                    }
                    applyStyle(document.querySelector(".bg-texture2"), {
                        transition: `background-position-x ${0}ms`,
                        backgroundPositionX: `0px`,
                    });
                    if (window.customSlider) {
                        bindFadeSliderEvent(window.customSlider);
                        removeOpacityOfAllSlide();
                        window.customSlider.EventHandler.publish('component_moved', 0);
                        hasPauseClass ? window.customSlider.Components.AutoRotate.pause(3) : null;
                    }
                } else {
                    createSlider({...fadeObject, start: 0, hasPauseClass: false, arrows: true});
                    if (window.customSlider) {
                        bindFadeSliderEvent(window.customSlider);
                        window.customSlider.EventHandler.publish('component_moved', 0);
                    }
                }
                moveBackgroundImageOutsideSliderContainer();
            }
        }
        isSliderObjectCreated = true;
        hideAndShowNavigation(innerWidth);
        if (innerWidth !== previousWidth) {
            getBackgroundSizeFn(document.querySelector(".rh08slide.slick-active .rh02-img"), onActiveImageLoad);
        }
        previousWidth = innerWidth;

    }
    // resize event listener

    window.addEventListener("resize", throttle(function (e) {
        componentInitialized()	;
    },300));

    function onImageLoad(e) {
        let image = e.target;
        backgroundImageWidth = image.width;
        if(window.customSlider) {
            let index = window.customSlider._intialIndex || 0;
            slideTextureImage(index);
        }
    }
    // active image load
    function onActiveImageLoad(e) {
        var offsetHeight = document.querySelector(".rh08slide.slick-active .rh02-img").offsetHeight;
        var  recheck =  false;
        var slides = document.querySelectorAll(".rh08slide")
        var slideLen = document.querySelectorAll(".rh08slide").length;
        for (var i = 0; i < slideLen; i++) {
            var img = slides[i].querySelector('.rh08logo img');
            if(img) {
                recheck = !img.offsetHeight;
            }
        }
        if(offsetHeight === 0 ||  recheck){
            setTimeout(()=>{
                onActiveImageLoad()
            },300)
        }else {
            window.customSlider && setHeight(window.customSlider)
        }

    }

    function slideTextureImage(index) {
        const width = backgroundImageWidth - window.customSlider.Components.SliderLayout.getSlideWidth(0);
        let distance = -1 * (width / (window.customSlider.length)) * index;
        applyStyle(document.querySelector(".rh08sliderw1 .bg-texture2"), {
            transition: `background-position-x ${500}ms`,
            backgroundPositionX: `${distance}px`,
        });
    }
    // set height
    function setHeight(customSlider) {
        var innerWidth = window.innerWidth;
        customSlider.Components.SliderElements.getSlides(false).forEach((item) => {
            item.slide.querySelector('.rh02txt').setAttribute("style", `height:auto`);
        });
        let max = 0,
            maxWidth= 0
        customSlider.Components.SliderElements.getSlides(false).forEach((item, i) => {
            item.slide.querySelector('.rh08body .obttns').style.display = 'flex';
            max = Math.max(max, item.slide.querySelector('.rh02txt').clientHeight);
            maxWidth = Math.max(maxWidth, item.slide.querySelector('.rh02txt').clientWidth);
            if (innerWidth > CHANGE_SLIDER_BREAK_POINT) {
                item.slide.querySelector('.rh08body .obttns').style.display = 'none';
            }
        });
        max = `${max}px`;
        maxWidth = `${maxWidth}px`;
        // if (innerWidth < CHANGE_SLIDER_BREAK_POINT) {
        //   let $slider = document.querySelector('#rh08');
        //   let $img = document.querySelector('.rh02-img ');
        //   let sliderHeight = $slider && $slider.offsetHeight;
        //   let imgHeight = $img && $img.offsetHeight;
        //   let diff = sliderHeight - (imgHeight + max);
        //   max = `${max}px`;
        // } else if (max === MIN_HEIGHT_WHITE_BOX_DESKTOP && innerWidth <= MIN_WIDTH_SLIDER_DESKTOP_BREAK_POINT) {
        //   max = 'calc(-22.4489795918vw + 678.8775510204px)';
        // } else {
        //   max = `${max}px`;
        // }


        customSlider.Components.SliderElements.getSlides(false).forEach((item) => {
            applyStyle(item.slide.querySelector('.rh02txt'),{
                height:`${max}`,
                'min-width':`${maxWidth}`,
            });
            //item.slide.querySelector('.rh02txt').setAttribute("style", `height:${max}`);
        });
    }

    function bindFadeSliderEvent(customSlider) {
        if (customSlider) {
            function fadeInText(elm) {
                addClassFn(elm,window.customSlider._option.classes.fadeInTextWithLargeDelay)
            }

            function fadeInWhiteBoxText(index){
                fadeInText(window.customSlider.Components.SliderElements.slides[index].querySelector('.rh08w5'));
            }

            function fadeInImageRight(elm,callback,index) {
                addClassFn(elm,window.customSlider._option.classes.fadeInRightImgWithDelay)
                callback();
            }

            function fadeInImageLeft(elm,callback) {
                addClassFn(elm,window.customSlider._option.classes.fadeInLeftImgWithDelay)
                callback();
            }


            function fadeOutImageLeft(elm,page) {
                let control = '';
                if (window.customSlider._intialIndex < window.customSlider.length - 1) {
                    control = '>';
                } else {
                    control = '>0';
                }
                control = page || page === 0 ? `>${page}` : control;
                const endIndex = window.customSlider.Components.ControlManager.getActualIndex(window.customSlider.Components.ControlManager.parse(control));
                window.customSlider.publish(PILLS_ATTRIBUTES_UPDATE_EVENT, endIndex, window.customSlider._intialIndex);
                addClassFn(elm, window.customSlider._option.classes.fadeOutLeftImage);
                setTimeout(() => {removeClassFn(elm, window.customSlider._option.classes.fadeOutLeftImage);},IMAGE_FADE_DURATION*1.5)
                window.customSlider.Components.SliderElements.getSlide(endIndex).slide.style.opacity = '1';
                if (hasClass(document.querySelector('#rh08'), window.customSlider._option.classes.navNextClicked)) {
                    fadeInImageRight(window.customSlider.Components.SliderElements.slides[endIndex].querySelector('.rh02-img'), fadeInWhiteBoxText.bind(this, endIndex), endIndex);
                } else if (hasClass(document.querySelector('#rh08'), window.customSlider._option.classes.navPrevClicked)) {
                    fadeInImageLeft(window.customSlider.Components.SliderElements.slides[endIndex].querySelector('.rh02-img'), fadeInWhiteBoxText.bind(this, endIndex), endIndex);
                } else {
                    fadeInImageRight(window.customSlider.Components.SliderElements.slides[endIndex].querySelector('.rh02-img'), fadeInWhiteBoxText.bind(this, endIndex), endIndex);
                }

            }

            function fadeOutImageRight(elm,page) {
                let control = '';
                if (window.customSlider._intialIndex === 0) {
                    control = `<${ window.customSlider.length - 1}`;
                } else {
                    control = '<';
                }

                control = page || page === 0 ? `>${page}` : control;
                const endIndex = window.customSlider.Components.ControlManager.getActualIndex(window.customSlider.Components.ControlManager.parse(control));
                window.customSlider.publish(PILLS_ATTRIBUTES_UPDATE_EVENT, endIndex, window.customSlider._intialIndex);

                addClassFn(elm, window.customSlider._option.classes.fadeOutRightImage);
                setTimeout(() => {removeClassFn(elm, window.customSlider._option.classes.fadeOutRightImage);},IMAGE_FADE_DURATION*1.5)
                window.customSlider.Components.SliderElements.getSlide(endIndex).slide.style.opacity = '1';
                if(hasClass(document.querySelector('#rh08'),window.customSlider._option.classes.navNextClicked)){
                    fadeInImageRight(window.customSlider.Components.SliderElements.slides[endIndex].querySelector('.rh02-img'),fadeInWhiteBoxText.bind(this,endIndex));
                }if(hasClass(document.querySelector('#rh08'),window.customSlider._option.classes.navPrevClicked)) {
                    fadeInImageLeft(window.customSlider.Components.SliderElements.slides[endIndex].querySelector('.rh02-img'), fadeInWhiteBoxText.bind(this, endIndex));
                }

            }

            function fadeOutText(elm,callback) {
                addClassFn(elm,window.customSlider._option.classes.fadeOutText);
                setTimeout(()=>{
                    callback();
                },IMAGE_FADE_DURATION)

                setTimeout(() => {removeClassFn(elm, window.customSlider._option.classes.fadeOutText);},IMAGE_FADE_DURATION*1.5)

            }

            function fadeOutWhiteBoxText(callback){
                let i = window.customSlider._intialIndex;
                fadeOutText(window.customSlider.Components.SliderElements.slides[i].querySelector('.rh08w5'),callback);
            }

            // eslint-disable-next-line no-inner-declarations
            function addAndRemoveFadeClass(isFadeOutRightImg,callback,page) {
                if (window.customSlider) {
                    let i = window.customSlider._intialIndex;
                    let elm = window.customSlider.Components.SliderElements.slides[i].querySelector('.rh02-img')
                    let whiteBoxElem = window.customSlider.Components.SliderElements.slides[i].querySelector('.rh08w5')

                    // remove classes
                    removeClassFn(elm,window.customSlider._option.classes.fadeInRightImgWithDelay);
                    removeClassFn(elm,window.customSlider._option.classes.fadeInRightImage);
                    removeClassFn(elm,window.customSlider._option.classes.fadeInLeftImgWithDelay)
                    removeClassFn(whiteBoxElem,window.customSlider._option.classes.fadeInTextWithLargeDelay)
                    removeClassFn(whiteBoxElem,window.customSlider._option.classes.fadeInText)
                    //
                    if (isFadeOutRightImg) {
                        fadeOutImageRight(window.customSlider.Components.SliderElements.slides[i].querySelector('.rh02-img'),page);
                        fadeOutWhiteBoxText(callback);
                    } else {
                        fadeOutImageLeft(window.customSlider.Components.SliderElements.slides[i].querySelector('.rh02-img'),page);
                        fadeOutWhiteBoxText(callback);
                    }

                }
            }


            window.customSlider.EventHandler.subscribe('previous_nav_clicked', function (callback) {
                addAndRemoveFadeClass(true,callback);

            });
            window.customSlider.EventHandler.subscribe('next_nav_clicked', function (callback) {
                addAndRemoveFadeClass(false,callback);
            });
            window.customSlider.EventHandler.subscribe('component_swiped', function (endIndex,callback) {
                if (endIndex === -1) {
                    addAndRemoveFadeClass(true,callback,window.customSlider.length -1);
                } else if (endIndex > customSlider.length - 1) {
                    addAndRemoveFadeClass(false,callback,0);
                } else {
                    if (endIndex < window.customSlider._intialIndex) {
                        addAndRemoveFadeClass(true,callback,endIndex);
                    } else {
                        addAndRemoveFadeClass(false,callback,endIndex);
                    }
                }
            });
            window.customSlider.EventHandler.subscribe('auto_rotate_event', function (callback) {
                addAndRemoveFadeClass(false,callback);
            });
            window.customSlider.EventHandler.subscribe('pills_clicked', function (page, index,callback) {
                if (page < index) {
                    addAndRemoveFadeClass(true,callback,page);
                } else {
                    addAndRemoveFadeClass(false,callback,page);
                }
            });

        }
    }
    // hide and show navigation
    function hideAndShowNavigation(innerWidth) {
        if (innerWidth >= CHANGE_SLIDER_BREAK_POINT) {
            if (window.customSlider) {
                window.customSlider._option.arrows = true;
                window.customSlider.Components.NavigationArrows && window.customSlider.Components.NavigationArrows.componentUnMount();
                window.customSlider.Components.NavigationArrows && window.customSlider.Components.NavigationArrows.componentWillMount();
            }
        } else {
            if (window.customSlider) {
                window.customSlider._option.arrows = false;
                window.customSlider.Components.NavigationArrows && window.customSlider.Components.NavigationArrows.componentUnMount();
            }
        }
    }

    // remove opacity of all slides
    function removeOpacityOfAllSlide() {
        window.customSlider.Components.SliderElements.getSlides(false).forEach(function(elem,index){
            if(window.customSlider._intialIndex !==index){
                elem.slide.querySelector('.rh02-img').style.removeProperty('opacity')
                elem.slide.querySelector('.rh08w5').style.removeProperty('opacity');
            }
        })
    }
    // remove opacity from style tag
    function removeCssOpacity(slideNo) {
        window.customSlider.Components.SliderElements.getSlide(slideNo).slide.querySelector('.rh02-img').style.removeProperty('opacity');
        window.customSlider.Components.SliderElements.getSlide(slideNo).slide.querySelector('.rh08w5').style.removeProperty('opacity');
        window.customSlider.Components.SliderElements.getSlide(slideNo).slide.querySelector('.rh02-img').style.transform = 'translateX(0%)';
    }

    if (document.readyState !== 'loading') {
        componentInitialized()	;
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            componentInitialized();
        });
    }

    window.addEventListener("pageshow", (event) => {
        if (event.persisted) {
            window.location.reload();
        }
    });
}


/* CG14 */
$(document).on('click', 'a.sharelink', function(e) {
	e.preventDefault();

	var shareurl = window.location.href;

	if ( $(this).is("[data-esubject]") ) {
		if ($(this).attr('data-esubject').indexOf('%PAGETITLE%') > -1) {
			var sharetitle = document.title;
			var esubject = $(this).attr('data-esubject').replace(/%PAGETITLE%/g, sharetitle);
		}else {
			var esubject = $(this).attr('data-esubject');
		}
	}

	var ebody = $(this).attr('data-ebody');
		var ptcl = window.location.protocol+'//';
		var domain = window.location.host;

		if ($(this).is("[data-url]") && $(this).attr('data-url').indexOf('/') == 0){
				shareurl = ptcl+domain+ $(this).attr('data-url');
		}else if ($(this).is("[data-url]") && $(this).attr('data-url').indexOf('http') > -1){
				shareurl = $(this).attr('data-url');
		}else if ($(this).is("[data-url]") && $(this).attr('data-url').indexOf('//') > -1){
				shareurl = ptcl+ $(this).attr('data-url');
		}else if ($(this).is("[data-url]") && $(this).attr('data-url').indexOf('/') != 0){
				shareurl = document.location.href.replace(/\/[^\/]+$/,'') +'/'+ $(this).attr('data-url');
		}else if($(this).is("[data-url]")){
				shareurl = $(this).attr('data-url');
		}

	var shareln = 22;
	shareurl = encodeURIComponent(shareurl);

	if ($(this).attr('data-sharetype') == 'facebook') {
		window.open('https://www.facebook.com/sharer/sharer.php?u='+shareurl, 'fb-share', "height=300,width=400");
	}else if ($(this).attr('data-sharetype') == 'twitter') {
		var vialn	 = ($(this).is("[data-via]")) ? $(this).attr("data-via").length + 6 : 0;
		var viavar = ($(this).is("[data-via]")) ? "&via="+$(this).attr("data-via") : '';
		var textvar = '';
		if ($(this).is("[data-text]")){
			var textln	 = ($(this).is("[data-text]")) ? $(this).attr("data-text").length + 2 : 0;
			// truncate text if url/via/text are greater than 140 characters
			if((140 - (shareln + textln + vialn)) < 0){
				textvar = '&text='+$(this).attr("data-text").slice(0,(137 - (shareln + textln + vialn))) +'%E2%80%A6 %E2%80%93';
			}else{
				textvar = '&text='+$(this).attr("data-text") + ' %E2%80%93';
			}
		}
		window.open('https://twitter.com/share?url='+shareurl+viavar+textvar, 'twitter-share', "height=550,width=420");
	}else if ($(this).attr('data-sharetype') == 'linked-in') {
		window.open('http://www.linkedin.com/shareArticle?url='+shareurl, 'linkedin-share', "height=550,width=420");
	}else if ($(this).attr('data-sharetype') == 'weibo') {
		window.open('http://service.weibo.com/share/share.php?url='+shareurl, 'weibo-share', "height=620,width=900");
	}else if (($(this).attr('data-sharetype') == 'email') && $(this).is('[data-esubject]') && $(this).is('[data-ebody]')) {
		location.assign('mailto:?subject='+esubject+'&body='+ebody+'%0A%0A'+shareurl, 'email-share');

	}else if (($(this).attr('data-sharetype') == 'email') && $(this).is('[data-ebody]')) {
		location.assign('mailto:?&body='+ebody+'%0A%0A'+shareurl, 'email-share');

	}else if (($(this).attr('data-sharetype') == 'email') && $(this).is('[data-esubject]')) {
		location.assign('mailto:?subject='+esubject+'&body='+shareurl, 'email-share');

	}else if ($(this).attr('data-sharetype') == 'email') {
		location.assign('mailto:?body='+shareurl, 'email-share');
	}

});

/* share widget */
$(document).on('click', 'a.sharewidget', function(e) {
	
	e.preventDefault();

	if($("a.sharewidget").attr("aria-expanded") === "false"){
		$(this).attr("aria-expanded", "true");
		setTimeout(function() {
			$(".sharewidgetw2 a:first").focus();
		},500);
	} else {
		$(this).attr("aria-expanded", "false");
	}

	if($('.shareopen')[0]) {
		$('.shareopen').removeClass('shareopen');
		$('.sharewidgetw2').addClass('shareoc');
		setTimeout(function() {
			$('.shareoc').remove();
		},400);
	}

	var sharelink = $(this);
	var shareset = 'facebook,twitter,linked-in,email';

	if ($(this).is('[data-share]')){
		shareset = $(this).attr('data-share').replace(/ /gi,'');
	}

	var shareurl = '',
		shareurlhref = '';
	if ($(this).is('[data-url]')){
		shareurl = ' data-url="'+$(this).attr('data-url')+'"';
	} else if ($(this).attr('href').indexOf("#") !== 0) {
		shareurl = ' data-url="'+$(this).attr('href')+'"';
	}

	var sharecode = '';
	shareset = shareset.split(',');
	for (i = 0; i < shareset.length; ++i) {


		var esubj = '';
		if ($(this).is('[data-esubject]') && shareset[i] == 'email'){
			esubj = ' data-esubject="'+$(this).attr('data-esubject')+'"';
		}

		var ebody = '';
		if ($(this).is('[data-ebody]') && shareset[i] == 'email'){
			ebody = ' data-ebody="'+$(this).attr('data-ebody')+'"';
		}

		var viavar = ($(this).is("[data-via]") && shareset[i] == "twitter") ? ' data-via="'+$(this).attr("data-via") + '"' : '';
		var textvar = ($(this).is("[data-text]") && shareset[i] == "twitter") ? ' data-text="'+$(this).attr("data-text") + '"' : '';

		sharecode += '<span role="listitem"><a role="button" aria-label="'+shareset[i]+'" href="#" class="sharelink" data-sharetype="'+shareset[i]+'"'+shareurl+viavar+textvar+esubj+ebody+'><div class="icn-img icn-sicons icn-'+shareset[i]+'"><em>'+shareset[i]+'</em></div></a></span>';
	}

	if(!sharelink.next('.sharewidgetw2')[0]){

		if(!$(this).closest('.cmps-bttns')[0] && !$(this).closest('div.sharewidget')[0] && !$(this).closest('span.sharewidgetw1')[0]){
			$(this).wrapAll('<span class="sharewidgetw1"></span>');
		}

		if($(this).hasClass('rightshare')){
			$(this).closest('.cmps-share,div.sharewidget,span.sharewidgetw1').addClass('rightshare');
		}

		if($(this).hasClass('topshare')){
			$(this).closest('.cmps-share,div.sharewidget,span.sharewidgetw1').addClass('topshare');
		}

		if($(this).closest('.cmps-bttns')[0] || $(this).closest('div.sharewidget')[0] || $(this).closest('span.sharewidgetw1')[0]){
			$(this).closest('div').addClass('shareopen');
		}

		sharelink.after('<div class="sharewidgetw2 shareoc" role="list">'+sharecode+'<i></i></div>');
		setTimeout(function() {
			sharelink.next('.shareoc').removeClass('shareoc');
		},1);
	}


});

$(document).on('mousedown', function(e) {
	if(!$(e.target).closest('.sharewidgetw2')[0] && !$(e.target).closest('.sharewidget')[0]){
		if($('.shareopen')[0]) {
			$('.shareopen').removeClass('shareopen');
			$('.sharewidgetw2').addClass('shareoc');
			setTimeout(function() {
				$('.shareoc').remove();
			},400);
		}
	}
});


/* qr code pop up widget */
$(document).on('click', 'a.qrcode', function(e) {

	e.preventDefault();

	if($('.qropen')[0]) {
		$('.qropen').removeClass('qropen');
		$('.qrcodew2').addClass('qroc');
		setTimeout(function() {
			$('.qroc').remove();
		},400);
	}

	var qrlink = $(this);
	var imgpath = ($(qrlink).attr('data-qrcode'));
	var qroff = $(this).offset();

	if(!qrlink.next('.qrcodew2')[0]){

		if(!$(this).closest('.cmps-bttns')[0] && !$(this).closest('div.qrcode')[0] && !$(this).closest('span.qrcodew1')[0]){
			$(this).wrapAll('<span class="qrcodew1"></span>');
		}

		if($(this).closest('.cmps-bttns')[0] || $(this).closest('div.qrcode')[0] || $(this).closest('span.qrcodew1')[0]){
			$(this).closest('div').addClass('qropen');
		}

		qrlink.after('<div class="qrcodew2 qroc"><img class="" src="'+imgpath+'" alt="QR Code Image"></div>');
		setTimeout(function() {
			qrlink.next('.qroc').removeClass('qroc');
		},1);
		
		if (qroff.left < 26) {	
			qrlink.next('.qroc').css({left: 0, right: "auto"});
		}

	}
	return false;
});

$(document).on('mousedown', function(n) {
	if(!$(n.target).closest('.qrcodew2')[0] && !$(n.target).closest('.qrcode')[0]){
		if($('.qropen')[0]) {
			$('.qropen').removeClass('qropen');
			$('.qrcodew2').addClass('qroc');
			setTimeout(function() {
				$('.qroc').remove();
			},400);
		}
	}
});



/*! W11 - LIGHTBOX */
jQuery(document).ready(function($){
	'use strict';

	$('html').addClass('w11ready');

	var targets = [
				'a[rel^="lightBox"]',
				'a[rel^="LightBox"]',
				'a[rel^="lightbox"]',
				'a[rel^="Lightbox"]',
				'button[rel^="lightbox"]',
				'a[rel^="mbox"]',
				'a[class^="mbox-simple"]',
				'[data-lightbox]'
			],
			lbx = '',
			ajax = false,
			iframe = false,
			image = false,
			gallery = false,
			pathfactory = false,
			container = 'body',
			context = 'body',
			loc = window.location,
			cache = {},
			resizeTimeout = null,
			closeTimeout = null,
			observerTimeout = null,
			theme = 'dark',
			ltbxsize = 'lbdefault',
			ltbxclass = '',
			observer = null, config,
			content, hash,	ratio, maxW, maxH,
			originalTarget,
			aria = {"labelledby":"w11title","describedby":"w11desc"};

	$('a[rel^="lightbox"]').attr('role','button');

	$(document).on('click', targets.join(','), onLinkClicked);
	$(document).on('keydown', targets.join(','), onLinkKeyDown);

	openLightboxByQueryStr(); 

	function onModalKeyDown(e) {
        if (e.keyCode == 32) {
			e.preventDefault();
			$('.w11close').click();
		}
    }

    function onLinkKeyDown(e) {
        if (e.keyCode == 32) {
            e.preventDefault();
            $(this).trigger("click");
        }
    }

	//When opening countries list modal for U24 ACS, check if content is iframe or a form. If not, move close button above modal content to allow focus to be set to close icon first for A11Y
	document.addEventListener("click", function (event) {
		if (event.target.matches("[data-attr=countrieslist]")) {
			const iframe = document.querySelector(".iframe");
			if (!iframe) {
			  const button = document.querySelector(".w11close");
			  const w11content = document.querySelector(".w11initfocus");
			  w11content.insertBefore(button, w11content.firstChild);
			  w11content.focus();
			}
			//Override modal close button style to be visible within modal content on mobile
			if(window.innerWidth <= 896){
				document.querySelector(".w11close").style.color="#000";
				document.querySelector(".w11close").style.position="absolute";
			}
		}
	  });

	document.addEventListener("keydown", function (event) {
		const flagImage = document.querySelector("[data-attr=countrieslist]");
		if ((event.code === "Enter" || event.code === "Space") && document.activeElement === flagImage) {
			if (document.activeElement && document.activeElement.classList[1] === 'w11close') {
				return;
			}
			const iframe = document.querySelector(".iframe");
			if (!iframe) {
			  const button = document.querySelector(".w11close");
			  const w11content = document.querySelector(".w11initfocus");
			  w11content && w11content.insertBefore(button, w11content.firstChild);
			  w11content && w11content.focus();
			}
			//Override modal close button style to be visible within modal content on mobile
			if(window.innerWidth < 450){
				document.querySelector(".w11close").style.color="#000";
				document.querySelector(".w11close").style.position="absolute";
			}
		}
	  });
//

	function onLinkClicked(e) {

		var $a = $(this),
				href = this.href,
				modalInfo, type, w, h;

		e.preventDefault();

		// need to reset these every click!
		ajax = false;
		pathfactory = false;
		iframe = false;
		image = false;
		gallery = false;
		originalTarget = e.currentTarget;
		modalInfo = {
			"title": $a.attr("title"),
			"description": $a.attr("data-description"),
			"rc135": false
		};
		

		type = getLightboxType($a) || 'iframe';

		w = $a.data('width') || window.innerWidth * 0.8;
		h = $a.data('height') || window.innerHeight * 0.8;

		$(e.currentTarget).attr("aria-controls","w11");

		switch(type) {

			case 'image' :
				image = true;
				if(href && cache[href]) {
					lbx = cache[href];
					loadExternalContent(true);
				} else {
					lbx = document.createElement('img');
					lbx.title = $a[0].title;
					lbx.src = href;
					if(href) { cache[href] = lbx; }

					loadExternalContent();
				}
				break;

			case 'ajax' :
				// ajax lightbox content from other page
				ajax = true;
				if(href && cache[href]) {
					lbx = cache[href];
					loadExternalContent(true);
				} else {
					$.ajax({
						type: 'GET',
						url: href,
						dataType: 'html text'
					})
						.done(function(html) {
							lbx = $(html).find(hash)[0] || $(html).find('body');
							if(href) { cache[href] = lbx; }
							loadExternalContent();
						})
						.fail(function(err) {
							/* noop */
						});
					}
				break;

			case 'iframe':
				// iframe
				iframe = true;
				ratio = h / w;
				maxW = parseInt(w, 10);
				maxH = parseInt(h, 10);

				if(href && cache[href]) {
					// this cache is just the iframe element, not the content
					// but prevents recreating it a second time
					lbx = cache[href];
					loadExternalContent();
				} else {
					lbx = document.createElement('iframe');
					// instead of setting explicit sizing, we use intrinsic
					// ratio to make the iframe responsive
					// lbx.width = w;
					// lbx.height = h;
					lbx.title = $a[0].title;
					lbx.setAttribute('frameborder', 0);
					// to allow fullscreen of videos from within the iframe (eg. gated videos)
					lbx.setAttribute('allowfullscreen', true);
					// future implementation - takes precedence in supporting browsers
					// @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/fullscreen
					lbx.setAttribute('allow', 'fullscreen');
					lbx.src = href;
					cache[href] = lbx;

					loadExternalContent();
				}
				break;

			case 'pathfactory':
				// iframe
				pathfactory = true;
// 				ratio = h / w;
// 				maxW = parseInt(w, 10);
// 				maxH = parseInt(h, 10);

// 				if(href && cache[href]) {
// 					// this cache is just the iframe element, not the content
// 					// but prevents recreating it a second time
// 					lbx = cache[href];
// 					loadExternalContent();
// 				} else {


					lbx = document.createElement('iframe');

					lbx.width = "100vw";
					lbx.height = "100vh";;
					lbx.title = $a[0].title;
					lbx.setAttribute('frameborder', 0);
					// to allow fullscreen of videos from within the iframe (eg. gated videos)
					lbx.setAttribute('allowfullscreen', true);
					// future implementation - takes precedence in supporting browsers
					// @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/fullscreen
					lbx.setAttribute('allow', 'fullscreen');
					lbx.src = href;
// 					cache[href] = lbx;

					loadExternalContent();


//				}


				break;

			case 'inpage' :
				// grab content from in page
				// 04/12/2019 (TG) - using cache prevents dynamically changing content
				// on link click (generic-downloadlink) so it has been removed
				if ($(hash).is(".rc135") || $(hash).find(".rc135")[0]) {
					var clone = $(hash).clone(),
						h2 = clone.find("h2").first(),
						w11modallabel = "w11modallabel";
					if ($(h2).attr("id")) {
						w11modallabel = $(h2).attr("id");
					} else {
						$(h2).attr("id", w11modallabel);
					}
					lbx = $(clone).html();
					modalInfo.rc135 = true;
					modalInfo["aria-labelledby"] = w11modallabel;
				} else {
					lbx = $(hash).html();
				}
				break;

			case 'inline' :
				// grab content from inline data uri
				lbx = decodeURI(href.slice(href.indexOf(',') + 1));
				break;

			case 'component' :
				// triggered from component
				lbx = $(content, context).clone();
				break;

			case 'gallery' :
				// triggered from cw20 gallery component
				gallery = true;
				theme = 'light';
				lbx = $a.closest('[data-zoom]').clone();

				loadExternalContent();
				break;

			default :
				// something isn't right, bail out
				console.error('W11 Lightbox: Content not specified or error finding content.');
				return;
		}

		lightbox(lbx,modalInfo);

		$('> .w11', container).on('click', '.w11close, .w11w3, .w11closelink, .w11closeexit', closew11.bind($('> .w11', container)));
		$(document).on('esckeydown', closew11.bind($('> .w11', container)));
	}

	function openLightboxByQueryStr() {

		var params = getUrlParams(),
				// check for PathFactory url param,
				// 	create temp link with path + params
				$target = params.PF_QS ?
					$('<a>').attr({
						rel: 'lightbox',
						style: 'display:none',
						'data-iframe': true,
						'data-width': 1800,
						'data-height': 800,
						'data-theme': 'pathfactory'
					}).appendTo('body') :
					$('#' + params.lightbox);

		return params.lightbox &&
			$target.length &&
			$target.attr('href',
				function() {
					var path = params.PF_QS;
					return path &&
						delete params.PF_QS &&
						(params['lb-mode'] = 'overlay') &&
// new						'https://www.oracle.com/explore/'
							'https://explore.oracle.com/c/'
							+ path
							+ objToQueryParams(params);
				})
				.trigger('click');
	}

	function getUrlParams() {
		return (
			loc.search.slice(1).split('&')
				.reduce(function(obj,curr) {
					var param = curr.split('=');
					if(param[0]) {
						obj[param[0]] = param[1] ? param[1] : true;
					}
					return obj;
				}, {}));
	}

	function objToQueryParams(obj) {
		return Object.keys(obj).reduce(function(str, key) {
			str += (str.length > 1 ? '&' : '');
			str += [key, obj[key]].join('=');
			return str;
		}, '?');
	}

	function getLightboxType($a) {

		var href = $a.attr('href'),
				locRegExp = new RegExp(loc.origin + loc.pathname, 'i'),
				zoom = $a.data('lbl') === 'zoom-gallery',
				query,
				data,
				okajax,
				domain;

		href = href ? href.replace(locRegExp, '') : '';

		if(/^https?:\/\//i.test(href)) {
			// if has full path, check path against page domain to deterimine if ok to ajax
			domain = (href.split('//')[1].split('/')[0]);
			if (domain == loc.origin.split('//')[1]){
				okajax = true;
			}
		} else {
			// same server so allow for ajax
			okajax = true;
		}

		query = href.match(/\?(.*?)(?=#|$)/ig);
		hash = 	href.match(/#(.*?)(?=\?|$)/ig);
		image = /(gif|jpe?g|png|svg|webp)$/i.test(href);
		data = /^data:/.test(href);

		if(hash) {
			// get only first valid selector
			hash = hash.filter(function(h) {
				return /^#[a-z0-9\-_]+$/i.test(h);
			}).shift();
		}


		if(query) {
			mapQueryToData(query, $a);
		}

		theme = $a.data('theme') || 'dark';

		ltbxsize = $a.data('ltbxsize') || 'lbdefault';
		ltbxclass	= $a.data('ltbxclass') || '';
		content = $a.data('content');
		container = $a.data('container') || 'body';
		context = $a.data('context') || 'body';
		context = context === 'this' ? $a : context;

		if($a.data('iframe') && theme == 'pathfactory') { return 'pathfactory'; }
		if($a.data('iframe')) { return 'iframe'; }
		if(okajax && hash && !$(hash)[0]) { return 'ajax'; }
		if(image) { return 'image'; }
		if(content && $(content, context)[0]) { return 'component'; }
		if(zoom) { return 'gallery'; }
		if(hash && $(hash)[0]) { return 'inpage'; }
		if(data) { return 'inline'; }

		return false;
	}

	function mapQueryToData(query, $a) {
		query.forEach(function(qstr) {
			qstr.split('&').forEach(function(param) {
				var arr = param.replace(/(\?|amp;)/, '').split('='),
						key = arr[0],
						val = arr[1];
				$a.data(key, val);
			});
		});
	}

	function lightbox(lbx,modalInfo){
		var altClass = document.querySelector(".f20v2") ? " w11alt" : "",
			markup,
			modal = {
				"title":"",
				"desc":"",
				"attrTitle":"",
				"attrDesc":""
			};
		if (modalInfo["aria-labelledby"]) {
			modal.title = "";
			modal.attrTitle = " aria-labelledby=\"" + modalInfo["aria-labelledby"] + "\"";
		} else if (modalInfo.title) {
			modal.title = '<div class="sr-only" id="w11title">' + modalInfo.title + '</div>';
			modal.attrTitle = " aria-labelledby=\"" + aria.labelledby + "\"";
		}
		if (modalInfo.description) {
			modal.desc = '<div class="sr-only" id="w11desc">' + modalInfo.description + '</div>';
			modal.attrDesc = " aria-describedby=\"" + aria.describedby + "\"";
		}
		markup = '<div class="w11 w11fadein ' + ltbxclass + altClass + '" id="w11"'
			+ 'data-theme="' + theme + '" data-trackas="lightbox">'
			+	'<div class="w11w1">'
			+		'<div class="w11w2 ' + ltbxsize +'" role="dialog" aria-modal="true"' + modal.attrTitle + modal.attrDesc + '>'
			+			modal.title + modal.desc
			+			'<div class="w11w4 w11initfocus">'
			+				'<div class="w11w5">'
			+					'<div class="w11w6"></div>'
			+				'</div>'
			+			'</div>'
			+			'<button class="icn-close w11close" href="#close" data-lbl="lightbox-close" aria-label="close modal"><em>Close</em></button>'
			+		'</div>'
			+		'<div class="w11w3"></div>'
			+	'</div>'
			+'</div>';
		// check for existing lightbox in container,
		// only inject into DOM if not existing
		if(!$(container).find('> .w11')[0]) {
			$(container).append(markup);
		} else {
			// unset any close in process
			clearTimeout(closeTimeout);
			$('> .w11', container).removeClass('w11fadeout');
			$('> .w11 .w11close', container).show();
		}
		w11AriaHidePage(container);


		if(!ajax && !iframe && !image && !gallery) {
			// no need to wait for network request, just inject it
			$('> .w11 .w11w6', container).html(lbx);

			// grab the bg color on the outer container and add a fake bg color with the same value to the w2 to shift the x close color based on the content bg color
			if ($('.w11w6 > [class*="0bg"]', container)[0]){
				var transbg = 'rw-trans-' + $('.w11w6 > div').attr('class').replace(/.*rw-.*-([0-9]+0bg).*/,"$1");
				$('.w11w6 > [class*="0bg"]', container).addClass('w11-fullbleed');
				$('.w11w2', container).addClass(transbg).addClass('w11-fullbleed');
			}

			// removed observed class from in page cloned code so we can trigger again with OCOM framework onload
			$('.lazyrwpattern-observed', container).removeClass('lazyrwpattern-observed');

			if('undefined' !== typeof OCOM) {
					OCOM.oform('.w11w6');
 					if(typeof OCOM.lazyRWPattern === 'function'){
 						OCOM.lazyRWPattern('.w11w6');
					}
 					if(typeof OCOM.genericLazyBgImg === 'function'){
						OCOM.genericLazyBgImg('.w11w6');
					}
			}

			$(window).trigger("datasrc.run");
			setTimeout(lightboxFadeIn, 10);
		} else {
			// timeout needed to trigger css transition
			setTimeout(function() { $('> .w11 .w11w3', container).addClass('loading'); }, 0);
		}

		if(iframe) {
			// the bottom padding hack to create a responsive container
			// based on intrinsic ratio of w/h specs taken from the link
			$('> .w11', container).addClass('iframe');
			$('> .w11 .w11w5', container)[0].style.paddingBottom = (ratio * 100) + '%';
			$('> .w11 .w11w5', container)[0].style.setProperty('--iframePadding', (ratio * 100) + '%');

			// constrain width of container for better layout handling
			$('> .w11 .w11w2', container)[0].style.maxWidth = maxW + 'px';
		}
	}

	function loadExternalContent(cached) {

		//check for DOM structure
		if($('> .w11 .w11w6', container)[0]) {

			if(pathfactory) {
				// load pathfactory iframe asap
				onExternalContentLoaded();
			}

			if(iframe) {
				// wait for iframe / image to load
				$(lbx).one('load', onExternalContentLoaded);
			}

			$('> .w11 .w11w6', container).html(lbx);

			if(image) {
				$('#w11').addClass('w11imgbox');
				$('.w11w2', container).addClass('w11-fullbleed');
			}

			/* globals run_setup, OCOM */
			if(ajax || image) {
				/**
				/* Runs some common js files needed in ajaxed content
				/* @see /assets/js/_source-js/compass.js:300
				*/
				if('function' === typeof run_setup && !cached) { run_setup('.w11w6',false,false); }
				
				
				// grab the bg color on the outer container and add a fake bg color with the same value to the w2 to shift the x close color based on the content bg color
				if ($('.w11w6 > div > [class*="0bg"]', container)[0]){
					var transbg = 'rw-trans-' + $('.w11w6 > div > div').attr('class').replace(/.*rw-.*-([0-9]+0bg).*/,"$1");
					$('.w11w6 > div > [class*="0bg"]', container).addClass('w11-fullbleed');
					$('.w11w2', container).addClass(transbg).addClass('w11-fullbleed');
				}

				// removed observed class from in page cloned code so we can trigger again with OCOM framework onload
				$('.lazyrwpattern-observed', container).removeClass('lazyrwpattern-observed');

				if('undefined' !== typeof OCOM) {
						OCOM.runFoundComponents('.w11w6');
						OCOM.oform('.w11w6');
						if(typeof OCOM.lazyRWPattern === 'function'){
							OCOM.lazyRWPattern('.w11w6');
						}
						if(typeof OCOM.genericLazyBgImg === 'function'){
							OCOM.genericLazyBgImg('.w11w6');
						}
				}
				setTimeout(lightboxFadeIn, 50);
			}

			if(gallery) {
				loadGallery();
			}

		// wait until lightbox markup is injected
		} else {
			setTimeout(function() {
				loadExternalContent(cached);
			}, 50);
		}
	}

	function onExternalContentLoaded(e) {

		var $iframe = $('> .w11 .w11w6 iframe', container),
				$w11w4 = $('> .w11 .w11w4', container),
				$w11w5 = $('> .w11 .w11w5', container),
				$document, $html, $body,
				bodyStyles, ctrStyles,
				iframeContentW, iframeContentH,
				ctrW;

		if(!iframe) { return lightboxFadeIn(); }

		try {
			$html = $iframe.contents().find('html');

			if($html[0]) { // we have access to iframe html... no CORS issues

				$document = $($iframe[0].contentWindow.document);
				$html.addClass('iframecontent'); // note: cw43 looks for the presence of this class it also kills the min-width on html/body/f20w1
				$body = $html.find('body');

				// add keydown listener in iframed content to allow esc to close the modal while user focus is inside the iframe
				$iframe[0].contentWindow.document.onkeydown = function( event ) {
					if ( event.keyCode == 27 ) {
						$(document).find('button.w11close').click();
					}
				};

				// set body to height:auto, but only if it hasn't previously been set
				if($body[0].style.height !== 'auto') {
					$body[0].style.height = 'auto';
				}

				// first reset the iframe container to be responsive
				$w11w5[0].style.setProperty('--iframeWidth', '100%');

				// now we can get natural height of the iframe body
				bodyStyles = window.getComputedStyle($body[0]);
				ctrStyles = window.getComputedStyle($w11w4[0]);

				iframeContentH = Math.ceil(parseInt(bodyStyles.height, 10));
				iframeContentW = Math.ceil(parseInt(bodyStyles.width, 10)) + wrapperPadding($w11w4).width;
				ctrW = Math.ceil(parseInt(ctrStyles.width, 10));

				// if content width is now bigger than the container
				// we reset the iframe container width to force scrolling
				if(iframeContentW > ctrW) {
					$w11w5[0].style.setProperty('--iframeWidth', iframeContentW + 'px');
				}

				// if MutationObserver is not available to detect iframe DOM changes:
				// check to make sure we're at least the height
				// specified in the data-height, since all iframe content may
				// not have loaded yet, reporting a false, smaller content height
				if (!window.MutationObserver) {
					iframeContentH = maxH > iframeContentH ? maxH : iframeContentH;
				}

				$w11w5[0].style.setProperty('--iframeHeight', iframeContentH + 'px');
				$w11w5[0].style.setProperty('--iframePadding', 0);

				// if there is no support for custom vars (IE), set style directly
				// checking for window.CSS API is sufficient
				if(!window.CSS) {
					$w11w5[0].style.minHeight = iframeContentH + 'px';
					$w11w5[0].style.padding = 0;
				}

				// we can turn off scrolling on the iframe since
				// we've adjusted the container
				$iframe[0].setAttribute('scrolling', 'no');

				// we'll need to recalc everything on viewport change
				$(window).on('resize', onWindowResized);

				// for gated videos, we need to handle fullscreen change to
				// 	prevent sizing weirdness, since the lightbox can technically
				// 	expand to full screen size
				$document.on('fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange', function() {
					$w11w5[0].style.setProperty('--iframeWidth', '100%');
				});

				// register an observer to track content changes within iframe -- only once!
				if(observer === null && window.MutationObserver) {
				
					registerObserver($body[0]);
					// listen for reload of iframe to reconnect observer
					$iframe.one('load', disconnectObserver.bind(this, onExternalContentLoaded));
				
					// fade in lightbox only once (this used to be after this if statement but running every time was mucking with the focus state)
					lightboxFadeIn();

				} else {
					lightboxFadeIn();
				}
			}

			//Kaltura iframe videos do have CORS issues and get blocked, trigger the lightbox for those
			else if ( ($iframe[0]) ){
				lightboxFadeIn();
			}


		} catch (err) {
			/* noop */
			console.error('W11 Lightbox: ' + err);

			/* IE CORS exception */
			if (err = 'Error: Access is denied.') {
				lightboxFadeIn();
			}
		}

	}

	function loadGallery() {
		var $slider = lbx.find('[class*="slider"]'),
				$slides = lbx.find('[class*="imgslides"]'),
				idx = lbx.data('imgindex'),
				w = parseInt($slides.find('li').css('width'), 10);

		$slider.animate({ scrollLeft: (idx * w) });
		lbx.find('[data-lbl="imagethumbs"]').remove();
		lbx.find('.mbox-simple').remove();

		setTimeout(lightboxFadeIn, 50);
	}

	var previousSelectedElement = null;
	function lightboxFadeIn() {

		$(".w11w6 a[rel='lightbox']").attr("tabindex", "-1").attr("role", "none").removeAttr("href");
		previousSelectedElement = document.activeElement //Store last focused element before lightbox is opened
		$('> .w11', container).removeClass('w11fadein').trigger('open.lightbox', originalTarget);
		$(container).addClass('lightbox-noscroll');

		//const  focusableElements = 'a, button, [tabindex]:not([tabindex="-1"])';
		const focusableElements = "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"]), iframe";
		const modal = document.querySelector('#w11');
		const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
		const focusableContent = modal.querySelectorAll(focusableElements);
		const lastFocusableElement = focusableContent[focusableContent.length - 1];
		$('#w11 .w11initfocus').on('keydown', onModalKeyDown);

		document.addEventListener('keydown', function(e) {

			let isTabPressed = e.key === 'Tab';
			
			if (!isTabPressed) {
				return;
			}
			if (e.shiftKey) {
				if (document.activeElement === firstFocusableElement || document.activeElement === document.querySelector("#w11 .w11initfocus")) {
					lastFocusableElement.focus();
					e.preventDefault();
				}
			} else {
				if (document.activeElement === lastFocusableElement || document.activeElement === document.querySelector("#w11 .w11initfocus")) {
					firstFocusableElement.focus();
					e.preventDefault();
				}
			}
		});
		//firstFocusableElement.focus();
		// if the lightbox content is an iframe, focus on it instead of the modal container to avoid focus issues between frames
		document.querySelector("#w11 .w11initfocus").setAttribute("tabindex","-1")
		if (document.querySelector("#w11 .w11initfocus iframe")) {
			document.querySelector("#w11 .w11initfocus iframe").focus()
		} else {
			document.querySelector("#w11 .w11initfocus").focus();
		}
		
	}

	function closew11(e){
		var $lbx = this;

		var isexit = ($(e.target).hasClass('w11closeexit')) ? true : false;

		if(!isexit){
			e.preventDefault();
		}

		$lbx.addClass('w11fadeout');

		closeTimeout = setTimeout(function() {
			$lbx.trigger('close.lightbox').remove();
			$(container).removeClass('lightbox-noscroll');
		}, (theme === 'light' ? 500 : 800));

		$('> .w11 .w11close', container).hide();
		disconnectObserver();

		// remove event listeners, for now...
		$lbx.off('click', '.w11close, .w11w3', closew11);
		$(document).off('esckeydown', closew11);
		previousSelectedElement.focus(); //Reset focuse to last focused element before lightbox was opened
		$(previousSelectedElement).removeAttr("aria-controls");
		w11AriaHidePage(container,true);
	}

	function onWindowResized(e) {
		var ev = e;
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			$(window).off('resize', onWindowResized);
			return $('> .w11', container).length && onExternalContentLoaded(ev);
		}, 500);
	}

	function registerObserver(target) {
		observer = new MutationObserver(function(e) {
			clearTimeout(observerTimeout);
			// use a timeout to ensure iframe DOM has rendered
			observerTimeout = setTimeout(onExternalContentLoaded, 200);
		});
		config = { attributes: true, childList: true, characterData: false, subtree: true };
		observer.observe(target, config);
	}

	function disconnectObserver(cb) {
		if(observer) {
			observer.disconnect();
			observer = null;
		}
		return cb && cb();
	}
	function w11AriaHidePage(container,unhide) {
		if (container !== "body") {return false}
		if (unhide) {
			$("> #w11", container).siblings().each( function (i,sib) {
				if ($(sib).attr("data-aria-hidden")) {
					// restore pre-existing value
					$(sib).attr("aria-hidden",$(sib).attr("data-aria-hidden"));
				} else {
					$(sib).removeAttr("aria-hidden");
				}
			});
		} else {
			$("> #w11", container).siblings().each( function (i,sib) {
				if ($(sib).attr("aria-hidden") && !$(sib).attr("data-aria-hidden")) {
					// save pre-existing value
					$(sib).attr("data-aria-hidden",$(sib).attr("aria-hidden"));
				}
				$(sib).attr("aria-hidden","true");
			});
		}
	}
	function wrapperPadding($el) {
		var style = window.getComputedStyle($el[0]),
				padL = parseInt(style.paddingLeft, 10),
				padR = parseInt(style.paddingRight, 10),
				padT = parseInt(style.paddingTop, 10),
				padB = parseInt(style.paddingBottom, 10);
		return {
			width: padL + padR,
			height: padT + padB,
			left: padL,
			right: padR,
			top: padT,
			bottom: padB
		};
	}

});
// 		if($a.data('size') && $a.data('size') == "viewport") { return 'viewport'; } // this line was commented out at the top, but moved so as to not interfere with grunt's string replacement regex 

/*! GENERIC-LIGHTBOX-GALLERY */
jQuery(document).ready(function($) {
	'use strict';

	if(!$('.lightbox-gallery').length) { return false; }

	var $nav = $('<div class="slick-nav">'
								+ '<button class="slick-prev slick-arrow" data-lbl="prev-slide" aria-label="Previous" aria-disabled="false">Previous</button>'
								+ '<div class="slick-pagination"></div>'
								+ '<button class="slick-next slick-arrow" data-lbl="next-slide" aria-label="Next" aria-disabled="false">Next</button>'
								+ '</div>');

	$('.lightbox-gallery').each(function() {

		var $container = $(this),
				$body = $('body'),
				$links = $container.find('a[rel="lightbox"]'),
				links = $links.get().map(function(link) { return link.href; }),
				totalSlides = links.length,
				preloads = [];

		// set an explicit reference to gallery container so that
		// 	lightbox is injected into it, and can listen for open.lightbox
		$links.data('container', $container);

		$container
			.on('open.lightbox',
				function(e, link) {
					var index = links.indexOf(link.href);

					$container.find('.w11w4')
						.append($nav).end()
						.off('click.lightbox')
						.on('click.lightbox', '.slick-arrow', onNavClicked);

					$(document).off('keydown.lightbox').on('keydown.lightbox', onKeydown);

					return $body.addClass('lightbox-noscroll') &&
						changeImage(0) &&
						preloadImgs(link.href) &&
						updateNav(index);

				})
			.on('close.lightbox',
				function() {
					return $body.removeClass('lightbox-noscroll') &&
						$container.off('click.lightbox') &&
						$(document).off('keydown.lightbox');
				});

		function onNavClicked() {

			var dir = $(this).data('lbl') === 'next-slide' ? 1 : -1;

			return changeImage(dir);
		}

		function onKeydown(e) {

			return e.keyCode === 37 && changeImage(-1) ||
				e.keyCode === 39 && changeImage(1) || 1;
		}

		function changeImage(dir) {

			var $w11w6 = $container.find('.w11w6'),
					$img = $w11w6.find('img'),
					index = links.indexOf($img.attr('src')) + dir;

			return links[index] != null &&
				preloadImgs(links[index]) &&
				$img.removeClass('w11fadein') &&
				$w11w6.css('backgroundImage', 'url(' + $img.attr('src') + ')') &&
				$img.attr('src', function() { return links[index]; }) &&
				setTimeout($img.addClass.bind($img, 'w11fadein'), 50) &&
				updateNav(index);
		}

		function preloadImgs(link) {

			var index = links.indexOf(link);

			// clicked link img will be loaded by
			// 	lightbox, so will not need to preload
			preloads.push(link);

			return ![links[index - 1], links[index + 1]].forEach(function(link) {
				return link != null &&
								preloads.indexOf(link) < 0 &&
								preloads.push(link) &&
								(new Image().src = link);
			});
		}

		function updateNav(index) {
			var hasNext = index + 1 <= links.length - 1,
					hasPrev = index - 1 >= 0;

			return $container
				.find('.slick-next')
				.toggleClass('slick-disabled', !hasNext)
				.attr('aria-disabled', !hasNext).end()
				.find('.slick-prev')
				.toggleClass('slick-disabled', !hasPrev)
				.attr('aria-disabled', !hasPrev).end()
				.find('.slick-pagination')
				.text([index + 1, totalSlides].join(' / '));
		}
	});
});



// LOADERS
/*! HANDLEBARS - LOAD REDWOOD */
jQuery(document).ready(function ($) {
	if ($('[data-template],[data-feedsrc]')[0] && $('.f20v0')[0]) {
	  $import(jsfilepath+'handlebars-redwood.js');
	}
});


/*! LOAD - REDWOOD-PRICING */
jQuery(document).ready(function ($) {
	if ($('.rc34')[0]) {
	  $import(jsfilepath+'pricing-format.js');
	}
});

/*! GENERIC-OCODE */

jQuery(document).ready(function($) {
	'use strict';

	/* globals Prism */
	$('.ocode').each(function(n) {

		var $ctr = $(this),
				codeblock = n + 1,
				CLS_INIT = 'ocode-initialized',
				CLS_SHOW = 'ocode-show',
				DATA_TIMEOUT = 'showTimeout',
				isInline = $ctr.is('code'),
				$code = isInline ? $ctr : $ctr.find('pre > code'),
				$btn = $ctr.find('.ocode-bttn').append(function() {
					return '<div class="ocode-success" aria-hidden="true">'
								+		($(this).data('success') || 'Copied to Clipboard')
								+ '</div>'
								+ '<div class="ocode-error" aria-hidden="true">'
								+		($(this).data('error') || 'Error: Could not Copy')
								+ '</div>';
				});
				
				if($btn.find('a')[0]){
					var btxt = $btn.find('a').text();
					$btn.first('> div').find('a').remove();
					$btn.first('> div').prepend('<button>'+btxt+'</button>');
				}
				
				$btn.find('button').attr('aria-label','Copy code block '+codeblock);
				if(!isInline && $ctr.find('pre')[0]){
					$ctr.find('pre').attr('aria-label','Code block '+codeblock);
				}

				codeblock++;

		$code.html(
			$code.html()
				.trim()
				// tabs => 2 spaces
				.replace(/\t/g, '  ')
				// must use html entities,
				// 	or it will be stripped
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
		);


			$ctr.on('keyup', function(e) {
				return e.keyCode === 9 && $ctr.addClass('ocode-kb');
			});
			
			$btn.on('click', async function(e) {
				var $success = $btn.find('.ocode-success'),
						$error = $btn.find('.ocode-error');

				e.preventDefault();
				
				if (typeof arialive === "function") { 
					arialive($success.text());
				}

				const result = await copyToClipBoard($ctr);

				if (result) {
					return ($success.addClass(CLS_SHOW)
								.data(DATA_TIMEOUT, setTimeout(function() {
									clearTimeout($success.data(DATA_TIMEOUT));
									$success.removeClass(CLS_SHOW);
							}, 2000)));
				} else {
					return ($error.addClass(CLS_SHOW)
							.data(DATA_TIMEOUT, setTimeout(function() {
								clearTimeout($error.data(DATA_TIMEOUT));
								$error.removeClass(CLS_SHOW);
								if (typeof arialive === "function") { 
									arialive($error.text());
								}
							}, 2000)));
				}
			});

		async function copyToClipBoard($ctr) {
			var isInline = $ctr.is('code');
			var $code = isInline ? $ctr : $ctr.find('pre > code');
			try {
					if (!navigator.clipboard) { return false }
					await navigator.clipboard.writeText($code.text());
					return true;
				} catch (err) {
					console.error('Failed to copy!', err);
					return false;
				}
		}

		function onInit() {
			return $ctr
				// trim leading/trailing whitespace inside <pre>
				.find('pre').html(function(i, html) { return html.trim(); }).end()
				.addClass(CLS_INIT);
		}

		return /language-/.test($code[0].classList) &&
					// if highlighting is enabled, add initialized class after
					Prism.highlightElement($code[0], false, onInit) ||
					// otherwise, can add immediately
					onInit();
	});
});


///////////////////////////////////////////////////////
//    THIS JS IS FOR CORE AND HOMEPAGE COMPONENTS    //
//    ALL OTHER COMPONENTS BELONG IN REDWOOD-LIB     //
///////////////////////////////////////////////////////

/*! INFO */window["redwood-base"] = "DEV BUILD";