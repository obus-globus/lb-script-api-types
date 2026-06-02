import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$Factory } from '../../../../com/ibm/icu/text/PluralRules$Factory.d.ts'
import type { PluralRules$PluralType } from '../../../../com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundle } from '../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PluralRulesLoader extends PluralRules$Factory {
    static loader: PluralRulesLoader;
    static getDefaultFactory(): PluralRulesLoader;
    private constructor()
    // private localeIdToCardinalRulesId: { [key: string]: string };
    // private localeIdToOrdinalRulesId: { [key: string]: string };
    // private pluralRulesCache: { [key: string]: PluralRules };
    // private rulesIdToEquivalentULocale: { [key: string]: ULocale };
    // private checkBuildRulesIdMaps(): void;
    forLocale(arg0: ULocale, arg1: PluralRules$PluralType): PluralRules;
    getAvailableULocales(): ULocale[];
    getFunctionalEquivalent(arg0: ULocale, arg1: (Object | null)[]): ULocale;
    // private getLocaleIdToRulesIdMap(arg0: PluralRules$PluralType): { [key: string]: string };
    getOrCreateRulesForLocale(arg0: ULocale, arg1: PluralRules$PluralType): PluralRules;
    getPluralBundle(): UResourceBundle;
    getRulesIdForLocale(arg0: ULocale, arg1: PluralRules$PluralType): string;
    // private getRulesIdToEquivalentULocaleMap(): { [key: string]: ULocale };
    hasOverride(arg0: ULocale): boolean;
}