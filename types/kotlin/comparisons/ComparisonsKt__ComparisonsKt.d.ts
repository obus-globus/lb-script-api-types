import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ComparisonsKt__ComparisonsKt extends Object {
    static compareBy(paramarg0: Object | null): (param0: Object | null) => kotlin.Boolean;
    static compareValues(paramarg0: Object | null, paramarg1: Object | null): number;
    static compareValuesBy(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): number;
    static naturalOrder(): (param0: Object | null) => kotlin.Boolean;
    static nullsFirst(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static nullsLast(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static reverseOrder(): (param0: Object | null) => kotlin.Boolean;
    static reversed(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static then(paramarg0: (param0: Object | null) => kotlin.Boolean, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static thenDescending(paramarg0: (param0: Object | null) => kotlin.Boolean, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
}