import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { AnimalPanic } from '../../../../../../net/minecraft/world/entity/ai/behavior/AnimalPanic.d.ts'
import type { Camel } from '../../../../../../net/minecraft/world/entity/animal/camel/Camel.d.ts'
export class CamelAi$CamelPanic extends AnimalPanic<Camel> {
    static DEFAULT_DURATION: number;
    constructor(speedMultiplier: number)
    checkExtraStartConditions(level: ServerLevel, body: Camel): boolean;
    start(level: ServerLevel, camel: Camel, timestamp: number): void;
}