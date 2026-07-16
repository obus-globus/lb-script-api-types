import type { MapCodec } from '../../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ResourceKey } from '../../../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { RuleBlockEntityModifier } from '../../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/RuleBlockEntityModifier.d.ts'
import type { RuleBlockEntityModifierType } from '../../../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/RuleBlockEntityModifierType.d.ts'
import type { LootTable } from '../../../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class AppendLoot extends Object implements RuleBlockEntityModifier {
    static CODEC: MapCodec<AppendLoot>;
    constructor(lootTable: ResourceKey<LootTable>)
    // private lootTable: ResourceKey<LootTable>;
    apply(random: RandomSource, existingTag: CompoundTag): CompoundTag;
    getType(): RuleBlockEntityModifierType<any>;
}