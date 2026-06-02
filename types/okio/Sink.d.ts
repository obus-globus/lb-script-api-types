import type { Closeable } from '../java/io/Closeable.d.ts'
import type { Flushable } from '../java/io/Flushable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export interface Sink extends Closeable, Flushable, Object{
    close(): void;
    flush(): void;
    timeout(): Timeout;
    write(source: Buffer, byteCount: number): void;
}