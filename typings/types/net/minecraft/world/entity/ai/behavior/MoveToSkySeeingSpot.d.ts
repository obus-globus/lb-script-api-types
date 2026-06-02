import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class MoveToSkySeeingSpot extends Object {
    static create(paramspeedModifier: number): OneShot<LivingEntity>;
    static hasNoBlocksAbove(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: BlockPos): boolean;
    constructor()
}