import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Decoder$Boxed<A extends Object | number | string | boolean> extends Object{
    decode<T extends Object | number | string | boolean>(arg0: Dynamic<T>): DataResult<Pair<A, T>>;
    decoder(): Decoder<A>;
}