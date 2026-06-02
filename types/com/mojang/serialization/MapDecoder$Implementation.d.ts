import type { CompressorHolder } from '../../../com/mojang/serialization/CompressorHolder.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapDecoder } from '../../../com/mojang/serialization/MapDecoder.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class MapDecoder$Implementation<A extends Object | number | string | boolean> extends CompressorHolder implements MapDecoder<A> {
    constructor()
    ap(arg0: MapDecoder<(param0: A) => E>): MapDecoder<E>;
    compressedDecode<T extends Object | number | string | boolean>(arg0: DynamicOps<T>, arg1: T): DataResult<A>;
    decoder(): Decoder<A>;
    flatMap(arg0: (param0: A) => DataResult<B>): MapDecoder<B>;
    map(arg0: (param0: A) => B): MapDecoder<B>;
    withLifecycle(arg0: Lifecycle): MapDecoder<A>;
}