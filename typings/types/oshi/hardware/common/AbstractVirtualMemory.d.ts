import type { Object } from '../../../java/lang/Object.d.ts'
import type { VirtualMemory } from '../../../oshi/hardware/VirtualMemory.d.ts'
export abstract class AbstractVirtualMemory extends Object implements VirtualMemory {
    constructor()
    toString(): string;
}