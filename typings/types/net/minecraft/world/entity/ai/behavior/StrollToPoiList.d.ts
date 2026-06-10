import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class StrollToPoiList extends Object {
    static create(paramstrollToMemoryType: MemoryModuleType<GlobalPos[]>, paramspeedModifier: number, paramcloseEnoughDist: number, parammaxDistanceFromPoi: number, parammustBeCloseToMemoryType: MemoryModuleType<GlobalPos>): BehaviorControl<Villager>;
    constructor()
}