import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { FloatTag } from '../../../../../com/viaversion/nbt/tag/FloatTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatTagConverter extends Object implements TagConverter<FloatTag, number> {
    constructor()
    convert(arg0: FloatTag): number;
    convert(arg0: number): FloatTag;
}