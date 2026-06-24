import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class ArrayList$Itr extends Object implements Iterator<E> {
    constructor(null_: E[])
    // private cursor: number;
    // private expectedModCount: number;
    // private lastRet: number;
    checkForComodification(): void;
    forEachRemaining<E extends unknown>(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    next<E extends unknown>(): E;
    remove(): void;
}