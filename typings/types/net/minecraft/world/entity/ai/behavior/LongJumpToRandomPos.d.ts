import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { LongJumpToRandomPos$PossibleJump } from '../../../../../../net/minecraft/world/entity/ai/behavior/LongJumpToRandomPos$PossibleJump.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LongJumpToRandomPos<E extends Mob> extends Behavior<E> {
    static DEFAULT_DURATION: number;
    static defaultAcceptableLandingSpot<E extends Mob>(parambody: E, paramtargetPos: BlockPos): boolean;
    constructor(timeBetweenLongJumps: UniformInt, maxLongJumpHeight: number, maxLongJumpWidth: number, maxJumpVelocityMultiplier: number, getJumpSound: (param0: E) => SoundEvent)
    constructor(timeBetweenLongJumps: UniformInt, maxLongJumpHeight: number, maxLongJumpWidth: number, maxJumpVelocityMultiplier: number, getJumpSound: (param0: E) => SoundEvent, acceptableLandingSpot: (param0: E, param1: BlockPos) => boolean)
    // private acceptableLandingSpot: (param0: E, param1: BlockPos) => boolean;
    // private chosenJump: Vec3;
    // private findJumpTries: number;
    // private getJumpSound: (param0: E) => SoundEvent;
    // private initialPosition: Optional<Vec3>;
    // private jumpCandidates: LongJumpToRandomPos$PossibleJump[];
    // private maxJumpVelocityMultiplier: number;
    // private maxLongJumpHeight: number;
    // private maxLongJumpWidth: number;
    // private prepareJumpStart: number;
    // private timeBetweenLongJumps: UniformInt;
    calculateOptimalJumpVector(body: Mob, targetPos: Vec3): Vec3;
    canStillUse(level: ServerLevel, body: Mob, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Mob): boolean;
    getJumpCandidate(level: ServerLevel): Optional<LongJumpToRandomPos$PossibleJump>;
    // private isAcceptableLandingPosition(level: ServerLevel, body: E, targetPos: BlockPos): boolean;
    pickCandidate(level: ServerLevel, body: E, timestamp: number): void;
    start(level: ServerLevel, body: E, timestamp: number): void;
    tick(level: ServerLevel, body: E, timestamp: number): void;
}