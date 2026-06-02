import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UnmapperProxy extends Object{
    address(): number;
    fileDescriptor(): FileDescriptor;
    isSync(): boolean;
    unmap(): void;
}