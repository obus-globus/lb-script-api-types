import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { MultifaceBlock } from '../../../../../net/minecraft/world/level/block/MultifaceBlock.d.ts'
import type { MultifaceSpreader$SpreadConfig } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$SpreadConfig.d.ts'
import type { MultifaceSpreader$SpreadPos } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$SpreadPos.d.ts'
import type { MultifaceSpreader$SpreadPredicate } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$SpreadPredicate.d.ts'
import type { MultifaceSpreader$SpreadType } from '../../../../../net/minecraft/world/level/block/MultifaceSpreader$SpreadType.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MultifaceSpreader extends Object {
    static DEFAULT_SPREAD_ORDER: MultifaceSpreader$SpreadType[];
    constructor(multifaceBlock: MultifaceBlock)
    constructor(config: MultifaceSpreader$SpreadConfig)
    // private config: MultifaceSpreader$SpreadConfig;
    canSpreadInAnyDirection(state: BlockState, level: BlockGetter, pos: BlockPos, startingFace: Direction): boolean;
    getSpreadFromFaceTowardDirection(state: BlockState, level: BlockGetter, pos: BlockPos, startingFace: Direction, spreadDirection: Direction, canSpreadInto: (param0: BlockGetter, param1: BlockPos, param2: MultifaceSpreader$SpreadPos) => boolean): Optional<MultifaceSpreader$SpreadPos>;
    spreadAll(state: BlockState, level: LevelAccessor, pos: BlockPos, postProcess: boolean): number;
    // private spreadFromFaceTowardAllDirections(state: BlockState, level: LevelAccessor, pos: BlockPos, startingFace: Direction, postProcess: boolean): number;
    spreadFromFaceTowardDirection(state: BlockState, level: LevelAccessor, pos: BlockPos, fromFace: Direction, spreadDirection: Direction, postProcess: boolean): Optional<MultifaceSpreader$SpreadPos>;
    spreadFromFaceTowardRandomDirection(state: BlockState, level: LevelAccessor, pos: BlockPos, startingFace: Direction, random: RandomSource, postProcess: boolean): Optional<MultifaceSpreader$SpreadPos>;
    spreadFromRandomFaceTowardRandomDirection(state: BlockState, level: LevelAccessor, pos: BlockPos, random: RandomSource): Optional<MultifaceSpreader$SpreadPos>;
    spreadToFace(level: LevelAccessor, spreadPos: MultifaceSpreader$SpreadPos, postProcess: boolean): Optional<MultifaceSpreader$SpreadPos>;
}