import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Advapi32Util$EventLogType extends Enum<Advapi32Util$EventLogType> {
    static AuditFailure: Advapi32Util$EventLogType;
    static AuditSuccess: Advapi32Util$EventLogType;
    static Error: Advapi32Util$EventLogType;
    static Informational: Advapi32Util$EventLogType;
    static Warning: Advapi32Util$EventLogType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Advapi32Util$EventLogType;
    static values(): Advapi32Util$EventLogType[];
    private constructor()
    name(): "Error" | "Warning" | "Informational" | "AuditSuccess" | "AuditFailure";
}