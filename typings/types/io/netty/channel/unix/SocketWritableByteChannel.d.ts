import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class SocketWritableByteChannel extends Object implements WritableByteChannel {
    constructor(arg0: FileDescriptor)
    // private fd: FileDescriptor;
    alloc(): ByteBufAllocator;
    close(): void;
    isOpen(): boolean;
    write(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer, arg1: number, arg2: number): number;
}