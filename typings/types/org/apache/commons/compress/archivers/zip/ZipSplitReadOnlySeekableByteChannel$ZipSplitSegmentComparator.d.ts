import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class ZipSplitReadOnlySeekableByteChannel$ZipSplitSegmentComparator extends Object implements Serializable, Comparator<Path> {
    static comparing<T extends unknown, U extends Comparable<Object>>(paramarg0: (param0: Object) => U): (param0: T, param1: T) => number;
    static comparing<T extends unknown, U extends unknown>(paramarg0: (param0: Object) => U, paramarg1: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static comparingDouble<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingInt<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingLong<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static naturalOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    static nullsFirst<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static nullsLast<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static reverseOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    constructor(arg0: any)
    compare(arg0: Path, arg1: Path): number;
    reversed(): (param0: Path, param1: Path) => number;
    thenComparing(arg0: (param0: Path, param1: Path) => number): (param0: Path, param1: Path) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Path) => U): (param0: Path, param1: Path) => number;
    thenComparing<U extends unknown>(arg0: (param0: Path) => U, arg1: (param0: U, param1: U) => number): (param0: Path, param1: Path) => number;
    thenComparingDouble(arg0: (param0: Path) => number): (param0: Path, param1: Path) => number;
    thenComparingInt(arg0: (param0: Path) => number): (param0: Path, param1: Path) => number;
    thenComparingLong(arg0: (param0: Path) => number): (param0: Path, param1: Path) => number;
}