import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ToFloatFunction } from '../../../../net/minecraft/util/ToFloatFunction.d.ts'
import type { LerpFunction } from '../../../../net/minecraft/world/attribute/LerpFunction.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
import type { AttributeModifier$OperationId } from '../../../../net/minecraft/world/attribute/modifier/AttributeModifier$OperationId.d.ts'
export class AttributeType<Value extends unknown> extends Record {
    static ofInterpolated<Value extends unknown>(paramvalueCodec: Codec<Value>, parammodifierLibrary: JavaMap<AttributeModifier$OperationId, AttributeModifier<Value, Object>>, paramlerp: LerpFunction<Value>): AttributeType<Value>;
    static ofInterpolated<Value extends unknown>(paramvalueCodec: Codec<Value>, parammodifierLibrary: JavaMap<AttributeModifier$OperationId, AttributeModifier<Value, Object>>, paramlerp: LerpFunction<Value>, parampartialTickLerp: LerpFunction<Value>, paramtoFloat: (param0: Value) => number): AttributeType<Value>;
    static ofNotInterpolated<Value extends unknown>(paramvalueCodec: Codec<Value>): AttributeType<Value>;
    static ofNotInterpolated<Value extends unknown>(paramvalueCodec: Codec<Value>, parammodifierLibrary: JavaMap<AttributeModifier$OperationId, AttributeModifier<Value, Object>>): AttributeType<Value>;
    constructor(valueCodec: Codec<Value>, modifierLibrary: JavaMap<AttributeModifier$OperationId, AttributeModifier<Value, Object>>, modifierCodec: Codec<AttributeModifier<Value, Object>>, keyframeLerp: LerpFunction<Value>, stateChangeLerp: LerpFunction<Value>, spatialLerp: LerpFunction<Value>, partialTickLerp: LerpFunction<Value>, toFloat: (param0: Value) => number)
    // private keyframeLerp: LerpFunction<Value>;
    // private modifierCodec: Codec<AttributeModifier<Value, Object>>;
    // private modifierLibrary: JavaMap<AttributeModifier$OperationId, AttributeModifier<Value, Object>>;
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
    modifierLibrary(): JavaMap<AttributeModifier$OperationId, AttributeModifier<Value, Object>>;
    partialTickLerp(): LerpFunction<Value>;
    spatialLerp(): LerpFunction<Value>;
    stateChangeLerp(): LerpFunction<Value>;
    toFloat(): (param0: Value) => number;
    toFloat(value: Value): number;
    toString(): string;
    valueCodec(): Codec<Value>;
}