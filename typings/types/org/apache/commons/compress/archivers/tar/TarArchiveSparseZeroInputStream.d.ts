import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
export class TarArchiveSparseZeroInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor()
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    skip(arg0: number): number;
}