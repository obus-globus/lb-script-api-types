import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { DoubleTag } from '../../../../../com/viaversion/nbt/tag/DoubleTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleTagConverter extends Object implements TagConverter<DoubleTag, number> {
    constructor()
    convert(arg0: DoubleTag): number;
    convert(arg0: number): DoubleTag;
}