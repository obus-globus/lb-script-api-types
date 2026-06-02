import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { ShortTag } from '../../../../../com/viaversion/nbt/tag/ShortTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortTagConverter extends Object implements TagConverter<ShortTag, number> {
    constructor()
    convert(arg0: ShortTag): number;
    convert(arg0: number): ShortTag;
}