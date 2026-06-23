import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Codec$ResultFunction<A extends unknown> extends Object{
    apply<T extends unknown>(arg0: DynamicOps<T>, arg1: T, arg2: DataResult<Pair<A, T>>): DataResult<Pair<A, T>>;
    coApply<T extends unknown>(arg0: DynamicOps<T>, arg1: A, arg2: DataResult<T>): DataResult<T>;
}