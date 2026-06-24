import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StatePropertiesPredicate } from '../../../../../../../net/minecraft/advancements/predicates/StatePropertiesPredicate.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemBlockStatePropertyCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemBlockStatePropertyCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class LootItemBlockStatePropertyCondition extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<LootItemBlockStatePropertyCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static hasBlockStateProperties(paramblock: Block): LootItemBlockStatePropertyCondition$Builder;
    constructor(block: Holder<Block>, properties: Optional<StatePropertiesPredicate>)
    // private block: Holder<Block>;
    // private properties: Optional<StatePropertiesPredicate>;
    block(): Holder<Block>;
    codec(): MapCodec<LootItemBlockStatePropertyCondition>;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    properties(): Optional<StatePropertiesPredicate>;
    test(context: LootContext): boolean;
    toString(): string;
}