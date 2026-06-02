import type { FileSystem } from '../java/nio/file/FileSystem.d.ts'
import type { FileMetadata } from '../okio/FileMetadata.d.ts'
import type { FileSystem } from '../okio/FileSystem.d.ts'
import type { FileSystem$Companion } from '../okio/FileSystem$Companion.d.ts'
import type { JvmSystemFileSystem } from '../okio/JvmSystemFileSystem.d.ts'
import type { Path } from '../okio/Path.d.ts'
export class NioSystemFileSystem extends JvmSystemFileSystem {
    static Companion: FileSystem$Companion;
    static RESOURCES: FileSystem;
    static SYSTEM: FileSystem;
    static SYSTEM_TEMPORARY_DIRECTORY: Path;
    static get(paramarg0: FileSystem): FileSystem;
    constructor()
    atomicMove(source: Path, target: Path): void;
    createSymlink(source: Path, target: Path): void;
    protected metadataOrNull(nioPath: Path[][]): FileMetadata | null;
    metadataOrNull(path: Path): FileMetadata | null;
    toString(): string;
}