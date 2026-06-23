import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../java/util/ListIterator.d.ts'
export abstract class UnmodifiableListIterator<E extends unknown> extends UnmodifiableIterator<E> implements ListIterator<E> {
    constructor()
    add(e: E): void;
    set(e: E): void;
}