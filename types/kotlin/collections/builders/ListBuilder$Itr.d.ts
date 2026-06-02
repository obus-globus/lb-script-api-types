import type { Object } from '../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../java/util/ListIterator.d.ts'
export class ListBuilder$Itr<E extends Object | number | string | boolean> extends Object implements ListIterator<E> {
    constructor(list: E[], index: number)
    // private expectedModCount: number;
    // private index: number;
    // private lastIndex: number;
    // private list: E[];
    add(element: E): void;
    // private checkForComodification(): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): E;
    nextIndex(): number;
    previous(): E;
    previousIndex(): number;
    remove(): void;
    set(element: E): void;
}