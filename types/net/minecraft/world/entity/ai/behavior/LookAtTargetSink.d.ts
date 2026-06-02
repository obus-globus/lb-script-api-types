import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
export class LookAtTargetSink extends Behavior<Mob> {
    static DEFAULT_DURATION: number;
    constructor(minDuration: number, maxDuration: number)
    canStillUse(level: ServerLevel, body: Mob, timestamp: number): boolean;
    stop(level: ServerLevel, body: Mob, timestamp: number): void;
    tick(level: ServerLevel, body: Mob, timestamp: number): void;
}