import { logBuffer } from './log';

export function utf8characters(offsetStart = 0, offsetEnd = 0): void {
  const utf8charCodes = new Array(127 - offsetStart - offsetEnd)
    .fill(0)
    .map((_, i: number): number => offsetStart + i);

  const utf8buffer = Buffer.from(utf8charCodes);

  logBuffer(utf8buffer);
}
