import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { LongJumpToRandomPos } from '../../../../../../net/minecraft/world/entity/ai/behavior/LongJumpToRandomPos.d.ts'
import type { LongJumpToRandomPos$PossibleJump } from '../../../../../../net/minecraft/world/entity/ai/behavior/LongJumpToRandomPos$PossibleJump.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class LongJumpToPreferredBlock<E extends Mob> extends LongJumpToRandomPos<E> {
    static DEFAULT_DURATION: number;
    static defaultAcceptableLandingSpot<E extends Mob>(parambody: E, paramtargetPos: BlockPos): boolean;
    constructor(timeBetweenLongJumps: UniformInt, maxLongJumpHeight: number, maxLongJumpWidth: number, maxJumpVelocity: number, getJumpSound: (param0: E) => SoundEvent, preferredBlockTag: TagKey<Block>, preferredBlocksChance: number, acceptableLandingSpot: (param0: E, param1: BlockPos) => boolean)
    // private currentlyWantingPreferredOnes: boolean;
    // private notPrefferedJumpCandidates: LongJumpToRandomPos$PossibleJump[];
    // private preferredBlockTag: TagKey<Block>;
    // private preferredBlocksChance: number;
    getJumpCandidate(level: ServerLevel): Optional<LongJumpToRandomPos$PossibleJump>;
    start(level: ServerLevel, body: E, timestamp: number): void;
}