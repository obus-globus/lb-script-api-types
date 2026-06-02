import type { AbstractReferenceCountedByteBuf } from '../../../io/netty/buffer/AbstractReferenceCountedByteBuf.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { FixedCompositeByteBuf$Component } from '../../../io/netty/buffer/FixedCompositeByteBuf$Component.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
export class FixedCompositeByteBuf extends AbstractReferenceCountedByteBuf {
    constructor(arg0: ByteBufAllocator, arg1: ByteBuf[])
    // private allocator: ByteBufAllocator;
    // private buffers: ByteBuf[];
    // private capacity: number;
    readonly direct: boolean;
    // private nioBufferCount: number;
    // private order: ByteOrder;
    _getByte(arg0: number): number;
    _getInt(arg0: number): number;
    _getIntLE(arg0: number): number;
    _getLong(arg0: number): number;
    _getLongLE(arg0: number): number;
    _getShort(arg0: number): number;
    _getShortLE(arg0: number): number;
    _getUnsignedMedium(arg0: number): number;
    _getUnsignedMediumLE(arg0: number): number;
    _setByte(arg0: number, arg1: number): void;
    _setInt(arg0: number, arg1: number): void;
    _setIntLE(arg0: number, arg1: number): void;
    _setLong(arg0: number, arg1: number): void;
    _setLongLE(arg0: number, arg1: number): void;
    _setMedium(arg0: number, arg1: number): void;
    _setMediumLE(arg0: number, arg1: number): void;
    _setShort(arg0: number, arg1: number): void;
    _setShortLE(arg0: number, arg1: number): void;
    alloc(): ByteBufAllocator;
    array(): number[];
    arrayOffset(): number;
    // private buffer(arg0: number): ByteBuf;
    capacity(): number;
    capacity(arg0: number): ByteBuf;
    copy(arg0: number, arg1: number): ByteBuf;
    deallocate(): void;
    discardReadBytes(): ByteBuf;
    // private findComponent(arg0: number): FixedCompositeByteBuf$Component;
    getByte(arg0: number): number;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    getBytes(arg0: number, arg1: OutputStream, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    getBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    getBytes(arg0: number, arg1: GatheringByteChannel, arg2: number): number;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    hasArray(): boolean;
    hasMemoryAddress(): boolean;
    internalNioBuffer(arg0: number, arg1: number): ByteBuffer;
    isDirect(): boolean;
    isWritable(): boolean;
    isWritable(arg0: number): boolean;
    maxCapacity(): number;
    memoryAddress(): number;
    nioBuffer(arg0: number, arg1: number): ByteBuffer;
    nioBufferCount(): number;
    nioBuffers(arg0: number, arg1: number): ByteBuffer[];
    order(): ByteOrder;
    setByte(arg0: number, arg1: number): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    setBytes(arg0: number, arg1: InputStream, arg2: number): number;
    setBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    setBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    setBytes(arg0: number, arg1: ScatteringByteChannel, arg2: number): number;
    setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    setInt(arg0: number, arg1: number): ByteBuf;
    setLong(arg0: number, arg1: number): ByteBuf;
    setMedium(arg0: number, arg1: number): ByteBuf;
    setShort(arg0: number, arg1: number): ByteBuf;
    toString(): string;
    unwrap(): ByteBuf;
}