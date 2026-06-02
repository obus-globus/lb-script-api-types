import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../org/apache/logging/log4j/util/Lazy.d.ts'
export class LazyUtil$Constant<T extends Object | number | string | boolean> extends Object implements Lazy<T> {
    static lazy(paramsupplier: () => Object | null): Lazy<Object>;
    static pure(paramsupplier: () => Object | null): Lazy<Object>;
    static value(paramvalue: Object | null): Lazy<Object>;
    static weak(paramvalue: Object | null): Lazy<Object>;
    constructor(value: T)
    // private value: T;
    get(): T;
    isInitialized(): boolean;
    map(function_: (param0: T) => R): Lazy<R>;
    set(newValue: T): void;
    toString(): string;
    value(): T;
}