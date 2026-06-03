import type { FileSystem } from '../java/nio/file/FileSystem.d.ts'
import type { FileHandle } from '../okio/FileHandle.d.ts'
import type { FileMetadata } from '../okio/FileMetadata.d.ts'
import type { FileSystem as FileSystem_2 } from '../okio/FileSystem.d.ts'
import type { FileSystem$Companion } from '../okio/FileSystem$Companion.d.ts'
import type { Path } from '../okio/Path.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { ZipEntry } from '../okio/internal/ZipEntry.d.ts'
export class ZipFileSystem extends FileSystem_2 {
    static Companion: FileSystem$Companion;
    static RESOURCES: FileSystem_2;
    static SYSTEM: FileSystem_2;
    static SYSTEM_TEMPORARY_DIRECTORY: Path;
    static get(paramarg0: FileSystem): FileSystem_2;
    constructor(zipPath: Path, fileSystem: FileSystem_2, entries: Map<Path, ZipEntry>, comment: string | null)
    // private comment: string | null;
    // private entries: Map<Path, ZipEntry>;
    // private fileSystem: FileSystem_2;
    // private zipPath: Path;
    appendingSink(file: Path): Sink;
    appendingSink(file: Path, mustExist: boolean): Sink;
    atomicMove(source: Path, target: Path): void;
    canonicalize(path: Path): Path;
    // private canonicalizeInternal(path: Path): Path;
    createDirectory(dir: Path): void;
    createDirectory(dir: Path, mustCreate: boolean): void;
    createSymlink(source: Path, target: Path): void;
    delete(path: Path): void;
    delete(path: Path, mustExist: boolean): void;
    list(dir: Path): Path[];
    // private list(dir: Path, throwOnFailure: boolean): Path[] | null;
    listOrNull(dir: Path): Path[] | null;
    metadataOrNull(path: Path): FileMetadata | null;
    openReadOnly(file: Path): FileHandle;
    openReadWrite(file: Path): FileHandle;
    openReadWrite(file: Path, mustCreate: boolean, mustExist: boolean): FileHandle;
    sink(file: Path): Sink;
    sink(file: Path, mustCreate: boolean): Sink;
    source(file: Path): Source;
}