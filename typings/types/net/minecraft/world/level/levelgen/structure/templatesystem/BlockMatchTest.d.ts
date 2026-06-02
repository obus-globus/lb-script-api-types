import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { RuleTest } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/RuleTest.d.ts'
import type { RuleTestType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/RuleTestType.d.ts'
export class BlockMatchTest extends RuleTest {
    static CODEC: Codec<RuleTest>;
    static CODEC: MapCodec<BlockMatchTest>;
    constructor(block: Block)
    // private block: Block;
    getType(): RuleTestType<Object>;
    test(blockState: BlockState, random: RandomSource): boolean;
}