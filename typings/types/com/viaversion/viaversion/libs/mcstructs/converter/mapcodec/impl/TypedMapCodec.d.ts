import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { ThrowingFunction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/ThrowingFunction.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { FieldMapCodec$Builder$Stage1 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder$Stage1.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TypedMapCodec<K extends unknown, V extends unknown> extends Object implements MapCodec<V> {
    static UNIT: MapCodec<boolean>;
    constructor(arg0: string, arg1: Codec<K>, arg2: (param0: V) => K, arg3: (param0: K) => MapCodec<V>)
    // private continuation: (param0: K) => MapCodec<V>;
    // private keyCodec: Codec<K>;
    // private typeKey: string;
    // private typeMapper: (param0: V) => K;
    asCodec(): Codec<V>;
    defaulted(arg0: V): MapCodec<V>;
    defaulted(arg0: (param0: V) => boolean, arg1: () => V): MapCodec<V>;
    deserialize<S extends unknown>(arg0: DataConverter<S>, arg1: JavaMap<S, S>): Result<V>;
    elseGet(arg0: () => V): MapCodec<V>;
    field(arg0: string): FieldMapCodec$Builder$Stage1<V>;
    map<N extends unknown>(arg0: (param0: N) => V, arg1: (param0: V) => N): MapCodec<N>;
    mapThrowing<N extends unknown>(arg0: (param0: N) => V, arg1: (param0: V) => N): MapCodec<N>;
    serialize<S extends unknown>(arg0: DataConverter<S>, arg1: JavaMap<S, S>, arg2: V): Result<JavaMap<S, S>>;
    verified(arg0: (param0: V) => Result<void>): MapCodec<V>;
}