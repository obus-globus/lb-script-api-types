import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Visibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { JavaTypeEnhancementState } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeEnhancementState.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { JavaWildcardType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaWildcardType.d.ts'
export class UtilsKt extends Object {
    static extractNullabilityAnnotationOnBoundedWildcard(paramarg0: LazyJavaResolverContext, paramarg1: JavaWildcardType): AnnotationDescriptor;
    static hasErasedValueParameters(paramarg0: CallableMemberDescriptor): boolean;
    static isJspecifyEnabledInStrictMode(paramarg0: JavaTypeEnhancementState): boolean;
    static toDescriptorVisibility(paramarg0: Visibility): DescriptorVisibility;
}