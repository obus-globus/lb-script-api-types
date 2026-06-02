import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class IslamicCalendar$CalculationType extends Enum<IslamicCalendar$CalculationType> {
    static ISLAMIC: IslamicCalendar$CalculationType;
    static ISLAMIC_CIVIL: IslamicCalendar$CalculationType;
    static ISLAMIC_TBLA: IslamicCalendar$CalculationType;
    static ISLAMIC_UMALQURA: IslamicCalendar$CalculationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): IslamicCalendar$CalculationType;
    static values(): (Object | null)[];
    private constructor(bcpType: string)
    // private bcpType: string;
    bcpType(): string;
    name(): "ISLAMIC" | "ISLAMIC_CIVIL" | "ISLAMIC_UMALQURA" | "ISLAMIC_TBLA";
}