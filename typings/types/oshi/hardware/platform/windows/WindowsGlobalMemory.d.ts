import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { PhysicalMemory } from '../../../../oshi/hardware/PhysicalMemory.d.ts'
import type { VirtualMemory } from '../../../../oshi/hardware/VirtualMemory.d.ts'
import type { AbstractGlobalMemory } from '../../../../oshi/hardware/common/AbstractGlobalMemory.d.ts'
import type { Triplet } from '../../../../oshi/util/tuples/Triplet.d.ts'
export class WindowsGlobalMemory extends AbstractGlobalMemory {
    constructor()
    // private availTotalSize: () => Triplet<number, number, number>;
    // private vm: () => VirtualMemory;
    // private createVirtualMemory(): VirtualMemory;
    getAvailable(): number;
    getPageSize(): number;
    getPhysicalMemory(): PhysicalMemory[];
    getTotal(): number;
    getVirtualMemory(): VirtualMemory;
}