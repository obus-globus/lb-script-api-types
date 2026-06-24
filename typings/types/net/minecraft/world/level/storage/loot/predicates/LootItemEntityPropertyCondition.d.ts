import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityPredicate } from '../../../../../../../net/minecraft/advancements/predicates/entity/EntityPredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../../../../net/minecraft/advancements/predicates/entity/EntityPredicate$Builder.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class LootItemEntityPropertyCondition extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<LootItemEntityPropertyCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static entityPresent(paramtarget: LootContext$EntityTarget): () => LootItemCondition;
    static hasProperties(paramtarget: LootContext$EntityTarget, parampredicate: EntityPredicate$Builder): () => LootItemCondition;
    static hasProperties(paramtarget: LootContext$EntityTarget, parampredicate: EntityPredicate): () => LootItemCondition;
    constructor(predicate: Optional<EntityPredicate>, entityTarget: LootContext$EntityTarget)
    // private entityTarget: LootContext$EntityTarget;
    // private predicate: Optional<EntityPredicate>;
    codec(): MapCodec<LootItemEntityPropertyCondition>;
    entityTarget(): LootContext$EntityTarget;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    predicate(): Optional<EntityPredicate>;
    test(context: LootContext): boolean;
    toString(): string;
}