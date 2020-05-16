(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{104:function(t,e,r){t.exports={Form:"SearchBar_Form__2MXbC",Input:"SearchBar_Input__2Ak5b",ButtonForm:"SearchBar_ButtonForm__29VjD"}},107:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.r(e),r.d(e,"default",(function(){return g}));var i=r(52),c=r(53),u=r(55),s=r(54),l=r(0),f=r.n(l),p=r(50),m=r(58),y=r(104),v=r.n(y),d=function(t){Object(u.a)(r,t);var e=Object(s.a)(r);function r(){var t;Object(i.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={queryString:""},t.handleChange=function(e){var r=e.target.value;t.setState({queryString:r})},t.handleSubmit=function(e){var r=t.state.queryString,n=t.props.onSubmit;e.preventDefault(),r&&(n(r),t.setState({queryString:""}))},t}return Object(c.a)(r,[{key:"render",value:function(){var t=this.state.queryString;return f.a.createElement(f.a.Fragment,null,f.a.createElement("form",{className:v.a.Form,onSubmit:this.handleSubmit},f.a.createElement("input",{className:v.a.Input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:t,onChange:this.handleChange}),f.a.createElement("button",{className:v.a.ButtonForm,type:"submit"},f.a.createElement("span",null,"Search"))))}}]),r}(l.Component),h=r(59),b=r(61),g=function(t){Object(u.a)(r,t);var e=Object(s.a)(r);function r(){var t;Object(i.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={movies:[],query:""},t.getMovies=function(e){p.a(e).then((function(e){0===e.results.length?alert("No films were found :( Try one more time!"):t.setState({movies:Object(m.a)(e.results)})})).catch((function(t){console.log(t)}))},t.handleSubmit=function(e){t.setState({query:e})},t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var t=b.parse(this.props.location.search).query;t&&this.getMovies(t)}},{key:"componentDidUpdate",value:function(t,e){var r=this.state.query;e.query!==r&&(this.getMovies(r),this.props.history.push(a(a({},this.props.location),{},{search:"query=".concat(r)})))}},{key:"render",value:function(){var t=this.state.movies;return f.a.createElement(f.a.Fragment,null,f.a.createElement(d,{onSubmit:this.handleSubmit}),t.length?f.a.createElement(h.a,{movies:t}):null)}}]),r}(l.Component)},50:function(t,e,r){"use strict";r.d(e,"e",(function(){return c})),r.d(e,"d",(function(){return u})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return l})),r.d(e,"a",(function(){return f}));var n=r(57),o=r.n(n),a="https://api.themoviedb.org/3/",i="6b5a450f9a03d737f06df8aa6d420041",c=function(){return o.a.get("".concat(a,"trending/all/day?api_key=").concat(i))},u=function(t){return o.a.get("".concat(a,"movie/").concat(t,"?api_key=").concat(i)).then((function(t){return t.data}))},s=function(t){return o.a.get("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(i)).then((function(t){return t.data}))},l=function(t){return o.a.get("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1)")).then((function(t){return t.data}))},f=function(t){return o.a.get("".concat(a,"search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t)).then((function(t){return t.data}))}},51:function(t,e,r){var n=r(56);t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},56:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},58:function(t,e,r){"use strict";e.a=function(t){return t.map((function(t){return{title:t.title,name:t.name,id:t.id}}))}},59:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(9),i=r(6),c=r(60),u=r.n(c);e.a=Object(i.g)((function(t){var e=t.movies,r=t.location;return o.a.createElement("ul",{className:u.a.MoviesList},e.map((function(t){var e=t.title,n=t.name,i=t.id;return o.a.createElement("li",{className:u.a.MoviesListItems,key:i},o.a.createElement(a.b,{className:u.a.MoviesListItemsLink,to:{pathname:"/movies/".concat(i),state:{from:r}}},e||n))})))}))},60:function(t,e,r){t.exports={MoviesList:"MovieList_MoviesList__2oORG",MoviesListItems:"MovieList_MoviesListItems__Zi92A",MoviesListItemsLink:"MovieList_MoviesListItemsLink__JItgj"}},61:function(t,e,r){"use strict";var n=r(62),o=r(66),a=r(67),i=r(71),c=r(72),u=r(73);function s(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(t,e){return e.encode?e.strict?i(t):encodeURIComponent(t):t}function f(t,e){return e.decode?c(t):t}function p(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function m(t){var e=(t=p(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function y(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function v(t,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"===typeof r&&r.split("").indexOf(t.arrayFormatSeparator)>-1?r.split(t.arrayFormatSeparator).map((function(e){return f(e,t)})):null===r?r:f(r,t);n[e]=o};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),a=Object.create(null);if("string"!==typeof t)return a;if(!(t=t.trim().replace(/^[?#&]/,"")))return a;var i,c=o(t.split("&"));try{for(c.s();!(i=c.n()).done;){var l=i.value,p=u(e.decode?l.replace(/\+/g," "):l,"="),m=n(p,2),v=m[0],d=m[1];d=void 0===d?null:["comma","separator"].includes(e.arrayFormat)?d:f(d,e),r(f(v,e),d,a)}}catch(x){c.e(x)}finally{c.f()}for(var h=0,b=Object.keys(a);h<b.length;h++){var g=b[h],j=a[g];if("object"===typeof j&&null!==j)for(var O=0,S=Object.keys(j);O<S.length;O++){var w=S[O];j[w]=y(j[w],e)}else a[g]=y(j,e)}return!1===e.sort?a:(!0===e.sort?Object.keys(a).sort():Object.keys(a).sort(e.sort)).reduce((function(t,e){var r=a[e];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(r):t[e]=r,t}),Object.create(null))}e.extract=m,e.parse=v,e.stringify=function(t,e){if(!t)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&(null===(n=t[r])||void 0===n)||e.skipEmptyString&&""===t[r];var n},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[l(e,t),"[",o,"]"].join("")]:[[l(e,t),"[",l(o,t),"]=",l(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[l(e,t),"[]"].join("")]:[[l(e,t),"[]=",l(n,t)].join("")])}};case"comma":case"separator":return function(e){return function(r,n){return null===n||void 0===n||0===n.length?r:0===r.length?[[l(e,t),"=",l(n,t)].join("")]:[[r,l(n,t)].join(t.arrayFormatSeparator)]}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[l(e,t)]:[[l(e,t),"=",l(n,t)].join("")])}}}}(e),o={},i=0,c=Object.keys(t);i<c.length;i++){var u=c[i];r(u)||(o[u]=t[u])}var f=Object.keys(o);return!1!==e.sort&&f.sort(e.sort),f.map((function(r){var o=t[r];return void 0===o?"":null===o?l(r,e):Array.isArray(o)?o.reduce(n(r),[]).join("&"):l(r,e)+"="+l(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){return{url:p(t).split("?")[0]||"",query:v(m(t),e)}},e.stringifyUrl=function(t,r){var n=p(t.url).split("?")[0]||"",o=e.extract(t.url),a=e.parse(o),i=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url),c=Object.assign(a,t.query),u=e.stringify(c,r);return u&&(u="?".concat(u)),"".concat(n).concat(u).concat(i)}},62:function(t,e,r){var n=r(63),o=r(64),a=r(51),i=r(65);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()}},63:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},64:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}},65:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},66:function(t,e,r){var n=r(51);t.exports=function(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}},67:function(t,e,r){var n=r(68),o=r(69),a=r(51),i=r(70);t.exports=function(t){return n(t)||o(t)||a(t)||i()}},68:function(t,e,r){var n=r(56);t.exports=function(t){if(Array.isArray(t))return n(t)}},69:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},70:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},71:function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},72:function(t,e,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],a(r),a(n))}function i(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=a(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=o.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var a=i(n[0]);a!==n[0]&&(r[n[0]]=a)}n=o.exec(t)}r["%C2"]="\ufffd";for(var c=Object.keys(r),u=0;u<c.length;u++){var s=c[u];t=t.replace(new RegExp(s,"g"),r[s])}return t}(t)}}},73:function(t,e,r){"use strict";t.exports=function(t,e){if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}}}]);
//# sourceMappingURL=movies-page.8edaa2ac.chunk.js.map