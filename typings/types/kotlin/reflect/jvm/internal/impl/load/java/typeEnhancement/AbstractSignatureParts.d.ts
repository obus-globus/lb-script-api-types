import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AbstractAnnotationTypeQualifierResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AbstractAnnotationTypeQualifierResolver.d.ts'
import type { AnnotationQualifierApplicabilityType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationQualifierApplicabilityType.d.ts'
import type { JavaDefaultQualifiers } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaDefaultQualifiers.d.ts'
import type { JavaTypeQualifiersByElementType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeQualifiersByElementType.d.ts'
import type { AbstractSignatureParts$TypeAndDefaultQualifiers } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/AbstractSignatureParts$TypeAndDefaultQualifiers.d.ts'
import type { JavaTypeQualifiers } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeQualifiers.d.ts'
import type { NullabilityQualifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/NullabilityQualifier.d.ts'
import type { NullabilityQualifierWithMigrationStatus } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/NullabilityQualifierWithMigrationStatus.d.ts'
import type { TypeEnhancementInfo } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/TypeEnhancementInfo.d.ts'
import type { FqNameUnsafe } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { TypeParameterMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
import type { TypeSystemContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemContext.d.ts'
export abstract class AbstractSignatureParts<TAnnotation extends Object | number | string | boolean> extends Object {
    constructor()
    computeIndexedQualifiers(arg0: KotlinTypeMarker, arg1: KotlinTypeMarker[], arg2: TypeEnhancementInfo, arg3: boolean): (param0: number) => JavaTypeQualifiers;
    // private extractAndMergeDefaultQualifiers(arg0: KotlinTypeMarker, arg1: JavaTypeQualifiersByElementType): JavaTypeQualifiersByElementType;
    // private extractDefaultQualifier(arg0: AbstractSignatureParts$TypeAndDefaultQualifiers): JavaDefaultQualifiers;
    // private extractQualifiers(arg0: KotlinTypeMarker): JavaTypeQualifiers;
    // private extractQualifiersFromAnnotations(arg0: AbstractSignatureParts$TypeAndDefaultQualifiers, arg1: JavaDefaultQualifiers): JavaTypeQualifiers;
    // private flattenTree<T extends Object | number | string | boolean>(arg0: T, arg1: (param0: T) => T[]): T[];
    // private flattenTree<T extends Object | number | string | boolean>(arg0: T, arg1: T[], arg2: (param0: T) => T[]): void;
    forceWarning(arg0: TAnnotation, arg1: KotlinTypeMarker): boolean;
    getAnnotationTypeQualifierResolver(): AbstractAnnotationTypeQualifierResolver<TAnnotation>;
    getAnnotations(arg0: KotlinTypeMarker): TAnnotation[];
    // private getBoundsNullability(arg0: TypeParameterMarker): NullabilityQualifierWithMigrationStatus;
    getContainerAnnotations(): TAnnotation[];
    getContainerApplicabilityType(): AnnotationQualifierApplicabilityType;
    getContainerDefaultTypeQualifiers(): JavaTypeQualifiersByElementType;
    getContainerIsVarargParameter(): boolean;
    getDefaultNullability(arg0: NullabilityQualifierWithMigrationStatus, arg1: JavaDefaultQualifiers): NullabilityQualifierWithMigrationStatus;
    getEnableImprovementsInStrictMode(): boolean;
    getEnhancedForWarnings(arg0: KotlinTypeMarker): KotlinTypeMarker;
    getForceOnlyHeadTypeConstructor(): boolean;
    getFqNameUnsafe(arg0: KotlinTypeMarker): FqNameUnsafe;
    // private getNullabilityQualifier(arg0: KotlinTypeMarker): NullabilityQualifier;
    getShouldPropagateBoundNullness(arg0: KotlinTypeMarker): boolean;
    getSkipRawTypeArguments(): boolean;
    getTypeSystem(): TypeSystemContext;
    isArrayOrPrimitiveArray(arg0: KotlinTypeMarker): boolean;
    isCovariant(): boolean;
    isEqual(arg0: KotlinTypeMarker, arg1: KotlinTypeMarker): boolean;
    isFromJava(arg0: TypeParameterMarker): boolean;
    isK2(): boolean;
    isNotNullTypeParameterCompat(arg0: KotlinTypeMarker): boolean;
    // private mostSpecific(arg0: NullabilityQualifierWithMigrationStatus, arg1: NullabilityQualifierWithMigrationStatus): NullabilityQualifierWithMigrationStatus;
    // private toIndexed(arg0: KotlinTypeMarker): AbstractSignatureParts$TypeAndDefaultQualifiers[];
}