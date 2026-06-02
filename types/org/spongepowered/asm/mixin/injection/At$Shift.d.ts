import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class At$Shift extends Enum<At$Shift> {
    static AFTER: At$Shift;
    static BEFORE: At$Shift;
    static BY: At$Shift;
    static NONE: At$Shift;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): At$Shift;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "BEFORE" | "AFTER" | "BY";
}