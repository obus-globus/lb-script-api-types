import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeUsage } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeUsage.d.ts'
export class ErasureTypeAttributes extends Object {
    constructor(arg0: TypeUsage, arg1: TypeParameterDescriptor[], arg2: SimpleType)
    readonly defaultType: SimpleType;
    readonly howThisTypeIsUsed: TypeUsage;
    readonly visitedTypeParameters: TypeParameterDescriptor[];
    equals(arg0: Object | null): boolean;
    getDefaultType(): SimpleType;
    getHowThisTypeIsUsed(): TypeUsage;
    getVisitedTypeParameters(): TypeParameterDescriptor[];
    hashCode(): number;
    withNewVisitedTypeParameter(arg0: TypeParameterDescriptor): ErasureTypeAttributes;
}