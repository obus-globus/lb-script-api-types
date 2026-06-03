import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AbstractReferenceCountedByteBuf } from '../../../io/netty/buffer/AbstractReferenceCountedByteBuf.d.ts'
import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ByteProcessor } from '../../../io/netty/util/ByteProcessor.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class AdaptivePoolingAllocator$AdaptiveByteBuf extends AbstractReferenceCountedByteBuf {
    constructor(arg0: ObjectPool$Handle<AdaptivePoolingAllocator$AdaptiveByteBuf>)
    // private chunk: AdaptivePoolingAllocator$Chunk;
    // private handle: ObjectPool$Handle<AdaptivePoolingAllocator$AdaptiveByteBuf>;
    // private hasArray: boolean;
    // private hasMemoryAddress: boolean;
    // private length: number;
    // private maxFastCapacity: number;
    // private rootParent: AbstractByteBuf;
    // private startIndex: number;
    // private tmpNioBuf: ByteBuffer;
    _getByte(arg0: number): number;
    _getInt(arg0: number): number;
    _getIntLE(arg0: number): number;
    _getLong(arg0: number): number;
    _getLongLE(arg0: number): number;
    _getShort(arg0: number): number;
    _getShortLE(arg0: number): number;
    _getUnsignedMedium(arg0: number): number;
    _getUnsignedMediumLE(arg0: number): number;
    _memoryAddress(): number;
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
    deallocate(): void;
    forEachByte(arg0: ByteProcessor): number;
    forEachByte(arg0: number, arg1: number, arg2: ByteProcessor): number;
    forEachByteDesc(arg0: ByteProcessor): number;
    forEachByteDesc(arg0: number, arg1: number, arg2: ByteProcessor): number;
    // private forEachResult(arg0: number): number;
    getBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    getBytes(arg0: number, arg1: OutputStream, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    getBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    getBytes(arg0: number, arg1: GatheringByteChannel, arg2: number): number;
    getBytes(arg0: number, arg1: number[]): ByteBuf;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    hasArray(): boolean;
    hasMemoryAddress(): boolean;
    // private idx(arg0: number): number;
    init(arg0: AbstractByteBuf, arg1: AdaptivePoolingAllocator$Chunk, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    // private internalNioBuffer(): ByteBuffer;
    internalNioBuffer(arg0: number, arg1: number): ByteBuffer;
    isContiguous(): boolean;
    isDirect(): boolean;
    maxFastWritableBytes(): number;
    memoryAddress(): number;
    nioBuffer(): ByteBuffer;
    nioBuffer(arg0: number, arg1: number): ByteBuffer;
    nioBufferCount(): number;
    nioBuffers(): ByteBuffer[];
    nioBuffers(arg0: number, arg1: number): ByteBuffer[];
    order(): ByteOrder;
    order(arg0: ByteOrder): ByteBuf;
    // private rootParent(): AbstractByteBuf;
    setBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    setBytes(arg0: number, arg1: InputStream, arg2: number): number;
    setBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    setBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    setBytes(arg0: number, arg1: ScatteringByteChannel, arg2: number): number;
    setBytes(arg0: number, arg1: number[]): ByteBuf;
    setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    setCharSequence(arg0: number, arg1: CharSequence, arg2: Charset): number;
    // private setCharSequence0(arg0: number, arg1: CharSequence, arg2: Charset, arg3: boolean): number;
    setZero(arg0: number, arg1: number): ByteBuf;
    unwrap(): ByteBuf;
    writeCharSequence(arg0: CharSequence, arg1: Charset): number;
    writeZero(arg0: number): ByteBuf;
}