import type { Perfstat$perfstat_memory_total_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_memory_total_t.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractVirtualMemory } from '../../../../../oshi/hardware/common/AbstractVirtualMemory.d.ts'
export class AixVirtualMemory extends AbstractVirtualMemory {
    constructor(arg0: () => Perfstat$perfstat_memory_total_t)
    // private perfstatMem: () => Perfstat$perfstat_memory_total_t;
    getSwapPagesIn(): number;
    getSwapPagesOut(): number;
    getSwapTotal(): number;
    getSwapUsed(): number;
    getVirtualInUse(): number;
    getVirtualMax(): number;
}