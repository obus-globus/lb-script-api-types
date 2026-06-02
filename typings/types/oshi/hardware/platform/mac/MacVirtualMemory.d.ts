import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { AbstractVirtualMemory } from '../../../../oshi/hardware/common/AbstractVirtualMemory.d.ts'
import type { MacGlobalMemory } from '../../../../oshi/hardware/platform/mac/MacGlobalMemory.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class MacVirtualMemory extends AbstractVirtualMemory {
    constructor(arg0: MacGlobalMemory)
    // private global: MacGlobalMemory;
    // private inOut: () => Pair<number, number>;
    // private usedTotal: () => Pair<number, number>;
    getSwapPagesIn(): number;
    getSwapPagesOut(): number;
    getSwapTotal(): number;
    getSwapUsed(): number;
    getVirtualInUse(): number;
    getVirtualMax(): number;
}