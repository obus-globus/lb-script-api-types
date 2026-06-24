import type { TempFileCreator$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { TempFileCreator } from '../../../../com/google/common/io/TempFileCreator.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
export class TempFileCreator$JavaIoCreator extends TempFileCreator {
    private constructor()
    constructor(arg0: TempFileCreator$1)
    createTempDir(): File;
    createTempFile(prefix: string): File;
}