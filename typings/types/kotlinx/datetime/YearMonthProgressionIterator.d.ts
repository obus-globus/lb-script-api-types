import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { LongIterator } from '../../kotlin/collections/LongIterator.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
export class YearMonthProgressionIterator extends Object implements Iterator<YearMonth> {
    constructor(iterator: LongIterator)
    // private iterator: LongIterator;
    forEachRemaining(arg0: (param0: YearMonth) => void): void;
    hasNext(): boolean;
    next(): YearMonth;
}