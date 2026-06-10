import type { BooleanSupplier } from '../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class MoveThroughVillageGoal extends Goal {
    constructor(mob: PathfinderMob, speedModifier: number, onlyAtNight: boolean, distanceToPoi: number, canDealWithDoors: () => boolean)
    // private canDealWithDoors: () => boolean;
    // private distanceToPoi: number;
    // private mob: PathfinderMob;
    // private onlyAtNight: boolean;
    // private path: Path;
    // private poiPos: BlockPos;
    // private speedModifier: number;
    // private visited: BlockPos[];
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private hasNotVisited(poi: BlockPos): boolean;
    start(): void;
    stop(): void;
    // private updateVisited(): void;
}