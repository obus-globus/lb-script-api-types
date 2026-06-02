import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Lifecycle } from '../../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { MapDecoder } from '../../../../com/mojang/serialization/MapDecoder.d.ts'
import type { MapEncoder } from '../../../../com/mojang/serialization/MapEncoder.d.ts'
import type { RecordCodecBuilder$Instance } from '../../../../com/mojang/serialization/codecs/RecordCodecBuilder$Instance.d.ts'
import type { RecordCodecBuilder$Mu } from '../../../../com/mojang/serialization/codecs/RecordCodecBuilder$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RecordCodecBuilder<O extends Object | number | string | boolean, F extends Object | number | string | boolean> extends Object implements App<RecordCodecBuilder$Mu<O>, F> {
    static build(paramarg0: App<Object, Object>): MapCodec<Object>;
    static create(paramarg0: (param0: Object | null) => Object | null): Codec<Object>;
    static deprecated(paramarg0: Object | null, paramarg1: number): RecordCodecBuilder<Object, Object>;
    static instance(): RecordCodecBuilder$Instance<Object>;
    static mapCodec(paramarg0: (param0: Object | null) => Object | null): MapCodec<Object>;
    static of(paramarg0: (param0: Object | null) => Object | null, paramarg1: MapCodec<Object>): RecordCodecBuilder<Object, Object>;
    static of(paramarg0: (param0: Object | null) => Object | null, paramarg1: string, paramarg2: Codec<Object>): RecordCodecBuilder<Object, Object>;
    static point(paramarg0: Object | null): RecordCodecBuilder<Object, Object>;
    static point(paramarg0: Object | null, paramarg1: Lifecycle): RecordCodecBuilder<Object, Object>;
    static stable(paramarg0: Object | null): RecordCodecBuilder<Object, Object>;
    static unbox(paramarg0: App<Object, Object>): RecordCodecBuilder<Object, Object>;
    private constructor(arg0: (param0: O) => F, arg1: (param0: O) => MapEncoder<F>, arg2: MapDecoder<F>)
    // private decoder: MapDecoder<F>;
    // private encoder: (param0: O) => MapEncoder<F>;
    // private getter: (param0: O) => F;
    dependent(arg0: (param0: O) => E, arg1: MapEncoder<E>, arg2: (param0: F) => MapDecoder<E>): RecordCodecBuilder<O, E>;
}