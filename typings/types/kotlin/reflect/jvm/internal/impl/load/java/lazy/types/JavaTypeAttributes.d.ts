import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { JavaTypeFlexibility } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/types/JavaTypeFlexibility.d.ts'
import type { ErasureTypeAttributes } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/ErasureTypeAttributes.d.ts'
import type { SimpleType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeUsage } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeUsage.d.ts'
export class JavaTypeAttributes extends ErasureTypeAttributes {
    constructor(arg0: TypeUsage, arg1: JavaTypeFlexibility, arg2: boolean, arg3: boolean, arg4: TypeParameterDescriptor[], arg5: SimpleType)
    readonly defaultType: SimpleType;
    readonly flexibility: JavaTypeFlexibility;
    readonly howThisTypeIsUsed: TypeUsage;
    // private isForAnnotationParameter: boolean;
    // private isRaw: boolean;
    readonly visitedTypeParameters: TypeParameterDescriptor[];
    copy(arg0: TypeUsage, arg1: JavaTypeFlexibility, arg2: boolean, arg3: boolean, arg4: TypeParameterDescriptor[], arg5: SimpleType): JavaTypeAttributes;
    equals(arg0: Object | null): boolean;
    getDefaultType(): SimpleType;
    getFlexibility(): JavaTypeFlexibility;
    getHowThisTypeIsUsed(): TypeUsage;
    getVisitedTypeParameters(): TypeParameterDescriptor[];
    hashCode(): number;
    isForAnnotationParameter(): boolean;
    isRaw(): boolean;
    markIsRaw(arg0: boolean): JavaTypeAttributes;
    toString(): string;
    withDefaultType(arg0: SimpleType): JavaTypeAttributes;
    withFlexibility(arg0: JavaTypeFlexibility): JavaTypeAttributes;
    withNewVisitedTypeParameter(arg0: TypeParameterDescriptor): JavaTypeAttributes;
}