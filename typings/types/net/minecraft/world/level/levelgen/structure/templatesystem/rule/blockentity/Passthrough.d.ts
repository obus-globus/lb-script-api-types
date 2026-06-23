import type { Codec } from '../../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { RuleBlockEntityModifier } from '../../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/RuleBlockEntityModifier.d.ts'
import type { RuleBlockEntityModifierType } from '../../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/RuleBlockEntityModifierType.d.ts'
export class Passthrough extends Object implements RuleBlockEntityModifier {
    static CODEC: Codec<RuleBlockEntityModifier>;
    static CODEC: MapCodec<Passthrough>;
    static INSTANCE: Passthrough;
    constructor()
    apply(random: RandomSource, existingTag: CompoundTag): CompoundTag;
    getType(): RuleBlockEntityModifierType<any>;
}