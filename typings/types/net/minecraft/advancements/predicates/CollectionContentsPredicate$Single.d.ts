import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionContentsPredicate } from '../../../../net/minecraft/advancements/predicates/CollectionContentsPredicate.d.ts'
export class CollectionContentsPredicate$Single<T extends unknown, P extends Predicate<T>> extends Record implements CollectionContentsPredicate<T, P> {
    constructor(test: P)
    // private test: P;
    equals(o: Object | null): boolean;
    hashCode(): number;
    test(): P;
    test(values: T[]): boolean;
    toString(): string;
    unpack(): P[];
}