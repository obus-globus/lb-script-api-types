import type { PluralRulesLoader } from '../../../../com/ibm/icu/impl/PluralRulesLoader.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$PluralType } from '../../../../com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class PluralRules$Factory extends Object {
    static getDefaultFactory(): PluralRulesLoader;
    constructor()
    forLocale(arg0: ULocale): PluralRules;
    forLocale(arg0: ULocale, arg1: PluralRules$PluralType): PluralRules;
    getAvailableULocales(): ULocale[];
    getFunctionalEquivalent(arg0: ULocale, arg1: (Object | null)[]): ULocale;
    hasOverride(arg0: ULocale): boolean;
}