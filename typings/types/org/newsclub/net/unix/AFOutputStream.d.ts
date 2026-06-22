import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
export abstract class AFOutputStream extends OutputStream implements FileDescriptorAccess {
    static nullOutputStream(): OutputStream;
    constructor()
    getFileDescriptor(): FileDescriptor;
    transferFrom(arg0: InputStream): number;
}