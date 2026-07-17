import type { CompressorHolder } from '../../../com/mojang/serialization/CompressorHolder.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapEncoder } from '../../../com/mojang/serialization/MapEncoder.d.ts'
import type { RecordBuilder } from '../../../com/mojang/serialization/RecordBuilder.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class MapEncoder$Implementation<A extends unknown> extends CompressorHolder implements MapEncoder<A> {
    constructor()
    comap<B extends unknown>(arg0: (param0: B) => A): MapEncoder<B>;
    compressedBuilder<T extends unknown>(arg0: DynamicOps<T>): RecordBuilder<T>;
    encoder(): Encoder<A>;
    flatComap<B extends unknown>(arg0: (param0: B) => DataResult<A>): MapEncoder<B>;
    withLifecycle(arg0: Lifecycle): MapEncoder<A>;
}