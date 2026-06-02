import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { LongArrayTag } from '../../../../../com/viaversion/nbt/tag/LongArrayTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongArrayTagConverter extends Object implements TagConverter<LongArrayTag, number[]> {
    constructor()
    convert(arg0: LongArrayTag): number[];
    convert(arg0: number[]): LongArrayTag;
}