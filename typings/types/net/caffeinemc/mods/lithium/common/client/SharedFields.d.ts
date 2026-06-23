import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Brain } from '../../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { MemorySlot } from '../../../../../../net/minecraft/world/entity/ai/memory/MemorySlot.d.ts'
export class SharedFields extends Object {
    static DUMMY_BRAIN: Brain<any>;
    static DUMMY_SLOT: MemorySlot<Object>;
    static MAXIMUM_BIOME_PARTICLE_CHANCE: AtomicInteger;
    constructor()
}