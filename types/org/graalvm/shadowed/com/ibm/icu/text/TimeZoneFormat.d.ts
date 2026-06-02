import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { UFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneFormat extends UFormat implements Serializable, Freezable<TimeZoneFormat> {
    static getInstance(paramlocale: Locale): TimeZoneFormat;
    static getInstance(paramlocale: ULocale): TimeZoneFormat;
    constructor(locale: ULocale)
}