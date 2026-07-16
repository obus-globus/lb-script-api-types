import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PluralRulesLoader } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/PluralRulesLoader.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { PluralRules$PluralType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$PluralType.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class PluralRules$Factory extends Object {
    static getDefaultFactory(): PluralRulesLoader;
    constructor()
    forLocale(locale: ULocale): PluralRules;
    forLocale(locale: ULocale, type: PluralRules$PluralType): PluralRules;
    getAvailableULocales(): ULocale[];
    getFunctionalEquivalent(locale: ULocale, isAvailable: boolean[]): ULocale;
    hasOverride(locale: ULocale): boolean;
}