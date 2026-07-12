import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class FileUtils extends Object {
    static getInstance(): FileUtils;
    constructor()
    hasTrash(): boolean;
    moveToTrash(...arg0: File[]): void;
}