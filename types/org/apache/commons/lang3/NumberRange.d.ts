import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
import type { Range } from '../../../../org/apache/commons/lang3/Range.d.ts'
export class NumberRange<N extends Number> extends Range<N> {
    static between(paramarg0: Object | null, paramarg1: Object | null): Range<Object>;
    static between(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean): Range<Object>;
    static is(paramarg0: Object | null): Range<Object>;
    static is(paramarg0: Object | null, paramarg1: (param0: Object | null) => kotlin.Boolean): Range<Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): Range<Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean): Range<Object>;
    constructor(arg0: N, arg1: N, arg2: (param0: N) => kotlin.Boolean)
}