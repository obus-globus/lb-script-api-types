import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleMatcher$Result extends Object {
    private constructor(arg0: ULocale, arg1: ULocale, arg2: Locale, arg3: Locale, arg4: number, arg5: number)
    readonly desiredIndex: number;
    readonly desiredLocale: Locale;
    readonly desiredULocale: ULocale;
    readonly supportedIndex: number;
    readonly supportedLocale: Locale;
    readonly supportedULocale: ULocale;
    getDesiredIndex(): number;
    getDesiredLocale(): Locale;
    getDesiredULocale(): ULocale;
    getSupportedIndex(): number;
    getSupportedLocale(): Locale;
    getSupportedULocale(): ULocale;
    makeResolvedLocale(): Locale;
    makeResolvedULocale(): ULocale;
}