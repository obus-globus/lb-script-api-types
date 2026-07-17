import type { TempFileCreator } from '../../../../com/google/common/io/TempFileCreator.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
export class TempFileCreator$JavaIoCreator extends TempFileCreator {
    private constructor()
    createTempDir(): File;
    createTempFile(prefix: string): File;
}