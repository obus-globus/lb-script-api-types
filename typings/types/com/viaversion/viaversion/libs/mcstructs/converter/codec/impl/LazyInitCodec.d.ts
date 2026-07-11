import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { SerializedData } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/SerializedData.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { DataDeserializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/DataDeserializer.d.ts'
import type { DataSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/DataSerializer.d.ts'
import type { ThrowingFunction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/ThrowingFunction.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { FieldMapCodec$Builder$Stage1 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder$Stage1.d.ts'
import type { Either } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Either.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { IdentifiedType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/IdentifiedType.d.ts'
import type { NamedType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/NamedType.d.ts'
import type { Identifier } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { UUID } from '../../../../../../../../java/util/UUID.d.ts'
import type { BiFunction } from '../../../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class LazyInitCodec<T extends unknown> extends Object implements Codec<T> {
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
    static compactList(paramarg0: Codec<Object>): Codec<(Object | null)[]>;
    static compactList(paramarg0: Codec<Object>, paramarg1: Codec<(Object | null)[]>): Codec<(Object | null)[]>;
    static either(paramarg0: Codec<Object>, paramarg1: Codec<Object>): Codec<Either<Object, Object>>;
    static failing(paramarg0: string): Codec<Object>;
    static identified(paramarg0: Object | null): Codec<IdentifiedType>;
    static lazyInit(paramarg0: () => Codec<Object>): Codec<Object>;
    static mapOf(paramarg0: Codec<Object>, paramarg1: Codec<Object>): Codec<Map<Object | null, Object | null>>;
    static mapOf(paramarg0: Codec<Object>, paramarg1: (param0: Object | null) => Codec<Object>): Codec<Map<Object | null, Object | null>>;
    static minExclusiveFloat(paramarg0: number): Codec<number>;
    static minFloat(paramarg0: number): Codec<number>;
    static minInt(paramarg0: number): Codec<number>;
    static named(...paramarg0: Object | null): Codec<NamedType>;
    static ofThrowing(paramarg0: (param0: DataConverter<Object>, param1: Object | null) => Result<Object>, paramarg1: (param0: DataConverter<Object>, param1: Object | null) => Result<Object>): Codec<Object>;
    static oneOf(...paramarg0: Object | null): Codec<Object>;
    static rangedFloat(paramarg0: number, paramarg1: number): Codec<number>;
    static rangedInt(paramarg0: number, paramarg1: number): Codec<number>;
    static recursive(paramarg0: (param0: Codec<Object>) => Codec<Object>): Codec<Object>;
    static sizedString(paramarg0: number, paramarg1: number): Codec<string>;
    static unit(paramarg0: () => Object | null): Codec<Object>;
    static withAlternative(paramarg0: Codec<Object>, paramarg1: Codec<Object>, paramarg2: (param0: Object | null) => Object | null): Codec<Object>;
    static withAlternative(paramarg0: Codec<Object>, paramarg1: Codec<Object>): Codec<Object>;
    constructor(arg0: () => Codec<T>)
    // private codec: Codec<T>;
    // private codecSupplier: () => Codec<T>;
    // private initialized: boolean;
    compactListOf(): Codec<T[]>;
    converterFlatMap<N extends unknown>(arg0: (param0: DataConverter<Object>, param1: N) => Result<T>, arg1: (param0: DataConverter<Object>, param1: T) => Result<N>): Codec<N>;
    converterVerified(arg0: (param0: DataConverter<Object>, param1: T) => Result<void>): Codec<T>;
    deserialize<S extends unknown>(arg0: DataConverter<S>, arg1: S): Result<T>;
    flatMap<N extends unknown>(arg0: (param0: N) => Result<T>, arg1: (param0: T) => Result<N>): Codec<N>;
    // private getCodec(): Codec<T>;
    listOf(): Codec<T[]>;
    listOf(arg0: number): Codec<T[]>;
    listOf(arg0: number, arg1: number): Codec<T[]>;
    map<N extends unknown>(arg0: (param0: N) => T, arg1: (param0: T) => N): Codec<N>;
    mapCodec(arg0: string): FieldMapCodec$Builder$Stage1<T>;
    mapThrowing<N extends unknown>(arg0: (param0: N) => T, arg1: (param0: T) => N): Codec<N>;
    nonEmptyList(): Codec<T[]>;
    optionalListOf(): Codec<T[]>;
    optionalListOf(arg0: number): Codec<T[]>;
    optionalListOf(arg0: number, arg1: number): Codec<T[]>;
    serialize<S extends unknown>(arg0: DataConverter<S>, arg1: T): Result<S>;
    typed<N extends unknown>(arg0: (param0: N) => T, arg1: (param0: T) => MapCodec<N>): Codec<N>;
    typed<N extends unknown>(arg0: string, arg1: (param0: N) => T, arg2: (param0: T) => MapCodec<N>): Codec<N>;
    typedMap<N extends unknown>(arg0: (param0: N) => T, arg1: (param0: T) => MapCodec<N>): MapCodec<N>;
    typedMap<N extends unknown>(arg0: string, arg1: (param0: N) => T, arg2: (param0: T) => MapCodec<N>): MapCodec<N>;
    verified(arg0: (param0: T) => Result<void>): Codec<T>;
}