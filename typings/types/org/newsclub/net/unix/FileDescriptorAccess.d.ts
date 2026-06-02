import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FileDescriptorAccess extends Object{
    getFileDescriptor(): FileDescriptor;
}