import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SocketWritableByteChannel } from '../../../../io/netty/channel/unix/SocketWritableByteChannel.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class AbstractEpollStreamChannel$EpollSocketWritableByteChannel extends SocketWritableByteChannel {
    constructor(null_: AbstractEpollStreamChannel$EpollSocketWritableByteChannel)
    alloc(): ByteBufAllocator;
    write(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer, arg1: number, arg2: number): number;
}