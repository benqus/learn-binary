import { Buffer } from 'node:buffer';

export function logBufferAsBinaryString(buffer: Buffer, delimiter = ' '): void {
  const array = buffer.reduce((arr, byte) =>
    arr.concat(byte.toString(2).padStart(8, '0')), [] as Array<String>);
  console.log('Binary:', array.join(delimiter));
}
