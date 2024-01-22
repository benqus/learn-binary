import { Buffer } from 'node:buffer';

export function logBufferAsJSON(buffer: Buffer): void {
  console.log('JSON:', JSON.stringify(buffer.toJSON()));
}
