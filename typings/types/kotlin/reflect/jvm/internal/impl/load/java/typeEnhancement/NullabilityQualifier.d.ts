import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class NullabilityQualifier extends Enum<NullabilityQualifier> {
    static FORCE_FLEXIBILITY: NullabilityQualifier;
    static NOT_NULL: NullabilityQualifier;
    static NULLABLE: NullabilityQualifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NullabilityQualifier;
    static values(): NullabilityQualifier[];
    private constructor()
    name(): "FORCE_FLEXIBILITY" | "NULLABLE" | "NOT_NULL";
}