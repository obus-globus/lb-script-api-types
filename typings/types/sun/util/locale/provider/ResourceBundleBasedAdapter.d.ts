import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LocaleData } from '../../../../sun/util/resources/LocaleData.d.ts'
export interface ResourceBundleBasedAdapter extends Object{
    getCandidateLocales(arg0: string, arg1: Locale): Locale[];
    getLocaleData(): LocaleData;
}