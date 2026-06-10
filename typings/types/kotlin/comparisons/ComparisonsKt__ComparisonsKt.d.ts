import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ComparisonsKt__ComparisonsKt extends Object {
    static compareBy(paramarg0: Object | null): (param0: Object) => boolean;
    static compareValues(paramarg0: Object | null, paramarg1: Object | null): number;
    static compareValuesBy(paramarg0: Object | null, paramarg1: Object | null, paramarg2: Object | null): number;
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static reverseOrder(): (param0: Object) => boolean;
    static reversed(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static then(paramarg0: (param0: Object) => boolean, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static thenDescending(paramarg0: (param0: Object) => boolean, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
}