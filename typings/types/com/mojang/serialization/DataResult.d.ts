import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Function3 } from '../../../com/mojang/datafixers/util/Function3.d.ts'
import type { DataResult$Error } from '../../../com/mojang/serialization/DataResult$Error.d.ts'
import type { DataResult$Mu } from '../../../com/mojang/serialization/DataResult$Mu.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DataResult<R extends Object | number | string | boolean> extends App<DataResult$Mu, R>, Object{
    addLifecycle(arg0: Lifecycle): DataResult<R>;
    ap(arg0: DataResult<(param0: R) => R2>): DataResult<R2>;
    apply2(arg0: (param0: R, param1: R2) => S, arg1: DataResult<R2>): DataResult<S>;
    apply2stable(arg0: (param0: R, param1: R2) => S, arg1: DataResult<R2>): DataResult<S>;
    apply3(arg0: Function3<R, R2, R3, S>, arg1: DataResult<R2>, arg2: DataResult<R3>): DataResult<S>;
    error(): Optional<DataResult$Error<R>>;
    flatMap(arg0: (param0: R) => DataResult<R2>): DataResult<R2>;
    getOrThrow(): R;
    getOrThrow(arg0: (param0: string) => E): R;
    getPartialOrThrow(): R;
    getPartialOrThrow(arg0: (param0: string) => E): R;
    hasResultOrPartial(): boolean;
    ifError(arg0: (param0: DataResult$Error<R>) => void): DataResult<R>;
    ifSuccess(arg0: (param0: R) => void): DataResult<R>;
    isError(): boolean;
    isSuccess(): boolean;
    lifecycle(): Lifecycle;
    map(arg0: (param0: R) => T): DataResult<T>;
    mapError(arg0: (param0: string) => unknown): DataResult<R>;
    mapOrElse<T extends Object | number | string | boolean>(arg0: (param0: R) => T, arg1: (param0: DataResult$Error<R>) => T): T;
    promotePartial(arg0: (param0: string) => void): DataResult<R>;
    result(): Optional<R>;
    resultOrPartial(): Optional<R>;
    resultOrPartial(arg0: (param0: string) => void): Optional<R>;
    setLifecycle(arg0: Lifecycle): DataResult<R>;
    setPartial(arg0: R): DataResult<R>;
    setPartial(arg0: () => R): DataResult<R>;
}