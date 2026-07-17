import type { Function3 } from '../../../com/mojang/datafixers/util/Function3.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DataResult$Error } from '../../../com/mojang/serialization/DataResult$Error.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class DataResult$Success<R extends unknown> extends Record implements DataResult<R> {
    constructor(value: R, lifecycle: Lifecycle)
    // private lifecycle: Lifecycle;
    // private value: R;
    addLifecycle(arg0: Lifecycle): DataResult<R>;
    ap<R2 extends unknown>(arg0: DataResult<(param0: R) => R2>): DataResult<R2>;
    apply2<S extends unknown, R2 extends unknown>(arg0: (param0: R, param1: R2) => S, arg1: DataResult<R2>): DataResult<S>;
    apply2stable<S extends unknown, R2 extends unknown>(arg0: (param0: R, param1: R2) => S, arg1: DataResult<R2>): DataResult<S>;
    apply3<S extends unknown, R2 extends unknown, R3 extends unknown>(arg0: Function3<R, R2, R3, S>, arg1: DataResult<R2>, arg2: DataResult<R3>): DataResult<S>;
    equals(arg0: Object | null): boolean;
    error(): Optional<DataResult$Error<R>>;
    flatMap<R2 extends unknown>(arg0: (param0: R) => DataResult<R2>): DataResult<R2>;
    getOrThrow(): R;
    getOrThrow<E extends Throwable>(arg0: (param0: string) => E): R;
    getPartialOrThrow(): R;
    getPartialOrThrow<E extends Throwable>(arg0: (param0: string) => E): R;
    hasResultOrPartial(): boolean;
    hashCode(): number;
    ifError(arg0: (param0: DataResult$Error<R>) => void): DataResult<R>;
    ifSuccess(arg0: (param0: R) => void): DataResult<R>;
    isError(): boolean;
    isSuccess(): boolean;
    lifecycle(): Lifecycle;
    map<T extends unknown>(arg0: (param0: R) => T): DataResult<T>;
    mapError(arg0: (param0: string) => string): DataResult<R>;
    mapOrElse<T extends unknown>(arg0: (param0: R) => T, arg1: (param0: DataResult$Error<R>) => T): T;
    promotePartial(arg0: (param0: string) => void): DataResult<R>;
    result(): Optional<R>;
    resultOrPartial(): Optional<R>;
    resultOrPartial(arg0: (param0: string) => void): Optional<R>;
    setLifecycle(arg0: Lifecycle): DataResult<R>;
    setPartial(arg0: R): DataResult<R>;
    setPartial(arg0: () => R): DataResult<R>;
    toString(): string;
    value(): R;
}