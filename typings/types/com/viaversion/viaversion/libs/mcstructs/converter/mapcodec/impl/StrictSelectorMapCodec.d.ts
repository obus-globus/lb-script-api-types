import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { ThrowingFunction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/ThrowingFunction.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { FieldMapCodec$Builder$Stage1 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder$Stage1.d.ts'
import type { Either } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Either.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StrictSelectorMapCodec<T extends unknown> extends Object implements MapCodec<T> {
    static UNIT: MapCodec<boolean>;
    static either<L extends unknown, R extends unknown>(paramarg0: MapCodec<L>, paramarg1: MapCodec<R>): MapCodec<Either<L, R>>;
    static failing<N extends unknown>(paramarg0: string): MapCodec<N>;
    static lazyInit<T extends unknown>(paramarg0: () => MapCodec<T>): MapCodec<T>;
    static optionalKey<N extends unknown>(paramarg0: Codec<N>, paramarg1: string): MapCodec<N>;
    static optionalLenientKey<N extends unknown>(paramarg0: Codec<N>, paramarg1: string): MapCodec<N>;
    static recursive<T extends unknown>(paramarg0: (param0: Codec<T>) => MapCodec<T>): MapCodec<T>;
    static requiredKey<N extends unknown>(paramarg0: Codec<N>, paramarg1: string): MapCodec<N>;
    static unit<N extends unknown>(paramarg0: () => N): MapCodec<N>;
    constructor(arg0: string, arg1: MapCodec<T>, arg2: MapCodec<T>)
    // private fieldName: string;
    // private primary: MapCodec<T>;
    // private secondary: MapCodec<T>;
    asCodec(): Codec<T>;
    defaulted(arg0: T): MapCodec<T>;
    defaulted(arg0: (param0: T) => boolean, arg1: () => T): MapCodec<T>;
    deserialize<S extends unknown>(arg0: DataConverter<S>, arg1: Map<S, S>): Result<T>;
    elseGet(arg0: () => T): MapCodec<T>;
    field(arg0: string): FieldMapCodec$Builder$Stage1<T>;
    map<N extends unknown>(arg0: (param0: N) => T, arg1: (param0: T) => N): MapCodec<N>;
    mapThrowing<N extends unknown>(arg0: (param0: N) => T, arg1: (param0: T) => N): MapCodec<N>;
    serialize<S extends unknown>(arg0: DataConverter<S>, arg1: Map<S, S>, arg2: T): Result<Map<S, S>>;
    verified(arg0: (param0: T) => Result<void>): MapCodec<T>;
}