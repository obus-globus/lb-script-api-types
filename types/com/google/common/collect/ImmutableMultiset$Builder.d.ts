import type { ImmutableCollection$Builder } from '../../../../com/google/common/collect/ImmutableCollection$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ImmutableMultiset$Builder<E extends Object | number | string | boolean> extends ImmutableCollection$Builder<E> {
    constructor()
    constructor(contents: E[])
    // private contents: E[];
    add(element: E): ImmutableMultiset$Builder<E>;
    add(elements: E[]): ImmutableMultiset$Builder<E>;
    addAll(elements: E[]): ImmutableMultiset$Builder<E>;
    addAll(elements: Iterator<E>): ImmutableMultiset$Builder<E>;
    addCopies(element: E, occurrences: number): ImmutableMultiset$Builder<E>;
    build(): E[];
    buildJdkBacked(): E[];
    setCount(element: E, count: number): ImmutableMultiset$Builder<E>;
}