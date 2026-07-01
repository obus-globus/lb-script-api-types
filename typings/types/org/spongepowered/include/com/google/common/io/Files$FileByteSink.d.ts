import type { File } from '../../../../../../../java/io/File.d.ts'
import type { FileOutputStream } from '../../../../../../../java/io/FileOutputStream.d.ts'
import type { ByteSink } from '../../../../../../../org/spongepowered/include/com/google/common/io/ByteSink.d.ts'
import type { FileWriteMode } from '../../../../../../../org/spongepowered/include/com/google/common/io/FileWriteMode.d.ts'
import type { LineProcessor } from '../../../../../../../org/spongepowered/include/com/google/common/io/LineProcessor.d.ts'
export class Files$FileByteSink extends ByteSink {
    constructor(arg0: File, arg1: FileWriteMode[], arg2: LineProcessor<string[]>)
    // private file: File;
    // private modes: FileWriteMode[];
    openStream(): FileOutputStream;
    toString(): string;
}