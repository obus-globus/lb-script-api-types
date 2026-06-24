import type { PathfinderMob } from '../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { TargetGoal } from '../../../../../net/minecraft/world/entity/ai/goal/target/TargetGoal.d.ts'
import type { TargetingConditions } from '../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Vex } from '../../../../../net/minecraft/world/entity/monster/Vex.d.ts'
export class Vex$VexCopyOwnerTargetGoal extends TargetGoal {
    constructor(null_: Vex, mob: PathfinderMob)
    // private copyOwnerTargeting: TargetingConditions;
    canUse(): boolean;
    start(): void;
}