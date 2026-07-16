import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { LerpFunction } from '../../../../../net/minecraft/world/attribute/LerpFunction.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
import type { AttributeModifier$OperationId } from '../../../../../net/minecraft/world/attribute/modifier/AttributeModifier$OperationId.d.ts'
export class AttributeModifier$OverrideModifier<Value extends unknown> extends Record implements AttributeModifier<Value, Value> {
    static ARGB_COLOR_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<number, Object>>;
    static BOOLEAN_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<boolean, Object>>;
    static FLOAT_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<number, Object>>;
    static INTEGER_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<number, Object>>;
    static RGB_COLOR_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<number, Object>>;
    static override<Value extends unknown>(): AttributeModifier<Value, Value>;
    constructor()
    apply(subject: Value, argument: Value): Value;
    argumentCodec(attribute: EnvironmentAttribute<Value>): Codec<Value>;
    argumentKeyframeLerp(attribute: EnvironmentAttribute<Value>): LerpFunction<Value>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}