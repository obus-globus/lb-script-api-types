import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class At$Shift extends Enum<At$Shift> {
    static AFTER: At$Shift;
    static BEFORE: At$Shift;
    static BY: At$Shift;
    static NONE: At$Shift;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): At$Shift;
    static values(): At$Shift[];
    private constructor()
    name(): "NONE" | "BEFORE" | "AFTER" | "BY";
}