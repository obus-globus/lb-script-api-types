import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FilterDecoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterDecoder.d.ts'
import type { LZMA2Coder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/LZMA2Coder.d.ts'
export class LZMA2Decoder extends LZMA2Coder implements FilterDecoder {
    static FILTER_ID: number;
    constructor(props: number[])
    // private dictSize: number;
    getInputStream(in_: InputStream, arrayCache: ArrayCache): InputStream;
    getMemoryUsage(): number;
}