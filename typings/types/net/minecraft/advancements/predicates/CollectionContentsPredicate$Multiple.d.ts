import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionContentsPredicate } from '../../../../net/minecraft/advancements/predicates/CollectionContentsPredicate.d.ts'
export class CollectionContentsPredicate$Multiple<T extends unknown, P extends Predicate<T>> extends Record implements CollectionContentsPredicate<T, P> {
    constructor(tests: P[])
    // private tests: P[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    test(values: T[]): boolean;
    tests(): P[];
    toString(): string;
    unpack(): P[];
}