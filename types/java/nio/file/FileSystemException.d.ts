import type { IOException } from '../../../java/io/IOException.d.ts'
export class FileSystemException extends IOException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string, arg2: string)
    readonly file: string;
    readonly message: string | null;
    // private other: string;
    getFile(): string;
    getOtherFile(): string;
    getReason(): string;
}