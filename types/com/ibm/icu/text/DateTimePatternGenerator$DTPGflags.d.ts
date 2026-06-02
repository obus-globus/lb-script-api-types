import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DateTimePatternGenerator$DTPGflags extends Enum<DateTimePatternGenerator$DTPGflags> {
    static FIX_FRACTIONAL_SECONDS: DateTimePatternGenerator$DTPGflags;
    static SKELETON_USES_CAP_J: DateTimePatternGenerator$DTPGflags;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DateTimePatternGenerator$DTPGflags;
    static values(): (Object | null)[];
    private constructor()
    name(): "FIX_FRACTIONAL_SECONDS" | "SKELETON_USES_CAP_J";
}