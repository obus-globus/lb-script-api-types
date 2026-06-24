import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LocationPredicate } from '../../../../../../../net/minecraft/advancements/predicates/LocationPredicate.d.ts'
import type { LocationPredicate$Builder } from '../../../../../../../net/minecraft/advancements/predicates/LocationPredicate$Builder.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class LocationCheck extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<LocationCheck>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static checkLocation(parampredicate: LocationPredicate$Builder): () => LootItemCondition;
    static checkLocation(parampredicate: LocationPredicate$Builder, paramoffset: BlockPos): () => LootItemCondition;
    constructor(predicate: Optional<LocationPredicate>, offset: BlockPos)
    // private offset: BlockPos;
    // private predicate: Optional<LocationPredicate>;
    codec(): MapCodec<LocationCheck>;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    offset(): BlockPos;
    predicate(): Optional<LocationPredicate>;
    test(context: LootContext): boolean;
    toString(): string;
}