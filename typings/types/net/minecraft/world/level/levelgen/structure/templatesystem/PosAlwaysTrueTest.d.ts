import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PosRuleTest } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/PosRuleTest.d.ts'
import type { PosRuleTestType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/PosRuleTestType.d.ts'
export class PosAlwaysTrueTest extends PosRuleTest {
    static CODEC: MapCodec<PosAlwaysTrueTest>;
    static INSTANCE: PosAlwaysTrueTest;
    private constructor()
    getType(): PosRuleTestType<any>;
    test(inTemplatePos: BlockPos, worldPos: BlockPos, worldReference: BlockPos, random: RandomSource): boolean;
}