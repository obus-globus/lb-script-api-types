import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { RecordBuilder } from '../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { RecordBuilder$AbstractBuilder } from '../../../com/mojang/serialization/RecordBuilder$AbstractBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class RecordBuilder$AbstractUniversalBuilder<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends RecordBuilder$AbstractBuilder<T, R> {
    constructor(arg0: DynamicOps<T>)
    add(arg0: T, arg1: T): RecordBuilder<T>;
    add(arg0: T, arg1: DataResult<T>): RecordBuilder<T>;
    add(arg0: DataResult<T>, arg1: DataResult<T>): RecordBuilder<T>;
    append(arg0: T, arg1: T, arg2: R): R;
}