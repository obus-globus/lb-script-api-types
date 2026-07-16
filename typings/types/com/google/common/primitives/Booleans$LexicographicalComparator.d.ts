import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Booleans$LexicographicalComparator extends Enum<Booleans$LexicographicalComparator> implements Comparator<boolean[]> {
    static INSTANCE: Booleans$LexicographicalComparator;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Booleans$LexicographicalComparator;
    static values(): Booleans$LexicographicalComparator[];
    private constructor()
    compare(left: boolean[], right: boolean[]): number;
    reversed(): (param0: boolean[], param1: boolean[]) => number;
    thenComparing(arg0: (param0: boolean[], param1: boolean[]) => number): (param0: boolean[], param1: boolean[]) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: boolean[]) => U): (param0: boolean[], param1: boolean[]) => number;
    thenComparing<U extends unknown>(arg0: (param0: boolean[]) => U, arg1: (param0: U, param1: U) => number): (param0: boolean[], param1: boolean[]) => number;
    thenComparingDouble(arg0: (param0: boolean[]) => number): (param0: boolean[], param1: boolean[]) => number;
    thenComparingInt(arg0: (param0: boolean[]) => number): (param0: boolean[], param1: boolean[]) => number;
    thenComparingLong(arg0: (param0: boolean[]) => number): (param0: boolean[], param1: boolean[]) => number;
    toString(): string;
    name(): "INSTANCE";
}