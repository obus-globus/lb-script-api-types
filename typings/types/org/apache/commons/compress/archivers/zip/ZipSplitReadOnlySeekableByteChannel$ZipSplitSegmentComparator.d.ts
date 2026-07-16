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
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
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