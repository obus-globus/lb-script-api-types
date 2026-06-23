import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Decoder$Boxed } from '../../../com/mojang/serialization/Decoder$Boxed.d.ts'
import type { Decoder$Simple } from '../../../com/mojang/serialization/Decoder$Simple.d.ts'
import type { Decoder$Terminal } from '../../../com/mojang/serialization/Decoder$Terminal.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapDecoder } from '../../../com/mojang/serialization/MapDecoder.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Decoder<A extends unknown> extends Object {
    boxed(): Decoder$Boxed<A>;
    decode<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<A, T>>;
    decode<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<Pair<A, T>>;
    fieldOf(arg0: string): MapDecoder<A>;
    flatMap<B extends unknown>(arg0: (param0: A) => DataResult<B>): Decoder<B>;
    map<B extends unknown>(arg0: (param0: A) => B): Decoder<B>;
    parse<T extends unknown>(arg0: Dynamic<T>): DataResult<A>;
    parse<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<A>;
    promotePartial(arg0: (param0: string) => void): Decoder<A>;
    simple(): Decoder$Simple<A>;
    terminal(): Decoder$Terminal<A>;
    withLifecycle(arg0: Lifecycle): Decoder<A>;
}