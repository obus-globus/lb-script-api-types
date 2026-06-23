import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { FieldMapCodec$Builder } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder.d.ts'
import type { FieldMapCodec$Builder$Stage2 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/impl/FieldMapCodec$Builder$Stage2.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class FieldMapCodec$Builder$Stage1<T extends unknown> extends FieldMapCodec$Builder<T> {
    constructor(arg0: Codec<T>, arg1: string)
    build(): MapCodec<T>;
    optional(): FieldMapCodec$Builder$Stage2<T>;
    required(): MapCodec<T>;
}