var DISQUS=function(e){var i=e.DISQUS||{};i.AssertionError=function(b){this.message=b};i.AssertionError.prototype.toString=function(){return"Assertion Error: "+(this.message||"[no message]")};i.assert=function(b,d,f){if(!b)if(f)e.console&&e.console.log("DISQUS assertion failed: "+d);else throw new i.AssertionError(d);};var d=[];i.define=function(b,k){typeof b==="function"&&(k=b,b="");for(var f=b.split("."),a=f.shift(),c=i,n=(k||function(){return{}}).call({overwrites:function(a){a.__overwrites__=!0;
return a}},e);a;)c=c[a]?c[a]:c[a]={},a=f.shift();for(var j in n)n.hasOwnProperty(j)&&(!n.__overwrites__&&c[j]!==null&&i.assert(!c.hasOwnProperty(j),"Unsafe attempt to redefine existing module: "+j,!0),c[j]=n[j],d.push(function(a,c){return function(){delete a[c]}}(c,j)));return c};i.use=function(d){return i.define(d)};i.cleanup=function(){for(var b=0;b<d.length;b++)d[b]()};return i}(window);
DISQUS.define(function(e,i){var d=e.DISQUS,b=e.document,k=b.getElementsByTagName("head")[0]||b.body,f={running:!1,timer:null,queue:[]};d.defer=function(a,c){function d(){var a=f.queue;if(a.length===0)f.running=!1,clearInterval(f.timer);for(var c=0,b;b=a[c];c++)b[0]()&&(a.splice(c--,1),b[1]())}f.queue.push([a,c]);d();if(!f.running)f.running=!0,f.timer=setInterval(d,100)};d.each=function(a,c){var d=a.length,b=Array.prototype.forEach;if(isNaN(d))for(var m in a)a.hasOwnProperty(m)&&c(a[m],m,a);else if(b)b.call(a,
c);else for(b=0;b<d;b++)c(a[b],b,a)};d.extend=function(a){d.each(Array.prototype.slice.call(arguments,1),function(c){for(var b in c)a[b]=c[b]});return a};d.serializeArgs=function(a){var c=[];d.each(a,function(a,b){a!==i&&c.push(b+(a!==null?"="+encodeURIComponent(a):""))});return c.join("&")};d.isString=function(a){return Object.prototype.toString.call(a)==="[object String]"};d.serialize=function(a,c,b){c&&(a+=~a.indexOf("?")?a.charAt(a.length-1)=="&"?"":"&":"?",a+=d.serializeArgs(c));if(b)return c=
{},c[(new Date).getTime()]=null,d.serialize(a,c);c=a.length;return a.charAt(c-1)=="&"?a.slice(0,c-1):a};d.require=function(a,c,e,j,m){function i(a){if(a.type=="load"||/^(complete|loaded)$/.test(a.target.readyState))j&&j(),o&&clearTimeout(o),d.bean.remove(a.target,f,i)}var h=b.createElement("script"),f=h.addEventListener?"load":"readystatechange",o=null;h.src=d.serialize(a,c,e);h.async=!0;h.charset="UTF-8";(j||m)&&d.bean.add(h,f,i);m&&(o=setTimeout(function(){m()},2E4));k.appendChild(h);return d};
d.requireStylesheet=function(a,c,e){var j=b.createElement("link");j.rel="stylesheet";j.type="text/css";j.href=d.serialize(a,c,e);k.appendChild(j);return d};d.requireSet=function(a,c,b){var j=a.length;d.each(a,function(a){d.require(a,{},c,function(){--j===0&&b()})})};d.injectCss=function(a){var c=b.createElement("style");c.setAttribute("type","text/css");a=a.replace(/\}/g,"}\n");e.location.href.match(/^https/)&&(a=a.replace(/http:\/\//g,"https://"));c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));
k.appendChild(c)}});
DISQUS.define("JSON",function(){function e(a){return a<10?"0"+a:a}function i(c){a.lastIndex=0;return a.test(c)?'"'+c.replace(a,function(a){var c=j[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+c+'"'}function d(a,b){var p,g,j,e,h=c,q,f=b[a];f&&typeof f==="object"&&typeof f.toJSON==="function"&&!k&&(f=f.toJSON(a));typeof m==="function"&&(f=m.call(b,a,f));switch(typeof f){case "string":return i(f);case "number":return isFinite(f)?String(f):"null";case "boolean":case "null":return String(f);
case "object":if(!f)return"null";c+=n;q=[];if(Object.prototype.toString.apply(f)==="[object Array]"){e=f.length;for(p=0;p<e;p+=1)q[p]=d(p,f)||"null";j=q.length===0?"[]":c?"[\n"+c+q.join(",\n"+c)+"\n"+h+"]":"["+q.join(",")+"]";c=h;return j}if(m&&typeof m==="object"){e=m.length;for(p=0;p<e;p+=1)g=m[p],typeof g==="string"&&(j=d(g,f))&&q.push(i(g)+(c?": ":":")+j)}else for(g in f)Object.hasOwnProperty.call(f,g)&&(j=d(g,f))&&q.push(i(g)+(c?": ":":")+j);j=q.length===0?"{}":c?"{\n"+c+q.join(",\n"+c)+"\n"+
h+"}":"{"+q.join(",")+"}";c=h;return j}}var b={},k=!1;if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var f=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
a=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c,n,j={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},m;b.stringify=function(a,b,j){var g;n=c="";if(typeof j==="number")for(g=0;g<j;g+=1)n+=" ";else typeof j==="string"&&(n=j);if((m=b)&&typeof b!=="function"&&(typeof b!=="object"||typeof b.length!=="number"))throw Error("JSON.stringify");return d("",{"":a})};b.parse=function(a,c){function b(a,
g){var d,j,f=a[g];if(f&&typeof f==="object")for(d in f)Object.hasOwnProperty.call(f,d)&&(j=b(f,d),j!==void 0?f[d]=j:delete f[d]);return c.call(a,g,f)}var g,a=String(a);f.lastIndex=0;f.test(a)&&(a=a.replace(f,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return g=eval("("+a+")"),
typeof c==="function"?b({"":g},""):g;throw new SyntaxError("JSON.parse");};var l={a:[1,2,3]},h,s;if(Object.toJSON&&Object.toJSON(l).replace(/\s/g,"")==='{"a":[1,2,3]}')h=Object.toJSON;typeof String.prototype.evalJSON==="function"&&(l='{"a":[1,2,3]}'.evalJSON(),l.a&&l.a.length===3&&l.a[2]===3&&(s=function(a){return a.evalJSON()}));(function(){var a=[1,2,3];typeof a.toJSON==="function"&&(a=a.toJSON(),k=!(a&&a.length===3&&a[2]===3))})();if(k||!h||!s)return{stringify:b.stringify,parse:b.parse};return{stringify:h,
parse:s}});
DISQUS.define(function(){function e(c){for(a=1;c=i.shift();)c()}var i=[],d,b=document,k=b.documentElement,f=k.doScroll,a=/^loade|c/.test(b.readyState),c;b.addEventListener&&b.addEventListener("DOMContentLoaded",d=function(){b.removeEventListener("DOMContentLoaded",d,!1);e()},!1);f&&b.attachEvent("onreadystatechange",d=function(){/^c/.test(b.readyState)&&(b.detachEvent("onreadystatechange",d),e())});c=f?function(b){self!=top?a?b():i.push(b):function(){try{k.doScroll("left")}catch(a){return setTimeout(function(){c(b)},50)}b()}()}:
function(c){a?c():i.push(c)};return{domready:c}});
DISQUS.define("Events",function(){var e=/\s+/,i={on:function(d,b,k){var f,a;if(!b)return this;d=d.split(e);for(f=this._callbacks||(this._callbacks={});a=d.shift();)a=f[a]||(f[a]=[]),a.push(b),a.push(k);return this},off:function(d,b,k){var f,a,c;if(!(a=this._callbacks))return this;if(!d&&!b&&!k)return delete this._callbacks,this;for(d=d?d.split(e):_.keys(a);f=d.shift();)if(!(c=a[f])||!b&&!k)delete a[f];else for(f=c.length-2;f>=0;f-=2)b&&c[f]!==b||k&&c[f+1]!==k||c.splice(f,2);return this},trigger:function(d){var b,
k,f,a,c,i,j;if(!(k=this._callbacks))return this;j=[];d=d.split(e);a=1;for(c=arguments.length;a<c;a++)j[a-1]=arguments[a];for(;b=d.shift();){if(i=k.all)i=i.slice();if(f=k[b])f=f.slice();if(f){a=0;for(c=f.length;a<c;a+=2)f[a].apply(f[a+1]||this,j)}if(i){b=[b].concat(j);a=0;for(c=i.length;a<c;a+=2)i[a].apply(i[a+1]||this,b)}}return this}};i.bind=i.on;i.unbind=i.off;return i});
DISQUS.define(function(e){function i(){throw Error(Array.prototype.join.call(arguments," "));}function d(a,g,c){if(a.addEventListener)a.addEventListener(g,c,!1);else if(a.attachEvent)a.attachEvent("on"+g,c);else throw Error("No event support.");}function b(a,g,c){c||(c=0);var b,d,j,f,e=0,i=function(){e=new Date;j=null;f=a.apply(b,d)};return function(){var h=new Date,k=g-(h-e);b=this;d=arguments;k<=0?(clearTimeout(j),j=null,e=h,f=a.apply(b,d)):j||(j=setTimeout(i,k+c));return f}}var k=e.document,f=
DISQUS.use("JSON"),a={},c={},n=0;if(!(DISQUS.version&&DISQUS.version()==="2")){d(e,"message",function(a){var g,b;for(b in c)if(Object.prototype.hasOwnProperty.call(c,b)&&a.origin==c[b].origin){g=!0;break}if(g)switch(g=f.parse(a.data),(b=c[g.sender])||i("Message from our server but with invalid sender UID:",g.sender),g.scope){case "host":b.trigger(g.name,g.data);break;case "global":DISQUS.trigger(g.name,g.data);break;default:i("Message",g.scope,"not supported. Sender:",a.origin)}},!1);d(e,"hashchange",
function(){DISQUS.trigger("window.hashchange",{hash:e.location.hash})},!1);d(e,"resize",function(){DISQUS.trigger("window.resize")},!1);d(e,"scroll",b(function(){DISQUS.trigger("window.scroll")},250,50));d(k,"click",function(){DISQUS.trigger("window.click")});var j=function(){this.uid=n++;a[this.uid]=this};DISQUS.extend(j.prototype,DISQUS.Events);j.prototype.destroy=function(){delete a[this.uid]};DISQUS.extend(j,{listByKey:function(){var c={},g;for(g in a)Object.prototype.hasOwnProperty.call(a,g)&&
(c[g]=a[g]);return c},list:function(){var c=[],g;for(g in a)Object.prototype.hasOwnProperty.call(a,g)&&c.push(a[g]);return c},get:function(c){if(Object.prototype.hasOwnProperty.call(a,c))return a[c];return null}});var m=function(a){a=a||{};this.state=m.INIT;this.uid=a.uid||n++;this.origin=a.origin;this.target=a.target;this.window=null;c[this.uid]=this;this.on("ready",function(){this.state=m.READY},this);this.on("die",function(){this.state=m.KILLED},this)};DISQUS.extend(m,{INIT:0,READY:1,KILLED:2});
DISQUS.extend(m.prototype,DISQUS.Events);m.prototype.sendMessage=function(a,c){var b=function(a,c,b){return function(){DISQUS.postMessage(b.window,a,c)}}(f.stringify({scope:"client",name:a,data:c}),this.origin,this);if(this.isReady())b();else this.on("ready",b)};m.prototype.hide=function(){};m.prototype.show=function(){};m.prototype.url=function(){return DISQUS.serialize(this.target,{disqus_version:"1366346422"})+"#"+this.uid};m.prototype.destroy=function(){this.state=m.KILLED;this.off()};m.prototype.isReady=
function(){return this.state===m.READY};m.prototype.isKilled=function(){return this.state===m.KILLED};var l=function(a){m.call(this,a);this.windowName=a.windowName};DISQUS.extend(l.prototype,m.prototype);l.prototype.load=function(){this.window=e.open("",this.windowName||"_blank");this.window.location=this.url()};l.prototype.isKilled=function(){return m.prototype.isKilled()||this.window.closed};var h=function(a){m.call(this,a);this.styles=a.styles||{};this.role=a.role||"application";this.container=
a.container;this.elem=null};DISQUS.extend(h.prototype,m.prototype);h.prototype.load=function(){var a=this.elem=k.createElement("iframe");a.setAttribute("id","dsq"+this.uid);a.setAttribute("data-disqus-uid",this.uid);a.setAttribute("allowTransparency","true");a.setAttribute("frameBorder","0");this.role&&a.setAttribute("role",this.role);DISQUS.extend(a.style,this.styles)};h.prototype.getPosition=function(){for(var a=this.elem,c=0,b=0;a;)c+=a.offsetLeft,b+=a.offsetTop,a=a.offsetParent;return{top:b,left:c}};
h.prototype.hide=function(){this.elem.style.display="none"};h.prototype.show=function(){this.elem.style.display=""};h.prototype.destroy=function(){m.prototype.destroy.call(this);this.elem&&this.elem.parentNode&&this.elem.parentNode.removeChild(this.elem)};var s=function(a){h.call(this,a);this.styles=DISQUS.extend({width:"100%",border:"none",overflow:"hidden",display:"none"},a.styles||{})};DISQUS.extend(s.prototype,h.prototype);s.prototype.load=function(a){var c=this;h.prototype.load.call(c);var b=
c.elem;b.setAttribute("width","100%");b.setAttribute("src",this.url());d(b,"load",function(){b.style.display="";c.window=b.contentWindow;a&&a()});(k.getElementById(this.container)||k.body).appendChild(b)};var o=function(a){h.call(this,a);this.contents=a.contents;this.styles=DISQUS.extend({width:"100%",border:"none",overflow:"hidden"},a.styles||{})};DISQUS.extend(o.prototype,h.prototype);o.prototype.load=function(){h.prototype.load.call(this);var a=this.elem;a.setAttribute("scrolling","no");(k.getElementById(this.container)||
k.body).appendChild(a);this.window=a.contentWindow;try{this.window.document.open()}catch(c){a.src="javascript:var d=document.open();d.domain='"+k.domain+"';void(0);"}this.document=this.window.document;this.document.write(this.contents);this.document.close();if(a=this.document.body){var b=this.elem.style;b.height=b.minHeight=b.maxHeight=a.offsetHeight+"px"}};o.prototype.show=function(){this.elem.style.display="block"};o.prototype.click=function(a){d(this.document.body,"click",function(c){a(c)})};var r=
DISQUS.extend({},DISQUS.Events);return{log:function(a){var c=k.getElementById("messages");if(c){var b=k.createElement("p");b.innerHTML=a;c.appendChild(b)}},version:function(){return"2"},on:r.on,off:r.off,trigger:r.trigger,throttle:b,postMessage:function(a,c,b){a.postMessage(c,b)},WindowBase:m,Popup:l,Iframe:h,Channel:s,Sandbox:o,App:j}}});
DISQUS.define("next.publisher",function(e){function i(a,c,b){var d,b=b||c;if(a===f)return"";e.getComputedStyle?d=f.defaultView.getComputedStyle(a,null).getPropertyValue(c):a.currentStyle&&(d=a.currentStyle[c]?a.currentStyle[c]:a.currentStyle[b]);return d=="transparent"||d===""||d=="rgba(0, 0, 0, 0)"?i(a.parentNode,c,b):d||null}function d(a){function b(a){a=Number(a).toString(16);return a.length==1?"0"+a:a}if(a.substr(0,1)==="#")return a;var d=/.*?rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(a);if(!d||d.length!==
4)return"";var a=b(d[1]),j=b(d[2]),d=b(d[3]);return"#"+a+j+d}function b(a,b,d,j){DISQUS.isString(b)&&(b=f.createElement(b));var e=null;b.style.visibility="hidden";a.appendChild(b);e=i(b,d,j);a.removeChild(b);return e}function k(a){return a.toLowerCase().replace(/^\s+|\s+$/g,"").replace(/['"]/g,"")}var f=e.document;return{getContrastYIQ:function(a){a.match("^rgb")&&(a=d(a).substr(1));var b=parseInt(a.substr(0,2),16),f=parseInt(a.substr(2,2),16),a=parseInt(a.substr(4,2),16);return(b*299+f*587+a*114)/
1E3},colorToHex:d,getElementStyle:b,getAnchorColor:function(a){var c=f.createElement("a");c.href=+new Date;return b(a,c,"color")},normalizeFontValue:k,isSerif:function(a){for(var a=b(a,"span","font-family","fontFamily").split(","),c={courier:1,times:1,"times new roman":1,georgia:1,palatino:1,serif:1},d,j=0;j<a.length;j++)if(d=k(a[j]),c.hasOwnProperty(d))return!0;return!1},getBrowserSupport:function(a){if(a.postMessage){if(!a.JSON)return a.navigator.appName==="Microsoft Internet Explorer"?2:1}else return 1;
return 0}}});
DISQUS.define(function(){function e(e){DISQUS.App.call(this);this.switches={};var d={target:e.useSSL?"https://securecdn.disqus.com/1366346422/build/next-switches/client_ssl.html":"http://mediacdn.disqus.com/1366346422/build/next-switches/client.html",container:e.container};d.origin=e.useSSL?"https://securecdn.disqus.com":"http://mediacdn.disqus.com";this.frame=new DISQUS.Channel(d);var b=this;this.frame.load(function(){b.frame.elem.style.display="none"})}e.prototype=DISQUS.extend({fetch:function(e){var d=this,
e=e||{},b=e.success;delete e.success;this.frame.on("switches.received",function(e){d.switches=e;DISQUS.trigger("switches.changed",e);b&&b(e)});this.frame.sendMessage("fetch",e)},enabled:function(e){return this.switches[e]?this.switches[e]:!1}},DISQUS.App.prototype);return{Switches:function(i){return new e(i)}}});
DISQUS.define(function(e){var i=function(d){DISQUS.App.call(this);this.frame=null;this.settings=d;d.useSSL?(this.url="https://disqus.com/embed/profile/",this.origin="https://disqus.com"):(this.url="http://disqus.com/embed/profile/",this.origin="http://disqus.com");this.url=DISQUS.serialize(this.url,{f:d.forum,language:d.language})};DISQUS.extend(i.prototype,DISQUS.App.prototype);i.prototype.init=function(){var d=this.settings,b={uid:this.uid,target:this.url,origin:this.origin},k=this.frame=d.windowName?
new DISQUS.Popup(DISQUS.extend(b,{windowName:d.windowName})):new DISQUS.Channel(DISQUS.extend(b,{container:d.container,styles:{height:"100%",position:"fixed",top:0,left:0,zIndex:999999},role:"dialog"}));k.on("ready",function a(){k.off("ready",a);k.sendMessage("init",{referrer:e.location.href});this.trigger("loading.init")},this);k.on("close",function(){k.hide();e.focus()},this);k.load();this.trigger("loading.start")};i.prototype.showProfile=function(d){var b=this.frame;if(!b.isReady())return void b.on("ready",
function f(){b.off("ready",f);this.showProfile(d)},this);b.sendMessage("showProfile",d);b.show()};return{Profile:function(d){return new i(d)}}});
DISQUS.define("backplane",function(){var e;try{localStorage.setItem("disqus.localStorageTest","disqus"),localStorage.removeItem("disqus.localStorageTest"),e=!0}catch(i){e=!1}var d=function(b){this.frame=b;this.credentials="unset";var d=this;typeof Backplane==="function"&&typeof Backplane.version==="string"&&typeof Backplane.subscribe==="function"&&e&&Backplane(function(){d.initialize()})};DISQUS.extend(d.prototype,{frameEvents:{invalidate:"clearCredentials"},initialize:function(){var b=this;DISQUS.each(this.frameEvents,
function(d,e){b.frame.on("backplane."+e,typeof d==="function"?d:b[d],b)});this.credentialsFromLocalStorage()&&this.frame.sendMessage("login",{backplane:this.credentials});this.subscribe()},subscribe:function(){var b=this;Backplane.subscribe(function(d){var e=b.handlers[d.type];e&&e.call(b,d)})},handlers:{"identity/login":function(b){var d=b.messageURL,b=b.channel;this.credentials!=="unset"&&this.credentials!==null&&this.credentials.channel===b&&this.credentials.messageUrl===d||(this.setCredentials(b,
d),this.frame.sendMessage("login",{backplane:this.getCredentials()}))}},credentialsFromLocalStorage:function(){var b=localStorage.getItem("disqus.backplane.channel"),d=localStorage.getItem("disqus.backplane.messageUrl");this.setCredentials(b,d,!0);return this.credentials},setCredentials:function(b,d,e){if(!b||!d)return void this.clearCredentials();e||(localStorage.setItem("disqus.backplane.channel",b),localStorage.setItem("disqus.backplane.messageUrl",d));this.credentials={channel:b,messageUrl:d}},
getCredentials:function(){if(this.credentials!=="unset")return this.credentials;return this.credentialsFromLocalStorage()},clearCredentials:function(b){b=b||{};this.credentials=null;localStorage.removeItem("disqus.backplane.channel");localStorage.removeItem("disqus.backplane.messageUrl");if(b.redirectUrl)window.location=b.redirectUrl}});return{BackplaneIntegration:d}});
DISQUS.define(function(e,i){function d(a,b,c,d,e,f){return'<img width="'+a+'" height="'+b+'" alt="'+d+'" src="data:image/'+c+";base64,"+e+'"'+(f?' style="'+f+'"':"")+"/>"}function b(a){for(var b=DISQUS.App.list(),d=0,e=b.length,b=b[d];d<e;d++)b instanceof c&&a(b)}var k=e.document,f=["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","TkSuQmCC"],a=["R0lGODlhEAALAPQAAP///z2LqeLt8dvp7u7090GNqz2LqV+fuJ/F1IW2ycrf51aatHWs","waXJ14i4ys3h6FmctUCMqniuw+vz9eHs8fb5+meku+Tu8vT4+cfd5bbT3tbm7PH2+AAA","AAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQu","aW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27if","DgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeR","vsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjoth",
"LOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh","+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+","YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY","5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAs","AAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00k","j5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpy","HCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAA","BS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7",
"AAAAAAAAAAAA"],c=function(a){DISQUS.App.call(this);this.settings=a;this.indicators={north:null,south:null};this._boundGlobalEvents=[];this.frame=null;this.wasNearViewport=this.wasInViewport=!1};DISQUS.extend(c.prototype,DISQUS.App.prototype);c.prototype.init=function(){function b(a,c,d){g.on("affiliateLink",function(b){var e=DISQUS.vglnk.$;if(!e)return void g.sendMessage("affiliateLink");e.request(a+"/click",{format:"jsonp",out:b.url,key:c,loc:g.target,subId:d},{fn:function(a){return function(b){var c=
{token:a};if(b)c.url=b;g.sendMessage("affiliateLink",c)}}(b.token),timeout:DISQUS.vglnk.opt("click_timeout")})})}function c(a,b){l._boundGlobalEvents.push(a);DISQUS.on(a,b,l)}var l=this,h=l.settings,n="http://disqus.com/embed/comments/",o="http://disqus.com";h.useSSL&&(n="https://disqus.com/embed/comments/",o="https://disqus.com");var r={f:h.forum,t_i:h.identifier,t_u:h.url||e.location.href,t_s:h.slug,t_t:h.title||h.documentTitle,t_e:h.title,t_d:h.documentTitle,t_c:h.category,s_o:h.sortOrder,c:h.useConman||
i};if(h.notSupported)r.n_s=h.notSupported;var p=DISQUS.isString(h.container)?k.getElementById(h.container):h.container,g=l.frame=new DISQUS.Channel({origin:o,target:DISQUS.serialize(n,r),container:h.container,uid:this.uid,role:"complementary"});if(h.notSupported)g.styles.height="500px";var t,u;if(!h.notSupported)t=k.createElement("div"),t.innerHTML=d(71,17,"png","DISQUS",f.join(""))+d(16,11,"gif","...",a.join(""),"margin:0 0 3px 5px"),p.appendChild(t);g.on("ready",function q(a){g.off("ready",q);t&&
t.parentNode===p&&p.removeChild(t);e.clearTimeout(u);var b={permalink:h.permalink,anchorColor:h.anchorColor,referrer:e.location.href,colorScheme:h.colorScheme,language:h.language,typeface:h.typeface,remoteAuthS3:h.remoteAuthS3,apiKey:h.apiKey,sso:h.sso,parentWindowHash:e.location.hash};if(e.navigator.userAgent.match(/(iPad|iPhone|iPod)/))b.width=g.elem.offsetWidth;l.scrollListener();l.clientData=a;g.sendMessage("init",b);l.trigger("loading.init")});g.on("resize",function(a){g.elem.style.height=a.height+
"px"});g.on("reload",function(){e.location.reload()});g.on("reset",function(){DISQUS.reset({reload:!0})});g.on("session.identify",function(a){l.trigger("session.identify",a)});g.on("posts.paginate",function(){l.trigger("posts.paginate")});g.on("posts.create",function(a){l.trigger("posts.create",{id:a.id,text:a.raw_message})});g.on("scrollTo",function(a){var b=g.getPosition(),b=a.relative==="window"?a.top:b.top+a.top,c=l.getWindowYCoords();(a.force||!(b>c.pageYOffset&&b<c.pageYOffset+c.innerHeight))&&
e.scrollTo(0,b)});g.on("fakeScroll",l.scrollListener,l);g.on("realtime.init",function(a){for(var b=["north","south"],c,d,e=0;e<b.length;e++)d=b[e],c=new DISQUS.Sandbox({uid:"-indicator-"+d,container:l.settings.container,contents:a[d].contents,styles:a[d].styles,role:"alert"}),c.load(),c.hide(),function(a){c.click(function(){g.sendMessage("realtime.click",a)})}(d),l.indicators[d]=c});g.on("realtime.showNorth",function(a){var b=l.indicators.north;b.document.getElementById("message").innerHTML=a;b.show()});
g.on("realtime.hideNorth",function(){l.indicators.north.hide()});g.on("realtime.showSouth",function(a){var b=l.indicators.south;b.document.getElementById("message").innerHTML=a;b.show()});g.on("realtime.hideSouth",function(){l.indicators.south.hide()});g.on("mainViewRendered",function(){DISQUS.trigger("lounge:mainViewRendered");l.trigger("loading.done")});g.on("profile.show",function(a){if(!l.profile||l.profile.frame.isKilled())l.profile=DISQUS.Profile({windowName:a.windowName,language:a.language,
container:h.container,useSSL:h.useSSL,forum:h.forum}),l.profile.init();l.profile.showProfile(a.userId)});g.on("loadLinkAffiliator",function(a){g.off("loadLinkAffiliator");if(!e.vglnk_self&&!e.vglnk&&!function(){for(var a in e)if(a.indexOf("skimlinks")===0||a.indexOf("skimwords")===0)return!0;return!1}()){var c=a.apiUrl,d=a.key,f=String(a.id);if(!(a.clientUrl==null||c==null||d==null||a.id==null))DISQUS.define("vglnk",function(){return{api_url:c,key:d,sub_id:f}}),e.vglnk_self="DISQUS.vglnk",DISQUS.require(a.clientUrl),
DISQUS.defer(function(){return DISQUS.vglnk.opt},function(){g.sendMessage("affiliationOptions",{timeout:DISQUS.vglnk.opt("click_timeout")})}),b(c,d,f)}});g.on("loadBackplane",function(){g.off("loadBackplane");l.backplane=new DISQUS.backplane.BackplaneIntegration(g)});u=e.setTimeout(function(){if(t)(new Image).src=DISQUS.serialize("//juggler.services.disqus.com/stat.gif",{event:"slow_embed"}),t.innerHTML+='<p>DISQUS seems to be taking longer than usual. <a href="#" onclick="DISQUS.reset({reload: true}); return false;">Reload</a>?</p>'},
1E4);g.load(function(){h.notSupported?(g.elem.setAttribute("height","500px"),g.elem.setAttribute("scrolling","yes"),g.elem.setAttribute("horizontalscrolling","no"),g.elem.setAttribute("verticalscrolling","yes")):(g.elem.setAttribute("scrolling","no"),g.elem.setAttribute("horizontalscrolling","no"),g.elem.setAttribute("verticalscrolling","no"))});c("window.hashchange",function(a){g.sendMessage("window.hashchange",a.hash)});c("window.resize",function(){g.sendMessage("window.resize")});c("window.scroll",
l.scrollListener);c("window.click",function(){g.sendMessage("window.click")});c("switches.changed",function(a){g.sendMessage("switches.changed",a)});l.trigger("loading.start")};c.prototype.destroy=function(){var a=this.indicators;this.off();if(this._boundGlobalEvents.length)DISQUS.off(this._boundGlobalEvents.join(" "),null,this),this._boundGlobalEvents=null;this.frame&&this.frame.destroy();if(a.north)a.north.destroy(),a.north=null;if(a.south)a.south.destroy(),a.south=null;DISQUS.App.prototype.destroy.call(this)};
c.prototype.getWindowYCoords=function(){if(typeof e.pageYOffset=="number")this.getWindowScroll=function(){return e.pageYOffset},this.getWindowHeight=function(){return e.innerHeight};else{var a=e.document,a=a.documentElement.clientHeight||a.documentElement.clientWidth?a.documentElement:a.body;this.getWindowScroll=function(){return a.scrollTop};this.getWindowHeight=function(){return a.clientHeight}}this.getWindowYCoords=function(){return{pageYOffset:this.getWindowScroll(),innerHeight:this.getWindowHeight()}};
return this.getWindowYCoords()};c.prototype.scrollListener=function(){var a=this.frame,b=a.getPosition(),c=b.top,d=c+a.elem.offsetHeight,e=this.getWindowYCoords(),f=e.pageYOffset,e=e.innerHeight,i=f+e,k=!1,g=!1;c<=i+e&&(g=(k=d>=f)&&c<=i);k&&(a.sendMessage("window.scroll",{frameOffset:b,pageOffset:f,height:e}),this.wasNearViewport||a.sendMessage("window.nearViewport"));this.wasNearViewport=k;if(g!==this.wasInViewport)a.sendMessage(g?"window.inViewport":"window.scrollOffViewport"),this.wasInViewport=
g};var n=function(a){return new c(a)};DISQUS.extend(n,{listByKey:function(){var a={};b(function(b){a[b.uid]=b});return a},list:function(){var a=[];b(function(b){a.push(b)});return a},get:function(a){a=DISQUS.App.get(a);return a instanceof c&&a}});return{Lounge:n}});
(function(e,i,d){function b(){function a(b){var b=b.getAttribute?b.getAttribute("src"):b.src,c=[/(https?:)\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i,/(https?:)\/\/(www\.)?([\w_\-]+)\.disqus\.com/i,/(https?:)\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i,/(https?:)\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i],d=c.length;if(!b||b.substring(b.length-8)!="embed.js")return null;for(var g=0;g<d;g++){var e=b.match(c[g]);if(e&&e.length&&e.length==4)return j=e[1]||null,e[3]}return null}for(var b=i.getElementsByTagName("script"),
c=b.length-1;c>=0;c--){var d=a(b[c]);if(d!==null)return d}return null}function k(){if(e.location.protocol==="https:")return!0;j===d&&b();return j==="https:"}function f(){for(var a=i.getElementsByTagName("h1"),b=i.title,c=b.length,e=b,f=0.6,h=0;h<a.length;h++)(function(a){var a=a.textContent||a.innerText,g;if(!(a===null||a===d)){g=0;for(var h=Array(b.length),i=0;i<=b.length;i++){h[i]=Array(a.length);for(var j=0;j<=a.length;j++)h[i][j]=0}for(i=0;i<b.length;i++)for(j=0;j<a.length;j++)b[i]==a[j]&&(h[i+
1][j+1]=h[i][j]+1,h[i+1][j+1]>g&&(g=h[i+1][j+1]));g/=c;g>f&&(f=g,e=a)}})(a[h]);return e}function a(){var a=i.getElementById(n);if(a){a.innerHTML="";var b=l.page;r=c.getBrowserSupport(e);a={container:n,forum:h,sortOrder:"popular",permalink:m,useSSL:k(),language:l.language,typeface:c.isSerif(a)?"serif":"sans-serif",anchorColor:c.getAnchorColor(a),colorScheme:128<c.getContrastYIQ(c.getElementStyle(a,"span","color"))?"dark":"light",url:b.url||e.location.href.replace(/#.*$/,""),title:b.title,documentTitle:f(),
slug:b.slug,category:b.category_id,identifier:b.identifier,apiKey:b.api_key,remoteAuthS3:b.remote_auth_s3,sso:l.sso,useConman:e.disqus_demo,notSupported:r};o=DISQUS.Lounge(a);var d={onReady:"loading.done",onNewComment:"posts.create",onPaginate:"posts.paginate",onIdentify:"session.identify"};DISQUS.each(l.callbacks,function(a,b){d[b]&&DISQUS.each(a,function(a){o.on(d[b],a)})});o.init()}else(a=e.console)&&typeof a.log==="function"&&a.log("DISQUS: Container (disqus_thread) element is missing.")}var c=
DISQUS.use("next.publisher"),n=e.disqus_container_id||"disqus_thread",j,m=function(){var a=e.location.hash;return(a=a&&a.match(/comment\-([0-9]+)/))&&a[1]}(),l={page:{url:d,title:d,slug:d,category_id:d,identifier:d,language:d,api_key:d,remote_auth_s3:d,author_s3:d,developer:d},strings:d,sso:{},callbacks:{preData:[],preInit:[],onInit:[],afterRender:[],onReady:[],onNewComment:[],preReset:[],onPaginate:[],onIdentify:[]}};DISQUS.each(["developer","shortname","identifier","url","title","category_id","language",
"slug"],function(a){var b=e["disqus_"+a];typeof b!=="undefined"&&(l.page[a]=b)});var h=e.disqus_shortname||b(),h=h.toLowerCase();if(typeof e.disqus_config==="function")try{e.disqus_config.call(l)}catch(s){}var o,r=0;a();if(!r){var p=DISQUS.Switches({container:n,useSSL:k()});p.fetch({data:{forum:h}});DISQUS.domready(function(){if(i.getElementsByClassName){var a=i.getElementsByClassName("dsq-brlink");a&&a.length&&a[0].parentNode.removeChild(a[0])}});DISQUS.request={get:function(a,b,c){DISQUS.require(a,
b,c)}};DISQUS.reset=function(b){b=b||{};if(typeof b.config==="function")try{b.config.call(l)}catch(c){}o&&(o.destroy(),o=null);b.reload&&(a(),DISQUS.trigger("switches.changed",p.switches))}}})(this,this.document);