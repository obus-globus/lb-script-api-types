import type { FileMonitor$FileEvent } from '../../../../com/sun/jna/platform/FileMonitor$FileEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FileMonitor$FileListener extends Object{
    fileChanged(arg0: FileMonitor$FileEvent): void;
}