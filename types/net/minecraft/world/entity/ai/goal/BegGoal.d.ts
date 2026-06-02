import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Wolf } from '../../../../../../net/minecraft/world/entity/animal/wolf/Wolf.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class BegGoal extends Goal {
    constructor(wolf: Wolf, lookDistance: number)
    // private begTargeting: TargetingConditions;
    // private level: ServerLevel;
    // private lookDistance: number;
    // private lookTime: number;
    // private player: Player;
    // private wolf: Wolf;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private playerHoldingInteresting(player: Player): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}