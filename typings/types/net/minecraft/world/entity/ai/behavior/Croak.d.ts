import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Frog } from '../../../../../../net/minecraft/world/entity/animal/frog/Frog.d.ts'
export class Croak extends Behavior<Frog> {
    static DEFAULT_DURATION: number;
    constructor()
    // private croakCounter: number;
    canStillUse(level: ServerLevel, body: Frog, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Frog): boolean;
    start(level: ServerLevel, body: Frog, timestamp: number): void;
    stop(level: ServerLevel, body: Frog, timestamp: number): void;
    tick(level: ServerLevel, body: Frog, timestamp: number): void;
}