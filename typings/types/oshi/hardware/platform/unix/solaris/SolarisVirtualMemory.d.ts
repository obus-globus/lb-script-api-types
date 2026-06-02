import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractVirtualMemory } from '../../../../../oshi/hardware/common/AbstractVirtualMemory.d.ts'
import type { SolarisGlobalMemory } from '../../../../../oshi/hardware/platform/unix/solaris/SolarisGlobalMemory.d.ts'
import type { Pair } from '../../../../../oshi/util/tuples/Pair.d.ts'
export class SolarisVirtualMemory extends AbstractVirtualMemory {
    constructor(arg0: SolarisGlobalMemory)
    // private availTotal: () => Pair<number, number>;
    // private global: SolarisGlobalMemory;
    // private pagesIn: () => number;
    // private pagesOut: () => number;
    // private usedTotal: () => Pair<number, number>;
    getSwapPagesIn(): number;
    getSwapPagesOut(): number;
    getSwapTotal(): number;
    getSwapUsed(): number;
    getVirtualInUse(): number;
    getVirtualMax(): number;
}