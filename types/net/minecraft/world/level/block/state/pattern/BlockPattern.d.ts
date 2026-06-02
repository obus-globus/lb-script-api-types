import type { LoadingCache } from '../../../../../../../com/google/common/cache/LoadingCache.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPatternExtended } from '../../../../../../../net/caffeinemc/mods/lithium/common/world/block_pattern_matching/BlockPatternExtended.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockInWorld } from '../../../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
import type { BlockPattern$BlockPatternMatch } from '../../../../../../../net/minecraft/world/level/block/state/pattern/BlockPattern$BlockPatternMatch.d.ts'
export class BlockPattern extends Object implements BlockPatternExtended {
    static createLevelCache(paramlevel: LevelReader, paramloadChunks: boolean): LoadingCache<BlockPos, BlockInWorld>;
    constructor(pattern: (param0: BlockInWorld) => kotlin.Boolean[][][])
    readonly depth: number;
    readonly height: number;
    readonly pattern: (param0: BlockInWorld) => kotlin.Boolean[][][];
    // private requiredBlock: Block;
    // private requiredBlockCount: number;
    readonly width: number;
    find(level: LevelReader, origin: BlockPos): BlockPattern$BlockPatternMatch;
    getDepth(): number;
    getHeight(): number;
    getPattern(): (param0: BlockInWorld) => kotlin.Boolean[][][];
    getWidth(): number;
    lithium$setRequiredBlock(arg0: Block, arg1: number): void;
    // private matches(origin: BlockPos, forwards: Direction, up: Direction, cache: LoadingCache<BlockPos, BlockInWorld>): BlockPattern$BlockPatternMatch;
    matches(level: LevelReader, origin: BlockPos, forwards: Direction, up: Direction): BlockPattern$BlockPatternMatch;
}