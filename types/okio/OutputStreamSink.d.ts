import type { OutputStream } from '../java/io/OutputStream.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class OutputStreamSink extends Object implements Sink {
    constructor(out: OutputStream, timeout: Timeout)
    // private out: OutputStream;
    // private timeout: Timeout;
    close(): void;
    flush(): void;
    timeout(): Timeout;
    toString(): string;
    write(source: Buffer, byteCount: number): void;
}