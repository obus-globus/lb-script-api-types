import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Decoder$Simple<A extends Object | number | string | boolean> extends Object{
    decode(arg0: Dynamic<T>): DataResult<A>;
    decoder(): Decoder<A>;
}