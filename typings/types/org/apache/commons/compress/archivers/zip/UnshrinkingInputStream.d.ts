import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LZWInputStream } from '../../../../../../org/apache/commons/compress/compressors/lzw/LZWInputStream.d.ts'
export class UnshrinkingInputStream extends LZWInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    // private isUsed: (Object | null)[];
    addEntry(arg0: number, arg1: number): number;
    addEntry(arg0: number, arg1: number, arg2: number): number;
    decompressNextSymbol(): number;
    // private partialClear(): void;
}