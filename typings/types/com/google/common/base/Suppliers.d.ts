import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Suppliers extends Object {
    static compose<F extends unknown, T extends unknown>(paramfunction: (param0: Object) => T, paramsupplier: () => F): () => T;
    static memoize<T extends unknown>(paramdelegate: () => T): () => T;
    static memoizeWithExpiration<T extends unknown>(paramdelegate: () => T, paramduration: Duration): () => T;
    static memoizeWithExpiration<T extends unknown>(paramdelegate: () => T, paramduration: number, paramunit: TimeUnit): () => T;
    static ofInstance<T extends unknown>(paraminstance: T): () => T;
    static supplierFunction<T extends unknown>(): (param0: () => T) => T;
    static synchronizedSupplier<T extends unknown>(paramdelegate: () => T): () => T;
    private constructor()
}