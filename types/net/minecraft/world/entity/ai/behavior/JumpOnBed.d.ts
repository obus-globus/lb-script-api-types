import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
export class JumpOnBed extends Behavior<Mob> {
    static DEFAULT_DURATION: number;
    constructor(speedModifier: number)
    // private remainingCooldownUntilNextJump: number;
    // private remainingJumps: number;
    // private remainingTimeToReachBed: number;
    // private speedModifier: number;
    // private targetBed: BlockPos;
    canStillUse(level: ServerLevel, body: Mob, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Mob): boolean;
    // private getNearestBed(body: Mob): Optional<BlockPos>;
    // private isBed(level: ServerLevel, bodyPos: BlockPos): boolean;
    // private nearBed(level: ServerLevel, body: Mob): boolean;
    // private onBedSurface(level: ServerLevel, body: Mob): boolean;
    // private onOrOverBed(level: ServerLevel, body: Mob): boolean;
    start(level: ServerLevel, body: Mob, timestamp: number): void;
    // private startWalkingTowardsBed(body: Mob, bedPos: BlockPos): void;
    stop(level: ServerLevel, body: Mob, timestamp: number): void;
    tick(level: ServerLevel, body: Mob, timestamp: number): void;
    timedOut(timestamp: number): boolean;
    // private tiredOfJumping(level: ServerLevel, body: Mob): boolean;
    // private tiredOfWalking(level: ServerLevel, body: Mob): boolean;
}