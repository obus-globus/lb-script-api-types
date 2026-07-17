import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$Factory } from '../../../../com/ibm/icu/text/PluralRules$Factory.d.ts'
import type { PluralRules$PluralType } from '../../../../com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundle } from '../../../../com/ibm/icu/util/UResourceBundle.d.ts'
export class PluralRulesLoader extends PluralRules$Factory {
    static loader: PluralRulesLoader;
    static getDefaultFactory(): PluralRulesLoader;
    private constructor()
    // private localeIdToCardinalRulesId: JavaMap<string, string>;
    // private localeIdToOrdinalRulesId: JavaMap<string, string>;
    // private pluralRulesCache: JavaMap<string, PluralRules>;
    // private rulesIdToEquivalentULocale: JavaMap<string, ULocale>;
    // private checkBuildRulesIdMaps(): void;
    forLocale(arg0: ULocale): PluralRules;
    forLocale(arg0: ULocale, arg1: PluralRules$PluralType): PluralRules;
    getAvailableULocales(): ULocale[];
    getFunctionalEquivalent(arg0: ULocale, arg1: boolean[]): ULocale;
    // private getLocaleIdToRulesIdMap(arg0: PluralRules$PluralType): JavaMap<string, string>;
    getOrCreateRulesForLocale(arg0: ULocale, arg1: PluralRules$PluralType): PluralRules;
    getPluralBundle(): UResourceBundle;
    getRulesIdForLocale(arg0: ULocale, arg1: PluralRules$PluralType): string;
    // private getRulesIdToEquivalentULocaleMap(): JavaMap<string, ULocale>;
    hasOverride(arg0: ULocale): boolean;
}