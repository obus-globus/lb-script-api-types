import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Bee } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
import type { Bee$BaseBeeGoal } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee$BaseBeeGoal.d.ts'
export class Bee$BeeLocateHiveGoal extends Bee$BaseBeeGoal {
    private constructor(null_: Bee)
    canBeeContinueToUse(): boolean;
    canBeeUse(): boolean;
    // private findNearbyHivesWithSpace(): BlockPos[];
    start(): void;
}