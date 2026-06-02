import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class SetWalkTargetFromBlockMemory extends Object {
    static create(parammemoryType: MemoryModuleType<GlobalPos>, paramspeedModifier: number, paramcloseEnoughDist: number, paramtooFarDistance: number, paramtooLongUnreachableDuration: number): OneShot<Villager>;
    constructor()
}