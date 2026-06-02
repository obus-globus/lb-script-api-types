import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ComparisonsKt___ComparisonsJvmKt } from '../../kotlin/comparisons/ComparisonsKt___ComparisonsJvmKt.d.ts'
export class ComparisonsKt___ComparisonsKt extends ComparisonsKt___ComparisonsJvmKt {
    static compareBy(paramarg0: Object | null): (param0: Object | null) => kotlin.Boolean;
    static compareValues(paramarg0: Object | null, paramarg1: Object | null): number;
    static compareValuesBy(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): number;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null, paramarg3: (param0: Object | null) => kotlin.Boolean): Object | null;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean): Object | null;
    static maxOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean): Object | null;
    static maxOf(paramarg0: number, paramarg1: number[]): number;
    static maxOf(paramarg0: number, paramarg1: number[]): number;
    static maxOf(paramarg0: number, paramarg1: number[]): number;
    static maxOf(paramarg0: number, paramarg1: number[]): number;
    static maxOf(paramarg0: number, paramarg1: number[]): number;
    static maxOf(paramarg0: number, paramarg1: number[]): number;
    static minOf(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static minOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static minOf(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static minOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null, paramarg3: (param0: Object | null) => kotlin.Boolean): Object | null;
    static minOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean): Object | null;
    static minOf(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean): Object | null;
    static minOf(paramarg0: number, paramarg1: number[]): number;
    static minOf(paramarg0: number, paramarg1: number[]): number;
    static minOf(paramarg0: number, paramarg1: number[]): number;
    static minOf(paramarg0: number, paramarg1: number[]): number;
    static minOf(paramarg0: number, paramarg1: number[]): number;
    static minOf(paramarg0: number, paramarg1: number[]): number;
    static naturalOrder(): (param0: Object | null) => kotlin.Boolean;
    static nullsFirst(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static nullsLast(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static reverseOrder(): (param0: Object | null) => kotlin.Boolean;
    static reversed(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static then(paramarg0: (param0: Object | null) => kotlin.Boolean, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static thenDescending(paramarg0: (param0: Object | null) => kotlin.Boolean, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
}