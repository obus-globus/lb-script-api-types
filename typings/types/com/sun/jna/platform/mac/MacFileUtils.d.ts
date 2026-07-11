import type { FileUtils } from '../../../../../com/sun/jna/platform/FileUtils.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
export class MacFileUtils extends FileUtils {
    static getInstance(): FileUtils;
    constructor()
    hasTrash(): boolean;
    moveToTrash(...arg0: File[]): void;
}