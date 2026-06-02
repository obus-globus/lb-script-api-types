import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { FileInputStream } from '../../../../java/io/FileInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class FileDescriptorCast$LenientFileInputStream extends FileInputStream {
    static nullInputStream(): InputStream;
    private constructor(arg0: FileDescriptor)
    available(): number;
}