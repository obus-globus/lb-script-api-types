import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CombinedCurrencyMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/CombinedCurrencyMatcher.d.ts'
import type { IgnorablesMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/IgnorablesMatcher.d.ts'
import type { MinusSignMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/MinusSignMatcher.d.ts'
import type { PercentMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/PercentMatcher.d.ts'
import type { PermilleMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/PermilleMatcher.d.ts'
import type { PlusSignMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/PlusSignMatcher.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Currency } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { ULocale } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class AffixTokenMatcherFactory extends Object {
    constructor()
    currency: Currency;
    ignorables: IgnorablesMatcher;
    locale: ULocale;
    parseFlags: number;
    symbols: DecimalFormatSymbols;
    currency(): CombinedCurrencyMatcher;
    ignorables(): IgnorablesMatcher;
    minusSign(): MinusSignMatcher;
    percent(): PercentMatcher;
    permille(): PermilleMatcher;
    plusSign(): PlusSignMatcher;
}