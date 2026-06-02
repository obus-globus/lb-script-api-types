import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Camel } from '../../../../../../net/minecraft/world/entity/animal/camel/Camel.d.ts'
export class CamelAi$RandomSitting extends Behavior<Camel> {
    static DEFAULT_DURATION: number;
    constructor(minimalPoseTimeSec: number)
    // private minimalPoseTicks: number;
    checkExtraStartConditions(level: ServerLevel, body: Camel): boolean;
    start(level: ServerLevel, body: Camel, timestamp: number): void;
}