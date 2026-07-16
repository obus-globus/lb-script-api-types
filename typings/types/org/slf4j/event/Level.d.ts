import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Level extends Enum<Level> {
    static DEBUG: Level;
    static ERROR: Level;
    static INFO: Level;
    static TRACE: Level;
    static WARN: Level;
    static intToLevel(paramarg0: number): Level;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Level;
    static values(): Level[];
    private constructor(arg2: number, arg3: string)
    // private levelInt: number;
    // private levelStr: string;
    toInt(): number;
    toString(): string;
    name(): "ERROR" | "WARN" | "INFO" | "DEBUG" | "TRACE";
}