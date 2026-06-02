import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { AbstractFish } from '../../../../../../net/minecraft/world/entity/animal/fish/AbstractFish.d.ts'
export class AbstractFish$FishMoveControl extends MoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(fish: AbstractFish)
    // private fish: AbstractFish;
    tick(): void;
}