import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { FileWriteMode } from '../../../../com/google/common/io/FileWriteMode.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { FileOutputStream } from '../../../../java/io/FileOutputStream.d.ts'
export class Files$FileByteSink extends ByteSink {
    private constructor(file: File, modes: FileWriteMode[])
    // private file: File;
    // private modes: FileWriteMode[];
    openStream(): FileOutputStream;
    toString(): string;
}