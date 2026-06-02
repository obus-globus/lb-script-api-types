import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { RawSink } from '../../kotlinx/io/RawSink.d.ts'
export class OutputStreamSink extends Object implements RawSink {
    constructor(out: OutputStream)
    // private out: OutputStream;
    close(): void;
    flush(): void;
    toString(): string;
    write(source: Buffer, byteCount: number): void;
}