import type { Deflater } from '../java/util/zip/Deflater.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class DeflaterSink extends Object implements Sink {
    constructor(sink: BufferedSink, deflater: Deflater)
    constructor(sink: Sink, deflater: Deflater)
    // private closed: boolean;
    // private deflater: Deflater;
    // private sink: BufferedSink;
    close(): void;
    // private deflate(syncFlush: boolean): void;
    finishDeflate(): void;
    flush(): void;
    timeout(): Timeout;
    toString(): string;
    write(source: Buffer, byteCount: number): void;
}