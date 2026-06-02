import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PosRuleTest } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/PosRuleTest.d.ts'
export interface PosRuleTestType<P extends PosRuleTest> extends Object{
    codec(): MapCodec<P>;
}