import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$FoxMoveControl<T extends Fox> extends MoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(fox: T)
    tick(): void;
}