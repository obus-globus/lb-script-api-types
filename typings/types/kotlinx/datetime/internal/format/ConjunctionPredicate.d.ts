import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Predicate } from '../../../../kotlinx/datetime/internal/format/Predicate.d.ts'
export class ConjunctionPredicate<T extends Object | number | string | boolean> extends Object implements Predicate<T> {
    constructor(predicates: Predicate<T>[])
    // private predicates: Predicate<T>[];
    test(value: T): boolean;
}