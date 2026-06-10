import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationQualifierApplicabilityType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationQualifierApplicabilityType.d.ts'
import type { NullabilityQualifierWithMigrationStatus } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/NullabilityQualifierWithMigrationStatus.d.ts'
export class JavaDefaultQualifiers extends Object {
    constructor(arg0: NullabilityQualifierWithMigrationStatus, arg1: AnnotationQualifierApplicabilityType[], arg2: boolean, arg3: boolean, arg4: boolean)
    readonly definitelyNotNull: boolean;
    readonly nullabilityQualifier: NullabilityQualifierWithMigrationStatus;
    // private preferQualifierOverBound: boolean;
    readonly preferQualifierOverSupertype: boolean;
    readonly qualifierApplicabilityTypes: AnnotationQualifierApplicabilityType[];
    copy(arg0: NullabilityQualifierWithMigrationStatus, arg1: AnnotationQualifierApplicabilityType[], arg2: boolean, arg3: boolean, arg4: boolean): JavaDefaultQualifiers;
    equals(arg0: Object | null): boolean;
    getDefinitelyNotNull(): boolean;
    getNullabilityQualifier(): NullabilityQualifierWithMigrationStatus;
    getPreferQualifierOverSupertype(): boolean;
    getQualifierApplicabilityTypes(): AnnotationQualifierApplicabilityType[];
    hashCode(): number;
    toString(): string;
}