import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { LZWInputStream } from '../../../../../../org/apache/commons/compress/compressors/lzw/LZWInputStream.d.ts'
export class ZCompressorInputStream extends LZWInputStream {
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number)
    // private blockMode: boolean;
    // private maxCodeSize: number;
    // private totalCodesRead: number;
    addEntry(arg0: number, arg1: number): number;
    addEntry(arg0: number, arg1: number, arg2: number): number;
    // private clearEntries(): void;
    decompressNextSymbol(): number;
    // private reAlignReading(): void;
    readNextCode(): number;
}