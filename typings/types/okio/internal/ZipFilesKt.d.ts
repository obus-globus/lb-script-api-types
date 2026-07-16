import type { Object } from '../../java/lang/Object.d.ts'
import type { BufferedSource } from '../../okio/BufferedSource.d.ts'
import type { FileSystem } from '../../okio/FileSystem.d.ts'
import type { Path } from '../../okio/Path.d.ts'
import type { ZipFileSystem } from '../../okio/ZipFileSystem.d.ts'
import type { ZipEntry } from '../../okio/internal/ZipEntry.d.ts'
export class ZipFilesKt extends Object {
    static COMPRESSION_METHOD_DEFLATED: number;
    static COMPRESSION_METHOD_STORED: number;
    static dosDateTimeToEpochMillis(date: number, time: number): number | null;
    static filetimeToEpochMillis(filetime: number): number;
    static openZip(zipPath: Path, fileSystem: FileSystem, predicate: (param0: ZipEntry) => boolean): ZipFileSystem;
    static readCentralDirectoryZipEntry(self: BufferedSource): ZipEntry;
    static readLocalHeader(self: BufferedSource, centralDirectoryZipEntry: ZipEntry): ZipEntry;
    static skipLocalHeader(self: BufferedSource): void;
}