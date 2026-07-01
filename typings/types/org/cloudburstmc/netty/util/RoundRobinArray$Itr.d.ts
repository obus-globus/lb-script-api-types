import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class RoundRobinArray$Itr extends Object implements Iterator<E> {
    constructor(null_: Object[])
    // private cursor: number;
    // private lastRet: number;
    forEachRemaining<E extends unknown>(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    next<E extends unknown>(): E;
    remove(): void;
}