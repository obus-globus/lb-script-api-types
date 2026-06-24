import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Bee } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
export abstract class Bee$BaseBeeGoal extends Goal {
    private constructor(null_: Bee)
    canBeeContinueToUse(): boolean;
    canBeeUse(): boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
}