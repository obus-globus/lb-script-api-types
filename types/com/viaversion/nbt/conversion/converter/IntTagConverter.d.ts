import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { IntTag } from '../../../../../com/viaversion/nbt/tag/IntTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntTagConverter extends Object implements TagConverter<IntTag, number> {
    constructor()
    convert(arg0: IntTag): number;
    convert(arg0: number): IntTag;
}