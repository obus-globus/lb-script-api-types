import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { PooledByteBuf } from '../../../io/netty/buffer/PooledByteBuf.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
import type { ScatteringByteChannel } from '../../../java/nio/channels/ScatteringByteChannel.d.ts'
export class PooledDirectByteBuf extends PooledByteBuf<ByteBuffer> {
    private constructor(arg0: ObjectPool$Handle<PooledDirectByteBuf>, arg1: number)
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
    array(): number[];
    arrayOffset(): number;
    copy(): ByteBuf;
    copy(arg0: number, arg1: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    getBytes(arg0: number, arg1: OutputStream, arg2: number): ByteBuf;
    // private getBytes(arg0: number, arg1: OutputStream, arg2: number, arg3: boolean): void;
    getBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    getBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    getBytes(arg0: number, arg1: GatheringByteChannel, arg2: number): number;
    getBytes(arg0: number, arg1: number[]): ByteBuf;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    hasArray(): boolean;
    hasMemoryAddress(): boolean;
    isDirect(): boolean;
    memoryAddress(): number;
    newInternalNioBuffer(arg0: ByteBuffer): ByteBuffer;
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
    setBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    setBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    setBytes(arg0: number, arg1: InputStream, arg2: number): number;
    setBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    setBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    setBytes(arg0: number, arg1: ScatteringByteChannel, arg2: number): number;
    setBytes(arg0: number, arg1: number[]): ByteBuf;
    setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
}