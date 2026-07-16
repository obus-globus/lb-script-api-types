import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Suppliers extends Object {
    static compose(paramfunction: (param0: Object) => Object | null, paramsupplier: () => Object | null): () => Object | null;
    static memoize(paramdelegate: () => Object | null): () => Object | null;
    static memoizeWithExpiration(paramdelegate: () => Object | null, paramduration: Duration): () => Object | null;
    static memoizeWithExpiration(paramdelegate: () => Object | null, paramduration: number, paramunit: TimeUnit): () => Object | null;
    static ofInstance(paraminstance: Object | null): () => Object | null;
    static supplierFunction(): (param0: () => Object | null) => Object | null;
    static synchronizedSupplier(paramdelegate: () => Object | null): () => Object | null;
    private constructor()
}