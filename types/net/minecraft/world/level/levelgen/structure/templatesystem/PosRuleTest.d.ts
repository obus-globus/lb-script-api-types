import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PosRuleTestType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/PosRuleTestType.d.ts'
export abstract class PosRuleTest extends Object {
    static CODEC: Codec<PosRuleTest>;
    constructor()
    getType(): PosRuleTestType<Object>;
    test(inTemplatePos: BlockPos, worldPos: BlockPos, worldReference: BlockPos, random: RandomSource): boolean;
}