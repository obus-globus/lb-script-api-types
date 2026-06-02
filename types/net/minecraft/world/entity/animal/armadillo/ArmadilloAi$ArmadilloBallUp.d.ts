import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Armadillo } from '../../../../../../net/minecraft/world/entity/animal/armadillo/Armadillo.d.ts'
export class ArmadilloAi$ArmadilloBallUp extends Behavior<Armadillo> {
    static DEFAULT_DURATION: number;
    constructor()
    // private dangerWasAround: boolean;
    // private nextPeekTimer: number;
    canStillUse(level: ServerLevel, body: Armadillo, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Armadillo): boolean;
    // private pickNextPeekTimer(body: Armadillo): number;
    start(level: ServerLevel, body: Armadillo, timestamp: number): void;
    stop(level: ServerLevel, body: Armadillo, timestamp: number): void;
    tick(level: ServerLevel, body: Armadillo, timestamp: number): void;
}