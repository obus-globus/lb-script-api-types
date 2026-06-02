import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionCountsPredicate$Entry } from '../../../../net/minecraft/advancements/criterion/CollectionCountsPredicate$Entry.d.ts'
export interface CollectionCountsPredicate<T extends Object | number | string | boolean, P extends Predicate<T>> extends Predicate<T[]>, Object{
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    unpack(): CollectionCountsPredicate$Entry<T, P>[];
}