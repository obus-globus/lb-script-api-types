import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface SNbtSerializer extends Object{
    serialize(arg0: Tag): string;
}