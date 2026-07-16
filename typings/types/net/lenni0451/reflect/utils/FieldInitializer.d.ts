import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { FieldInitializer$ThrowingFunction } from '../../../../net/lenni0451/reflect/utils/FieldInitializer$ThrowingFunction.d.ts'
import type { FieldInitializer$ThrowingSupplier } from '../../../../net/lenni0451/reflect/utils/FieldInitializer$ThrowingSupplier.d.ts'
export class FieldInitializer extends Object {
    static condInit<T extends unknown, R extends unknown>(paramarg0: boolean, paramarg1: () => T, paramarg2: (param0: T) => R): R;
    static condInit<T extends unknown>(paramarg0: boolean, paramarg1: () => T): T;
    static condReqInit<C extends unknown, T extends unknown>(paramarg0: () => C, paramarg1: (param0: C) => T, paramarg2: () => Throwable): T;
    static init<T extends unknown, R extends unknown>(paramarg0: () => T, paramarg1: (param0: T) => R): R;
    static init<T extends unknown>(paramarg0: T, paramarg1: (param0: T) => void): T;
    static init<T extends unknown>(paramarg0: () => T): T;
    static optInit<T extends unknown, R extends unknown>(paramarg0: () => T, paramarg1: (param0: T) => R): R;
    static optInit<T extends unknown>(paramarg0: () => T): T;
    static process<T extends unknown>(paramarg0: () => T, paramarg1: (param0: Throwable) => Throwable): T;
    static reqInit<T extends unknown, R extends unknown>(paramarg0: () => T, paramarg1: (param0: T) => R, paramarg2: () => Throwable): R;
    static reqInit<T extends unknown>(paramarg0: () => T, paramarg1: () => Throwable): T;
    static reqOptInit<T extends unknown, R extends unknown>(paramarg0: boolean, paramarg1: () => T, paramarg2: (param0: T) => R, paramarg3: () => Throwable): R;
    static reqOptInit<T extends unknown>(paramarg0: boolean, paramarg1: () => T, paramarg2: () => Throwable): T;
    constructor()
}