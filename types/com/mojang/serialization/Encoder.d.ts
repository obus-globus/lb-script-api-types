import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapEncoder } from '../../../com/mojang/serialization/MapEncoder.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Encoder<A extends Object | number | string | boolean> extends Object{
    comap(arg0: (param0: B) => A): Encoder<B>;
    encode<T extends Object | number | string | boolean>(arg0: A, arg1: DynamicOps<T>, arg2: T): DataResult<T>;
    encodeStart(arg0: DynamicOps<T>, arg1: A): DataResult<T>;
    fieldOf(arg0: string): MapEncoder<A>;
    flatComap(arg0: (param0: B) => DataResult<A>): Encoder<B>;
    withLifecycle(arg0: Lifecycle): Encoder<A>;
}