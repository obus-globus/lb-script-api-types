import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSFileStore } from '../../../oshi/software/os/OSFileStore.d.ts'
export interface FileSystem extends Object{
    getFileStores(): OSFileStore[];
    getFileStores(arg0: boolean): OSFileStore[];
    getMaxFileDescriptors(): number;
    getMaxFileDescriptorsPerProcess(): number;
    getOpenFileDescriptors(): number;
}