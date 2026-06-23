import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class FieldMapCodec$Builder<T extends unknown> extends Object {
    constructor(arg0: Codec<T>, arg1: string)
    // private codec: Codec<T>;
    // private fieldName: string;
    build(): MapCodec<T>;
}