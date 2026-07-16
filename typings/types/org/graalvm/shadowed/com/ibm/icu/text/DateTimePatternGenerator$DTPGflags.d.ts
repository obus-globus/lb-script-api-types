import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DateTimePatternGenerator$DTPGflags extends Enum<DateTimePatternGenerator$DTPGflags> {
    static FIX_FRACTIONAL_SECONDS: DateTimePatternGenerator$DTPGflags;
    static SKELETON_USES_CAP_J: DateTimePatternGenerator$DTPGflags;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DateTimePatternGenerator$DTPGflags;
    static values(): DateTimePatternGenerator$DTPGflags[];
    private constructor()
    name(): "FIX_FRACTIONAL_SECONDS" | "SKELETON_USES_CAP_J";
}