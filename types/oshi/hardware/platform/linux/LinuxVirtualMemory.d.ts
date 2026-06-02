import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { AbstractVirtualMemory } from '../../../../oshi/hardware/common/AbstractVirtualMemory.d.ts'
import type { LinuxGlobalMemory } from '../../../../oshi/hardware/platform/linux/LinuxGlobalMemory.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
import type { Triplet } from '../../../../oshi/util/tuples/Triplet.d.ts'
export class LinuxVirtualMemory extends AbstractVirtualMemory {
    constructor(arg0: LinuxGlobalMemory)
    // private global: LinuxGlobalMemory;
    // private inOut: () => Pair<number, number>;
    // private usedTotalCommitLim: () => Triplet<number, number, number>;
    getSwapPagesIn(): number;
    getSwapPagesOut(): number;
    getSwapTotal(): number;
    getSwapUsed(): number;
    getVirtualInUse(): number;
    getVirtualMax(): number;
}