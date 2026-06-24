import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Camel } from '../../../../../../net/minecraft/world/entity/animal/camel/Camel.d.ts'
export class Camel$CamelMoveControl<T extends Camel> extends MoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(camel: T)
    tick(): void;
}