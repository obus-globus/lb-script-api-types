import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TempFileCreator extends Object {
    private constructor()
    createTempDir(): File;
    createTempFile(prefix: string): File;
}