import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DisplayOptions$SubstituteHandling extends Enum<DisplayOptions$SubstituteHandling> {
    static NO_SUBSTITUTE: DisplayOptions$SubstituteHandling;
    static SUBSTITUTE: DisplayOptions$SubstituteHandling;
    static UNDEFINED: DisplayOptions$SubstituteHandling;
    static VALUES: DisplayOptions$SubstituteHandling[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DisplayOptions$SubstituteHandling;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNDEFINED" | "SUBSTITUTE" | "NO_SUBSTITUTE";
}