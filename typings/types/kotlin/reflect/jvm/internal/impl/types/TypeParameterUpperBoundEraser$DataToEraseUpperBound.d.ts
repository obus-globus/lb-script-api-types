import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ErasureTypeAttributes } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/ErasureTypeAttributes.d.ts'
export class TypeParameterUpperBoundEraser$DataToEraseUpperBound extends Object {
    constructor(arg0: TypeParameterDescriptor, arg1: ErasureTypeAttributes)
    readonly typeAttr: ErasureTypeAttributes;
    readonly typeParameter: TypeParameterDescriptor;
    equals(arg0: Object | null): boolean;
    getTypeAttr(): ErasureTypeAttributes;
    getTypeParameter(): TypeParameterDescriptor;
    hashCode(): number;
    toString(): string;
}