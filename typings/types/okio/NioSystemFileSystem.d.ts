import type { FileSystem } from '../java/nio/file/FileSystem.d.ts'
import type { FileMetadata } from '../okio/FileMetadata.d.ts'
import type { FileSystem as FileSystem_2 } from '../okio/FileSystem.d.ts'
import type { FileSystem$Companion } from '../okio/FileSystem$Companion.d.ts'
import type { JvmSystemFileSystem } from '../okio/JvmSystemFileSystem.d.ts'
import type { Path } from '../okio/Path.d.ts'
export class NioSystemFileSystem extends JvmSystemFileSystem {
    static Companion: FileSystem$Companion;
    static RESOURCES: FileSystem_2;
    static SYSTEM: FileSystem_2;
    static SYSTEM_TEMPORARY_DIRECTORY: Path;
    static get(self: FileSystem): FileSystem_2;
    constructor()
    atomicMove(source: Path, target: Path): void;
    createSymlink(source: Path, target: Path): void;
    metadataOrNull(path: Path): FileMetadata | null;
    toString(): string;
}