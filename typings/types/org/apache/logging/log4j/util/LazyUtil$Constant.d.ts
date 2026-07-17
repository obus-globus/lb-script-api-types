import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../org/apache/logging/log4j/util/Lazy.d.ts'
export class LazyUtil$Constant<T extends unknown> extends Object implements Lazy<T> {
    constructor(value: T)
    // private value: T;
    get(): T;
    isInitialized(): boolean;
    map<R extends unknown>(function_: (param0: T) => R): Lazy<R>;
    set(newValue: T): void;
    toString(): string;
    value(): T;
}