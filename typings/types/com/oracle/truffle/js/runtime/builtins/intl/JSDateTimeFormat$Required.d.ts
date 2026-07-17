import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class JSDateTimeFormat$Required extends Enum<JSDateTimeFormat$Required> {
    static ANY: JSDateTimeFormat$Required;
    static DATE: JSDateTimeFormat$Required;
    static MONTH_DAY: JSDateTimeFormat$Required;
    static TIME: JSDateTimeFormat$Required;
    static YEAR_MONTH: JSDateTimeFormat$Required;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSDateTimeFormat$Required;
    static values(): JSDateTimeFormat$Required[];
    private constructor()
    name(): "DATE" | "TIME" | "YEAR_MONTH" | "MONTH_DAY" | "ANY";
}