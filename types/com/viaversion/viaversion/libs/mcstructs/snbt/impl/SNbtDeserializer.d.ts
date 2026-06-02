import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface SNbtDeserializer<T extends Tag> extends Object{
    deserialize(arg0: string): T;
    deserializeValue(arg0: string): Tag;
}