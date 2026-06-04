import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export abstract class CompressorInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor()
    readonly bytesRead: number;
    count(arg0: number): void;
    getBytesRead(): number;
    getCount(): number;
    getUncompressedCount(): number;
    pushedBackBytes(arg0: number): void;
}