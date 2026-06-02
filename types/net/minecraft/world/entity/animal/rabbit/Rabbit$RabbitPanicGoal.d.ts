import type { PanicGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/PanicGoal.d.ts'
import type { Rabbit } from '../../../../../../net/minecraft/world/entity/animal/rabbit/Rabbit.d.ts'
export class Rabbit$RabbitPanicGoal extends PanicGoal {
    static WATER_CHECK_DISTANCE_VERTICAL: number;
    constructor(rabbit: Rabbit, speedModifier: number)
    // private rabbit: Rabbit;
    tick(): void;
}