import type { TimeZoneNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$Factory.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneNamesFactoryImpl extends TimeZoneNames$Factory {
    constructor()
    getTimeZoneNames(locale: ULocale): TimeZoneNames;
}