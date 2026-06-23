import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { EnvironmentAttribute } from '../../../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class EnvironmentAttributeCheck<Value extends unknown> extends Record implements LootItemCondition {
    static CODEC: Codec<Holder<LootItemCondition>>;
    static DIRECT_CODEC: Codec<LootItemCondition>;
    static MAP_CODEC: MapCodec<EnvironmentAttributeCheck<Object>>;
    static TYPED_CODEC: Codec<LootItemCondition>;
    static environmentAttribute(paramattribute: EnvironmentAttribute<Object>, paramvalue: Object | null): () => LootItemCondition;
    constructor(attribute: EnvironmentAttribute<Value>, value: Value)
    // private attribute: EnvironmentAttribute<Value>;
    // private value: Value;
    attribute(): EnvironmentAttribute<Value>;
    codec(): MapCodec<EnvironmentAttributeCheck<Value>>;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    test(context: LootContext): boolean;
    toString(): string;
    value(): Value;
}