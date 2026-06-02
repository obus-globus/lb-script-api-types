import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Function3 } from '../../../com/mojang/datafixers/util/Function3.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DataResult$Instance } from '../../../com/mojang/serialization/DataResult$Instance.d.ts'
import type { DataResult$Mu } from '../../../com/mojang/serialization/DataResult$Mu.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DataResult$Error<R extends Object | number | string | boolean> extends Record implements DataResult<R> {
    static appendMessages(paramarg0: string, paramarg1: string): string;
    static error(paramarg0: () => string): DataResult<Object>;
    static error(paramarg0: () => string, paramarg1: Object | null): DataResult<Object>;
    static error(paramarg0: () => string, paramarg1: Object | null, paramarg2: Lifecycle): DataResult<Object>;
    static error(paramarg0: () => string, paramarg1: Lifecycle): DataResult<Object>;
    static instance(): DataResult$Instance;
    static partialGet(paramarg0: (param0: Object | null) => Object | null, paramarg1: () => string): (param0: Object | null) => Object | null;
    static success(paramarg0: Object | null): DataResult<Object>;
    static success(paramarg0: Object | null, paramarg1: Lifecycle): DataResult<Object>;
    static unbox(paramarg0: App<DataResult$Mu, Object>): DataResult<Object>;
    constructor(messageSupplier: () => string, partialValue: Optional<R>, lifecycle: Lifecycle)
    // private lifecycle: Lifecycle;
    // private messageSupplier: () => string;
    // private partialValue: Optional<R>;
    addLifecycle(arg0: Lifecycle): DataResult<R>;
    ap(arg0: DataResult<(param0: R) => R2>): DataResult$Error<R2>;
    apply2(arg0: (param0: R, param1: R2) => S, arg1: DataResult<R2>): DataResult<S>;
    apply2stable(arg0: (param0: R, param1: R2) => S, arg1: DataResult<R2>): DataResult<S>;
    apply3(arg0: Function3<R, R2, R3, S>, arg1: DataResult<R2>, arg2: DataResult<R3>): DataResult<S>;
    equals(arg0: Object | null): boolean;
    error(): Optional<DataResult$Error<R>>;
    flatMap(arg0: (param0: R) => DataResult<R2>): DataResult$Error<R2>;
    getOrThrow(arg0: (param0: string) => E): R;
    getOrThrow(): R;
    getPartialOrThrow(arg0: (param0: string) => E): R;
    getPartialOrThrow(): R;
    hasResultOrPartial(): boolean;
    hashCode(): number;
    ifError(arg0: (param0: DataResult$Error<R>) => void): DataResult<R>;
    ifSuccess(arg0: (param0: R) => void): DataResult<R>;
    isError(): boolean;
    isSuccess(): boolean;
    lifecycle(): Lifecycle;
    map(arg0: (param0: R) => T): DataResult$Error<T>;
    mapError(arg0: (param0: string) => unknown): DataResult$Error<R>;
    mapOrElse<T extends Object | number | string | boolean>(arg0: (param0: R) => T, arg1: (param0: DataResult$Error<R>) => T): T;
    message(): string;
    messageSupplier(): () => string;
    partialValue(): Optional<R>;
    promotePartial(arg0: (param0: string) => void): DataResult<R>;
    result(): Optional<R>;
    resultOrPartial(): Optional<R>;
    resultOrPartial(arg0: (param0: string) => void): Optional<R>;
    setLifecycle(arg0: Lifecycle): DataResult$Error<R>;
    setPartial(arg0: R): DataResult$Error<R>;
    setPartial(arg0: () => R): DataResult$Error<R>;
    toString(): string;
}