import type { ImmutableMultiset$Builder } from '../../../../com/google/common/collect/ImmutableMultiset$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ImmutableSortedMultiset$Builder<E extends unknown> extends ImmutableMultiset$Builder<E> {
    constructor(comparator: (param0: Object) => boolean)
    add(element: E): ImmutableSortedMultiset$Builder<E>;
    add(elements: E[]): ImmutableSortedMultiset$Builder<E>;
    addAll(elements: E[]): ImmutableSortedMultiset$Builder<E>;
    addAll(elements: Iterator<E>): ImmutableSortedMultiset$Builder<E>;
    addCopies(element: E, occurrences: number): ImmutableSortedMultiset$Builder<E>;
    build(): E[];
    setCount(element: E, count: number): ImmutableSortedMultiset$Builder<E>;
}