import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { VirtualMemory } from '../../../../../oshi/hardware/VirtualMemory.d.ts'
import type { AbstractGlobalMemory } from '../../../../../oshi/hardware/common/AbstractGlobalMemory.d.ts'
import type { Pair } from '../../../../../oshi/util/tuples/Pair.d.ts'
export class SolarisGlobalMemory extends AbstractGlobalMemory {
    constructor()
    // private availTotal: () => Pair<number, number>;
    readonly pageSize: () => number;
    // private vm: () => VirtualMemory;
    // private createVirtualMemory(): VirtualMemory;
    getAvailable(): number;
    getPageSize(): number;
    getTotal(): number;
    getVirtualMemory(): VirtualMemory;
}