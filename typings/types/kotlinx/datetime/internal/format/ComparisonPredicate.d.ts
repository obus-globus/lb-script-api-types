import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Predicate } from '../../../../kotlinx/datetime/internal/format/Predicate.d.ts'
export class ComparisonPredicate<T extends unknown, E extends unknown> extends Object implements Predicate<T> {
    constructor(expectedValue: E, getter: (param0: T) => E | null)
    // private expectedValue: E;
    // private getter: (param0: T) => E | null;
    test(value: T): boolean;
}