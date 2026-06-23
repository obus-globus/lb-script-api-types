import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { RuleBlockEntityModifierType } from '../../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/RuleBlockEntityModifierType.d.ts'
export interface RuleBlockEntityModifier extends Object{
    apply(random: RandomSource, existingTag: CompoundTag): CompoundTag;
    getType(): RuleBlockEntityModifierType<any>;
}