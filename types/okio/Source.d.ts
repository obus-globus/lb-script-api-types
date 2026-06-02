import type { Closeable } from '../java/io/Closeable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export interface Source extends Closeable, Object{
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    timeout(): Timeout;
}