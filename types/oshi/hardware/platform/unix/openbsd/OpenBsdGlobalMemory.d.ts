import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { VirtualMemory } from '../../../../../oshi/hardware/VirtualMemory.d.ts'
import type { AbstractGlobalMemory } from '../../../../../oshi/hardware/common/AbstractGlobalMemory.d.ts'
export class OpenBsdGlobalMemory extends AbstractGlobalMemory {
    constructor()
    readonly available: () => number;
    readonly pageSize: () => number;
    readonly total: () => number;
    // private vm: () => VirtualMemory;
    // private createVirtualMemory(): VirtualMemory;
    getAvailable(): number;
    getPageSize(): number;
    getTotal(): number;
    getVirtualMemory(): VirtualMemory;
}