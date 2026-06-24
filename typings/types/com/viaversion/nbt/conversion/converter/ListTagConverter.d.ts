import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ListTagConverter extends Object implements TagConverter<Tag[], (Object | null)[]> {
    constructor()
    convert(arg0: Tag[]): (Object | null)[];
    convert(arg0: (Object | null)[]): Tag[];
}