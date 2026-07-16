import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { RuleTest } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/RuleTest.d.ts'
import type { RuleTestType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/RuleTestType.d.ts'
export class BlockStateMatchTest extends RuleTest {
    static CODEC: MapCodec<BlockStateMatchTest>;
    constructor(blockState: BlockState)
    // private blockState: BlockState;
    getType(): RuleTestType<any>;
    test(blockState: BlockState, random: RandomSource): boolean;
}