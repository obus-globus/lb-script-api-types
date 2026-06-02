import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { BCJCoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/BCJCoder.d.ts'
import type { FilterDecoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterDecoder.d.ts'
export class BCJDecoder extends BCJCoder implements FilterDecoder {
    static ARM64_FILTER_ID: number;
    static ARMTHUMB_FILTER_ID: number;
    static ARM_FILTER_ID: number;
    static IA64_FILTER_ID: number;
    static POWERPC_FILTER_ID: number;
    static RISCV_FILTER_ID: number;
    static SPARC_FILTER_ID: number;
    static X86_FILTER_ID: number;
    static isBCJFilterID(paramfilterID: number): boolean;
    constructor(filterID: number, props: number[])
    // private filterID: number;
    // private startOffset: number;
    getInputStream(in_: InputStream, arrayCache: ArrayCache): InputStream;
    getMemoryUsage(): number;
}