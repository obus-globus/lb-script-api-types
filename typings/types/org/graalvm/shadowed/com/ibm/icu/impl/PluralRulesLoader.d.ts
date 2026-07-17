import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$Factory.d.ts'
import type { PluralRules$PluralType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class PluralRulesLoader extends PluralRules$Factory {
    static loader: PluralRulesLoader;
    static getDefaultFactory(): PluralRulesLoader;
    private constructor()
    // private localeIdToCardinalRulesId: JavaMap<string, string>;
    // private localeIdToOrdinalRulesId: JavaMap<string, string>;
    // private pluralRulesCache: JavaMap<string, PluralRules>;
    // private rulesIdToEquivalentULocale: JavaMap<string, ULocale>;
    // private checkBuildRulesIdMaps(): void;
    forLocale(locale: ULocale): PluralRules;
    forLocale(locale: ULocale, type: PluralRules$PluralType): PluralRules;
    getAvailableULocales(): ULocale[];
    getFunctionalEquivalent(locale: ULocale, isAvailable: boolean[]): ULocale;
    // private getLocaleIdToRulesIdMap(type: PluralRules$PluralType): JavaMap<string, string>;
    getOrCreateRulesForLocale(locale: ULocale, type: PluralRules$PluralType): PluralRules;
    getPluralBundle(): UResourceBundle;
    getRulesIdForLocale(locale: ULocale, type: PluralRules$PluralType): string;
    // private getRulesIdToEquivalentULocaleMap(): JavaMap<string, ULocale>;
    hasOverride(locale: ULocale): boolean;
}