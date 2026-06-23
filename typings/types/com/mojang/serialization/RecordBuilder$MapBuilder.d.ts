import type { ImmutableMap$Builder } from '../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { RecordBuilder$AbstractUniversalBuilder } from '../../../com/mojang/serialization/RecordBuilder$AbstractUniversalBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RecordBuilder$MapBuilder<T extends unknown> extends RecordBuilder$AbstractUniversalBuilder<T, ImmutableMap$Builder<T, T>> {
    constructor(arg0: DynamicOps<T>)
    append(arg0: T, arg1: T, arg2: ImmutableMap$Builder<T, T>): ImmutableMap$Builder<T, T>;
    build(arg0: T): DataResult<T>;
    build(arg0: ImmutableMap$Builder<T, T>, arg1: T): DataResult<T>;
    build(arg0: DataResult<T>): DataResult<T>;
    initBuilder(): ImmutableMap$Builder<T, T>;
}