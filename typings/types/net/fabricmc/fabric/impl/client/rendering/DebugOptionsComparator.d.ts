import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DebugOptionsComparator extends Object implements Comparator<Identifier> {
    static INSTANCE: DebugOptionsComparator;
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
    compare(arg0: Identifier, arg1: Identifier): number;
    reversed(): (param0: Identifier, param1: Identifier) => number;
    thenComparing(arg0: (param0: Identifier, param1: Identifier) => number): (param0: Identifier, param1: Identifier) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Identifier) => U): (param0: Identifier, param1: Identifier) => number;
    thenComparing<U extends unknown>(arg0: (param0: Identifier) => U, arg1: (param0: U, param1: U) => number): (param0: Identifier, param1: Identifier) => number;
    thenComparingDouble(arg0: (param0: Identifier) => number): (param0: Identifier, param1: Identifier) => number;
    thenComparingInt(arg0: (param0: Identifier) => number): (param0: Identifier, param1: Identifier) => number;
    thenComparingLong(arg0: (param0: Identifier) => number): (param0: Identifier, param1: Identifier) => number;
}