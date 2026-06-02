import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$ShowCalendar extends Enum<TemporalUtil$ShowCalendar> {
    static ALWAYS: TemporalUtil$ShowCalendar;
    static AUTO: TemporalUtil$ShowCalendar;
    static CRITICAL: TemporalUtil$ShowCalendar;
    static NEVER: TemporalUtil$ShowCalendar;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TemporalUtil$ShowCalendar;
    static values(): (Object | null)[];
    private constructor()
    name(): "AUTO" | "ALWAYS" | "NEVER" | "CRITICAL";
}