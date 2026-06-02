import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NullabilityQualifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/NullabilityQualifier.d.ts'
export class NullabilityQualifierWithMigrationStatus extends Object {
    constructor(arg0: NullabilityQualifier, arg1: boolean)
    // private isForWarningOnly: boolean;
    readonly qualifier: NullabilityQualifier;
    copy(arg0: NullabilityQualifier, arg1: boolean): NullabilityQualifierWithMigrationStatus;
    equals(arg0: Object | null): boolean;
    getQualifier(): NullabilityQualifier;
    hashCode(): number;
    isForWarningOnly(): boolean;
    toString(): string;
}