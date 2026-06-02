import type { TimeZoneNames } from '../../../../com/ibm/icu/text/TimeZoneNames.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TimeZoneNames$Factory extends Object {
    constructor()
    getTimeZoneNames(arg0: ULocale): TimeZoneNames;
}