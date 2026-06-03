import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { LZDecoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/LZDecoder.d.ts'
import type { LZMADecoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMADecoder.d.ts'
import type { RangeDecoderFromStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeDecoderFromStream.d.ts'
export class LZMAInputStream extends InputStream {
    static DICT_SIZE_MAX: number;
    static getMemoryUsage(paramdictSize: number, parampropsByte: number): number;
    static getMemoryUsage(paramdictSize: number, paramlc: number, paramlp: number): number;
    static nullInputStream(): InputStream;
    constructor(in_: InputStream)
    constructor(in_: InputStream, memoryLimit: number)
    constructor(in_: InputStream, memoryLimit: number, arrayCache: ArrayCache)
    constructor(in_: InputStream, uncompSize: number, propsByte: number, dictSize: number)
    constructor(in_: InputStream, uncompSize: number, propsByte: number, dictSize: number, presetDict: number[])
    constructor(in_: InputStream, uncompSize: number, propsByte: number, dictSize: number, presetDict: number[], arrayCache: ArrayCache)
    constructor(in_: InputStream, uncompSize: number, lc: number, lp: number, pb: number, dictSize: number, presetDict: number[])
    constructor(in_: InputStream, uncompSize: number, lc: number, lp: number, pb: number, dictSize: number, presetDict: number[], arrayCache: ArrayCache)
    constructor(in_: InputStream, arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    // private endReached: boolean;
    // private exception: IOException;
    // private in: InputStream;
    // private lz: LZDecoder;
    // private lzma: LZMADecoder;
    // private rc: RangeDecoderFromStream;
    // private relaxedEndCondition: boolean;
    // private remainingSize: number;
    // private tempBuf: number[];
    close(): void;
    enableRelaxedEndCondition(): void;
    // private initialize(in_: InputStream, uncompSize: number, propsByte: number, dictSize: number, presetDict: number[], arrayCache: ArrayCache): void;
    // private initialize(in_: InputStream, uncompSize: number, lc: number, lp: number, pb: number, dictSize: number, presetDict: number[], arrayCache: ArrayCache): void;
    // private putArraysToCache(): void;
    read(): number;
    read(arg0: number[]): number;
    read(buf: number[], off: number, len: number): number;
}