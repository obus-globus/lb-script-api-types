import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction$Axis } from '../../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PosRuleTest } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/PosRuleTest.d.ts'
import type { PosRuleTestType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/PosRuleTestType.d.ts'
export class AxisAlignedLinearPosTest extends PosRuleTest {
    static CODEC: Codec<PosRuleTest>;
    static CODEC: MapCodec<AxisAlignedLinearPosTest>;
    constructor(minChance: number, maxChance: number, minDist: number, maxDist: number, axis: Direction$Axis)
    // private axis: Direction$Axis;
    // private maxChance: number;
    // private maxDist: number;
    // private minChance: number;
    // private minDist: number;
    getType(): PosRuleTestType<Object>;
    test(inTemplatePos: BlockPos, worldPos: BlockPos, worldReference: BlockPos, random: RandomSource): boolean;
}