import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions extends Object {
    static compose<A extends unknown, B extends unknown, C extends unknown>(paramg: (param0: B) => C, paramf: (param0: A) => B): (param0: A) => C;
    static constant<E extends unknown>(paramvalue: E): (param0: Object) => E;
    static forMap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>, paramdefaultValue: V): (param0: K) => V;
    static forMap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>): (param0: K) => V;
    static forPredicate<T extends unknown>(parampredicate: (param0: T) => boolean): (param0: T) => boolean;
    static forSupplier<F extends unknown, T extends unknown>(paramsupplier: () => T): (param0: F) => T;
    static identity<E extends unknown>(): (param0: E) => E;
    static toStringFunction(): (param0: Object) => string;
    private constructor()
}