import type { File } from '../../../../java/io/File.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ZipFile } from '../../../../java/util/zip/ZipFile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FilePackResources$SharedZipFileAccess extends Object implements AutoCloseable {
    private constructor(file: File)
    // private failedToLoad: boolean;
    // private file: File;
    // private zipFile: ZipFile;
    close(): void;
    finalize(): void;
    // private getOrCreateZipFile(): ZipFile;
}