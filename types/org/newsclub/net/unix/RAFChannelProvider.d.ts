import type { File } from '../../../../java/io/File.d.ts'
import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { RandomAccessFile } from '../../../../java/io/RandomAccessFile.d.ts'
import type { FileChannel } from '../../../../java/nio/channels/FileChannel.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
export class RAFChannelProvider extends RandomAccessFile implements FileDescriptorAccess {
    static getFileChannel(paramarg0: FileDescriptor): FileChannel;
    private constructor(arg0: FileDescriptor)
    private constructor(arg0: FileDescriptor, arg1: File)
    // private closed: AtomicBoolean;
    // private fdObj: FileDescriptor;
    // private rafFdOrig: FileDescriptor;
    // private tempPath: File;
    close(): void;
    getFileDescriptor(): FileDescriptor;
}