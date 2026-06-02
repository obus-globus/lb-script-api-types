import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
export class LongJumpMidJump extends Behavior<Mob> {
    static DEFAULT_DURATION: number;
    static TIME_OUT_DURATION: number;
    constructor(timeBetweenLongJumps: UniformInt, landingSound: SoundEvent)
    // private landingSound: SoundEvent;
    // private timeBetweenLongJumps: UniformInt;
    canStillUse(level: ServerLevel, body: Mob, timestamp: number): boolean;
    start(level: ServerLevel, body: Mob, timestamp: number): void;
    stop(level: ServerLevel, body: Mob, timestamp: number): void;
}