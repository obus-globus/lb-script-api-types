import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { SimpleFilter } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/simple/SimpleFilter.d.ts'
export class SimpleInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream, simpleFilter: SimpleFilter)
    // private endReached: boolean;
    // private exception: IOException;
    // private filterBuf: number[];
    // private filtered: number;
    // private in: InputStream;
    // private pos: number;
    // private simpleFilter: SimpleFilter;
    // private tempBuf: number[];
    // private unfiltered: number;
    available(): number;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(buf: number[], off: number, len: number): number;
}