import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { SNbtDeserializer_v1_12 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/v1_12/SNbtDeserializer_v1_12.d.ts'
import type { StringReader_v1_12 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/v1_12/StringReader_v1_12.d.ts'
export class SNbtDeserializer_v1_13 extends SNbtDeserializer_v1_12 {
    constructor()
    readListOrArray(arg0: StringReader_v1_12): Tag;
}