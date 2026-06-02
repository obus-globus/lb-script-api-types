import type { DataInputStream } from '../../../../../../java/io/DataInputStream.d.ts'
import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { LZDecoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/LZDecoder.d.ts'
import type { LZMADecoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMADecoder.d.ts'
import type { RangeDecoderFromBuffer } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeDecoderFromBuffer.d.ts'
export class LZMA2InputStream extends InputStream {
    static DICT_SIZE_MAX: number;
    static DICT_SIZE_MIN: number;
    static getMemoryUsage(paramdictSize: number): number;
    static nullInputStream(): InputStream;
    constructor(in_: InputStream, dictSize: number)
    constructor(in_: InputStream, dictSize: number, presetDict: number[])
    constructor(in_: InputStream, dictSize: number, presetDict: number[], arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    // private endReached: boolean;
    // private exception: IOException;
    // private in: DataInputStream;
    // private isLZMAChunk: boolean;
    // private lz: LZDecoder;
    // private lzma: LZMADecoder;
    // private needDictReset: boolean;
    // private needProps: boolean;
    // private rc: RangeDecoderFromBuffer;
    // private tempBuf: number[];
    // private uncompressedSize: number;
    available(): number;
    close(): void;
    // private decodeChunkHeader(): void;
    // private decodeProps(): void;
    // private putArraysToCache(): void;
    read(): number;
    read(buf: number[], off: number, len: number): number;
}