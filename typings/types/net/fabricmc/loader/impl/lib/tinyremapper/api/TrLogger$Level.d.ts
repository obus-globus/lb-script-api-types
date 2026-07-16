import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TrLogger$Level extends Enum<TrLogger$Level> {
    static DEBUG: TrLogger$Level;
    static ERROR: TrLogger$Level;
    static INFO: TrLogger$Level;
    static WARN: TrLogger$Level;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TrLogger$Level;
    static values(): TrLogger$Level[];
    private constructor()
    name(): "DEBUG" | "INFO" | "WARN" | "ERROR";
}