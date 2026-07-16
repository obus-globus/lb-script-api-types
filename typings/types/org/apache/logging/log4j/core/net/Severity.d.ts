import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
export class Severity extends Enum<Severity> {
    static ALERT: Severity;
    static CRITICAL: Severity;
    static DEBUG: Severity;
    static EMERG: Severity;
    static ERROR: Severity;
    static INFO: Severity;
    static NOTICE: Severity;
    static WARNING: Severity;
    static getSeverity(paramlevel: Level): Severity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Severity;
    static values(): Severity[];
    private constructor(code: number)
    readonly code: number;
    getCode(): number;
    isEqual(name: string): boolean;
    name(): "EMERG" | "ALERT" | "CRITICAL" | "ERROR" | "WARNING" | "NOTICE" | "INFO" | "DEBUG";
}