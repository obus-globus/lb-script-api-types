import type { AbstractReferenceCountedByteBuf } from '../../../io/netty/buffer/AbstractReferenceCountedByteBuf.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { PoolChunk } from '../../../io/netty/buffer/PoolChunk.d.ts'
import type { PoolThreadCache } from '../../../io/netty/buffer/PoolThreadCache.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PooledByteBuf<T extends unknown> extends AbstractReferenceCountedByteBuf {
    constructor(arg0: ObjectPool$Handle<PooledByteBuf<T>>, arg1: number)
    // private allocator: ByteBufAllocator;
    // private cache: PoolThreadCache;
    // private chunk: PoolChunk<T>;
    // private handle: number;
    // private length: number;
    // private maxLength: number;
    // private memory: T;
    // private offset: number;
    // private recyclerHandle: Recycler$EnhancedHandle<PooledByteBuf<T>>;
    // private tmpNioBuf: ByteBuffer;
    _internalNioBuffer(): ByteBuffer;
    _internalNioBuffer(arg0: number, arg1: number, arg2: boolean): ByteBuffer;
    alloc(): ByteBufAllocator;
    capacity(): number;
    capacity(arg0: number): ByteBuf;
    deallocate(): void;
    duplicateInternalNioBuffer(arg0: number, arg1: number): ByteBuffer;
    getBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    getBytes(arg0: number, arg1: GatheringByteChannel, arg2: number): number;
    getBytes(arg0: number, arg1: number[]): ByteBuf;
    idx(arg0: number): number;
    init(arg0: PoolChunk<T>, arg1: ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: PoolThreadCache, arg7: boolean): void;
    // private init0(arg0: PoolChunk<T>, arg1: ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: PoolThreadCache, arg7: boolean, arg8: boolean): void;
    initUnpooled(arg0: PoolChunk<T>, arg1: number): void;
    internalNioBuffer(): ByteBuffer;
    internalNioBuffer(arg0: number, arg1: number): ByteBuffer;
    isContiguous(): boolean;
    maxFastWritableBytes(): number;
    newInternalNioBuffer(arg0: T): ByteBuffer;
    nioBuffer(): ByteBuffer;
    nioBuffer(arg0: number, arg1: number): ByteBuffer;
    nioBufferCount(): number;
    nioBuffers(): ByteBuffer[];
    nioBuffers(arg0: number, arg1: number): ByteBuffer[];
    order(): ByteOrder;
    order(arg0: ByteOrder): ByteBuf;
    readBytes(arg0: ByteBuf): ByteBuf;
    readBytes(arg0: ByteBuf, arg1: number): ByteBuf;
    readBytes(arg0: ByteBuf, arg1: number, arg2: number): ByteBuf;
    readBytes(arg0: OutputStream, arg1: number): ByteBuf;
    readBytes(arg0: ByteBuffer): ByteBuf;
    readBytes(arg0: FileChannel, arg1: number, arg2: number): number;
    readBytes(arg0: GatheringByteChannel, arg1: number): number;
    readBytes(arg0: number[]): ByteBuf;
    readBytes(arg0: number[], arg1: number, arg2: number): ByteBuf;
    readBytes(arg0: number): ByteBuf;
    retainedDuplicate(): ByteBuf;
    retainedSlice(): ByteBuf;
    retainedSlice(arg0: number, arg1: number): ByteBuf;
    reuse(arg0: number): void;
    setBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    setBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    setBytes(arg0: number, arg1: ScatteringByteChannel, arg2: number): number;
    setBytes(arg0: number, arg1: number[]): ByteBuf;
    unwrap(): ByteBuf;
}