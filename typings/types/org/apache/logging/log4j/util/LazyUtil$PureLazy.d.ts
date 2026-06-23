import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../org/apache/logging/log4j/util/Lazy.d.ts'
export class LazyUtil$PureLazy<T extends unknown> extends Object implements Lazy<T> {
    static lazy(paramsupplier: () => Object | null): Lazy<Object>;
    static pure(paramsupplier: () => Object | null): Lazy<Object>;
    static value(paramvalue: Object | null): Lazy<Object>;
    static weak(paramvalue: Object | null): Lazy<Object>;
    constructor(supplier: () => T)
    // private supplier: () => T;
    // private value: Object;
    get(): T;
    isInitialized(): boolean;
    map<R extends unknown>(function_: (param0: T) => R): Lazy<R>;
    set(newValue: T): void;
    value(): T;
}