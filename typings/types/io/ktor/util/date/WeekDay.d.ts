import type { WeekDay$Companion } from '../../../../io/ktor/util/date/WeekDay$Companion.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WeekDay extends Enum<WeekDay> {
    static Companion: WeekDay$Companion;
    static FRIDAY: WeekDay;
    static MONDAY: WeekDay;
    static SATURDAY: WeekDay;
    static SUNDAY: WeekDay;
    static THURSDAY: WeekDay;
    static TUESDAY: WeekDay;
    static WEDNESDAY: WeekDay;
    static getEntries(): WeekDay[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): WeekDay;
    static values(): WeekDay[];
    private constructor(value: string)
    readonly value: string;
    name(): "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
}