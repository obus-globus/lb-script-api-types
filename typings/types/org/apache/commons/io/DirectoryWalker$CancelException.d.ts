import type { File } from '../../../../java/io/File.d.ts'
import type { IOException } from '../../../../java/io/IOException.d.ts'
export class DirectoryWalker$CancelException extends IOException {
    constructor(arg0: File, arg1: number)
    constructor(arg0: string, arg1: File, arg2: number)
    readonly depth: number;
    readonly file: File;
    getDepth(): number;
    getFile(): File;
}