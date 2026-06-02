import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TimeZoneNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class TimeZoneNames$Factory extends Object {
    constructor()
    getTimeZoneNames(locale: ULocale): TimeZoneNames;
}