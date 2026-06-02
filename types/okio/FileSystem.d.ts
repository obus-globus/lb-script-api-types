import type { Closeable } from '../java/io/Closeable.d.ts'
import type { FileSystem } from '../java/nio/file/FileSystem.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Function1 } from '../kotlin/jvm/functions/Function1.d.ts'
import type { Sequence } from '../kotlin/sequences/Sequence.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { FileHandle } from '../okio/FileHandle.d.ts'
import type { FileMetadata } from '../okio/FileMetadata.d.ts'
import type { FileSystem$Companion } from '../okio/FileSystem$Companion.d.ts'
import type { Path } from '../okio/Path.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
export abstract class FileSystem extends Object implements Closeable {
    static Companion: FileSystem$Companion;
    static RESOURCES: FileSystem;
    static SYSTEM: FileSystem;
    static SYSTEM_TEMPORARY_DIRECTORY: Path;
    static get(paramarg0: FileSystem): FileSystem;
    constructor()
    appendingSink(file: Path): Sink;
    appendingSink(file: Path, mustExist: boolean): Sink;
    atomicMove(source: Path, target: Path): void;
    canonicalize(path: Path): Path;
    close(): void;
    copy(source: Path, target: Path): void;
    createDirectories(dir: Path): void;
    createDirectories(dir: Path, mustCreate: boolean): void;
    createDirectory(dir: Path): void;
    createDirectory(dir: Path, mustCreate: boolean): void;
    createSymlink(source: Path, target: Path): void;
    delete(path: Path): void;
    delete(path: Path, mustExist: boolean): void;
    deleteRecursively(fileOrDirectory: Path): void;
    deleteRecursively(fileOrDirectory: Path, mustExist: boolean): void;
    exists(path: Path): boolean;
    list(dir: Path): Path[];
    listOrNull(dir: Path): Path[] | null;
    listRecursively(dir: Path): Sequence<Path>;
    listRecursively(dir: Path, followSymlinks: boolean): Sequence<Path>;
    metadata(path: Path): FileMetadata;
    metadataOrNull(path: Path): FileMetadata | null;
    openReadOnly(file: Path): FileHandle;
    openReadWrite(file: Path): FileHandle;
    openReadWrite(file: Path, mustCreate: boolean, mustExist: boolean): FileHandle;
    read<T extends Object | number | string | boolean>(file: Path, readerAction: Function1<BufferedSource, T>): T;
    sink(file: Path): Sink;
    sink(file: Path, mustCreate: boolean): Sink;
    source(file: Path): Source;
    write<T extends Object | number | string | boolean>(file: Path, mustCreate: boolean, writerAction: Function1<BufferedSink, T>): T;
}