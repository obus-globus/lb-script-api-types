import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Pipe$SourceChannel } from '../../../../java/nio/channels/Pipe$SourceChannel.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { AFPipe } from '../../../../org/newsclub/net/unix/AFPipe.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
export class AFPipe$SourceChannel extends Pipe$SourceChannel implements FileDescriptorAccess {
    constructor(null_: AFPipe, arg1: SelectorProvider)
    getFileDescriptor(): FileDescriptor;
    implCloseSelectableChannel(): void;
    implConfigureBlocking(arg0: boolean): void;
    read(arg0: ByteBuffer): number;
    read(arg0: ByteBuffer[]): number;
    read(arg0: ByteBuffer[], arg1: number, arg2: number): number;
}