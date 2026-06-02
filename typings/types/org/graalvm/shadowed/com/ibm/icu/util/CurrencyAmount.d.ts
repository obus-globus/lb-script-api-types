import type { Currency } from '../../../../../../../java/util/Currency.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { Currency } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { Measure } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Measure.d.ts'
export class CurrencyAmount extends Measure {
    constructor(number: number, currency: Currency)
    constructor(number: number, currency: Currency)
    constructor(number: Number, currency: Currency)
    constructor(number: Number, currency: Currency)
    getCurrency(): Currency;
}