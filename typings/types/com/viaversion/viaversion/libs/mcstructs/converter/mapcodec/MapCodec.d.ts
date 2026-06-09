import type { Codec } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { ThrowingFunction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/ThrowingFunction.d.ts'
import type { MapDeserializer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapDeserializer.d.ts'
import type { MapSerializer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapSerializer.d.ts'
import type { FieldMapCodec$Builder$Stage1 } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder$Stage1.d.ts'
import type { Result } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface MapCodec<T extends Object | number | string | boolean> extends MapDeserializer<T>, MapSerializer<T>, Object {
    asCodec(): Codec<T>;
    defaulted(arg0: T): MapCodec<T>;
    defaulted(arg0: (param0: T) => kotlin.Boolean, arg1: () => T): MapCodec<T>;
    elseGet(arg0: () => T): MapCodec<T>;
    field(arg0: string): FieldMapCodec$Builder$Stage1<T>;
    map(arg0: (param0: N) => T, arg1: (param0: T) => N): MapCodec<N>;
    mapThrowing(arg0: (param0: N) => T, arg1: (param0: T) => N): MapCodec<N>;
    verified(arg0: (param0: T) => Result<void>): MapCodec<T>;
}