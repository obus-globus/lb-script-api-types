import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ToFloatFunction } from '../../../../net/minecraft/util/ToFloatFunction.d.ts'
import type { LerpFunction } from '../../../../net/minecraft/world/attribute/LerpFunction.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
import type { AttributeModifier$OperationId } from '../../../../net/minecraft/world/attribute/modifier/AttributeModifier$OperationId.d.ts'
export class AttributeType<Value extends Object | number | string | boolean> extends Record {
    static ofInterpolated(paramvalueCodec: Codec<Object>, parammodifierLibrary: { [key in AttributeModifier$OperationId]: AttributeModifier<Object, Object> }, paramlerp: LerpFunction<Object>): AttributeType<Object>;
    static ofInterpolated(paramvalueCodec: Codec<Object>, parammodifierLibrary: { [key in AttributeModifier$OperationId]: AttributeModifier<Object, Object> }, paramlerp: LerpFunction<Object>, parampartialTickLerp: LerpFunction<Object>, paramtoFloat: (param0: Object | null) => number): AttributeType<Object>;
    static ofNotInterpolated(paramvalueCodec: Codec<Object>): AttributeType<Object>;
    static ofNotInterpolated(paramvalueCodec: Codec<Object>, parammodifierLibrary: { [key in AttributeModifier$OperationId]: AttributeModifier<Object, Object> }): AttributeType<Object>;
    constructor(valueCodec: Codec<Value>, modifierLibrary: { [key in AttributeModifier$OperationId]: AttributeModifier<Value, Object> }, modifierCodec: Codec<AttributeModifier<Value, Object>>, keyframeLerp: LerpFunction<Value>, stateChangeLerp: LerpFunction<Value>, spatialLerp: LerpFunction<Value>, partialTickLerp: LerpFunction<Value>, toFloat: (param0: Value) => number)
    // private keyframeLerp: LerpFunction<Value>;
    // private modifierCodec: Codec<AttributeModifier<Value, Object>>;
    // private modifierLibrary: { [key in AttributeModifier$OperationId]: AttributeModifier<Value, Object> };
    // private partialTickLerp: LerpFunction<Value>;
    // private spatialLerp: LerpFunction<Value>;
    // private stateChangeLerp: LerpFunction<Value>;
    // private toFloat: (param0: Value) => number;
    // private valueCodec: Codec<Value>;
    checkAllowedModifier(modifier: AttributeModifier<Value, Object>): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    keyframeLerp(): LerpFunction<Value>;
    modifierCodec(): Codec<AttributeModifier<Value, Object>>;
    modifierLibrary(): { [key in AttributeModifier$OperationId]: AttributeModifier<Value, Object> };
    partialTickLerp(): LerpFunction<Value>;
    spatialLerp(): LerpFunction<Value>;
    stateChangeLerp(): LerpFunction<Value>;
    toFloat(): (param0: Value) => number;
    toFloat(value: Value): number;
    toString(): string;
    valueCodec(): Codec<Value>;
}