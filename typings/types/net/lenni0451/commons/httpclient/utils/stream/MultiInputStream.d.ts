import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
export class MultiInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream[])
    // private streams: InputStream[];
    close(): void;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}