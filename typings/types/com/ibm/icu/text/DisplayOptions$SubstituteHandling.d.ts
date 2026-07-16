import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DisplayOptions$SubstituteHandling extends Enum<DisplayOptions$SubstituteHandling> {
    static NO_SUBSTITUTE: DisplayOptions$SubstituteHandling;
    static SUBSTITUTE: DisplayOptions$SubstituteHandling;
    static UNDEFINED: DisplayOptions$SubstituteHandling;
    static VALUES: DisplayOptions$SubstituteHandling[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DisplayOptions$SubstituteHandling;
    static values(): DisplayOptions$SubstituteHandling[];
    private constructor()
    name(): "UNDEFINED" | "SUBSTITUTE" | "NO_SUBSTITUTE";
}