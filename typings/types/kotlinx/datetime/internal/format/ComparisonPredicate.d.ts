import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Predicate } from '../../../../kotlinx/datetime/internal/format/Predicate.d.ts'
export class ComparisonPredicate<T extends Object | number | string | boolean, E extends Object | number | string | boolean> extends Object implements Predicate<T> {
    constructor(expectedValue: E, getter: Function1<T, E>)
    // private expectedValue: E;
    // private getter: (param0: T) => E | null;
    test(value: T): boolean;
}