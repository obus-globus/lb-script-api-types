import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { IntArrayTag } from '../../../../../com/viaversion/nbt/tag/IntArrayTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntArrayTagConverter extends Object implements TagConverter<IntArrayTag, number[]> {
    constructor()
    convert(arg0: IntArrayTag): number[];
    convert(arg0: number[]): IntArrayTag;
}