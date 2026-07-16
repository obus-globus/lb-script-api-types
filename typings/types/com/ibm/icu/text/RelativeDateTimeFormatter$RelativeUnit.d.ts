import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RelativeDateTimeFormatter$RelativeUnit extends Enum<RelativeDateTimeFormatter$RelativeUnit> {
    static DAYS: RelativeDateTimeFormatter$RelativeUnit;
    static FRIDAYS: RelativeDateTimeFormatter$RelativeUnit;
    static HOURS: RelativeDateTimeFormatter$RelativeUnit;
    static MINUTES: RelativeDateTimeFormatter$RelativeUnit;
    static MONDAYS: RelativeDateTimeFormatter$RelativeUnit;
    static MONTHS: RelativeDateTimeFormatter$RelativeUnit;
    static QUARTERS: RelativeDateTimeFormatter$RelativeUnit;
    static SATURDAYS: RelativeDateTimeFormatter$RelativeUnit;
    static SECONDS: RelativeDateTimeFormatter$RelativeUnit;
    static SUNDAYS: RelativeDateTimeFormatter$RelativeUnit;
    static THURSDAYS: RelativeDateTimeFormatter$RelativeUnit;
    static TUESDAYS: RelativeDateTimeFormatter$RelativeUnit;
    static WEDNESDAYS: RelativeDateTimeFormatter$RelativeUnit;
    static WEEKS: RelativeDateTimeFormatter$RelativeUnit;
    static YEARS: RelativeDateTimeFormatter$RelativeUnit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RelativeDateTimeFormatter$RelativeUnit;
    static values(): RelativeDateTimeFormatter$RelativeUnit[];
    private constructor()
    name(): "SECONDS" | "MINUTES" | "HOURS" | "DAYS" | "WEEKS" | "MONTHS" | "YEARS" | "QUARTERS" | "SUNDAYS" | "MONDAYS" | "TUESDAYS" | "WEDNESDAYS" | "THURSDAYS" | "FRIDAYS" | "SATURDAYS";
}