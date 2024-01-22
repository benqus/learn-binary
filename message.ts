import { logBuffer } from './log';

export function message(message: string = 'hello', encoding: BufferEncoding = 'utf8'): void {
  const buffer = Buffer.from(message);

  logBuffer(buffer, encoding);
}
