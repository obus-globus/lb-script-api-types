import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class System$Logger$Level extends Enum<System$Logger$Level> {
    static ALL: System$Logger$Level;
    static DEBUG: System$Logger$Level;
    static ERROR: System$Logger$Level;
    static INFO: System$Logger$Level;
    static OFF: System$Logger$Level;
    static TRACE: System$Logger$Level;
    static WARNING: System$Logger$Level;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): System$Logger$Level;
    static values(): System$Logger$Level[];
    private constructor(arg2: number)
    readonly severity: number;
    getName(): string;
    getSeverity(): number;
    name(): "ALL" | "TRACE" | "DEBUG" | "INFO" | "WARNING" | "ERROR" | "OFF";
}