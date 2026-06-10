import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { FieldMapCodec$Builder } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class FieldMapCodec$Builder$OptionalStage<T extends Object | number | string | boolean> extends FieldMapCodec$Builder<T> {
    constructor(arg0: Codec<T>, arg1: string)
    defaulted(arg0: T): MapCodec<T>;
    defaulted(arg0: (param0: T) => boolean, arg1: () => T): MapCodec<T>;
    elseGet(arg0: () => T): MapCodec<T>;
}