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
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object) => boolean;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static reverseOrder(): (param0: Object) => boolean;
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
    reversed(): (param0: Object) => boolean;
    setCodePointCompare(flag: boolean): void;
    setIgnoreCase(ignorecase: boolean, foldcaseoption: number): void;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: string) => U): (param0: Object) => boolean;
    thenComparing<U extends Object | number | string | boolean>(arg0: (param0: string) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: string) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: string) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: string) => number): (param0: Object) => boolean;
}