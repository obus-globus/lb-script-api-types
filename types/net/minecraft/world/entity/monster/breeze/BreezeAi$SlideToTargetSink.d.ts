import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MoveToTargetSink } from '../../../../../../net/minecraft/world/entity/ai/behavior/MoveToTargetSink.d.ts'
export class BreezeAi$SlideToTargetSink extends MoveToTargetSink {
    static DEFAULT_DURATION: number;
    constructor(minTimeout: number, maxTimeout: number)
    start(level: ServerLevel, body: Mob, timestamp: number): void;
    stop(level: ServerLevel, body: Mob, timestamp: number): void;
}