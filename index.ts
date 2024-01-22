import { logBufferAsBinaryString } from './log';
import { message } from './message';
import { utf8characters } from './utf8';


console.log('message("Hello World!")');
message('Hello World!');


console.log('utf8characters(65, 36)');
utf8characters(65, 36);


console.log('utf8characters(97, 4)');
utf8characters(97, 4);


console.log('new Uint8Array([72, 101, 108, 108, 111, 32,  87, 111, 114, 108, 100,  33])');
const uint8Array = new Uint8Array([72, 101, 108, 108, 111, 32,  87, 111, 114, 108, 100,  33]);
console.log(uint8Array);
console.log(uint8Array.toString());

const buffer = Buffer.from(uint8Array);
console.log(buffer.toString());
console.log('\n');
console.log('UByte', '8', 'buffer.readUInt8(0)', buffer.readUInt8(0));
logBufferAsBinaryString(buffer.subarray(0, 1), '');
console.log('\n');

console.log('UShort', '16', 'buffer.readUInt16BE(0)', buffer.readUint16BE(0));
logBufferAsBinaryString(buffer.subarray(0, 2), '');
console.log('\n');

console.log('UInt', '32', 'buffer.readUInt32BE(0)', buffer.readUint32BE(0));
logBufferAsBinaryString(buffer.subarray(0, 4), '');
console.log('\n');

console.log('ULong', '64', 'buffer.readBigUInt64BE(0)', buffer.readBigUInt64BE(0));
logBufferAsBinaryString(buffer.subarray(0, 8), '');
console.log('\n');


// Browser:
// UInt8Array >> ArrayBuffer
// Buffer     >> DataView

