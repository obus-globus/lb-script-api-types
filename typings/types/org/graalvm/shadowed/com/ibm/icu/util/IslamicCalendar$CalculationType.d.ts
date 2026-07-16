import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class IslamicCalendar$CalculationType extends Enum<IslamicCalendar$CalculationType> {
    static ISLAMIC: IslamicCalendar$CalculationType;
    static ISLAMIC_CIVIL: IslamicCalendar$CalculationType;
    static ISLAMIC_TBLA: IslamicCalendar$CalculationType;
    static ISLAMIC_UMALQURA: IslamicCalendar$CalculationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): IslamicCalendar$CalculationType;
    static values(): IslamicCalendar$CalculationType[];
    private constructor(bcpType: string)
    // private bcpType: string;
    bcpType(): string;
    name(): "ISLAMIC" | "ISLAMIC_CIVIL" | "ISLAMIC_UMALQURA" | "ISLAMIC_TBLA";
}