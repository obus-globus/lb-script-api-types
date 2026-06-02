import type { CRC32 } from '../java/util/zip/CRC32.d.ts'
import type { Deflater } from '../java/util/zip/Deflater.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { DeflaterSink } from '../okio/DeflaterSink.d.ts'
import type { RealBufferedSink } from '../okio/RealBufferedSink.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class GzipSink extends Object implements Sink {
    constructor(sink: Sink)
    // private closed: boolean;
    // private crc: CRC32;
    // private deflater: Deflater;
    deflater(): Deflater;
    // private deflaterSink: DeflaterSink;
    // private sink: RealBufferedSink;
    close(): void;
    deflater(): Deflater;
    flush(): void;
    timeout(): Timeout;
    // private updateCrc(buffer: Buffer, byteCount: number): void;
    write(source: Buffer, byteCount: number): void;
    // private writeFooter(): void;
}