import type { File } from '../../../../../java/io/File.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export abstract class AbstractFileComparator extends Object implements Comparator<File> {
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
    constructor()
    reversed(): (param0: File, param1: File) => number;
    sort(...arg0: File[]): File[];
    sort(arg0: File[]): File[];
    thenComparing(arg0: (param0: File, param1: File) => number): (param0: File, param1: File) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: File) => U): (param0: File, param1: File) => number;
    thenComparing<U extends unknown>(arg0: (param0: File) => U, arg1: (param0: U, param1: U) => number): (param0: File, param1: File) => number;
    thenComparingDouble(arg0: (param0: File) => number): (param0: File, param1: File) => number;
    thenComparingInt(arg0: (param0: File) => number): (param0: File, param1: File) => number;
    thenComparingLong(arg0: (param0: File) => number): (param0: File, param1: File) => number;
    toString(): string;
}