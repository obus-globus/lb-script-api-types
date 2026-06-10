import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BooleanProperty } from '../../../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
export class TreeDecorator$Context extends Object {
    constructor(level: WorldGenLevel, decorationSetter: (param0: BlockPos, param1: BlockState) => void, random: RandomSource, trunkSet: BlockPos[], foliageSet: BlockPos[], rootSet: BlockPos[])
    // private decorationSetter: (param0: BlockPos, param1: BlockState) => void;
    // private leaves: BlockPos[];
    // private level: WorldGenLevel;
    // private logs: BlockPos[];
    // private random: RandomSource;
    // private roots: BlockPos[];
    checkBlock(pos: BlockPos, predicate: (param0: BlockState) => boolean): boolean;
    isAir(pos: BlockPos): boolean;
    leaves(): BlockPos[];
    level(): WorldGenLevel;
    logs(): BlockPos[];
    placeVine(pos: BlockPos, direction: BooleanProperty): void;
    random(): RandomSource;
    roots(): BlockPos[];
    setBlock(pos: BlockPos, state: BlockState): void;
}