if(typeof Plex==='undefined')Plex={};Plex.amplitude={};Plex.amplitude.setUser=function(){var data=AmplitudeData;if(typeof data.user_id!='undefined'){amplitude.getInstance().setUserId(data.user_id);}};(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script");r.type="text/javascript";r.async=true;r.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-3.4.1-min.gz.js";r.onload=function(){if(e.amplitude.runQueuedFunctions){e.amplitude.runQueuedFunctions();}else{console.log("[Amplitude] Error: could not load SDK")}};var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i);function o(e,t){e.prototype[t]=function(){this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}} var s=function(){this._q=[];return this};var a=["add","append","clearAll","prepend","set","setOnce","unset"];for(var u=0;u<a.length;u++){o(s,a[u])} n.Identify=s;var c=function(){this._q=[];return this;};var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(var p=0;p<l.length;p++){o(c,l[p])} n.Revenue=c;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","logEventWithTimestamp","logEventWithGroups"];function v(e){function t(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)));}} for(var n=0;n<d.length;n++){t(d[n])}} v(n);n.getInstance=function(e){e=(!e||e.length===0?"$default_instance":e).toLowerCase();if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])} return n._iq[e]};e.amplitude=n;})(window,document);(function(){amplitude.getInstance().init("cff1f9c1d7282ca62ce783557d55b9e7");if(typeof AmplitudeData!='undefined')Plex.amplitude.setUser();var amp=amplitude.getInstance();var signed_out=document.getElementById('_banner_ad_bar');var path=window.location.pathname;var params=window.location.search.slice(1);var params_split=params.split('&');if(path==='/signup'){var utm_map={};if(params&&params_split.length>1){localStorage.comingFromSignup='true';utm_map=params_split.reduce(function(obj,value){var split=value.split('=');obj[split[0]]=split[1];localStorage[split[0]]=split[1];return obj;},{});} amp.logEvent('view sign-up page',utm_map);}else if(signed_out&&path.indexOf('/news')!==-1){var slug=path.split('/').reverse()[0];amp.logEvent('view news',{slug:slug,});}else if(signed_out&&path.indexOf('/college')!==-1){var slug=path.split('/').reverse()[0];amp.logEvent('view college',{slug:slug,});}else if(path.indexOf('/college-application')!==-1&&localStorage.comingFromSignup==='true'){localStorage.comingFromSignup='';var is_fb_signup=document.getElementById('_fb-id');var method=is_fb_signup?'Facebook':'Normal';var all_utms=['utm_campaign','utm_content','utm_medium','utm_source','utm_term',];var data=all_utms.reduce(function(all,utm){if(localStorage[utm])all[utm]=localStorage[utm];return all;},{});data.method=method;amp.logEvent('sign up',data);all_utms.forEach(function(utm){localStorage[utm]='';});localStorage.method='';}})();