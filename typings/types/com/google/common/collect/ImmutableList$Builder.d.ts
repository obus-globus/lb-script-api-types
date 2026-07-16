import type { ImmutableCollection$Builder } from '../../../../com/google/common/collect/ImmutableCollection$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ImmutableList$Builder<E extends unknown> extends ImmutableCollection$Builder<E> {
    constructor()
    constructor(capacity: number)
    // private contents: Object[];
    // private copyOnWrite: boolean;
    // private size: number;
    add(element: E): ImmutableList$Builder<E>;
    add(...elements: E[]): ImmutableList$Builder<E>;
    // private add(elements: Object[], n: number): void;
    addAll(elements: E[]): ImmutableList$Builder<E>;
    addAll(elements: Iterator<E>): ImmutableList$Builder<E>;
    build(): E[];
    buildSorted(comparator: (param0: E, param1: E) => number): E[];
    combine(builder: ImmutableList$Builder<E>): ImmutableList$Builder<E>;
    // private ensureRoomFor(newElements: number): void;
}