import type { Class } from '../../../../../java/lang/Class.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StandardLevel;
    static values(): StandardLevel[];
    private constructor(val: number)
    // private intLevel: number;
    intLevel(): number;
    name(): "OFF" | "FATAL" | "ERROR" | "WARN" | "INFO" | "DEBUG" | "TRACE" | "ALL";
}