import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Logging$Severity extends Enum<Logging$Severity> {
    static ERROR: Logging$Severity;
    static INFO: Logging$Severity;
    static NONE: Logging$Severity;
    static VERBOSE: Logging$Severity;
    static WARNING: Logging$Severity;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Logging$Severity;
    static values(): (Object | null)[];
    private constructor()
    name(): "VERBOSE" | "INFO" | "WARNING" | "ERROR" | "NONE";
}