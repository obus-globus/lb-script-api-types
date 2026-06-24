import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { AnnotationQualifierApplicabilityType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationQualifierApplicabilityType.d.ts'
import type { JavaDefaultQualifiers } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaDefaultQualifiers.d.ts'
import type { JavaTypeEnhancementState } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeEnhancementState.d.ts'
import type { JavaTypeQualifiersByElementType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeQualifiersByElementType.d.ts'
import type { ReportLevel } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/ReportLevel.d.ts'
import type { MutabilityQualifier } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/MutabilityQualifier.d.ts'
import type { NullabilityQualifier } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/NullabilityQualifier.d.ts'
import type { WithMigrationStatus } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/WithMigrationStatus.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export abstract class AbstractAnnotationTypeQualifierResolver<TAnnotation extends unknown> extends Object {
    constructor(arg0: JavaTypeEnhancementState)
    // private javaTypeEnhancementState: JavaTypeEnhancementState;
    // private resolvedNicknames: Map<Object, TAnnotation>;
    // private allIfTypeUse(arg0: AnnotationQualifierApplicabilityType[]): AnnotationQualifierApplicabilityType[];
    enumArguments(arg0: TAnnotation, arg1: boolean): string[];
    extractAndMergeDefaultQualifiers(arg0: JavaTypeQualifiersByElementType, arg1: TAnnotation[], arg2: boolean): JavaTypeQualifiersByElementType;
    // private extractDefaultQualifiers(arg0: TAnnotation, arg1: boolean): JavaDefaultQualifiers;
    // private extractMutability(arg0: TAnnotation): WithMigrationStatus<MutabilityQualifier>;
    extractMutability(arg0: TAnnotation[]): WithMigrationStatus<MutabilityQualifier>;
    // private extractNullability(arg0: TAnnotation, arg1: (param0: TAnnotation) => boolean): WithMigrationStatus<NullabilityQualifier>;
    extractNullability(arg0: TAnnotation[], arg1: (param0: TAnnotation) => boolean): WithMigrationStatus<NullabilityQualifier>;
    // private extractQualifier<TQualifier extends unknown>(arg0: TAnnotation[], arg1: (param0: TAnnotation) => WithMigrationStatus<TQualifier>): WithMigrationStatus<TQualifier>;
    // private findAnnotation(arg0: TAnnotation, arg1: FqName): TAnnotation;
    getFqName(arg0: TAnnotation): FqName;
    getKey(arg0: TAnnotation): Object;
    getMetaAnnotations(arg0: TAnnotation): TAnnotation[];
    // private hasAnnotation(arg0: TAnnotation, arg1: FqName): boolean;
    isK2(): boolean;
    isTypeUseAnnotation(arg0: TAnnotation): boolean;
    // private knownNullability(arg0: TAnnotation, arg1: boolean): WithMigrationStatus<NullabilityQualifier>;
    // private resolveDefaultAnnotationState(arg0: TAnnotation): ReportLevel;
    // private resolveJsr305AnnotationState(arg0: TAnnotation): ReportLevel;
    // private resolveJsr305CustomState(arg0: TAnnotation): ReportLevel;
    // private resolveQualifierBuiltInDefaultAnnotation(arg0: TAnnotation, arg1: boolean): JavaDefaultQualifiers;
    resolveTypeQualifierAnnotation(arg0: TAnnotation): TAnnotation;
    // private resolveTypeQualifierDefaultAnnotation(arg0: TAnnotation): Pair<TAnnotation, AnnotationQualifierApplicabilityType[]>;
}