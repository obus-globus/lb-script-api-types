import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { UnpooledSlicedByteBuf } from '../../../io/netty/buffer/UnpooledSlicedByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AbstractPooledDerivedByteBuf$PooledNonRetainedSlicedByteBuf extends UnpooledSlicedByteBuf {
    constructor(arg0: ByteBuf, arg1: AbstractByteBuf, arg2: number, arg3: number)
    // private referenceCountDelegate: ByteBuf;
    duplicate(): ByteBuf;
    isAccessible0(): boolean;
    refCnt0(): number;
    release0(): boolean;
    release0(arg0: number): boolean;
    retain0(): ByteBuf;
    retain0(arg0: number): ByteBuf;
    retainedDuplicate(): ByteBuf;
    retainedSlice(): ByteBuf;
    retainedSlice(arg0: number, arg1: number): ByteBuf;
    slice(): ByteBuf;
    slice(arg0: number, arg1: number): ByteBuf;
    touch0(): ByteBuf;
    touch0(arg0: Object): ByteBuf;
}