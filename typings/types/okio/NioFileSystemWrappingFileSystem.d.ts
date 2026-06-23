import type { FileSystem } from '../java/nio/file/FileSystem.d.ts'
import type { Path } from '../java/nio/file/Path.d.ts'
import type { FileHandle } from '../okio/FileHandle.d.ts'
import type { FileMetadata } from '../okio/FileMetadata.d.ts'
import type { FileSystem as FileSystem_2 } from '../okio/FileSystem.d.ts'
import type { FileSystem$Companion } from '../okio/FileSystem$Companion.d.ts'
import type { NioSystemFileSystem } from '../okio/NioSystemFileSystem.d.ts'
import type { Path as Path_2 } from '../okio/Path.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class NioFileSystemWrappingFileSystem extends NioSystemFileSystem {
    static Companion: FileSystem$Companion;
    static RESOURCES: FileSystem_2;
    static SYSTEM: FileSystem_2;
    static SYSTEM_TEMPORARY_DIRECTORY: Path_2;
    static get(paramarg0: FileSystem): FileSystem_2;
    constructor(nioFileSystem: FileSystem)
    // private nioFileSystem: FileSystem;
    appendingSink(file: Path_2): Sink;
    appendingSink(file: Path_2, mustExist: boolean): Sink;
    atomicMove(source: Path_2, target: Path_2): void;
    canonicalize(path: Path_2): Path_2;
    close(): void;
    createDirectory(dir: Path_2): void;
    createDirectory(dir: Path_2, mustCreate: boolean): void;
    createSymlink(source: Path_2, target: Path_2): void;
    delete(path: Path_2): void;
    delete(path: Path_2, mustExist: boolean): void;
    list(dir: Path_2): Path_2[];
    // private list(dir: Path_2, throwOnFailure: boolean): Path_2[] | null;
    listOrNull(dir: Path_2): Path_2[] | null;
    protected metadataOrNull(nioPath: Path[][]): FileMetadata | null;
    metadataOrNull(path: Path_2): FileMetadata | null;
    openReadOnly(file: Path_2): FileHandle;
    openReadWrite(file: Path_2): FileHandle;
    openReadWrite(file: Path_2, mustCreate: boolean, mustExist: boolean): FileHandle;
    sink(file: Path_2): Sink;
    sink(file: Path_2, mustCreate: boolean): Sink;
    source(file: Path_2): Source;
    toString(): string;
}