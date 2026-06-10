import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { IntRange } from '../../../../../../../net/minecraft/world/level/storage/loot/IntRange.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class ValueCheckCondition extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<ValueCheckCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static hasValue(paramvalue: NumberProvider, paramrange: IntRange): () => LootItemCondition;
    constructor(value: NumberProvider, range: IntRange)
    // private range: IntRange;
    // private value: NumberProvider;
    codec(): MapCodec<ValueCheckCondition>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    range(): IntRange;
    test(context: LootContext): boolean;
    toString(): string;
    validate(context: ValidationContext): void;
    value(): NumberProvider;
}