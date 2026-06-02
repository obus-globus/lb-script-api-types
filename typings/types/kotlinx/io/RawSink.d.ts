import type { Flushable } from '../../java/io/Flushable.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
export interface RawSink extends Flushable, AutoCloseable, Object{
    close(): void;
    flush(): void;
    write(source: Buffer, byteCount: number): void;
}