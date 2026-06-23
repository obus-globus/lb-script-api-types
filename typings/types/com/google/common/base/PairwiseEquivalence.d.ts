import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PairwiseEquivalence<E extends unknown, T extends E> extends Equivalence<T[]> implements Serializable {
    static equals(): Equivalence<Object>;
    static identity(): Equivalence<Object>;
    constructor(elementEquivalence: Equivalence<E>)
    // private elementEquivalence: Equivalence<E>;
    doEquivalent(iterableA: T[], iterableB: T[]): boolean;
    doHash(iterable: T[]): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}