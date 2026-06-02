import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ByteOrder } from '../../../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BoundedInputStream } from '../../../../../org/apache/commons/io/input/BoundedInputStream.d.ts'
export class BitInputStream extends Object implements Closeable {
    constructor(arg0: InputStream, arg1: ByteOrder)
    // private bitsCached: number;
    // private bitsCachedSize: number;
    // private byteOrder: ByteOrder;
    // private in: BoundedInputStream;
    alignWithByteBoundary(): void;
    bitsAvailable(): number;
    bitsCached(): number;
    clearBitCache(): void;
    close(): void;
    // private ensureCache(arg0: number): boolean;
    getBytesRead(): number;
    // private processBitsGreater57(arg0: number): number;
    readBit(): number;
    readBits(arg0: number): number;
    // private readCachedBits(arg0: number): number;
}