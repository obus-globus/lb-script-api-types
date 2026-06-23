import type { Multisets$ImmutableEntry } from '../../../../com/google/common/collect/Multisets$ImmutableEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegularImmutableMultiset$NonTerminalEntry<E extends unknown> extends Multisets$ImmutableEntry<E> {
    constructor(element: E, count: number, nextInBucket: Multisets$ImmutableEntry<E>)
    // private nextInBucket: Multisets$ImmutableEntry<E>;
    nextInBucket(): Multisets$ImmutableEntry<E>;
}