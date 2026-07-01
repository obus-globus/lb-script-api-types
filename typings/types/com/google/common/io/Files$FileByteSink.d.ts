import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { FileWriteMode } from '../../../../com/google/common/io/FileWriteMode.d.ts'
import type { LineProcessor } from '../../../../com/google/common/io/LineProcessor.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { FileOutputStream } from '../../../../java/io/FileOutputStream.d.ts'
export class Files$FileByteSink extends ByteSink {
    constructor(arg0: File, arg1: FileWriteMode[], arg2: LineProcessor<string[]>)
    // private file: File;
    // private modes: FileWriteMode[];
    openStream(): FileOutputStream;
    toString(): string;
}