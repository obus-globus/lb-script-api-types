import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class DownloadUtils$ProgressInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: Progress)
    // private is: InputStream;
    // private progress: Progress;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}