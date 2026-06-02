import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeAliasExpansionReportStrategy } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAliasExpansionReportStrategy.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class TypeAliasExpansionReportStrategy$DO_NOTHING extends Object implements TypeAliasExpansionReportStrategy {
    static INSTANCE: TypeAliasExpansionReportStrategy$DO_NOTHING;
    private constructor()
    boundsViolationInSubstitution(arg0: TypeSubstitutor, arg1: KotlinType, arg2: KotlinType, arg3: TypeParameterDescriptor): void;
    conflictingProjection(arg0: TypeAliasDescriptor, arg1: TypeParameterDescriptor, arg2: KotlinType): void;
    recursiveTypeAlias(arg0: TypeAliasDescriptor): void;
    repeatedAnnotation(arg0: AnnotationDescriptor): void;
}