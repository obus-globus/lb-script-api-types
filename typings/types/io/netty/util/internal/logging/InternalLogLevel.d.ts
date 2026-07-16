import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class InternalLogLevel extends Enum<InternalLogLevel> {
    static DEBUG: InternalLogLevel;
    static ERROR: InternalLogLevel;
    static INFO: InternalLogLevel;
    static TRACE: InternalLogLevel;
    static WARN: InternalLogLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InternalLogLevel;
    static values(): InternalLogLevel[];
    private constructor()
    name(): "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";
}