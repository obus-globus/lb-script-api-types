import type { Object } from '../../java/lang/Object.d.ts'
import type { BufferedSource } from '../../okio/BufferedSource.d.ts'
import type { FileSystem } from '../../okio/FileSystem.d.ts'
import type { Path } from '../../okio/Path.d.ts'
import type { ZipFileSystem } from '../../okio/ZipFileSystem.d.ts'
import type { ZipEntry } from '../../okio/internal/ZipEntry.d.ts'
export class ZipFilesKt extends Object {
    static COMPRESSION_METHOD_DEFLATED: number;
    static COMPRESSION_METHOD_STORED: number;
    static dosDateTimeToEpochMillis(paramarg0: number, paramarg1: number): number;
    static filetimeToEpochMillis(paramarg0: number): number;
    static openZip(paramarg0: Path, paramarg1: FileSystem, paramarg2: (param0: Object | null) => boolean): ZipFileSystem;
    static readCentralDirectoryZipEntry(paramarg0: BufferedSource): ZipEntry;
    static readLocalHeader(paramarg0: BufferedSource, paramarg1: ZipEntry): ZipEntry;
    static skipLocalHeader(paramarg0: BufferedSource): void;
}