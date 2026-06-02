import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CollectionsKt extends Object {
    static addIfNotNull(paramarg0: E[], paramarg1: Object | null): void;
    static compact(paramarg0: (Object | null)[]): (Object | null)[];
    static mapToIndex(paramarg0: (Object | null)[]): Map<Object | null, number>;
    static newHashMapWithExpectedSize(paramarg0: number): Map<Object | null, Object | null>;
    static newHashSetWithExpectedSize(paramarg0: number): (Object | null)[];
    static newLinkedHashSetWithExpectedSize(paramarg0: number): (Object | null)[];
}