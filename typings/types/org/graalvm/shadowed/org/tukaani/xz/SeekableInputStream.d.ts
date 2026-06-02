import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
export abstract class SeekableInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor()
    length(): number;
    position(): number;
    seek(pos: number): void;
    skip(n: number): number;
}