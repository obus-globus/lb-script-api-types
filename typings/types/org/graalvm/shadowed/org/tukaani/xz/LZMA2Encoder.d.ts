import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { FilterEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterEncoder.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
import type { LZMA2Coder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/LZMA2Coder.d.ts'
import type { LZMA2Options } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/LZMA2Options.d.ts'
export class LZMA2Encoder extends LZMA2Coder implements FilterEncoder {
    static FILTER_ID: number;
    constructor(options: LZMA2Options)
    // private options: LZMA2Options;
    // private props: number[];
    getFilterID(): number;
    getFilterProps(): number[];
    getOutputStream(out: FinishableOutputStream, arrayCache: ArrayCache): FinishableOutputStream;
    supportsFlushing(): boolean;
}