import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../net/minecraft/util/filefix/virtualfilesystem/Node.d.ts'
export class FileNode extends Node {
    constructor(path: (Object | null)[], storagePath: Path[], isCopy: boolean)
    // private isCopy: boolean;
    // private storagePath: Path[];
    deleteCopy(): void;
    ensureCopy(): void;
    storagePath(): Path[];
}