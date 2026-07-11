import type { FileUtils } from '../../../../com/sun/jna/platform/FileUtils.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
export class FileUtils$DefaultFileUtils extends FileUtils {
    static getInstance(): FileUtils;
    constructor(arg0: any)
    // private getTrashDirectory(): File;
    hasTrash(): boolean;
    moveToTrash(...arg0: File[]): void;
}