import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SignedBytes$LexicographicalComparator extends Enum<SignedBytes$LexicographicalComparator> implements Comparator<number[]> {
    static INSTANCE: SignedBytes$LexicographicalComparator;
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
    static valueOf(paramname: string): SignedBytes$LexicographicalComparator;
    static values(): SignedBytes$LexicographicalComparator[];
    private constructor()
    compare(left: number[], right: number[]): number;
    reversed(): (param0: number[], param1: number[]) => number;
    thenComparing(arg0: (param0: number[], param1: number[]) => number): (param0: number[], param1: number[]) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: number[]) => U): (param0: number[], param1: number[]) => number;
    thenComparing<U extends unknown>(arg0: (param0: number[]) => U, arg1: (param0: U, param1: U) => number): (param0: number[], param1: number[]) => number;
    thenComparingDouble(arg0: (param0: number[]) => number): (param0: number[], param1: number[]) => number;
    thenComparingInt(arg0: (param0: number[]) => number): (param0: number[], param1: number[]) => number;
    thenComparingLong(arg0: (param0: number[]) => number): (param0: number[], param1: number[]) => number;
    toString(): string;
    name(): "INSTANCE";
}