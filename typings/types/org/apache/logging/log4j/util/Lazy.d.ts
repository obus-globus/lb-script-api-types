import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Lazy<T extends unknown> extends Supplier<T>, Object {
    get(): T;
    isInitialized(): boolean;
    map<R extends unknown>(function_: (param0: T) => R): Lazy<R>;
    set(newValue: T): void;
    value(): T;
}