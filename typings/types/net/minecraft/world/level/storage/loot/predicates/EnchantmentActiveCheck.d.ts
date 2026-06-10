import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class EnchantmentActiveCheck extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<EnchantmentActiveCheck>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static enchantmentActiveCheck(): () => LootItemCondition;
    static enchantmentInactiveCheck(): () => LootItemCondition;
    // private active: boolean;
    active(): boolean;
    codec(): MapCodec<EnchantmentActiveCheck>;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    test(lootContext: LootContext): boolean;
    toString(): string;
}