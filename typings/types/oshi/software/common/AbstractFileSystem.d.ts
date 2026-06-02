import type { Object } from '../../../java/lang/Object.d.ts'
import type { FileSystem } from '../../../oshi/software/os/FileSystem.d.ts'
import type { OSFileStore } from '../../../oshi/software/os/OSFileStore.d.ts'
export abstract class AbstractFileSystem extends Object implements FileSystem {
    constructor()
    getFileStores(): OSFileStore[];
}