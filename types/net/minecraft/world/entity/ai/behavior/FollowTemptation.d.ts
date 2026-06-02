import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class FollowTemptation extends Behavior<PathfinderMob> {
    static BACKED_UP_CLOSE_ENOUGH_DIST: number;
    static DEFAULT_CLOSE_ENOUGH_DIST: number;
    static DEFAULT_DURATION: number;
    static TEMPTATION_COOLDOWN: number;
    constructor(speedModifier: (param0: LivingEntity) => number)
    constructor(speedModifier: (param0: LivingEntity) => number, closeEnoughDistance: (param0: LivingEntity) => number)
    constructor(speedModifier: (param0: LivingEntity) => number, closeEnoughDistance: (param0: LivingEntity) => number, lookInTheEyes: boolean)
    // private closeEnoughDistance: (param0: LivingEntity) => number;
    // private lookInTheEyes: boolean;
    // private speedModifier: (param0: LivingEntity) => number;
    canStillUse(level: ServerLevel, body: PathfinderMob, timestamp: number): boolean;
    getSpeedModifier(body: PathfinderMob): number;
    // private getTemptingPlayer(body: PathfinderMob): Optional<Player>;
    start(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    stop(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    tick(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    timedOut(timestamp: number): boolean;
}