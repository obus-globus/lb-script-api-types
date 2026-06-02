import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Breeze } from '../../../../../../net/minecraft/world/entity/monster/breeze/Breeze.d.ts'
export class Shoot extends Behavior<Breeze> {
    static DEFAULT_DURATION: number;
    constructor()
    canStillUse(level: ServerLevel, body: Breeze, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, breeze: Breeze): boolean;
    start(level: ServerLevel, breeze: Breeze, timestamp: number): void;
    stop(level: ServerLevel, breeze: Breeze, timestamp: number): void;
    tick(level: ServerLevel, breeze: Breeze, timestamp: number): void;
}