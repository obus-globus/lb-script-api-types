import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class UseBonemeal extends Behavior<Villager> {
    static DEFAULT_DURATION: number;
    constructor()
    // private cropPos: Optional<BlockPos>;
    // private lastBonemealingSession: number;
    // private nextWorkCycleTime: number;
    // private timeWorkedSoFar: number;
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Villager): boolean;
    // private pickNextTarget(level: ServerLevel, body: Villager): Optional<BlockPos>;
    // private setCurrentCropAsTarget(body: Villager): void;
    start(level: ServerLevel, body: Villager, timestamp: number): void;
    stop(level: ServerLevel, body: Villager, timestamp: number): void;
    tick(level: ServerLevel, body: Villager, timestamp: number): void;
    // private validPos(blockPos: BlockPos, level: ServerLevel): boolean;
}