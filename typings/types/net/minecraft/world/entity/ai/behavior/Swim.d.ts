import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
export class Swim<T extends Mob> extends Behavior<T> {
    static DEFAULT_DURATION: number;
    static shouldSwim(parammob: Mob | null): boolean;
    constructor(chance: number)
    // private chance: number;
    canStillUse(level: ServerLevel, body: Mob, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Mob): boolean;
    tick(level: ServerLevel, body: Mob, timestamp: number): void;
}