import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export abstract class CompositeLootItemCondition extends Object implements LootItemCondition {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    constructor(terms: LootItemCondition[], composedPredicate: (param0: LootContext) => kotlin.Boolean)
    // private composedPredicate: (param0: LootContext) => kotlin.Boolean;
    // private terms: LootItemCondition[];
    codec(): MapCodec<CompositeLootItemCondition>;
    test(context: LootContext): boolean;
    validate(output: ValidationContext): void;
}