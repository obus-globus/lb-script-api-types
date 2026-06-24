import type { FileMonitor } from '../../../../com/sun/jna/platform/FileMonitor.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { EventObject } from '../../../../java/util/EventObject.d.ts'
export class FileMonitor$FileEvent extends EventObject {
    constructor(null_: FileMonitor, arg1: File, arg2: number)
    readonly file: File;
    readonly type: number;
    getFile(): File;
    getType(): number;
    toString(): string;
}