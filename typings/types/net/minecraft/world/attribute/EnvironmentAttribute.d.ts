import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AttributeRange } from '../../../../net/minecraft/world/attribute/AttributeRange.d.ts'
import type { AttributeType } from '../../../../net/minecraft/world/attribute/AttributeType.d.ts'
import type { EnvironmentAttribute$Builder } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute$Builder.d.ts'
export class EnvironmentAttribute<Value extends Object | number | string | boolean> extends Object {
    static builder(paramtype: AttributeType<Object>): EnvironmentAttribute$Builder<Object>;
    private constructor(type: AttributeType<Value>, defaultValue: Value, valueRange: AttributeRange<Value>, isSyncable: boolean, isPositional: boolean, isSpatiallyInterpolated: boolean)
    // private defaultValue: Value;
    // private isPositional: boolean;
    // private isSpatiallyInterpolated: boolean;
    isSyncable: boolean;
    // private type: AttributeType<Value>;
    // private valueRange: AttributeRange<Value>;
    defaultValue(): Value;
    isPositional(): boolean;
    isSpatiallyInterpolated(): boolean;
    sanitizeValue(value: Value): Value;
    toString(): string;
    type(): AttributeType<Value>;
    valueCodec(): Codec<Value>;
}