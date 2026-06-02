import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class ArrayList$Itr extends Object implements Iterator<E> {
    constructor(null_: ArrayList$Itr)
    // private cursor: number;
    // private expectedModCount: number;
    // private lastRet: number;
    checkForComodification(): void;
    forEachRemaining(arg0: (param0: E) => void): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<E extends Object | number | string | boolean>(): E;
    remove(): void;
}