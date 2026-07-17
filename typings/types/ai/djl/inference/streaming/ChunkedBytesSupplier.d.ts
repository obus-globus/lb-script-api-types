import type { BytesSupplier } from '../../../../ai/djl/ndarray/BytesSupplier.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkedBytesSupplier extends Object implements BytesSupplier {
    constructor()
    // private completed: AtomicBoolean;
    // private queue: BytesSupplier[];
    appendContent(arg0: BytesSupplier, arg1: boolean): void;
    appendContent(arg0: number[], arg1: boolean): void;
    getAsBytes(): number[];
    getAsObject(): Object;
    getAsString(): string;
    hasNext(): boolean;
    next(arg0: number, arg1: TimeUnit): BytesSupplier;
    nextChunk(arg0: number, arg1: TimeUnit): number[];
    poll(): BytesSupplier;
    pollChunk(): number[];
    toByteBuffer(): ByteBuffer;
}