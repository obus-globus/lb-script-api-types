import type { FileUtils$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FileUtils } from '../../../../com/sun/jna/platform/FileUtils.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
export class FileUtils$DefaultFileUtils extends FileUtils {
    static getInstance(): FileUtils;
    private constructor()
    constructor(arg0: FileUtils$1)
    // private getTrashDirectory(): File;
    hasTrash(): boolean;
    moveToTrash(arg0: File[]): void;
}