import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AllOfCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/AllOfCondition$Builder.d.ts'
import type { CompositeLootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/CompositeLootItemCondition.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class AllOfCondition extends CompositeLootItemCondition {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static INLINE_CODEC: Codec<AllOfCondition>;
    static MAP_CODEC: MapCodec<AllOfCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static allOf(paramterms: LootItemCondition[]): AllOfCondition;
    static allOf(paramterms: (Object | null)[]): AllOfCondition$Builder;
    private constructor(terms: LootItemCondition[])
    codec(): MapCodec<AllOfCondition>;
}