import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class CompositeByteBuf$CompositeByteBufIterator extends Object implements Iterator<ByteBuf> {
    private constructor(null_: ByteBuf[])
    // private index: number;
    // private size: number;
    forEachRemaining(arg0: (param0: ByteBuf) => void): void;
    hasNext(): boolean;
    next(): ByteBuf;
    remove(): void;
}