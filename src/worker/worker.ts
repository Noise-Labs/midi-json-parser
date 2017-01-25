// tslint:disable-next-line:max-line-length
export const worker = `!function(){"use strict";var a=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.byteLength-(b-a.byteOffset);b+=a.byteOffset;for(var d=[],e=new Uint8Array(a.buffer,b,c),f=0;f<c;f+=1){var g=e[f].toString(16).toUpperCase();1===g.length&&(g=0+g),d[f]=g}return d.join("")},b=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.byteLength-(b-a.byteOffset);b+=a.byteOffset;var d=new Uint8Array(a.buffer,b,c);return String.fromCharCode.apply(null,d)},c=function(a){for(var b=new DataView(a),c=e(b),d=14,f=[],g=0,h=c.numberOfTracks;g<h;g+=1){var j=void 0,k=i(b,d);d=k.offset,j=k.track,f.push(j)}return{division:c.division,format:c.format,tracks:f}},d=function(a,b,c){var d=void 0,e=void 0,i=j(a,b);b=i.offset,d=i.value;var k=a.getUint8(b);return e=240===k?h(a,b+1):255===k?f(a,b+1):g(k,a,b+1,c),e.event.delta=d,e},e=function(a){if("MThd"!==b(a,0,4))throw new Error('Unexpected characters "'+b(a,0,4)+'" found instead of "MThd"');if(6!==a.getUint32(4))throw new Error("The header has an unexpected length of "+a.getUint32(4)+" instead of 6");var c=a.getUint16(8),d=a.getUint16(10),e=a.getUint16(12);return{division:e,format:c,numberOfTracks:d}},f=function(a,c){var d=void 0,e=void 0,f=a.getUint8(c),g=j(a,c+1);if(c=g.offset,e=g.value,3===f)d={trackName:b(a,c,e)};else if(32===f)d={channelPrefix:a.getUint8(c)};else if(33===f)d={midiPort:a.getUint8(c)};else if(47===f)d={endOfTrack:!0};else if(81===f)d={setTempo:{microsecondsPerBeat:(a.getUint8(c)<<16)+(a.getUint8(c+1)<<8)+a.getUint8(c+2)}};else if(84===f){var h=void 0,i=a.getUint8(c);0===(96&i)?h=24:32===(96&i)?h=25:64===(96&i)?h=29:96===(96&i)&&(h=30),d={smpteOffset:{frame:a.getUint8(c+3),frameRate:h,hour:31&i,minutes:a.getUint8(c+1),seconds:a.getUint8(c+2),subFrame:a.getUint8(c+4)}}}else if(88===f)d={timeSignature:{denominator:Math.pow(2,a.getUint8(c+1)),metronome:a.getUint8(c+2),numerator:a.getUint8(c),thirtyseconds:a.getUint8(c+3)}};else{if(89!==f)throw new Error('Cannot parse a meta event with a type of "'+f.toString(16)+'"');d={keySignature:{key:a.getInt8(c),scale:a.getInt8(c+1)}}}return{event:d,offset:c+e}},g=function(a,b,c,d){var e=void 0,f=a>>4;if(0===(128&a)?c-=1:d=null,8===f||null!==d&&void 0!==d.noteOff)e={noteOff:{noteNumber:b.getUint8(c),velocity:b.getUint8(c+1)}},c+=2;else if(9===f||null!==d&&void 0!==d.noteOn){var g=b.getUint8(c),h=b.getUint8(c+1);e=0===h?{noteOff:{noteNumber:g,velocity:h}}:{noteOn:{noteNumber:g,velocity:h}},c+=2}else if(11===f||null!==d&&void 0!==d.controlChange)e={controlChange:{type:b.getUint8(c),value:b.getUint8(c+1)}},c+=2;else if(12===f||null!==d&&void 0!==d.programChange)e={programChange:{programNumber:b.getUint8(c)}},c+=1;else{if(14!==f&&(null===d||void 0===d.pitchBend))throw new Error('Cannot parse a midi event with a type of "'+f.toString(16)+'"');e={pitchBend:b.getUint8(c)|b.getUint8(c+1)<<7},c+=2}return e.channel=15&a,{event:e,offset:c}},h=function(b,c){var d=void 0,e=j(b,c);return c=e.offset,d=e.value,{event:{sysex:a(b,c,d)},offset:c+d}},i=function(a,c){if("MTrk"!==b(a,c,4))throw new Error('Unexpected characters "'+b(a,c,4)+'" found instead of "MTrk"');var e=null,f=[],g=a.getUint32(c+4)+c+8;for(c+=8;c<g;){var h=d(a,c,e);e=h.event,c=h.offset,f.push(e)}return{offset:c,track:f}},j=function(a,b){for(var c=0;;){var d=a.getUint8(b);if(b+=1,!(d>127))return c+=d,{offset:b,value:c};c+=127&d,c<<=7}},k=new Map;self.addEventListener("message",function(a){var b=a.data,d=b.arrayBuffer,e=b.byteIndex,f=b.byteLength,g=b.index,h=k.get(g);void 0===h&&(h=new ArrayBuffer(f),k.set(g,h));for(var i=new Uint8Array(h),j=Math.min(e+1048576,f),l=new Uint8Array(d),m=e;m<j;m+=1)i[m]=l[m-e];if(j===f){try{self.postMessage({index:g,midiFile:c(h)})}catch(a){self.postMessage({err:{message:a.message},index:g,midiFile:null})}k.delete(g)}})}();`;
