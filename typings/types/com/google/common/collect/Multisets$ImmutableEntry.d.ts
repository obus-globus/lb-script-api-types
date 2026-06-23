import type { Multisets$AbstractEntry } from '../../../../com/google/common/collect/Multisets$AbstractEntry.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multisets$ImmutableEntry<E extends unknown> extends Multisets$AbstractEntry<E> implements Serializable {
    constructor(element: E, count: number)
    readonly count: number;
    readonly element: E;
    getCount(): number;
    getElement(): E;
    nextInBucket(): Multisets$ImmutableEntry<E>;
}