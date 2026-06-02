import type { Object } from '../../java/lang/Object.d.ts'
import type { PhysicalMemory } from '../../oshi/hardware/PhysicalMemory.d.ts'
import type { VirtualMemory } from '../../oshi/hardware/VirtualMemory.d.ts'
export interface GlobalMemory extends Object{
    getAvailable(): number;
    getPageSize(): number;
    getPhysicalMemory(): PhysicalMemory[];
    getTotal(): number;
    getVirtualMemory(): VirtualMemory;
}