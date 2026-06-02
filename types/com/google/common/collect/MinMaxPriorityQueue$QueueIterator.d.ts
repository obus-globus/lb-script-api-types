import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class MinMaxPriorityQueue$QueueIterator extends Object implements Iterator<E> {
    private constructor(null_: MinMaxPriorityQueue$QueueIterator)
    // private canRemove: boolean;
    // private cursor: number;
    // private expectedModCount: number;
    // private forgetMeNot: E[];
    // private lastFromForgetMeNot: E;
    // private nextCursor: number;
    // private skipMe: E[];
    // private checkModCount(): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    // private foundAndRemovedExactReference<E extends Object | number | string | boolean>(elements: E[], target: E): boolean;
    hasNext(): boolean;
    next<E extends Object | number | string | boolean>(): E;
    // private nextNotInSkipMe(c: number): void;
    remove(): void;
    // private removeExact(target: Object): boolean;
}