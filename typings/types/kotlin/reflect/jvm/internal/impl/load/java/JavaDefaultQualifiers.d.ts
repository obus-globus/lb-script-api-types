import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { AnnotationQualifierApplicabilityType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationQualifierApplicabilityType.d.ts'
import type { NullabilityQualifier } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/NullabilityQualifier.d.ts'
import type { WithMigrationStatus } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/WithMigrationStatus.d.ts'
export class JavaDefaultQualifiers extends Object {
    constructor(arg0: WithMigrationStatus<Object>, arg1: (Object | null)[], arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: DefaultConstructorMarker)
    constructor(arg0: WithMigrationStatus<NullabilityQualifier>, arg1: AnnotationQualifierApplicabilityType[], arg2: boolean, arg3: boolean, arg4: boolean)
    readonly definitelyNotNull: boolean;
    readonly nullabilityQualifier: WithMigrationStatus<NullabilityQualifier>;
    // private preferQualifierOverBound: boolean;
    readonly preferQualifierOverSupertype: boolean;
    readonly qualifierApplicabilityTypes: AnnotationQualifierApplicabilityType[];
    copy(arg0: WithMigrationStatus<NullabilityQualifier>, arg1: AnnotationQualifierApplicabilityType[], arg2: boolean, arg3: boolean, arg4: boolean): JavaDefaultQualifiers;
    equals(arg0: Object | null): boolean;
    getDefinitelyNotNull(): boolean;
    getNullabilityQualifier(): WithMigrationStatus<NullabilityQualifier>;
    getPreferQualifierOverSupertype(): boolean;
    getQualifierApplicabilityTypes(): AnnotationQualifierApplicabilityType[];
    hashCode(): number;
    toString(): string;
}