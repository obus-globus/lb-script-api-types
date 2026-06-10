import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CheckAndCacheBlockChecker } from '../../../../../../net/caffeinemc/mods/lithium/common/ai/non_poi_block_search/CheckAndCacheBlockChecker.d.ts'
import type { LithiumMoveToBlockGoal } from '../../../../../../net/caffeinemc/mods/lithium/common/ai/non_poi_block_search/LithiumMoveToBlockGoal.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
export abstract class MoveToBlockGoal extends Goal implements LithiumMoveToBlockGoal {
    constructor(mob: PathfinderMob, speedModifier: number, searchRange: number)
    constructor(mob: PathfinderMob, speedModifier: number, searchRange: number, verticalSearchRange: number)
    // private blockPos: BlockPos;
    // private maxStayTicks: number;
    // private mob: PathfinderMob;
    // private nextStartTick: number;
    // private reachedTarget: boolean;
    // private searchRange: number;
    speedModifier: number;
    // private tryTicks: number;
    // private verticalSearchRange: number;
    // private verticalSearchStart: number;
    acceptedDistance(): number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    findNearestBlock(): boolean;
    getMoveToTarget(): BlockPos;
    isReachedTarget(): boolean;
    isValidTarget(level: LevelReader, pos: BlockPos): boolean;
    // private lithium$chunkAwareSearch(arg0: BlockPos, arg1: (param0: Object, param1: Object) => boolean, arg2: CheckAndCacheBlockChecker, arg3: (Object | null)[], arg4: number, arg5: number): boolean;
    lithium$findNearestBlock(arg0: (param0: Object) => boolean, arg1: (param0: Object, param1: Object) => boolean, arg2: boolean): boolean;
    // private lithium$vanillaOrderSearch(arg0: BlockPos, arg1: (param0: Object, param1: Object) => boolean, arg2: CheckAndCacheBlockChecker, arg3: number, arg4: number): boolean;
    moveMobToBlock(): void;
    nextStartTick(mob: PathfinderMob): number;
    requiresUpdateEveryTick(): boolean;
    shouldRecalculatePath(): boolean;
    start(): void;
    tick(): void;
}