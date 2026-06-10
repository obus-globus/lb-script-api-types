import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RecordBuilder<T extends Object | number | string | boolean> extends Object {
    add(arg0: T, arg1: T): RecordBuilder<T>;
    add(arg0: T, arg1: DataResult<T>): RecordBuilder<T>;
    add(arg0: DataResult<T>, arg1: DataResult<T>): RecordBuilder<T>;
    add<E extends Object | number | string | boolean>(arg0: string, arg1: E, arg2: Encoder<E>): RecordBuilder<T>;
    add(arg0: string, arg1: T): RecordBuilder<T>;
    add(arg0: string, arg1: DataResult<T>): RecordBuilder<T>;
    build(arg0: T): DataResult<T>;
    build(arg0: DataResult<T>): DataResult<T>;
    mapError(arg0: (param0: string) => Object | null): RecordBuilder<T>;
    ops(): DynamicOps<T>;
    setLifecycle(arg0: Lifecycle): RecordBuilder<T>;
    withErrorsFrom(arg0: DataResult<Object>): RecordBuilder<T>;
}