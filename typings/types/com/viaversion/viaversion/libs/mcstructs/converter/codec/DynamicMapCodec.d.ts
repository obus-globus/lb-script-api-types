import type { DataConverter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { SerializedData } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/SerializedData.d.ts'
import type { Codec } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { DataDeserializer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/DataDeserializer.d.ts'
import type { DataSerializer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/DataSerializer.d.ts'
import type { ThrowingFunction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/ThrowingFunction.d.ts'
import type { MapCodec } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { FieldMapCodec$Builder$Stage1 } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder$Stage1.d.ts'
import type { Either } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Either.d.ts'
import type { Result } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { IdentifiedType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/IdentifiedType.d.ts'
import type { NamedType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/NamedType.d.ts'
import type { Identifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DynamicMapCodec<K extends unknown, V extends unknown> extends Object implements Codec<Map<K, V>> {
    static BOOLEAN: Codec<boolean>;
    static BYTE: Codec<number>;
    static BYTE_ARRAY: Codec<number[]>;
    static DOUBLE: Codec<number>;
    static FLOAT: Codec<number>;
    static INTEGER: Codec<number>;
    static INT_ARRAY: Codec<number[]>;
    static INT_ARRAY_UUID: Codec<UUID>;
    static LONG: Codec<number>;
    static LONG_ARRAY: Codec<number[]>;
    static RAW: Codec<SerializedData<Object>>;
    static SHORT: Codec<number>;
    static STRICT_STRING_UUID: Codec<UUID>;
    static STRING: Codec<string>;
    static STRING_IDENTIFIER: Codec<Identifier>;
    static STRING_IDENTIFIER_PATH: Codec<string>;
    static UNIT: Codec<boolean>;
    static UNSIGNED_BYTE: Codec<number>;
    static compactList<T extends unknown>(paramarg0: Codec<T>): Codec<T[]>;
    static compactList<T extends unknown>(paramarg0: Codec<T>, paramarg1: Codec<T[]>): Codec<T[]>;
    static either<L extends unknown, R extends unknown>(paramarg0: Codec<L>, paramarg1: Codec<R>): Codec<Either<L, R>>;
    static failing<T extends unknown>(paramarg0: string): Codec<T>;
    static identified<T extends IdentifiedType>(paramarg0: T[]): Codec<T>;
    static lazyInit<T extends unknown>(paramarg0: () => Codec<T>): Codec<T>;
    static mapOf<K extends unknown, V extends unknown>(paramarg0: Codec<K>, paramarg1: Codec<V>): Codec<Map<K, V>>;
    static mapOf<K extends unknown, V extends unknown>(paramarg0: Codec<K>, paramarg1: (param0: K) => Codec<V>): Codec<Map<K, V>>;
    static minExclusiveFloat(paramarg0: number): Codec<number>;
    static minFloat(paramarg0: number): Codec<number>;
    static minInt(paramarg0: number): Codec<number>;
    static named<T extends NamedType>(...paramarg0: T[]): Codec<T>;
    static ofThrowing<T extends unknown>(paramarg0: (param0: DataConverter<Object>, param1: T) => Result<Object>, paramarg1: (param0: DataConverter<Object>, param1: Object | null) => Result<T>): Codec<T>;
    static oneOf<T extends unknown>(...paramarg0: Codec<T>[]): Codec<T>;
    static rangedFloat(paramarg0: number, paramarg1: number): Codec<number>;
    static rangedInt(paramarg0: number, paramarg1: number): Codec<number>;
    static recursive<T extends unknown>(paramarg0: (param0: Codec<T>) => Codec<T>): Codec<T>;
    static sizedString(paramarg0: number, paramarg1: number): Codec<string>;
    static unit<T extends unknown>(paramarg0: () => T): Codec<T>;
    static withAlternative<T extends unknown, A extends unknown>(paramarg0: Codec<T>, paramarg1: Codec<A>, paramarg2: (param0: A) => T): Codec<T>;
    static withAlternative<T extends unknown>(paramarg0: Codec<T>, paramarg1: Codec<T>): Codec<T>;
    constructor(arg0: Codec<K>, arg1: (param0: K) => Codec<V>)
    // private keyCodec: Codec<K>;
    // private keyToValueCodec: (param0: K) => Codec<V>;
    compactListOf(): Codec<Map<K, V>[]>;
    converterFlatMap<N extends unknown>(arg0: (param0: DataConverter<Object>, param1: N) => Result<Map<K, V>>, arg1: (param0: DataConverter<Object>, param1: Map<K, V>) => Result<N>): Codec<N>;
    converterVerified(arg0: (param0: DataConverter<Object>, param1: Map<K, V>) => Result<void>): Codec<Map<K, V>>;
    deserialize<S extends unknown>(arg0: DataConverter<S>, arg1: S): Result<Map<K, V>>;
    flatMap<N extends unknown>(arg0: (param0: N) => Result<Map<K, V>>, arg1: (param0: Map<K, V>) => Result<N>): Codec<N>;
    listOf(): Codec<Map<K, V>[]>;
    listOf(arg0: number): Codec<Map<K, V>[]>;
    listOf(arg0: number, arg1: number): Codec<Map<K, V>[]>;
    map<N extends unknown>(arg0: (param0: N) => Map<K, V>, arg1: (param0: Map<K, V>) => N): Codec<N>;
    mapCodec(arg0: string): FieldMapCodec$Builder$Stage1<Map<K, V>>;
    mapThrowing<N extends unknown>(arg0: (param0: N) => Map<K, V>, arg1: (param0: Map<K, V>) => N): Codec<N>;
    nonEmptyList(): Codec<Map<K, V>[]>;
    optionalListOf(): Codec<Map<K, V>[]>;
    optionalListOf(arg0: number): Codec<Map<K, V>[]>;
    optionalListOf(arg0: number, arg1: number): Codec<Map<K, V>[]>;
    serialize<S extends unknown>(arg0: DataConverter<S>, arg1: Map<K, V>): Result<S>;
    typed<N extends unknown>(arg0: (param0: N) => Map<K, V>, arg1: (param0: Map<K, V>) => MapCodec<N>): Codec<N>;
    typed<N extends unknown>(arg0: string, arg1: (param0: N) => Map<K, V>, arg2: (param0: Map<K, V>) => MapCodec<N>): Codec<N>;
    typedMap<N extends unknown>(arg0: (param0: N) => Map<K, V>, arg1: (param0: Map<K, V>) => MapCodec<N>): MapCodec<N>;
    typedMap<N extends unknown>(arg0: string, arg1: (param0: N) => Map<K, V>, arg2: (param0: Map<K, V>) => MapCodec<N>): MapCodec<N>;
    verified(arg0: (param0: Map<K, V>) => Result<void>): Codec<Map<K, V>>;
}