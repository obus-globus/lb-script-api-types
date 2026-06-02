import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class NullabilityQualifier extends Enum<NullabilityQualifier> {
    static FORCE_FLEXIBILITY: NullabilityQualifier;
    static NOT_NULL: NullabilityQualifier;
    static NULLABLE: NullabilityQualifier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NullabilityQualifier;
    static values(): (Object | null)[];
    private constructor()
    name(): "FORCE_FLEXIBILITY" | "NULLABLE" | "NOT_NULL";
}