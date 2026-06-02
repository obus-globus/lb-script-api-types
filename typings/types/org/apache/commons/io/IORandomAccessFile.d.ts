import type { File } from '../../../../java/io/File.d.ts'
import type { RandomAccessFile } from '../../../../java/io/RandomAccessFile.d.ts'
export class IORandomAccessFile extends RandomAccessFile {
    constructor(arg0: File, arg1: string)
    constructor(arg0: string, arg1: string)
    readonly file: File;
    readonly mode: string;
    getFile(): File;
    getMode(): string;
    toString(): string;
}