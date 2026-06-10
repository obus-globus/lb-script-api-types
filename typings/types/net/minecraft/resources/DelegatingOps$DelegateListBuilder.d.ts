import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { ListBuilder } from '../../../com/mojang/serialization/ListBuilder.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DelegatingOps$DelegateListBuilder extends Object implements ListBuilder<T> {
    constructor(null_: DelegatingOps$DelegateListBuilder)
    // private original: ListBuilder<T>;
    add<T extends Object | number | string | boolean, E extends Object | number | string | boolean>(arg0: E, arg1: Encoder<E>): ListBuilder<T>;
    add<T extends Object | number | string | boolean, E extends Object | number | string | boolean>(value: E, encoder: Encoder<E>): ListBuilder<T>;
    add<T extends Object | number | string | boolean>(value: T): ListBuilder<T>;
    add<T extends Object | number | string | boolean>(value: DataResult<T>): ListBuilder<T>;
    addAll<T extends Object | number | string | boolean, E extends Object | number | string | boolean>(arg0: E[], arg1: Encoder<E>): ListBuilder<T>;
    addAll<T extends Object | number | string | boolean, E extends Object | number | string | boolean>(values: E[], encoder: Encoder<E>): ListBuilder<T>;
    build<T extends Object | number | string | boolean>(arg0: DataResult<T>): DataResult<T>;
    build<T extends Object | number | string | boolean>(prefix: T): DataResult<T>;
    build<T extends Object | number | string | boolean>(prefix: DataResult<T>): DataResult<T>;
    mapError<T extends Object | number | string | boolean>(onError: (param0: string) => Object | null): ListBuilder<T>;
    ops<T extends Object | number | string | boolean>(): DynamicOps<T>;
    withErrorsFrom<T extends Object | number | string | boolean>(result: DataResult<Object>): ListBuilder<T>;
}