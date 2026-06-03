import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { Annotated } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/Annotated.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AnnotationQualifierApplicabilityType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationQualifierApplicabilityType.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { JavaTypeEnhancement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeEnhancement.d.ts'
import type { SignatureParts } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/SignatureParts.d.ts'
import type { TypeEnhancementInfo } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/TypeEnhancementInfo.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class SignatureEnhancement extends Object {
    constructor(arg0: JavaTypeEnhancement)
    // private typeEnhancement: JavaTypeEnhancement;
    // private containsFunctionN(arg0: KotlinType): boolean;
    // private enhance(arg0: CallableMemberDescriptor, arg1: Annotated, arg2: boolean, arg3: LazyJavaResolverContext, arg4: AnnotationQualifierApplicabilityType, arg5: TypeEnhancementInfo, arg6: boolean, arg7: (param0: CallableMemberDescriptor) => KotlinType): KotlinType;
    // private enhance(arg0: SignatureParts, arg1: KotlinType, arg2: KotlinType[], arg3: TypeEnhancementInfo, arg4: boolean): KotlinType;
    // private enhanceSignature<D extends CallableMemberDescriptor>(arg0: D, arg1: LazyJavaResolverContext): D;
    enhanceSignatures(arg0: LazyJavaResolverContext, arg1: E[]): E[];
    enhanceSuperType(arg0: KotlinType, arg1: LazyJavaResolverContext): KotlinType;
    enhanceTypeParameterBounds(arg0: TypeParameterDescriptor, arg1: KotlinType[], arg2: LazyJavaResolverContext): KotlinType[];
    // private enhanceValueParameter(arg0: CallableMemberDescriptor, arg1: ValueParameterDescriptor, arg2: LazyJavaResolverContext, arg3: TypeEnhancementInfo, arg4: boolean, arg5: (param0: CallableMemberDescriptor) => KotlinType): KotlinType;
    // private getDefaultAnnotations<D extends CallableMemberDescriptor>(arg0: D, arg1: LazyJavaResolverContext): AnnotationDescriptor[];
}