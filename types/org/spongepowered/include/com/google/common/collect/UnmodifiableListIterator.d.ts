import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../../../java/util/ListIterator.d.ts'
import type { UnmodifiableIterator } from '../../../../../../../org/spongepowered/include/com/google/common/collect/UnmodifiableIterator.d.ts'
export abstract class UnmodifiableListIterator<E extends Object | number | string | boolean> extends UnmodifiableIterator<E> implements ListIterator<E> {
    constructor()
    add(arg0: E): void;
    set(arg0: E): void;
}