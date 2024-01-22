import { Buffer } from 'node:buffer';

import { logBufferAsBinaryString } from './logBufferAsBinaryString';
import { logBufferAsHexadecimal } from './logBufferAsHexadecimal';
import { logBufferAsNumber } from './logBufferAsNumber';
import { logBufferAsJSON } from './logBufferAsJSON';

export function logBuffer(buffer: Buffer, encoding: BufferEncoding = 'utf8'): void {
  console.log('UTF-8:', buffer.toString(encoding));
  logBufferAsNumber(buffer);
  logBufferAsHexadecimal(buffer);
  console.log('Buffer:', buffer);
  logBufferAsBinaryString(buffer);
  logBufferAsJSON(buffer);
  console.log('\n');
}
