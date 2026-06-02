import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemPredicate } from '../../../../../../../net/minecraft/advancements/criterion/ItemPredicate.d.ts'
import type { ItemPredicate$Builder } from '../../../../../../../net/minecraft/advancements/criterion/ItemPredicate$Builder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class MatchTool extends Record implements LootItemCondition {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<MatchTool>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static toolMatches(parampredicate: ItemPredicate$Builder): () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition;
    constructor(predicate: Optional<ItemPredicate>)
    // private predicate: Optional<ItemPredicate>;
    codec(): MapCodec<MatchTool>;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    predicate(): Optional<ItemPredicate>;
    test(context: LootContext): boolean;
    toString(): string;
}