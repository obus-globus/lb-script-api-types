import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Frog } from '../../../../../../net/minecraft/world/entity/animal/frog/Frog.d.ts'
import type { ShootTongue$State } from '../../../../../../net/minecraft/world/entity/animal/frog/ShootTongue$State.d.ts'
export class ShootTongue extends Behavior<Frog> {
    static CATCH_ANIMATION_DURATION: number;
    static DEFAULT_DURATION: number;
    static MAX_UNREACHBLE_TONGUE_TARGETS_IN_MEMORY: number;
    static TIME_OUT_DURATION: number;
    static TONGUE_ANIMATION_DURATION: number;
    static UNREACHABLE_TONGUE_TARGETS_COOLDOWN_DURATION: number;
    constructor(tongueSound: SoundEvent, eatSound: SoundEvent)
    // private calculatePathCounter: number;
    // private eatAnimationTimer: number;
    // private eatSound: SoundEvent;
    // private state: ShootTongue$State;
    // private tongueSound: SoundEvent;
    // private addUnreachableTargetToMemory(body: Frog, entity: LivingEntity): void;
    // private canPathfindToTarget(body: Frog, target: LivingEntity): boolean;
    canStillUse(level: ServerLevel, body: Frog, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Frog): boolean;
    // private eatEntity(level: ServerLevel, body: Frog): void;
    start(level: ServerLevel, body: Frog, timestamp: number): void;
    stop(level: ServerLevel, body: Frog, timestamp: number): void;
    tick(level: ServerLevel, body: Frog, timestamp: number): void;
}