import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { EnchantmentPredicate } from '../../../../../net/minecraft/advancements/criterion/EnchantmentPredicate.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { EnchantmentsPredicate } from '../../../../../net/minecraft/core/component/predicates/EnchantmentsPredicate.d.ts'
import type { EnchantmentsPredicate$StoredEnchantments } from '../../../../../net/minecraft/core/component/predicates/EnchantmentsPredicate$StoredEnchantments.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemEnchantments } from '../../../../../net/minecraft/world/item/enchantment/ItemEnchantments.d.ts'
export class EnchantmentsPredicate$Enchantments extends EnchantmentsPredicate {
    static CODEC: Codec<Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    static CODEC: Codec<EnchantmentsPredicate$Enchantments>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<any>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    static codec(paramconstructor: (param0: EnchantmentPredicate[]) => EnchantmentsPredicate | null): Codec<EnchantmentsPredicate>;
    static enchantments(parampredicates: EnchantmentPredicate[]): EnchantmentsPredicate$Enchantments;
    static storedEnchantments(parampredicates: EnchantmentPredicate[]): EnchantmentsPredicate$StoredEnchantments;
    constructor(enchantments: EnchantmentPredicate[])
    componentType(): DataComponentType<ItemEnchantments>;
}