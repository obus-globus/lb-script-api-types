import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ReadOnlyByteBufferBuf } from '../../../io/netty/buffer/ReadOnlyByteBufferBuf.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { GatheringByteChannel } from '../../../java/nio/channels/GatheringByteChannel.d.ts'
export class ReadOnlyUnsafeDirectByteBuf extends ReadOnlyByteBufferBuf {
    constructor(arg0: ByteBufAllocator, arg1: ByteBuffer)
    // private memoryAddress: number;
    _getByte(arg0: number): number;
    _getInt(arg0: number): number;
    _getLong(arg0: number): number;
    _getShort(arg0: number): number;
    _getUnsignedMedium(arg0: number): number;
    // private addr(arg0: number): number;
    copy(): ByteBuf;
    copy(arg0: number, arg1: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number, arg4: boolean): ByteBuf;
    getBytes(arg0: number, arg1: OutputStream, arg2: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuffer): ByteBuf;
    getBytes(arg0: number, arg1: FileChannel, arg2: number, arg3: number): number;
    getBytes(arg0: number, arg1: GatheringByteChannel, arg2: number): number;
    getBytes(arg0: number, arg1: number[]): ByteBuf;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number): ByteBuf;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: boolean): ByteBuf;
    hasMemoryAddress(): boolean;
    memoryAddress(): number;
}