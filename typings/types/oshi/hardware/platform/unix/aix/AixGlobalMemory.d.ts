import type { Perfstat$perfstat_memory_total_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_memory_total_t.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { PhysicalMemory } from '../../../../../oshi/hardware/PhysicalMemory.d.ts'
import type { VirtualMemory } from '../../../../../oshi/hardware/VirtualMemory.d.ts'
import type { AbstractGlobalMemory } from '../../../../../oshi/hardware/common/AbstractGlobalMemory.d.ts'
export class AixGlobalMemory extends AbstractGlobalMemory {
    constructor(arg0: () => string[])
    // private lscfg: () => string[];
    // private perfstatMem: () => Perfstat$perfstat_memory_total_t;
    // private vm: () => VirtualMemory;
    // private createVirtualMemory(): VirtualMemory;
    getAvailable(): number;
    getPageSize(): number;
    getPhysicalMemory(): PhysicalMemory[];
    getTotal(): number;
    getVirtualMemory(): VirtualMemory;
}