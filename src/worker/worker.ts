// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),i=e.slice(1);return"".concat(o).concat(i)}return"dashify"===t?r(e):"prependIndefiniteArticle"===t?"".concat(n(e)," ").concat(e):e}),e)},i=function(e,r){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],a=n.exec(e);null!==a;){var s={modifiers:[],name:a[1]};if(void 0!==a[3])for(var c=/\\.[^(]+\\(\\)/g,u=c.exec(a[2]);null!==u;)s.modifiers.push(u[0].slice(1,-2)),u=c.exec(a[2]);i.push(s),a=n.exec(e)}var f=i.reduce((function(e,n){return e.map((function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(n)).reduce((function(e,i,a){return 0===a?[i]:n.name in r?[].concat(t(e),[o(r[n.name],n.modifiers),i]):[].concat(t(e),[function(e){return o(e[n.name],n.modifiers)},i])}),[]):[e]})).reduce((function(e,r){return[].concat(t(e),t(r))}),[])}),[e]);return function(e){return f.reduce((function(r,n){return[].concat(t(r),"string"==typeof n?[n]:[n(e)])}),[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:i(e.code,t),n=void 0===e.message?void 0:i(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=i.cause,s=i.missingParameters,c=void 0===n?new Error:new Error(n(s));return null!==a&&(c.cause=a),void 0!==r&&(c.code=r(s)),void 0!==e.status&&(c.status=e.status),c}return o},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(3),r(7),r(8))},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){!function(e){"use strict";var t,r=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,n=new WeakMap,o=(t=n,function(e,r){return t.set(e,r),r}),i=function(e,t){return function(n){var o=t.get(n),i=void 0===o?n.size:o>2147483646?0:o+1;if(!n.has(i))return e(n,i);if(n.size<1073741824){for(;n.has(i);)i=Math.floor(2147483648*Math.random());return e(n,i)}if(n.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;n.has(i);)i=Math.floor(Math.random()*r);return e(n,i)}}(o,n),a=function(e){return function(t){var r=e(t);return t.add(r),r}}(i);e.addUniqueNumber=a,e.generateUniqueNumber=i,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){var n=r(4),o=r(5),i=r(6);e.exports=function(e){return n(e)||o(e)||i()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,r){var n=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=n:window.indefiniteArticle=n},function(e,t,r){"use strict";r.r(t);var n=r(0);const o=-32603,i=-32602,a=-32601,s=Object(n.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),c=Object(n.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),u=Object(n.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(n.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:i}),l=(e,t)=>async r=>{let{data:{id:n,method:o,params:i}}=r;const a=t[o];try{if(void 0===a)throw s({method:o});const t=void 0===i?a():a(i);if(void 0===t)throw c({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw u({method:o})}else{if(void 0===r.result)throw u({method:o});const{result:t,transferables:i=[]}=r;e.postMessage({id:n,result:t},i)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var d=r(1),p=r.n(d),g=r(2);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const h=new Map,v=(e,t,r)=>(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e})({},t,{connect:r=>{let{port:n}=r;n.start();const o=e(n,t),i=Object(g.generateUniqueNumber)(h);return h.set(i,()=>{o(),n.close(),h.delete(i)}),{result:i}},disconnect:e=>{let{portId:t}=e;const r=h.get(t);if(void 0===r)throw f({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await(()=>new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))()){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),y=e=>void 0!==e.channel,b=e=>e.toString(16).toUpperCase().padStart(2,"0"),O=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.byteLength-(t-e.byteOffset);const n=t+e.byteOffset,o=[],i=new Uint8Array(e.buffer,n,r);for(let e=0;e<r;e+=1)o[e]=b(i[e]);return o.join("")},w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.byteLength-(t-e.byteOffset);const n=t+e.byteOffset,o=new Uint8Array(e.buffer,n,r);return String.fromCharCode.apply(null,o)};function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(r,!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const P=(e,t,r)=>{let n;const{offset:o,value:i}=T(e,t),a=e.getUint8(o);return j({},n=240===a?S(e,o+1):255===a?E(e,o+1):M(a,e,o+1,r),{event:j({},n.event,{delta:i}),eventTypeByte:a})},x=e=>{if("MThd"!==w(e,0,4))throw new Error('Unexpected characters "'.concat(w(e,0,4),'" found instead of "MThd"'));if(6!==e.getUint32(4))throw new Error("The header has an unexpected length of ".concat(e.getUint32(4)," instead of 6"));const t=e.getUint16(8),r=e.getUint16(10);return{division:e.getUint16(12),format:t,numberOfTracks:r}},E=(e,t)=>{let r;const n=e.getUint8(t),{offset:o,value:i}=T(e,t+1);if(1===n)r={text:w(e,o,i)};else if(2===n)r={copyrightNotice:w(e,o,i)};else if(3===n)r={trackName:w(e,o,i)};else if(4===n)r={instrumentName:w(e,o,i)};else if(5===n)r={lyric:w(e,o,i)};else if(6===n)r={marker:w(e,o,i)};else if(8===n)r={programName:w(e,o,i)};else if(9===n)r={deviceName:w(e,o,i)};else if(10===n||11===n||12===n||13===n||14===n||15===n)r={metaTypeByte:b(n),text:w(e,o,i)};else if(32===n)r={channelPrefix:e.getUint8(o)};else if(33===n)r={midiPort:e.getUint8(o)};else if(47===n)r={endOfTrack:!0};else if(81===n)r={setTempo:{microsecondsPerBeat:(e.getUint8(o)<<16)+(e.getUint8(o+1)<<8)+e.getUint8(o+2)}};else if(84===n){let t;const n=e.getUint8(o);0==(96&n)?t=24:32==(96&n)?t=25:64==(96&n)?t=29:96==(96&n)&&(t=30),r={smpteOffset:{frame:e.getUint8(o+3),frameRate:t,hour:31&n,minutes:e.getUint8(o+1),seconds:e.getUint8(o+2),subFrame:e.getUint8(o+4)}}}else if(88===n)r={timeSignature:{denominator:Math.pow(2,e.getUint8(o+1)),metronome:e.getUint8(o+2),numerator:e.getUint8(o),thirtyseconds:e.getUint8(o+3)}};else if(89===n)r={keySignature:{key:e.getInt8(o),scale:e.getInt8(o+1)}};else{if(127!==n)throw new Error('Cannot parse a meta event with a type of "'.concat(b(n),'"'));r={sequencerSpecificData:O(e,o,i)}}return{event:r,offset:o+i}},M=(e,t,r,n)=>{const o=0==(128&e)?n:null,i=(null===o?e:o)>>4;let a,s=null===o?r:r-1;if(8===i)a={noteOff:{noteNumber:t.getUint8(s),velocity:t.getUint8(s+1)}},s+=2;else if(9===i){const e=t.getUint8(s),r=t.getUint8(s+1);a=0===r?{noteOff:{noteNumber:e,velocity:r}}:{noteOn:{noteNumber:e,velocity:r}},s+=2}else if(10===i)a={keyPressure:{pressure:t.getUint8(s)}},s+=1;else if(11===i)a={controlChange:{type:t.getUint8(s),value:t.getUint8(s+1)}},s+=2;else if(12===i)a={programChange:{programNumber:t.getUint8(s)}},s+=1;else if(13===i)a={channelPressure:{noteNumber:t.getUint8(s),pressure:t.getUint8(s+1)}},s+=2;else{if(14!==i)throw new Error('Cannot parse a midi event with a type of "'.concat(b(i),'"'));a={pitchBend:t.getUint8(s)|t.getUint8(s+1)<<7},s+=2}return a.channel=15&(null===o?e:o),{event:a,offset:s}},S=(e,t)=>{const{offset:r,value:n}=T(e,t);return{event:{sysex:O(e,r,n)},offset:r+n}},N=(e,t)=>{if("MTrk"!==w(e,t,4))throw new Error('Unexpected characters "'.concat(w(e,t,4),'" found instead of "MTrk"'));const r=[],n=e.getUint32(t+4)+t+8;let o=null,i=t+8;for(;i<n;){const t=P(e,i,o),{event:n,eventTypeByte:a}=t;r.push(n),i=t.offset,y(n)&&(128&a)>0&&(o=a)}return{offset:i,track:r}},T=(e,t)=>{let r=t,n=0;for(;;){const t=e.getUint8(r);if(r+=1,!(t>127))return{offset:r,value:n+=t};n+=127&t,n<<=7}};!function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const o=v(e,r,n),i=l(t,o);return t.addEventListener("message",i),()=>t.removeEventListener("message",i)}(self,{parse:e=>{let{arrayBuffer:t}=e;return{result:(e=>{const t=new DataView(e),r=x(t);let n=14;const o=[];for(let e=0,i=r.numberOfTracks;e<i;e+=1){let e;({offset:n,track:e}=N(t,n)),o.push(e)}return{division:r.division,format:r.format,tracks:o}})(t)}}})}]);`;
