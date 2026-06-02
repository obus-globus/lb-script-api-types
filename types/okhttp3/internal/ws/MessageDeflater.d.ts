import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Deflater } from '../../../java/util/zip/Deflater.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { DeflaterSink } from '../../../okio/DeflaterSink.d.ts'
export class MessageDeflater extends Object implements Closeable {
    constructor(noContextTakeover: boolean)
    // private deflatedBytes: Buffer;
    // private deflater: Deflater;
    // private deflaterSink: DeflaterSink;
    // private noContextTakeover: boolean;
    close(): void;
    deflate(buffer: Buffer): void;
}