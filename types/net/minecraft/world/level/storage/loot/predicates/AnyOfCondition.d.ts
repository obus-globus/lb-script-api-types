import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnyOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AnyOfCondition$Builder.d.ts'
import type { CompositeLootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/CompositeLootItemCondition.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class AnyOfCondition extends CompositeLootItemCondition {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<AnyOfCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static anyOf(paramterms: (Object | null)[]): AnyOfCondition$Builder;
    private constructor(terms: LootItemCondition[])
    codec(): MapCodec<AnyOfCondition>;
}