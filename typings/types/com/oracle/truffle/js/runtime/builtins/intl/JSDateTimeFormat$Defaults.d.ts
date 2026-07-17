import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class JSDateTimeFormat$Defaults extends Enum<JSDateTimeFormat$Defaults> {
    static ALL: JSDateTimeFormat$Defaults;
    static DATE: JSDateTimeFormat$Defaults;
    static MONTH_DAY: JSDateTimeFormat$Defaults;
    static TIME: JSDateTimeFormat$Defaults;
    static YEAR_MONTH: JSDateTimeFormat$Defaults;
    static ZONED_DATE_TIME: JSDateTimeFormat$Defaults;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSDateTimeFormat$Defaults;
    static values(): JSDateTimeFormat$Defaults[];
    private constructor()
    name(): "DATE" | "TIME" | "YEAR_MONTH" | "MONTH_DAY" | "ZONED_DATE_TIME" | "ALL";
}