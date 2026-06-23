import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeMap$Builder } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeMap$Builder.d.ts'
import type { EnvironmentAttributeMap$Entry } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeMap$Entry.d.ts'
export class EnvironmentAttributeMap extends Object {
    static CODEC: Codec<EnvironmentAttributeMap>;
    static CODEC_ONLY_POSITIONAL: Codec<EnvironmentAttributeMap>;
    static EMPTY: EnvironmentAttributeMap;
    static NETWORK_CODEC: Codec<EnvironmentAttributeMap>;
    static builder(): EnvironmentAttributeMap$Builder;
    private constructor(entries: Map<EnvironmentAttribute<Object>, EnvironmentAttributeMap$Entry<Object, Object>>)
    // private entries: Map<EnvironmentAttribute<Object>, EnvironmentAttributeMap$Entry<Object, Object>>;
    applyModifier<Value extends unknown>(attribute: EnvironmentAttribute<Value>, baseValue: Value): Value;
    contains(attribute: EnvironmentAttribute<Object>): boolean;
    equals(obj: Object | null): boolean;
    get<Value extends unknown>(attribute: EnvironmentAttribute<Value>): EnvironmentAttributeMap$Entry<Value, Object>;
    hashCode(): number;
    keySet(): EnvironmentAttribute<Object>[];
    toString(): string;
}