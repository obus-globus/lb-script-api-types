import type { Bee } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
import type { Bee$BaseBeeGoal } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee$BaseBeeGoal.d.ts'
export class Bee$BeeGoToKnownFlowerGoal extends Bee$BaseBeeGoal {
    constructor(null_: Bee)
    // private travellingTicks: number;
    canBeeContinueToUse(): boolean;
    canBeeUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
    // private wantsToGoToKnownFlower(): boolean;
}