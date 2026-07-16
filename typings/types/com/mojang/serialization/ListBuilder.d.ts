import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ListBuilder<T extends unknown> extends Object {
    add<E extends unknown>(arg0: E, arg1: Encoder<E>): ListBuilder<T>;
    add(arg0: T): ListBuilder<T>;
    add(arg0: DataResult<T>): ListBuilder<T>;
    addAll<E extends unknown>(arg0: E[], arg1: Encoder<E>): ListBuilder<T>;
    build(arg0: T): DataResult<T>;
    build(arg0: DataResult<T>): DataResult<T>;
    mapError(arg0: (param0: string) => string): ListBuilder<T>;
    ops(): DynamicOps<T>;
    withErrorsFrom(arg0: DataResult<Object>): ListBuilder<T>;
}