import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { FollowPlayerRiddenEntityGoal$FollowEntityGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/FollowPlayerRiddenEntityGoal$FollowEntityGoal.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class FollowPlayerRiddenEntityGoal extends Goal {
    constructor(mob: PathfinderMob, entityTypeToFollow: Class<Entity>)
    // private currentGoal: FollowPlayerRiddenEntityGoal$FollowEntityGoal;
    // private entityTypeToFollow: Class<Entity>;
    // private following: Player;
    // private mob: PathfinderMob;
    // private timeToRecalcPath: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    isInterruptable(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}