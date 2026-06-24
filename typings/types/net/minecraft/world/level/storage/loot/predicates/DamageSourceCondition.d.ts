import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DamageSourcePredicate } from '../../../../../../../net/minecraft/advancements/predicates/DamageSourcePredicate.d.ts'
import type { DamageSourcePredicate$Builder } from '../../../../../../../net/minecraft/advancements/predicates/DamageSourcePredicate$Builder.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class DamageSourceCondition extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<DamageSourceCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static hasDamageSource(parambuilder: DamageSourcePredicate$Builder): () => LootItemCondition;
    constructor(predicate: Optional<DamageSourcePredicate>)
    // private predicate: Optional<DamageSourcePredicate>;
    codec(): MapCodec<DamageSourceCondition>;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    predicate(): Optional<DamageSourcePredicate>;
    test(context: LootContext): boolean;
    toString(): string;
}