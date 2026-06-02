import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Pipe$SinkChannel } from '../../../../java/nio/channels/Pipe$SinkChannel.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
export class AFPipe$SinkChannel extends Pipe$SinkChannel implements FileDescriptorAccess {
    constructor(null_: AFPipe$SinkChannel, arg1: SelectorProvider)
    getFileDescriptor(): FileDescriptor;
    implCloseSelectableChannel(): void;
    implConfigureBlocking(arg0: boolean): void;
    write(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer[]): number;
    write(arg0: ByteBuffer[], arg1: number, arg2: number): number;
}