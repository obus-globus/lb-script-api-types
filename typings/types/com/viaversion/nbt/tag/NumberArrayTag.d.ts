import type { NumberTag } from '../../../../com/viaversion/nbt/tag/NumberTag.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface NumberArrayTag extends Tag, Object{
    copy(): NumberArrayTag;
    length(): number;
    toListTag(): NumberTag[];
}