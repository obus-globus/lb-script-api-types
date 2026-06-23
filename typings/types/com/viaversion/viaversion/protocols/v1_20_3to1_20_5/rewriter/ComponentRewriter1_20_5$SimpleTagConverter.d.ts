import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ComponentRewriter1_20_5$SimpleTagConverter<T extends unknown> extends Object{
    convert(arg0: Tag): T;
}