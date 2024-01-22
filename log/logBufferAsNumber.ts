import { Buffer } from 'node:buffer';

export function logBufferAsNumber(buffer: Buffer): void {
  const { data } = buffer.toJSON();
  console.log('UInt8:', ...data);
}
