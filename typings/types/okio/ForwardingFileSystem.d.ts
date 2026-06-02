import type { FileSystem } from '../java/nio/file/FileSystem.d.ts'
import type { Sequence } from '../kotlin/sequences/Sequence.d.ts'
import type { FileHandle } from '../okio/FileHandle.d.ts'
import type { FileMetadata } from '../okio/FileMetadata.d.ts'
import type { FileSystem } from '../okio/FileSystem.d.ts'
import type { FileSystem$Companion } from '../okio/FileSystem$Companion.d.ts'
import type { Path } from '../okio/Path.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
export abstract class ForwardingFileSystem extends FileSystem {
    static Companion: FileSystem$Companion;
    static RESOURCES: FileSystem;
    static SYSTEM: FileSystem;
    static SYSTEM_TEMPORARY_DIRECTORY: Path;
    static get(paramarg0: FileSystem): FileSystem;
    constructor(delegate: FileSystem)
    // private delegate: FileSystem;
    /*not mapped: */ delegate(): FileSystem;
    appendingSink(file: Path, mustExist: boolean): Sink;
    atomicMove(source: Path, target: Path): void;
    canonicalize(path: Path): Path;
    close(): void;
    createDirectory(dir: Path, mustCreate: boolean): void;
    createSymlink(source: Path, target: Path): void;
    delete(path: Path, mustExist: boolean): void;
    list(dir: Path): Path[];
    listOrNull(dir: Path): Path[] | null;
    listRecursively(dir: Path, followSymlinks: boolean): Sequence<Path>;
    metadataOrNull(path: Path): FileMetadata | null;
    onPathParameter(path: Path, functionName: string, parameterName: string): Path;
    onPathResult(path: Path, functionName: string): Path;
    openReadOnly(file: Path): FileHandle;
    openReadWrite(file: Path, mustCreate: boolean, mustExist: boolean): FileHandle;
    sink(file: Path, mustCreate: boolean): Sink;
    source(file: Path): Source;
    toString(): string;
}