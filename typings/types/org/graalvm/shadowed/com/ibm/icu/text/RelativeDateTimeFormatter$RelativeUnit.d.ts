import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
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
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RelativeDateTimeFormatter$RelativeUnit;
    static values(): (Object | null)[];
    private constructor()
    name(): "SECONDS" | "MINUTES" | "HOURS" | "DAYS" | "WEEKS" | "MONTHS" | "YEARS" | "QUARTERS" | "SUNDAYS" | "MONDAYS" | "TUESDAYS" | "WEDNESDAYS" | "THURSDAYS" | "FRIDAYS" | "SATURDAYS";
}