import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class InvertedLootItemCondition extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<InvertedLootItemCondition>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static invert(paramterm: () => LootItemCondition): () => LootItemCondition;
    constructor(term: LootItemCondition)
    // private term: LootItemCondition;
    codec(): MapCodec<InvertedLootItemCondition>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    term(): LootItemCondition;
    test(context: LootContext): boolean;
    toString(): string;
    validate(output: ValidationContext): void;
}