import type { Object } from '../../../java/lang/Object.d.ts'
import type { GlobalMemory } from '../../../oshi/hardware/GlobalMemory.d.ts'
import type { PhysicalMemory } from '../../../oshi/hardware/PhysicalMemory.d.ts'
export abstract class AbstractGlobalMemory extends Object implements GlobalMemory {
    constructor()
    getPhysicalMemory(): PhysicalMemory[];
    toString(): string;
}