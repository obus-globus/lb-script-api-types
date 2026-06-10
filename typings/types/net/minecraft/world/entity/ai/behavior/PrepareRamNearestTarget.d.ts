import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { PrepareRamNearestTarget$RamCandidate } from '../../../../../../net/minecraft/world/entity/ai/behavior/PrepareRamNearestTarget$RamCandidate.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PrepareRamNearestTarget<E extends PathfinderMob> extends Behavior<E> {
    static DEFAULT_DURATION: number;
    static TIME_OUT_DURATION: number;
    constructor(getCooldownOnFail: (param0: E) => number, minRamDistance: number, maxRamDistance: number, walkSpeed: number, ramTargeting: TargetingConditions, ramPrepareTime: number, getPrepareRamSound: (param0: E) => SoundEvent)
    // private getCooldownOnFail: (param0: E) => number;
    // private getPrepareRamSound: (param0: E) => SoundEvent;
    // private maxRamDistance: number;
    // private minRamDistance: number;
    // private ramCandidate: Optional<PrepareRamNearestTarget$RamCandidate>;
    // private ramPrepareTime: number;
    // private ramTargeting: TargetingConditions;
    // private reachedRamPositionTimestamp: Optional<number>;
    // private walkSpeed: number;
    // private calculateRammingStartPosition(body: PathfinderMob, ramableTarget: LivingEntity): Optional<BlockPos>;
    canStillUse(level: ServerLevel, body: PathfinderMob, timestamp: number): boolean;
    // private chooseRamPosition(body: PathfinderMob, ramableTarget: LivingEntity): void;
    // private getEdgeOfBlock(startRamPos: BlockPos, targetPos: BlockPos): Vec3;
    // private isWalkableBlock(body: PathfinderMob, targetPos: BlockPos): boolean;
    start(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    stop(level: ServerLevel, body: E, timestamp: number): void;
    tick(level: ServerLevel, body: E, timestamp: number): void;
}