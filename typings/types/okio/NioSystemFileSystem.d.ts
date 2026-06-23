import type { FileSystem } from '../java/nio/file/FileSystem.d.ts'
import type { Path } from '../java/nio/file/Path.d.ts'
import type { FileMetadata } from '../okio/FileMetadata.d.ts'
import type { FileSystem as FileSystem_2 } from '../okio/FileSystem.d.ts'
import type { FileSystem$Companion } from '../okio/FileSystem$Companion.d.ts'
import type { JvmSystemFileSystem } from '../okio/JvmSystemFileSystem.d.ts'
import type { Path as Path_2 } from '../okio/Path.d.ts'
export class NioSystemFileSystem extends JvmSystemFileSystem {
    static Companion: FileSystem$Companion;
    static RESOURCES: FileSystem_2;
    static SYSTEM: FileSystem_2;
    static SYSTEM_TEMPORARY_DIRECTORY: Path_2;
    static get(paramarg0: FileSystem): FileSystem_2;
    constructor()
    atomicMove(source: Path_2, target: Path_2): void;
    createSymlink(source: Path_2, target: Path_2): void;
    protected metadataOrNull(nioPath: Path[][]): FileMetadata | null;
    metadataOrNull(path: Path_2): FileMetadata | null;
    toString(): string;
}