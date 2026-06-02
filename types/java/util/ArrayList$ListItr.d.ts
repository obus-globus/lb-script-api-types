import type { ArrayList$Itr } from '../../java/util/ArrayList$Itr.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ListIterator } from '../../java/util/ListIterator.d.ts'
export class ArrayList$ListItr extends ArrayList$Itr implements ListIterator<E> {
    constructor(null_: ArrayList$ListItr, arg1: number)
    add<E extends Object | number | string | boolean>(arg0: E): void;
    hasPrevious(): boolean;
    nextIndex(): number;
    previous<E extends Object | number | string | boolean>(): E;
    previousIndex(): number;
    set<E extends Object | number | string | boolean>(arg0: E): void;
}