import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export class UnixLineEndingInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: boolean)
    // private atEos: boolean;
    // private atSlashCr: boolean;
    // private atSlashLf: boolean;
    // private in: InputStream;
    // private lineFeedAtEndOfFile: boolean;
    close(): void;
    // private handleEos(arg0: boolean): number;
    mark(arg0: number): void;
    read(): number;
    // private readWithUpdate(): number;
}