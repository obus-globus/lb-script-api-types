import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { WrappedByteBuf } from '../../../io/netty/buffer/WrappedByteBuf.d.ts'
import type { ResourceLeakTracker } from '../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SimpleLeakAwareByteBuf extends WrappedByteBuf {
    constructor(arg0: ByteBuf, arg1: ByteBuf, arg2: ResourceLeakTracker<ByteBuf>)
    constructor(arg0: ByteBuf, arg1: ResourceLeakTracker<ByteBuf>)
    // private leak: ResourceLeakTracker<ByteBuf>;
    // private trackedByteBuf: ByteBuf;
    asReadOnly(): ByteBuf;
    // private closeLeak(): void;
    duplicate(): ByteBuf;
    newLeakAwareByteBuf(arg0: ByteBuf, arg1: ByteBuf, arg2: ResourceLeakTracker<ByteBuf>): SimpleLeakAwareByteBuf;
    // private newLeakAwareByteBuf(arg0: ByteBuf, arg1: ResourceLeakTracker<ByteBuf>): SimpleLeakAwareByteBuf;
    // private newSharedLeakAwareByteBuf(arg0: ByteBuf): SimpleLeakAwareByteBuf;
    order(): ByteOrder;
    order(arg0: ByteOrder): ByteBuf;
    readRetainedSlice(arg0: number): ByteBuf;
    readSlice(arg0: number): ByteBuf;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): ByteBuf;
    retain(arg0: number): ByteBuf;
    retainedDuplicate(): ByteBuf;
    retainedSlice(): ByteBuf;
    retainedSlice(arg0: number, arg1: number): ByteBuf;
    slice(): ByteBuf;
    slice(arg0: number, arg1: number): ByteBuf;
    touch(): ByteBuf;
    touch(arg0: Object): ByteBuf;
    // private unwrappedDerived(arg0: ByteBuf): ByteBuf;
}