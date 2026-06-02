import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class StrollAroundPoi extends Object {
    static create(parammemoryType: MemoryModuleType<GlobalPos>, paramspeedModifier: number, parammaxDistanceFromPoi: number): OneShot<PathfinderMob>;
    constructor()
}