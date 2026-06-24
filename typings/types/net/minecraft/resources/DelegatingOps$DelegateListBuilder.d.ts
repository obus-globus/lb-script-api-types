import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { ListBuilder } from '../../../com/mojang/serialization/ListBuilder.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DelegatingOps } from '../../../net/minecraft/resources/DelegatingOps.d.ts'
export class DelegatingOps$DelegateListBuilder extends Object implements ListBuilder<T> {
    constructor(null_: DelegatingOps<T>, original: ListBuilder<T>)
    // private original: ListBuilder<T>;
    add<T extends unknown, E extends unknown>(arg0: E, arg1: Encoder<E>): ListBuilder<T>;
    add<T extends unknown, E extends unknown>(value: E, encoder: Encoder<E>): ListBuilder<T>;
    add<T extends unknown>(value: T): ListBuilder<T>;
    add<T extends unknown>(value: DataResult<T>): ListBuilder<T>;
    addAll<T extends unknown, E extends unknown>(arg0: E[], arg1: Encoder<E>): ListBuilder<T>;
    addAll<T extends unknown, E extends unknown>(values: E[], encoder: Encoder<E>): ListBuilder<T>;
    build<T extends unknown>(arg0: DataResult<T>): DataResult<T>;
    build<T extends unknown>(prefix: T): DataResult<T>;
    build<T extends unknown>(prefix: DataResult<T>): DataResult<T>;
    mapError<T extends unknown>(onError: (param0: string) => Object | null): ListBuilder<T>;
    ops<T extends unknown>(): DynamicOps<T>;
    withErrorsFrom<T extends unknown>(result: DataResult<Object>): ListBuilder<T>;
}