import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class DateUtils$DateIterator extends Object implements Iterator<Calendar> {
    constructor(arg0: Calendar, arg1: Calendar)
    // private endFinal: Calendar;
    // private spot: Calendar;
    forEachRemaining(arg0: (param0: Calendar) => void): void;
    hasNext(): boolean;
    next(): Calendar;
    remove(): void;
}