import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ConcurrentSkipListIntObjMultimap$IntEntry<V extends unknown> extends Object implements Comparable<ConcurrentSkipListIntObjMultimap$IntEntry<V>> {
    constructor(arg0: number, arg1: V)
    readonly key: number;
    readonly value: V;
    compareTo(arg0: ConcurrentSkipListIntObjMultimap$IntEntry<V>): number;
    equals(arg0: Object | null): boolean;
    getKey(): number;
    getValue(): V;
    hashCode(): number;
    toString(): string;
}