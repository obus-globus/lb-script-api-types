import type { DataConverter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { DataDeserializer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/DataDeserializer.d.ts'
import type { DataSerializer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/DataSerializer.d.ts'
import type { ThrowingFunction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/ThrowingFunction.d.ts'
import type { MapCodec } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { FieldMapCodec$Builder$Stage1 } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder$Stage1.d.ts'
import type { Result } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Codec<T extends Object | number | string | boolean> extends DataDeserializer<T>, DataSerializer<T>, Object{
    compactListOf(): Codec<T[]>;
    converterFlatMap(arg0: (param0: DataConverter<Object>, param1: N) => Result<T>, arg1: (param0: DataConverter<Object>, param1: T) => Result<N>): Codec<N>;
    converterVerified(arg0: (param0: DataConverter<Object>, param1: T) => Result<void>): Codec<T>;
    flatMap(arg0: (param0: N) => Result<T>, arg1: (param0: T) => Result<N>): Codec<N>;
    listOf(): Codec<T[]>;
    listOf(arg0: number): Codec<T[]>;
    listOf(arg0: number, arg1: number): Codec<T[]>;
    map(arg0: (param0: N) => T, arg1: (param0: T) => N): Codec<N>;
    mapCodec(arg0: string): FieldMapCodec$Builder$Stage1<T>;
    mapThrowing(arg0: (param0: N) => T, arg1: (param0: T) => N): Codec<N>;
    nonEmptyList(): Codec<T[]>;
    optionalListOf(): Codec<T[]>;
    optionalListOf(arg0: number): Codec<T[]>;
    optionalListOf(arg0: number, arg1: number): Codec<T[]>;
    typed(arg0: (param0: N) => T, arg1: (param0: T) => MapCodec<N>): Codec<N>;
    typed(arg0: string, arg1: (param0: N) => T, arg2: (param0: T) => MapCodec<N>): Codec<N>;
    typedMap(arg0: (param0: N) => T, arg1: (param0: T) => MapCodec<N>): MapCodec<N>;
    typedMap(arg0: string, arg1: (param0: N) => T, arg2: (param0: T) => MapCodec<N>): MapCodec<N>;
    verified(arg0: (param0: T) => Result<void>): Codec<T>;
}