import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NumberRange } from '../../../../org/apache/commons/lang3/NumberRange.d.ts'
import type { Range } from '../../../../org/apache/commons/lang3/Range.d.ts'
export class DoubleRange extends NumberRange<number> {
    static between(paramarg0: Object | null, paramarg1: Object | null): Range<Object>;
    static between(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean): Range<Object>;
    static is(paramarg0: Object | null): Range<Object>;
    static is(paramarg0: Object | null, paramarg1: (param0: Object | null) => kotlin.Boolean): Range<Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): Range<Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean): Range<Object>;
    static of(paramarg0: number, paramarg1: number): DoubleRange;
    static of(paramarg0: number, paramarg1: number): DoubleRange;
    private constructor(arg0: number, arg1: number)
    fit(arg0: number): number;
    fit(arg0: number): number;
}