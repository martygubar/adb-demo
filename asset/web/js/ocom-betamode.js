/*!
######################################################

# OCOM-BETAMODE.JS

# OCOM GLOBAL ASSET RELEASE: 24.6.0

# BUILD DATE: Tue Jan 25 2022 18:22:00 GMT-0700 (Mountain Standard Time)

# COPYRIGHT ORACLE CORP 2022 [UNLESS STATED OTHERWISE]

######################################################
*/


setTimeout(function(){var a=document.location.href,b=encodeURIComponent(a.split("betamode=")[1].split("&")[0]),c="//www.oracle.com/webfolder/s/assets/"+b;a.indexOf("betamode=webstandards")>-1?c="https://webstandards.us.oracle.com:89/assets":a.indexOf("betamode=v")>-1&&(c="https://www.oracle.com/asset/web/beta"+b.split(".")[1]);for(var d=document.head.getElementsByTagName("link"),e=0;e<d.length;e++){var f=d[e];f.hasAttribute("data-wscss")&&(f.href=f.href.replace(/.*\/([^\/]+)$/g,c+"/css/$1"));f.hasAttribute("data-wsjs")&&(f.href=f.href.replace(/.*\/([^\/]+)$/g,c+"/js/$1"))}});function betamodeclick(){if(window.jQuery){$(document).on("click","a",function(){var b=$(this).attr("href");if(b&&""!=b&&b.indexOf("javascript")<0&&b.indexOf("betamode=")<0){var c=b.indexOf("?")>-1?"&":"?";b&&b.indexOf("#")>-1&&b.indexOf("betamode=")<0?$(this).attr("href",b.split("#")[0]+c+"betamode="+a+"#"+b.split("#")[1]):b&&b.indexOf("betamode=")<0&&$(this).attr("href",b+c+"betamode="+a)}});var a=encodeURIComponent(document.location.href.split("betamode=")[1].split("&")[0]);$(document).ready(function(){$("body").append('<div id="betamode" class="betamode">BETA MODE '+a+"<span></div>")})}else setTimeout(function(){betamodeclick()},100)}betamodeclick();
/*! INFO */window["ocom-betamode"] = "24.6.0";