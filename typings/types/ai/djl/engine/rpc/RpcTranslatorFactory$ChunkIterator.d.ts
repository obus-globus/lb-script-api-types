import type { ChunkedBytesSupplier } from '../../../../ai/djl/inference/streaming/ChunkedBytesSupplier.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class RpcTranslatorFactory$ChunkIterator extends Object implements Iterator<string> {
    constructor(arg0: ChunkedBytesSupplier)
    // private cbs: ChunkedBytesSupplier;
    // private error: boolean;
    forEachRemaining(arg0: (param0: string) => void): void;
    hasNext(): boolean;
    next(): string;
}