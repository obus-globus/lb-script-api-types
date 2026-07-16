import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class DayOfWeek extends Enum<DayOfWeek> {
    static FRIDAY: DayOfWeek;
    static MONDAY: DayOfWeek;
    static SATURDAY: DayOfWeek;
    static SUNDAY: DayOfWeek;
    static THURSDAY: DayOfWeek;
    static TUESDAY: DayOfWeek;
    static WEDNESDAY: DayOfWeek;
    static getEntries(): DayOfWeek[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): DayOfWeek;
    static values(): DayOfWeek[];
    private constructor()
    name(): "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
}