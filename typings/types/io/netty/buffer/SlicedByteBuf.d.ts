import type { AbstractUnpooledSlicedByteBuf } from '../../../io/netty/buffer/AbstractUnpooledSlicedByteBuf.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
export class SlicedByteBuf extends AbstractUnpooledSlicedByteBuf {
    constructor(arg0: ByteBuf, arg1: number, arg2: number)
    // private length: number;
    capacity(): number;
    capacity(arg0: number): ByteBuf;
    initLength(arg0: number): void;
    length(): number;
}