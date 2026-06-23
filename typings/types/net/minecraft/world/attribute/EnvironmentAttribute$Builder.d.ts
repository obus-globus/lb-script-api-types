import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AttributeRange } from '../../../../net/minecraft/world/attribute/AttributeRange.d.ts'
import type { AttributeType } from '../../../../net/minecraft/world/attribute/AttributeType.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
export class EnvironmentAttribute$Builder<Value extends unknown> extends Object {
    constructor(type: AttributeType<Value>)
    // private defaultValue: Value;
    // private isPositional: boolean;
    // private isSpatiallyInterpolated: boolean;
    // private isSyncable: boolean;
    // private type: AttributeType<Value>;
    // private valueRange: AttributeRange<Value>;
    build(): EnvironmentAttribute<Value>;
    defaultValue(defaultValue: Value): EnvironmentAttribute$Builder<Value>;
    notPositional(): EnvironmentAttribute$Builder<Value>;
    spatiallyInterpolated(): EnvironmentAttribute$Builder<Value>;
    syncable(): EnvironmentAttribute$Builder<Value>;
    valueRange(valueRange: AttributeRange<Value>): EnvironmentAttribute$Builder<Value>;
}