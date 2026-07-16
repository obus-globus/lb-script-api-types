import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { NumberRange } from '../../../../org/apache/commons/lang3/NumberRange.d.ts'
import type { Range } from '../../../../org/apache/commons/lang3/Range.d.ts'
export class DoubleRange extends NumberRange<number> {
    static between<T extends Comparable<Object>>(paramarg0: T, paramarg1: T): Range<T>;
    static between<T extends unknown>(paramarg0: T, paramarg1: T, paramarg2: (param0: T, param1: T) => number): Range<T>;
    static is<T extends Comparable<Object>>(paramarg0: T): Range<T>;
    static is<T extends unknown>(paramarg0: T, paramarg1: (param0: T, param1: T) => number): Range<T>;
    static of<T extends Comparable<Object>>(paramarg0: T, paramarg1: T): Range<T>;
    static of<T extends unknown>(paramarg0: T, paramarg1: T, paramarg2: (param0: T, param1: T) => number): Range<T>;
    static of(paramarg0: number, paramarg1: number): DoubleRange;
    private constructor(arg0: number, arg1: number)
    fit(arg0: number): number;
}