import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class UTF16$StringComparator extends Object implements Comparator<string> {
    static FOLD_CASE_DEFAULT: number;
    static FOLD_CASE_EXCLUDE_SPECIAL_I: number;
    static comparing<T extends unknown, U extends Comparable<Object>>(paramarg0: (param0: Object) => U): (param0: T, param1: T) => number;
    static comparing<T extends unknown, U extends unknown>(paramarg0: (param0: Object) => U, paramarg1: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static comparingDouble<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingInt<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingLong<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static naturalOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    static nullsFirst<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static nullsLast<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static reverseOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    constructor()
    constructor(codepointcompare: boolean, ignorecase: boolean, foldcaseoption: number)
    // private m_codePointCompare_: number;
    // private m_foldCase_: number;
    // private m_ignoreCase_: boolean;
    compare(a: string, b: string): number;
    // private compareCaseInsensitive(s1: string, s2: string): number;
    // private compareCaseSensitive(s1: string, s2: string): number;
    getCodePointCompare(): boolean;
    getIgnoreCase(): boolean;
    getIgnoreCaseOption(): number;
    reversed(): (param0: string, param1: string) => number;
    setCodePointCompare(flag: boolean): void;
    setIgnoreCase(ignorecase: boolean, foldcaseoption: number): void;
    thenComparing(arg0: (param0: string, param1: string) => number): (param0: string, param1: string) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: string) => U): (param0: string, param1: string) => number;
    thenComparing<U extends unknown>(arg0: (param0: string) => U, arg1: (param0: U, param1: U) => number): (param0: string, param1: string) => number;
    thenComparingDouble(arg0: (param0: string) => number): (param0: string, param1: string) => number;
    thenComparingInt(arg0: (param0: string) => number): (param0: string, param1: string) => number;
    thenComparingLong(arg0: (param0: string) => number): (param0: string, param1: string) => number;
}