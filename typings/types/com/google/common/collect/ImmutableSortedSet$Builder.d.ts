import type { ImmutableSet$Builder } from '../../../../com/google/common/collect/ImmutableSet$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ImmutableSortedSet$Builder<E extends Object | number | string | boolean> extends ImmutableSet$Builder<E> {
    constructor(comparator: (param0: Object) => boolean)
    constructor(comparator: (param0: Object) => boolean, expectedSize: number)
    // private comparator: (param0: Object) => boolean;
    // private elements: E[];
    // private n: number;
    add(element: E): ImmutableSortedSet$Builder<E>;
    add(elements: E[]): ImmutableSortedSet$Builder<E>;
    addAll(elements: E[]): ImmutableSortedSet$Builder<E>;
    addAll(elements: Iterator<E>): ImmutableSortedSet$Builder<E>;
    build(): E[];
    combine(builder: ImmutableSet$Builder<E>): ImmutableSortedSet$Builder<E>;
    copy(): void;
    // private sortAndDedup(): void;
}