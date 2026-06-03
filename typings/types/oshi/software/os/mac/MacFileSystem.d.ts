import type { AbstractFileSystem } from '../../../../oshi/software/common/AbstractFileSystem.d.ts'
import type { OSFileStore } from '../../../../oshi/software/os/OSFileStore.d.ts'
export class MacFileSystem extends AbstractFileSystem {
    static OSHI_MAC_FS_PATH_EXCLUDES: string;
    static OSHI_MAC_FS_PATH_INCLUDES: string;
    static OSHI_MAC_FS_VOLUME_EXCLUDES: string;
    static OSHI_MAC_FS_VOLUME_INCLUDES: string;
    constructor()
    getFileStores(): OSFileStore[];
    getFileStores(arg0: boolean): OSFileStore[];
    getMaxFileDescriptors(): number;
    getMaxFileDescriptorsPerProcess(): number;
    getOpenFileDescriptors(): number;
}