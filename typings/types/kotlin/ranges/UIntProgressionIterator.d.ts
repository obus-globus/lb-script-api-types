import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { UInt } from '../../kotlin/UInt.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class UIntProgressionIterator extends Object implements Iterator<UInt> {
    constructor(first: UInt, last: UInt, step: number)
    // private finalElement: UInt;
    // private hasNext: boolean;
    // private next: UInt;
    // private step: UInt;
    forEachRemaining(arg0: (param0: UInt) => void): void;
    hasNext(): boolean;
    next(): UInt;
}