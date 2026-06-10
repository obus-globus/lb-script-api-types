import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { ListBuilder } from '../../../com/mojang/serialization/ListBuilder.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractListBuilder<T extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object implements ListBuilder<T> {
    constructor(ops: DynamicOps<T>)
    // private builder: DataResult<B>;
    // private ops: DynamicOps<T>;
    add<E extends Object | number | string | boolean>(arg0: E, arg1: Encoder<E>): ListBuilder<T>;
    add(value: T): ListBuilder<T>;
    add(value: DataResult<T>): ListBuilder<T>;
    addAll<E extends Object | number | string | boolean>(arg0: E[], arg1: Encoder<E>): ListBuilder<T>;
    append(builder: B, value: T): B;
    build(arg0: DataResult<T>): DataResult<T>;
    build(builder: B, prefix: T): DataResult<T>;
    build(prefix: T): DataResult<T>;
    initBuilder(): B;
    mapError(onError: (param0: string) => Object | null): ListBuilder<T>;
    ops(): DynamicOps<T>;
    withErrorsFrom(result: DataResult<Object>): ListBuilder<T>;
}