import type { BytesSupplier } from '../../../../ai/djl/ndarray/BytesSupplier.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class IteratorBytesSupplier extends Object implements BytesSupplier, Iterator<number[]> {
    static wrap(paramarg0: number[]): BytesSupplier;
    static wrap(paramarg0: string): BytesSupplier;
    static wrapAsJson(paramarg0: Object): BytesSupplier;
    constructor(arg0: Iterator<BytesSupplier>)
    // private sources: Iterator<BytesSupplier>;
    forEachRemaining(arg0: (param0: T) => void): void;
    getAsBytes(): number[];
    getAsObject(): Object;
    getAsString(): string;
    hasNext(): boolean;
    next(): number[];
    toByteBuffer(): ByteBuffer;
}