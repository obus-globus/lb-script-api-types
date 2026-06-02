import type { AbstractFileSystem } from '../../../../oshi/software/common/AbstractFileSystem.d.ts'
import type { OSFileStore } from '../../../../oshi/software/os/OSFileStore.d.ts'
export class WindowsFileSystem extends AbstractFileSystem {
    constructor()
    getFileStores(arg0: boolean): OSFileStore[];
    getMaxFileDescriptors(): number;
    getMaxFileDescriptorsPerProcess(): number;
    getOpenFileDescriptors(): number;
}