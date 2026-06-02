import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ReadOnlyByteBufferBuf } from '../../../io/netty/buffer/ReadOnlyByteBufferBuf.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class ReadOnlyUnsafeDirectByteBuf extends ReadOnlyByteBufferBuf {
    constructor(arg0: ByteBufAllocator, arg1: ByteBuffer)
    // private memoryAddress: number;
    _getByte(arg0: number): number;
    _getInt(arg0: number): number;
    _getLong(arg0: number): number;
    _getShort(arg0: number): number;
    _getUnsignedMedium(arg0: number): number;
    // private addr(arg0: number): number;
    copy(arg0: number, arg1: number): ByteBuf;
    getBytes(arg0: number, arg1: ByteBuf, arg2: number, arg3: number, arg4: boolean): ByteBuf;
    getBytes(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: boolean): ByteBuf;
    hasMemoryAddress(): boolean;
    memoryAddress(): number;
}