import type { ImmutableList$Builder } from '../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { ListBuilder } from '../../../com/mojang/serialization/ListBuilder.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ListBuilder$Builder<T extends Object | number | string | boolean> extends Object implements ListBuilder<T> {
    constructor(arg0: DynamicOps<T>)
    // private builder: DataResult<ImmutableList$Builder<T>>;
    // private ops: DynamicOps<T>;
    add(arg0: T): ListBuilder<T>;
    add(arg0: DataResult<T>): ListBuilder<T>;
    add<E extends Object | number | string | boolean>(arg0: E, arg1: Encoder<E>): ListBuilder<T>;
    addAll(arg0: E[], arg1: Encoder<E>): ListBuilder<T>;
    build(arg0: T): DataResult<T>;
    build(arg0: DataResult<T>): DataResult<T>;
    mapError(arg0: (param0: string) => unknown): ListBuilder<T>;
    ops(): DynamicOps<T>;
    withErrorsFrom(arg0: DataResult<Object>): ListBuilder<T>;
}