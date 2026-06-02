import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class StandardLevel extends Enum<StandardLevel> {
    static ALL: StandardLevel;
    static DEBUG: StandardLevel;
    static ERROR: StandardLevel;
    static FATAL: StandardLevel;
    static INFO: StandardLevel;
    static OFF: StandardLevel;
    static TRACE: StandardLevel;
    static WARN: StandardLevel;
    static getStandardLevel(paramintLevel: number): StandardLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StandardLevel;
    static values(): (Object | null)[];
    private constructor(val: number)
    // private intLevel: number;
    intLevel(): number;
    name(): "OFF" | "FATAL" | "ERROR" | "WARN" | "INFO" | "DEBUG" | "TRACE" | "ALL";
}