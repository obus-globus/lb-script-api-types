import type { Object } from '../../../java/lang/Object.d.ts'
import type { RawSink } from '../../../kotlinx/io/RawSink.d.ts'
import type { RawSource } from '../../../kotlinx/io/RawSource.d.ts'
import type { FileMetadata } from '../../../kotlinx/io/files/FileMetadata.d.ts'
import type { Path } from '../../../kotlinx/io/files/Path.d.ts'
export interface FileSystem extends Object{
    atomicMove(source: Path, destination: Path): void;
    createDirectories(path: Path, mustCreate: boolean): void;
    delete(path: Path, mustExist: boolean): void;
    exists(path: Path): boolean;
    list(directory: Path): Path[];
    metadataOrNull(path: Path): FileMetadata | null;
    resolve(path: Path): Path;
    sink(path: Path, append: boolean): RawSink;
    source(path: Path): RawSource;
}