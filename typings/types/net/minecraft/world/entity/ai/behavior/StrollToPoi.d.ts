import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class StrollToPoi extends Object {
    static create(parammemoryType: MemoryModuleType<GlobalPos>, paramspeedModifier: number, paramcloseEnoughDist: number, parammaxDistanceFromPoi: number): BehaviorControl<PathfinderMob>;
    constructor()
}