import type { Currency } from '../../../../com/ibm/icu/util/Currency.d.ts'
import type { Measure } from '../../../../com/ibm/icu/util/Measure.d.ts'
import type { Currency as Currency_2 } from '../../../../java/util/Currency.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class CurrencyAmount extends Measure {
    constructor(arg0: number, arg1: Currency)
    constructor(arg0: number, arg1: Currency_2)
    constructor(arg0: Number, arg1: Currency)
    constructor(arg0: Number, arg1: Currency_2)
    getCurrency(): Currency;
}