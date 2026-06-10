import type { NumberTag } from '../../../../../../../../com/viaversion/nbt/tag/NumberTag.d.ts'
import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { SNbtDeserializeException } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/exceptions/SNbtDeserializeException.d.ts'
import type { SNbtDeserializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/SNbtDeserializer.d.ts'
import type { StringReader_v1_12 } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/v1_12/StringReader_v1_12.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../../java/util/Map$Entry.d.ts'
export class SNbtDeserializer_v1_12 extends Object implements SNbtDeserializer<Map$Entry<string, Tag>[]> {
    constructor()
    deserialize(arg0: string): Map$Entry<string, Tag>[];
    deserializeValue(arg0: string): Tag;
    hasNextValue(arg0: StringReader_v1_12): boolean;
    isQuote(arg0: string): boolean;
    makeException(arg0: StringReader_v1_12, arg1: string): SNbtDeserializeException;
    makeReader(arg0: string): StringReader_v1_12;
    readArray(arg0: StringReader_v1_12): Tag;
    readCompound(arg0: StringReader_v1_12): Map$Entry<string, Tag>[];
    readList(arg0: StringReader_v1_12): Tag[];
    readListOrArray(arg0: StringReader_v1_12): Tag;
    readNumber(arg0: string): Tag;
    readPrimitive(arg0: StringReader_v1_12): Tag;
    readPrimitive(arg0: string): Tag;
    readPrimitiveList<T extends NumberTag>(arg0: StringReader_v1_12, arg1: Class<T>, arg2: Class<Tag>): T[];
    readValue(arg0: StringReader_v1_12): Tag;
}