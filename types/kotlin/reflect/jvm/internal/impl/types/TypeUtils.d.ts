import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { ErasureTypeAttributes } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/ErasureTypeAttributes.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class TypeUtils extends Object {
    static CANNOT_INFER_FUNCTION_PARAM_TYPE: SimpleType;
    static DONT_CARE: SimpleType;
    static NO_EXPECTED_TYPE: SimpleType;
    static UNIT_EXPECTED_TYPE: SimpleType;
    static acceptsNullable(paramarg0: KotlinType): boolean;
    static contains(paramarg0: KotlinType, paramarg1: Function1<UnwrappedType, boolean>): boolean;
    static createSubstitutedSupertype(paramarg0: KotlinType, paramarg1: KotlinType, paramarg2: TypeSubstitutor): KotlinType;
    static getClassDescriptor(paramarg0: KotlinType): ClassDescriptor;
    static getDefaultTypeProjections(paramarg0: TypeParameterDescriptor[]): TypeProjection[];
    static getImmediateSupertypes(paramarg0: KotlinType): KotlinType[];
    static getTypeParameterDescriptorOrNull(paramarg0: KotlinType): TypeParameterDescriptor;
    static hasNullableSuperType(paramarg0: KotlinType): boolean;
    static isDontCarePlaceholder(paramarg0: KotlinType): boolean;
    static isNullableType(paramarg0: KotlinType): boolean;
    static isTypeParameter(paramarg0: KotlinType): boolean;
    static makeNotNullable(paramarg0: KotlinType): KotlinType;
    static makeNullable(paramarg0: KotlinType): KotlinType;
    static makeNullableAsSpecified(paramarg0: KotlinType, paramarg1: boolean): KotlinType;
    static makeNullableIfNeeded(paramarg0: KotlinType, paramarg1: boolean): KotlinType;
    static makeNullableIfNeeded(paramarg0: SimpleType, paramarg1: boolean): SimpleType;
    static makeStarProjection(paramarg0: TypeParameterDescriptor): TypeProjection;
    static makeStarProjection(paramarg0: TypeParameterDescriptor, paramarg1: ErasureTypeAttributes): TypeProjection;
    static makeUnsubstitutedType(paramarg0: ClassifierDescriptor, paramarg1: MemberScope, paramarg2: Function1<KotlinTypeRefiner, SimpleType>): SimpleType;
    static makeUnsubstitutedType(paramarg0: TypeConstructor, paramarg1: MemberScope, paramarg2: Function1<KotlinTypeRefiner, SimpleType>): SimpleType;
    static noExpectedType(paramarg0: KotlinType): boolean;
    constructor()
}