import type { ApproximatelySignMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/ApproximatelySignMatcher.d.ts'
import type { CombinedCurrencyMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/CombinedCurrencyMatcher.d.ts'
import type { IgnorablesMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/IgnorablesMatcher.d.ts'
import type { MinusSignMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/MinusSignMatcher.d.ts'
import type { PercentMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/PercentMatcher.d.ts'
import type { PermilleMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/PermilleMatcher.d.ts'
import type { PlusSignMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/PlusSignMatcher.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Currency } from '../../../../../../com/ibm/icu/util/Currency.d.ts'
import type { ULocale } from '../../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AffixTokenMatcherFactory extends Object {
    constructor()
    currency: Currency;
    ignorables: IgnorablesMatcher;
    locale: ULocale;
    parseFlags: number;
    symbols: DecimalFormatSymbols;
    approximatelySign(): ApproximatelySignMatcher;
    minusSign(): MinusSignMatcher;
    percent(): PercentMatcher;
    permille(): PermilleMatcher;
    plusSign(): PlusSignMatcher;
}