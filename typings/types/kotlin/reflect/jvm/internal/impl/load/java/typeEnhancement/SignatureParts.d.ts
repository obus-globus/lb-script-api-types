import type { DefaultConstructorMarker } from '../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { Annotated } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/Annotated.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AnnotationQualifierApplicabilityType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationQualifierApplicabilityType.d.ts'
import type { AnnotationTypeQualifierResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationTypeQualifierResolver.d.ts'
import type { JavaDefaultQualifiers } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaDefaultQualifiers.d.ts'
import type { JavaTypeQualifiersByElementType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeQualifiersByElementType.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { AbstractSignatureParts } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/AbstractSignatureParts.d.ts'
import type { NullabilityQualifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/NullabilityQualifier.d.ts'
import type { WithMigrationStatus } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/WithMigrationStatus.d.ts'
import type { FqNameUnsafe } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { TypeParameterMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
import type { TypeSystemInferenceExtensionContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemInferenceExtensionContext.d.ts'
export class SignatureParts extends AbstractSignatureParts<AnnotationDescriptor> {
    constructor(arg0: Annotated, arg1: boolean, arg2: LazyJavaResolverContext, arg3: AnnotationQualifierApplicabilityType, arg4: boolean)
    constructor(arg0: Annotated, arg1: boolean, arg2: LazyJavaResolverContext, arg3: AnnotationQualifierApplicabilityType, arg4: boolean, arg5: number, arg6: DefaultConstructorMarker)
    readonly containerApplicabilityType: AnnotationQualifierApplicabilityType;
    // private containerContext: LazyJavaResolverContext;
    // private isCovariant: boolean;
    readonly skipRawTypeArguments: boolean;
    // private typeContainer: Annotated;
    forceWarning(arg0: AnnotationDescriptor, arg1: KotlinTypeMarker): boolean;
    getAnnotationTypeQualifierResolver(): AnnotationTypeQualifierResolver;
    getAnnotations(arg0: KotlinTypeMarker): AnnotationDescriptor[];
    getContainerAnnotations(): AnnotationDescriptor[];
    getContainerApplicabilityType(): AnnotationQualifierApplicabilityType;
    getContainerDefaultTypeQualifiers(): JavaTypeQualifiersByElementType;
    getContainerIsVarargParameter(): boolean;
    getDefaultNullability(arg0: WithMigrationStatus<NullabilityQualifier>, arg1: JavaDefaultQualifiers): WithMigrationStatus<NullabilityQualifier>;
    getEnableImprovementsInStrictMode(): boolean;
    getEnhancedForWarnings(arg0: KotlinTypeMarker): KotlinType;
    getFqNameUnsafe(arg0: KotlinTypeMarker): FqNameUnsafe;
    getSkipRawTypeArguments(): boolean;
    getTypeSystem(): TypeSystemInferenceExtensionContext;
    isArrayOrPrimitiveArray(arg0: KotlinTypeMarker): boolean;
    isCovariant(): boolean;
    isEqual(arg0: KotlinTypeMarker, arg1: KotlinTypeMarker): boolean;
    isFromJava(arg0: TypeParameterMarker): boolean;
    isK2(): boolean;
    isNotNullTypeParameterCompat(arg0: KotlinTypeMarker): boolean;
}