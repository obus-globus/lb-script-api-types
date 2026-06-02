import type { BytesSupplier } from '../../../../ai/djl/ndarray/BytesSupplier.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { CountDownLatch } from '../../../../java/util/concurrent/CountDownLatch.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PublisherBytesSupplier extends Object implements BytesSupplier {
    static wrap(paramarg0: number[]): BytesSupplier;
    static wrap(paramarg0: string): BytesSupplier;
    static wrapAsJson(paramarg0: Object): BytesSupplier;
    constructor()
    // private future: CompletableFuture<void>;
    // private latch: CountDownLatch;
    // private subscriber: (param0: number[]) => void;
    appendContent(arg0: number[], arg1: boolean): void;
    getAsBytes(): number[];
    getAsObject(): Object;
    getAsString(): string;
    subscribe(arg0: (param0: number[]) => void): CompletableFuture<void>;
    toByteBuffer(): ByteBuffer;
}