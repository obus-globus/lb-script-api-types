import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LocaleMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher.d.ts'
import type { LocaleMatcher$Demotion } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$Demotion.d.ts'
import type { LocaleMatcher$Direction } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$Direction.d.ts'
import type { LocaleMatcher$FavorSubtag } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$FavorSubtag.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleMatcher$Builder extends Object {
    private constructor()
    // private defaultLocale: ULocale;
    // private demotion: LocaleMatcher$Demotion;
    // private direction: LocaleMatcher$Direction;
    // private favor: LocaleMatcher$FavorSubtag;
    // private maxDistanceDesired: ULocale;
    // private maxDistanceSupported: ULocale;
    // private supportedLocales: ULocale[];
    // private thresholdDistance: number;
    // private withDefault: boolean;
    addSupportedLocale(locale: Locale): LocaleMatcher$Builder;
    addSupportedULocale(locale: ULocale): LocaleMatcher$Builder;
    build(): LocaleMatcher;
    internalSetThresholdDistance(thresholdDistance: number): LocaleMatcher$Builder;
    setDefaultLocale(defaultLocale: Locale): LocaleMatcher$Builder;
    setDefaultULocale(defaultLocale: ULocale): LocaleMatcher$Builder;
    setDemotionPerDesiredLocale(demotion: LocaleMatcher$Demotion): LocaleMatcher$Builder;
    setDirection(direction: LocaleMatcher$Direction): LocaleMatcher$Builder;
    setFavorSubtag(subtag: LocaleMatcher$FavorSubtag): LocaleMatcher$Builder;
    setMaxDistance(desired: Locale, supported: Locale): LocaleMatcher$Builder;
    setMaxDistance(desired: ULocale, supported: ULocale): LocaleMatcher$Builder;
    setNoDefaultLocale(): LocaleMatcher$Builder;
    setSupportedLocales(locales: string): LocaleMatcher$Builder;
    setSupportedLocales(locales: Locale[]): LocaleMatcher$Builder;
    setSupportedULocales(locales: ULocale[]): LocaleMatcher$Builder;
    toString(): string;
}