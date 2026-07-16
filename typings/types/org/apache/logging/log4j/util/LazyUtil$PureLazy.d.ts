import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../org/apache/logging/log4j/util/Lazy.d.ts'
export class LazyUtil$PureLazy<T extends unknown> extends Object implements Lazy<T> {
    static lazy<T extends unknown>(paramsupplier: () => T): Lazy<T>;
    static pure<T extends unknown>(paramsupplier: () => T): Lazy<T>;
    static value<T extends unknown>(paramvalue: T): Lazy<T>;
    static weak<T extends unknown>(paramvalue: T): Lazy<T>;
    constructor(supplier: () => T)
    // private supplier: () => T;
    // private value: Object;
    get(): T;
    isInitialized(): boolean;
    map<R extends unknown>(function_: (param0: T) => R): Lazy<R>;
    set(newValue: T): void;
    value(): T;
}