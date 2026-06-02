import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { EnvironmentAttribute } from '../../../../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { NumberProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class EnvironmentAttributeValue extends Record implements NumberProvider {
    static MAP_CODEC: MapCodec<EnvironmentAttributeValue>;
    static forEnvironmentAttribute(paramattribute: EnvironmentAttribute<Object>): EnvironmentAttributeValue;
    constructor(attribute: EnvironmentAttribute<Object>)
    // private attribute: EnvironmentAttribute<Object>;
    attribute(): EnvironmentAttribute<Object>;
    codec(): MapCodec<EnvironmentAttributeValue>;
    equals(o: Object | null): boolean;
    getFloat(context: LootContext): number;
    getInt(context: LootContext): number;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    toString(): string;
}