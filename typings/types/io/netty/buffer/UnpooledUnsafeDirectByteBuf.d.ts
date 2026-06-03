import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SwappedByteBuf } from '../../../io/netty/buffer/SwappedByteBuf.d.ts'
import type { UnpooledDirectByteBuf } from '../../../io/netty/buffer/UnpooledDirectByteBuf.d.ts'
import type { CleanableDirectBuffer } from '../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
export class UnpooledUnsafeDirectByteBuf extends UnpooledDirectByteBuf {
    constructor(arg0: ByteBufAllocator, arg1: ByteBuffer, arg2: number)
    constructor(arg0: ByteBufAllocator, arg1: ByteBuffer, arg2: number, arg3: boolean)
    constructor(arg0: ByteBufAllocator, arg1: boolean, arg2: ByteBuffer, arg3: number)
    constructor(arg0: ByteBufAllocator, arg1: number, arg2: number)
    constructor(arg0: ByteBufAllocator, arg1: number, arg2: number, arg3: boolean)
    // private memoryAddress: number;
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
    addr(arg0: number): number;
    copy(): ByteBuf;
    copy(arg0: number, arg1: number): ByteBuf;
    getByte(arg0: number): number;
    getBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    getBytes(arg0: number, arg1: OutputStream, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: OutputStream, arg2: number, arg3: boolean): void;
    getBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuffer, arg2: boolean): void;
    getBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    getBytes(arg0: number, arg1: GatheringByteChannel, arg2: number): number;
    getBytes(arg0: number, arg1: number[]): ByteBuf;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: boolean): void;
    getInt(arg0: number): number;
    getLong(arg0: number): number;
    getShort(arg0: number): number;
    getUnsignedMedium(arg0: number): number;
    hasMemoryAddress(): boolean;
    memoryAddress(): number;
    newSwappedByteBuf(): SwappedByteBuf;
    setByte(arg0: number, arg1: number): ByteBuf;
    setByteBuffer(arg0: CleanableDirectBuffer, arg1: boolean): void;
    setByteBuffer(arg0: ByteBuffer, arg1: boolean): void;
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
    setLong(arg0: number, arg1: number): ByteBuf;
    setMedium(arg0: number, arg1: number): ByteBuf;
    setShort(arg0: number, arg1: number): ByteBuf;
    setZero(arg0: number, arg1: number): ByteBuf;
    writeZero(arg0: number): ByteBuf;
}