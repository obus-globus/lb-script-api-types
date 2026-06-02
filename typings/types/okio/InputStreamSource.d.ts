import type { InputStream } from '../java/io/InputStream.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class InputStreamSource extends Object implements Source {
    constructor(input: InputStream, timeout: Timeout)
    // private input: InputStream;
    // private timeout: Timeout;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    timeout(): Timeout;
    toString(): string;
}