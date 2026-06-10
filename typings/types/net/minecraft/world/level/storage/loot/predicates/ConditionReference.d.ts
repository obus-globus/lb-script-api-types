import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class ConditionReference extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<ConditionReference>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static conditionReference(paramname: ResourceKey<LootItemCondition>): () => LootItemCondition;
    constructor(name: ResourceKey<LootItemCondition>)
    // private name: ResourceKey<LootItemCondition>;
    codec(): MapCodec<ConditionReference>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): ResourceKey<LootItemCondition>;
    test(lootContext: LootContext): boolean;
    toString(): string;
    validate(context: ValidationContext): void;
}