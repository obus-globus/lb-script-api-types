import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComparableUtils$ComparableCheckBuilder } from '../../../../../org/apache/commons/lang3/compare/ComparableUtils$ComparableCheckBuilder.d.ts'
export class ComparableUtils extends Object {
    static between(paramarg0: Object | null, paramarg1: Object | null): (param0: Object | null) => boolean;
    static betweenExclusive(paramarg0: Object | null, paramarg1: Object | null): (param0: Object | null) => boolean;
    static ge(paramarg0: Object | null): (param0: Object | null) => boolean;
    static gt(paramarg0: Object | null): (param0: Object | null) => boolean;
    static is(paramarg0: Object | null): ComparableUtils$ComparableCheckBuilder<any>;
    static le(paramarg0: Object | null): (param0: Object | null) => boolean;
    static lt(paramarg0: Object | null): (param0: Object | null) => boolean;
    static max(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static min(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    private constructor()
}