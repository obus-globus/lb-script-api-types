import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CloseIgnoringInputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/CloseIgnoringInputStream.d.ts'
export class CountingInputStream extends CloseIgnoringInputStream {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream)
    readonly size: number;
    getSize(): number;
    read(): number;
    read(arg0: number[]): number;
    read(b: number[], off: number, len: number): number;
}