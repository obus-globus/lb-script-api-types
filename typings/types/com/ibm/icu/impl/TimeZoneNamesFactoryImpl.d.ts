import type { TimeZoneNames } from '../../../../com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$Factory } from '../../../../com/ibm/icu/text/TimeZoneNames$Factory.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneNamesFactoryImpl extends TimeZoneNames$Factory {
    constructor()
    getTimeZoneNames(arg0: ULocale): TimeZoneNames;
}