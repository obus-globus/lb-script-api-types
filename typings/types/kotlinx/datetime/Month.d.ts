import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Month extends Enum<Month> {
    static APRIL: Month;
    static AUGUST: Month;
    static DECEMBER: Month;
    static FEBRUARY: Month;
    static JANUARY: Month;
    static JULY: Month;
    static JUNE: Month;
    static MARCH: Month;
    static MAY: Month;
    static NOVEMBER: Month;
    static OCTOBER: Month;
    static SEPTEMBER: Month;
    static getEntries(): Month[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Month;
    static values(): Month[];
    private constructor()
    name(): "JANUARY" | "FEBRUARY" | "MARCH" | "APRIL" | "MAY" | "JUNE" | "JULY" | "AUGUST" | "SEPTEMBER" | "OCTOBER" | "NOVEMBER" | "DECEMBER";
}