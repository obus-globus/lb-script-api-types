import type { UFormat } from '../../../../com/ibm/icu/text/UFormat.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
export class TimeZoneFormat extends UFormat implements Freezable<TimeZoneFormat>, Serializable {
    static getInstance(paramarg0: ULocale): TimeZoneFormat;
    static getInstance(paramarg0: Locale): TimeZoneFormat;
    constructor(arg0: ULocale)
}