import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { LongIterator } from '../../kotlin/collections/LongIterator.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
export class LocalDateProgressionIterator extends Object implements Iterator<LocalDate> {
    constructor(iterator: LongIterator)
    // private iterator: LongIterator;
    forEachRemaining(arg0: (param0: LocalDate) => void): void;
    hasNext(): boolean;
    next(): LocalDate;
}