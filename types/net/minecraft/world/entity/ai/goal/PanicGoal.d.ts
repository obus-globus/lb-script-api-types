import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { DamageType } from '../../../../../../net/minecraft/world/damagesource/DamageType.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
export class PanicGoal extends Goal {
    static WATER_CHECK_DISTANCE_VERTICAL: number;
    constructor(mob: PathfinderMob, speedModifier: number)
    constructor(mob: PathfinderMob, speedModifier: number, panicCausingDamageTypes: (param0: PathfinderMob) => TagKey<DamageType>)
    constructor(mob: PathfinderMob, speedModifier: number, panicCausingDamageTypes: TagKey<DamageType>)
    // private isRunning: boolean;
    // private mob: PathfinderMob;
    // private panicCausingDamageTypes: (param0: PathfinderMob) => TagKey<DamageType>;
    // private posX: number;
    // private posY: number;
    // private posZ: number;
    // private speedModifier: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    findRandomPosition(): boolean;
    isRunning(): boolean;
    lookForWater(level: BlockGetter, mob: Entity, xzDist: number): BlockPos;
    shouldPanic(): boolean;
    start(): void;
    stop(): void;
}