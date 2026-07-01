import type { File } from '../../../../../../../java/io/File.d.ts'
import type { FileInputStream } from '../../../../../../../java/io/FileInputStream.d.ts'
import type { ByteSource } from '../../../../../../../org/spongepowered/include/com/google/common/io/ByteSource.d.ts'
import type { LineProcessor } from '../../../../../../../org/spongepowered/include/com/google/common/io/LineProcessor.d.ts'
export class Files$FileByteSource extends ByteSource {
    constructor(arg0: File, arg1: LineProcessor<string[]>)
    // private file: File;
    openStream(): FileInputStream;
    read(): number[];
    toString(): string;
}