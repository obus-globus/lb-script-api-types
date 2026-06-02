import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleMatcher$Result extends Object {
    private constructor(udesired: ULocale, usupported: ULocale, desired: Locale, supported: Locale, desIndex: number, suppIndex: number)
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