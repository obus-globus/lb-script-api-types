import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export class WindowsLineEndingInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: boolean)
    // private atEos: boolean;
    // private atSlashCr: boolean;
    // private atSlashLf: boolean;
    // private in: InputStream;
    // private injectSlashLf: boolean;
    // private lineFeedAtEos: boolean;
    close(): void;
    // private handleEos(): number;
    mark(arg0: number): void;
    read(): number;
}