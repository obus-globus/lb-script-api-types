import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { PropertySource } from '../../../../../org/apache/logging/log4j/util/PropertySource.d.ts'
export class PropertySource$Comparator extends Object implements Serializable, Comparator<PropertySource> {
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
    compare(o1: PropertySource, o2: PropertySource): number;
    reversed(): (param0: PropertySource, param1: PropertySource) => number;
    thenComparing(arg0: (param0: PropertySource, param1: PropertySource) => number): (param0: PropertySource, param1: PropertySource) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: PropertySource) => U): (param0: PropertySource, param1: PropertySource) => number;
    thenComparing<U extends unknown>(arg0: (param0: PropertySource) => U, arg1: (param0: U, param1: U) => number): (param0: PropertySource, param1: PropertySource) => number;
    thenComparingDouble(arg0: (param0: PropertySource) => number): (param0: PropertySource, param1: PropertySource) => number;
    thenComparingInt(arg0: (param0: PropertySource) => number): (param0: PropertySource, param1: PropertySource) => number;
    thenComparingLong(arg0: (param0: PropertySource) => number): (param0: PropertySource, param1: PropertySource) => number;
}