import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ComponentRewriter1_20_5$SimpleDataConverter<T extends Object | number | string | boolean> extends Object{
    convert(arg0: T): Tag;
}