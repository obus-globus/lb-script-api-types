import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Bee$BaseBeeGoal } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee$BaseBeeGoal.d.ts'
export class Bee$ValidateFlowerGoal extends Bee$BaseBeeGoal {
    private constructor(null_: Bee$ValidateFlowerGoal)
    // private lastValidateTick: number;
    // private validateFlowerCooldown: number;
    canBeeContinueToUse(): boolean;
    canBeeUse(): boolean;
    // private isFlower(flowerPos: BlockPos): boolean;
    start(): void;
}