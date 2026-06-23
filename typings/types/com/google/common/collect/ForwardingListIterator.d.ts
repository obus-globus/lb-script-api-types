import type { ForwardingIterator } from '../../../../com/google/common/collect/ForwardingIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../java/util/ListIterator.d.ts'
export abstract class ForwardingListIterator<E extends unknown> extends ForwardingIterator<E> implements ListIterator<E> {
    constructor()
    add(element: E): void;
    delegate(): ListIterator<E>;
    hasPrevious(): boolean;
    nextIndex(): number;
    previous(): E;
    previousIndex(): number;
    set(element: E): void;
}