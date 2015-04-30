var jsUtilLib = jsUtilLib || {};
jsUtilLib = {
	_arrayMap:function(){
		if(!Array.prototype.map){
			Array.prototype.map = function(fn,scope) {
				var result = [],ri = 0;
				for (var i = 0,n = this.length; i < n; i++){
					if(i in this){result[ri++]  = fn.call(scope ,this[i],i,this);}
				}
				return result;
			};
		}
	},
	_getWinSize:function(){
		return ["Height","Width"].map(function(name){
			return document.compatMode === "CSS1Compat" && document.documentElement[ "client" + name ] || document.body[ "client" + name ];
		});
	},
	_getDocSize:function(){
		return ["Height","Width"].map(function(name){
			return document.compatMode === "CSS1Compat" && document.documentElement[ "scroll" + name ] || document.body[ "scroll" + name ];
		});
	},
	getUrlparameter:function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return 0;
	},
	tab:function(){
		var tLi = arguments[0],cLi = arguments[1];
		if(typeof(tLi) != "undefined" && typeof(cLi) != "undefined"){
			tLi.bind("click",function(){
				var i = $(this).index();
				tLi.filter(".current").removeClass("current");
				cLi.filter(".current").removeClass("current");
				$(this).addClass("current");
				cLi.eq(i).addClass("current");
			});
		}
	},
	fmoney:function(s,n){  
	   n = n > 0 && n <= 20 ? n : 2;  
	   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
	   var l = s.split(".")[0].split("").reverse(),  
	   r = s.split(".")[1];  
	   t = "";  
	   for(i = 0; i < l.length; i ++){  
		  t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
	   }  
	   return t.split("").reverse().join("") + "." + r;  
	},
	rmoney:function(s){  
   		return parseFloat(s.replace(/[^\d\.-]/g, ""));  
	} 
}