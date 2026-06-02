import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
export class TarArchiveSparseZeroInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor()
    read(): number;
    skip(arg0: number): number;
}