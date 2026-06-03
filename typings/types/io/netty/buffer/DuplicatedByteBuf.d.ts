import type { AbstractDerivedByteBuf } from '../../../io/netty/buffer/AbstractDerivedByteBuf.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ByteProcessor } from '../../../io/netty/util/ByteProcessor.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
export class DuplicatedByteBuf extends AbstractDerivedByteBuf {
    constructor(arg0: ByteBuf)
    constructor(arg0: ByteBuf, arg1: number, arg2: number)
    // private buffer: ByteBuf;
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
    capacity(): number;
    capacity(arg0: number): ByteBuf;
    copy(): ByteBuf;
    copy(arg0: number, arg1: number): ByteBuf;
    forEachByte(arg0: ByteProcessor): number;
    forEachByte(arg0: number, arg1: number, arg2: ByteProcessor): number;
    forEachByteDesc(arg0: ByteProcessor): number;
    forEachByteDesc(arg0: number, arg1: number, arg2: ByteProcessor): number;
    getByte(arg0: number): number;
    getBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    getBytes(arg0: number, arg1: OutputStream, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    getBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    getBytes(arg0: number, arg1: GatheringByteChannel, arg2: number): number;
    getBytes(arg0: number, arg1: number[]): ByteBuf;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    getInt(arg0: number): number;
    getIntLE(arg0: number): number;
    getLong(arg0: number): number;
    getLongLE(arg0: number): number;
    getShort(arg0: number): number;
    getShortLE(arg0: number): number;
    getUnsignedMedium(arg0: number): number;
    getUnsignedMediumLE(arg0: number): number;
    hasArray(): boolean;
    hasMemoryAddress(): boolean;
    isDirect(): boolean;
    memoryAddress(): number;
    nioBufferCount(): number;
    nioBuffers(): ByteBuffer[];
    nioBuffers(arg0: number, arg1: number): ByteBuffer[];
    order(): ByteOrder;
    order(arg0: ByteOrder): ByteBuf;
    setByte(arg0: number, arg1: number): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    setBytes(arg0: number, arg1: InputStream, arg2: number): number;
    setBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    setBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    setBytes(arg0: number, arg1: ScatteringByteChannel, arg2: number): number;
    setBytes(arg0: number, arg1: number[]): ByteBuf;
    setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    setInt(arg0: number, arg1: number): ByteBuf;
    setIntLE(arg0: number, arg1: number): ByteBuf;
    setLong(arg0: number, arg1: number): ByteBuf;
    setLongLE(arg0: number, arg1: number): ByteBuf;
    setMedium(arg0: number, arg1: number): ByteBuf;
    setMediumLE(arg0: number, arg1: number): ByteBuf;
    setShort(arg0: number, arg1: number): ByteBuf;
    setShortLE(arg0: number, arg1: number): ByteBuf;
    slice(): ByteBuf;
    slice(arg0: number, arg1: number): ByteBuf;
    unwrap(): ByteBuf;
}