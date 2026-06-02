import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Warden } from '../../../../../../../net/minecraft/world/entity/monster/warden/Warden.d.ts'
export class Digging<E extends Warden> extends Behavior<E> {
    static DEFAULT_DURATION: number;
    constructor(ticks: number)
    canStillUse(level: ServerLevel, body: E, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: E): boolean;
    start(level: ServerLevel, body: E, timestamp: number): void;
    stop(level: ServerLevel, body: E, timestamp: number): void;
}