import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Bee$BaseBeeGoal } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee$BaseBeeGoal.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class Bee$BeeGoToHiveGoal extends Bee$BaseBeeGoal {
    static MAX_TRAVELLING_TICKS: number;
    constructor(null_: Bee$BeeGoToHiveGoal)
    // private blacklistedTargets: BlockPos[];
    // private lastPath: Path;
    // private ticksStuck: number;
    // private travellingTicks: number;
    // private blacklistTarget(targetPos: BlockPos): void;
    canBeeContinueToUse(): boolean;
    canBeeUse(): boolean;
    // private clearBlacklist(): void;
    // private dropAndBlacklistHive(): void;
    // private hasReachedTarget(targetPos: BlockPos): boolean;
    // private isTargetBlacklisted(targetPos: BlockPos): boolean;
    // private pathfindDirectlyTowards(targetPos: BlockPos): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}