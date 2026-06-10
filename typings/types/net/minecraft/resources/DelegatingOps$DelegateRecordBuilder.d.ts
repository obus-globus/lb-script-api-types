import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { RecordBuilder } from '../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DelegatingOps$DelegateRecordBuilder extends Object implements RecordBuilder<T> {
    constructor(null_: DelegatingOps$DelegateRecordBuilder)
    // private original: RecordBuilder<T>;
    add<T extends Object | number | string | boolean, E extends Object | number | string | boolean>(arg0: string, arg1: E, arg2: Encoder<E>): RecordBuilder<T>;
    add<T extends Object | number | string | boolean>(arg0: string, arg1: T): RecordBuilder<T>;
    add<T extends Object | number | string | boolean>(arg0: string, arg1: DataResult<T>): RecordBuilder<T>;
    add<T extends Object | number | string | boolean>(key: T, value: T): RecordBuilder<T>;
    add<T extends Object | number | string | boolean>(key: T, value: DataResult<T>): RecordBuilder<T>;
    add<T extends Object | number | string | boolean>(key: DataResult<T>, value: DataResult<T>): RecordBuilder<T>;
    add<T extends Object | number | string | boolean, E extends Object | number | string | boolean>(key: string, value: E, encoder: Encoder<E>): RecordBuilder<T>;
    add<T extends Object | number | string | boolean>(key: string, value: T): RecordBuilder<T>;
    add<T extends Object | number | string | boolean>(key: string, value: DataResult<T>): RecordBuilder<T>;
    build<T extends Object | number | string | boolean>(arg0: DataResult<T>): DataResult<T>;
    build<T extends Object | number | string | boolean>(prefix: T): DataResult<T>;
    build<T extends Object | number | string | boolean>(prefix: DataResult<T>): DataResult<T>;
    mapError<T extends Object | number | string | boolean>(onError: (param0: string) => Object | null): RecordBuilder<T>;
    ops<T extends Object | number | string | boolean>(): DynamicOps<T>;
    setLifecycle<T extends Object | number | string | boolean>(lifecycle: Lifecycle): RecordBuilder<T>;
    withErrorsFrom<T extends Object | number | string | boolean>(result: DataResult<Object>): RecordBuilder<T>;
}