import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AbstractReferenceCountedByteBuf } from '../../../io/netty/buffer/AbstractReferenceCountedByteBuf.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
export abstract class AbstractPooledDerivedByteBuf extends AbstractReferenceCountedByteBuf {
    constructor(arg0: ObjectPool$Handle<AbstractPooledDerivedByteBuf>)
    // private parent: ByteBuf;
    // private recyclerHandle: Recycler$EnhancedHandle<AbstractPooledDerivedByteBuf>;
    // private rootParent: AbstractByteBuf;
    alloc(): ByteBufAllocator;
    array(): number[];
    deallocate(): void;
    duplicate0(): ByteBuf;
    hasArray(): boolean;
    hasMemoryAddress(): boolean;
    init<U extends AbstractPooledDerivedByteBuf>(arg0: AbstractByteBuf, arg1: ByteBuf, arg2: number, arg3: number, arg4: number): U;
    internalNioBuffer(arg0: number, arg1: number): ByteBuffer;
    isContiguous(): boolean;
    isDirect(): boolean;
    isReadOnly(): boolean;
    nioBufferCount(): number;
    order(): ByteOrder;
    order(arg0: ByteOrder): ByteBuf;
    parent(arg0: ByteBuf): void;
    retainedSlice(): ByteBuf;
    retainedSlice(arg0: number, arg1: number): ByteBuf;
    slice(): ByteBuf;
    slice(arg0: number, arg1: number): ByteBuf;
    unwrap(): AbstractByteBuf;
}