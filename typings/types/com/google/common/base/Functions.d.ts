import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions extends Object {
    static compose(paramg: (param0: Object) => boolean, paramf: (param0: Object) => boolean): (param0: Object) => boolean;
    static constant(paramvalue: Object | null): (param0: Object) => boolean;
    static forMap(parammap: Map<Object | null, Object | null>, paramdefaultValue: Object | null): (param0: Object) => boolean;
    static forMap(parammap: Map<Object | null, Object | null>): (param0: Object) => boolean;
    static forPredicate(parampredicate: (param0: Object) => boolean): (param0: Object) => boolean;
    static forSupplier(paramsupplier: () => Object | null): (param0: Object) => boolean;
    static identity(): (param0: Object) => boolean;
    static toStringFunction(): (param0: Object) => boolean;
    private constructor()
}