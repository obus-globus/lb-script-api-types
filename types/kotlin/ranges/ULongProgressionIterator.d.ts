import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class ULongProgressionIterator extends Object implements Iterator<ULong> {
    constructor(first: ULong, last: ULong, step: number)
    // private finalElement: ULong;
    // private hasNext: boolean;
    // private next: ULong;
    // private step: ULong;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): ULong;
}