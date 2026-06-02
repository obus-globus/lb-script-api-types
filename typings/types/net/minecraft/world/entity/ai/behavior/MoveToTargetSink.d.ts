import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { WalkTarget } from '../../../../../../net/minecraft/world/entity/ai/memory/WalkTarget.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class MoveToTargetSink extends Behavior<Mob> {
    static DEFAULT_DURATION: number;
    constructor()
    constructor(minTimeout: number, maxTimeout: number)
    // private lastTargetPos: BlockPos;
    // private path: Path;
    // private remainingCooldown: number;
    // private speedModifier: number;
    canStillUse(level: ServerLevel, body: Mob, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Mob): boolean;
    // private reachedTarget(body: Mob, walkTarget: WalkTarget): boolean;
    start(level: ServerLevel, body: Mob, timestamp: number): void;
    stop(level: ServerLevel, body: Mob, timestamp: number): void;
    tick(level: ServerLevel, body: Mob, timestamp: number): void;
    // private tryComputePath(body: Mob, walkTarget: WalkTarget, timestamp: number): boolean;
}