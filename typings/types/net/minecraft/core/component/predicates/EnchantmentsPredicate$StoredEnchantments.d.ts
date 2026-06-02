import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnchantmentPredicate } from '../../../../../net/minecraft/advancements/criterion/EnchantmentPredicate.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { EnchantmentsPredicate } from '../../../../../net/minecraft/core/component/predicates/EnchantmentsPredicate.d.ts'
import type { EnchantmentsPredicate$Enchantments } from '../../../../../net/minecraft/core/component/predicates/EnchantmentsPredicate$Enchantments.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemEnchantments } from '../../../../../net/minecraft/world/item/enchantment/ItemEnchantments.d.ts'
export class EnchantmentsPredicate$StoredEnchantments extends EnchantmentsPredicate {
    static CODEC: Codec<Object>;
    static CODEC: Codec<EnchantmentsPredicate$StoredEnchantments>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static codec(paramconstructor: (param0: Object | null) => Object | null): Codec<Object>;
    static enchantments(parampredicates: EnchantmentPredicate[]): EnchantmentsPredicate$Enchantments;
    static storedEnchantments(parampredicates: EnchantmentPredicate[]): EnchantmentsPredicate$StoredEnchantments;
    constructor(enchantments: EnchantmentPredicate[])
    componentType(): DataComponentType<ItemEnchantments>;
}