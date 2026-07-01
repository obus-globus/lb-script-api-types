import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { RecordBuilder } from '../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DelegatingOps } from '../../../net/minecraft/resources/DelegatingOps.d.ts'
export class DelegatingOps$DelegateRecordBuilder extends Object implements RecordBuilder<T> {
    constructor(null_: DelegatingOps<Object>, original: RecordBuilder<Object>)
    // private original: RecordBuilder<T>;
    add<T extends unknown, E extends unknown>(arg0: string, arg1: E, arg2: Encoder<E>): RecordBuilder<T>;
    add<T extends unknown>(arg0: string, arg1: T): RecordBuilder<T>;
    add<T extends unknown>(arg0: string, arg1: DataResult<T>): RecordBuilder<T>;
    add<T extends unknown>(key: T, value: T): RecordBuilder<T>;
    add<T extends unknown>(key: T, value: DataResult<T>): RecordBuilder<T>;
    add<T extends unknown>(key: DataResult<T>, value: DataResult<T>): RecordBuilder<T>;
    add<T extends unknown, E extends unknown>(key: string, value: E, encoder: Encoder<E>): RecordBuilder<T>;
    add<T extends unknown>(key: string, value: T): RecordBuilder<T>;
    add<T extends unknown>(key: string, value: DataResult<T>): RecordBuilder<T>;
    build<T extends unknown>(arg0: DataResult<T>): DataResult<T>;
    build<T extends unknown>(prefix: T): DataResult<T>;
    build<T extends unknown>(prefix: DataResult<T>): DataResult<T>;
    mapError<T extends unknown>(onError: (param0: string) => Object | null): RecordBuilder<T>;
    ops<T extends unknown>(): DynamicOps<T>;
    setLifecycle<T extends unknown>(lifecycle: Lifecycle): RecordBuilder<T>;
    withErrorsFrom<T extends unknown>(result: DataResult<Object>): RecordBuilder<T>;
}