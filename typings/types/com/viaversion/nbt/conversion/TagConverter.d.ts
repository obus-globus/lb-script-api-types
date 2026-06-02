import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TagConverter<T extends Tag, V extends Object | number | string | boolean> extends Object{
    convert(arg0: T): V;
    convert(arg0: V): T;
}