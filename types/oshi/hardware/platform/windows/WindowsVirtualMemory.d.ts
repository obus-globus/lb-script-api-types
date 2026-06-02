import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { AbstractVirtualMemory } from '../../../../oshi/hardware/common/AbstractVirtualMemory.d.ts'
import type { WindowsGlobalMemory } from '../../../../oshi/hardware/platform/windows/WindowsGlobalMemory.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
import type { Triplet } from '../../../../oshi/util/tuples/Triplet.d.ts'
export class WindowsVirtualMemory extends AbstractVirtualMemory {
    constructor(arg0: WindowsGlobalMemory)
    // private global: WindowsGlobalMemory;
    // private swapInOut: () => Pair<number, number>;
    // private totalVmaxVused: () => Triplet<number, number, number>;
    // private used: () => number;
    getSwapPagesIn(): number;
    getSwapPagesOut(): number;
    getSwapTotal(): number;
    getSwapUsed(): number;
    getVirtualInUse(): number;
    getVirtualMax(): number;
}