import type { Object } from '../../java/lang/Object.d.ts'
import type { AbstractList$IteratorImpl } from '../../kotlin/collections/AbstractList$IteratorImpl.d.ts'
import type { ListIterator } from '../../java/util/ListIterator.d.ts'
export class AbstractList$ListIteratorImpl extends AbstractList$IteratorImpl implements ListIterator<E> {
    constructor(null_: (Object | null)[], index: number)
    hasPrevious(): boolean;
    nextIndex(): number;
    previous<E extends unknown>(): E;
    previousIndex(): number;
}