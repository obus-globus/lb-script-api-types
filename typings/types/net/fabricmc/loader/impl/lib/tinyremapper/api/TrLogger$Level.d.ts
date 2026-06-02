import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TrLogger$Level extends Enum<TrLogger$Level> {
    static DEBUG: TrLogger$Level;
    static ERROR: TrLogger$Level;
    static INFO: TrLogger$Level;
    static WARN: TrLogger$Level;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TrLogger$Level;
    static values(): (Object | null)[];
    private constructor()
    name(): "DEBUG" | "INFO" | "WARN" | "ERROR";
}