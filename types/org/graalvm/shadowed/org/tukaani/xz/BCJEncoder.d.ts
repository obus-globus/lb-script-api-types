import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { BCJCoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/BCJCoder.d.ts'
import type { BCJOptions } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/BCJOptions.d.ts'
import type { FilterEncoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterEncoder.d.ts'
import type { FinishableOutputStream } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FinishableOutputStream.d.ts'
export class BCJEncoder extends BCJCoder implements FilterEncoder {
    static ARM64_FILTER_ID: number;
    static ARMTHUMB_FILTER_ID: number;
    static ARM_FILTER_ID: number;
    static IA64_FILTER_ID: number;
    static POWERPC_FILTER_ID: number;
    static RISCV_FILTER_ID: number;
    static SPARC_FILTER_ID: number;
    static X86_FILTER_ID: number;
    static isBCJFilterID(paramfilterID: number): boolean;
    constructor(options: BCJOptions, filterID: number)
    readonly filterID: number;
    // private options: BCJOptions;
    // private props: number[];
    getFilterID(): number;
    getFilterProps(): number[];
    getOutputStream(out: FinishableOutputStream, arrayCache: ArrayCache): FinishableOutputStream;
    supportsFlushing(): boolean;
}