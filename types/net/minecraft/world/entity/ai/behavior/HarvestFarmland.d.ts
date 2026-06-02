import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class HarvestFarmland extends Behavior<Villager> {
    static DEFAULT_DURATION: number;
    static SPEED_MODIFIER: number;
    constructor()
    // private aboveFarmlandPos: BlockPos;
    // private nextOkStartTime: number;
    // private timeWorkedSoFar: number;
    // private validFarmlandAroundVillager: BlockPos[];
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Villager): boolean;
    // private getValidFarmland(level: ServerLevel): BlockPos;
    start(level: ServerLevel, body: Villager, timestamp: number): void;
    stop(level: ServerLevel, body: Villager, timestamp: number): void;
    tick(level: ServerLevel, body: Villager, timestamp: number): void;
    // private validPos(blockPos: BlockPos, level: ServerLevel): boolean;
}