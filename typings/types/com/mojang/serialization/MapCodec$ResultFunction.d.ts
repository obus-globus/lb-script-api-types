import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { MapLike } from '../../../com/mojang/serialization/MapLike.d.ts'
import type { RecordBuilder } from '../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MapCodec$ResultFunction<A extends Object | number | string | boolean> extends Object{
    apply<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: MapLike<T>, arg2: DataResult<A>): DataResult<A>;
    coApply<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: A, arg2: RecordBuilder<T>): RecordBuilder<T>;
}