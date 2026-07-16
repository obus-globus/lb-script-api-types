import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { ComparisonsKt___ComparisonsKt } from '../../kotlin/comparisons/ComparisonsKt___ComparisonsKt.d.ts'
export class ComparisonsKt extends ComparisonsKt___ComparisonsKt {
    static compareBy(paramarg0: (param0: Object) => Comparable<Object>[]): (param0: Object | null, param1: Object | null) => number;
    static compareValues(paramarg0: Object | null, paramarg1: Object | null): number;
    static compareValuesBy(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object) => Comparable<Object>[]): number;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static maxOf(paramarg0: Object | null, ...paramarg1: (Object | null)[]): Object | null;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null, paramarg3: (param0: Object, param1: Object) => number): Object | null;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => number): Object | null;
    static maxOf(paramarg0: Object | null, paramarg1: (Object | null)[], paramarg2: (param0: Object, param1: Object) => number): Object | null;
    static maxOf(paramarg0: number, ...paramarg1: number[]): number;
    static minOf(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static minOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static minOf(paramarg0: Object | null, ...paramarg1: (Object | null)[]): Object | null;
    static minOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null, paramarg3: (param0: Object, param1: Object) => number): Object | null;
    static minOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => number): Object | null;
    static minOf(paramarg0: Object | null, paramarg1: (Object | null)[], paramarg2: (param0: Object, param1: Object) => number): Object | null;
    static minOf(paramarg0: number, ...paramarg1: number[]): number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
    static reversed(paramarg0: (param0: Object | null, param1: Object | null) => number): (param0: Object | null, param1: Object | null) => number;
    static then(paramarg0: (param0: Object | null, param1: Object | null) => number, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static thenDescending(paramarg0: (param0: Object | null, param1: Object | null) => number, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
}