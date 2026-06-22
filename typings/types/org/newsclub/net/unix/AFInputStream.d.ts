import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { FileDescriptorAccess } from '../../../../org/newsclub/net/unix/FileDescriptorAccess.d.ts'
export abstract class AFInputStream extends InputStream implements FileDescriptorAccess {
    static nullInputStream(): InputStream;
    constructor()
    getFileDescriptor(): FileDescriptor;
}