import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FilterCoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/FilterCoder.d.ts'
export abstract class BCJCoder extends Object implements FilterCoder {
    static ARM64_FILTER_ID: number;
    static ARMTHUMB_FILTER_ID: number;
    static ARM_FILTER_ID: number;
    static IA64_FILTER_ID: number;
    static POWERPC_FILTER_ID: number;
    static RISCV_FILTER_ID: number;
    static SPARC_FILTER_ID: number;
    static X86_FILTER_ID: number;
    static isBCJFilterID(paramfilterID: number): boolean;
    constructor()
    changesSize(): boolean;
    lastOK(): boolean;
    nonLastOK(): boolean;
}