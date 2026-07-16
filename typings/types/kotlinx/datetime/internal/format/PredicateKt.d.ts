import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Predicate } from '../../../../kotlinx/datetime/internal/format/Predicate.d.ts'
export class PredicateKt extends Object {
    static conjunctionPredicate<T extends unknown>(predicates: Predicate<T>[]): Predicate<T>;
}