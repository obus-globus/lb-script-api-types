import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class SetWalkTargetAwayFrom extends Object {
    static entity(parammemory: MemoryModuleType<Object>, paramspeedModifier: number, paramdesiredDistance: number, paraminterruptCurrentWalk: boolean): OneShot<PathfinderMob>;
    static pos(parammemory: MemoryModuleType<BlockPos>, paramspeedModifier: number, paramdesiredDistance: number, paraminterruptCurrentWalk: boolean): BehaviorControl<PathfinderMob>;
    constructor()
}