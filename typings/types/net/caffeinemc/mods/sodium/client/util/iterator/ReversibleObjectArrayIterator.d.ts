import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export class ReversibleObjectArrayIterator<T extends unknown> extends Object implements Iterator<T> {
    constructor(arg0: T[], arg1: boolean)
    constructor(arg0: T[], arg1: number, arg2: number, arg3: boolean)
    // private array: T[];
    // private currentIndex: number;
    // private direction: number;
    // private remaining: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
}