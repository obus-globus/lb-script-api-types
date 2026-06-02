import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class GoToTargetLocation extends Object {
    static create(paramlocationMemory: MemoryModuleType<BlockPos>, paramcloseEnoughDist: number, paramspeedModifier: number): OneShot<Object>;
    constructor()
}