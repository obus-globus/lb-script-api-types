import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractVirtualMemory } from '../../../../../oshi/hardware/common/AbstractVirtualMemory.d.ts'
import type { FreeBsdGlobalMemory } from '../../../../../oshi/hardware/platform/unix/freebsd/FreeBsdGlobalMemory.d.ts'
export class FreeBsdVirtualMemory extends AbstractVirtualMemory {
    constructor(arg0: FreeBsdGlobalMemory)
    // private global: FreeBsdGlobalMemory;
    // private pagesIn: () => number;
    // private pagesOut: () => number;
    // private total: () => number;
    // private used: () => number;
    getSwapPagesIn(): number;
    getSwapPagesOut(): number;
    getSwapTotal(): number;
    getSwapUsed(): number;
    getVirtualInUse(): number;
    getVirtualMax(): number;
}