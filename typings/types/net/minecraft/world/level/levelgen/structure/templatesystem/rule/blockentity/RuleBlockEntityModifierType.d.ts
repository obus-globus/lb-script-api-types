import type { MapCodec } from '../../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { RuleBlockEntityModifier } from '../../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/RuleBlockEntityModifier.d.ts'
export interface RuleBlockEntityModifierType<P extends RuleBlockEntityModifier> extends Object{
    codec(): MapCodec<P>;
}