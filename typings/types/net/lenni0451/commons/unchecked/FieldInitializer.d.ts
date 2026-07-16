import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ThrowingConsumer } from '../../../../net/lenni0451/commons/unchecked/function/ThrowingConsumer.d.ts'
import type { ThrowingFunction } from '../../../../net/lenni0451/commons/unchecked/function/ThrowingFunction.d.ts'
import type { ThrowingSupplier } from '../../../../net/lenni0451/commons/unchecked/function/ThrowingSupplier.d.ts'
export class FieldInitializer<T extends unknown> extends Object {
    static attempt(paramarg0: () => Object | null): FieldInitializer<Object>;
    static firstOf(paramarg0: () => Object | null[]): FieldInitializer<Object>;
    static of(paramarg0: Object | null): FieldInitializer<Object>;
    private constructor(arg0: () => T)
    // private supplier: () => T;
    ensure(arg0: () => Throwable): FieldInitializer<T>;
    get(): T;
    handleException(arg0: (param0: Throwable) => Throwable): FieldInitializer<T>;
    map<R extends unknown>(arg0: (param0: T) => R): FieldInitializer<R>;
    onlyIf(arg0: boolean): FieldInitializer<T>;
    onlyIf(arg0: () => boolean): FieldInitializer<T>;
    or(arg0: () => T): FieldInitializer<T>;
    orElse(arg0: T): T;
    peek(arg0: (param0: T) => void): FieldInitializer<T>;
    require(arg0: () => Throwable): T;
    silent(): FieldInitializer<T>;
    uncheckedCast<R extends unknown>(): FieldInitializer<R>;
}