import type { MoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Rabbit } from '../../../../../../net/minecraft/world/entity/animal/rabbit/Rabbit.d.ts'
export class Rabbit$RabbitMoveControl<T extends Rabbit> extends MoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(rabbit: T)
    // private nextJumpSpeed: number;
    setWantedPosition(x: number, y: number, z: number, speedModifier: number): void;
    tick(): void;
}