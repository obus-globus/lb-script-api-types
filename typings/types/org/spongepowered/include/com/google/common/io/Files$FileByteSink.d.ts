import type { File } from '../../../../../../../java/io/File.d.ts'
import type { FileOutputStream } from '../../../../../../../java/io/FileOutputStream.d.ts'
import type { ByteSink } from '../../../../../../../org/spongepowered/include/com/google/common/io/ByteSink.d.ts'
import type { FileWriteMode } from '../../../../../../../org/spongepowered/include/com/google/common/io/FileWriteMode.d.ts'
export class Files$FileByteSink extends ByteSink {
    private constructor(arg0: File, ...arg1: FileWriteMode[])
    // private file: File;
    // private modes: FileWriteMode[];
    openStream(): FileOutputStream;
    toString(): string;
}