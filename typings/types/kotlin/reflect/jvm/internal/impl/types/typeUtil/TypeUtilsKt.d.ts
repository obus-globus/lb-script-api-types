import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { Variance } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export class TypeUtilsKt extends Object {
    static asTypeProjection(paramarg0: KotlinType): TypeProjection;
    static contains(paramarg0: KotlinType, paramarg1: (param0: Object | null) => boolean): boolean;
    static containsTypeAliasParameters(paramarg0: KotlinType): boolean;
    static containsTypeParameter(paramarg0: KotlinType): boolean;
    static createProjection(paramarg0: KotlinType, paramarg1: Variance, paramarg2: TypeParameterDescriptor): TypeProjection;
    static extractTypeParametersFromUpperBounds(paramarg0: KotlinType, paramarg1: (Object | null)[]): TypeParameterDescriptor[];
    static getBuiltIns(paramarg0: KotlinType): KotlinBuiltIns;
    static getRepresentativeUpperBound(paramarg0: TypeParameterDescriptor): KotlinType;
    static hasTypeParameterRecursiveBounds(paramarg0: TypeParameterDescriptor): boolean;
    static hasTypeParameterRecursiveBounds(paramarg0: TypeParameterDescriptor, paramarg1: TypeConstructor, paramarg2: (Object | null)[]): boolean;
    static isBoolean(paramarg0: KotlinType): boolean;
    static isNothing(paramarg0: KotlinType): boolean;
    static isStubType(paramarg0: KotlinType): boolean;
    static isStubTypeForBuilderInference(paramarg0: KotlinType): boolean;
    static isSubtypeOf(paramarg0: KotlinType, paramarg1: KotlinType): boolean;
    static isTypeAliasParameter(paramarg0: ClassifierDescriptor): boolean;
    static isTypeParameter(paramarg0: KotlinType): boolean;
    static isUnresolvedType(paramarg0: KotlinType): boolean;
    static makeNotNullable(paramarg0: KotlinType): KotlinType;
    static makeNullable(paramarg0: KotlinType): KotlinType;
    static replaceAnnotations(paramarg0: KotlinType, paramarg1: AnnotationDescriptor[]): KotlinType;
    static replaceArgumentsWithStarProjections(paramarg0: KotlinType): KotlinType;
    static requiresTypeAliasExpansion(paramarg0: KotlinType): boolean;
    static shouldBeUpdated(paramarg0: KotlinType): boolean;
}