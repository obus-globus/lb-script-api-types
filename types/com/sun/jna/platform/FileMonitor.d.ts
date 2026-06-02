import type { FileMonitor$FileEvent } from '../../../../com/sun/jna/platform/FileMonitor$FileEvent.d.ts'
import type { FileMonitor$FileListener } from '../../../../com/sun/jna/platform/FileMonitor$FileListener.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class FileMonitor extends Object {
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
    // private listeners: FileMonitor$FileListener[];
    // private watched: Map<File, number>;
    addFileListener(arg0: FileMonitor$FileListener): void;
    addWatch(arg0: File): void;
    addWatch(arg0: File, arg1: number): void;
    addWatch(arg0: File, arg1: number, arg2: boolean): void;
    dispose(): void;
    finalize(): void;
    notify(arg0: FileMonitor$FileEvent): void;
    removeFileListener(arg0: FileMonitor$FileListener): void;
    removeWatch(arg0: File): void;
    unwatch(arg0: File): void;
    watch(arg0: File, arg1: number, arg2: boolean): void;
}