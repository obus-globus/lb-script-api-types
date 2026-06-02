import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { FieldMapCodec$Builder$OptionalStage } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder$OptionalStage.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class FieldMapCodec$Builder$Stage3<T extends Object | number | string | boolean> extends FieldMapCodec$Builder$OptionalStage<T> {
    constructor(arg0: Codec<T>, arg1: string)
    build(): MapCodec<T>;
}