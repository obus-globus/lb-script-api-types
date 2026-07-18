import type { GMTDate } from '../../../../io/ktor/util/date/GMTDate.d.ts'
import type { GMTDateParser$Companion } from '../../../../io/ktor/util/date/GMTDateParser$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GMTDateParser extends Object {
    static ANY: string;
    static Companion: GMTDateParser$Companion;
    static DAY_OF_MONTH: string;
    static HOURS: string;
    static MINUTES: string;
    static MONTH: string;
    static SECONDS: string;
    static YEAR: string;
    static ZONE: string;
    constructor(pattern: string)
    // private pattern: string;
    parse(dateString: string): GMTDate;
}