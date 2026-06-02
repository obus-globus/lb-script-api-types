import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Inflater } from '../../../java/util/zip/Inflater.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { InflaterSource } from '../../../okio/InflaterSource.d.ts'
export class MessageInflater extends Object implements Closeable {
    constructor(noContextTakeover: boolean)
    // private deflatedBytes: Buffer;
    // private inflater: Inflater | null;
    // private inflaterSource: InflaterSource | null;
    // private noContextTakeover: boolean;
    close(): void;
    inflate(buffer: Buffer): void;
}