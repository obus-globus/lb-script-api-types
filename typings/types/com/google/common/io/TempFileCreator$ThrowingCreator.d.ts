import type { TempFileCreator } from '../../../../com/google/common/io/TempFileCreator.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
export class TempFileCreator$ThrowingCreator extends TempFileCreator {
    constructor(arg0: any)
    createTempDir(): File;
    createTempFile(prefix: string): File;
}