import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractVirtualMemory } from '../../../../../oshi/hardware/common/AbstractVirtualMemory.d.ts'
import type { OpenBsdGlobalMemory } from '../../../../../oshi/hardware/platform/unix/openbsd/OpenBsdGlobalMemory.d.ts'
import type { Triplet } from '../../../../../oshi/util/tuples/Triplet.d.ts'
export class OpenBsdVirtualMemory extends AbstractVirtualMemory {
    constructor(arg0: OpenBsdGlobalMemory)
    // private global: OpenBsdGlobalMemory;
    // private pgout: () => number;
    // private usedTotalPgin: () => Triplet<number, number, number>;
    getSwapPagesIn(): number;
    getSwapPagesOut(): number;
    getSwapTotal(): number;
    getSwapUsed(): number;
    getVirtualInUse(): number;
    getVirtualMax(): number;
}