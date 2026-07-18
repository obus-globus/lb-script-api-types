import type { GMTDate } from '../../../io/ktor/util/date/GMTDate.d.ts'
import type { Month } from '../../../io/ktor/util/date/Month.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CookieDateBuilder extends Object {
    constructor()
    dayOfMonth: number | null;
    hours: number | null;
    minutes: number | null;
    month: Month | null;
    seconds: number | null;
    year: number | null;
    build(): GMTDate;
}