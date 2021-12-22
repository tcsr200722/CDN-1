(function(){var overrideObject=function(obj,propertyName,overrideValue){if(!obj)return false;var overriden=false;for(var key in obj)if(obj.hasOwnProperty(key)&&key===propertyName){obj[key]=overrideValue;overriden=true}else if(obj.hasOwnProperty(key)&&typeof obj[key]==="object")if(overrideObject(obj[key],propertyName,overrideValue))overriden=true;if(overriden);return overriden};var jsonOverride=function(propertyName,overrideValue){JSON.parse=new Proxy(JSON.parse,{apply:function(){var obj=Reflect.apply.apply(Reflect,arguments);overrideObject(obj,propertyName,overrideValue);return obj}});Response.prototype.json=new Proxy(Response.prototype.json,{apply:function(){var promise=Reflect.apply.apply(Reflect,arguments);return new Promise(function(resolve,reject){promise.then(function(data){overrideObject(data,propertyName,overrideValue);resolve(data)})["catch"](function(error){return reject(error)})})}})};jsonOverride("adPlacements",[]);jsonOverride("playerAds",[])})();