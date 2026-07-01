import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { CompositeByteBuf$ByteWrapper } from '../../../io/netty/buffer/CompositeByteBuf$ByteWrapper.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class CompositeByteBuf$CompositeByteBufIterator extends Object implements Iterator<ByteBuf> {
    constructor(null_: ByteBuf[], arg1: CompositeByteBuf$ByteWrapper<number[]>)
    // private index: number;
    // private size: number;
    forEachRemaining(arg0: (param0: ByteBuf) => void): void;
    hasNext(): boolean;
    next(): ByteBuf;
    remove(): void;
}