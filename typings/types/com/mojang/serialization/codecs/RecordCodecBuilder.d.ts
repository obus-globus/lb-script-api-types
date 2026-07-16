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
export class RecordCodecBuilder<O extends unknown, F extends unknown> extends Object implements App<RecordCodecBuilder$Mu<O>, F> {
    static build<O extends unknown>(paramarg0: App<RecordCodecBuilder$Mu<O>, O>): MapCodec<O>;
    static create<O extends unknown>(paramarg0: (param0: RecordCodecBuilder$Instance<O>) => App<RecordCodecBuilder$Mu<O>, O>): Codec<O>;
    static deprecated<O extends unknown, F extends unknown>(paramarg0: F, paramarg1: number): RecordCodecBuilder<O, F>;
    static instance<O extends unknown>(): RecordCodecBuilder$Instance<O>;
    static mapCodec<O extends unknown>(paramarg0: (param0: RecordCodecBuilder$Instance<O>) => App<RecordCodecBuilder$Mu<O>, O>): MapCodec<O>;
    static of<O extends unknown, F extends unknown>(paramarg0: (param0: O) => F, paramarg1: MapCodec<F>): RecordCodecBuilder<O, F>;
    static of<O extends unknown, F extends unknown>(paramarg0: (param0: O) => F, paramarg1: string, paramarg2: Codec<F>): RecordCodecBuilder<O, F>;
    static point<O extends unknown, F extends unknown>(paramarg0: F): RecordCodecBuilder<O, F>;
    static point<O extends unknown, F extends unknown>(paramarg0: F, paramarg1: Lifecycle): RecordCodecBuilder<O, F>;
    static stable<O extends unknown, F extends unknown>(paramarg0: F): RecordCodecBuilder<O, F>;
    static unbox<O extends unknown, F extends unknown>(paramarg0: App<RecordCodecBuilder$Mu<O>, F>): RecordCodecBuilder<O, F>;
    private constructor(arg0: (param0: O) => F, arg1: (param0: O) => MapEncoder<F>, arg2: MapDecoder<F>)
    // private decoder: MapDecoder<F>;
    // private encoder: (param0: O) => MapEncoder<F>;
    // private getter: (param0: O) => F;
    dependent<E extends unknown>(arg0: (param0: O) => E, arg1: MapEncoder<E>, arg2: (param0: F) => MapDecoder<E>): RecordCodecBuilder<O, E>;
}