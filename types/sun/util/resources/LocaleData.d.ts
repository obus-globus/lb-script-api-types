import type { Locale } from '../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocaleProviderAdapter$Type } from '../../../sun/util/locale/provider/LocaleProviderAdapter$Type.d.ts'
import type { OpenListResourceBundle } from '../../../sun/util/resources/OpenListResourceBundle.d.ts'
import type { ParallelListResourceBundle } from '../../../sun/util/resources/ParallelListResourceBundle.d.ts'
import type { TimeZoneNamesBundle } from '../../../sun/util/resources/TimeZoneNamesBundle.d.ts'
export class LocaleData extends Object {
    static getBundle(paramarg0: string, paramarg1: Locale): ResourceBundle;
    constructor(arg0: LocaleProviderAdapter$Type)
    // private type: LocaleProviderAdapter$Type;
    getBreakIteratorInfo(arg0: Locale): ResourceBundle;
    getBreakIteratorResources(arg0: Locale): ResourceBundle;
    getCalendarData(arg0: Locale): ResourceBundle;
    getCollationData(arg0: Locale): ResourceBundle;
    getCurrencyNames(arg0: Locale): OpenListResourceBundle;
    getDateFormatData(arg0: Locale): ResourceBundle;
    getLocaleNames(arg0: Locale): OpenListResourceBundle;
    getNumberFormatData(arg0: Locale): ResourceBundle;
    getTimeZoneNames(arg0: Locale): TimeZoneNamesBundle;
    // private setSupplementary(arg0: string, arg1: ParallelListResourceBundle): boolean;
    setSupplementary(arg0: ParallelListResourceBundle): void;
}