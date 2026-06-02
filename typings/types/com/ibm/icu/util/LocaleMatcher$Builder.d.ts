import type { LocaleMatcher } from '../../../../com/ibm/icu/util/LocaleMatcher.d.ts'
import type { LocaleMatcher$Demotion } from '../../../../com/ibm/icu/util/LocaleMatcher$Demotion.d.ts'
import type { LocaleMatcher$Direction } from '../../../../com/ibm/icu/util/LocaleMatcher$Direction.d.ts'
import type { LocaleMatcher$FavorSubtag } from '../../../../com/ibm/icu/util/LocaleMatcher$FavorSubtag.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    addSupportedLocale(arg0: Locale): LocaleMatcher$Builder;
    addSupportedULocale(arg0: ULocale): LocaleMatcher$Builder;
    build(): LocaleMatcher;
    internalSetThresholdDistance(arg0: number): LocaleMatcher$Builder;
    setDefaultLocale(arg0: Locale): LocaleMatcher$Builder;
    setDefaultULocale(arg0: ULocale): LocaleMatcher$Builder;
    setDemotionPerDesiredLocale(arg0: LocaleMatcher$Demotion): LocaleMatcher$Builder;
    setDirection(arg0: LocaleMatcher$Direction): LocaleMatcher$Builder;
    setFavorSubtag(arg0: LocaleMatcher$FavorSubtag): LocaleMatcher$Builder;
    setMaxDistance(arg0: ULocale, arg1: ULocale): LocaleMatcher$Builder;
    setMaxDistance(arg0: Locale, arg1: Locale): LocaleMatcher$Builder;
    setNoDefaultLocale(): LocaleMatcher$Builder;
    setSupportedLocales(arg0: string): LocaleMatcher$Builder;
    setSupportedLocales(arg0: E[]): LocaleMatcher$Builder;
    setSupportedULocales(arg0: E[]): LocaleMatcher$Builder;
    toString(): string;
}