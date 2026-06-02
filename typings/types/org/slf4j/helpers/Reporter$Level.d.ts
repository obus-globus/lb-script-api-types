import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Reporter$Level extends Enum<Reporter$Level> {
    static DEBUG: Reporter$Level;
    static ERROR: Reporter$Level;
    static INFO: Reporter$Level;
    static WARN: Reporter$Level;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Reporter$Level;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private levelInt: number;
    // private getLevelInt(): number;
    name(): "DEBUG" | "INFO" | "WARN" | "ERROR";
}