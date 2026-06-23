import type { Multiset$Entry } from '../../../../com/google/common/collect/Multiset$Entry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Multisets$AbstractEntry<E extends unknown> extends Object implements Multiset$Entry<E> {
    constructor()
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}