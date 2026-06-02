import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttributeModifiersPredicate } from '../../../../../net/minecraft/core/component/predicates/AttributeModifiersPredicate.d.ts'
import type { BundlePredicate } from '../../../../../net/minecraft/core/component/predicates/BundlePredicate.d.ts'
import type { ContainerPredicate } from '../../../../../net/minecraft/core/component/predicates/ContainerPredicate.d.ts'
import type { CustomDataPredicate } from '../../../../../net/minecraft/core/component/predicates/CustomDataPredicate.d.ts'
import type { DamagePredicate } from '../../../../../net/minecraft/core/component/predicates/DamagePredicate.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { EnchantmentsPredicate$Enchantments } from '../../../../../net/minecraft/core/component/predicates/EnchantmentsPredicate$Enchantments.d.ts'
import type { EnchantmentsPredicate$StoredEnchantments } from '../../../../../net/minecraft/core/component/predicates/EnchantmentsPredicate$StoredEnchantments.d.ts'
import type { FireworkExplosionPredicate } from '../../../../../net/minecraft/core/component/predicates/FireworkExplosionPredicate.d.ts'
import type { FireworksPredicate } from '../../../../../net/minecraft/core/component/predicates/FireworksPredicate.d.ts'
import type { JukeboxPlayablePredicate } from '../../../../../net/minecraft/core/component/predicates/JukeboxPlayablePredicate.d.ts'
import type { PotionsPredicate } from '../../../../../net/minecraft/core/component/predicates/PotionsPredicate.d.ts'
import type { TrimPredicate } from '../../../../../net/minecraft/core/component/predicates/TrimPredicate.d.ts'
import type { VillagerTypePredicate } from '../../../../../net/minecraft/core/component/predicates/VillagerTypePredicate.d.ts'
import type { WritableBookPredicate } from '../../../../../net/minecraft/core/component/predicates/WritableBookPredicate.d.ts'
import type { WrittenBookPredicate } from '../../../../../net/minecraft/core/component/predicates/WrittenBookPredicate.d.ts'
export class DataComponentPredicates extends Object {
    static ARMOR_TRIM: DataComponentPredicate$Type<TrimPredicate>;
    static ATTRIBUTE_MODIFIERS: DataComponentPredicate$Type<AttributeModifiersPredicate>;
    static BUNDLE_CONTENTS: DataComponentPredicate$Type<BundlePredicate>;
    static CONTAINER: DataComponentPredicate$Type<ContainerPredicate>;
    static CUSTOM_DATA: DataComponentPredicate$Type<CustomDataPredicate>;
    static DAMAGE: DataComponentPredicate$Type<DamagePredicate>;
    static ENCHANTMENTS: DataComponentPredicate$Type<EnchantmentsPredicate$Enchantments>;
    static FIREWORKS: DataComponentPredicate$Type<FireworksPredicate>;
    static FIREWORK_EXPLOSION: DataComponentPredicate$Type<FireworkExplosionPredicate>;
    static JUKEBOX_PLAYABLE: DataComponentPredicate$Type<JukeboxPlayablePredicate>;
    static POTIONS: DataComponentPredicate$Type<PotionsPredicate>;
    static STORED_ENCHANTMENTS: DataComponentPredicate$Type<EnchantmentsPredicate$StoredEnchantments>;
    static VILLAGER_VARIANT: DataComponentPredicate$Type<VillagerTypePredicate>;
    static WRITABLE_BOOK: DataComponentPredicate$Type<WritableBookPredicate>;
    static WRITTEN_BOOK: DataComponentPredicate$Type<WrittenBookPredicate>;
    static bootstrap(paramregistry: (Object | null)[]): DataComponentPredicate$Type<Object>;
    constructor()
}