import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnchantmentPredicate } from '../../../../../net/minecraft/advancements/criterion/EnchantmentPredicate.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/criterion/SingleComponentItemPredicate.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { EnchantmentsPredicate$Enchantments } from '../../../../../net/minecraft/core/component/predicates/EnchantmentsPredicate$Enchantments.d.ts'
import type { EnchantmentsPredicate$StoredEnchantments } from '../../../../../net/minecraft/core/component/predicates/EnchantmentsPredicate$StoredEnchantments.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemEnchantments } from '../../../../../net/minecraft/world/item/enchantment/ItemEnchantments.d.ts'
export abstract class EnchantmentsPredicate extends Object implements SingleComponentItemPredicate<ItemEnchantments> {
    static CODEC: Codec<Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<Object>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<Object>, DataComponentPredicate>>;
    static codec(paramconstructor: (param0: EnchantmentPredicate[]) => EnchantmentsPredicate | null): Codec<EnchantmentsPredicate>;
    static enchantments(parampredicates: EnchantmentPredicate[]): EnchantmentsPredicate$Enchantments;
    static storedEnchantments(parampredicates: EnchantmentPredicate[]): EnchantmentsPredicate$StoredEnchantments;
    constructor(enchantments: EnchantmentPredicate[])
    // private enchantments: EnchantmentPredicate[];
    enchantments(): EnchantmentPredicate[];
    matches(components: DataComponentGetter): boolean;
    matches(appliedEnchantments: ItemEnchantments): boolean;
}