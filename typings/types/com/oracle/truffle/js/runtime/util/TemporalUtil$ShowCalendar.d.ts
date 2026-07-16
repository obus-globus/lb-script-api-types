import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$ShowCalendar extends Enum<TemporalUtil$ShowCalendar> {
    static ALWAYS: TemporalUtil$ShowCalendar;
    static AUTO: TemporalUtil$ShowCalendar;
    static CRITICAL: TemporalUtil$ShowCalendar;
    static NEVER: TemporalUtil$ShowCalendar;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalUtil$ShowCalendar;
    static values(): TemporalUtil$ShowCalendar[];
    private constructor()
    name(): "AUTO" | "ALWAYS" | "NEVER" | "CRITICAL";
}