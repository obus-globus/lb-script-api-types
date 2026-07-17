import type { File } from '../../../../../java/io/File.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export abstract class AbstractFileComparator extends Object implements Comparator<File> {
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