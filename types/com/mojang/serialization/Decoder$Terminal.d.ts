import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Decoder$Terminal<A extends Object | number | string | boolean> extends Object{
    decode<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: T): DataResult<A>;
    decoder(): Decoder<A>;
}