import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionCountsPredicate$Entry } from '../../../../net/minecraft/advancements/criterion/CollectionCountsPredicate$Entry.d.ts'
export interface CollectionCountsPredicate<T extends Object | number | string | boolean, P extends Predicate<T>> extends Predicate<T[]>, Object {
    and(arg0: (param0: T[]) => boolean): (param0: T[]) => boolean;
    negate(): (param0: T[]) => boolean;
    or(arg0: (param0: T[]) => boolean): (param0: T[]) => boolean;
    unpack(): CollectionCountsPredicate$Entry<T, P>[];
}