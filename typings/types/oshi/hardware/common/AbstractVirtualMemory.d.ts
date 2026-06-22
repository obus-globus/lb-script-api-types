import type { Object } from '../../../java/lang/Object.d.ts'
import type { VirtualMemory } from '../../../oshi/hardware/VirtualMemory.d.ts'
export abstract class AbstractVirtualMemory extends Object implements VirtualMemory {
    constructor()
    getSwapPagesIn(): number;
    getSwapPagesOut(): number;
    getSwapTotal(): number;
    getSwapUsed(): number;
    getVirtualInUse(): number;
    getVirtualMax(): number;
    toString(): string;
}