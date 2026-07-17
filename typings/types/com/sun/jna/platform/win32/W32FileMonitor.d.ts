import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { FileMonitor } from '../../../../../com/sun/jna/platform/FileMonitor.d.ts'
import type { W32FileMonitor$FileInfo } from '../../../../../com/sun/jna/platform/win32/W32FileMonitor$FileInfo.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
export class W32FileMonitor extends FileMonitor {
    static FILE_ACCESSED: number;
    static FILE_ANY: number;
    static FILE_ATTRIBUTES_CHANGED: number;
    static FILE_CREATED: number;
    static FILE_DELETED: number;
    static FILE_MODIFIED: number;
    static FILE_NAME_CHANGED_NEW: number;
    static FILE_NAME_CHANGED_OLD: number;
    static FILE_RENAMED: number;
    static FILE_SECURITY_CHANGED: number;
    static FILE_SIZE_CHANGED: number;
    static getInstance(): FileMonitor;
    constructor()
    // private disposing: boolean;
    // private fileMap: JavaMap<File, W32FileMonitor$FileInfo>;
    // private handleMap: JavaMap<WinNT$HANDLE, W32FileMonitor$FileInfo>;
    // private port: WinNT$HANDLE;
    // private watcher: Thread;
    // private convertMask(arg0: number): number;
    dispose(): void;
    // private handleChanges(arg0: W32FileMonitor$FileInfo): void;
    unwatch(arg0: File): void;
    // private waitForChange(): W32FileMonitor$FileInfo;
    watch(arg0: File, arg1: number, arg2: boolean): void;
}